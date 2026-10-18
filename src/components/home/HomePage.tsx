import React, { useRef, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { ProductCard } from '../products/ProductCard';
import { 
  Search, 
  Layers, 
  Clock, 
  ReceiptText, 
  TrendingUp, 
  ArrowRight, 
  X,
  Sparkles,
  ChevronRight
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { 
    products, 
    currentVersion, 
    filters, 
    setFilters, 
    setActiveTab, 
    recentProductIds, 
    favoriteIds 
  } = useApp();

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Auto focus search input on desktop or mount
  useEffect(() => {
    if (window.innerWidth > 768) {
      searchInputRef.current?.focus();
    }
  }, []);

  // Compute categories with counts
  const categoriesMap: Record<string, number> = {};
  products.forEach(p => {
    categoriesMap[p.category] = (categoriesMap[p.category] || 0) + 1;
  });

  const categories = Object.entries(categoriesMap).map(([name, count]) => ({
    name,
    count
  }));

  // Recent products
  const recentProducts = recentProductIds
    .map(id => products.find(p => p.id === id))
    .filter(Boolean) as typeof products;

  // Fallback popular products when no recent items
  const displayProducts = recentProducts.length > 0 
    ? recentProducts.slice(0, 4) 
    : products.slice(0, 4);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveTab('catalog');
  };

  const handleCategoryClick = (categoryName: string) => {
    setFilters(prev => ({ ...prev, category: categoryName, searchQuery: '' }));
    setActiveTab('catalog');
  };

  const popularKeywords = ['Bồn nước', 'Máy NLMT', 'Vít bắn tôn', 'Sơn xịt', 'Đèn LED', 'Cemboard', 'Siemens'];

  return (
    <div className="space-y-4 sm:space-y-6 max-w-5xl mx-auto">
      
      {/* KHU VỰC 1: Lời chào ngắn gọn */}
      <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
        <div className="flex items-center gap-2.5">
          <img src="/hoa-sen-home-logo.png" alt="Hoa Sen Home" className="w-9 h-9 rounded-xl object-cover shadow-xs shrink-0" />
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-[#172033] tracking-tight">
              Tra cứu giá nhanh
            </h1>
            <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">
              Tìm sản phẩm và báo giá ngay tại điểm bán.
            </p>
          </div>
        </div>
        
        {/* Version Indicator */}
        <div className="self-start sm:self-auto inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-[#E5EAF1] text-[11px] font-medium text-[#64748B] shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Bảng giá: <strong className="text-[#172033] font-semibold">{currentVersion.name}</strong></span>
        </div>
      </section>

      {/* KHU VỰC 2: Thanh tìm kiếm chính */}
      <section className="space-y-2.5">
        <form onSubmit={handleSearchSubmit} className="relative">
          <div className="relative flex items-center h-14 sm:h-[56px] bg-white rounded-2xl px-3.5 border border-[#E5EAF1] shadow-xs focus-within:border-[#E60012] focus-within:ring-3 focus-within:ring-red-100/60 transition-all">
            <Search className="w-5 h-5 text-[#64748B] shrink-0 mr-2.5 stroke-[2.2]" />
            <input
              ref={searchInputRef}
              type="text"
              value={filters.searchQuery}
              onChange={e => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
              placeholder="Tên sản phẩm, mã hàng, quy cách..."
              className="w-full text-sm sm:text-base text-[#172033] placeholder-[#64748B] focus:outline-none bg-transparent"
              enterKeyHint="search"
            />
            {filters.searchQuery && (
              <button
                type="button"
                onClick={() => setFilters(prev => ({ ...prev, searchQuery: '' }))}
                className="p-1.5 rounded-full text-[#64748B] hover:text-[#172033] hover:bg-slate-100 transition-colors mr-1"
                aria-label="Xóa từ khóa"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="submit"
              className="px-3.5 py-2 rounded-xl bg-[#E60012] hover:bg-[#C90010] text-white text-xs sm:text-sm font-bold shadow-xs transition-colors shrink-0 active:scale-95"
            >
              Tìm
            </button>
          </div>
        </form>

        {/* Gợi ý từ khóa phổ biến */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
          <span className="text-[#64748B] text-[11px] shrink-0 font-medium">Gợi ý:</span>
          {popularKeywords.map(kw => (
            <button
              key={kw}
              type="button"
              onClick={() => {
                setFilters(prev => ({ ...prev, searchQuery: kw, category: 'ALL' }));
                setActiveTab('catalog');
              }}
              className="px-2.5 py-1 rounded-full bg-white hover:bg-red-50 hover:text-[#E60012] hover:border-red-200 border border-[#E5EAF1] text-[#172033] text-[11px] font-medium whitespace-nowrap transition-colors shadow-2xs"
            >
              {kw}
            </button>
          ))}
        </div>
      </section>

      {/* KHU VỰC 3: Lối tắt thao tác nhanh */}
      <section className="grid grid-cols-2 gap-2.5 sm:gap-3">
        <button
          type="button"
          onClick={() => setActiveTab('catalog')}
          className="min-h-[48px] p-3 rounded-2xl bg-white border border-[#E5EAF1] hover:border-slate-300 active:bg-slate-50 flex items-center justify-center gap-2.5 shadow-2xs transition-all select-none group"
        >
          <div className="w-8 h-8 rounded-xl bg-slate-100 text-[#172033] flex items-center justify-center font-bold shrink-0 group-hover:scale-105 transition-transform">
            <Layers className="w-4 h-4 stroke-[2.2]" />
          </div>
          <div className="text-left min-w-0">
            <div className="text-xs sm:text-sm font-bold text-[#172033] truncate">
              Tra cứu sản phẩm
            </div>
            <div className="text-[10px] text-[#64748B] truncate">
              {products.length} sản phẩm
            </div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('quotation')}
          className="min-h-[48px] p-3 rounded-2xl bg-[#E60012] hover:bg-[#C90010] active:scale-[0.98] text-white flex items-center justify-center gap-2.5 shadow-xs shadow-red-500/20 transition-all select-none group"
        >
          <div className="w-8 h-8 rounded-xl bg-white/20 text-white flex items-center justify-center font-bold shrink-0 group-hover:scale-105 transition-transform">
            <ReceiptText className="w-4 h-4 stroke-[2.2]" />
          </div>
          <div className="text-left min-w-0">
            <div className="text-xs sm:text-sm font-bold text-white truncate">
              Tạo báo giá
            </div>
            <div className="text-[10px] text-red-100 truncate">
              Xuất PDF / Lưu ảnh
            </div>
          </div>
        </button>
      </section>

      {/* KHU VỰC 4: Danh mục sản phẩm (Grid 2 cột trên điện thoại) */}
      <section className="space-y-2.5">
        <div className="flex items-center justify-between">
          <h2 className="text-sm sm:text-base font-extrabold text-[#172033] flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-[#E60012] stroke-[2.2]" />
            <span>Danh mục sản phẩm ({categories.length})</span>
          </h2>
          <button
            type="button"
            onClick={() => {
              setFilters(prev => ({ ...prev, category: 'ALL' }));
              setActiveTab('catalog');
            }}
            className="text-xs font-bold text-[#E60012] hover:text-[#C90010] flex items-center gap-0.5"
          >
            <span>Tất cả</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 2-column grid on mobile (320px - 430px), scaling on tablet/desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-2.5">
          {categories.map(cat => (
            <button
              key={cat.name}
              type="button"
              onClick={() => handleCategoryClick(cat.name)}
              className="text-left p-2.5 sm:p-3 rounded-2xl bg-white border border-[#E5EAF1] hover:border-red-300 hover:bg-red-50/20 active:scale-[0.98] transition-all flex flex-col justify-between h-20 sm:h-22 shadow-2xs group"
            >
              <div className="font-bold text-xs sm:text-sm text-[#172033] line-clamp-2 leading-snug group-hover:text-[#E60012] transition-colors">
                {cat.name}
              </div>
              <div className="text-[10px] sm:text-[11px] font-semibold text-[#64748B] flex items-center justify-between mt-1">
                <span>{cat.count} SP</span>
                <span className="text-slate-300 group-hover:text-[#E60012] group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* KHU VỰC 5: Sản phẩm vừa xem / Nổi bật */}
      <section className="space-y-2.5">
        <div className="flex items-center justify-between">
          <h2 className="text-sm sm:text-base font-extrabold text-[#172033] flex items-center gap-1.5">
            {recentProducts.length > 0 ? (
              <>
                <Clock className="w-4 h-4 text-amber-500 stroke-[2.2]" />
                <span>Sản phẩm vừa xem ({recentProducts.length})</span>
              </>
            ) : (
              <>
                <TrendingUp className="w-4 h-4 text-emerald-600 stroke-[2.2]" />
                <span>Sản phẩm nổi bật</span>
              </>
            )}
          </h2>
          <button
            type="button"
            onClick={() => setActiveTab('catalog')}
            className="text-xs font-bold text-[#E60012] hover:text-[#C90010] flex items-center gap-0.5"
          >
            <span>Xem tất cả</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
          {displayProducts.map(prod => (
            <ProductCard
              key={prod.id}
              product={prod}
              selectedPriceKey={filters.selectedPriceGroup}
            />
          ))}
        </div>
      </section>

    </div>
  );
};
