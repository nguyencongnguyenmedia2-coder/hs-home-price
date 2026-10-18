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
  ChevronRight,
  SunMedium,
  Waves,
  Boxes,
  Pipette,
  Anchor,
  FlaskConical,
  Paintbrush,
  Flame,
  Shield,
  Sun,
  ToggleRight,
  Lightbulb,
  ShieldCheck,
  Truck,
  Disc,
  Plug,
  Hammer,
  Package,
  Grid
} from 'lucide-react';

interface CategoryMeta {
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
}

const CATEGORY_META_MAP: Record<string, CategoryMeta> = {
  'Máy nước nóng NLMT': {
    icon: SunMedium,
    iconBg: 'bg-amber-50 border-amber-200/80',
    iconColor: 'text-amber-600'
  },
  'Bồn nước Inox': {
    icon: Waves,
    iconBg: 'bg-sky-50 border-sky-200/80',
    iconColor: 'text-sky-600'
  },
  'Bồn tự hoại': {
    icon: Boxes,
    iconBg: 'bg-teal-50 border-teal-200/80',
    iconColor: 'text-teal-600'
  },
  'Van vòi đồng': {
    icon: Pipette,
    iconBg: 'bg-amber-50 border-amber-200/80',
    iconColor: 'text-amber-700'
  },
  'Vít & Phụ kiện liên kết': {
    icon: Anchor,
    iconBg: 'bg-slate-100 border-slate-200/80',
    iconColor: 'text-slate-700'
  },
  'Keo Silicone': {
    icon: FlaskConical,
    iconBg: 'bg-purple-50 border-purple-200/80',
    iconColor: 'text-purple-600'
  },
  'Sơn kim loại': {
    icon: Paintbrush,
    iconBg: 'bg-rose-50 border-rose-200/80',
    iconColor: 'text-rose-600'
  },
  'Sơn xịt': {
    icon: Sparkles,
    iconBg: 'bg-pink-50 border-pink-200/80',
    iconColor: 'text-pink-600'
  },
  'Vật liệu hàn': {
    icon: Flame,
    iconBg: 'bg-red-50 border-red-200/80',
    iconColor: 'text-red-600'
  },
  'Tấm cách nhiệt': {
    icon: Shield,
    iconBg: 'bg-emerald-50 border-emerald-200/80',
    iconColor: 'text-emerald-600'
  },
  'Tấm lợp lấy sáng': {
    icon: Sun,
    iconBg: 'bg-yellow-50 border-yellow-200/80',
    iconColor: 'text-yellow-600'
  },
  'Thiết bị đóng ngắt': {
    icon: ToggleRight,
    iconBg: 'bg-indigo-50 border-indigo-200/80',
    iconColor: 'text-indigo-600'
  },
  'Thiết bị chiếu sáng LED': {
    icon: Lightbulb,
    iconBg: 'bg-amber-50 border-amber-200/80',
    iconColor: 'text-amber-500'
  },
  'Tấm xi măng Cemboard': {
    icon: Layers,
    iconBg: 'bg-stone-100 border-stone-200/80',
    iconColor: 'text-stone-700'
  },
  'Hóa chất chống thấm': {
    icon: ShieldCheck,
    iconBg: 'bg-blue-50 border-blue-200/80',
    iconColor: 'text-blue-600'
  },
  'Xe rùa': {
    icon: Truck,
    iconBg: 'bg-orange-50 border-orange-200/80',
    iconColor: 'text-orange-600'
  },
  'Đá cắt - Đá mài': {
    icon: Disc,
    iconBg: 'bg-zinc-100 border-zinc-200/80',
    iconColor: 'text-zinc-700'
  },
  'Công tắc - Ổ cắm': {
    icon: Plug,
    iconBg: 'bg-cyan-50 border-cyan-200/80',
    iconColor: 'text-cyan-600'
  },
  'Máy móc & Dụng cụ cầm tay': {
    icon: Hammer,
    iconBg: 'bg-red-50 border-red-200/80',
    iconColor: 'text-[#E60012]'
  }
};

const getCategoryMeta = (name: string): CategoryMeta => {
  return CATEGORY_META_MAP[name] || {
    icon: Package,
    iconBg: 'bg-slate-100 border-slate-200/80',
    iconColor: 'text-slate-600'
  };
};

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

        {/* Grid: 2 cols on mobile, 3 cols sm, 4 cols md, 5 cols lg/xl (perfect 20-item symmetry) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-3">
          {categories.map(cat => {
            const meta = getCategoryMeta(cat.name);
            const IconComp = meta.icon;

            return (
              <button
                key={cat.name}
                type="button"
                onClick={() => handleCategoryClick(cat.name)}
                className="group relative flex flex-col justify-between p-3 sm:p-3.5 rounded-2xl bg-white border border-[#E5EAF1] hover:border-red-300 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 text-left overflow-hidden min-h-[118px] sm:min-h-[128px]"
              >
                {/* Top accent glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E60012] to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Top header row inside card: Icon badge + Count */}
                <div className="flex items-center justify-between gap-2 w-full">
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border shadow-2xs transition-all duration-200 group-hover:scale-110 group-hover:rotate-2 ${meta.iconBg}`}>
                    <IconComp className={`w-4 h-4 sm:w-5 sm:h-5 ${meta.iconColor}`} />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 bg-slate-100 group-hover:bg-red-50 group-hover:text-[#E60012] px-2 py-0.5 rounded-full transition-colors shrink-0">
                    {cat.count} SP
                  </span>
                </div>

                {/* Category title */}
                <div className="mt-2.5">
                  <div className="font-extrabold text-xs sm:text-[13px] text-[#172033] line-clamp-2 leading-snug group-hover:text-[#E60012] transition-colors">
                    {cat.name}
                  </div>
                </div>

                {/* Bottom micro-bar */}
                <div className="mt-2 flex items-center justify-between pt-1.5 border-t border-slate-100 text-[10px] font-medium text-slate-400 group-hover:text-[#E60012] transition-colors">
                  <span>Tra cứu giá</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            );
          })}

          {/* 20th Card: Xem tất cả kho hàng 292 sản phẩm */}
          <button
            type="button"
            onClick={() => {
              setFilters(prev => ({ ...prev, category: 'ALL' }));
              setActiveTab('catalog');
            }}
            className="group relative flex flex-col justify-between p-3 sm:p-3.5 rounded-2xl bg-gradient-to-br from-[#172033] to-[#0f172a] hover:from-[#E60012] hover:to-[#B8000E] text-white shadow-2xs hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 text-left overflow-hidden min-h-[118px] sm:min-h-[128px]"
          >
            <div className="flex items-center justify-between gap-2 w-full">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center border border-white/20 text-white shadow-2xs transition-all duration-200 group-hover:scale-110">
                <Grid className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 group-hover:text-white" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-white/90 bg-white/10 px-2 py-0.5 rounded-full shrink-0">
                {products.length} SP
              </span>
            </div>

            <div className="mt-2.5">
              <div className="font-extrabold text-xs sm:text-[13px] text-white line-clamp-2 leading-snug">
                Tất cả sản phẩm
              </div>
              <div className="text-[10px] text-slate-300 group-hover:text-red-100 line-clamp-1 mt-0.5">
                Kho tổng Hoa Sen Home
              </div>
            </div>

            <div className="mt-2 flex items-center justify-between pt-1.5 border-t border-white/10 text-[10px] font-semibold text-slate-300 group-hover:text-white">
              <span>Xem toàn bộ</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
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

      {/* Quick Support Banner for Field Staff */}
      <section className="bg-gradient-to-r from-red-50/70 via-white to-blue-50/70 rounded-2xl border border-slate-200/80 p-3.5 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs shadow-2xs">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
            AD
          </div>
          <div className="text-center sm:text-left">
            <span className="font-extrabold text-[#172033] block">Cần hỗ trợ tra cứu giá hoặc phản hồi hệ thống?</span>
            <span className="text-[11px] text-[#64748B]">Admin thiết kế website: <strong>Nguyễn Công Nguyên</strong></span>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap justify-center">
          <a
            href="https://zalo.me/0934811307"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1 shadow-xs transition-colors"
          >
            <span>💬 Zalo: 0934 811 307</span>
          </a>
          <a
            href="tel:0981008274"
            className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1 shadow-xs transition-colors"
          >
            <span>📞 ĐT: 0981 008 274</span>
          </a>
        </div>
      </section>

    </div>
  );
};
