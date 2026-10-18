import React, { useState } from 'react';
import type { Product } from '../../types';
import { useApp } from '../../context/AppContext';
import { formatVND } from '../../utils/formatters';
import { 
  X, 
  Heart, 
  Plus, 
  Copy, 
  Check, 
  Share2, 
  Box, 
  FileSpreadsheet, 
  ShieldAlert, 
  Tag, 
  Calendar,
  ArrowLeft
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const { 
    isFavorite, 
    toggleFavorite, 
    addToQuotation, 
    currentVersion, 
    products, 
    setSelectedProduct 
  } = useApp();

  const [quantity, setQuantity] = useState<number>(1);
  const [selectedPriceKey, setSelectedPriceKey] = useState<string>('gia_khach_le');
  const [copiedPrice, setCopiedPrice] = useState<string | null>(null);
  const [copiedInfo, setCopiedInfo] = useState(false);
  const [addedQuotation, setAddedQuotation] = useState(false);

  if (!product) return null;

  const favorited = isFavorite(product.id);

  // Available price list from Excel
  const availablePrices = Object.entries(product.prices)
    .filter(([_, detail]) => detail !== null && detail.value > 0)
    .map(([key, detail]) => ({ key, ...detail! }));

  const activePriceDetail = product.prices[selectedPriceKey] || availablePrices[0];

  const handleCopyPrice = (label: string, val: number) => {
    navigator.clipboard.writeText(`${label}: ${formatVND(val)}`);
    setCopiedPrice(label);
    setTimeout(() => setCopiedPrice(null), 1500);
  };

  const handleCopyAllInfo = () => {
    let text = `SẢN PHẨM: ${product.product_name}\n`;
    text += `Mã SKU: ${product.sku}\n`;
    text += `Thương hiệu: ${product.brand} | Danh mục: ${product.category}\n`;
    text += `ĐVT: ${product.unit}${product.specs ? ` | Quy cách: ${product.specs}` : ''}\n`;
    if (product.packaging) text += `Đóng gói: ${product.packaging}\n`;
    text += `--- BẢNG GIÁ (${currentVersion.name}) ---\n`;
    availablePrices.forEach(p => {
      text += `• ${p.label}: ${formatVND(p.value)} (${p.vat === 'co_vat' ? 'Có VAT' : 'Chưa VAT'})\n`;
    });
    if (product.notes) text += `Ghi chú: ${product.notes}\n`;

    navigator.clipboard.writeText(text);
    setCopiedInfo(true);
    setTimeout(() => setCopiedInfo(false), 1500);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.product_name,
        text: `Hoa Sen Home: ${product.product_name} - Giá: ${formatVND(activePriceDetail?.value)}`,
        url: window.location.href
      }).catch(() => {});
    } else {
      handleCopyAllInfo();
    }
  };

  const handleAddQuotation = () => {
    addToQuotation(product, selectedPriceKey, quantity);
    setAddedQuotation(true);
    setTimeout(() => setAddedQuotation(false), 1500);
  };

  // Find related products in same category
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div 
        className="relative bg-white w-full max-w-xl sm:rounded-3xl shadow-2xl border border-slate-100 flex flex-col max-h-[95vh] sm:max-h-[90vh] rounded-t-3xl animate-in slide-in-from-bottom-5 duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="p-3.5 sm:p-5 border-b border-[#E5EAF1] flex items-center justify-between gap-2 bg-white sticky top-0 z-10 pt-[max(0.875rem,env(safe-area-inset-top))]">
          <button
            type="button"
            onClick={onClose}
            className="min-w-[40px] min-h-[40px] rounded-xl text-[#172033] hover:bg-slate-100 flex items-center justify-center transition-colors"
            aria-label="Đóng"
          >
            <ArrowLeft className="w-5 h-5 stroke-[2.2]" />
          </button>

          <div className="flex-1 min-w-0 px-2 text-center sm:text-left">
            <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block truncate">
              {product.brand} • {product.category}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => toggleFavorite(product.id)}
              className={`min-w-[40px] min-h-[40px] rounded-xl flex items-center justify-center transition-colors ${
                favorited ? 'bg-red-50 text-[#E60012]' : 'text-[#64748B] hover:text-[#E60012] hover:bg-slate-100'
              }`}
              title="Lưu yêu thích"
            >
              <Heart className={`w-5 h-5 ${favorited ? 'fill-current' : ''}`} />
            </button>
            <button
              type="button"
              onClick={handleShare}
              className="min-w-[40px] min-h-[40px] rounded-xl text-[#64748B] hover:text-[#172033] hover:bg-slate-100 flex items-center justify-center transition-colors"
              title="Chia sẻ"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body - Scrollable Content */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1">
          
          {/* Product Title & Basic Info */}
          <div className="space-y-1.5">
            <h2 className="text-base sm:text-lg font-extrabold text-[#172033] leading-snug">
              {product.product_name}
            </h2>
            <div className="flex items-center gap-2 flex-wrap text-xs text-[#64748B]">
              <span className="font-mono bg-slate-100 px-2 py-0.5 rounded text-[11px] text-[#172033] font-bold">
                Mã: {product.sku || 'N/A'}
              </span>
              <span>•</span>
              <span>Đơn vị tính: <strong className="text-[#172033]">{product.unit}</strong></span>
            </div>
          </div>

          {/* Specs & Packaging Box */}
          {(product.specs || product.packaging) && (
            <div className="bg-slate-50 p-3 sm:p-3.5 rounded-2xl border border-slate-200/80 text-xs space-y-1.5">
              {product.specs && (
                <div className="flex items-start gap-2">
                  <span className="text-[#64748B] shrink-0 font-medium">Quy cách:</span>
                  <span className="font-bold text-[#172033]">{product.specs}</span>
                </div>
              )}
              {product.packaging && (
                <div className="flex items-start gap-2 pt-1 border-t border-slate-200/60">
                  <span className="text-[#64748B] shrink-0 font-medium flex items-center gap-1">
                    <Box className="w-3.5 h-3.5 text-slate-400" />
                    <span>Đóng gói:</span>
                  </span>
                  <span className="font-semibold text-[#172033]">{product.packaging}</span>
                </div>
              )}
            </div>
          )}

          {/* Pricing Table - Only selected tier highlighted in red */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#172033] flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-[#E60012]" />
                <span>Bảng giá theo từng nhóm đối tượng</span>
              </h3>
              <button
                type="button"
                onClick={handleCopyAllInfo}
                className="text-[11px] font-bold text-[#E60012] hover:underline flex items-center gap-1"
              >
                {copiedInfo ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedInfo ? 'Đã sao chép' : 'Sao chép tất cả'}</span>
              </button>
            </div>

            <div className="space-y-2">
              {availablePrices.map(item => {
                const isSelected = selectedPriceKey === item.key;
                return (
                  <div
                    key={item.key}
                    onClick={() => setSelectedPriceKey(item.key)}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between select-none ${
                      isSelected
                        ? 'border-[#E60012] bg-[#FFF0F1] shadow-2xs ring-1 ring-red-300'
                        : 'border-[#E5EAF1] bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected ? 'border-[#E60012] bg-[#E60012]' : 'border-slate-300'
                      }`}>
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <div className="min-w-0">
                        <div className={`text-xs sm:text-sm font-bold truncate ${
                          isSelected ? 'text-[#E60012]' : 'text-[#172033]'
                        }`}>
                          {item.label}
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] mt-0.5">
                          {item.vat === 'co_vat' ? (
                            <span className="font-semibold text-emerald-700 bg-emerald-50 px-1 py-0.2 rounded">
                              Đã bao gồm VAT
                            </span>
                          ) : (
                            <span className="font-semibold text-amber-700 bg-amber-50 px-1 py-0.2 rounded">
                              Chưa bao gồm VAT
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 pl-2">
                      <div className={`font-extrabold text-sm sm:text-base tracking-tight ${
                        isSelected ? 'text-[#E60012]' : 'text-[#172033]'
                      }`}>
                        {formatVND(item.value)}
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyPrice(item.label, item.value);
                        }}
                        className="p-1 rounded-lg text-[#64748B] hover:text-[#172033] hover:bg-slate-100"
                        title="Sao chép đơn giá"
                      >
                        {copiedPrice === item.label ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Notes or conditions */}
          {product.notes && (
            <div className="p-3 bg-amber-50/80 rounded-2xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Lưu ý:</strong> {product.notes}
              </div>
            </div>
          )}

          {/* Version Provenance */}
          <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/70 text-[11px] text-[#64748B] space-y-0.5">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-slate-400" />
                <span>Bảng giá: <strong>{currentVersion.name}</strong></span>
              </span>
              <span>Hiệu lực: {currentVersion.effectiveDate}</span>
            </div>
            <div className="text-[10px] text-slate-400 flex items-center gap-1 truncate">
              <FileSpreadsheet className="w-3 h-3" />
              <span>Nguồn: Sheet <strong>{product.sheet_name}</strong> • Dòng <strong>{product.row_number}</strong></span>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="space-y-1.5 pt-1">
              <div className="text-xs font-bold text-[#64748B]">
                Sản phẩm cùng danh mục:
              </div>
              <div className="grid grid-cols-2 gap-2">
                {relatedProducts.map(rel => (
                  <div
                    key={rel.id}
                    onClick={() => setSelectedProduct(rel)}
                    className="p-2.5 rounded-xl border border-[#E5EAF1] hover:border-red-300 hover:bg-red-50/20 cursor-pointer transition-all bg-white"
                  >
                    <div className="font-semibold text-xs text-[#172033] line-clamp-1">{rel.product_name}</div>
                    <div className="text-[#E60012] font-bold text-xs mt-0.5">
                      {formatVND(rel.prices.gia_khach_le?.value || rel.prices.gia_niem_yet?.value)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Sticky Action Footer (Placed safely above bottom edge) */}
        <div className="p-3 sm:p-4 border-t border-[#E5EAF1] bg-white sticky bottom-0 z-10 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-md">
          <div className="flex items-center justify-between gap-3">
            
            {/* Quantity Stepper */}
            <div className="flex items-center border border-[#E5EAF1] rounded-xl overflow-hidden bg-slate-50 shrink-0">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-9 h-10 text-[#172033] hover:bg-slate-200 font-bold transition-colors flex items-center justify-center"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-10 text-center text-xs font-bold text-[#172033] bg-transparent focus:outline-none"
                inputMode="numeric"
              />
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-9 h-10 text-[#172033] hover:bg-slate-200 font-bold transition-colors flex items-center justify-center"
              >
                +
              </button>
            </div>

            {/* Total & Add to Quote Button */}
            <button
              type="button"
              onClick={handleAddQuotation}
              className={`flex-1 h-10 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all select-none ${
                addedQuotation
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-[#E60012] hover:bg-[#C90010] active:scale-[0.98] text-white shadow-xs shadow-red-500/20'
              }`}
            >
              {addedQuotation ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Đã thêm!</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Thêm {quantity} {product.unit} ({formatVND((activePriceDetail?.value || 0) * quantity)})</span>
                </>
              )}
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};
