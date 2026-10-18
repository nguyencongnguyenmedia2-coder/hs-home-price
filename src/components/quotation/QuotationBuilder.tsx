import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import type { Quotation } from '../../types';
import { formatVND, formatDate } from '../../utils/formatters';
import { printQuotation } from '../../utils/pdfExport';
import { QuotationPreviewModal } from './QuotationPreviewModal';
import { 
  ReceiptText, 
  Trash2, 
  Printer, 
  History, 
  Save, 
  CheckCircle2, 
  User, 
  Phone, 
  MapPin, 
  Layers, 
  Eye,
  Plus,
  ArrowRight,
  FileText
} from 'lucide-react';

export const QuotationBuilder: React.FC = () => {
  const { 
    quotationItems, 
    updateQuotationItemQty, 
    updateQuotationItemPriceKey, 
    removeFromQuotation, 
    clearQuotationCart, 
    saveCurrentQuotation, 
    savedQuotations, 
    currentVersion,
    products,
    setActiveTab,
    currentUser
  } = useApp();

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [quotationNotes, setQuotationNotes] = useState('');
  const [activeSubTab, setActiveSubTab] = useState<'create' | 'history'>('create');
  const [successSavedCode, setSuccessSavedCode] = useState<string | null>(null);
  const [lastSavedQuote, setLastSavedQuote] = useState<Quotation | null>(null);
  const [previewingQuotation, setPreviewingQuotation] = useState<Quotation | null>(null);

  // Totals calculation
  const totalQuantity = quotationItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = quotationItems.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0);
  const totalAmount = subtotal;

  const handleSaveQuotation = (e: React.FormEvent) => {
    e.preventDefault();
    if (quotationItems.length === 0) {
      alert('Vui lòng thêm ít nhất một sản phẩm vào báo giá.');
      return;
    }
    const newQuote = saveCurrentQuotation({
      name: customerName,
      phone: customerPhone,
      address: customerAddress,
      notes: quotationNotes
    });

    setSuccessSavedCode(newQuote.code);
    setLastSavedQuote(newQuote);
    setCustomerName('');
    setCustomerPhone('');
    setCustomerAddress('');
    setQuotationNotes('');
  };

  const handlePreviewCurrent = () => {
    if (quotationItems.length === 0) {
      alert('Vui lòng thêm ít nhất một sản phẩm vào báo giá để xem trước.');
      return;
    }
    const tempQuote: Quotation = {
      id: 'TEMP-PREVIEW',
      code: 'BG-XEM-TRUOC',
      createdAt: new Date().toISOString(),
      creatorId: currentUser.id,
      creatorName: currentUser.name,
      customerName: customerName || 'Khách hàng',
      customerPhone,
      customerAddress,
      priceVersionId: currentVersion.id,
      priceVersionName: currentVersion.name,
      items: quotationItems,
      subtotal,
      vatAmount: 0,
      totalAmount,
      notes: quotationNotes,
      status: 'draft'
    };
    setPreviewingQuotation(tempQuote);
  };

  const handlePrintCurrent = () => {
    if (quotationItems.length === 0) {
      alert('Chưa có sản phẩm nào trong báo giá để in.');
      return;
    }
    const tempQuote: Quotation = {
      id: 'TEMP-PREVIEW',
      code: 'BG-XEM-TRUOC',
      createdAt: new Date().toISOString(),
      creatorId: currentUser.id,
      creatorName: currentUser.name,
      customerName: customerName || 'Khách hàng',
      customerPhone,
      customerAddress,
      priceVersionId: currentVersion.id,
      priceVersionName: currentVersion.name,
      items: quotationItems,
      subtotal,
      vatAmount: 0,
      totalAmount,
      notes: quotationNotes,
      status: 'draft'
    };
    printQuotation(tempQuote);
  };

  return (
    <div className="space-y-4 sm:space-y-6 max-w-5xl mx-auto">
      
      {/* Tab Switcher Header */}
      <div className="flex items-center justify-between border-b border-[#E5EAF1] pb-3">
        <div>
          <h1 className="text-lg sm:text-2xl font-extrabold text-[#172033] flex items-center gap-2">
            <ReceiptText className="w-5 h-5 sm:w-6 sm:h-6 text-[#E60012] stroke-[2.2]" />
            <span>Lập Báo Giá Sản Phẩm</span>
          </h1>
          <p className="text-xs text-[#64748B] mt-0.5">
            Bảng giá: <strong>{currentVersion.name}</strong>
          </p>
        </div>

        <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-[#E5EAF1] text-xs font-bold shrink-0">
          <button
            type="button"
            onClick={() => setActiveSubTab('create')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              activeSubTab === 'create'
                ? 'bg-white text-[#E60012] shadow-2xs font-extrabold'
                : 'text-[#64748B] hover:text-[#172033]'
            }`}
          >
            Đang lập ({quotationItems.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveSubTab('history')}
            className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
              activeSubTab === 'history'
                ? 'bg-white text-[#E60012] shadow-2xs font-extrabold'
                : 'text-[#64748B] hover:text-[#172033]'
            }`}
          >
            <History className="w-3.5 h-3.5" />
            <span>Lịch sử ({savedQuotations.length})</span>
          </button>
        </div>
      </div>

      {/* SUCCESS NOTIFICATION */}
      {successSavedCode && (
        <div className="p-3.5 sm:p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-in fade-in">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <div className="font-extrabold text-emerald-900 text-xs sm:text-sm">
                Báo giá {successSavedCode} đã lưu thành công!
              </div>
              <div className="text-[11px] text-emerald-700">
                Toàn bộ đơn giá đã được lưu vào lịch sử hệ thống.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 self-end sm:self-auto">
            {lastSavedQuote && (
              <button
                type="button"
                onClick={() => setPreviewingQuotation(lastSavedQuote)}
                className="px-3 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-2xs transition-colors"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Xem trước & Tải ảnh</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                setSuccessSavedCode(null);
                setLastSavedQuote(null);
              }}
              className="text-xs font-bold text-emerald-800 hover:text-emerald-950 px-2 py-1 rounded-lg"
            >
              Đóng
            </button>
          </div>
        </div>
      )}

      {/* CREATE SUB-TAB */}
      {activeSubTab === 'create' && (
        <div className="space-y-4 sm:space-y-6">
          
          {quotationItems.length === 0 ? (
            /* Empty Cart State */
            <div className="bg-white rounded-3xl border border-[#E5EAF1] p-8 sm:p-12 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#E60012] flex items-center justify-center mx-auto">
                <ReceiptText className="w-7 h-7 stroke-[2]" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-[#172033]">Chưa có sản phẩm nào trong báo giá</h2>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1 max-w-sm mx-auto">
                  Hãy mở kho sản phẩm và nhấn <strong>"+ Báo giá"</strong> để thêm sản phẩm vào bảng tính.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveTab('catalog')}
                className="px-5 py-2.5 rounded-xl bg-[#E60012] hover:bg-[#C90010] active:scale-95 text-white font-bold text-xs sm:text-sm shadow-xs shadow-red-500/20 transition-all inline-flex items-center gap-2"
              >
                <Layers className="w-4 h-4 stroke-[2.2]" />
                <span>Xem danh mục sản phẩm ngay</span>
              </button>
            </div>
          ) : (
            /* Items List & Single-Column Customer Info */
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              
              {/* Product Items Table */}
              <div className="lg:col-span-2 space-y-3">
                <div className="bg-white rounded-3xl border border-[#E5EAF1] shadow-2xs overflow-hidden">
                  <div className="p-3.5 sm:p-4 border-b border-slate-100 flex items-center justify-between">
                    <h2 className="font-extrabold text-[#172033] text-xs sm:text-sm flex items-center gap-1.5">
                      <span>Sản phẩm trong báo giá</span>
                      <span className="px-1.5 py-0.2 rounded-md text-[10px] font-bold bg-slate-100 text-[#64748B]">
                        {quotationItems.length} mục
                      </span>
                    </h2>

                    <button
                      type="button"
                      onClick={clearQuotationCart}
                      className="text-xs font-semibold text-[#64748B] hover:text-[#E60012] transition-colors flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Xóa hết</span>
                    </button>
                  </div>

                  {/* Items List */}
                  <div className="divide-y divide-slate-100">
                    {quotationItems.map((item, idx) => {
                      const prod = products.find(p => p.id === item.productId);
                      const availablePriceKeys = prod ? Object.keys(prod.prices).filter(k => prod.prices[k] !== null) : [];

                      return (
                        <div key={item.id} className="p-3.5 sm:p-4 hover:bg-slate-50/50 transition-colors space-y-2">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                              <div className="font-bold text-[#172033] text-xs sm:text-sm leading-snug line-clamp-2">
                                {idx + 1}. {item.productName}
                              </div>
                              <div className="flex items-center gap-1.5 text-[11px] text-[#64748B] mt-1 flex-wrap">
                                <span className="font-mono bg-slate-100 px-1 py-0.2 rounded font-semibold text-[#172033]">
                                  {item.sku}
                                </span>
                                <span>•</span>
                                <span>ĐVT: <strong className="text-[#172033]">{item.unit}</strong></span>
                                {item.specs && (
                                  <>
                                    <span>•</span>
                                    <span className="truncate max-w-[150px]">{item.specs}</span>
                                  </>
                                )}
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() => removeFromQuotation(item.id)}
                              className="text-[#64748B] hover:text-[#E60012] p-1.5 rounded-lg transition-colors shrink-0"
                              title="Xóa sản phẩm này"
                              aria-label="Xóa"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Price Tier Selector & Stepper Row */}
                          <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                            
                            {/* Choose tier */}
                            <div className="flex items-center gap-1 text-[11px] min-w-0">
                              <span className="text-[#64748B] shrink-0 font-medium">Giá:</span>
                              <select
                                value={item.selectedPriceKey}
                                onChange={e => updateQuotationItemPriceKey(item.id, e.target.value)}
                                className="px-2 py-1 rounded-lg bg-slate-100 border border-[#E5EAF1] font-semibold text-[#172033] text-xs focus:outline-none focus:border-[#E60012] max-w-[180px] sm:max-w-none truncate"
                              >
                                {availablePriceKeys.map(k => (
                                  <option key={k} value={k}>
                                    {prod?.prices[k]?.label} ({formatVND(prod?.prices[k]?.value)})
                                  </option>
                                ))}
                              </select>
                            </div>

                            {/* Stepper + Row Total */}
                            <div className="flex items-center gap-3 ml-auto">
                              <div className="flex items-center border border-[#E5EAF1] rounded-xl overflow-hidden bg-white shadow-2xs">
                                <button
                                  type="button"
                                  onClick={() => updateQuotationItemQty(item.id, item.quantity - 1)}
                                  className="w-8 h-8 text-[#172033] hover:bg-slate-100 font-bold transition-colors flex items-center justify-center select-none"
                                >
                                  -
                                </button>
                                <input
                                  type="number"
                                  min="1"
                                  value={item.quantity}
                                  onChange={e => updateQuotationItemQty(item.id, parseInt(e.target.value) || 1)}
                                  className="w-10 text-center text-xs font-bold text-[#172033] bg-transparent focus:outline-none"
                                  inputMode="numeric"
                                />
                                <button
                                  type="button"
                                  onClick={() => updateQuotationItemQty(item.id, item.quantity + 1)}
                                  className="w-8 h-8 text-[#172033] hover:bg-slate-100 font-bold transition-colors flex items-center justify-center select-none"
                                >
                                  +
                                </button>
                              </div>

                              <div className="text-right min-w-[80px]">
                                <div className="text-xs sm:text-sm font-extrabold text-[#E60012] tracking-tight">
                                  {formatVND(item.quantity * item.unitPrice)}
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-3 bg-slate-50 border-t border-slate-100 text-right">
                    <button
                      type="button"
                      onClick={() => setActiveTab('catalog')}
                      className="text-xs font-bold text-[#E60012] hover:underline inline-flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Thêm sản phẩm khác</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Customer Info & Save Action (Single Column on Mobile) */}
              <div className="space-y-3">
                <form onSubmit={handleSaveQuotation} className="bg-white rounded-3xl border border-[#E5EAF1] p-4 sm:p-5 shadow-2xs space-y-3.5">
                  <h2 className="font-extrabold text-[#172033] text-xs sm:text-sm border-b border-slate-100 pb-2">
                    Thông tin khách hàng & Công trình
                  </h2>

                  <div className="space-y-2.5">
                    <div>
                      <label className="text-[11px] font-bold text-[#172033] block mb-1">
                        Tên khách hàng / Đối tác <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={customerName}
                          onChange={e => setCustomerName(e.target.value)}
                          placeholder="Ví dụ: Anh Dũng - Thầu công trình"
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-[#E5EAF1] text-xs sm:text-sm text-[#172033] focus:outline-none focus:border-[#E60012] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-[#172033] block mb-1">
                        Số điện thoại
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          value={customerPhone}
                          onChange={e => setCustomerPhone(e.target.value)}
                          placeholder="0912 xxx xxx"
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-[#E5EAF1] text-xs sm:text-sm text-[#172033] focus:outline-none focus:border-[#E60012] focus:bg-white transition-colors"
                          inputMode="tel"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-[#172033] block mb-1">
                        Địa chỉ công trình / Giao hàng
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={customerAddress}
                          onChange={e => setCustomerAddress(e.target.value)}
                          placeholder="Địa chỉ giao nhận..."
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-[#E5EAF1] text-xs sm:text-sm text-[#172033] focus:outline-none focus:border-[#E60012] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-[#172033] block mb-1">
                        Ghi chú báo giá
                      </label>
                      <textarea
                        rows={2}
                        value={quotationNotes}
                        onChange={e => setQuotationNotes(e.target.value)}
                        placeholder="Thời gian hiệu lực, điều khoản giao nhận..."
                        className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-[#E5EAF1] text-xs text-[#172033] focus:outline-none focus:border-[#E60012] focus:bg-white resize-none"
                      />
                    </div>
                  </div>

                  {/* Summary Box */}
                  <div className="bg-slate-50 p-3 sm:p-3.5 rounded-2xl border border-[#E5EAF1] space-y-1.5 text-xs">
                    <div className="flex justify-between text-[#64748B]">
                      <span>Số lượng:</span>
                      <strong className="text-[#172033]">{totalQuantity} sản phẩm</strong>
                    </div>
                    <div className="flex justify-between text-[#64748B]">
                      <span>Tạm tính:</span>
                      <strong className="text-[#172033]">{formatVND(subtotal)}</strong>
                    </div>
                    <div className="pt-2 border-t border-slate-200 flex justify-between items-end">
                      <span className="font-extrabold text-[#172033] text-xs sm:text-sm">TỔNG TIỀN:</span>
                      <span className="font-extrabold text-[#E60012] text-base sm:text-lg tracking-tight">
                        {formatVND(totalAmount)}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons: Preview & Save & Print */}
                  <div className="space-y-2 pt-1">
                    <button
                      type="button"
                      onClick={handlePreviewCurrent}
                      className="w-full min-h-[44px] py-2.5 rounded-xl bg-[#E60012] hover:bg-[#C90010] active:scale-[0.98] text-white font-bold text-xs sm:text-sm shadow-xs shadow-red-500/20 transition-all flex items-center justify-center gap-2 select-none"
                    >
                      <Eye className="w-4 h-4 stroke-[2.2]" />
                      <span>Xem trước & Lưu ảnh về máy</span>
                    </button>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="submit"
                        className="min-h-[42px] py-2 rounded-xl bg-[#172033] hover:bg-slate-800 text-white font-bold text-xs shadow-2xs active:scale-95 transition-all flex items-center justify-center gap-1.5 select-none"
                      >
                        <Save className="w-3.5 h-3.5" />
                        <span>Lưu hệ thống</span>
                      </button>

                      <button
                        type="button"
                        onClick={handlePrintCurrent}
                        className="min-h-[42px] py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#172033] font-bold text-xs transition-colors flex items-center justify-center gap-1.5 select-none"
                      >
                        <Printer className="w-3.5 h-3.5 text-[#64748B]" />
                        <span>In / PDF</span>
                      </button>
                    </div>
                  </div>

                </form>
              </div>

            </div>
          )}

        </div>
      )}

      {/* HISTORY SUB-TAB */}
      {activeSubTab === 'history' && (
        <div className="space-y-3">
          {savedQuotations.length === 0 ? (
            <div className="bg-white rounded-3xl border border-[#E5EAF1] p-8 sm:p-12 text-center space-y-3">
              <History className="w-12 h-12 text-slate-300 mx-auto" />
              <h2 className="text-sm sm:text-base font-extrabold text-[#172033]">Chưa có báo giá nào trong lịch sử</h2>
              <p className="text-xs text-[#64748B] max-w-xs mx-auto">
                Khi bạn tạo và lưu báo giá, đơn giá lịch sử sẽ được bảo lưu chính xác tại đây.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
              {savedQuotations.map(quote => (
                <div
                  key={quote.id}
                  className="bg-white p-3.5 sm:p-4 rounded-2xl border border-[#E5EAF1] hover:border-red-300 shadow-2xs transition-all space-y-2.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-slate-100 pb-2.5">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-[#E60012] text-sm sm:text-base">
                          {quote.code}
                        </span>
                        <span className={`px-2 py-0.2 rounded-md text-[10px] font-bold uppercase ${
                          quote.status === 'approved'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {quote.status === 'approved' ? 'Đã duyệt' : 'Báo giá nháp'}
                        </span>
                      </div>
                      <div className="text-xs text-[#172033] font-semibold mt-0.5">
                        Khách: {quote.customerName} {quote.customerPhone ? `(${quote.customerPhone})` : ''}
                      </div>
                      <div className="text-[10px] text-[#64748B]">
                        Lập ngày: {formatDate(quote.createdAt)} • {quote.items.length} mặt hàng
                      </div>
                    </div>

                    <div className="text-right sm:text-right">
                      <div className="text-[10px] text-[#64748B]">Tổng thanh toán:</div>
                      <div className="font-extrabold text-sm sm:text-base text-[#172033]">
                        {formatVND(quote.totalAmount)}
                      </div>
                    </div>
                  </div>

                  {/* Actions for this quote */}
                  <div className="flex items-center justify-end gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setPreviewingQuotation(quote)}
                      className="px-3 py-1.5 rounded-xl bg-[#E60012] hover:bg-[#C90010] text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Xem trước & Tải ảnh</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => printQuotation(quote)}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#172033] font-semibold text-xs flex items-center gap-1"
                    >
                      <Printer className="w-3.5 h-3.5 text-[#64748B]" />
                      <span>In</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Modal Preview & Download Image */}
      {previewingQuotation && (
        <QuotationPreviewModal
          quotation={previewingQuotation}
          onClose={() => setPreviewingQuotation(null)}
        />
      )}

    </div>
  );
};
