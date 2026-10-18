import React, { useState } from 'react';
import type { Product } from '../../types';
import { useApp } from '../../context/AppContext';
import { formatVND } from '../../utils/formatters';
import { 
  Heart, 
  Plus, 
  Check, 
  Copy, 
  Box
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
  selectedPriceKey?: string;
  onOpenDetail?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  selectedPriceKey = 'gia_khach_le', 
  onOpenDetail 
}) => {
  const { 
    isFavorite, 
    toggleFavorite, 
    addToQuotation, 
    addToRecent,
    setSelectedProduct 
  } = useApp();

  const [copied, setCopied] = useState(false);
  const [addedAnim, setAddedAnim] = useState(false);

  const favorited = isFavorite(product.id);

  // Determine active price to display based on selected tier
  const priceDetail = product.prices[selectedPriceKey] || 
    product.prices.gia_khach_le || 
    product.prices.gia_khach_si || 
    product.prices.gia_niem_yet;

  const displayPrice = priceDetail?.value;

  const handleCardClick = () => {
    addToRecent(product.id);
    if (onOpenDetail) {
      onOpenDetail(product);
    } else {
      setSelectedProduct(product);
    }
  };

  const handleAddQuotation = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToQuotation(product, selectedPriceKey);
    setAddedAnim(true);
    setTimeout(() => setAddedAnim(false), 1200);
  };

  const handleToggleFav = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(product.id);
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    const priceStr = displayPrice ? formatVND(displayPrice) : 'Liên hệ';
    const textToCopy = `${product.product_name} (Mã: ${product.sku}) - ĐVT: ${product.unit} - Giá: ${priceStr}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div 
      onClick={handleCardClick}
      itemScope
      itemType="https://schema.org/Product"
      className="group relative bg-white rounded-2xl border border-[#E5EAF1] p-3 sm:p-4 shadow-2xs hover:shadow-sm hover:border-red-300 transition-all duration-150 cursor-pointer flex flex-col justify-between active:scale-[0.99] select-none"
    >
      {/* Top Badges: Brand, Category, Actions */}
      <div>
        <div className="flex items-center justify-between gap-1.5 mb-1.5">
          <div className="flex items-center gap-1 min-w-0 flex-wrap">
            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-[#172033] uppercase tracking-wider shrink-0">
              {product.brand}
            </span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-red-50 text-[#E60012] truncate max-w-[130px]">
              {product.category}
            </span>
          </div>

          {/* Quick touch targets (min 36x36px on mobile) */}
          <div className="flex items-center gap-0.5 shrink-0">
            <button
              type="button"
              onClick={handleCopy}
              className="p-1.5 rounded-lg text-[#64748B] hover:text-[#172033] hover:bg-slate-100 transition-colors"
              title="Sao chép tên và giá"
              aria-label="Sao chép"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            <button
              type="button"
              onClick={handleToggleFav}
              className={`p-1.5 rounded-lg transition-colors ${
                favorited ? 'text-[#E60012] bg-red-50' : 'text-[#64748B] hover:text-[#E60012] hover:bg-slate-100'
              }`}
              title="Lưu yêu thích"
              aria-label="Yêu thích"
            >
              <Heart className={`w-3.5 h-3.5 ${favorited ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Product Name (max 2 lines, clean Vietnamese font) */}
        <h3 itemProp="name" className="font-bold text-[#172033] text-xs sm:text-sm leading-snug line-clamp-2 group-hover:text-[#E60012] transition-colors">
          {product.product_name}
        </h3>

        {/* SKU & Unit */}
        <div className="flex items-center gap-2 mt-1 text-[11px] text-[#64748B]">
          <span itemProp="sku" className="font-mono bg-slate-100 px-1 py-0.2 rounded text-[10px] text-[#172033] font-semibold">
            {product.sku || 'N/A'}
          </span>
          <span className="text-slate-300">•</span>
          <span>ĐVT: <strong className="text-[#172033]">{product.unit}</strong></span>
        </div>

        {/* Specs & Packaging (compact) */}
        {(product.specs || product.packaging) && (
          <div className="mt-1.5 text-[11px] text-[#64748B] bg-slate-50/90 p-1.5 rounded-xl border border-slate-100/80 space-y-0.5">
            {product.specs && (
              <div className="line-clamp-1 font-medium text-[#172033]">
                QC: {product.specs}
              </div>
            )}
            {product.packaging && (
              <div className="line-clamp-1 text-[10px] text-[#64748B] flex items-center gap-1">
                <Box className="w-3 h-3 text-slate-400 shrink-0" />
                <span>{product.packaging}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Price & Action Footer */}
      <div 
        itemProp="offers" 
        itemScope 
        itemType="https://schema.org/Offer" 
        className="mt-3 pt-2.5 border-t border-[#E5EAF1] flex items-end justify-between gap-2"
      >
        <meta itemProp="priceCurrency" content="VND" />
        <meta itemProp="price" content={String(displayPrice || 0)} />
        <meta itemProp="availability" content="https://schema.org/InStock" />
        <div className="min-w-0">
          <div className="text-[10px] font-semibold text-[#64748B] flex items-center gap-1 truncate">
            <span>{priceDetail?.label || 'Giá'}</span>
            {priceDetail?.vat === 'co_vat' && (
              <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1 rounded shrink-0">Có VAT</span>
            )}
            {priceDetail?.vat === 'chua_vat' && (
              <span className="text-[9px] font-bold text-amber-700 bg-amber-50 px-1 rounded shrink-0">Chưa VAT</span>
            )}
          </div>
          <div className="text-sm sm:text-base font-extrabold text-[#E60012] tracking-tight truncate mt-0.5">
            {displayPrice ? formatVND(displayPrice) : 'Liên hệ'}
          </div>
        </div>

        {/* Action Button: Add to Quotation */}
        <button
          type="button"
          onClick={handleAddQuotation}
          className={`h-8 sm:h-9 px-2.5 sm:px-3 rounded-xl font-bold text-xs flex items-center gap-1 shrink-0 transition-all select-none ${
            addedAnim
              ? 'bg-emerald-600 text-white scale-105 shadow-xs'
              : 'bg-[#E60012] hover:bg-[#C90010] active:scale-95 text-white shadow-2xs shadow-red-500/20'
          }`}
          title="Thêm vào báo giá"
        >
          {addedAnim ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Đã thêm</span>
            </>
          ) : (
            <>
              <Plus className="w-3.5 h-3.5" />
              <span>Báo giá</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
};
