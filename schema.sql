-- ==============================================================================
-- CƠ SỞ DỮ LIỆU HỆ THỐNG HOA SEN HOME
-- Bảng giá sản phẩm, tra cứu, báo giá & phân quyền người dùng
-- Phù hợp PostgreSQL 15+ & Supabase Database
-- ==============================================================================

-- 1. Bảng vai trò người dùng (Roles)
CREATE TABLE IF NOT EXISTS roles (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

INSERT INTO roles (id, name, description) VALUES
('admin', 'Quản trị viên', 'Toàn quyền quản lý hệ thống, nhập bảng giá, quản lý người dùng'),
('sales', 'Nhân viên thị trường', 'Tra cứu sản phẩm, xem giá theo quyền, lập và xuất báo giá'),
('manager', 'Quản lý / Người duyệt', 'Xem báo giá toàn chi nhánh, duyệt báo giá, xem báo cáo')
ON CONFLICT (id) DO NOTHING;

-- 2. Bảng người dùng (Users / Profiles)
CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    role_id VARCHAR(50) REFERENCES roles(id) DEFAULT 'sales',
    branch VARCHAR(100) DEFAULT 'Chi nhánh Hoa Sen Home',
    phone VARCHAR(50),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Bảng phiên bản bảng giá (Price Versions)
CREATE TABLE IF NOT EXISTS price_versions (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    filename VARCHAR(255) NOT NULL,
    effective_date DATE NOT NULL,
    status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'archived', 'draft')),
    imported_by VARCHAR(255),
    total_products INT DEFAULT 0,
    total_sheets INT DEFAULT 0,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Bảng danh mục sản phẩm (Categories)
CREATE TABLE IF NOT EXISTS categories (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    display_order INT DEFAULT 0,
    icon VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Bảng thương hiệu (Brands)
CREATE TABLE IF NOT EXISTS brands (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. Bảng sản phẩm (Products)
CREATE TABLE IF NOT EXISTS products (
    id VARCHAR(100) PRIMARY KEY,
    sku VARCHAR(100),
    product_name VARCHAR(500) NOT NULL,
    category_id VARCHAR(100) REFERENCES categories(id) ON DELETE SET NULL,
    brand_id VARCHAR(100) REFERENCES brands(id) ON DELETE SET NULL,
    group_name VARCHAR(255),
    specs TEXT,
    unit VARCHAR(50) NOT NULL DEFAULT 'Cái',
    packaging TEXT,
    notes TEXT,
    source_file VARCHAR(255),
    sheet_name VARCHAR(100),
    row_number INT,
    price_version_id VARCHAR(100) REFERENCES price_versions(id) ON DELETE CASCADE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_products_sku ON products(sku);
CREATE INDEX IF NOT EXISTS idx_products_name ON products(product_name);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_brand ON products(brand_id);

-- 7. Bảng các loại giá (Price Types)
CREATE TABLE IF NOT EXISTS price_types (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT
);

INSERT INTO price_types (id, name, description) VALUES
('gia_niem_yet', 'Giá niêm yết', 'Giá niêm yết chuẩn từ nhà máy/tổng công ty'),
('gia_khach_si', 'Giá khách sỉ', 'Giá dành cho đại lý và khách mua số lượng lớn'),
('gia_thau_tho', 'Giá thầu thợ', 'Giá dành cho đối tác nhà thầu xây dựng và thợ thi công'),
('gia_khach_le', 'Giá khách lẻ', 'Giá bán lẻ cho khách hàng tiêu dùng trực tiếp'),
('gia_ban_mau', 'Giá bán mẫu', 'Giá bán sản phẩm mẫu trưng bày có điều kiện số lượng')
ON CONFLICT (id) DO NOTHING;

-- 8. Bảng chi tiết giá sản phẩm (Product Prices)
CREATE TABLE IF NOT EXISTS product_prices (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id VARCHAR(100) REFERENCES products(id) ON DELETE CASCADE,
    price_type_id VARCHAR(50) REFERENCES price_types(id) ON DELETE CASCADE,
    price_value NUMERIC(15, 2) NOT NULL,
    vat_status VARCHAR(20) DEFAULT 'chua_vat' CHECK (vat_status IN ('chua_vat', 'co_vat', 'chua_xac_dinh')),
    label VARCHAR(255),
    raw_excel_value NUMERIC(15, 4),
    price_version_id VARCHAR(100) REFERENCES price_versions(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_product_prices_prod ON product_prices(product_id);
CREATE INDEX IF NOT EXISTS idx_product_prices_type ON product_prices(price_type_id);

-- 9. Bảng báo giá (Quotations)
CREATE TABLE IF NOT EXISTS quotations (
    id VARCHAR(100) PRIMARY KEY,
    code VARCHAR(50) UNIQUE NOT NULL,
    creator_id VARCHAR(255) NOT NULL,
    creator_name VARCHAR(255) NOT NULL,
    customer_name VARCHAR(255) NOT NULL,
    customer_phone VARCHAR(50),
    customer_address TEXT,
    price_version_id VARCHAR(100) REFERENCES price_versions(id),
    subtotal NUMERIC(15, 2) NOT NULL DEFAULT 0,
    vat_amount NUMERIC(15, 2) NOT NULL DEFAULT 0,
    total_amount NUMERIC(15, 2) NOT NULL DEFAULT 0,
    notes TEXT,
    status VARCHAR(50) DEFAULT 'draft' CHECK (status IN ('draft', 'sent', 'approved', 'rejected')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 10. Bảng chi tiết dòng sản phẩm trong báo giá (Quotation Items)
CREATE TABLE IF NOT EXISTS quotation_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    quotation_id VARCHAR(100) REFERENCES quotations(id) ON DELETE CASCADE,
    product_id VARCHAR(100),
    product_name VARCHAR(500) NOT NULL,
    sku VARCHAR(100),
    unit VARCHAR(50) NOT NULL,
    specs TEXT,
    quantity NUMERIC(10, 2) NOT NULL DEFAULT 1,
    selected_price_key VARCHAR(50),
    unit_price NUMERIC(15, 2) NOT NULL DEFAULT 0,
    price_label VARCHAR(255),
    vat_status VARCHAR(20) DEFAULT 'co_vat',
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 11. Bảng sản phẩm yêu thích (Favorites)
CREATE TABLE IF NOT EXISTS favorites (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id VARCHAR(255) NOT NULL,
    product_id VARCHAR(100) REFERENCES products(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, product_id)
);

-- 12. Bảng lịch sử nhập bảng giá (Import Jobs)
CREATE TABLE IF NOT EXISTS import_jobs (
    id VARCHAR(100) PRIMARY KEY,
    filename VARCHAR(255) NOT NULL,
    price_version_id VARCHAR(100),
    total_sheets INT DEFAULT 0,
    total_parsed INT DEFAULT 0,
    total_skipped INT DEFAULT 0,
    status VARCHAR(50) DEFAULT 'completed',
    imported_by VARCHAR(255),
    error_summary JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 13. Bảng nhật ký hoạt động (Audit Logs)
CREATE TABLE IF NOT EXISTS audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id VARCHAR(255),
    user_name VARCHAR(255),
    action VARCHAR(100) NOT NULL,
    details TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bật Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotations ENABLE ROW LEVEL SECURITY;
ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;

-- Policy mẫu: Tất cả người dùng xác thực có thể xem sản phẩm
CREATE POLICY "Public read products" ON products FOR SELECT USING (true);
CREATE POLICY "Public read categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Public read brands" ON brands FOR SELECT USING (true);
CREATE POLICY "Public read prices" ON product_prices FOR SELECT USING (true);
