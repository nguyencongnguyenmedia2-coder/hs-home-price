import React, { useRef, useState, useEffect } from 'react';
import type { Quotation } from '../../types';
import { formatVND, formatDate } from '../../utils/formatters';
import { printQuotation } from '../../utils/pdfExport';
import html2canvas from 'html2canvas-pro';
import { HOA_SEN_LOGO_BASE64 } from '../../assets/brandLogo';
import { 
  X, 
  Share2, 
  Image as ImageIcon,
  Loader2,
  FileText,
  Printer,
  Maximize2,
  Minimize2,
  Building2,
  ShieldCheck,
  PhoneCall
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [downloadingImg, setDownloadingImg] = useState(false);
  const [isFitScreen, setIsFitScreen] = useState(false);
  const [scale, setScale] = useState(1);

  // Auto calculate scale for mobile "Fit Screen" view
  useEffect(() => {
    const updateScale = () => {
      if (scrollContainerRef.current) {
        const containerWidth = scrollContainerRef.current.clientWidth;
        if (containerWidth < 840) {
          // 800px is document width + 16px safety margin
          const newScale = Math.min(1, Math.max(0.35, (containerWidth - 24) / 800));
          setScale(newScale);
        } else {
          setScale(1);
        }
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  if (!quotation) return null;

  // Export as crystal clear A4 PNG image (scale 2 = 1600px width HD)
  const handleDownloadImage = async () => {
    if (!previewRef.current) return;
    setDownloadingImg(true);

    // Save previous transform state to ensure pristine 800px capture
    const wasFitScreen = isFitScreen;
    if (wasFitScreen) {
      setIsFitScreen(false);
      // Wait for React to re-render unscaled before capturing
      await new Promise(r => setTimeout(r, 60));
    }

    try {
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: 800,
        windowWidth: 800,
        onclone: (clonedDoc) => {
          // Ensure cloned paper is visible and fixed width
          const target = clonedDoc.getElementById('hoa-sen-quotation-paper');
          if (target) {
            target.style.transform = 'none';
            target.style.width = '800px';
            target.style.minWidth = '800px';
            target.style.margin = '0 auto';
          }
        }
      });

      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `BaoGia_${quotation.code || 'HoaSenHome'}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err: any) {
      console.error('Error generating quotation image:', err);
      alert(`Lỗi khi tạo ảnh báo giá: ${err?.message || err}`);
    } finally {
      if (wasFitScreen) {
        setIsFitScreen(true);
      }
      setDownloadingImg(false);
    }
  };

  const handleShare = async () => {
    if (!previewRef.current) return;
    setDownloadingImg(true);

    const wasFitScreen = isFitScreen;
    if (wasFitScreen) {
      setIsFitScreen(false);
      await new Promise(r => setTimeout(r, 60));
    }

    try {
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: 800,
        windowWidth: 800
      });

      canvas.toBlob(async (blob) => {
        if (!blob) {
          handleDownloadImage();
          return;
        }
        const file = new File([blob], `BaoGia_${quotation.code}.png`, { type: 'image/png' });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({
              files: [file],
              title: `Báo giá ${quotation.code} - HOA SEN HOME`,
              text: `Bảng báo giá sản phẩm Hoa Sen Home cho khách hàng: ${quotation.customerName}`
            });
          } catch {
            // User cancelled share dialog
          }
        } else {
          handleDownloadImage();
        }
      }, 'image/png');
    } catch {
      handleDownloadImage();
    } finally {
      if (wasFitScreen) {
        setIsFitScreen(true);
      }
      setDownloadingImg(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-1 sm:p-4 animate-in fade-in">
      <div 
        className="relative bg-[#F1F5F9] rounded-2xl sm:rounded-3xl max-w-5xl w-full shadow-2xl border border-slate-300 overflow-hidden flex flex-col max-h-[96vh]"
        onClick={e => e.stopPropagation()}
      >
        
        {/* Top Control Bar */}
        <div className="px-3 py-2.5 sm:px-5 sm:py-3.5 bg-white border-b border-slate-200 flex items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <img 
              src={HOA_SEN_LOGO_BASE64} 
              alt="Hoa Sen Home" 
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl object-cover shrink-0 shadow-sm" 
            />
            <div className="min-w-0">
              <div className="font-extrabold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5 truncate">
                <span>Xem Trước:</span>
                <span className="text-red-600 font-mono tracking-tight">{quotation.code}</span>
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 hidden sm:block truncate">
                Khổ chuẩn A4 • Sẵn sàng gửi Zalo cho khách hàng hoặc in ấn trực tiếp
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Mobile View Mode Toggle */}
            <button
              onClick={() => setIsFitScreen(!isFitScreen)}
              className="sm:hidden px-2 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold flex items-center gap-1 border border-slate-200"
              title={isFitScreen ? "Xem kích thước gốc 100%" : "Thu nhỏ vừa màn hình"}
            >
              {isFitScreen ? (
                <>
                  <Maximize2 className="w-3.5 h-3.5 text-slate-600" />
                  <span>100%</span>
                </>
              ) : (
                <>
                  <Minimize2 className="w-3.5 h-3.5 text-slate-600" />
                  <span>Vừa màn hình</span>
                </>
              )}
            </button>

            {/* Save Image Button */}
            <button
              onClick={handleDownloadImage}
              disabled={downloadingImg}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs shadow-md shadow-red-500/20 active:scale-95 transition-all flex items-center gap-1.5 disabled:opacity-50"
              title="Lưu ảnh báo giá về máy (PNG)"
            >
              {downloadingImg ? (
                <Loader2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin" />
              ) : (
                <ImageIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              )}
              <span>Lưu ảnh</span>
            </button>

            {/* Print Button */}
            <button
              onClick={() => printQuotation(quotation)}
              className="hidden sm:flex px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs items-center gap-1.5 transition-colors border border-slate-200"
              title="In hoặc tải file PDF"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              <span>In / PDF</span>
            </button>

            {/* Mobile Share */}
            <button
              onClick={handleShare}
              className="sm:hidden p-1.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
              title="Chia sẻ báo giá"
            >
              <Share2 className="w-4 h-4" />
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
              title="Đóng xem trước"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile quick tip banner */}
        <div className="sm:hidden px-3 py-1 bg-amber-50 border-b border-amber-200/60 text-[10px] text-amber-800 flex items-center justify-between">
          <span>💡 {isFitScreen ? 'Đang ở chế độ vừa màn hình' : 'Vuốt ngang để xem đủ bảng báo giá A4'}</span>
          <span className="font-semibold text-amber-900">Ảnh tải về luôn là khổ A4 nét cao</span>
        </div>

        {/* Scrollable Document Canvas Viewport */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto overflow-y-auto p-2 sm:p-6 flex justify-center bg-slate-300/60 flex-1 min-h-[420px]"
        >
          
          {/* Outer scaling wrapper for mobile "Fit Screen" mode */}
          <div 
            style={
              isFitScreen && scale < 1
                ? {
                    transform: `scale(${scale})`,
                    transformOrigin: 'top center',
                    width: '800px',
                    height: 'auto',
                    marginBottom: `-${(1 - scale) * 900}px`
                  }
                : {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                  }
            }
          >
            {/* The Authentic 800px A4 Printable Paper */}
            <div 
              id="hoa-sen-quotation-paper"
              ref={previewRef}
              className="bg-white shadow-xl rounded-xl border border-slate-300 text-slate-800 select-text shrink-0"
              style={{ 
                width: '800px', 
                minWidth: '800px',
                padding: '36px 40px',
                backgroundColor: '#ffffff',
                color: '#1e293b',
                fontFamily: "'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                boxSizing: 'border-box'
              }}
            >
              {/* Corporate Brand Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '3px solid #E60012', paddingBottom: '16px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <img 
                    src={HOA_SEN_LOGO_BASE64} 
                    alt="Hoa Sen Home" 
                    style={{ 
                      width: '54px', 
                      height: '54px', 
                      borderRadius: '12px', 
                      objectFit: 'cover',
                      boxShadow: '0 2px 8px rgba(230,0,18,0.2)' 
                    }} 
                  />
                  <div>
                    <div style={{ fontSize: '22px', fontWeight: 900, color: '#E60012', letterSpacing: '-0.5px', lineHeight: 1.1 }}>
                      HOA SEN HOME
                    </div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.8px', marginTop: '3px' }}>
                      Hệ thống Phân phối Vật liệu Xây dựng & Nội thất Hoa Sen
                    </div>
                    <div style={{ fontSize: '10px', color: '#64748B', marginTop: '3px', display: 'flex', gap: '12px' }}>
                      <span>Tổng đài: <strong>1800 1515</strong></span>
                      <span>•</span>
                      <span>Website: <strong>hoasenhome.vn</strong></span>
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#E60012', fontFamily: 'monospace', letterSpacing: '0.5px' }}>
                    {quotation.code}
                  </div>
                  <div style={{ fontSize: '11px', color: '#64748B', marginTop: '3px' }}>
                    Ngày lập: <strong style={{ color: '#1E293B' }}>{formatDate(quotation.createdAt)}</strong>
                  </div>
                  <div style={{ marginTop: '5px' }}>
                    <span style={{ 
                      display: 'inline-block',
                      padding: '2px 8px', 
                      borderRadius: '4px', 
                      fontSize: '10px', 
                      fontWeight: 800, 
                      textTransform: 'uppercase',
                      backgroundColor: quotation.status === 'approved' ? '#ECFDF5' : '#FFFBEB',
                      color: quotation.status === 'approved' ? '#065F46' : '#92400E',
                      border: quotation.status === 'approved' ? '1px solid #A7F3D0' : '1px solid #FDE68A'
                    }}>
                      {quotation.status === 'approved' ? 'Báo giá chính thức' : 'Báo giá tham khảo'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Document Title Banner */}
              <div style={{ textAlign: 'center', margin: '14px 0 20px 0' }}>
                <h1 style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>
                  BẢNG BÁO GIÁ SẢN PHẨM
                </h1>
                <div style={{ fontSize: '11px', color: '#64748B', fontStyle: 'italic', marginTop: '4px' }}>
                  (Kèm quy cách kỹ thuật, số lượng, đơn giá và chính sách áp dụng)
                </div>
              </div>

              {/* Customer & Creator Meta Info Grid */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '14px', 
                backgroundColor: '#F8FAFC', 
                padding: '14px 18px', 
                borderRadius: '10px', 
                border: '1px solid #E2E8F0', 
                fontSize: '12px', 
                marginBottom: '20px' 
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px', borderBottom: '1px solid #E2E8F0', paddingBottom: '3px' }}>
                    THÔNG TIN KHÁCH HÀNG
                  </div>
                  <div>
                    <span style={{ color: '#64748B', display: 'inline-block', width: '90px' }}>Khách hàng:</span>
                    <strong style={{ color: '#0F172A', fontSize: '13px' }}>{quotation.customerName || 'Khách hàng vãng lai'}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748B', display: 'inline-block', width: '90px' }}>Điện thoại:</span>
                    <span style={{ fontWeight: 600, color: '#1E293B' }}>{quotation.customerPhone || 'Chưa cung cấp'}</span>
                  </div>
                  <div>
                    <span style={{ color: '#64748B', display: 'inline-block', width: '90px' }}>Địa chỉ / CT:</span>
                    <span style={{ color: '#334155' }}>{quotation.customerAddress || 'Giao tại công trình'}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', borderLeft: '1px solid #E2E8F0', paddingLeft: '16px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px', borderBottom: '1px solid #E2E8F0', paddingBottom: '3px' }}>
                    THÔNG TIN BÁO GIÁ
                  </div>
                  <div>
                    <span style={{ color: '#64748B', display: 'inline-block', width: '105px' }}>Nhân viên lập:</span>
                    <strong style={{ color: '#0F172A' }}>{quotation.creatorName}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748B', display: 'inline-block', width: '105px' }}>Bảng giá áp dụng:</span>
                    <span style={{ fontWeight: 600, color: '#1E293B' }}>{quotation.priceVersionName}</span>
                  </div>
                  <div>
                    <span style={{ color: '#64748B', display: 'inline-block', width: '105px' }}>Hiệu lực báo giá:</span>
                    <span style={{ color: '#334155' }}>15 ngày kể từ ngày lập</span>
                  </div>
                </div>
              </div>

              {/* Product Table */}
              <div style={{ border: '1px solid #CBD5E1', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#F1F5F9', borderBottom: '2px solid #CBD5E1', color: '#1E293B', fontWeight: 800 }}>
                      <th style={{ padding: '9px 6px', textAlign: 'center', width: '36px', borderRight: '1px solid #E2E8F0' }}>STT</th>
                      <th style={{ padding: '9px 10px', borderRight: '1px solid #E2E8F0' }}>Tên sản phẩm & Quy cách</th>
                      <th style={{ padding: '9px 6px', textAlign: 'center', width: '50px', borderRight: '1px solid #E2E8F0' }}>ĐVT</th>
                      <th style={{ padding: '9px 6px', textAlign: 'center', width: '45px', borderRight: '1px solid #E2E8F0' }}>SL</th>
                      <th style={{ padding: '9px 10px', width: '140px', borderRight: '1px solid #E2E8F0' }}>Chính sách giá</th>
                      <th style={{ padding: '9px 10px', textAlign: 'right', width: '100px', borderRight: '1px solid #E2E8F0' }}>Đơn giá (đ)</th>
                      <th style={{ padding: '9px 10px', textAlign: 'right', width: '115px' }}>Thành tiền (đ)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quotation.items.map((item, idx) => (
                      <tr 
                        key={item.id} 
                        style={{ 
                          borderBottom: idx === quotation.items.length - 1 ? 'none' : '1px solid #E2E8F0',
                          backgroundColor: idx % 2 === 1 ? '#F8FAFC' : '#FFFFFF'
                        }}
                      >
                        <td style={{ padding: '9px 6px', textAlign: 'center', fontWeight: 700, color: '#64748B', borderRight: '1px solid #E2E8F0' }}>
                          {idx + 1}
                        </td>
                        <td style={{ padding: '9px 10px', borderRight: '1px solid #E2E8F0' }}>
                          <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '12.5px', lineHeight: 1.35 }}>
                            {item.productName}
                          </div>
                          <div style={{ fontSize: '10.5px', color: '#64748B', marginTop: '2px' }}>
                            {item.sku && <span>Mã: <strong style={{ color: '#475569' }}>{item.sku}</strong></span>}
                            {item.specs && <span> • QC: {item.specs}</span>}
                          </div>
                        </td>
                        <td style={{ padding: '9px 6px', textAlign: 'center', fontWeight: 600, color: '#334155', borderRight: '1px solid #E2E8F0' }}>
                          {item.unit}
                        </td>
                        <td style={{ padding: '9px 6px', textAlign: 'center', fontWeight: 900, color: '#0F172A', borderRight: '1px solid #E2E8F0', fontSize: '13px' }}>
                          {item.quantity}
                        </td>
                        <td style={{ padding: '9px 10px', fontSize: '11px', color: '#475569', borderRight: '1px solid #E2E8F0' }}>
                          <div>{item.priceLabel}</div>
                          {item.vatStatus === 'co_vat' ? (
                            <span style={{ fontSize: '9.5px', color: '#15803D', fontWeight: 700 }}>(Đã gồm VAT)</span>
                          ) : (
                            <span style={{ fontSize: '9.5px', color: '#B45309', fontWeight: 700 }}>(Chưa VAT)</span>
                          )}
                        </td>
                        <td style={{ padding: '9px 10px', textAlign: 'right', fontFamily: 'monospace', fontWeight: 600, color: '#334155', borderRight: '1px solid #E2E8F0' }}>
                          {formatVND(item.unitPrice)}
                        </td>
                        <td style={{ padding: '9px 10px', textAlign: 'right', fontFamily: 'monospace', fontWeight: 900, color: '#E60012', fontSize: '13px' }}>
                          {formatVND(item.quantity * item.unitPrice)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Summary and Terms Block */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '16px', alignItems: 'flex-start', marginBottom: '24px' }}>
                {/* Commercial Terms & Notes */}
                <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '12px 14px', fontSize: '11px', color: '#475569', lineHeight: 1.5 }}>
                  <div style={{ fontWeight: 800, color: '#1E293B', marginBottom: '4px', textTransform: 'uppercase', fontSize: '10.5px' }}>
                    ĐIỀU KHOẢN & GHI CHÚ BÁN HÀNG
                  </div>
                  {quotation.notes ? (
                    <div style={{ color: '#0F172A', fontWeight: 600, marginBottom: '6px' }}>
                      {quotation.notes}
                    </div>
                  ) : null}
                  <ul style={{ margin: 0, paddingLeft: '16px' }}>
                    <li style={{ marginBottom: '3px' }}>Đơn giá áp dụng theo chính sách hiện hành của Tập đoàn Hoa Sen Home.</li>
                    <li style={{ marginBottom: '3px' }}>Hiệu lực báo giá: 15 ngày kể từ ngày ban hành.</li>
                    <li>Quý khách vui lòng kiểm tra quy cách, chủng loại và số lượng khi nhận hàng.</li>
                  </ul>
                </div>

                {/* Totals Box */}
                <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '10px', padding: '14px 16px', fontSize: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569', marginBottom: '6px' }}>
                    <span>Tổng tiền hàng:</span>
                    <strong style={{ fontFamily: 'monospace', color: '#0F172A' }}>{formatVND(quotation.subtotal)}</strong>
                  </div>
                  {quotation.vatAmount > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569', marginBottom: '6px' }}>
                      <span>Thuế GTGT (VAT):</span>
                      <strong style={{ fontFamily: 'monospace', color: '#0F172A' }}>{formatVND(quotation.vatAmount)}</strong>
                    </div>
                  )}
                  <div style={{ 
                    borderTop: '2px solid #E60012', 
                    paddingTop: '8px', 
                    marginTop: '8px', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'baseline' 
                  }}>
                    <span style={{ fontWeight: 900, color: '#0F172A', fontSize: '13px' }}>TỔNG THANH TOÁN:</span>
                    <span style={{ fontWeight: 900, color: '#E60012', fontSize: '17px', fontFamily: 'monospace' }}>
                      {formatVND(quotation.totalAmount)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Signatures */}
              <div style={{ 
                borderTop: '1px solid #E2E8F0', 
                paddingTop: '18px', 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                textAlign: 'center', 
                fontSize: '12px' 
              }}>
                <div>
                  <div style={{ fontWeight: 800, textTransform: 'uppercase', color: '#1E293B' }}>ĐẠI DIỆN KHÁCH HÀNG</div>
                  <div style={{ fontSize: '10px', color: '#94A3B8', marginTop: '2px' }}>(Ký & ghi rõ họ tên)</div>
                  <div style={{ height: '60px' }} />
                  <div style={{ fontWeight: 600, color: '#334155' }}>{quotation.customerName || 'Khách hàng'}</div>
                </div>

                <div>
                  <div style={{ fontWeight: 800, textTransform: 'uppercase', color: '#1E293B' }}>ĐẠI DIỆN HOA SEN HOME</div>
                  <div style={{ fontSize: '10px', color: '#94A3B8', marginTop: '2px' }}>(Nhân viên lập báo giá)</div>
                  <div style={{ height: '60px' }} />
                  <div style={{ fontWeight: 800, color: '#E60012' }}>{quotation.creatorName}</div>
                </div>
              </div>

              {/* Official Document Security Footer */}
              <div style={{ 
                marginTop: '24px', 
                paddingTop: '10px', 
                borderTop: '1px dashed #CBD5E1', 
                fontSize: '10px', 
                color: '#94A3B8', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center' 
              }}>
                <span>HOA SEN HOME • Báo giá tham khảo & Giao dịch chính thức</span>
                <span>Thời gian in: {formatDate(new Date())}</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
