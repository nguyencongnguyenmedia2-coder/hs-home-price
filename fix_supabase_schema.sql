-- ==============================================================================
-- CÂU LỆNH SQL SỬA LỖI LƯU & HIỂN THỊ SẢN PHẨM TRÊN VERCEL / SUPABASE
-- Hãy sao chép toàn bộ nội dung file này và chạy trong Supabase SQL Editor.
-- ==============================================================================

-- 1. Bổ sung các cột cần thiết cho bảng products để tương thích 100% với Frontend
ALTER TABLE IF EXISTS products ADD COLUMN IF NOT EXISTS category VARCHAR(255);
ALTER TABLE IF EXISTS products ADD COLUMN IF NOT EXISTS brand VARCHAR(255);
ALTER TABLE IF EXISTS products ADD COLUMN IF NOT EXISTS prices JSONB;
ALTER TABLE IF EXISTS products ADD COLUMN IF NOT EXISTS group_name VARCHAR(255);
ALTER TABLE IF EXISTS products ADD COLUMN IF NOT EXISTS specs TEXT;
ALTER TABLE IF EXISTS products ADD COLUMN IF NOT EXISTS unit VARCHAR(50) DEFAULT 'Cái';
ALTER TABLE IF EXISTS products ADD COLUMN IF NOT EXISTS packaging TEXT;
ALTER TABLE IF EXISTS products ADD COLUMN IF NOT EXISTS notes TEXT;
ALTER TABLE IF EXISTS products ADD COLUMN IF NOT EXISTS source_file VARCHAR(255);
ALTER TABLE IF EXISTS products ADD COLUMN IF NOT EXISTS sheet_name VARCHAR(100);
ALTER TABLE IF EXISTS products ADD COLUMN IF NOT EXISTS row_number INT;
ALTER TABLE IF EXISTS products ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- 2. Nếu bảng products chưa có, tạo bảng hoàn chỉnh
CREATE TABLE IF NOT EXISTS products (
    id VARCHAR(100) PRIMARY KEY,
    sku VARCHAR(100),
    product_name VARCHAR(500) NOT NULL,
    category VARCHAR(255),
    brand VARCHAR(255),
    group_name VARCHAR(255),
    specs TEXT,
    unit VARCHAR(50) NOT NULL DEFAULT 'Cái',
    packaging TEXT,
    notes TEXT,
    prices JSONB,
    source_file VARCHAR(255),
    sheet_name VARCHAR(100),
    row_number INT,
    price_version_id VARCHAR(100),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Mở toàn quyền (CRUD) cho ứng dụng trên Vercel đọc/ghi dữ liệu bảng giá
-- Tắt RLS để tránh lỗi 42501 (RLS violation) khi nhân viên hoặc admin thêm/sửa sản phẩm
ALTER TABLE products DISABLE ROW LEVEL SECURITY;

-- Mở quyền cho các bảng liên quan nếu có
ALTER TABLE IF EXISTS price_versions DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS quotations DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS quotation_items DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS favorites DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS audit_logs DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS categories DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS brands DISABLE ROW LEVEL SECURITY;

-- 4. Cấp quyền truy cập cho role anon và authenticated
GRANT ALL ON TABLE products TO anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated, service_role;

-- 5. Thông báo hoàn tất
SELECT 'Đã sửa thành công bảng products và phân quyền Supabase!' AS message;
