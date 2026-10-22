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

  // Employee Gatekeeper
  employeeCode: string | null;
  isEmployeeVerified: boolean;
  loginWithEmployeeCode: (code: string) => { success: boolean; message?: string };
  logoutEmployeeCode: () => void;

  // Products & Versions
  products: Product[];
  currentVersion: PriceVersion;
  versionHistory: PriceVersion[];
  updateProductsWithNewVersion: (newProducts: Product[], version: PriceVersion) => void;
  appendProducts: (newProducts: Product[]) => { added: number; updated: number };
  syncAllProductsToCloud: () => Promise<{ success: boolean; count: number; error?: string }>;
  cloudSyncStatus: { isSyncing: boolean; lastSyncedAt: string | null; error: string | null };
  addProduct: (product: Omit<Product, 'id'> & { id?: string }) => Product;
  updateProduct: (product: Product) => void;
  deleteProduct: (productId: string) => void;
  batchUpdatePrices: (productIds: string[], percentageChange: number, targetPriceKeys?: string[]) => void;

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

export const validateEmployeeCode = (code: string): boolean => {
  if (!code) return false;
  const clean = code.trim().toUpperCase();
  return /^HSH\d{4,8}$/.test(clean);
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Employee verification gate (Format HSHxxxxxx, e.g. HSH003687)
  const [employeeCode, setEmployeeCodeState] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('hoasen_employee_code');
      if (saved && validateEmployeeCode(saved)) {
        return saved.toUpperCase();
      }
    }
    return null;
  });

  const isEmployeeVerified = Boolean(employeeCode && validateEmployeeCode(employeeCode));

  // Current user (Staff with employee code by default)
  const [currentUser, setCurrentUser] = useState<User>(() => {
    const saved = localStorage.getItem('hs_current_user');
    if (saved) return JSON.parse(saved);
    const code = localStorage.getItem('hoasen_employee_code');
    if (code && validateEmployeeCode(code)) {
      return {
        ...DEFAULT_STAFF_USER,
        name: `Nhân viên thị trường (${code.toUpperCase()})`,
        id: `USR-${code.toUpperCase()}`
      };
    }
    return DEFAULT_STAFF_USER;
  });

  const loginWithEmployeeCode = (code: string): { success: boolean; message?: string } => {
    const clean = code.trim().toUpperCase();
    if (!validateEmployeeCode(clean)) {
      return { 
        success: false, 
        message: 'Mã nhân viên không hợp lệ hoặc không có quyền truy cập hệ thống.' 
      };
    }

    localStorage.setItem('hoasen_employee_code', clean);
    setEmployeeCodeState(clean);

    setCurrentUser(prev => {
      if (prev.role === 'admin') return prev;
      const updated = {
        ...prev,
        name: `Nhân viên thị trường (${clean})`,
        id: `USR-${clean}`
      };
      localStorage.setItem('hs_current_user', JSON.stringify(updated));
      return updated;
    });

    return { success: true };
  };

  const logoutEmployeeCode = () => {
    localStorage.removeItem('hoasen_employee_code');
    setEmployeeCodeState(null);
    setCurrentUser(prev => {
      if (prev.role === 'admin') return prev;
      return DEFAULT_STAFF_USER;
    });
  };

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

  // Active Tab with /admin URL detection (supports path /admin, hash #admin or query ?tab=admin)
  const [activeTab, setActiveTabState] = useState<'home' | 'catalog' | 'quotation' | 'favorites' | 'admin' | 'account'>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const hash = window.location.hash;
      const search = new URLSearchParams(window.location.search);
      if (
        path === '/admin' || 
        path.startsWith('/admin') || 
        hash === '#admin' || 
        hash.includes('/admin') ||
        search.get('tab') === 'admin'
      ) {
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
      const path = window.location.pathname;
      const hash = window.location.hash;
      const search = new URLSearchParams(window.location.search);
      if (
        path === '/admin' || 
        path.startsWith('/admin') || 
        hash === '#admin' || 
        hash.includes('/admin') ||
        search.get('tab') === 'admin'
      ) {
        setActiveTabState('admin');
      } else {
        setActiveTabState('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
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

  // Cloud sync status
  const [cloudSyncStatus, setCloudSyncStatus] = useState<{
    isSyncing: boolean;
    lastSyncedAt: string | null;
    error: string | null;
  }>({
    isSyncing: false,
    lastSyncedAt: null,
    error: null
  });

  // Safe localStorage helper
  const safeSetItem = (key: string, value: string) => {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.warn(`Không thể lưu vào localStorage [${key}]:`, e);
    }
  };

  // Save changes to localStorage with error handling
  useEffect(() => {
    safeSetItem('hs_current_user', JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    safeSetItem('hs_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    safeSetItem('hs_current_version', JSON.stringify(currentVersion));
  }, [currentVersion]);

  useEffect(() => {
    safeSetItem('hs_version_history', JSON.stringify(versionHistory));
  }, [versionHistory]);

  useEffect(() => {
    safeSetItem('hs_recent_products', JSON.stringify(recentProductIds));
  }, [recentProductIds]);

  useEffect(() => {
    safeSetItem('hs_favorites', JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  useEffect(() => {
    safeSetItem('hs_quotation_cart', JSON.stringify(quotationItems));
  }, [quotationItems]);

  useEffect(() => {
    safeSetItem('hs_saved_quotations', JSON.stringify(savedQuotations));
  }, [savedQuotations]);

  // Load products from Supabase Cloud on mount
  useEffect(() => {
    let isMounted = true;
    const fetchFromCloud = async () => {
      try {
        const { data, error } = await supabase.from('products').select('*');
        if (!isMounted) return;
        if (!error && data && data.length > 0) {
          const cloudProducts: Product[] = data.map((row: any) => ({
            id: row.id,
            source_file: row.source_file || 'Supabase Cloud',
            sheet_name: row.sheet_name || row.category || 'Chung',
            row_number: row.row_number || 1,
            category: row.category || 'Chung',
            group_name: row.group_name || row.category || 'Chung',
            product_name: row.product_name,
            sku: row.sku || '',
            brand: row.brand || 'Hoa Sen Home',
            specs: row.specs || '',
            unit: row.unit || 'Cái',
            packaging: row.packaging || '',
            notes: row.notes || '',
            prices: typeof row.prices === 'object' && row.prices !== null ? row.prices : {},
            created_at: row.created_at,
            updated_at: row.updated_at
          }));
          setProducts(cloudProducts);
          safeSetItem('hs_products', JSON.stringify(cloudProducts));
          setCloudSyncStatus({
            isSyncing: false,
            lastSyncedAt: new Date().toLocaleTimeString('vi-VN'),
            error: null
          });
        } else if (error) {
          console.warn('Supabase Cloud info:', error.message);
          setCloudSyncStatus(prev => ({ ...prev, error: error.message }));
        }
      } catch (err: any) {
        console.warn('Không thể kết nối Supabase Cloud khi nạp sản phẩm:', err);
      }
    };
    fetchFromCloud();
    return () => { isMounted = false; };
  }, []);

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
      creatorName: 'Nhân viên',
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

  // Batch upsert to Supabase helper
  const batchUpsertToSupabase = async (prods: Product[]) => {
    try {
      const CHUNK_SIZE = 50;
      for (let i = 0; i < prods.length; i += CHUNK_SIZE) {
        const chunk = prods.slice(i, i + CHUNK_SIZE).map(p => ({
          id: p.id,
          sku: p.sku,
          product_name: p.product_name,
          category: p.category,
          brand: p.brand,
          group_name: p.group_name,
          specs: p.specs,
          unit: p.unit,
          packaging: p.packaging,
          notes: p.notes,
          prices: p.prices,
          sheet_name: p.sheet_name,
          row_number: p.row_number,
          source_file: p.source_file,
          updated_at: new Date().toISOString()
        }));
        await supabase.from('products').upsert(chunk);
      }
    } catch (err) {
      console.warn('Lỗi đồng bộ hàng loạt lên Supabase:', err);
    }
  };

  const addProduct = (productData: Omit<Product, 'id'> & { id?: string }): Product => {
    const id = productData.id || `PROD-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 1000)}`;
    const newProduct: Product = {
      ...productData,
      id,
      source_file: productData.source_file || currentVersion.filename || 'Thêm thủ công qua Admin',
      sheet_name: productData.sheet_name || productData.category || 'Chung',
      row_number: productData.row_number || (products.length + 1),
      category: productData.category || 'Khác',
      group_name: productData.group_name || productData.category || 'Khác',
      product_name: productData.product_name,
      sku: productData.sku || `HS-${Date.now().toString().slice(-6)}`,
      brand: productData.brand || 'Hoa Sen Home',
      specs: productData.specs || '',
      unit: productData.unit || 'Cái',
      packaging: productData.packaging || '',
      notes: productData.notes || '',
      prices: productData.prices || {}
    };

    setProducts(prev => {
      const updated = [newProduct, ...prev];
      safeSetItem('hs_products', JSON.stringify(updated));
      return updated;
    });

    setCurrentVersion(prev => ({
      ...prev,
      totalProducts: prev.totalProducts + 1
    }));

    addAuditLog(
      'Thêm sản phẩm mới',
      `Thêm sản phẩm: ${newProduct.product_name} (Mã: ${newProduct.sku})`
    );

    // Save to Supabase Cloud
    (async () => {
      try {
        const { error } = await supabase.from('products').upsert({
          id: newProduct.id,
          sku: newProduct.sku,
          product_name: newProduct.product_name,
          category: newProduct.category,
          brand: newProduct.brand,
          group_name: newProduct.group_name,
          specs: newProduct.specs,
          unit: newProduct.unit,
          packaging: newProduct.packaging,
          notes: newProduct.notes,
          prices: newProduct.prices,
          sheet_name: newProduct.sheet_name,
          row_number: newProduct.row_number,
          source_file: newProduct.source_file,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        });
        if (error) {
          console.warn('Lỗi Supabase khi thêm sản phẩm:', error.message);
        } else {
          setCloudSyncStatus(prev => ({ ...prev, lastSyncedAt: new Date().toLocaleTimeString('vi-VN'), error: null }));
        }
      } catch (err) {
        console.warn('Không thể kết nối Supabase Cloud:', err);
      }
    })();

    return newProduct;
  };

  const updateProduct = (updatedProduct: Product) => {
    setProducts(prev => {
      const updated = prev.map(p => p.id === updatedProduct.id ? updatedProduct : p);
      safeSetItem('hs_products', JSON.stringify(updated));
      return updated;
    });

    if (selectedProduct?.id === updatedProduct.id) {
      setSelectedProduct(updatedProduct);
    }

    addAuditLog(
      'Cập nhật sản phẩm & giá',
      `Cập nhật: ${updatedProduct.product_name} (Mã: ${updatedProduct.sku})`
    );

    // Update to Supabase Cloud
    (async () => {
      try {
        const { error } = await supabase.from('products').upsert({
          id: updatedProduct.id,
          sku: updatedProduct.sku,
          product_name: updatedProduct.product_name,
          category: updatedProduct.category,
          brand: updatedProduct.brand,
          group_name: updatedProduct.group_name,
          specs: updatedProduct.specs,
          unit: updatedProduct.unit,
          packaging: updatedProduct.packaging,
          notes: updatedProduct.notes,
          prices: updatedProduct.prices,
          sheet_name: updatedProduct.sheet_name,
          row_number: updatedProduct.row_number,
          source_file: updatedProduct.source_file,
          updated_at: new Date().toISOString()
        });
        if (error) {
          console.warn('Lỗi Supabase khi cập nhật:', error.message);
        } else {
          setCloudSyncStatus(prev => ({ ...prev, lastSyncedAt: new Date().toLocaleTimeString('vi-VN'), error: null }));
        }
      } catch (err) {
        console.warn('Không thể kết nối Supabase:', err);
      }
    })();
  };

  const deleteProduct = (productId: string) => {
    const target = products.find(p => p.id === productId);
    setProducts(prev => {
      const updated = prev.filter(p => p.id !== productId);
      safeSetItem('hs_products', JSON.stringify(updated));
      return updated;
    });

    setCurrentVersion(prev => ({
      ...prev,
      totalProducts: Math.max(0, prev.totalProducts - 1)
    }));

    if (selectedProduct?.id === productId) {
      setSelectedProduct(null);
    }

    setFavoriteIds(prev => prev.filter(id => id !== productId));

    addAuditLog(
      'Xóa sản phẩm',
      `Đã xóa: ${target?.product_name || productId} (Mã: ${target?.sku || ''})`
    );

    // Delete from Supabase Cloud
    (async () => {
      try {
        await supabase.from('products').delete().eq('id', productId);
      } catch (err) {
        console.warn('Lỗi Supabase khi xóa:', err);
      }
    })();
  };

  const batchUpdatePrices = (productIds: string[], percentageChange: number, targetPriceKeys?: string[]) => {
    const factor = 1 + percentageChange / 100;
    const defaultKeys = ['gia_niem_yet', 'gia_khach_le', 'gia_thau_tho', 'gia_khach_si', 'gia_ban_mau'];
    const keysToUpdate = targetPriceKeys && targetPriceKeys.length > 0 ? targetPriceKeys : defaultKeys;

    const modifiedList: Product[] = [];

    setProducts(prev => {
      const updated = prev.map(p => {
        if (!productIds.includes(p.id)) return p;
        const newPrices = { ...p.prices };
        keysToUpdate.forEach(k => {
          const cur = newPrices[k];
          if (cur && typeof cur.value === 'number') {
            newPrices[k] = {
              ...cur,
              value: Math.round(cur.value * factor)
            };
          }
        });
        const modProd = {
          ...p,
          prices: newPrices
        };
        modifiedList.push(modProd);
        return modProd;
      });
      safeSetItem('hs_products', JSON.stringify(updated));
      return updated;
    });

    addAuditLog(
      'Điều chỉnh giá hàng loạt',
      `Điều chỉnh ${percentageChange > 0 ? '+' : ''}${percentageChange}% cho ${productIds.length} sản phẩm`
    );

    // Sync modified to Supabase
    if (modifiedList.length > 0) {
      batchUpsertToSupabase(modifiedList);
    }
  };

  // Append & merge new products from Excel into existing catalog
  const appendProducts = (newProds: Product[]): { added: number; updated: number } => {
    let addedCount = 0;
    let updatedCount = 0;

    const prodMap = new Map<string, Product>();
    const skuMap = new Map<string, string>();
    const nameMap = new Map<string, string>();

    products.forEach(p => {
      prodMap.set(p.id, p);
      if (p.sku) skuMap.set(p.sku.toLowerCase().trim(), p.id);
      nameMap.set(p.product_name.toLowerCase().trim(), p.id);
    });

    newProds.forEach(np => {
      const normSku = (np.sku || '').toLowerCase().trim();
      const normName = np.product_name.toLowerCase().trim();

      const matchId = (normSku && skuMap.get(normSku)) || nameMap.get(normName);
      if (matchId && prodMap.has(matchId)) {
        const old = prodMap.get(matchId)!;
        const merged: Product = {
          ...old,
          ...np,
          id: old.id,
          prices: { ...old.prices, ...np.prices },
          updated_at: new Date().toISOString()
        };
        prodMap.set(matchId, merged);
        updatedCount++;
      } else {
        prodMap.set(np.id, np);
        addedCount++;
      }
    });

    const updatedList = Array.from(prodMap.values());
    setProducts(updatedList);
    safeSetItem('hs_products', JSON.stringify(updatedList));

    setCurrentVersion(prev => ({
      ...prev,
      totalProducts: updatedList.length
    }));

    addAuditLog(
      'Bổ sung sản phẩm từ Excel',
      `Thêm mới ${addedCount} sản phẩm, cập nhật giá ${updatedCount} sản phẩm vào bảng giá hiện hành`
    );

    // Sync to Supabase
    batchUpsertToSupabase(newProds);

    return { added: addedCount, updated: updatedCount };
  };

  // Replace all products with a newly activated price version
  const updateProductsWithNewVersion = (newProducts: Product[], version: PriceVersion) => {
    setProducts(newProducts);
    safeSetItem('hs_products', JSON.stringify(newProducts));
    setCurrentVersion(version);
    setVersionHistory(prev => [version, ...prev]);
    addAuditLog('Kích hoạt phiên bản bảng giá mới', `Kích hoạt ${version.name} với ${newProducts.length} sản phẩm`);

    // Sync full list to Supabase
    batchUpsertToSupabase(newProducts);
  };

  // Sync entire current catalog to Supabase Cloud
  const syncAllProductsToCloud = async (): Promise<{ success: boolean; count: number; error?: string }> => {
    setCloudSyncStatus(prev => ({ ...prev, isSyncing: true }));
    try {
      const CHUNK_SIZE = 50;
      for (let i = 0; i < products.length; i += CHUNK_SIZE) {
        const chunk = products.slice(i, i + CHUNK_SIZE).map(p => ({
          id: p.id,
          sku: p.sku,
          product_name: p.product_name,
          category: p.category,
          brand: p.brand,
          group_name: p.group_name,
          specs: p.specs,
          unit: p.unit,
          packaging: p.packaging,
          notes: p.notes,
          prices: p.prices,
          sheet_name: p.sheet_name,
          row_number: p.row_number,
          source_file: p.source_file,
          updated_at: new Date().toISOString()
        }));
        const { error } = await supabase.from('products').upsert(chunk);
        if (error) {
          throw new Error(error.message);
        }
      }
      setCloudSyncStatus({
        isSyncing: false,
        lastSyncedAt: new Date().toLocaleTimeString('vi-VN'),
        error: null
      });
      addAuditLog('Đồng bộ Cloud Supabase', `Đã đồng bộ thành công ${products.length} sản phẩm lên Database Supabase`);
      return { success: true, count: products.length };
    } catch (err: any) {
      const msg = err.message || 'Lỗi kết nối khi lưu lên Supabase';
      setCloudSyncStatus(prev => ({ ...prev, isSyncing: false, error: msg }));
      return { success: false, count: 0, error: msg };
    }
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        switchRole,
        logoutAdmin,
        isAdmin,
        employeeCode,
        isEmployeeVerified,
        loginWithEmployeeCode,
        logoutEmployeeCode,
        products,
        currentVersion,
        versionHistory,
        updateProductsWithNewVersion,
        appendProducts,
        syncAllProductsToCloud,
        cloudSyncStatus,
        addProduct,
        updateProduct,
        deleteProduct,
        batchUpdatePrices,
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
