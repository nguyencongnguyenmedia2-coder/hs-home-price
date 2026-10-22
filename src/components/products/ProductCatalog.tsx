import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { ProductCard } from './ProductCard';
import { matchesSearch } from '../../utils/formatters';
import { 
  Search, 
  Filter, 
  X, 
  RotateCcw, 
  SlidersHorizontal, 
  ChevronLeft, 
  ChevronRight,
  Layers,
  ArrowUpDown
} from 'lucide-react';

export const ProductCatalog: React.FC = () => {
  const { products, filters, setFilters, resetFilters } = useApp();

  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  // Extract unique categories, brands, units
  const categories = useMemo(() => {
    const set = new Set<string>();
    products.forEach(p => p.category && set.add(p.category));
    return Array.from(set).sort();
  }, [products]);

  const brands = useMemo(() => {
    const set = new Set<string>();
    products.forEach(p => p.brand && set.add(p.brand));
    return Array.from(set).sort();
  }, [products]);

  const units = useMemo(() => {
    const set = new Set<string>();
    products.forEach(p => p.unit && set.add(p.unit));
    return Array.from(set).sort();
  }, [products]);

  // Filter & Search logic
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      // Category filter
      if (filters.category !== 'ALL' && p.category !== filters.category) {
        return false;
      }
      // Brand filter
      if (filters.brand !== 'ALL' && p.brand !== filters.brand) {
        return false;
      }
      // Unit filter
      if (filters.unit !== 'ALL' && p.unit !== filters.unit) {
        return false;
      }
      // Text search in name, sku, specs, packaging, notes, brand, category
      if (filters.searchQuery.trim()) {
        const fullSearchTarget = `${p.product_name} ${p.sku} ${p.specs} ${p.packaging} ${p.brand} ${p.category} ${p.notes}`;
        if (!matchesSearch(fullSearchTarget, filters.searchQuery)) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'newest') {
        if (a.created_at && b.created_at) {
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        }
        if (a.created_at) return -1;
        if (b.created_at) return 1;
        return 0;
      }
      if (filters.sortBy === 'name_asc') {
        return a.product_name.localeCompare(b.product_name, 'vi');
      }
      if (filters.sortBy === 'name_desc') {
        return b.product_name.localeCompare(a.product_name, 'vi');
      }
      const priceA = a.prices?.[filters.selectedPriceGroup]?.value || a.prices?.gia_khach_le?.value || 0;
      const priceB = b.prices?.[filters.selectedPriceGroup]?.value || b.prices?.gia_khach_le?.value || 0;
      if (filters.sortBy === 'price_asc') {
        return priceA - priceB;
      }
      if (filters.sortBy === 'price_desc') {
        return priceB - priceA;
      }
      return 0;
    });
  }, [products, filters]);

  // Reset to page 1 on filter changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const activeFiltersCount = 
    (filters.category !== 'ALL' ? 1 : 0) +
    (filters.brand !== 'ALL' ? 1 : 0) +
    (filters.unit !== 'ALL' ? 1 : 0) +
    (filters.searchQuery ? 1 : 0);

  const priceTiers = [
    { key: 'gia_khach_le', label: 'Khách lẻ' },
    { key: 'gia_thau_tho', label: 'Thầu thợ' },
    { key: 'gia_khach_si', label: 'Khách sỉ' },
    { key: 'gia_ban_mau', label: 'Bán mẫu' },
    { key: 'gia_niem_yet', label: 'Niêm yết' }
  ];

  return (
    <div className="space-y-3 sm:space-y-4 max-w-6xl mx-auto">
      
      {/* Page Heading for SEO */}
      <div className="flex items-center justify-between pt-1">
        <div>
          <h1 className="text-base sm:text-xl font-extrabold text-[#172033] tracking-tight">
            Danh Mục Sản Phẩm & Bảng Giá Hoa Sen Home
          </h1>
          <p className="text-[11px] sm:text-xs text-[#64748B]">
            Tra cứu hơn 290+ quy cách sản phẩm vật liệu xây dựng chính hãng
          </p>
        </div>
        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E5EAF1] text-xs font-semibold text-[#172033] shadow-2xs">
          <span>{filteredProducts.length} sản phẩm</span>
        </div>
      </div>

      {/* Sticky Filter Header Container */}
      <div className="sticky top-14 sm:top-16 z-30 bg-[#F5F7FA]/95 backdrop-blur-md pt-1 pb-2 space-y-2.5">
        
        {/* Main Search Bar */}
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2 stroke-[2.2]" />
            <input
              type="text"
              value={filters.searchQuery}
              onChange={e => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
              placeholder="Tìm theo tên, mã SKU, thương hiệu, quy cách..."
              className="w-full pl-9 pr-8 py-2.5 rounded-2xl bg-white border border-[#E5EAF1] text-xs sm:text-sm text-[#172033] placeholder-[#64748B] focus:outline-none focus:border-[#E60012] focus:ring-2 focus:ring-red-100 transition-colors shadow-2xs"
            />
            {filters.searchQuery && (
              <button
                type="button"
                onClick={() => setFilters(prev => ({ ...prev, searchQuery: '' }))}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#64748B] hover:text-[#172033]"
                aria-label="Xóa từ khóa"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Filter Drawer Toggle Button */}
          <button
            type="button"
            onClick={() => setShowMobileFilter(!showMobileFilter)}
            className={`min-h-[42px] px-3 rounded-2xl border text-xs font-bold flex items-center gap-1.5 transition-colors shadow-2xs shrink-0 select-none ${
              activeFiltersCount > 0 
                ? 'bg-red-50 border-red-300 text-[#E60012]' 
                : 'bg-white border-[#E5EAF1] text-[#172033] hover:bg-slate-50'
            }`}
            aria-label="Mở bộ lọc"
          >
            <Filter className="w-4 h-4 stroke-[2.2]" />
            <span className="hidden xs:inline">Bộ lọc</span>
            {activeFiltersCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-[#E60012] text-white text-[10px] font-bold flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>
        </div>

        {/* Horizontal Chips: Customer Price Tier Selection */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 no-scrollbar">
          <span className="text-[11px] font-semibold text-[#64748B] shrink-0 pl-0.5">Giá xem:</span>
          {priceTiers.map(tier => {
            const isSelected = filters.selectedPriceGroup === tier.key;
            return (
              <button
                key={tier.key}
                type="button"
                onClick={() => setFilters(prev => ({ ...prev, selectedPriceGroup: tier.key as any }))}
                className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all shrink-0 select-none ${
                  isSelected
                    ? 'bg-[#E60012] text-white shadow-2xs'
                    : 'bg-white text-[#172033] border border-[#E5EAF1] hover:bg-slate-50'
                }`}
              >
                {tier.label}
              </button>
            );
          })}
        </div>

        {/* Quick Category Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 no-scrollbar">
          <button
            type="button"
            onClick={() => setFilters(prev => ({ ...prev, category: 'ALL' }))}
            className={`px-2.5 py-0.5 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-colors shrink-0 ${
              filters.category === 'ALL'
                ? 'bg-[#172033] text-white'
                : 'bg-white text-[#64748B] border border-[#E5EAF1] hover:text-[#172033]'
            }`}
          >
            Tất cả danh mục ({categories.length})
          </button>
          {categories.slice(0, 10).map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilters(prev => ({ ...prev, category: cat }))}
              className={`px-2.5 py-0.5 rounded-lg text-[11px] font-medium whitespace-nowrap transition-colors shrink-0 ${
                filters.category === cat
                  ? 'bg-[#E60012] text-white font-bold'
                  : 'bg-white text-[#64748B] border border-[#E5EAF1] hover:text-[#172033]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Advanced Filter Drawer / Card (Collapsible) */}
      {showMobileFilter && (
        <div className="bg-white p-4 rounded-3xl border border-[#E5EAF1] shadow-sm space-y-3 animate-in fade-in">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h3 className="font-extrabold text-xs sm:text-sm text-[#172033] flex items-center gap-1.5">
              <SlidersHorizontal className="w-4 h-4 text-[#E60012]" />
              <span>Bộ lọc nâng cao</span>
            </h3>
            {activeFiltersCount > 0 && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-[11px] font-bold text-[#E60012] hover:underline flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Đặt lại</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            {/* Category Select */}
            <div>
              <label className="font-semibold text-[#64748B] block mb-1">Danh mục:</label>
              <select
                value={filters.category}
                onChange={e => setFilters(prev => ({ ...prev, category: e.target.value }))}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-[#E5EAF1] font-semibold text-[#172033] focus:outline-none focus:border-[#E60012]"
              >
                <option value="ALL">Tất cả danh mục ({categories.length})</option>
                {categories.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Brand Select */}
            <div>
              <label className="font-semibold text-[#64748B] block mb-1">Thương hiệu:</label>
              <select
                value={filters.brand}
                onChange={e => setFilters(prev => ({ ...prev, brand: e.target.value }))}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-[#E5EAF1] font-semibold text-[#172033] focus:outline-none focus:border-[#E60012]"
              >
                <option value="ALL">Tất cả thương hiệu ({brands.length})</option>
                {brands.map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* Unit Select */}
            <div>
              <label className="font-semibold text-[#64748B] block mb-1">Đơn vị tính (ĐVT):</label>
              <select
                value={filters.unit}
                onChange={e => setFilters(prev => ({ ...prev, unit: e.target.value }))}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-[#E5EAF1] font-semibold text-[#172033] focus:outline-none focus:border-[#E60012]"
              >
                <option value="ALL">Tất cả ĐVT ({units.length})</option>
                {units.map(u => (
                  <option key={u} value={u}>{u}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Sort selector */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-semibold text-[#64748B]">Sắp xếp theo:</span>
            <select
              value={filters.sortBy}
              onChange={e => setFilters(prev => ({ ...prev, sortBy: e.target.value as any }))}
              className="px-3 py-1.5 rounded-xl bg-slate-50 border border-[#E5EAF1] text-xs font-semibold text-[#172033] focus:outline-none"
            >
              <option value="newest">Mới cập nhật / Mới thêm</option>
              <option value="name_asc">Tên: A → Z</option>
              <option value="name_desc">Tên: Z → A</option>
              <option value="price_asc">Giá: Thấp → Cao</option>
              <option value="price_desc">Giá: Cao → Thấp</option>
            </select>
          </div>
        </div>
      )}

      {/* Results Header Bar */}
      <div className="flex items-center justify-between text-xs text-[#64748B] px-1">
        <div>
          Tìm thấy <strong className="text-[#172033] font-bold">{filteredProducts.length}</strong> sản phẩm
          {filters.category !== 'ALL' && <span className="text-[#E60012]"> • {filters.category}</span>}
        </div>
        {activeFiltersCount > 0 && (
          <button
            type="button"
            onClick={resetFilters}
            className="text-[11px] font-bold text-[#E60012] hover:underline"
          >
            Xóa bộ lọc
          </button>
        )}
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-3xl border border-[#E5EAF1] p-8 sm:p-12 text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E60012] flex items-center justify-center mx-auto font-bold">
            <Search className="w-6 h-6 stroke-[2]" />
          </div>
          <div>
            <h3 className="font-bold text-[#172033] text-sm sm:text-base">Không tìm thấy sản phẩm phù hợp</h3>
            <p className="text-xs text-[#64748B] mt-1 max-w-xs mx-auto">
              Thử tìm kiếm với từ khóa khác hoặc xóa bớt tiêu chí trong bộ lọc.
            </p>
          </div>
          <button
            type="button"
            onClick={resetFilters}
            className="px-4 py-2 rounded-xl bg-[#E60012] text-white text-xs font-bold hover:bg-[#C90010] transition-colors"
          >
            Hiển thị toàn bộ 292 sản phẩm
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-3.5">
          {paginatedProducts.map(prod => (
            <ProductCard
              key={prod.id}
              product={prod}
              selectedPriceKey={filters.selectedPriceGroup}
            />
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-1.5 pt-4 pb-2">
          <button
            type="button"
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="min-w-[40px] min-h-[40px] px-2.5 rounded-xl border border-[#E5EAF1] bg-white text-[#172033] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center hover:bg-slate-50 transition-colors shadow-2xs"
            aria-label="Trang trước"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.2]" />
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => {
              // Only display first, last, current and nearby pages
              if (
                page === 1 || 
                page === totalPages || 
                (page >= currentPage - 1 && page <= currentPage + 1)
              ) {
                return (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={`min-w-[36px] min-h-[36px] rounded-xl text-xs font-bold transition-all ${
                      currentPage === page
                        ? 'bg-[#E60012] text-white shadow-xs'
                        : 'bg-white text-[#172033] border border-[#E5EAF1] hover:bg-slate-50'
                    }`}
                  >
                    {page}
                  </button>
                );
              }
              if (page === currentPage - 2 || page === currentPage + 2) {
                return <span key={page} className="text-[#64748B] text-xs px-1">...</span>;
              }
              return null;
            })}
          </div>

          <button
            type="button"
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="min-w-[40px] min-h-[40px] px-2.5 rounded-xl border border-[#E5EAF1] bg-white text-[#172033] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center hover:bg-slate-50 transition-colors shadow-2xs"
            aria-label="Trang tiếp theo"
          >
            <ChevronRight className="w-4 h-4 stroke-[2.2]" />
          </button>
        </div>
      )}

    </div>
  );
};
