import React, { useRef, useState } from 'react';
import type { Quotation } from '../../types';
import { formatVND, formatDate } from '../../utils/formatters';
import { printQuotation } from '../../utils/pdfExport';
import html2canvas from 'html2canvas';
import { 
  X, 
  Download, 
  Printer, 
  Share2, 
  Check, 
  Image as ImageIcon,
  Loader2,
  FileText
} from 'lucide-react';

interface QuotationPreviewModalProps {
  quotation: Quotation | null;
  onClose: () => void;
}

export const QuotationPreviewModal: React.FC<QuotationPreviewModalProps> = ({ 
  quotation, 
  onClose 
}) => {
  const previewRef = useRef<HTMLDivElement>(null);
  const [downloadingImg, setDownloadingImg] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  if (!quotation) return null;

  // Export as high-resolution PNG image
  const handleDownloadImage = async () => {
    if (!previewRef.current) return;
    setDownloadingImg(true);

    try {
      // Scale 2 for crystal clear Retina/HD quality on phones and desktop
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        windowWidth: 800
      });

      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `BaoGia_${quotation.code || 'HoaSenHome'}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err: any) {
      alert(`Lỗi khi tạo ảnh báo giá: ${err?.message || err}`);
    } finally {
      setDownloadingImg(false);
    }
  };

  const handleShare = async () => {
    if (!previewRef.current) return;
    setDownloadingImg(true);

    try {
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false
      });

      canvas.toBlob(async (blob) => {
        if (!blob) return;
        const file = new File([blob], `BaoGia_${quotation.code}.png`, { type: 'image/png' });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            files: [file],
            title: `Báo giá ${quotation.code}`,
            text: `Bảng báo giá sản phẩm Hoa Sen Home cho khách hàng ${quotation.customerName}`
          });
        } else {
          // Fallback: download
          handleDownloadImage();
        }
      }, 'image/png');
    } catch {
      handleDownloadImage();
    } finally {
      setDownloadingImg(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-in fade-in">
      <div 
        className="relative bg-slate-100 rounded-3xl max-w-4xl w-full shadow-2xl border border-slate-300 overflow-hidden flex flex-col max-h-[95vh]"
        onClick={e => e.stopPropagation()}
      >
        
        {/* Top Floating Control Bar */}
        <div className="p-3 sm:p-4 bg-white border-b border-slate-200 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-xs sm:text-sm">
                Xem Trước Báo Giá: <span className="text-red-600">{quotation.code}</span>
              </div>
              <div className="text-[11px] text-slate-500 hidden sm:block">
                Phiếu chuẩn A4 sẵn sàng lưu ảnh để gửi Zalo / Khách hàng hoặc in ấn
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Download Image Button */}
            <button
              onClick={handleDownloadImage}
              disabled={downloadingImg}
              className="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs shadow-md shadow-red-500/20 active:scale-95 transition-all flex items-center gap-1.5 disabled:opacity-50"
              title="Lưu ảnh báo giá về máy (PNG)"
            >
              {downloadingImg ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <ImageIcon className="w-4 h-4" />
              )}
              <span>Lưu ảnh về máy</span>
            </button>

            {/* Print Button */}
            <button
              onClick={() => printQuotation(quotation)}
              className="hidden sm:flex px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs items-center gap-1.5 transition-colors"
              title="In hoặc tải file PDF"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              <span>In / PDF</span>
            </button>

            {/* Mobile Share */}
            <button
              onClick={handleShare}
              className="sm:hidden p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200"
              title="Chia sẻ"
            >
              <Share2 className="w-4 h-4" />
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
              title="Đóng xem trước"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Container */}
        <div className="overflow-y-auto p-3 sm:p-6 flex justify-center bg-slate-200/60">
          
          {/* Printable / Savable White Paper (A4 Style) */}
          <div 
            ref={previewRef}
            className="bg-white w-full max-w-[800px] p-6 sm:p-10 shadow-lg rounded-2xl border border-slate-200 text-slate-800 text-xs sm:text-sm select-text"
            style={{ fontFamily: "'Be Vietnam Pro', 'Segoe UI', sans-serif" }}
          >
            {/* Brand Header */}
            <div className="flex justify-between items-start border-b-2 border-red-600 pb-4 mb-5 gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-red-600 text-white font-black text-base flex items-center justify-center">
                    HS
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-black text-red-600 tracking-tight leading-tight">
                      HS HOME PRICE
                    </div>
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      Hệ thống Tra cứu & Báo giá Vật liệu Xây dựng
                    </div>
                  </div>
                </div>
                <div className="text-[11px] text-slate-500 mt-2">
                  Phiên bản bảng giá áp dụng: <strong>{quotation.priceVersionName}</strong>
                </div>
              </div>

              <div className="text-right">
                <div className="font-extrabold text-sm sm:text-base text-red-600 tracking-wide font-mono">
                  {quotation.code}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Ngày lập: {formatDate(quotation.createdAt)}
                </div>
                <div className="mt-1">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                    quotation.status === 'approved' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {quotation.status === 'approved' ? 'Báo giá đã duyệt' : 'Báo giá tham khảo'}
                  </span>
                </div>
              </div>
            </div>

            {/* Document Title */}
            <div className="text-center my-4">
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-wide">
                BẢNG BÁO GIÁ SẢN PHẨM
              </h1>
              <div className="text-xs text-slate-400 mt-0.5">
                (Kèm quy cách, đơn giá và điều kiện thương mại)
              </div>
            </div>

            {/* Customer & Creator Information Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs mb-5">
              <div className="space-y-1">
                <div>
                  <span className="text-slate-500 inline-block w-24">Khách hàng:</span>
                  <strong className="text-slate-900 text-sm">{quotation.customerName || 'Khách hàng'}</strong>
                </div>
                <div>
                  <span className="text-slate-500 inline-block w-24">Điện thoại:</span>
                  <span className="font-semibold text-slate-800">{quotation.customerPhone || 'Chưa cung cấp'}</span>
                </div>
                <div>
                  <span className="text-slate-500 inline-block w-24">Công trình:</span>
                  <span className="text-slate-700">{quotation.customerAddress || 'Giao tại công trình'}</span>
                </div>
              </div>

              <div className="space-y-1 sm:border-l sm:border-slate-200 sm:pl-4">
                <div>
                  <span className="text-slate-500 inline-block w-28">Nhân viên lập:</span>
                  <strong className="text-slate-900">{quotation.creatorName}</strong>
                </div>
                <div>
                  <span className="text-slate-500 inline-block w-28">Thời hạn báo giá:</span>
                  <span className="text-slate-800 font-semibold">15 ngày kể từ ngày lập</span>
                </div>
                <div>
                  <span className="text-slate-500 inline-block w-28">Đơn vị tiền tệ:</span>
                  <span className="text-slate-700">Việt Nam Đồng (VND)</span>
                </div>
              </div>
            </div>

            {/* Product Table */}
            <div className="overflow-x-auto border border-slate-200 rounded-xl mb-5">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-slate-100 text-slate-700 border-b border-slate-200 font-bold">
                  <tr>
                    <th className="p-2.5 text-center w-10">STT</th>
                    <th className="p-2.5">Tên sản phẩm & Quy cách</th>
                    <th className="p-2.5 text-center w-14">ĐVT</th>
                    <th className="p-2.5 text-center w-12">SL</th>
                    <th className="p-2.5 w-32">Loại giá áp dụng</th>
                    <th className="p-2.5 text-right w-24">Đơn giá</th>
                    <th className="p-2.5 text-right w-28">Thành tiền</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {quotation.items.map((item, idx) => (
                    <tr key={item.id} className="hover:bg-slate-50/50">
                      <td className="p-2.5 text-center font-bold text-slate-500">{idx + 1}</td>
                      <td className="p-2.5">
                        <div className="font-extrabold text-slate-900">{item.productName}</div>
                        <div className="text-[11px] text-slate-500 font-mono">
                          Mã: {item.sku || 'N/A'}{item.specs ? ` | QC: ${item.specs}` : ''}
                        </div>
                      </td>
                      <td className="p-2.5 text-center font-medium text-slate-700">{item.unit}</td>
                      <td className="p-2.5 text-center font-extrabold text-slate-900">{item.quantity}</td>
                      <td className="p-2.5 text-[11px] text-slate-600">
                        {item.priceLabel}
                        {item.vatStatus === 'co_vat' && (
                          <span className="block text-[9px] text-emerald-600 font-semibold">(Đã có VAT)</span>
                        )}
                      </td>
                      <td className="p-2.5 text-right font-mono font-medium text-slate-800">
                        {formatVND(item.unitPrice)}
                      </td>
                      <td className="p-2.5 text-right font-mono font-extrabold text-red-600 text-sm">
                        {formatVND(item.quantity * item.unitPrice)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary Block */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
              <div className="text-xs text-slate-500 max-w-sm">
                {quotation.notes ? (
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <strong className="text-slate-800 block mb-0.5">Ghi chú kèm theo:</strong>
                    <span>{quotation.notes}</span>
                  </div>
                ) : (
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-[11px]">
                    * Đơn giá trên áp dụng theo chính sách bán hàng hiện hành của Tập đoàn Hoa Sen Home. Quý khách vui lòng kiểm tra quy cách và số lượng trước khi đặt cọc.
                  </div>
                )}
              </div>

              {/* Price Calculation Box */}
              <div className="w-full sm:w-72 bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Tổng tiền hàng:</span>
                  <strong className="font-mono text-slate-800">{formatVND(quotation.subtotal)}</strong>
                </div>
                {quotation.vatAmount > 0 && (
                  <div className="flex justify-between text-slate-600">
                    <span>Thuế GTGT (VAT):</span>
                    <strong className="font-mono text-slate-800">{formatVND(quotation.vatAmount)}</strong>
                  </div>
                )}
                <div className="pt-2 border-t-2 border-red-600 flex justify-between items-end">
                  <span className="font-black text-slate-900 text-xs sm:text-sm">TỔNG THANH TOÁN:</span>
                  <span className="font-black text-red-600 text-base sm:text-lg font-mono">
                    {formatVND(quotation.totalAmount)}
                  </span>
                </div>
              </div>
            </div>

            {/* Signature Area */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 gap-4 text-center text-xs">
              <div>
                <div className="font-extrabold uppercase text-slate-800">ĐẠI DIỆN KHÁCH HÀNG</div>
                <div className="text-[10px] text-slate-400 mt-0.5">(Ký & ghi rõ họ tên)</div>
                <div className="h-16" />
                <div className="font-semibold text-slate-700">{quotation.customerName}</div>
              </div>

              <div>
                <div className="font-extrabold uppercase text-slate-800">NHÂN VIÊN LẬP BÁO GIÁ</div>
                <div className="text-[10px] text-slate-400 mt-0.5">(Xác nhận thông tin)</div>
                <div className="h-16" />
                <div className="font-extrabold text-red-700">{quotation.creatorName}</div>
              </div>
            </div>

            {/* Security Footer Note */}
            <div className="mt-8 pt-3 border-t border-dashed border-slate-200 text-[10px] text-slate-400 text-center flex items-center justify-between">
              <span>HS HOME PRICE • Báo giá tham khảo nội bộ</span>
              <span>In lúc: {formatDate(new Date())}</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
