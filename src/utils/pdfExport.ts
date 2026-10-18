import type { Quotation } from '../types';
import { formatVND, formatDate } from './formatters';
import { HOA_SEN_LOGO_BASE64 } from '../assets/brandLogo';

/**
 * Mở cửa sổ in chuyên nghiệp và kích hoạt in / lưu PDF trực tiếp từ trình duyệt
 * Đảm bảo 100% hiển thị tiếng Việt UTF-8 chuẩn xác, sắc nét, đẹp mắt cho mọi thiết bị.
 */
export function printQuotation(quote: Quotation): void {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Vui lòng cho phép mở popup để in hoặc tải file PDF báo giá.');
    return;
  }

  const itemsHtml = quote.items
    .map(
      (item, index) => `
    <tr>
      <td style="text-align: center; border: 1px solid #cbd5e1; padding: 8px;">${index + 1}</td>
      <td style="border: 1px solid #cbd5e1; padding: 8px;">
        <div style="font-weight: 600; color: #1e293b;">${item.productName}</div>
        <div style="font-size: 11px; color: #64748b;">Mã: ${item.sku || 'N/A'}${item.specs ? ` | QC: ${item.specs}` : ''}</div>
      </td>
      <td style="text-align: center; border: 1px solid #cbd5e1; padding: 8px;">${item.unit}</td>
      <td style="text-align: center; border: 1px solid #cbd5e1; padding: 8px; font-weight: 600;">${item.quantity}</td>
      <td style="border: 1px solid #cbd5e1; padding: 8px; font-size: 12px; color: #475569;">${item.priceLabel}</td>
      <td style="text-align: right; border: 1px solid #cbd5e1; padding: 8px;">${formatVND(item.unitPrice)}</td>
      <td style="text-align: right; border: 1px solid #cbd5e1; padding: 8px; font-weight: 600; color: #C8102E;">${formatVND(item.quantity * item.unitPrice)}</td>
    </tr>
  `
    )
    .join('');

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <title>Báo giá ${quote.code}</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          margin: 0;
          padding: 24px;
          color: #1e293b;
          font-size: 13px;
          line-height: 1.5;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 2px solid #C8102E;
          padding-bottom: 16px;
          margin-bottom: 20px;
        }
        .brand-title {
          font-size: 20px;
          font-weight: 800;
          color: #C8102E;
          text-transform: uppercase;
        }
        .brand-sub {
          font-size: 12px;
          color: #64748b;
          margin-top: 2px;
        }
        .quote-title {
          text-align: center;
          font-size: 22px;
          font-weight: 800;
          color: #0f172a;
          margin: 16px 0 20px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          background: #f8fafc;
          padding: 16px;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          margin-bottom: 20px;
        }
        .info-item {
          margin-bottom: 6px;
        }
        .info-label {
          font-weight: 600;
          color: #475569;
          display: inline-block;
          width: 130px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        th {
          background-color: #f1f5f9;
          color: #334155;
          font-weight: 700;
          text-align: left;
          padding: 10px 8px;
          border: 1px solid #cbd5e1;
          font-size: 12px;
        }
        .summary-box {
          width: 320px;
          margin-left: auto;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 14px;
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        .summary-row.total {
          border-top: 2px solid #C8102E;
          padding-top: 8px;
          margin-top: 8px;
          font-weight: 800;
          font-size: 15px;
          color: #C8102E;
        }
        .footer {
          margin-top: 36px;
          display: flex;
          justify-content: space-between;
          text-align: center;
        }
        .sign-title {
          font-weight: 700;
          margin-bottom: 60px;
        }
        .notice {
          margin-top: 30px;
          padding: 12px;
          background: #fffbeb;
          border: 1px dashed #f59e0b;
          border-radius: 6px;
          font-size: 11px;
          color: #92400e;
        }
        @media print {
          body { padding: 12px; }
          .no-print { display: none; }
        }
      </style>
    </head>
    <body>
      <div class="header" style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #C8102E; padding-bottom: 12px; margin-bottom: 16px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <img src="${HOA_SEN_LOGO_BASE64}" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover;" alt="Hoa Sen Home" />
          <div>
            <div class="brand-title">HOA SEN HOME</div>
            <div class="brand-sub">Hệ thống Tra cứu Bảng giá & Lập báo giá Sản phẩm Hoa Sen Home</div>
            <div style="font-size: 11px; color: #64748b; margin-top: 4px;">Phiên bản bảng giá: <strong>${quote.priceVersionName}</strong></div>
          </div>
        </div>
        <div style="text-align: right;">
          <div style="font-weight: 700; font-size: 15px; color: #C8102E;">${quote.code}</div>
          <div style="font-size: 12px; color: #64748b;">Ngày lập: ${formatDate(quote.createdAt)}</div>
        </div>
      </div>

      <div class="quote-title">BẢNG BÁO GIÁ SẢN PHẨM</div>

      <div class="info-grid">
        <div>
          <div class="info-item"><span class="info-label">Khách hàng:</span> <strong>${quote.customerName || 'Khách hàng vãng lai'}</strong></div>
          <div class="info-item"><span class="info-label">Điện thoại:</span> ${quote.customerPhone || 'Chưa cung cấp'}</div>
          <div class="info-item"><span class="info-label">Địa chỉ công trình:</span> ${quote.customerAddress || 'Chưa cung cấp'}</div>
        </div>
        <div>
          <div class="info-item"><span class="info-label">Nhân viên lập:</span> <strong>${quote.creatorName}</strong></div>
          <div class="info-item"><span class="info-label">Trạng thái:</span> ${quote.status === 'approved' ? 'Đã duyệt' : 'Báo giá tham khảo'}</div>
          <div class="info-item"><span class="info-label">Thời hạn báo giá:</span> 15 ngày kể từ ngày lập</div>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th style="width: 35px; text-align: center;">STT</th>
            <th>Tên sản phẩm & Quy cách</th>
            <th style="width: 50px; text-align: center;">ĐVT</th>
            <th style="width: 45px; text-align: center;">SL</th>
            <th style="width: 140px;">Loại giá áp dụng</th>
            <th style="width: 105px; text-align: right;">Đơn giá</th>
            <th style="width: 115px; text-align: right;">Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          ${itemsHtml}
        </tbody>
      </table>

      <div class="summary-box">
        <div class="summary-row">
          <span>Tổng tiền hàng:</span>
          <strong>${formatVND(quote.subtotal)}</strong>
        </div>
        ${
          quote.vatAmount > 0
            ? `
        <div class="summary-row">
          <span>Thuế VAT:</span>
          <span>${formatVND(quote.vatAmount)}</span>
        </div>`
            : ''
        }
        <div class="summary-row total">
          <span>TỔNG CỘNG:</span>
          <span>${formatVND(quote.totalAmount)}</span>
        </div>
      </div>

      ${
        quote.notes
          ? `
      <div style="margin-top: 16px; padding: 10px; background: #f1f5f9; border-radius: 6px;">
        <strong>Ghi chú:</strong> ${quote.notes}
      </div>`
          : ''
      }

      <div class="notice">
        * Lưu ý: Bảng báo giá này được xuất từ hệ thống tra cứu nội bộ HOA SEN HOME. Đơn giá áp dụng theo phiên bản <strong>${quote.priceVersionName}</strong> tại thời điểm lập báo giá. Quý khách vui lòng xác nhận đơn hàng trước khi bảng giá hết hiệu lực.
      </div>

      <div class="footer">
        <div>
          <div class="sign-title">ĐẠI DIỆN KHÁCH HÀNG</div>
          <div style="color: #94a3b8;">(Ký & ghi rõ họ tên)</div>
        </div>
        <div>
          <div class="sign-title">NHÂN VIÊN LẬP BÁO GIÁ</div>
          <div style="font-weight: 600; color: #1e293b;">${quote.creatorName}</div>
        </div>
      </div>

      <script>
        window.onload = function() {
          window.print();
        };
      </script>
    </body>
    </html>
  `;

  printWindow.document.open();
  printWindow.document.write(htmlContent);
  printWindow.document.close();
}
