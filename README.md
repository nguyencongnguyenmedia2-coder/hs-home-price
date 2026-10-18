# HOA SEN HOME – Tra Cứu Sản Phẩm & Bảng Giá Hoa Sen Home

Ứng dụng web/mobile phục vụ nhân viên thị trường Tập đoàn Hoa Sen Home tra cứu sản phẩm, xem bảng giá đa đối tượng (Sỉ, Thầu thợ, Lẻ, Niêm yết) và lập báo giá xuất ảnh PNG / PDF gửi Zalo ngay tại điểm bán.

Phát triển bởi: **NGUYỄN CÔNG NGUYÊN**  
Bản quyền © 2026 NGUYỄN CÔNG NGUYÊN PHÁT TRIỂN WEBSITE • Dành cho nhân viên thị trường

---

## 🌟 Tính năng nổi bật

1. **Tra cứu giá tức thì & Siêu tốc (Mobile-First)**:
   - Tìm kiếm tiếng Việt có dấu, không dấu, viết tắt, SKU, thương hiệu, danh mục và quy cách.
   - Giao diện chuẩn Mobile Retail cao cấp (tối ưu màn hình 320px – 430px, tablet và desktop).
   - Truy cập tự do cho nhân viên thị trường (không cần đăng nhập mật khẩu).

2. **Dữ liệu chuẩn xác 100% từ Excel**:
   - Khởi tạo 292 sản phẩm từ 17 sheet Excel gốc (`Copy of BẢNG GIÁ CCDC 0206.xlsx`).
   - Bảng đối soát 100% từng sheet, giải trình chi tiết từng dòng dữ liệu và công thức VAT/chiết khấu.

3. **Lập Báo Giá & Tải Ảnh Về Máy**:
   - Giỏ hàng báo giá theo từng nhóm giá áp dụng.
   - Xem trước mẫu phiếu A4 tiêu chuẩn trực tiếp trên hệ thống.
   - **Tải ảnh báo giá độ nét cao (PNG)** gửi nhanh qua Zalo / Facebook Messenger.
   - Xuất file in PDF trực tiếp từ trình duyệt.

4. **Cổng Quản Trị Hệ Thống (`/admin`)**:
   - Đăng nhập và tạo tài khoản Quản trị viên qua **Supabase Auth**.
   - Phân tích và tải lên file Excel bảng giá mới với thuật toán so sánh biến động giá.
   - Quản lý kích hoạt phiên bản và lịch sử kiểm toán (Audit Logs).
   - Kiểm tra kết nối cơ sở dữ liệu Supabase Cloud.

---

## 🛠 Công nghệ sử dụng

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS v4, Modern Clean CSS Tokens
- **Icons**: Lucide React
- **Xuất file**: `html2canvas`, `jspdf`, `xlsx`
- **Backend / Database**: Supabase (PostgreSQL + Auth)

---

## 🚀 Hướng dẫn cài đặt & Chạy cục bộ

```bash
# 1. Cài đặt các gói phụ thuộc
npm install

# 2. Khởi chạy môi trường phát triển (Dev Server)
npm run dev
```

Mở trình duyệt tại: `http://localhost:5173`

- Truy cập ứng dụng nhân viên: `http://localhost:5173/`
- Truy cập cổng quản trị: `http://localhost:5173/admin`

---

## 📦 Triển khai & Build Production

```bash
# Kiểm tra type và đóng gói
npm run build
```

Bundle được tạo tại thư mục `dist/`, sẵn sàng triển khai trên Vercel, Netlify hoặc máy chủ riêng.

---

## 🗄 Cấu trúc cơ sở dữ liệu Supabase

- `schema.sql`: 13 bảng quan hệ chuẩn PostgreSQL (categories, brands, products, product_prices, price_versions, quotations, audit_logs...).
- `seed_data.sql`: Dữ liệu ban đầu gồm toàn bộ 292 sản phẩm và bảng giá tương ứng.
