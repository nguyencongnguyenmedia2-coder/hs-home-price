import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import type { Product, VatStatus, PriceDetail } from '../../types';
import { formatVND, matchesSearch } from '../../utils/formatters';
import {
  Plus,
  Search,
  Edit3,
  Trash2,
  Check,
  X,
  Percent,
  Filter,
  RotateCcw,
  AlertTriangle,
  Layers,
  Tag,
  DollarSign,
  Calculator,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  CheckSquare,
  Square,
  Save,
  CheckCircle2,
  PackagePlus,
  Sparkles
} from 'lucide-react';

interface ProductFormState {
  id?: string;
  product_name: string;
  sku: string;
  category: string;
  brand: string;
  specs: string;
  unit: string;
  packaging: string;
  notes: string;
  // Prices
  basePriceNiemYet: number | '';
  vatNiemYet: VatStatus;
  priceKhachLe: number | '';
  vatKhachLe: VatStatus;
  priceThauTho: number | '';
  vatThauTho: VatStatus;
  priceKhachSi: number | '';
  vatKhachSi: VatStatus;
  priceBanMau: number | '';
  vatBanMau: VatStatus;
}

const DEFAULT_FORM: ProductFormState = {
  product_name: '',
  sku: '',
  category: '',
  brand: 'Hoa Sen Home',
  specs: '',
  unit: 'Cái',
  packaging: '',
  notes: '',
  basePriceNiemYet: '',
  vatNiemYet: 'chua_vat',
  priceKhachLe: '',
  vatKhachLe: 'co_vat',
  priceThauTho: '',
  vatThauTho: 'co_vat',
  priceKhachSi: '',
  vatKhachSi: 'co_vat',
  priceBanMau: '',
  vatBanMau: 'co_vat'
};

export const ProductPriceManager: React.FC = () => {
  const { products, addProduct, updateProduct, deleteProduct, batchUpdatePrices } = useApp();

  // Search, Filter & Pagination
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedBrand, setSelectedBrand] = useState<string>('ALL');
  const [sortBy, setSortBy] = useState<'name_asc' | 'name_desc' | 'price_asc' | 'price_desc' | 'newest'>('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Selection for bulk actions
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // Modals state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState<ProductFormState>(DEFAULT_FORM);

  // Quick Inline Edit State
  const [inlineEditingId, setInlineEditingId] = useState<string | null>(null);
  const [inlinePriceValue, setInlinePriceValue] = useState<number | ''>('');
  const [inlinePriceKey, setInlinePriceKey] = useState<string>('gia_khach_le');

  // Delete Confirm State
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [isBulkDeleteModalOpen, setIsBulkDeleteModalOpen] = useState(false);

  // Batch Price Adjust Modal
  const [isBatchPriceModalOpen, setIsBatchPriceModalOpen] = useState(false);
  const [batchPercent, setBatchPercent] = useState<number>(5);
  const [batchScope, setBatchScope] = useState<'selected' | 'category' | 'all'>('selected');
  const [batchTargetPrice, setBatchTargetPrice] = useState<'all' | 'gia_khach_le' | 'gia_niem_yet'>('all');

  // Newly Added Highlight
  const [newlyAddedId, setNewlyAddedId] = useState<string | null>(null);

  // Success Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Extract unique categories and brands
  const existingCategories = useMemo(() => {
    const set = new Set<string>();
    products.forEach(p => p.category && set.add(p.category));
    return Array.from(set).sort();
  }, [products]);

  const existingBrands = useMemo(() => {
    const set = new Set<string>();
    products.forEach(p => p.brand && set.add(p.brand));
    return Array.from(set).sort();
  }, [products]);

  // Filtered and Sorted Products
  const filteredProducts = useMemo(() => {
    let result = products.filter(p => {
      if (selectedCategory !== 'ALL' && p.category !== selectedCategory) return false;
      if (selectedBrand !== 'ALL' && p.brand !== selectedBrand) return false;
      if (searchTerm.trim()) {
        const target = `${p.product_name} ${p.sku} ${p.specs} ${p.category} ${p.brand} ${p.notes}`;
        return matchesSearch(target, searchTerm);
      }
      return true;
    });

    result = [...result].sort((a, b) => {
      if (sortBy === 'name_asc') return a.product_name.localeCompare(b.product_name, 'vi');
      if (sortBy === 'name_desc') return b.product_name.localeCompare(a.product_name, 'vi');
      if (sortBy === 'price_asc') {
        const priceA = a.prices?.gia_khach_le?.value || a.prices?.gia_niem_yet?.value || 0;
        const priceB = b.prices?.gia_khach_le?.value || b.prices?.gia_niem_yet?.value || 0;
        return priceA - priceB;
      }
      if (sortBy === 'price_desc') {
        const priceA = a.prices?.gia_khach_le?.value || a.prices?.gia_niem_yet?.value || 0;
        const priceB = b.prices?.gia_khach_le?.value || b.prices?.gia_niem_yet?.value || 0;
        return priceB - priceA;
      }
      // 'newest': Newly created products or products with recent IDs come first
      if (a.created_at && b.created_at) {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      }
      if (a.created_at) return -1;
      if (b.created_at) return 1;
      return 0;
    });

    return result;
  }, [products, selectedCategory, selectedBrand, searchTerm, sortBy]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  // Auto-calculate Hoa Sen pricing formula from Base Price
  const handleCalculatePrices = (basePrice: number) => {
    if (!basePrice || isNaN(basePrice) || basePrice <= 0) return;
    // Standard Hoa Sen Home Formulas:
    // Retail (VAT 8%) = base * 1.08
    // Contractor = Retail * 0.9 (10% discount)
    // Wholesale = Retail * 0.8 (20% discount)
    // Sample = Retail * 0.65 (35% discount)
    const retail = Math.round(basePrice * 1.08);
    const contractor = Math.round(retail * 0.9);
    const wholesale = Math.round(retail * 0.8);
    const sample = Math.round(retail * 0.65);

    setFormData(prev => ({
      ...prev,
      basePriceNiemYet: basePrice,
      priceKhachLe: retail,
      priceThauTho: contractor,
      priceKhachSi: wholesale,
      priceBanMau: sample
    }));
  };

  // Open modal for Creating new Product
  const handleOpenAddModal = () => {
    setEditingProduct(null);
    setFormData({
      ...DEFAULT_FORM,
      category: existingCategories[0] || 'Dụng cụ cầm tay',
      sku: `HS-${Date.now().toString().slice(-6)}`
    });
    setIsModalOpen(true);
  };

  // Open modal for Editing Product
  const handleOpenEditModal = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      id: product.id,
      product_name: product.product_name,
      sku: product.sku,
      category: product.category,
      brand: product.brand,
      specs: product.specs || '',
      unit: product.unit || 'Cái',
      packaging: product.packaging || '',
      notes: product.notes || '',
      basePriceNiemYet: product.prices.gia_niem_yet?.value ?? '',
      vatNiemYet: product.prices.gia_niem_yet?.vat || 'chua_vat',
      priceKhachLe: product.prices.gia_khach_le?.value ?? '',
      vatKhachLe: product.prices.gia_khach_le?.vat || 'co_vat',
      priceThauTho: product.prices.gia_thau_tho?.value ?? '',
      vatThauTho: product.prices.gia_thau_tho?.vat || 'co_vat',
      priceKhachSi: product.prices.gia_khach_si?.value ?? '',
      vatKhachSi: product.prices.gia_khach_si?.vat || 'co_vat',
      priceBanMau: product.prices.gia_ban_mau?.value ?? '',
      vatBanMau: product.prices.gia_ban_mau?.vat || 'co_vat'
    });
    setIsModalOpen(true);
  };

  // Handle Form Submit
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.product_name.trim()) {
      alert('Vui lòng nhập tên sản phẩm');
      return;
    }

    const pricesMap: Record<string, PriceDetail | null> = {};

    if (typeof formData.basePriceNiemYet === 'number' && formData.basePriceNiemYet > 0) {
      pricesMap.gia_niem_yet = {
        value: formData.basePriceNiemYet,
        vat: formData.vatNiemYet,
        label: 'Giá niêm yết (Chưa VAT)'
      };
    }

    if (typeof formData.priceKhachLe === 'number' && formData.priceKhachLe > 0) {
      pricesMap.gia_khach_le = {
        value: formData.priceKhachLe,
        vat: formData.vatKhachLe,
        label: 'Giá khách lẻ (VAT 8%)'
      };
    }

    if (typeof formData.priceThauTho === 'number' && formData.priceThauTho > 0) {
      pricesMap.gia_thau_tho = {
        value: formData.priceThauTho,
        vat: formData.vatThauTho,
        label: 'Giá thầu thợ (CK 10% + VAT 8%)'
      };
    }

    if (typeof formData.priceKhachSi === 'number' && formData.priceKhachSi > 0) {
      pricesMap.gia_khach_si = {
        value: formData.priceKhachSi,
        vat: formData.vatKhachSi,
        label: 'Giá khách sỉ (CK 20% + VAT 8%)'
      };
    }

    if (typeof formData.priceBanMau === 'number' && formData.priceBanMau > 0) {
      pricesMap.gia_ban_mau = {
        value: formData.priceBanMau,
        vat: formData.vatBanMau,
        label: 'Giá bán mẫu (CK 35% + VAT 8%)'
      };
    }

    if (editingProduct) {
      // Update existing
      const updated: Product = {
        ...editingProduct,
        product_name: formData.product_name.trim(),
        sku: formData.sku.trim() || editingProduct.sku,
        category: formData.category.trim() || editingProduct.category,
        brand: formData.brand.trim() || editingProduct.brand,
        specs: formData.specs.trim(),
        unit: formData.unit.trim() || 'Cái',
        packaging: formData.packaging.trim(),
        notes: formData.notes.trim(),
        prices: pricesMap
      };
      updateProduct(updated);
      showToast(`Đã cập nhật sản phẩm & giá: "${updated.product_name}"`);
    } else {
      // Create new
      const created = addProduct({
        product_name: formData.product_name.trim(),
        sku: formData.sku.trim() || `HS-${Date.now().toString().slice(-6)}`,
        category: formData.category.trim() || 'Chung',
        group_name: formData.category.trim() || 'Chung',
        brand: formData.brand.trim() || 'Hoa Sen Home',
        specs: formData.specs.trim(),
        unit: formData.unit.trim() || 'Cái',
        packaging: formData.packaging.trim(),
        notes: formData.notes.trim(),
        prices: pricesMap,
        source_file: 'Thêm thủ công qua Admin',
        sheet_name: formData.category.trim() || 'Thủ công',
        row_number: products.length + 1
      });

      // Reset filters so the new product is guaranteed to be visible at page 1 top
      setSearchTerm('');
      setSelectedCategory('ALL');
      setSelectedBrand('ALL');
      setSortBy('newest');
      setCurrentPage(1);
      setNewlyAddedId(created.id);
      setTimeout(() => setNewlyAddedId(null), 10000);

      showToast(`Đã thêm thành công sản phẩm: "${created.product_name}" (Hiển thị ngay đầu bảng)`);
    }

    setIsModalOpen(false);
  };

  // Quick Inline Price Edit Handlers
  const handleStartInlineEdit = (product: Product, priceKey: string = 'gia_khach_le') => {
    setInlineEditingId(product.id);
    setInlinePriceKey(priceKey);
    const curVal = product.prices[priceKey]?.value ?? '';
    setInlinePriceValue(curVal);
  };

  const handleSaveInlineEdit = (product: Product) => {
    if (typeof inlinePriceValue !== 'number' || inlinePriceValue < 0) {
      alert('Vui lòng nhập giá trị hợp lệ');
      return;
    }

    const currentPriceObj = product.prices[inlinePriceKey];
    const updatedPrices = {
      ...product.prices,
      [inlinePriceKey]: {
        value: inlinePriceValue,
        vat: currentPriceObj?.vat || 'co_vat',
        label: currentPriceObj?.label || (inlinePriceKey === 'gia_niem_yet' ? 'Giá niêm yết' : 'Giá khách lẻ')
      }
    };

    const updated: Product = {
      ...product,
      prices: updatedPrices
    };

    updateProduct(updated);
    setInlineEditingId(null);
    showToast(`Đã cập nhật giá nhanh: ${formatVND(inlinePriceValue)}`);
  };

  // Single Delete
  const handleConfirmDelete = () => {
    if (!productToDelete) return;
    deleteProduct(productToDelete.id);
    setSelectedIds(prev => prev.filter(id => id !== productToDelete.id));
    showToast(`Đã xóa sản phẩm "${productToDelete.product_name}"`);
    setProductToDelete(null);
  };

  // Bulk Selection Handlers
  const handleToggleSelectAll = () => {
    if (selectedIds.length === paginatedProducts.length && paginatedProducts.length > 0) {
      setSelectedIds([]);
    } else {
      setSelectedIds(paginatedProducts.map(p => p.id));
    }
  };

  const handleToggleSelect = (id: string) => {
    setSelectedIds(prev => (prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]));
  };

  // Bulk Delete
  const handleConfirmBulkDelete = () => {
    selectedIds.forEach(id => {
      deleteProduct(id);
    });
    showToast(`Đã xóa thành công ${selectedIds.length} sản phẩm đã chọn`);
    setSelectedIds([]);
    setIsBulkDeleteModalOpen(false);
  };

  // Batch Price Adjust Apply
  const handleApplyBatchPrice = () => {
    if (!batchPercent || isNaN(batchPercent)) {
      alert('Vui lòng nhập phần trăm hợp lệ');
      return;
    }

    let targetProductIds: string[] = [];
    if (batchScope === 'selected') {
      if (selectedIds.length === 0) {
        alert('Vui lòng chọn ít nhất một sản phẩm trước khi điều chỉnh');
        return;
      }
      targetProductIds = selectedIds;
    } else if (batchScope === 'category') {
      if (selectedCategory === 'ALL') {
        alert('Vui lòng chọn một danh mục cụ thể ở bộ lọc trước');
        return;
      }
      targetProductIds = products.filter(p => p.category === selectedCategory).map(p => p.id);
    } else {
      targetProductIds = products.map(p => p.id);
    }

    const priceKeys =
      batchTargetPrice === 'all'
        ? undefined
        : [batchTargetPrice];

    batchUpdatePrices(targetProductIds, batchPercent, priceKeys);
    showToast(`Đã điều chỉnh ${batchPercent > 0 ? '+' : ''}${batchPercent}% cho ${targetProductIds.length} sản phẩm!`);
    setIsBatchPriceModalOpen(false);
  };

  return (
    <div className="space-y-5">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-emerald-700 text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-bold animate-in fade-in slide-in-from-top-4 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-200" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Action & Stats Bar */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-4 sm:p-5 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <PackagePlus className="w-5 h-5 text-red-600" />
              <span>Quản Lý Sản Phẩm & Bảng Giá</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Thêm mới sản phẩm, sửa trực tiếp từng mức giá (Niêm yết, Lẻ, Sỉ, Thầu thợ, Mẫu) và xóa sản phẩm.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setIsBatchPriceModalOpen(true)}
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors border border-slate-200"
              title="Tăng/giảm % giá hàng loạt"
            >
              <Percent className="w-4 h-4 text-blue-600" />
              <span>Điều chỉnh giá theo %</span>
            </button>

            <button
              onClick={handleOpenAddModal}
              className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-transform active:scale-95"
            >
              <Plus className="w-4 h-4" />
              <span>Thêm sản phẩm & giá mới</span>
            </button>
          </div>
        </div>

        {/* Search, Filter, Sort Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 pt-2 border-t border-slate-100">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm theo tên, mã SKU, quy cách..."
              value={searchTerm}
              onChange={e => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-9 pr-7 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div>
            <select
              value={selectedCategory}
              onChange={e => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full py-2 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
            >
              <option value="ALL">Tất cả danh mục ({existingCategories.length})</option>
              {existingCategories.map(cat => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Brand Filter */}
          <div>
            <select
              value={selectedBrand}
              onChange={e => {
                setSelectedBrand(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full py-2 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
            >
              <option value="ALL">Tất cả thương hiệu ({existingBrands.length})</option>
              {existingBrands.map(b => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Control */}
          <div>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="w-full py-2 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
            >
              <option value="newest">Thứ tự mặc định / Mới thêm</option>
              <option value="name_asc">Tên sản phẩm: A → Z</option>
              <option value="name_desc">Tên sản phẩm: Z → A</option>
              <option value="price_asc">Giá khách lẻ: Thấp → Cao</option>
              <option value="price_desc">Giá khách lẻ: Cao → Thấp</option>
            </select>
          </div>
        </div>

        {/* Status & Multi-selection bar */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
          <div>
            Hiển thị <strong>{filteredProducts.length}</strong> / <strong>{products.length}</strong> sản phẩm
            {selectedCategory !== 'ALL' && <span> • Danh mục: <strong>{selectedCategory}</strong></span>}
            {selectedBrand !== 'ALL' && <span> • Hiệu: <strong>{selectedBrand}</strong></span>}
          </div>

          {selectedIds.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-700">Đã chọn {selectedIds.length} mục</span>
              <button
                onClick={() => setIsBulkDeleteModalOpen(true)}
                className="px-2.5 py-1 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 font-bold flex items-center gap-1 border border-red-200 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Xóa các mục đã chọn</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Table Container */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
                <th className="p-3 w-10 text-center">
                  <button
                    onClick={handleToggleSelectAll}
                    className="text-slate-400 hover:text-slate-600 focus:outline-none"
                    title="Chọn tất cả trên trang này"
                  >
                    {selectedIds.length === paginatedProducts.length && paginatedProducts.length > 0 ? (
                      <CheckSquare className="w-4 h-4 text-red-600" />
                    ) : (
                      <Square className="w-4 h-4" />
                    )}
                  </button>
                </th>
                <th className="p-3 min-w-[220px]">Sản phẩm & Thông tin</th>
                <th className="p-3 min-w-[90px]">ĐVT & Hiệu</th>
                <th className="p-3 min-w-[120px] text-right">Giá niêm yết</th>
                <th className="p-3 min-w-[140px] text-right bg-red-50/50">
                  <div className="flex items-center justify-end gap-1 text-red-700 font-extrabold">
                    <span>Giá khách lẻ (VAT 8%)</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                </th>
                <th className="p-3 min-w-[120px] text-right">Giá thầu thợ</th>
                <th className="p-3 min-w-[120px] text-right">Giá khách sỉ</th>
                <th className="p-3 min-w-[110px] text-right">Giá bán mẫu</th>
                <th className="p-3 min-w-[110px] text-center">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedProducts.length === 0 ? (
                <tr>
                  <td colSpan={9} className="p-8 text-center text-slate-400">
                    <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto mb-2 opacity-80" />
                    <p className="font-semibold text-slate-700">Không tìm thấy sản phẩm nào phù hợp</p>
                    <p className="text-xs text-slate-400 mt-0.5">Thử thay đổi từ khóa tìm kiếm hoặc lọc danh mục</p>
                  </td>
                </tr>
              ) : (
                paginatedProducts.map(p => {
                  const isSelected = selectedIds.includes(p.id);
                  const isInlineEditing = inlineEditingId === p.id;
                  const isNewlyAdded = newlyAddedId === p.id;
                  const retailPrice = p.prices?.gia_khach_le?.value;
                  const listPrice = p.prices?.gia_niem_yet?.value;
                  const contractorPrice = p.prices?.gia_thau_tho?.value;
                  const wholesalePrice = p.prices?.gia_khach_si?.value;
                  const samplePrice = p.prices?.gia_ban_mau?.value;

                  return (
                    <tr
                      key={p.id}
                      className={`transition-colors ${
                        isNewlyAdded
                          ? 'bg-emerald-50/80 border-l-4 border-l-emerald-500'
                          : isSelected
                          ? 'bg-red-50/30'
                          : 'hover:bg-slate-50/80'
                      }`}
                    >
                      {/* Checkbox */}
                      <td className="p-3 text-center">
                        <button
                          onClick={() => handleToggleSelect(p.id)}
                          className="text-slate-400 hover:text-slate-600 focus:outline-none"
                        >
                          {isSelected ? (
                            <CheckSquare className="w-4 h-4 text-red-600" />
                          ) : (
                            <Square className="w-4 h-4" />
                          )}
                        </button>
                      </td>

                      {/* Product Name, SKU, Category */}
                      <td className="p-3">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-bold text-slate-900 line-clamp-2" title={p.product_name}>
                            {p.product_name}
                          </span>
                          {isNewlyAdded && (
                            <span className="px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold border border-emerald-300 animate-pulse">
                              ★ Vừa thêm
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                          <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[10px] font-bold">
                            {p.sku || 'Chưa có SKU'}
                          </span>
                          <span className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 text-[10px] font-medium">
                            {p.category}
                          </span>
                          {p.specs && (
                            <span className="text-[11px] text-slate-500 truncate max-w-[200px]" title={p.specs}>
                              QC: {p.specs}
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Unit & Brand */}
                      <td className="p-3">
                        <div className="font-bold text-slate-800">{p.unit || 'Cái'}</div>
                        <div className="text-[11px] text-slate-500 font-medium">{p.brand}</div>
                      </td>

                      {/* Giá niêm yết (Chưa VAT) */}
                      <td className="p-3 text-right">
                        {listPrice ? (
                          <div>
                            <span className="font-semibold text-slate-800">{formatVND(listPrice)}</span>
                            <div className="text-[10px] text-slate-400">Chưa VAT</div>
                          </div>
                        ) : (
                          <span className="text-slate-400 italic">--</span>
                        )}
                      </td>

                      {/* Giá khách lẻ (VAT 8%) - with Quick Inline Edit */}
                      <td className="p-3 text-right bg-red-50/40">
                        {isInlineEditing && inlinePriceKey === 'gia_khach_le' ? (
                          <div className="flex items-center justify-end gap-1">
                            <input
                              type="number"
                              value={inlinePriceValue}
                              onChange={e => setInlinePriceValue(e.target.value === '' ? '' : Number(e.target.value))}
                              className="w-24 px-2 py-1 bg-white rounded-lg border border-red-500 text-xs font-bold text-right focus:outline-none"
                              autoFocus
                              onKeyDown={e => {
                                if (e.key === 'Enter') handleSaveInlineEdit(p);
                                if (e.key === 'Escape') setInlineEditingId(null);
                              }}
                            />
                            <button
                              onClick={() => handleSaveInlineEdit(p)}
                              className="p-1 rounded bg-emerald-600 text-white hover:bg-emerald-700"
                              title="Lưu giá"
                            >
                              <Check className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => setInlineEditingId(null)}
                              className="p-1 rounded bg-slate-200 text-slate-600 hover:bg-slate-300"
                              title="Hủy"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ) : (
                          <div className="group/cell flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => handleStartInlineEdit(p, 'gia_khach_le')}
                              className="opacity-0 group-hover/cell:opacity-100 p-1 text-slate-400 hover:text-red-600 transition-opacity"
                              title="Sửa nhanh giá khách lẻ"
                            >
                              <Edit3 className="w-3 h-3" />
                            </button>
                            <div>
                              <span className="font-extrabold text-red-600 text-sm">
                                {retailPrice ? formatVND(retailPrice) : '--'}
                              </span>
                              <div className="text-[10px] text-red-500 font-medium">VAT 8%</div>
                            </div>
                          </div>
                        )}
                      </td>

                      {/* Giá thầu thợ */}
                      <td className="p-3 text-right">
                        {contractorPrice ? (
                          <div>
                            <span className="font-medium text-slate-700">{formatVND(contractorPrice)}</span>
                            <div className="text-[10px] text-slate-400">CK 10%</div>
                          </div>
                        ) : (
                          <span className="text-slate-400 italic">--</span>
                        )}
                      </td>

                      {/* Giá khách sỉ */}
                      <td className="p-3 text-right">
                        {wholesalePrice ? (
                          <div>
                            <span className="font-medium text-slate-700">{formatVND(wholesalePrice)}</span>
                            <div className="text-[10px] text-slate-400">CK 20%</div>
                          </div>
                        ) : (
                          <span className="text-slate-400 italic">--</span>
                        )}
                      </td>

                      {/* Giá bán mẫu */}
                      <td className="p-3 text-right">
                        {samplePrice ? (
                          <div>
                            <span className="font-medium text-slate-700">{formatVND(samplePrice)}</span>
                            <div className="text-[10px] text-slate-400">CK 35%</div>
                          </div>
                        ) : (
                          <span className="text-slate-400 italic">--</span>
                        )}
                      </td>

                      {/* Actions: Full Edit / Delete */}
                      <td className="p-3 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <button
                            onClick={() => handleOpenEditModal(p)}
                            className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200 transition-colors"
                            title="Chỉnh sửa chi tiết sản phẩm và các tầng giá"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => setProductToDelete(p)}
                            className="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 transition-colors"
                            title="Xóa sản phẩm"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div className="p-3.5 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs">
            <span className="text-slate-500">
              Trang <strong>{currentPage}</strong> / <strong>{totalPages}</strong> (
              {(currentPage - 1) * itemsPerPage + 1} -{' '}
              {Math.min(currentPage * itemsPerPage, filteredProducts.length)} / {filteredProducts.length})
            </span>

            <div className="flex items-center gap-1.5">
              <button
                disabled={currentPage <= 1}
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              {Array.from({ length: Math.min(5, totalPages) }, (_, idx) => {
                let pageNum = idx + 1;
                if (totalPages > 5 && currentPage > 3) {
                  pageNum = currentPage - 3 + idx;
                  if (pageNum > totalPages) pageNum = totalPages - (4 - idx);
                }
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-7 h-7 rounded-lg font-bold text-xs transition-colors ${
                      currentPage === pageNum
                        ? 'bg-red-600 text-white'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              <button
                disabled={currentPage >= totalPages}
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* MODAL: ADD / EDIT PRODUCT & PRICES */}
      {/* ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden my-auto">
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <Tag className="w-4 h-4 text-red-600" />
                  <span>{editingProduct ? 'Chỉnh Sửa Sản Phẩm & Giá' : 'Thêm Mới Sản Phẩm & Giá'}</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {editingProduct ? `Mã ID: ${editingProduct.id}` : 'Nhập đầy đủ thông tin và các mức giá áp dụng'}
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleFormSubmit} className="p-5 space-y-5 max-h-[75vh] overflow-y-auto">
              {/* SECTION 1: Basic Information */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-red-600" />
                  <span>1. Thông tin chung sản phẩm</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Tên sản phẩm <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Ống nhựa PPR Hoa Sen D25..."
                      value={formData.product_name}
                      onChange={e => setFormData({ ...formData, product_name: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Mã SKU</label>
                      <input
                        type="text"
                        placeholder="Ví dụ: HS-PPR-025"
                        value={formData.sku}
                        onChange={e => setFormData({ ...formData, sku: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Danh mục (Sheet phân loại)
                      </label>
                      <input
                        type="text"
                        list="cat-list"
                        placeholder="Chọn hoặc nhập danh mục mới"
                        value={formData.category}
                        onChange={e => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                      />
                      <datalist id="cat-list">
                        {existingCategories.map(c => (
                          <option key={c} value={c} />
                        ))}
                      </datalist>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Thương hiệu</label>
                      <input
                        type="text"
                        list="brand-list"
                        placeholder="LusWell, LusCom, Hoa Sen Home..."
                        value={formData.brand}
                        onChange={e => setFormData({ ...formData, brand: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                      />
                      <datalist id="brand-list">
                        {existingBrands.map(b => (
                          <option key={b} value={b} />
                        ))}
                      </datalist>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Đơn vị tính (ĐVT)</label>
                      <input
                        type="text"
                        placeholder="Cái, Bộ, Cuộn, Cây, Mét, Kg..."
                        value={formData.unit}
                        onChange={e => setFormData({ ...formData, unit: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Quy cách kỹ thuật</label>
                      <input
                        type="text"
                        placeholder="Ví dụ: 12 ống: 130L, Phi 27 dày 2.0mm..."
                        value={formData.specs}
                        onChange={e => setFormData({ ...formData, specs: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Ghi chú thêm</label>
                      <input
                        type="text"
                        placeholder="Bảo hành, khuyến mãi, xuất xứ..."
                        value={formData.notes}
                        onChange={e => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 2: Smart Pricing & Calculator */}
              <div className="border-t border-slate-200 pt-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                    <span>2. Quản lý các tầng giá (VND)</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (typeof formData.basePriceNiemYet === 'number') {
                        handleCalculatePrices(formData.basePriceNiemYet);
                      } else {
                        alert('Vui lòng nhập "Giá niêm yết" trước để tự động tính!');
                      }
                    }}
                    className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-bold text-[11px] flex items-center gap-1 border border-emerald-200 transition-colors"
                  >
                    <Calculator className="w-3.5 h-3.5" />
                    <span>⚡ Tự động tính 4 mức giá Hoa Sen</span>
                  </button>
                </div>

                <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                  {/* Base / List Price */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
                    <div className="sm:col-span-1">
                      <label className="block text-xs font-bold text-slate-800">
                        Giá niêm yết (Gốc)
                      </label>
                      <span className="text-[10px] text-slate-400">Giá tham chiếu chưa VAT</span>
                    </div>
                    <div className="sm:col-span-1">
                      <input
                        type="number"
                        placeholder="0"
                        value={formData.basePriceNiemYet}
                        onChange={e => {
                          const val = e.target.value === '' ? '' : Number(e.target.value);
                          setFormData({ ...formData, basePriceNiemYet: val });
                        }}
                        className="w-full px-3 py-1.5 bg-white rounded-xl border border-slate-200 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                      />
                    </div>
                    <div className="sm:col-span-1 text-xs text-slate-500 font-medium truncate">
                      {typeof formData.basePriceNiemYet === 'number' && formData.basePriceNiemYet > 0
                        ? formatVND(formData.basePriceNiemYet)
                        : '--'}
                    </div>
                  </div>

                  {/* Giá khách lẻ (VAT 8%) */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center bg-red-50/70 p-2.5 rounded-xl border border-red-200">
                    <div className="sm:col-span-1">
                      <label className="block text-xs font-extrabold text-red-700">
                        Giá khách lẻ (VAT 8%) <span className="text-red-500">*</span>
                      </label>
                      <span className="text-[10px] text-red-500 font-medium">Bảng giá xuất cho khách lẻ</span>
                    </div>
                    <div className="sm:col-span-1">
                      <input
                        type="number"
                        placeholder="0"
                        value={formData.priceKhachLe}
                        onChange={e => {
                          const val = e.target.value === '' ? '' : Number(e.target.value);
                          setFormData({ ...formData, priceKhachLe: val });
                        }}
                        className="w-full px-3 py-1.5 bg-white rounded-xl border border-red-300 text-xs font-extrabold text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                      />
                    </div>
                    <div className="sm:col-span-1 text-xs font-extrabold text-red-700 truncate">
                      {typeof formData.priceKhachLe === 'number' && formData.priceKhachLe > 0
                        ? formatVND(formData.priceKhachLe)
                        : '--'}
                    </div>
                  </div>

                  {/* Giá thầu thợ */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
                    <div className="sm:col-span-1">
                      <label className="block text-xs font-bold text-slate-800">
                        Giá thầu thợ
                      </label>
                      <span className="text-[10px] text-slate-400">Chiết khấu 10% + VAT 8%</span>
                    </div>
                    <div className="sm:col-span-1">
                      <input
                        type="number"
                        placeholder="0"
                        value={formData.priceThauTho}
                        onChange={e => {
                          const val = e.target.value === '' ? '' : Number(e.target.value);
                          setFormData({ ...formData, priceThauTho: val });
                        }}
                        className="w-full px-3 py-1.5 bg-white rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                      />
                    </div>
                    <div className="sm:col-span-1 text-xs text-slate-500 font-medium truncate">
                      {typeof formData.priceThauTho === 'number' && formData.priceThauTho > 0
                        ? formatVND(formData.priceThauTho)
                        : '--'}
                    </div>
                  </div>

                  {/* Giá khách sỉ */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
                    <div className="sm:col-span-1">
                      <label className="block text-xs font-bold text-slate-800">
                        Giá khách sỉ
                      </label>
                      <span className="text-[10px] text-slate-400">Chiết khấu 20% + VAT 8%</span>
                    </div>
                    <div className="sm:col-span-1">
                      <input
                        type="number"
                        placeholder="0"
                        value={formData.priceKhachSi}
                        onChange={e => {
                          const val = e.target.value === '' ? '' : Number(e.target.value);
                          setFormData({ ...formData, priceKhachSi: val });
                        }}
                        className="w-full px-3 py-1.5 bg-white rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                      />
                    </div>
                    <div className="sm:col-span-1 text-xs text-slate-500 font-medium truncate">
                      {typeof formData.priceKhachSi === 'number' && formData.priceKhachSi > 0
                        ? formatVND(formData.priceKhachSi)
                        : '--'}
                    </div>
                  </div>

                  {/* Giá bán mẫu */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
                    <div className="sm:col-span-1">
                      <label className="block text-xs font-bold text-slate-800">
                        Giá bán mẫu
                      </label>
                      <span className="text-[10px] text-slate-400">Chiết khấu 35% + VAT 8%</span>
                    </div>
                    <div className="sm:col-span-1">
                      <input
                        type="number"
                        placeholder="0"
                        value={formData.priceBanMau}
                        onChange={e => {
                          const val = e.target.value === '' ? '' : Number(e.target.value);
                          setFormData({ ...formData, priceBanMau: val });
                        }}
                        className="w-full px-3 py-1.5 bg-white rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                      />
                    </div>
                    <div className="sm:col-span-1 text-xs text-slate-500 font-medium truncate">
                      {typeof formData.priceBanMau === 'number' && formData.priceBanMau > 0
                        ? formatVND(formData.priceBanMau)
                        : '--'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Buttons */}
              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-transform active:scale-95"
                >
                  <Save className="w-4 h-4" />
                  <span>{editingProduct ? 'Lưu cập nhật' : 'Thêm sản phẩm'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: SINGLE DELETE CONFIRM */}
      {/* ========================================================================= */}
      {productToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-md w-full border border-slate-200 p-5 shadow-2xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>

            <div className="text-center">
              <h3 className="font-extrabold text-slate-900 text-base">Xác nhận xóa sản phẩm</h3>
              <p className="text-xs text-slate-600 mt-2">
                Bạn có chắc chắn muốn xóa sản phẩm sau khỏi hệ thống bảng giá?
              </p>
              <div className="bg-slate-50 border border-slate-200 p-3 rounded-2xl mt-3 text-left">
                <div className="font-bold text-slate-900 text-xs">{productToDelete.product_name}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  SKU: <strong>{productToDelete.sku || 'Chưa có'}</strong> • Danh mục: {productToDelete.category}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setProductToDelete(null)}
                className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
              >
                Hủy bỏ
              </button>
              <button
                onClick={handleConfirmDelete}
                className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition-colors"
              >
                Xác nhận xóa
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: BULK DELETE CONFIRM */}
      {/* ========================================================================= */}
      {isBulkDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-md w-full border border-slate-200 p-5 shadow-2xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="text-center">
              <h3 className="font-extrabold text-slate-900 text-base">Xác nhận xóa hàng loạt</h3>
              <p className="text-xs text-slate-600 mt-2">
                Bạn đang chuẩn bị xóa vĩnh viễn <strong>{selectedIds.length}</strong> sản phẩm đã chọn. Hành động này không thể hoàn tác.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setIsBulkDeleteModalOpen(false)}
                className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
              >
                Hủy bỏ
              </button>
              <button
                onClick={handleConfirmBulkDelete}
                className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition-colors"
              >
                Xóa {selectedIds.length} sản phẩm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: BATCH PRICE ADJUSTMENT */}
      {/* ========================================================================= */}
      {isBatchPriceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-md w-full border border-slate-200 p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Percent className="w-5 h-5 text-blue-600" />
                <h3 className="font-extrabold text-slate-900 text-sm">Điều Chỉnh Giá Hàng Loạt</h3>
              </div>
              <button
                onClick={() => setIsBatchPriceModalOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3.5 text-xs">
              {/* Scope */}
              <div>
                <label className="block font-bold text-slate-700 mb-1">Phạm vi áp dụng</label>
                <div className="space-y-1.5">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="scope"
                      value="selected"
                      checked={batchScope === 'selected'}
                      onChange={() => setBatchScope('selected')}
                    />
                    <span>Các sản phẩm đã tick chọn ({selectedIds.length} sản phẩm)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="scope"
                      value="category"
                      checked={batchScope === 'category'}
                      onChange={() => setBatchScope('category')}
                    />
                    <span>
                      Theo danh mục đang lọc: <strong>{selectedCategory}</strong>
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="scope"
                      value="all"
                      checked={batchScope === 'all'}
                      onChange={() => setBatchScope('all')}
                    />
                    <span>Toàn bộ sản phẩm trong hệ thống ({products.length} sản phẩm)</span>
                  </label>
                </div>
              </div>

              {/* Target Price Type */}
              <div>
                <label className="block font-bold text-slate-700 mb-1">Loại giá cần điều chỉnh</label>
                <select
                  value={batchTargetPrice}
                  onChange={e => setBatchTargetPrice(e.target.value as any)}
                  className="w-full py-2 px-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none"
                >
                  <option value="all">Tất cả các loại giá (Niêm yết, Lẻ, Sỉ, Thầu, Mẫu)</option>
                  <option value="gia_khach_le">Chỉ Giá khách lẻ (VAT 8%)</option>
                  <option value="gia_niem_yet">Chỉ Giá niêm yết (Chưa VAT)</option>
                </select>
              </div>

              {/* Percentage */}
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Mức điều chỉnh (%) <span className="text-slate-400 font-normal">(Dương: tăng, Âm: giảm)</span>
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    step="0.5"
                    value={batchPercent}
                    onChange={e => setBatchPercent(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs font-bold text-center"
                    placeholder="Ví dụ: 5 hoặc -10"
                  />
                  <div className="flex gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={() => setBatchPercent(prev => prev + 5)}
                      className="px-2 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 font-bold"
                    >
                      +5%
                    </button>
                    <button
                      type="button"
                      onClick={() => setBatchPercent(prev => prev - 5)}
                      className="px-2 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 font-bold"
                    >
                      -5%
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
              <button
                onClick={() => setIsBatchPriceModalOpen(false)}
                className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
              >
                Hủy bỏ
              </button>
              <button
                onClick={handleApplyBatchPrice}
                className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors"
              >
                Áp dụng thay đổi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
