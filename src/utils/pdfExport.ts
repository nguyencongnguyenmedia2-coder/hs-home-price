import type { Quotation } from '../types';
import { formatVND, formatDate, formatQuotationCreator } from './formatters';
import { HOA_SEN_LOGO_BASE64 } from '../assets/brandLogo';

/**
 * Mở cửa sổ in chuyên nghiệp và kích hoạt in / lưu PDF trực tiếp từ trình duyệt.
 * Thiết kế chuẩn khổ A4 đồ họa sắc nét, chuẩn màu thương hiệu Hoa Sen Home (#E60012),
 * hỗ trợ đầy đủ tiếng Việt UTF-8, tự động ngắt trang thông minh, lặp lại tiêu đề bảng
 * và tối ưu in màu (-webkit-print-color-adjust: exact).
 */
export function printQuotation(quote: Quotation): void {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Vui lòng cho phép mở popup trên trình duyệt để in hoặc tải file PDF báo giá.');
    return;
  }

  const itemsHtml = quote.items
    .map(
      (item, index) => `
    <tr class="item-row ${index % 2 === 1 ? 'zebra' : ''}">
      <td class="col-stt">${index + 1}</td>
      <td class="col-name">
        <div class="product-title">${escapeHtml(item.productName)}</div>
        <div class="product-meta">
          ${item.sku ? `<span class="meta-sku">Mã: <strong>${escapeHtml(item.sku)}</strong></span>` : ''}
          ${item.specs ? `<span class="meta-specs">• QC: ${escapeHtml(item.specs)}</span>` : ''}
        </div>
      </td>
      <td class="col-unit">${escapeHtml(item.unit)}</td>
      <td class="col-qty">${item.quantity}</td>
      <td class="col-policy">
        <div class="policy-label">${escapeHtml(item.priceLabel)}</div>
        <div class="vat-badge ${item.vatStatus === 'co_vat' ? 'vat-inc' : 'vat-ex'}">
          ${item.vatStatus === 'co_vat' ? '(Đã gồm VAT)' : '(Chưa VAT)'}
        </div>
      </td>
      <td class="col-price">${formatVND(item.unitPrice)}</td>
      <td class="col-subtotal">${formatVND(item.quantity * item.unitPrice)}</td>
    </tr>
  `
    )
    .join('');

  const statusBadge =
    quote.status === 'approved'
      ? '<span class="status-badge approved">Báo giá chính thức</span>'
      : '<span class="status-badge draft">Báo giá tham khảo</span>';

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Báo giá ${quote.code} - Hoa Sen Home</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">
      <style>
        @page {
          size: A4 portrait;
          margin: 10mm 12mm 12mm 12mm;
        }

        * {
          box-sizing: border-box;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }

        html, body {
          margin: 0;
          padding: 0;
          background-color: #ffffff;
          color: #0f172a;
          font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 12px;
          line-height: 1.45;
          -webkit-font-smoothing: antialiased;
        }

        /* Screen Preview Controls Bar */
        .screen-toolbar {
          position: sticky;
          top: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #0f172a;
          color: #ffffff;
          padding: 10px 20px;
          font-size: 13px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .screen-toolbar .toolbar-left {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
        }

        .screen-toolbar .toolbar-right {
          display: flex;
          gap: 10px;
        }

        .btn {
          cursor: pointer;
          border: none;
          padding: 7px 16px;
          border-radius: 8px;
          font-family: inherit;
          font-size: 12px;
          font-weight: 700;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .btn-primary {
          background: #E60012;
          color: #ffffff;
        }

        .btn-primary:hover {
          background: #cc0010;
        }

        .btn-secondary {
          background: #334155;
          color: #ffffff;
        }

        .btn-secondary:hover {
          background: #475569;
        }

        /* Printable Paper Wrapper */
        .page-container {
          max-width: 820px;
          margin: 0 auto;
          padding: 24px 30px;
          background: #ffffff;
        }

        /* Brand Corporate Header */
        .brand-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 3px solid #E60012;
          padding-bottom: 14px;
          margin-bottom: 16px;
        }

        .brand-identity {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .brand-logo {
          width: 52px;
          height: 52px;
          border-radius: 10px;
          object-fit: cover;
          box-shadow: 0 2px 8px rgba(230, 0, 18, 0.2);
        }

        .brand-name {
          font-size: 22px;
          font-weight: 900;
          color: #E60012;
          letter-spacing: -0.5px;
          line-height: 1.1;
        }

        .brand-sub {
          font-size: 11px;
          font-weight: 700;
          color: #334155;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          margin-top: 3px;
        }

        .meta-right {
          text-align: right;
        }

        .quote-code {
          font-family: 'Consolas', 'Courier New', monospace;
          font-size: 16px;
          font-weight: 800;
          color: #E60012;
          letter-spacing: 0.5px;
        }

        .quote-date {
          font-size: 11px;
          color: #64748b;
          margin-top: 2px;
        }

        .quote-date strong {
          color: #0f172a;
        }

        .status-badge {
          display: inline-block;
          margin-top: 5px;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 9.5px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .status-badge.approved {
          background: #ECFDF5;
          color: #065F46;
          border: 1px solid #A7F3D0;
        }

        .status-badge.draft {
          background: #FFFBEB;
          color: #92400E;
          border: 1px solid #FDE68A;
        }

        /* Document Title Banner */
        .doc-title-section {
          text-align: center;
          margin: 12px 0 16px 0;
        }

        .doc-title {
          font-size: 21px;
          font-weight: 900;
          color: #0f172a;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          margin: 0;
        }

        .doc-subtitle {
          font-size: 11px;
          color: #64748b;
          font-style: italic;
          margin-top: 3px;
        }

        /* Info Grid: Customer & Quotation Details */
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          background-color: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          padding: 12px 16px;
          margin-bottom: 18px;
          font-size: 12px;
        }

        .info-col {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .info-col.right {
          border-left: 1px solid #E2E8F0;
          padding-left: 16px;
        }

        .section-tag {
          font-size: 10.5px;
          font-weight: 800;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 1px solid #E2E8F0;
          padding-bottom: 3px;
          margin-bottom: 2px;
        }

        .info-line {
          display: flex;
          align-items: baseline;
        }

        .info-line .label {
          color: #64748b;
          width: 95px;
          flex-shrink: 0;
        }

        .info-line .val {
          color: #0f172a;
          font-weight: 600;
        }

        .info-line .val.strong-name {
          font-size: 12.5px;
          font-weight: 800;
        }

        /* Product Table */
        .table-wrap {
          border: 1px solid #CBD5E1;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 18px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 11.5px;
          text-align: left;
        }

        thead {
          display: table-header-group;
        }

        th {
          background-color: #F1F5F9;
          color: #1E293B;
          font-weight: 800;
          padding: 8px 8px;
          border-bottom: 2px solid #CBD5E1;
          border-right: 1px solid #E2E8F0;
          font-size: 11px;
        }

        th:last-child {
          border-right: none;
        }

        tbody tr {
          page-break-inside: avoid;
          break-inside: avoid;
          border-bottom: 1px solid #E2E8F0;
        }

        tbody tr:last-child {
          border-bottom: none;
        }

        tbody tr.zebra {
          background-color: #F8FAFC;
        }

        td {
          padding: 8px 8px;
          border-right: 1px solid #E2E8F0;
          vertical-align: middle;
        }

        td:last-child {
          border-right: none;
        }

        .col-stt {
          text-align: center;
          width: 34px;
          font-weight: 700;
          color: #64748b;
        }

        .col-name {
          min-width: 190px;
        }

        .product-title {
          font-weight: 800;
          color: #0f172a;
          font-size: 12px;
          line-height: 1.35;
        }

        .product-meta {
          font-size: 10px;
          color: #64748b;
          margin-top: 2px;
        }

        .meta-sku strong {
          color: #475569;
        }

        .col-unit {
          text-align: center;
          width: 48px;
          font-weight: 600;
          color: #334155;
        }

        .col-qty {
          text-align: center;
          width: 42px;
          font-weight: 900;
          color: #0f172a;
          font-size: 12.5px;
        }

        .col-policy {
          width: 130px;
          font-size: 11px;
          color: #475569;
        }

        .vat-badge {
          font-size: 9px;
          font-weight: 700;
          margin-top: 1px;
        }

        .vat-badge.vat-inc {
          color: #15803D;
        }

        .vat-badge.vat-ex {
          color: #B45309;
        }

        .col-price {
          text-align: right;
          width: 95px;
          font-family: 'Consolas', 'Courier New', monospace;
          font-weight: 600;
          color: #334155;
        }

        .col-subtotal {
          text-align: right;
          width: 110px;
          font-family: 'Consolas', 'Courier New', monospace;
          font-weight: 900;
          color: #E60012;
          font-size: 12.5px;
        }

        /* Summary and Terms Block */
        .summary-terms-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 16px;
          align-items: flex-start;
          margin-bottom: 22px;
          page-break-inside: avoid;
          break-inside: avoid;
        }

        .terms-box {
          background-color: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          padding: 10px 14px;
          font-size: 10.5px;
          color: #475569;
          line-height: 1.5;
        }

        .terms-title {
          font-weight: 800;
          color: #1e293b;
          text-transform: uppercase;
          font-size: 10px;
          margin-bottom: 4px;
        }

        .quote-note-content {
          color: #0f172a;
          font-weight: 600;
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 6px;
          padding: 6px 10px;
          margin-bottom: 6px;
        }

        .terms-list {
          margin: 0;
          padding-left: 15px;
        }

        .terms-list li {
          margin-bottom: 2px;
        }

        .totals-box {
          background-color: #F8FAFC;
          border: 1px solid #CBD5E1;
          border-radius: 8px;
          padding: 12px 14px;
          font-size: 11.5px;
        }

        .total-row {
          display: flex;
          justify-content: space-between;
          color: #475569;
          margin-bottom: 5px;
        }

        .total-row .val-num {
          font-family: 'Consolas', 'Courier New', monospace;
          color: #0f172a;
          font-weight: 700;
        }

        .grand-total-row {
          border-top: 2px solid #E60012;
          padding-top: 8px;
          margin-top: 8px;
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }

        .grand-label {
          font-weight: 900;
          color: #0f172a;
          font-size: 12.5px;
        }

        .grand-num {
          font-weight: 900;
          color: #E60012;
          font-size: 16px;
          font-family: 'Consolas', 'Courier New', monospace;
        }

        /* Signatures Block */
        .signatures-grid {
          border-top: 1px solid #CBD5E1;
          padding-top: 14px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          text-align: center;
          font-size: 11.5px;
          margin-bottom: 18px;
          page-break-inside: avoid;
          break-inside: avoid;
        }

        .sign-col {
          padding: 0 16px;
        }

        .sign-role {
          font-weight: 800;
          text-transform: uppercase;
          color: #1e293b;
          font-size: 12.5px;
        }

        .sign-hint {
          font-size: 10px;
          color: #64748b;
          margin-top: 2px;
        }

        .sign-spacing {
          height: 52px;
        }

        .sign-name {
          font-weight: 800;
          color: #0f172a;
          font-size: 13.5px;
          border-top: 1px dotted #CBD5E1;
          padding-top: 6px;
          display: inline-block;
          min-width: 150px;
        }

        .sign-name.staff {
          color: #E60012;
        }

        /* Footer */
        .doc-footer {
          padding-top: 10px;
          border-top: 1px dashed #CBD5E1;
          font-size: 9.5px;
          color: #64748b;
          display: flex;
          justify-content: space-between;
          align-items: center;
          page-break-inside: avoid;
          break-inside: avoid;
        }

        /* Hide Screen UI on Print */
        @media print {
          .screen-toolbar {
            display: none !important;
          }
          .page-container {
            padding: 0 !important;
            max-width: 100% !important;
          }
          body {
            background-color: #ffffff !important;
          }
        }
      </style>
    </head>
    <body>
      <!-- Top floating toolbar for browser popup -->
      <div class="screen-toolbar">
        <div class="toolbar-left">
          <span>HOA SEN HOME • BÁO GIÁ SẢN PHẨM (${quote.code})</span>
        </div>
        <div class="toolbar-right">
          <button class="btn btn-primary" onclick="window.print()">
            🖨️ In / Tải PDF
          </button>
          <button class="btn btn-secondary" onclick="window.close()">
            ✕ Đóng
          </button>
        </div>
      </div>

      <div class="page-container">
        <!-- Brand Corporate Header -->
        <div class="brand-header">
          <div class="brand-identity">
            <img src="${HOA_SEN_LOGO_BASE64}" class="brand-logo" alt="Hoa Sen Home" />
            <div>
              <div class="brand-name">HOA SEN HOME</div>
              <div class="brand-sub">Hệ thống Phân phối Vật liệu Xây dựng & Nội thất Hoa Sen</div>
            </div>
          </div>
          <div class="meta-right">
            <div class="quote-code">${escapeHtml(quote.code)}</div>
            <div class="quote-date">Ngày lập: <strong>${formatDate(quote.createdAt)}</strong></div>
            <div>${statusBadge}</div>
          </div>
        </div>

        <!-- Document Title Banner -->
        <div class="doc-title-section">
          <h1 class="doc-title">BẢNG BÁO GIÁ SẢN PHẨM</h1>
          <div class="doc-subtitle">(Kèm quy cách kỹ thuật, số lượng, đơn giá và chính sách áp dụng)</div>
        </div>

        <!-- Info Grid -->
        <div class="info-grid">
          <div class="info-col">
            <div class="section-tag">THÔNG TIN KHÁCH HÀNG</div>
            <div class="info-line">
              <span class="label">Khách hàng:</span>
              <span class="val strong-name">${escapeHtml(quote.customerName || 'Khách hàng vãng lai')}</span>
            </div>
            <div class="info-line">
              <span class="label">Điện thoại:</span>
              <span class="val">${escapeHtml(quote.customerPhone || 'Chưa cung cấp')}</span>
            </div>
            <div class="info-line">
              <span class="label">Địa chỉ / CT:</span>
              <span class="val">${escapeHtml(quote.customerAddress || 'Giao tại công trình')}</span>
            </div>
          </div>

          <div class="info-col right">
            <div class="section-tag">THÔNG TIN BÁO GIÁ</div>
            <div class="info-line">
              <span class="label">Nhân viên lập:</span>
              <span class="val">${escapeHtml(formatQuotationCreator(quote.creatorName))}</span>
            </div>
            <div class="info-line">
              <span class="label">Đơn vị tiền tệ:</span>
              <span class="val">Việt Nam Đồng (VND)</span>
            </div>
            <div class="info-line">
              <span class="label">Hiệu lực báo giá:</span>
              <span class="val">15 ngày kể từ ngày lập</span>
            </div>
          </div>
        </div>

        <!-- Product Table -->
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th style="width: 34px; text-align: center;">STT</th>
                <th>Tên sản phẩm & Quy cách</th>
                <th style="width: 48px; text-align: center;">ĐVT</th>
                <th style="width: 42px; text-align: center;">SL</th>
                <th style="width: 130px;">Chính sách giá</th>
                <th style="width: 95px; text-align: right;">Đơn giá (đ)</th>
                <th style="width: 110px; text-align: right;">Thành tiền (đ)</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
          </table>
        </div>

        <!-- Summary & Terms Section -->
        <div class="summary-terms-grid">
          <div class="terms-box">
            <div class="terms-title">ĐIỀU KHOẢN & GHI CHÚ BÁN HÀNG</div>
            ${
              quote.notes
                ? `<div class="quote-note-content">${escapeHtml(quote.notes)}</div>`
                : ''
            }
            <ul class="terms-list">
              <li>Đơn giá áp dụng theo chính sách hiện hành của Tập đoàn Hoa Sen Home.</li>
              <li>Hiệu lực báo giá: 15 ngày kể từ ngày ban hành.</li>
              <li>Quý khách vui lòng kiểm tra quy cách, chủng loại và số lượng khi nhận hàng.</li>
            </ul>
          </div>

          <div class="totals-box">
            <div class="total-row">
              <span>Tổng tiền hàng:</span>
              <span class="val-num">${formatVND(quote.subtotal)}</span>
            </div>
            ${
              quote.vatAmount > 0
                ? `
            <div class="total-row">
              <span>Thuế GTGT (VAT):</span>
              <span class="val-num">${formatVND(quote.vatAmount)}</span>
            </div>`
                : ''
            }
            <div class="grand-total-row">
              <span class="grand-label">TỔNG THANH TOÁN:</span>
              <span class="grand-num">${formatVND(quote.totalAmount)}</span>
            </div>
          </div>
        </div>

        <!-- Signatures -->
        <div class="signatures-grid">
          <div class="sign-col">
            <div class="sign-role">ĐẠI DIỆN KHÁCH HÀNG</div>
            <div class="sign-hint">(Ký & ghi rõ họ tên)</div>
            <div class="sign-spacing"></div>
            <div class="sign-name">${escapeHtml(quote.customerName || 'Khách hàng')}</div>
          </div>
          <div class="sign-col">
            <div class="sign-role">ĐẠI DIỆN HOA SEN HOME</div>
            <div class="sign-hint">(Nhân viên lập báo giá)</div>
            <div class="sign-spacing"></div>
            <div class="sign-name staff">${escapeHtml(formatQuotationCreator(quote.creatorName))}</div>
          </div>
        </div>

        <!-- Document Security Footer -->
        <div class="doc-footer">
          <span>HOA SEN HOME • Báo giá tham khảo & Giao dịch chính thức</span>
          <span>Thời gian in: ${formatDate(new Date())}</span>
        </div>
      </div>

      <script>
        window.onload = function() {
          // Delay briefly to allow Be Vietnam Pro font & images to fully settle
          setTimeout(function() {
            window.print();
          }, 350);
        };
      </script>
    </body>
    </html>
  `;

  printWindow.document.open();
  printWindow.document.write(htmlContent);
  printWindow.document.close();
}

/**
 * Helper to escape HTML characters in dynamic data to prevent XSS / render issues
 */
function escapeHtml(str: string | null | undefined): string {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
