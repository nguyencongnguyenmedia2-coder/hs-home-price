import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ProductCard } from '../products/ProductCard';
import { matchesSearch } from '../../utils/formatters';
import { Heart, Search, Trash2, ReceiptText, Layers, AlertCircle } from 'lucide-react';

export const FavoritesPage: React.FC = () => {
  const { 
    favoriteIds, 
    products, 
    toggleFavorite, 
    addToQuotation, 
    setActiveTab, 
    filters 
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');

  // Get favorite products
  const favoriteProducts = products.filter(p => favoriteIds.includes(p.id));

  // Filter with local search
  const filteredFavorites = favoriteProducts.filter(p => {
    if (!searchQuery.trim()) return true;
    const target = `${p.product_name} ${p.sku} ${p.brand} ${p.category} ${p.specs}`;
    return matchesSearch(target, searchQuery);
  });

  const handleAddAllToQuotation = () => {
    filteredFavorites.forEach(p => {
      addToQuotation(p, filters.selectedPriceGroup, 1);
    });
    setActiveTab('quotation');
  };

  return (
    <div className="space-y-4 pb-24 md:pb-12 max-w-6xl mx-auto">
      
      {/* Header Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
            <span>Sản Phẩm Yêu Thích & Đã Lưu</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 font-bold">
              {favoriteProducts.length}
            </span>
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Các sản phẩm thường bán hoặc cần tư vấn nhanh khi gặp khách hàng.
          </p>
        </div>

        {favoriteProducts.length > 0 && (
          <div className="flex items-center gap-2">
            <button
              onClick={handleAddAllToQuotation}
              className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-red-500/20 active:scale-95 transition-all"
            >
              <ReceiptText className="w-4 h-4" />
              <span>Thêm tất cả ({filteredFavorites.length}) vào Báo giá</span>
            </button>
          </div>
        )}
      </div>

      {/* Local Search in Favorites */}
      {favoriteProducts.length > 0 && (
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm trong danh sách đã lưu..."
            className="w-full pl-9 pr-3 py-2 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-red-500"
          />
        </div>
      )}

      {/* Grid of Favorites */}
      {favoriteProducts.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center mx-auto">
            <Heart className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-slate-900">Chưa có sản phẩm nào được lưu</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-sm mx-auto">
              Nhấn vào biểu tượng trái tim trên bất kỳ thẻ sản phẩm nào để lưu lại và truy cập nhanh tại đây.
            </p>
          </div>
          <button
            onClick={() => setActiveTab('catalog')}
            className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors inline-flex items-center gap-2"
          >
            <Layers className="w-4 h-4" />
            <span>Xem danh mục sản phẩm</span>
          </button>
        </div>
      ) : filteredFavorites.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 text-center text-xs text-slate-500">
          Không tìm thấy sản phẩm nào khớp với từ khóa "{searchQuery}" trong danh sách yêu thích.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {filteredFavorites.map(prod => (
            <ProductCard
              key={prod.id}
              product={prod}
              selectedPriceKey={filters.selectedPriceGroup}
            />
          ))}
        </div>
      )}

    </div>
  );
};
