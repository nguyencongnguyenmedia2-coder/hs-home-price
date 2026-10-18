import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product, PriceVersion, Quotation, QuotationItem, User, FilterState, AuditLog } from '../types';
import { INITIAL_PRODUCTS, INITIAL_PRICE_VERSION } from '../data/initialProducts';
import { generateQuotationCode } from '../utils/formatters';
import { supabase } from '../utils/supabaseClient';

interface AppContextType {
  // User & Auth
  currentUser: User;
  setCurrentUser: (user: User) => void;
  switchRole: (role: 'admin' | 'sales') => void;
  logoutAdmin: () => Promise<void>;
  isAdmin: boolean;

  // Products & Versions
  products: Product[];
  currentVersion: PriceVersion;
  versionHistory: PriceVersion[];
  updateProductsWithNewVersion: (newProducts: Product[], version: PriceVersion) => void;

  // Filters & Search
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  resetFilters: () => void;

  // Recent Views
  recentProductIds: string[];
  addToRecent: (productId: string) => void;

  // Favorites
  favoriteIds: string[];
  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;

  // Quotation Cart
  quotationItems: QuotationItem[];
  addToQuotation: (product: Product, priceKey?: string, qty?: number) => void;
  updateQuotationItemQty: (itemId: string, qty: number) => void;
  updateQuotationItemPriceKey: (itemId: string, priceKey: string) => void;
  removeFromQuotation: (itemId: string) => void;
  clearQuotationCart: () => void;
  savedQuotations: Quotation[];
  saveCurrentQuotation: (customerInfo: { name: string; phone?: string; address?: string; notes?: string }) => Quotation;
  updateQuotationStatus: (id: string, status: Quotation['status']) => void;

  // Selected Product for Detail Modal
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;

  // Audit Logs
  auditLogs: AuditLog[];
  addAuditLog: (action: string, details: string) => void;

  // UI state
  activeTab: 'home' | 'catalog' | 'quotation' | 'favorites' | 'admin' | 'account';
  setActiveTab: (tab: 'home' | 'catalog' | 'quotation' | 'favorites' | 'admin' | 'account') => void;
}

const DEFAULT_FILTERS: FilterState = {
  searchQuery: '',
  category: 'ALL',
  brand: 'ALL',
  unit: 'ALL',
  priceRange: [0, 20000000],
  sortBy: 'name_asc',
  selectedPriceGroup: 'gia_khach_le'
};

export const DEFAULT_STAFF_USER: User = {
  id: 'USR-STAFF',
  name: 'Nhân viên thị trường',
  email: 'nhanvien@hoasenhome.vn',
  role: 'sales',
  branch: 'Hoa Sen Home - Toàn hệ thống'
};

export const DEFAULT_ADMIN_USER: User = {
  id: 'USR-ADMIN',
  name: 'Quản trị viên (Admin)',
  email: 'admin@hoasenhome.vn',
  role: 'admin',
  branch: 'Trụ sở Tập đoàn Hoa Sen'
};

const DEFAULT_USERS: Record<'sales' | 'admin', User> = {
  sales: DEFAULT_STAFF_USER,
  admin: DEFAULT_ADMIN_USER
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Current user (Staff by default - no login required)
  const [currentUser, setCurrentUser] = useState<User>(() => {
    const saved = localStorage.getItem('hs_current_user');
    return saved ? JSON.parse(saved) : DEFAULT_STAFF_USER;
  });

  // Products
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('hs_products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  // Version
  const [currentVersion, setCurrentVersion] = useState<PriceVersion>(() => {
    const saved = localStorage.getItem('hs_current_version');
    return saved ? JSON.parse(saved) : INITIAL_PRICE_VERSION;
  });

  const [versionHistory, setVersionHistory] = useState<PriceVersion[]>(() => {
    const saved = localStorage.getItem('hs_version_history');
    return saved ? JSON.parse(saved) : [INITIAL_PRICE_VERSION];
  });

  // Filters
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);

  // Recents
  const [recentProductIds, setRecentProductIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('hs_recent_products');
    return saved ? JSON.parse(saved) : [];
  });

  // Favorites
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('hs_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  // Quotation Cart Items
  const [quotationItems, setQuotationItems] = useState<QuotationItem[]>(() => {
    const saved = localStorage.getItem('hs_quotation_cart');
    return saved ? JSON.parse(saved) : [];
  });

  // Saved Quotations history
  const [savedQuotations, setSavedQuotations] = useState<Quotation[]>(() => {
    const saved = localStorage.getItem('hs_saved_quotations');
    return saved ? JSON.parse(saved) : [];
  });

  // Detail Modal
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Active Tab with /admin URL detection
  const [activeTab, setActiveTabState] = useState<'home' | 'catalog' | 'quotation' | 'favorites' | 'admin' | 'account'>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path === '/admin' || path.startsWith('/admin') || window.location.hash === '#admin') {
        return 'admin';
      }
    }
    return 'home';
  });

  const setActiveTab = (tab: 'home' | 'catalog' | 'quotation' | 'favorites' | 'admin' | 'account') => {
    setActiveTabState(tab);
    if (typeof window !== 'undefined') {
      if (tab === 'admin') {
        if (window.location.pathname !== '/admin') {
          window.history.pushState(null, '', '/admin');
        }
      } else {
        if (window.location.pathname === '/admin') {
          window.history.pushState(null, '', '/');
        }
      }
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname === '/admin' || window.location.pathname.startsWith('/admin') || window.location.hash === '#admin') {
        setActiveTabState('admin');
      } else {
        setActiveTabState('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Audit Logs
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>(() => {
    const saved = localStorage.getItem('hs_audit_logs');
    return saved ? JSON.parse(saved) : [
      {
        id: 'LOG-INIT',
        timestamp: new Date().toISOString(),
        userId: 'SYSTEM',
        userName: 'Hệ thống',
        action: 'Khởi tạo bảng giá ban đầu',
        details: 'Đã nạp thành công 292 sản phẩm từ file Copy of BẢNG GIÁ CCDC 0206.xlsx'
      }
    ];
  });

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem('hs_current_user', JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('hs_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('hs_current_version', JSON.stringify(currentVersion));
  }, [currentVersion]);

  useEffect(() => {
    localStorage.setItem('hs_version_history', JSON.stringify(versionHistory));
  }, [versionHistory]);

  useEffect(() => {
    localStorage.setItem('hs_recent_products', JSON.stringify(recentProductIds));
  }, [recentProductIds]);

  useEffect(() => {
    localStorage.setItem('hs_favorites', JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  useEffect(() => {
    localStorage.setItem('hs_quotation_cart', JSON.stringify(quotationItems));
  }, [quotationItems]);

  useEffect(() => {
    localStorage.setItem('hs_saved_quotations', JSON.stringify(savedQuotations));
  }, [savedQuotations]);

  // Listen to Supabase Auth state changes
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        const userMeta = session.user.user_metadata || {};
        setCurrentUser({
          id: session.user.id,
          name: userMeta.full_name || session.user.email?.split('@')[0] || 'Quản trị viên (Admin)',
          email: session.user.email || 'admin@hoasenhome.vn',
          role: 'admin',
          branch: userMeta.branch || 'Trụ sở Tập đoàn Hoa Sen'
        });
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const userMeta = session.user.user_metadata || {};
        setCurrentUser({
          id: session.user.id,
          name: userMeta.full_name || session.user.email?.split('@')[0] || 'Quản trị viên (Admin)',
          email: session.user.email || 'admin@hoasenhome.vn',
          role: 'admin',
          branch: userMeta.branch || 'Trụ sở Tập đoàn Hoa Sen'
        });
      } else {
        // Return to standard staff mode (no login required)
        setCurrentUser(DEFAULT_STAFF_USER);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const addAuditLog = (action: string, details: string) => {
    const newLog: AuditLog = {
      id: `LOG-${Date.now()}`,
      timestamp: new Date().toISOString(),
      userId: currentUser.id,
      userName: currentUser.name,
      action,
      details
    };
    setAuditLogs(prev => [newLog, ...prev.slice(0, 99)]);
  };

  const switchRole = (role: 'admin' | 'sales') => {
    const targetUser = DEFAULT_USERS[role];
    setCurrentUser(targetUser);
    addAuditLog('Chuyển đổi vai trò', `Chuyển sang vai trò: ${targetUser.role.toUpperCase()} (${targetUser.name})`);
  };

  const logoutAdmin = async () => {
    try {
      await supabase.auth.signOut();
    } catch {
      // ignore
    }
    setCurrentUser(DEFAULT_STAFF_USER);
    localStorage.removeItem('hs_current_user');
    addAuditLog('Đăng xuất Admin', 'Quản trị viên đã đăng xuất về chế độ Nhân viên thị trường');
  };

  const isAdmin = currentUser.role === 'admin';

  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };

  const addToRecent = (productId: string) => {
    setRecentProductIds(prev => {
      const filtered = prev.filter(id => id !== productId);
      return [productId, ...filtered].slice(0, 20);
    });
  };

  const toggleFavorite = (productId: string) => {
    setFavoriteIds(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        return [productId, ...prev];
      }
    });
  };

  const isFavorite = (productId: string) => favoriteIds.includes(productId);

  const addToQuotation = (product: Product, preferredPriceKey?: string, qty = 1) => {
    // Pick default price key according to user's role or preferred key
    let priceKey = preferredPriceKey;
    if (!priceKey || !product.prices[priceKey]) {
      if (currentUser.role === 'sales' && product.prices.gia_khach_le) {
        priceKey = 'gia_khach_le';
      } else if (product.prices.gia_khach_si) {
        priceKey = 'gia_khach_si';
      } else if (product.prices.gia_thau_tho) {
        priceKey = 'gia_thau_tho';
      } else {
        const availableKey = Object.keys(product.prices).find(k => product.prices[k] !== null);
        priceKey = availableKey || 'gia_khach_le';
      }
    }

    const priceObj = product.prices[priceKey];
    const unitPrice = priceObj ? priceObj.value : 0;
    const label = priceObj ? priceObj.label : 'Giá tiêu chuẩn';
    const vatStatus = priceObj ? priceObj.vat : 'chua_xac_dinh';

    setQuotationItems(prev => {
      const existing = prev.find(item => item.productId === product.id && item.selectedPriceKey === priceKey);
      if (existing) {
        return prev.map(item =>
          item.id === existing.id ? { ...item, quantity: item.quantity + qty } : item
        );
      } else {
        const newItem: QuotationItem = {
          id: `ITEM-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
          productId: product.id,
          productName: product.product_name,
          sku: product.sku,
          unit: product.unit,
          specs: product.specs,
          quantity: qty,
          selectedPriceKey: priceKey,
          unitPrice,
          priceLabel: label,
          vatStatus
        };
        return [...prev, newItem];
      }
    });

    addAuditLog('Thêm sản phẩm vào báo giá', `Thêm ${product.product_name} (SL: ${qty})`);
  };

  const updateQuotationItemQty = (itemId: string, qty: number) => {
    if (qty <= 0) {
      removeFromQuotation(itemId);
      return;
    }
    setQuotationItems(prev =>
      prev.map(item => (item.id === itemId ? { ...item, quantity: qty } : item))
    );
  };

  const updateQuotationItemPriceKey = (itemId: string, priceKey: string) => {
    setQuotationItems(prev =>
      prev.map(item => {
        if (item.id === itemId) {
          const prod = products.find(p => p.id === item.productId);
          if (prod && prod.prices[priceKey]) {
            const priceObj = prod.prices[priceKey]!;
            return {
              ...item,
              selectedPriceKey: priceKey,
              unitPrice: priceObj.value,
              priceLabel: priceObj.label,
              vatStatus: priceObj.vat
            };
          }
        }
        return item;
      })
    );
  };

  const removeFromQuotation = (itemId: string) => {
    setQuotationItems(prev => prev.filter(item => item.id !== itemId));
  };

  const clearQuotationCart = () => {
    setQuotationItems([]);
  };

  const saveCurrentQuotation = (customerInfo: { name: string; phone?: string; address?: string; notes?: string }): Quotation => {
    const subtotal = quotationItems.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0);
    // Since unit prices from our excel formula already consider VAT as specified in prices,
    // we display total directly and don't double charge VAT.
    const totalAmount = subtotal;

    const newQuotation: Quotation = {
      id: `QUO-${Date.now()}`,
      code: generateQuotationCode(),
      createdAt: new Date().toISOString(),
      creatorId: currentUser.id,
      creatorName: currentUser.name,
      customerName: customerInfo.name.trim() || 'Khách hàng',
      customerPhone: customerInfo.phone?.trim() || '',
      customerAddress: customerInfo.address?.trim() || '',
      priceVersionId: currentVersion.id,
      priceVersionName: currentVersion.name,
      items: [...quotationItems],
      subtotal,
      vatAmount: 0,
      totalAmount,
      notes: customerInfo.notes?.trim() || '',
      status: 'draft'
    };

    setSavedQuotations(prev => [newQuotation, ...prev]);
    clearQuotationCart();
    addAuditLog('Lập báo giá mới', `Tạo thành công báo giá ${newQuotation.code} cho ${newQuotation.customerName} (${newQuotation.items.length} món)`);
    return newQuotation;
  };

  const updateQuotationStatus = (id: string, status: Quotation['status']) => {
    setSavedQuotations(prev =>
      prev.map(q => (q.id === id ? { ...q, status } : q))
    );
    addAuditLog('Cập nhật trạng thái báo giá', `Báo giá ${id} chuyển sang: ${status}`);
  };

  const updateProductsWithNewVersion = (newProducts: Product[], version: PriceVersion) => {
    setProducts(newProducts);
    setCurrentVersion(version);
    setVersionHistory(prev => [version, ...prev]);
    addAuditLog('Kích hoạt phiên bản bảng giá mới', `Kích hoạt ${version.name} với ${newProducts.length} sản phẩm`);
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        switchRole,
        logoutAdmin,
        isAdmin,
        products,
        currentVersion,
        versionHistory,
        updateProductsWithNewVersion,
        filters,
        setFilters,
        resetFilters,
        recentProductIds,
        addToRecent,
        favoriteIds,
        toggleFavorite,
        isFavorite,
        quotationItems,
        addToQuotation,
        updateQuotationItemQty,
        updateQuotationItemPriceKey,
        removeFromQuotation,
        clearQuotationCart,
        savedQuotations,
        saveCurrentQuotation,
        updateQuotationStatus,
        selectedProduct,
        setSelectedProduct,
        auditLogs,
        addAuditLog,
        activeTab,
        setActiveTab
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
