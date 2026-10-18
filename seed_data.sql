-- ==============================================================================
-- DỮ LIỆU ĐỒNG BỘ 100% TỪ FILE EXCEL BẢNG GIÁ HOA SEN HOME CCDC 0206
-- Tổng số sản phẩm: 292 sản phẩm | Tổng số sheet: 17
-- ==============================================================================

-- 1. Tạo phiên bản bảng giá
INSERT INTO price_versions (id, name, filename, effective_date, status, imported_by, total_products, total_sheets, notes)
VALUES ('VER-2024-0206', 'BẢNG GIÁ CCDC 0206', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', '2024-06-02', 'active', 'Admin', 292, 17, 'Đồng bộ 100% từ 17 sheet Excel gốc')
ON CONFLICT (id) DO UPDATE SET total_products = EXCLUDED.total_products, status = 'active';

-- 2. Danh mục sản phẩm
INSERT INTO categories (id, name, display_order) VALUES ('CAT-01', 'Bồn nước Inox', 1) ON CONFLICT (id) DO NOTHING;
INSERT INTO categories (id, name, display_order) VALUES ('CAT-02', 'Bồn tự hoại', 2) ON CONFLICT (id) DO NOTHING;
INSERT INTO categories (id, name, display_order) VALUES ('CAT-03', 'Công tắc - Ổ cắm', 3) ON CONFLICT (id) DO NOTHING;
INSERT INTO categories (id, name, display_order) VALUES ('CAT-04', 'Hóa chất chống thấm', 4) ON CONFLICT (id) DO NOTHING;
INSERT INTO categories (id, name, display_order) VALUES ('CAT-05', 'Keo Silicone', 5) ON CONFLICT (id) DO NOTHING;
INSERT INTO categories (id, name, display_order) VALUES ('CAT-06', 'Máy móc & Dụng cụ cầm tay', 6) ON CONFLICT (id) DO NOTHING;
INSERT INTO categories (id, name, display_order) VALUES ('CAT-07', 'Máy nước nóng NLMT', 7) ON CONFLICT (id) DO NOTHING;
INSERT INTO categories (id, name, display_order) VALUES ('CAT-08', 'Sơn kim loại', 8) ON CONFLICT (id) DO NOTHING;
INSERT INTO categories (id, name, display_order) VALUES ('CAT-09', 'Sơn xịt', 9) ON CONFLICT (id) DO NOTHING;
INSERT INTO categories (id, name, display_order) VALUES ('CAT-10', 'Thiết bị chiếu sáng LED', 10) ON CONFLICT (id) DO NOTHING;
INSERT INTO categories (id, name, display_order) VALUES ('CAT-11', 'Thiết bị đóng ngắt', 11) ON CONFLICT (id) DO NOTHING;
INSERT INTO categories (id, name, display_order) VALUES ('CAT-12', 'Tấm cách nhiệt', 12) ON CONFLICT (id) DO NOTHING;
INSERT INTO categories (id, name, display_order) VALUES ('CAT-13', 'Tấm lợp lấy sáng', 13) ON CONFLICT (id) DO NOTHING;
INSERT INTO categories (id, name, display_order) VALUES ('CAT-14', 'Tấm xi măng Cemboard', 14) ON CONFLICT (id) DO NOTHING;
INSERT INTO categories (id, name, display_order) VALUES ('CAT-15', 'Van vòi đồng', 15) ON CONFLICT (id) DO NOTHING;
INSERT INTO categories (id, name, display_order) VALUES ('CAT-16', 'Vít & Phụ kiện liên kết', 16) ON CONFLICT (id) DO NOTHING;
INSERT INTO categories (id, name, display_order) VALUES ('CAT-17', 'Vật liệu hàn', 17) ON CONFLICT (id) DO NOTHING;
INSERT INTO categories (id, name, display_order) VALUES ('CAT-18', 'Xe rùa', 18) ON CONFLICT (id) DO NOTHING;
INSERT INTO categories (id, name, display_order) VALUES ('CAT-19', 'Đá cắt - Đá mài', 19) ON CONFLICT (id) DO NOTHING;

-- 3. Thương hiệu sản phẩm
INSERT INTO brands (id, name) VALUES ('BR-01', 'Hoa Sen Home') ON CONFLICT (id) DO NOTHING;
INSERT INTO brands (id, name) VALUES ('BR-02', 'LusCoat') ON CONFLICT (id) DO NOTHING;
INSERT INTO brands (id, name) VALUES ('BR-03', 'LusCom') ON CONFLICT (id) DO NOTHING;
INSERT INTO brands (id, name) VALUES ('BR-04', 'LusFix') ON CONFLICT (id) DO NOTHING;
INSERT INTO brands (id, name) VALUES ('BR-05', 'LusWell') ON CONFLICT (id) DO NOTHING;
INSERT INTO brands (id, name) VALUES ('BR-06', 'Puwa') ON CONFLICT (id) DO NOTHING;
INSERT INTO brands (id, name) VALUES ('BR-07', 'Siemens') ON CONFLICT (id) DO NOTHING;
INSERT INTO brands (id, name) VALUES ('BR-08', 'Việt Đức') ON CONFLICT (id) DO NOTHING;

-- 4. Chèn 292 sản phẩm và giá chi tiết
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0001', 'VNDAI', 'Bộ máy nước nóng NLMT  LusWell VNDAI I304 - 12 ống: 130L', 'CAT-07', 'BR-05', 'Bộ máy nước nóng NLMT  LusWell VNDAI I304', '12 ống: 130L', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'NLMT', 3, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0001', 'gia_niem_yet', 5060000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0001', 'gia_khach_si', 4371840.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0001', 'gia_thau_tho', 4918320.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0001', 'gia_khach_le', 5464800.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0001', 'gia_ban_mau', 3552120.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0002', 'VNDAI', 'Bộ máy nước nóng NLMT  LusWell VNDAI I304 - 15 ống: 160L', 'CAT-07', 'BR-05', 'Bộ máy nước nóng NLMT  LusWell VNDAI I304', '15 ống: 160L', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'NLMT', 4, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0002', 'gia_niem_yet', 6220000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0002', 'gia_khach_si', 5374080.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0002', 'gia_thau_tho', 6045840.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0002', 'gia_khach_le', 6717600.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0002', 'gia_ban_mau', 4366440.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0003', 'VNDAI', 'Bộ máy nước nóng NLMT  LusWell VNDAI I304 - 18 ống: 180L', 'CAT-07', 'BR-05', 'Bộ máy nước nóng NLMT  LusWell VNDAI I304', '18 ống: 180L', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'NLMT', 5, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0003', 'gia_niem_yet', 7380000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0003', 'gia_khach_si', 6376320.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0003', 'gia_thau_tho', 7173360.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0003', 'gia_khach_le', 7970400.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0003', 'gia_ban_mau', 5180760.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0004', 'VNDAI', 'Bộ máy nước nóng NLMT  LusWell VNDAI I304 - 20 ống: 200L', 'CAT-07', 'BR-05', 'Bộ máy nước nóng NLMT  LusWell VNDAI I304', '20 ống: 200L', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'NLMT', 6, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0004', 'gia_niem_yet', 8160000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0004', 'gia_khach_si', 7050240.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0004', 'gia_thau_tho', 7931520.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0004', 'gia_khach_le', 8812800.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0004', 'gia_ban_mau', 5728320.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0005', 'VNDAI', 'Bộ máy nước nóng NLMT  LusWell VNDAI I304 - 24 ống: 240L', 'CAT-07', 'BR-05', 'Bộ máy nước nóng NLMT  LusWell VNDAI I304', '24 ống: 240L', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'NLMT', 7, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0005', 'gia_niem_yet', 9760000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0005', 'gia_khach_si', 8432640.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0005', 'gia_thau_tho', 9486720.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0005', 'gia_khach_le', 10540800.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0005', 'gia_ban_mau', 6851520.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0006', 'VNDAI', 'Bộ máy nước nóng NLMT  LusWell VNDAI I304 - 30 ống: 300L', 'CAT-07', 'BR-05', 'Bộ máy nước nóng NLMT  LusWell VNDAI I304', '30 ống: 300L', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'NLMT', 8, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0006', 'gia_niem_yet', 12100000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0006', 'gia_khach_si', 10454400.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0006', 'gia_thau_tho', 11761200.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0006', 'gia_khach_le', 13068000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0006', 'gia_ban_mau', 8494200.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0007', 'VNVIE', 'Bộ máy nước nóng NLMT  LusWell VNVIE ống trơn - 12 ống: 120L', 'CAT-07', 'BR-05', 'Bộ máy nước nóng NLMT  LusWell VNVIE ống trơn', '12 ống: 120L', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'NLMT', 9, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0007', 'gia_niem_yet', 4280000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0007', 'gia_khach_si', 3605472.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0007', 'gia_thau_tho', 4067712.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0007', 'gia_khach_le', 4529952.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0007', 'gia_ban_mau', 3004560.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0008', 'VNVIE', 'Bộ máy nước nóng NLMT  LusWell VNVIE ống trơn - 14 ống: 140L', 'CAT-07', 'BR-05', 'Bộ máy nước nóng NLMT  LusWell VNVIE ống trơn', '14 ống: 140L', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'NLMT', 10, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0008', 'gia_niem_yet', 4800000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0008', 'gia_khach_si', 4043520.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0008', 'gia_thau_tho', 4561920.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0008', 'gia_khach_le', 5080320.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0008', 'gia_ban_mau', 3369600.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0009', 'VNVIE', 'Bộ máy nước nóng NLMT  LusWell VNVIE ống trơn - 16 ống: 160L', 'CAT-07', 'BR-05', 'Bộ máy nước nóng NLMT  LusWell VNVIE ống trơn', '16 ống: 160L', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'NLMT', 11, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0009', 'gia_niem_yet', 5480000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0009', 'gia_khach_si', 4616352.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0009', 'gia_thau_tho', 5208192.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0009', 'gia_khach_le', 5800032.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0009', 'gia_ban_mau', 3846960.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0010', 'VNVIE', 'Bộ máy nước nóng NLMT  LusWell VNVIE ống trơn - 18 ống: 180L', 'CAT-07', 'BR-05', 'Bộ máy nước nóng NLMT  LusWell VNVIE ống trơn', '18 ống: 180L', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'NLMT', 12, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0010', 'gia_niem_yet', 6170000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0010', 'gia_khach_si', 5197608.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0010', 'gia_thau_tho', 5863968.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0010', 'gia_khach_le', 6530328.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0010', 'gia_ban_mau', 4331340.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0011', 'VNVIE', 'Bộ máy nước nóng NLMT  LusWell VNVIE ống trơn - 20 ống: 200L', 'CAT-07', 'BR-05', 'Bộ máy nước nóng NLMT  LusWell VNVIE ống trơn', '20 ống: 200L', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'NLMT', 13, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0011', 'gia_niem_yet', 6850000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0011', 'gia_khach_si', 5770440.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0011', 'gia_thau_tho', 6510240.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0011', 'gia_khach_le', 7250040.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0011', 'gia_ban_mau', 4808700.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0012', 'VNVIE', 'Bộ máy nước nóng NLMT  LusWell VNVIE ống trơn - 24 ống: 240L', 'CAT-07', 'BR-05', 'Bộ máy nước nóng NLMT  LusWell VNVIE ống trơn', '24 ống: 240L', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'NLMT', 14, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0012', 'gia_niem_yet', 8220000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0012', 'gia_khach_si', 6924528.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0012', 'gia_thau_tho', 7812288.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0012', 'gia_khach_le', 8700048.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0012', 'gia_ban_mau', 5770440.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0013', 'VNVIE', 'Bộ máy nước nóng NLMT  LusWell VNVIE ống trơn - 30 ống: 300L', 'CAT-07', 'BR-05', 'Bộ máy nước nóng NLMT  LusWell VNVIE ống trơn', '30 ống: 300L', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'NLMT', 15, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0013', 'gia_niem_yet', 10270000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0013', 'gia_khach_si', 8651448.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0013', 'gia_thau_tho', 9760608.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0013', 'gia_khach_le', 10869768.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0013', 'gia_ban_mau', 7209540.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0014', 'VNVIE', '1 Bộ bồn nước Luswell VNVIE đứng - 500L - 760mm', 'CAT-01', 'BR-05', '1 Bộ bồn nước Luswell VNVIE đứng', '500L - 760mm', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 3, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0014', 'gia_niem_yet', 2365000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0014', 'gia_khach_si', 2043360.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0014', 'gia_thau_tho', 2298780.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0014', 'gia_khach_le', 2554200.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0014', 'gia_ban_mau', 1660230.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0015', 'VNVIE', '1 Bộ bồn nước Luswell VNVIE đứng - 1000L - 935mm', 'CAT-01', 'BR-05', '1 Bộ bồn nước Luswell VNVIE đứng', '1000L - 935mm', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 4, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0015', 'gia_niem_yet', 3500000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0015', 'gia_khach_si', 3024000.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0015', 'gia_thau_tho', 3402000.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0015', 'gia_khach_le', 3780000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0015', 'gia_ban_mau', 2457000.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0016', 'VNVIE', '1 Bộ bồn nước Luswell VNVIE đứng - 1500L - 1140mm', 'CAT-01', 'BR-05', '1 Bộ bồn nước Luswell VNVIE đứng', '1500L - 1140mm', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 5, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0016', 'gia_niem_yet', 5325000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0016', 'gia_khach_si', 4600800.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0016', 'gia_thau_tho', 5175900.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0016', 'gia_khach_le', 5751000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0016', 'gia_ban_mau', 3738150.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0017', 'VNVIE', '1 Bộ bồn nước Luswell VNVIE đứng - 2000L - 1140 mm', 'CAT-01', 'BR-05', '1 Bộ bồn nước Luswell VNVIE đứng', '2000L - 1140 mm', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 6, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0017', 'gia_niem_yet', 7110000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0017', 'gia_khach_si', 6143040.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0017', 'gia_thau_tho', 6910920.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0017', 'gia_khach_le', 7678800.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0017', 'gia_ban_mau', 4991220.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0018', 'VNVIE', '1 Bộ bồn nước Luswell VNVIE đứng - 3000L - 1380mm', 'CAT-01', 'BR-05', '1 Bộ bồn nước Luswell VNVIE đứng', '3000L - 1380mm', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 7, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0018', 'gia_niem_yet', 10560000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0018', 'gia_khach_si', 9123840.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0018', 'gia_thau_tho', 10264320.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0018', 'gia_khach_le', 11404800.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0018', 'gia_ban_mau', 7413120.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0019', 'VNVIE', '1 Bộ bồn nước Luswell VNVIE đứng - 5000L - 1380mm', 'CAT-01', 'BR-05', '1 Bộ bồn nước Luswell VNVIE đứng', '5000L - 1380mm', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 8, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0019', 'gia_niem_yet', 16200000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0019', 'gia_khach_si', 13996800.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0019', 'gia_thau_tho', 15746400.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0019', 'gia_khach_le', 17496000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0019', 'gia_ban_mau', 11372400.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0020', 'VNVIE', '7 Bộ bồn nước Luswell VNVIE ngang - 500L - 760mm', 'CAT-01', 'BR-05', '7 Bộ bồn nước Luswell VNVIE ngang', '500L - 760mm', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 9, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0020', 'gia_niem_yet', 2645000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0020', 'gia_khach_si', 2285280.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0020', 'gia_thau_tho', 2570940.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0020', 'gia_khach_le', 2856600.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0020', 'gia_ban_mau', 1856790.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0021', 'VNVIE', '7 Bộ bồn nước Luswell VNVIE ngang - 700L - 775mm', 'CAT-01', 'BR-05', '7 Bộ bồn nước Luswell VNVIE ngang', '700L - 775mm', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 10, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0021', 'gia_niem_yet', 3141000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0021', 'gia_khach_si', 2713824.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0021', 'gia_thau_tho', 3053052.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0021', 'gia_khach_le', 3392280.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0021', 'gia_ban_mau', 2204982.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0022', 'VNVIE', '7 Bộ bồn nước Luswell VNVIE ngang - 1000L - 935mm', 'CAT-01', 'BR-05', '7 Bộ bồn nước Luswell VNVIE ngang', '1000L - 935mm', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 11, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0022', 'gia_niem_yet', 3810000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0022', 'gia_khach_si', 3291840.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0022', 'gia_thau_tho', 3703320.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0022', 'gia_khach_le', 4114800.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0022', 'gia_ban_mau', 2674620.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0023', 'VNVIE', '7 Bộ bồn nước Luswell VNVIE ngang - 1500L - 1140mm', 'CAT-01', 'BR-05', '7 Bộ bồn nước Luswell VNVIE ngang', '1500L - 1140mm', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 12, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0023', 'gia_niem_yet', 5755000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0023', 'gia_khach_si', 4972320.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0023', 'gia_thau_tho', 5593860.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0023', 'gia_khach_le', 6215400.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0023', 'gia_ban_mau', 4040010.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0024', 'VNVIE', '7 Bộ bồn nước Luswell VNVIE ngang - 2000L - 1140 mm', 'CAT-01', 'BR-05', '7 Bộ bồn nước Luswell VNVIE ngang', '2000L - 1140 mm', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 13, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0024', 'gia_niem_yet', 7550000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0024', 'gia_khach_si', 6523200.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0024', 'gia_thau_tho', 7338600.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0024', 'gia_khach_le', 8154000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0024', 'gia_ban_mau', 5300100.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0025', 'VNVIE', '7 Bộ bồn nước Luswell VNVIE ngang - 3000L - 1380mm', 'CAT-01', 'BR-05', '7 Bộ bồn nước Luswell VNVIE ngang', '3000L - 1380mm', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 14, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0025', 'gia_niem_yet', 10940000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0025', 'gia_khach_si', 9452160.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0025', 'gia_thau_tho', 10633680.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0025', 'gia_khach_le', 11815200.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0025', 'gia_ban_mau', 7679880.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0026', 'VNVIE', '7 Bộ bồn nước Luswell VNVIE ngang - 5000L - 1380mm', 'CAT-01', 'BR-05', '7 Bộ bồn nước Luswell VNVIE ngang', '5000L - 1380mm', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 15, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0026', 'gia_niem_yet', 16950000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0026', 'gia_khach_si', 14644800.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0026', 'gia_thau_tho', 16475400.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0026', 'gia_khach_le', 18306000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0026', 'gia_ban_mau', 11898900.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0027', 'VNVIE', '1 Bồn nước nhựa  Luswell VNVIE đứng - 500L - 775mm', 'CAT-01', 'BR-05', '1 Bồn nước nhựa  Luswell VNVIE đứng', '500L - 775mm', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 19, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0027', 'gia_niem_yet', 1605000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0027', 'gia_khach_si', 1386720.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0027', 'gia_thau_tho', 1560060.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0027', 'gia_khach_le', 1733400.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0027', 'gia_ban_mau', 1126710.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0028', 'VNVIE', '1 Bồn nước nhựa  Luswell VNVIE đứng - 1000L - 1010mm', 'CAT-01', 'BR-05', '1 Bồn nước nhựa  Luswell VNVIE đứng', '1000L - 1010mm', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 20, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0028', 'gia_niem_yet', 2210000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0028', 'gia_khach_si', 1909440.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0028', 'gia_thau_tho', 2148120.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0028', 'gia_khach_le', 2386800.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0028', 'gia_ban_mau', 1551420.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0029', 'VNVIE', '1 Bồn nước nhựa  Luswell VNVIE đứng - 1500L - 1215mm', 'CAT-01', 'BR-05', '1 Bồn nước nhựa  Luswell VNVIE đứng', '1500L - 1215mm', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 21, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0029', 'gia_niem_yet', 3255000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0029', 'gia_khach_si', 2812320.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0029', 'gia_thau_tho', 3163860.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0029', 'gia_khach_le', 3515400.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0029', 'gia_ban_mau', 2285010.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0030', 'VNVIE', '1 Bồn nước nhựa  Luswell VNVIE đứng - 2000L - 1310 mm', 'CAT-01', 'BR-05', '1 Bồn nước nhựa  Luswell VNVIE đứng', '2000L - 1310 mm', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 22, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0030', 'gia_niem_yet', 4330000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0030', 'gia_khach_si', 3741120.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0030', 'gia_thau_tho', 4208760.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0030', 'gia_khach_le', 4676400.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0030', 'gia_ban_mau', 3039660.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0031', 'VNVIE', '1 Bồn nước nhựa  Luswell VNVIE đứng - 3000L - 1490mm', 'CAT-01', 'BR-05', '1 Bồn nước nhựa  Luswell VNVIE đứng', '3000L - 1490mm', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 23, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0031', 'gia_niem_yet', 6410000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0031', 'gia_khach_si', 5538240.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0031', 'gia_thau_tho', 6230520.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0031', 'gia_khach_le', 6922800.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0031', 'gia_ban_mau', 4499820.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0032', 'VNVIE', '1 Bồn nước nhựa  Luswell VNVIE đứng - 5000L - 1750mm', 'CAT-01', 'BR-05', '1 Bồn nước nhựa  Luswell VNVIE đứng', '5000L - 1750mm', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 24, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0032', 'gia_niem_yet', 11890000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0032', 'gia_khach_si', 10272960.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0032', 'gia_thau_tho', 11557080.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0032', 'gia_khach_le', 12841200.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0032', 'gia_ban_mau', 8346780.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0033', 'VNVIE', '7 Bồn nước nhựa  Luswell VNVIE ngang - 500L - 780mm', 'CAT-01', 'BR-05', '7 Bồn nước nhựa  Luswell VNVIE ngang', '500L - 780mm', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 25, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0033', 'gia_niem_yet', 1945000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0033', 'gia_khach_si', 1680480.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0033', 'gia_thau_tho', 1890540.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0033', 'gia_khach_le', 2100600.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0033', 'gia_ban_mau', 1365390.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0034', 'VNVIE', '7 Bồn nước nhựa  Luswell VNVIE ngang - 1000L - 960mm', 'CAT-01', 'BR-05', '7 Bồn nước nhựa  Luswell VNVIE ngang', '1000L - 960mm', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 26, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0034', 'gia_niem_yet', 3200000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0034', 'gia_khach_si', 2764800.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0034', 'gia_thau_tho', 3110400.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0034', 'gia_khach_le', 3456000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0034', 'gia_ban_mau', 2246400.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0035', 'VNDAI', '1      Bồn nước inox  Luswell VNDAI đứng - 500L - 775mm', 'CAT-01', 'BR-05', '1      Bồn nước inox  Luswell VNDAI đứng', '500L - 775mm', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 30, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0035', 'gia_niem_yet', 2400000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0035', 'gia_khach_si', 2073600.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0035', 'gia_thau_tho', 2332800.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0035', 'gia_khach_le', 2592000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0035', 'gia_ban_mau', 1684800.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0036', 'VNDAI', '1      Bồn nước inox  Luswell VNDAI đứng - 700L - 775mm', 'CAT-01', 'BR-05', '1      Bồn nước inox  Luswell VNDAI đứng', '700L - 775mm', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 31, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0036', 'gia_niem_yet', 2800000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0036', 'gia_khach_si', 2419200.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0036', 'gia_thau_tho', 2721600.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0036', 'gia_khach_le', 3024000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0036', 'gia_ban_mau', 1965600.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0037', 'VNDAI', '1      Bồn nước inox  Luswell VNDAI đứng - 1000L - 940mm', 'CAT-01', 'BR-05', '1      Bồn nước inox  Luswell VNDAI đứng', '1000L - 940mm', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 32, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0037', 'gia_niem_yet', 3580000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0037', 'gia_khach_si', 3093120.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0037', 'gia_thau_tho', 3479760.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0037', 'gia_khach_le', 3866400.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0037', 'gia_ban_mau', 2513160.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0038', 'VNDAI', '1      Bồn nước inox  Luswell VNDAI đứng - 1500L - 1160mm', 'CAT-01', 'BR-05', '1      Bồn nước inox  Luswell VNDAI đứng', '1500L - 1160mm', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 33, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0038', 'gia_niem_yet', 5380000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0038', 'gia_khach_si', 4648320.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0038', 'gia_thau_tho', 5229360.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0038', 'gia_khach_le', 5810400.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0038', 'gia_ban_mau', 3776760.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0039', 'VNDAI', '1      Bồn nước inox  Luswell VNDAI đứng - 2000L - 1160 mm', 'CAT-01', 'BR-05', '1      Bồn nước inox  Luswell VNDAI đứng', '2000L - 1160 mm', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 34, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0039', 'gia_niem_yet', 7180000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0039', 'gia_khach_si', 6203520.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0039', 'gia_thau_tho', 6978960.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0039', 'gia_khach_le', 7754400.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0039', 'gia_ban_mau', 5040360.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0040', 'VNDAI', '1      Bồn nước inox  Luswell VNDAI đứng - 3000L - 1170mm', 'CAT-01', 'BR-05', '1      Bồn nước inox  Luswell VNDAI đứng', '3000L - 1170mm', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 35, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0040', 'gia_niem_yet', 11670000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0040', 'gia_khach_si', 10082880.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0040', 'gia_thau_tho', 11343240.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0040', 'gia_khach_le', 12603600.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0040', 'gia_ban_mau', 8192340.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0041', 'VNDAI', '1      Bồn nước inox  Luswell VNDAI đứng - 5000L - 1400mm', 'CAT-01', 'BR-05', '1      Bồn nước inox  Luswell VNDAI đứng', '5000L - 1400mm', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 36, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0041', 'gia_niem_yet', 19250000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0041', 'gia_khach_si', 16632000.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0041', 'gia_thau_tho', 18711000.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0041', 'gia_khach_le', 20790000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0041', 'gia_ban_mau', 13513500.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0042', 'VNDAI', '1      Bồn nước inox  Luswell VNDAI ngang - 500L - 775mm', 'CAT-01', 'BR-05', '1      Bồn nước inox  Luswell VNDAI ngang', '500L - 775mm', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 37, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0042', 'gia_niem_yet', 2670000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0042', 'gia_khach_si', 2306880.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0042', 'gia_thau_tho', 2595240.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0042', 'gia_khach_le', 2883600.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0042', 'gia_ban_mau', 1874340.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0043', 'VNDAI', '1      Bồn nước inox  Luswell VNDAI ngang - 700L - 775mm', 'CAT-01', 'BR-05', '1      Bồn nước inox  Luswell VNDAI ngang', '700L - 775mm', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 38, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0043', 'gia_niem_yet', 3050000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0043', 'gia_khach_si', 2635200.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0043', 'gia_thau_tho', 2964600.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0043', 'gia_khach_le', 3294000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0043', 'gia_ban_mau', 2141100.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0044', 'VNDAI', '1      Bồn nước inox  Luswell VNDAI ngang - 1000L - 940mm', 'CAT-01', 'BR-05', '1      Bồn nước inox  Luswell VNDAI ngang', '1000L - 940mm', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 39, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0044', 'gia_niem_yet', 3860000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0044', 'gia_khach_si', 3335040.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0044', 'gia_thau_tho', 3751920.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0044', 'gia_khach_le', 4168800.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0044', 'gia_ban_mau', 2709720.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0045', 'VNDAI', '1      Bồn nước inox  Luswell VNDAI ngang - 1500L - 1160mm', 'CAT-01', 'BR-05', '1      Bồn nước inox  Luswell VNDAI ngang', '1500L - 1160mm', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 40, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0045', 'gia_niem_yet', 5750000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0045', 'gia_khach_si', 4968000.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0045', 'gia_thau_tho', 5589000.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0045', 'gia_khach_le', 6210000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0045', 'gia_ban_mau', 4036500.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0046', 'VNDAI', '1      Bồn nước inox  Luswell VNDAI ngang - 2000L - 1160 mm', 'CAT-01', 'BR-05', '1      Bồn nước inox  Luswell VNDAI ngang', '2000L - 1160 mm', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 41, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0046', 'gia_niem_yet', 7610000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0046', 'gia_khach_si', 6575040.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0046', 'gia_thau_tho', 7396920.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0046', 'gia_khach_le', 8218800.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0046', 'gia_ban_mau', 5342220.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0047', 'VNDAI', '1      Bồn nước inox  Luswell VNDAI ngang - 3000L - 1170mm', 'CAT-01', 'BR-05', '1      Bồn nước inox  Luswell VNDAI ngang', '3000L - 1170mm', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 42, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0047', 'gia_niem_yet', 12040000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0047', 'gia_khach_si', 10402560.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0047', 'gia_thau_tho', 11702880.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0047', 'gia_khach_le', 13003200.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0047', 'gia_ban_mau', 8452080.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0048', 'VNDAI', '1      Bồn nước inox  Luswell VNDAI ngang - 5000L - 1400mm', 'CAT-01', 'BR-05', '1      Bồn nước inox  Luswell VNDAI ngang', '5000L - 1400mm', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 43, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0048', 'gia_niem_yet', 20000000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0048', 'gia_khach_si', 17280000.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0048', 'gia_thau_tho', 19440000.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0048', 'gia_khach_le', 21600000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0048', 'gia_ban_mau', 14040000.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0049', 'VNVIE', '1 Bồn tự hoại Septic LUSWELL MAX VNVIE đứng: 1000L', 'CAT-01', 'BR-05', '1 Bồn tự hoại Septic LUSWELL MAX VNVIE đứng: 1000L', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 47, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0049', 'gia_niem_yet', 3500000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0049', 'gia_khach_si', 3024000.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0049', 'gia_thau_tho', 3402000.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0049', 'gia_khach_le', 3780000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0049', 'gia_ban_mau', 2457000.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0050', 'VNVIE', '2 Bồn tự hoại Septic LUSWELL MAX VNVIE đứng: 1600L', 'CAT-01', 'BR-05', '2 Bồn tự hoại Septic LUSWELL MAX VNVIE đứng: 1600L', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 48, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0050', 'gia_niem_yet', 4660000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0050', 'gia_khach_si', 4026260.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0050', 'gia_thau_tho', 4529520.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0050', 'gia_khach_le', 5032800.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0050', 'gia_ban_mau', 3271320.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0051', 'VNVIE', '3 Bồn tự hoại Septic LUSWELL MAX VNVIE đứng: 2200L', 'CAT-01', 'BR-05', '3 Bồn tự hoại Septic LUSWELL MAX VNVIE đứng: 2200L', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỒN', 49, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0051', 'gia_niem_yet', 6870000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0051', 'gia_khach_si', 5935680.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0051', 'gia_thau_tho', 6677640.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0051', 'gia_khach_le', 7419600.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0051', 'gia_ban_mau', 4822740.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0052', 'VNVIE', 'Bồn tự hoại Septic LUSWELL MAX VNVIE đứng: 1000L', 'CAT-02', 'BR-05', 'Bồn tự hoại', 'Bồn tự hoại Septic LUSWELL MAX VNVIE đứng: 1000L', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỂ PHỐT - van đồng', 3, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0052', 'gia_niem_yet', 3500000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0052', 'gia_khach_si', 3024000.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0052', 'gia_thau_tho', 3402000.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0052', 'gia_khach_le', 3780000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0052', 'gia_ban_mau', 2457000.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0053', 'VNVIE', 'Bồn tự hoại Septic LUSWELL MAX VNVIE đứng: 1600L', 'CAT-02', 'BR-05', 'Bồn tự hoại', 'Bồn tự hoại Septic LUSWELL MAX VNVIE đứng: 1600L', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỂ PHỐT - van đồng', 4, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0053', 'gia_niem_yet', 4660000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0053', 'gia_khach_si', 4026240.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0053', 'gia_thau_tho', 4529520.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0053', 'gia_khach_le', 5032800.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0053', 'gia_ban_mau', 3271320.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0054', 'VNVIE', 'Bồn tự hoại Septic LUSWELL MAX VNVIE đứng: 2200L', 'CAT-02', 'BR-05', 'Bồn tự hoại', 'Bồn tự hoại Septic LUSWELL MAX VNVIE đứng: 2200L', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỂ PHỐT - van đồng', 5, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0054', 'gia_niem_yet', 6870000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0054', 'gia_khach_si', 5935680.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0054', 'gia_thau_tho', 6677640.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0054', 'gia_khach_le', 7419600.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0054', 'gia_ban_mau', 4822740.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0055', 'CNTIA', 'Van bi đồng tay gạt DN15 PN16 CNTIA PUWA', 'CAT-15', 'BR-06', 'Van vòi đồng', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỂ PHỐT - van đồng', 9, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0055', 'gia_niem_yet', 80400.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0055', 'gia_khach_si', 70768.08, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0055', 'gia_thau_tho', 79451.28, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0055', 'gia_khach_le', 88134.48, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0056', 'CNTIA', 'Van bi đồng tay gạt DN20 PN16 CNTIA PUWA', 'CAT-15', 'BR-06', 'Van vòi đồng', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỂ PHỐT - van đồng', 10, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0056', 'gia_niem_yet', 118700.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0056', 'gia_khach_si', 104479.74, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0056', 'gia_thau_tho', 117299.34, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0056', 'gia_khach_le', 130118.94, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0057', 'CNTIA', 'Van cổng đồng DN15 PN16 CNTIA PUWA', 'CAT-15', 'BR-06', 'Van vòi đồng', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỂ PHỐT - van đồng', 11, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0057', 'gia_niem_yet', 103300.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0057', 'gia_khach_si', 90924.66, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0057', 'gia_thau_tho', 102081.06, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0057', 'gia_khach_le', 113237.46, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0058', 'CNTIA', 'Van một chiều lá lật đồng DN20 PN16 CNTIA PUWA', 'CAT-15', 'BR-06', 'Van vòi đồng', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỂ PHỐT - van đồng', 12, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0058', 'gia_niem_yet', 87600.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0058', 'gia_khach_si', 77105.52, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0058', 'gia_thau_tho', 86566.32, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0058', 'gia_khach_le', 96027.12, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0059', 'CNTIA', 'Van một chiều lá lật đồng DN25 PN16 CNTIA PUWA', 'CAT-15', 'BR-06', 'Van vòi đồng', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỂ PHỐT - van đồng', 13, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0059', 'gia_niem_yet', 132000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0059', 'gia_khach_si', 116186.4, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0059', 'gia_thau_tho', 130442.4, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0059', 'gia_khach_le', 144698.4, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0060', 'CNTIA', 'Vòi đồng tay nhôm đầu nối thông minh DN15 PN10 CNTIA PUWA', 'CAT-15', 'BR-06', 'Van vòi đồng', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỂ PHỐT - van đồng', 14, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0060', 'gia_niem_yet', 72500.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0060', 'gia_khach_si', 63814.5, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0060', 'gia_thau_tho', 71644.5, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0060', 'gia_khach_le', 79474.5, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0061', 'CNTIA', 'Vòi đồng tay nhôm đầu nối thông minh DN20 PN10 CNTIA PUWA', 'CAT-15', 'BR-06', 'Van vòi đồng', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỂ PHỐT - van đồng', 15, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0061', 'gia_niem_yet', 79200.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0061', 'gia_khach_si', 69711.84, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0061', 'gia_thau_tho', 78265.44, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0061', 'gia_khach_le', 86819.04, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0062', 'CNTIA', 'Vòi đồng tay thép đầu nối thường DN15 PN16 CNTIA PUWA', 'CAT-15', 'BR-06', 'Van vòi đồng', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỂ PHỐT - van đồng', 16, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0062', 'gia_niem_yet', 79700.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0062', 'gia_khach_si', 70151.94, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0062', 'gia_thau_tho', 78759.54, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0062', 'gia_khach_le', 87367.14, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0063', 'CNTIA', 'Vòi đồng tay nhôm đầu nối thông minh DN15 PN16 CNTIA PUWA', 'CAT-15', 'BR-06', 'Van vòi đồng', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỂ PHỐT - van đồng', 17, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0063', 'gia_niem_yet', 79700.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0063', 'gia_khach_si', 70151.94, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0063', 'gia_thau_tho', 78759.54, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0063', 'gia_khach_le', 87367.14, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0064', 'CNTIA', 'Vòi đồng tay thép đầu nối thường DN20 PN16 CNTIA PUWA', 'CAT-15', 'BR-06', 'Van vòi đồng', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỂ PHỐT - van đồng', 18, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0064', 'gia_niem_yet', 90400.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0064', 'gia_khach_si', 79570.08, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0064', 'gia_thau_tho', 89333.28, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0064', 'gia_khach_le', 99096.48, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0065', 'CNTIA', 'Vòi đồng tay nhôm đầu nối thông minh DN20 PN16 CNTIA PUWA', 'CAT-15', 'BR-06', 'Van vòi đồng', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'BỂ PHỐT - van đồng', 19, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0065', 'gia_niem_yet', 90400.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0065', 'gia_khach_si', 79570.08, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0065', 'gia_thau_tho', 89333.28, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0065', 'gia_khach_le', 99096.48, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0066', 'VNSHE', 'Vít bắn tôn - Vít LUSWELL MAX VNSHE: 45mm', 'CAT-16', 'BR-05', 'Vít bắn tôn', 'Vít LUSWELL MAX VNSHE: 45mm', 'Con', '600 Con/Hộp, 4 Hộp/Thùng', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'VÍT', 3, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0066', 'gia_niem_yet', 1800.0, 'chua_vat', 'Giá NY /con (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0066', 'gia_khach_si', 1555.2, 'co_vat', 'Giá sỉ /con (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0066', 'gia_niem_yet', 933120.0, 'co_vat', 'Giá sỉ /hộp (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0066', 'gia_thau_tho', 1749.6, 'co_vat', 'Giá thầu thợ /con (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0066', 'gia_niem_yet', 1049760.0, 'co_vat', 'Giá thầu thợ /hộp (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0066', 'gia_khach_le', 1944.0, 'co_vat', 'Giá lẻ /con (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0066', 'gia_niem_yet', 1166400.0, 'co_vat', 'Giá lẻ /hộp (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0066', 'gia_ban_mau', 1263.6, 'co_vat', 'Giá mẫu /con (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0066', 'gia_niem_yet', 758160.0, 'co_vat', 'Giá mẫu /hộp (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0067', 'VNSHE', 'Vít bắn tôn - Vít LUSWELL MAX VNSHE: 50mm', 'CAT-16', 'BR-05', 'Vít bắn tôn', 'Vít LUSWELL MAX VNSHE: 50mm', 'Con', '600 Con/Hộp, 4 Hộp/Thùng', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'VÍT', 4, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0067', 'gia_niem_yet', 1900.0, 'chua_vat', 'Giá NY /con (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0067', 'gia_khach_si', 1641.6, 'co_vat', 'Giá sỉ /con (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0067', 'gia_niem_yet', 984960.0, 'co_vat', 'Giá sỉ /hộp (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0067', 'gia_thau_tho', 1846.8, 'co_vat', 'Giá thầu thợ /con (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0067', 'gia_niem_yet', 1108080.0, 'co_vat', 'Giá thầu thợ /hộp (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0067', 'gia_khach_le', 2052.0, 'co_vat', 'Giá lẻ /con (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0067', 'gia_niem_yet', 1231200.0, 'co_vat', 'Giá lẻ /hộp (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0067', 'gia_ban_mau', 1333.8, 'co_vat', 'Giá mẫu /con (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0067', 'gia_niem_yet', 800280.0, 'co_vat', 'Giá mẫu /hộp (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0068', 'VNSHE', 'Vít bắn tôn - Vít LUSWELL MAX VNSHE: 68mm (2000H) 100 con', 'CAT-16', 'BR-05', 'Vít bắn tôn', 'Vít LUSWELL MAX VNSHE: 68mm (2000H) 100 con', 'Con', '600 Con/Hộp, 4 Hộp/Thùng', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'VÍT', 5, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0068', 'gia_niem_yet', 2300.0, 'chua_vat', 'Giá NY /con (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0068', 'gia_khach_si', 1987.2, 'co_vat', 'Giá sỉ /con (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0068', 'gia_niem_yet', 1192320.0, 'co_vat', 'Giá sỉ /hộp (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0068', 'gia_thau_tho', 2235.6, 'co_vat', 'Giá thầu thợ /con (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0068', 'gia_niem_yet', 1341360.0, 'co_vat', 'Giá thầu thợ /hộp (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0068', 'gia_khach_le', 2484.0, 'co_vat', 'Giá lẻ /con (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0068', 'gia_niem_yet', 1490400.0, 'co_vat', 'Giá lẻ /hộp (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0068', 'gia_ban_mau', 1614.6, 'co_vat', 'Giá mẫu /con (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0068', 'gia_niem_yet', 968760.0, 'co_vat', 'Giá mẫu /hộp (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0069', 'CNHEB', 'Vít bắn tôn - Vít LUSWELL CNHEB: 45mm', 'CAT-16', 'BR-05', 'Vít bắn tôn', 'Vít LUSWELL CNHEB: 45mm', 'Con', '100 Con/Hộp, 35 Hộp/Thùng', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'VÍT', 6, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0069', 'gia_niem_yet', 1150.0, 'chua_vat', 'Giá NY /con (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0069', 'gia_khach_si', 993.6, 'co_vat', 'Giá sỉ /con (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0069', 'gia_niem_yet', 99360.0, 'co_vat', 'Giá sỉ /hộp (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0069', 'gia_thau_tho', 1117.8, 'co_vat', 'Giá thầu thợ /con (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0069', 'gia_niem_yet', 111780.0, 'co_vat', 'Giá thầu thợ /hộp (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0069', 'gia_khach_le', 1242.0, 'co_vat', 'Giá lẻ /con (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0069', 'gia_niem_yet', 124200.0, 'co_vat', 'Giá lẻ /hộp (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0069', 'gia_ban_mau', 807.3, 'co_vat', 'Giá mẫu /con (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0069', 'gia_niem_yet', 80730.0, 'co_vat', 'Giá mẫu /hộp (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0070', 'CNHEB', 'Vít bắn tôn - Vít LUSWELL CNHEB: 50mm', 'CAT-16', 'BR-05', 'Vít bắn tôn', 'Vít LUSWELL CNHEB: 50mm', 'Con', '100 Con/Hộp, 30 Hộp/Thùng', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'VÍT', 7, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0070', 'gia_niem_yet', 1250.0, 'chua_vat', 'Giá NY /con (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0070', 'gia_khach_si', 1080.0, 'co_vat', 'Giá sỉ /con (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0070', 'gia_niem_yet', 108000.0, 'co_vat', 'Giá sỉ /hộp (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0070', 'gia_thau_tho', 1215.0, 'co_vat', 'Giá thầu thợ /con (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0070', 'gia_niem_yet', 121500.0, 'co_vat', 'Giá thầu thợ /hộp (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0070', 'gia_khach_le', 1350.0, 'co_vat', 'Giá lẻ /con (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0070', 'gia_niem_yet', 135000.0, 'co_vat', 'Giá lẻ /hộp (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0070', 'gia_ban_mau', 877.5, 'co_vat', 'Giá mẫu /con (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0070', 'gia_niem_yet', 87750.0, 'co_vat', 'Giá mẫu /hộp (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0071', 'CNHEB', 'Vít bắn tôn - Vít LUSWELL CNHEB: 68mm (1000H)', 'CAT-16', 'BR-05', 'Vít bắn tôn', 'Vít LUSWELL CNHEB: 68mm (1000H)', 'Con', '80 Con/Hộp, 24 Hộp/Thùng', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'VÍT', 8, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0071', 'gia_niem_yet', 1450.0, 'chua_vat', 'Giá NY /con (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0071', 'gia_khach_si', 1252.8, 'co_vat', 'Giá sỉ /con (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0071', 'gia_niem_yet', 100224.0, 'co_vat', 'Giá sỉ /hộp (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0071', 'gia_thau_tho', 1409.4, 'co_vat', 'Giá thầu thợ /con (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0071', 'gia_niem_yet', 112752.0, 'co_vat', 'Giá thầu thợ /hộp (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0071', 'gia_khach_le', 1566.0, 'co_vat', 'Giá lẻ /con (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0071', 'gia_niem_yet', 125280.0, 'co_vat', 'Giá lẻ /hộp (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0071', 'gia_ban_mau', 1017.9, 'co_vat', 'Giá mẫu /con (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0071', 'gia_niem_yet', 81432.0, 'co_vat', 'Giá mẫu /hộp (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0072', 'CNHEB', 'Vít bắn ngói - Vít ngói LusWell CNHEB: 65mm', 'CAT-16', 'BR-05', 'Vít bắn ngói', 'Vít ngói LusWell CNHEB: 65mm', 'Con', '200 Con/Hộp, 36 Hộp/Thùng', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'VÍT', 9, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0072', 'gia_niem_yet', 460.0, 'chua_vat', 'Giá NY /con (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0072', 'gia_khach_si', 397.44, 'co_vat', 'Giá sỉ /con (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0072', 'gia_niem_yet', 79488.0, 'co_vat', 'Giá sỉ /hộp (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0072', 'gia_thau_tho', 447.12, 'co_vat', 'Giá thầu thợ /con (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0072', 'gia_niem_yet', 89424.0, 'co_vat', 'Giá thầu thợ /hộp (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0072', 'gia_khach_le', 496.8, 'co_vat', 'Giá lẻ /con (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0072', 'gia_niem_yet', 99360.0, 'co_vat', 'Giá lẻ /hộp (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0072', 'gia_ban_mau', 322.92, 'co_vat', 'Giá mẫu /con (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0072', 'gia_niem_yet', 64584.0, 'co_vat', 'Giá mẫu /hộp (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0073', 'CNHEB', 'Vít bắn TXM - Vít bắn tấm xi măng LUSWELL CNHEB: 30mm', 'CAT-16', 'BR-05', 'Vít bắn TXM', 'Vít bắn tấm xi măng LUSWELL CNHEB: 30mm', 'Con', '300 Con/Hộp, 70 Hộp/Thùng', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'VÍT', 10, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0073', 'gia_niem_yet', 260.0, 'chua_vat', 'Giá NY /con (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0073', 'gia_khach_si', 224.64, 'co_vat', 'Giá sỉ /con (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0073', 'gia_niem_yet', 67392.0, 'co_vat', 'Giá sỉ /hộp (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0073', 'gia_thau_tho', 252.72, 'co_vat', 'Giá thầu thợ /con (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0073', 'gia_niem_yet', 75816.0, 'co_vat', 'Giá thầu thợ /hộp (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0073', 'gia_khach_le', 280.8, 'co_vat', 'Giá lẻ /con (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0073', 'gia_niem_yet', 84240.0, 'co_vat', 'Giá lẻ /hộp (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0073', 'gia_ban_mau', 182.52, 'co_vat', 'Giá mẫu /con (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0073', 'gia_niem_yet', 54756.0, 'co_vat', 'Giá mẫu /hộp (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0074', 'CNHEB', 'Vít bắn TXM - Vít bắn tấm xi măng LUSWELL CNHEB: 40mm', 'CAT-16', 'BR-05', 'Vít bắn TXM', 'Vít bắn tấm xi măng LUSWELL CNHEB: 40mm', 'Con', '300 Con/Hộp, 40 Hộp/Thùng', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'VÍT', 11, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0074', 'gia_niem_yet', 310.0, 'chua_vat', 'Giá NY /con (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0074', 'gia_khach_si', 267.84, 'co_vat', 'Giá sỉ /con (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0074', 'gia_niem_yet', 80352.0, 'co_vat', 'Giá sỉ /hộp (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0074', 'gia_thau_tho', 301.32, 'co_vat', 'Giá thầu thợ /con (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0074', 'gia_niem_yet', 90396.0, 'co_vat', 'Giá thầu thợ /hộp (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0074', 'gia_khach_le', 334.8, 'co_vat', 'Giá lẻ /con (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0074', 'gia_niem_yet', 100440.0, 'co_vat', 'Giá lẻ /hộp (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0074', 'gia_ban_mau', 217.62, 'co_vat', 'Giá mẫu /con (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0074', 'gia_niem_yet', 65286.0, 'co_vat', 'Giá mẫu /hộp (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0075', 'CNSYI', 'Keo silicone Acid màu trắng LUSCOAT CNSYI: 0.3L', 'CAT-05', 'BR-02', 'AXIT A300', 'Dung tích: 0,3L', 'CHAI', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SILICON', 3, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0075', 'gia_niem_yet', 50500.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0075', 'gia_khach_si', 43632.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0075', 'gia_thau_tho', 49086.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0075', 'gia_khach_le', 54540.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0075', 'gia_ban_mau', 35451.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0076', 'CNSYI', 'Keo silicone Acid màu trắng trong LUSCOAT CNSYI: 0.3L', 'CAT-05', 'BR-02', 'AXIT A300', 'Dung tích: 0,3L', 'CHAI', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SILICON', 4, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0076', 'gia_niem_yet', 50500.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0076', 'gia_khach_si', 43632.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0076', 'gia_thau_tho', 49086.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0076', 'gia_khach_le', 54540.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0076', 'gia_ban_mau', 35451.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0077', 'CNSYI', 'Keo silicone Acid màu đen LUSCOAT CNSYI: 0.3L', 'CAT-05', 'BR-02', 'AXIT A300', 'Dung tích: 0,3L', 'CHAI', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SILICON', 5, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0077', 'gia_niem_yet', 50500.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0077', 'gia_khach_si', 43632.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0077', 'gia_thau_tho', 49086.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0077', 'gia_khach_le', 54540.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0077', 'gia_ban_mau', 35451.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0078', 'CNSYI', 'Keo silicone Acid màu xám xingfa LUSCOAT CNSYI: 0.3L', 'CAT-05', 'BR-02', 'AXIT A300', 'Dung tích: 0,3L', 'CHAI', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SILICON', 6, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0078', 'gia_niem_yet', 50500.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0078', 'gia_khach_si', 43632.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0078', 'gia_thau_tho', 49086.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0078', 'gia_khach_le', 54540.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0078', 'gia_ban_mau', 35451.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0079', 'CNSYI', 'Keo silicone Oxime màu trắng LUSCOAT CNSYI: 0.3L', 'CAT-05', 'BR-02', 'TRUNG TÍNH A500', 'Dung tích: 0,3L', 'CHAI', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SILICON', 7, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0079', 'gia_niem_yet', 47500.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0079', 'gia_khach_si', 41040.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0079', 'gia_thau_tho', 46170.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0079', 'gia_khach_le', 51300.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0079', 'gia_ban_mau', 33345.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0080', 'CNSYI', 'Keo silicone Oxime màu trắng trong LUSCOAT CNSYI: 0.3L', 'CAT-05', 'BR-02', 'TRUNG TÍNH A500', 'Dung tích: 0,3L', 'CHAI', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SILICON', 8, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0080', 'gia_niem_yet', 47500.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0080', 'gia_khach_si', 41040.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0080', 'gia_thau_tho', 46170.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0080', 'gia_khach_le', 51300.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0080', 'gia_ban_mau', 33345.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0081', 'CNSYI', 'Keo silicone Oxime màu đen LUSCOAT CNSYI: 0.3L', 'CAT-05', 'BR-02', 'TRUNG TÍNH A500', 'Dung tích: 0,3L', 'CHAI', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SILICON', 9, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0081', 'gia_niem_yet', 47500.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0081', 'gia_khach_si', 41040.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0081', 'gia_thau_tho', 46170.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0081', 'gia_khach_le', 51300.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0081', 'gia_ban_mau', 33345.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0082', 'CNSYI', 'Keo silicone Oxime màu xám xingfa LUSCOAT CNSYI: 0.3L', 'CAT-05', 'BR-02', 'TRUNG TÍNH A500', 'Dung tích: 0,3L', 'CHAI', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SILICON', 10, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0082', 'gia_niem_yet', 47500.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0082', 'gia_khach_si', 41040.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0082', 'gia_thau_tho', 46170.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0082', 'gia_khach_le', 51300.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0082', 'gia_ban_mau', 33345.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0083', 'VNRON', 'Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu thường (bao gồm màu nhũ trắng/ nhũ bạc) - 0.75ML', 'CAT-08', 'BR-02', 'Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu thường (bao gồm màu nhũ trắng/ nhũ bạc)', 'Dung tích: 0.75ML', 'Lon', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SKL', 3, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0083', 'gia_niem_yet', 110000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0083', 'gia_khach_si', 95040.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0083', 'gia_thau_tho', 106920.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0083', 'gia_khach_le', 118800.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0083', 'gia_ban_mau', 77220.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0084', 'VNRON', 'Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu thường (bao gồm màu nhũ trắng/ nhũ bạc) - 2,6L', 'CAT-08', 'BR-02', 'Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu thường (bao gồm màu nhũ trắng/ nhũ bạc)', 'Dung tích: 2,6L', 'Lon', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SKL', 4, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0084', 'gia_niem_yet', 381000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0084', 'gia_khach_si', 329184.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0084', 'gia_thau_tho', 370332.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0084', 'gia_khach_le', 411480.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0084', 'gia_ban_mau', 267462.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0085', 'VNRON', 'Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu thường (bao gồm màu nhũ trắng/ nhũ bạc) - 17L', 'CAT-08', 'BR-02', 'Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu thường (bao gồm màu nhũ trắng/ nhũ bạc)', 'Dung tích: 17L', 'Thùng', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SKL', 5, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0085', 'gia_niem_yet', 2347000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0085', 'gia_khach_si', 2027808.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0085', 'gia_thau_tho', 2281284.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0085', 'gia_khach_le', 2534760.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0085', 'gia_ban_mau', 1647594.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0086', 'VNRON', 'Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu nhũ BẠC - 0.75ML', 'CAT-08', 'BR-02', 'Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu nhũ BẠC', 'Dung tích: 0.75ML', 'Lon', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SKL', 6, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0086', 'gia_niem_yet', 129000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0086', 'gia_khach_si', 111456.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0086', 'gia_thau_tho', 125388.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0086', 'gia_khach_le', 139320.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0086', 'gia_ban_mau', 90558.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0087', 'VNRON', 'Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu nhũ BẠC - 2,6L', 'CAT-08', 'BR-02', 'Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu nhũ BẠC', 'Dung tích: 2,6L', 'Long', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SKL', 7, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0087', 'gia_niem_yet', 445000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0087', 'gia_khach_si', 384480.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0087', 'gia_thau_tho', 432540.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0087', 'gia_khach_le', 480600.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0087', 'gia_ban_mau', 312390.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0088', 'VNRON', 'Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu nhũ BẠC - 17L', 'CAT-08', 'BR-02', 'Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu nhũ BẠC', 'Dung tích: 17L', 'Thùng', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SKL', 8, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0088', 'gia_niem_yet', 2735000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0088', 'gia_khach_si', 2363040.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0088', 'gia_thau_tho', 2658420.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0088', 'gia_khach_le', 2953800.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0088', 'gia_ban_mau', 1919970.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0089', 'VNRON', 'Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu nhũ VÀNG - 0.75ML', 'CAT-08', 'BR-02', 'Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu nhũ VÀNG', 'Dung tích: 0.75ML', 'Lon', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SKL', 9, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0089', 'gia_niem_yet', 166000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0089', 'gia_khach_si', 143424.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0089', 'gia_thau_tho', 161352.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0089', 'gia_khach_le', 179280.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0089', 'gia_ban_mau', 116532.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0090', 'VNRON', 'Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu nhũ VÀNG - 2,6L', 'CAT-08', 'BR-02', 'Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu nhũ VÀNG', 'Dung tích: 2,6L', 'Long', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SKL', 10, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0090', 'gia_niem_yet', 564000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0090', 'gia_khach_si', 487296.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0090', 'gia_thau_tho', 548208.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0090', 'gia_khach_le', 609120.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0090', 'gia_ban_mau', 395928.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0091', 'VNRON', 'Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu nhũ VÀNG - 17L', 'CAT-08', 'BR-02', 'Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu nhũ VÀNG', 'Dung tích: 17L', 'Thùng', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SKL', 11, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0091', 'gia_niem_yet', 3477000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0091', 'gia_khach_si', 3004128.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0091', 'gia_thau_tho', 3379644.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0091', 'gia_khach_le', 3755160.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0091', 'gia_ban_mau', 2440854.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0092', 'CNAER', 'Sơn xịt Acrylic màu đen 39 LUSCOAT CNAER: 0.4L', 'CAT-09', 'BR-02', 'SƠN XỊT ACRYLIC LUSCOAT CNAER HỆ MÀU THƯỜNG (không bao gồm màu bạc)', 'Dung tích: 0.4L', 'Chai', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'Sơn xịt', 3, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0092', 'gia_niem_yet', 32000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0092', 'gia_khach_si', 27648.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0092', 'gia_thau_tho', 31104.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0092', 'gia_khach_le', 34560.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0092', 'gia_ban_mau', 22464.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0093', 'CNAER', 'Sơn xịt Acrylic màu đỏ 26 LUSCOAT CNAER: 0.4L', 'CAT-09', 'BR-02', 'SƠN XỊT ACRYLIC LUSCOAT CNAER HỆ MÀU THƯỜNG (không bao gồm màu bạc)', 'Dung tích: 0.4L', 'Chai', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'Sơn xịt', 4, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0093', 'gia_niem_yet', 32000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0093', 'gia_khach_si', 27648.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0093', 'gia_thau_tho', 31104.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0093', 'gia_khach_le', 34560.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0093', 'gia_ban_mau', 22464.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0094', 'CNAER', 'Sơn xịt Acrylic màu trắng 40 LUSCOAT CNAER: 0.4L', 'CAT-09', 'BR-02', 'SƠN XỊT ACRYLIC LUSCOAT CNAER HỆ MÀU THƯỜNG (không bao gồm màu bạc)', 'Dung tích: 0.4L', 'Chai', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'Sơn xịt', 5, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0094', 'gia_niem_yet', 32000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0094', 'gia_khach_si', 27648.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0094', 'gia_thau_tho', 31104.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0094', 'gia_khach_le', 34560.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0094', 'gia_ban_mau', 22464.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0095', 'CNAER', 'Sơn xịt Acrylic màu xám 301 LUSCOAT CNAER: 0.4L', 'CAT-09', 'BR-02', 'SƠN XỊT ACRYLIC LUSCOAT CNAER HỆ MÀU THƯỜNG (không bao gồm màu bạc)', 'Dung tích: 0.4L', 'Chai', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'Sơn xịt', 6, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0095', 'gia_niem_yet', 32000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0095', 'gia_khach_si', 27648.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0095', 'gia_thau_tho', 31104.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0095', 'gia_khach_le', 34560.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0095', 'gia_ban_mau', 22464.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0096', 'CNAER', 'Sơn xịt Acrylic màu nhũ bạc 1580 LUSCOAT CNAER: 0.4L', 'CAT-09', 'BR-02', 'SƠN XỊT ACRYLIC LUSCOAT CNAER HỆ MÀU BẠC', 'Dung tích: 0.4L', 'Chai', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'Sơn xịt', 7, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0096', 'gia_niem_yet', 34000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0096', 'gia_khach_si', 29376.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0096', 'gia_thau_tho', 33048.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0096', 'gia_khach_le', 36720.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0096', 'gia_ban_mau', 23868.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0097', 'J421', 'Que hàn J421 VĐ: 2.5mmx300mm', 'CAT-17', 'BR-08', 'Que hàn J421', '', 'Kg', '2.5 kg/Hộp, 20 kg/Thùng, 8 Hộp/Thùng', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'Que hàn', 3, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0097', 'gia_niem_yet', 26650.0, 'chua_vat', 'Giá NY /kg (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0097', 'gia_khach_si', 26622.0, 'co_vat', 'Giá sỉ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0097', 'gia_niem_yet', 66555.0, 'co_vat', 'Giá sỉ /hộp (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0097', 'gia_niem_yet', 532440.0, 'co_vat', 'Giá sỉ /thùng (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0097', 'gia_thau_tho', 27162.0, 'co_vat', 'Giá thợ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0097', 'gia_niem_yet', 67905.0, 'co_vat', 'Giá thợ /hộp (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0097', 'gia_niem_yet', 543240.0, 'co_vat', 'Giá thợ /thùng (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0097', 'gia_khach_le', 28782.0, 'co_vat', 'Giá lẻ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0097', 'gia_niem_yet', 71955.0, 'co_vat', 'Giá lẻ /hộp (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0098', 'J421', 'Que hàn J421 VĐ: 3.2mmx350mm', 'CAT-17', 'BR-08', 'Que hàn J421', '', 'Kg', '5 kg/Hộp, 20 kg/Thùng, 4 Hộp/Thùng', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'Que hàn', 4, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0098', 'gia_niem_yet', 25750.0, 'chua_vat', 'Giá NY /kg (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0098', 'gia_khach_si', 25650.0, 'co_vat', 'Giá sỉ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0098', 'gia_niem_yet', 128250.0, 'co_vat', 'Giá sỉ /hộp (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0098', 'gia_niem_yet', 513000.0, 'co_vat', 'Giá sỉ /thùng (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0098', 'gia_thau_tho', 26190.0, 'co_vat', 'Giá thợ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0098', 'gia_niem_yet', 130950.0, 'co_vat', 'Giá thợ /hộp (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0098', 'gia_niem_yet', 523800.0, 'co_vat', 'Giá thợ /thùng (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0098', 'gia_khach_le', 27810.0, 'co_vat', 'Giá lẻ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0098', 'gia_niem_yet', 139050.0, 'co_vat', 'Giá lẻ /hộp (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0099', 'J421', 'Que hàn J421 VĐ: 4.0mmx400mm', 'CAT-17', 'BR-08', 'Que hàn J421', '', 'Kg', '5 kg/Hộp, 20 kg/Thùng, 4 Hộp/Thùng', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'Que hàn', 5, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0099', 'gia_niem_yet', 25750.0, 'chua_vat', 'Giá NY /kg (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0099', 'gia_khach_si', 25650.0, 'co_vat', 'Giá sỉ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0099', 'gia_niem_yet', 128250.0, 'co_vat', 'Giá sỉ /hộp (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0099', 'gia_niem_yet', 513000.0, 'co_vat', 'Giá sỉ /thùng (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0099', 'gia_thau_tho', 26190.0, 'co_vat', 'Giá thợ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0099', 'gia_niem_yet', 130950.0, 'co_vat', 'Giá thợ /hộp (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0099', 'gia_niem_yet', 523800.0, 'co_vat', 'Giá thợ /thùng (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0099', 'gia_khach_le', 27810.0, 'co_vat', 'Giá lẻ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0099', 'gia_niem_yet', 139050.0, 'co_vat', 'Giá lẻ /hộp (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0100', '6013', 'Que hàn 6013 VĐ: 2.5mmx300mm', 'CAT-17', 'BR-08', 'Que hàn 6013', '', 'Kg', '2.5 kg/Hộp, 20 kg/Thùng, 8 Hộp/Thùng', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'Que hàn', 6, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0100', 'gia_niem_yet', 27350.0, 'chua_vat', 'Giá NY /kg (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0100', 'gia_khach_si', 27378.0, 'co_vat', 'Giá sỉ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0100', 'gia_niem_yet', 68445.0, 'co_vat', 'Giá sỉ /hộp (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0100', 'gia_niem_yet', 547560.0, 'co_vat', 'Giá sỉ /thùng (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0100', 'gia_thau_tho', 27918.0, 'co_vat', 'Giá thợ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0100', 'gia_niem_yet', 69795.0, 'co_vat', 'Giá thợ /hộp (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0100', 'gia_niem_yet', 558360.0, 'co_vat', 'Giá thợ /thùng (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0100', 'gia_khach_le', 29538.0, 'co_vat', 'Giá lẻ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0100', 'gia_niem_yet', 73845.0, 'co_vat', 'Giá lẻ /hộp (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0101', '6013', 'Que hàn 6013 VĐ: 3.2mmx350mm', 'CAT-17', 'BR-08', 'Que hàn 6013', '', 'Kg', '5 kg/Hộp, 20 kg/Thùng, 4 Hộp/Thùng', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'Que hàn', 7, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0101', 'gia_niem_yet', 26150.0, 'chua_vat', 'Giá NY /kg (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0101', 'gia_khach_si', 26082.0, 'co_vat', 'Giá sỉ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0101', 'gia_niem_yet', 130410.0, 'co_vat', 'Giá sỉ /hộp (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0101', 'gia_niem_yet', 521640.0, 'co_vat', 'Giá sỉ /thùng (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0101', 'gia_thau_tho', 26622.0, 'co_vat', 'Giá thợ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0101', 'gia_niem_yet', 133110.0, 'co_vat', 'Giá thợ /hộp (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0101', 'gia_niem_yet', 532440.0, 'co_vat', 'Giá thợ /thùng (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0101', 'gia_khach_le', 28242.0, 'co_vat', 'Giá lẻ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0101', 'gia_niem_yet', 141210.0, 'co_vat', 'Giá lẻ /hộp (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0102', '6013', 'Que hàn 6013 VĐ: 4.0mmx400mm', 'CAT-17', 'BR-08', 'Que hàn 6013', '', 'Kg', '5 kg/Hộp, 20 kg/Thùng, 4 Hộp/Thùng', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'Que hàn', 8, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0102', 'gia_niem_yet', 26150.0, 'chua_vat', 'Giá NY /kg (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0102', 'gia_khach_si', 26082.0, 'co_vat', 'Giá sỉ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0102', 'gia_niem_yet', 130410.0, 'co_vat', 'Giá sỉ /hộp (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0102', 'gia_niem_yet', 521640.0, 'co_vat', 'Giá sỉ /thùng (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0102', 'gia_thau_tho', 26622.0, 'co_vat', 'Giá thợ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0102', 'gia_niem_yet', 133110.0, 'co_vat', 'Giá thợ /hộp (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0102', 'gia_niem_yet', 532440.0, 'co_vat', 'Giá thợ /thùng (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0102', 'gia_khach_le', 28242.0, 'co_vat', 'Giá lẻ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0102', 'gia_niem_yet', 141210.0, 'co_vat', 'Giá lẻ /hộp (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0103', 'HS-VẬT-103', 'Que hàn Inox 308-16 VĐ: 2.5mmx300mm', 'CAT-17', 'BR-08', 'Que hàn Inox', '', 'Kg', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'Que hàn', 9, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0103', 'gia_niem_yet', 134850.0, 'chua_vat', 'Giá NY /kg (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0103', 'gia_khach_si', 143478.0, 'co_vat', 'Giá sỉ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0103', 'gia_thau_tho', 144018.0, 'co_vat', 'Giá thợ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0103', 'gia_khach_le', 145638.0, 'co_vat', 'Giá lẻ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0104', 'HS-VẬT-104', 'Que hàn Inox 308-16 VĐ: 3.2mmx350mm', 'CAT-17', 'BR-08', 'Que hàn Inox', '', 'Kg', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'Que hàn', 10, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0104', 'gia_niem_yet', 131350.0, 'chua_vat', 'Giá NY /kg (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0104', 'gia_khach_si', 139698.0, 'co_vat', 'Giá sỉ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0104', 'gia_thau_tho', 140238.0, 'co_vat', 'Giá thợ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0104', 'gia_khach_le', 141858.0, 'co_vat', 'Giá lẻ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0105', 'HS-VẬT-105', 'Que hàn Inox 308-16 VĐ: 4.0mmx350mm', 'CAT-17', 'BR-08', 'Que hàn Inox', '', 'Kg', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'Que hàn', 11, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0105', 'gia_niem_yet', 131350.0, 'chua_vat', 'Giá NY /kg (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0105', 'gia_khach_si', 139698.0, 'co_vat', 'Giá sỉ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0105', 'gia_thau_tho', 140238.0, 'co_vat', 'Giá thợ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0105', 'gia_khach_le', 141858.0, 'co_vat', 'Giá lẻ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0106', 'W49', 'Dây hàn W49 VĐ: 0.8mmx15kg', 'CAT-17', 'BR-08', 'Dây hàn', '', 'Kg', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'Que hàn', 12, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0106', 'gia_niem_yet', 37000.0, 'chua_vat', 'Giá NY /kg (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0106', 'gia_khach_si', 37800.0, 'co_vat', 'Giá sỉ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0106', 'gia_niem_yet', 567000.0, 'co_vat', 'Giá sỉ /thùng (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0106', 'gia_thau_tho', 38340.0, 'co_vat', 'Giá thợ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0106', 'gia_niem_yet', 575100.0, 'co_vat', 'Giá thợ /thùng (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0106', 'gia_khach_le', 39960.0, 'co_vat', 'Giá lẻ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0107', 'W49', 'Dây hàn W49 VĐ: 0.9mmx15kg', 'CAT-17', 'BR-08', 'Dây hàn', '', 'Kg', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'Que hàn', 13, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0107', 'gia_niem_yet', 36700.0, 'chua_vat', 'Giá NY /kg (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0107', 'gia_khach_si', 37476.0, 'co_vat', 'Giá sỉ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0107', 'gia_niem_yet', 562140.0, 'co_vat', 'Giá sỉ /thùng (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0107', 'gia_thau_tho', 38016.0, 'co_vat', 'Giá thợ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0107', 'gia_niem_yet', 542700.0, 'co_vat', 'Giá thợ /thùng (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0107', 'gia_khach_le', 39636.0, 'co_vat', 'Giá lẻ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0108', 'W49', 'Dây hàn W49 VĐ: 1.0mmx15kg', 'CAT-17', 'BR-08', 'Dây hàn', '', 'Kg', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'Que hàn', 14, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0108', 'gia_niem_yet', 34900.0, 'chua_vat', 'Giá NY /kg (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0108', 'gia_khach_si', 35532.0, 'co_vat', 'Giá sỉ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0108', 'gia_niem_yet', 532980.0, 'co_vat', 'Giá sỉ /thùng (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0108', 'gia_thau_tho', 36072.0, 'co_vat', 'Giá thợ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0108', 'gia_niem_yet', 513540.0, 'co_vat', 'Giá thợ /thùng (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0108', 'gia_khach_le', 37692.0, 'co_vat', 'Giá lẻ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0109', 'W49', 'Dây hàn W49 VĐ: 1.2mmx15kg', 'CAT-17', 'BR-08', 'Dây hàn', '', 'Kg', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'Que hàn', 15, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0109', 'gia_niem_yet', 33900.0, 'chua_vat', 'Giá NY /kg (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0109', 'gia_khach_si', 34452.0, 'co_vat', 'Giá sỉ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0109', 'gia_niem_yet', 516780.0, 'co_vat', 'Giá sỉ /thùng (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0109', 'gia_thau_tho', 34992.0, 'co_vat', 'Giá thợ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0109', 'gia_niem_yet', 497340.0, 'co_vat', 'Giá thợ /thùng (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0109', 'gia_khach_le', 36612.0, 'co_vat', 'Giá lẻ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0110', 'HS-VẬT-110', 'Dây hàn W71T VĐ: 1.2mmx15kg', 'CAT-17', 'BR-08', 'Dây hàn', '', 'Kg', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'Que hàn', 16, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0110', 'gia_niem_yet', 32900.0, 'chua_vat', 'Giá NY /kg (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0110', 'gia_khach_si', 33372.0, 'co_vat', 'Giá sỉ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0110', 'gia_niem_yet', 500580.0, 'co_vat', 'Giá sỉ /thùng (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0110', 'gia_thau_tho', 33912.0, 'co_vat', 'Giá thợ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0110', 'gia_niem_yet', 489240.0, 'co_vat', 'Giá thợ /thùng (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0110', 'gia_khach_le', 35532.0, 'co_vat', 'Giá lẻ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0111', 'E7018', 'Que hàn E7018 VĐ: 3.2mmx350mm', 'CAT-17', 'BR-08', 'Que hàn E7018', '', 'Kg', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'Que hàn', 17, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0111', 'gia_niem_yet', 34800.0, 'chua_vat', 'Giá NY /kg (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0111', 'gia_khach_si', 35424.0, 'co_vat', 'Giá sỉ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0111', 'gia_thau_tho', 35964.0, 'co_vat', 'Giá thợ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0111', 'gia_khach_le', 37584.0, 'co_vat', 'Giá lẻ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0112', 'E7018', 'Que hàn E7018 VĐ: 4.0mmx400mm', 'CAT-17', 'BR-08', 'Que hàn E7018', '', 'Kg', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'Que hàn', 18, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0112', 'gia_niem_yet', 34500.0, 'chua_vat', 'Giá NY /kg (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0112', 'gia_khach_si', 35100.0, 'co_vat', 'Giá sỉ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0112', 'gia_thau_tho', 35640.0, 'co_vat', 'Giá thợ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0112', 'gia_khach_le', 37260.0, 'co_vat', 'Giá lẻ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0113', 'N46', 'Que hàn N46 VĐ: 2.5mmx300mm', 'CAT-17', 'BR-08', 'Que hàn E7018', '', 'Kg', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'Que hàn', 19, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0113', 'gia_niem_yet', 34000.0, 'chua_vat', 'Giá NY /kg (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0113', 'gia_khach_si', 34560.0, 'co_vat', 'Giá sỉ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0113', 'gia_thau_tho', 35100.0, 'co_vat', 'Giá thợ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0113', 'gia_khach_le', 36720.0, 'co_vat', 'Giá lẻ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0114', 'N46', 'Que hàn N46 VĐ: 4.0mmx400mm', 'CAT-17', 'BR-08', 'Que hàn E7018', '', 'Kg', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'Que hàn', 20, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0114', 'gia_niem_yet', 33500.0, 'chua_vat', 'Giá NY /kg (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0114', 'gia_khach_si', 34020.0, 'co_vat', 'Giá sỉ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0114', 'gia_thau_tho', 34560.0, 'co_vat', 'Giá thợ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0114', 'gia_khach_le', 36180.0, 'co_vat', 'Giá lẻ /kg (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0115', 'VNWIN', 'Tấm cách nhiệt LusWell VNWIN P2: 4mmx1.55m', 'CAT-12', 'BR-05', 'TẤM CÁCH NHIỆT LUSWELL', '', 'M2', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CÁCH NHIỆT', 3, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0115', 'gia_niem_yet', 26500.0, 'chua_vat', 'Giá niêm yết /M2 (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0115', 'gia_khach_si', 22896.0, 'co_vat', 'Giá khách sỉ /M2 (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0115', 'gia_thau_tho', 25758.0, 'co_vat', 'Giá thợ /M2 (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0115', 'gia_khach_le', 28620.0, 'co_vat', 'Giá khách lẻ /M2 (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0115', 'gia_niem_yet', 1419552.0, 'co_vat', 'Giá sỉ theo cuộn (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0115', 'gia_niem_yet', 1153386.0, 'co_vat', 'Giá bán mẫu theo cuộn (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0115', 'gia_ban_mau', 18603.0, 'co_vat', 'Giá bán mẫu /M2 (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0116', 'VNWIN', 'Tấm cách nhiệt LusWell VNWIN P2: 4mmx1.1m', 'CAT-12', 'BR-05', 'TẤM CÁCH NHIỆT LUSWELL', '', 'M2', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CÁCH NHIỆT', 4, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0116', 'gia_niem_yet', 26700.0, 'chua_vat', 'Giá niêm yết /M2 (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0116', 'gia_khach_si', 23068.8, 'co_vat', 'Giá khách sỉ /M2 (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0116', 'gia_thau_tho', 25952.4, 'co_vat', 'Giá thợ /M2 (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0116', 'gia_khach_le', 28836.0, 'co_vat', 'Giá khách lẻ /M2 (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0116', 'gia_niem_yet', 1015027.2, 'co_vat', 'Giá sỉ theo cuộn (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0116', 'gia_niem_yet', 824709.6, 'co_vat', 'Giá bán mẫu theo cuộn (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0116', 'gia_ban_mau', 18743.4, 'co_vat', 'Giá bán mẫu /M2 (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0117', 'VNWIN', 'Tấm cách nhiệt LusWell VNWIN AP: 4mmx1.55m', 'CAT-12', 'BR-05', 'TẤM CÁCH NHIỆT LUSWELL', '', 'M2', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CÁCH NHIỆT', 5, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0117', 'gia_niem_yet', 30600.0, 'chua_vat', 'Giá niêm yết /M2 (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0117', 'gia_khach_si', 26438.4, 'co_vat', 'Giá khách sỉ /M2 (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0117', 'gia_thau_tho', 29743.2, 'co_vat', 'Giá thợ /M2 (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0117', 'gia_khach_le', 33048.0, 'co_vat', 'Giá khách lẻ /M2 (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0117', 'gia_niem_yet', 1639180.8, 'co_vat', 'Giá sỉ theo cuộn (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0117', 'gia_niem_yet', 1331834.4, 'co_vat', 'Giá bán mẫu theo cuộn (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0117', 'gia_ban_mau', 21481.2, 'co_vat', 'Giá bán mẫu /M2 (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0118', 'VNWIN', 'Tấm cách nhiệt LusWell VNWIN A2: 4mmx1.55m', 'CAT-12', 'BR-05', 'TẤM CÁCH NHIỆT LUSWELL', '', 'M2', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CÁCH NHIỆT', 6, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0118', 'gia_niem_yet', 37700.0, 'chua_vat', 'Giá niêm yết /M2 (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0118', 'gia_khach_si', 32572.8, 'co_vat', 'Giá khách sỉ /M2 (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0118', 'gia_thau_tho', 36644.4, 'co_vat', 'Giá thợ /M2 (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0118', 'gia_khach_le', 40716.0, 'co_vat', 'Giá khách lẻ /M2 (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0118', 'gia_niem_yet', 2019513.6, 'co_vat', 'Giá sỉ theo cuộn (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0118', 'gia_niem_yet', 1640854.8, 'co_vat', 'Giá bán mẫu theo cuộn (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0118', 'gia_ban_mau', 26465.4, 'co_vat', 'Giá bán mẫu /M2 (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0119', 'VNWIN', 'Băng keo hai mặt chuyên dụng LusWell VNWIN: 0.05mx40m', 'CAT-12', 'BR-05', 'TẤM CÁCH NHIỆT LUSWELL', '', 'Cuộn', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CÁCH NHIỆT', 7, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0119', 'gia_niem_yet', 40500.0, 'chua_vat', 'Giá niêm yết /Cuộn (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0119', 'gia_khach_si', 34992.0, 'co_vat', 'Giá khách sỉ /Cuộn (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0119', 'gia_thau_tho', 39366.0, 'co_vat', 'Giá thợ /Cuộn (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0119', 'gia_khach_le', 43740.0, 'co_vat', 'Giá khách lẻ /Cuộn (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0119', 'gia_ban_mau', 28431.0, 'co_vat', 'Giá bán mẫu /Cuộn (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0120', 'VNTHA', 'Tấm nhựa lấy sáng LUSWELL VNTHA CPS: 0.60mmx1070mm', 'CAT-13', 'BR-05', 'Tấm nhựa lấy sáng LUSWELL', '', 'Mét', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'LẤY SÁNG', 3, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0120', 'gia_niem_yet', 103000.0, 'chua_vat', 'Giá niêm yết /mét (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0120', 'gia_khach_si', 88992.0, 'co_vat', 'Giá khách sỉ /mét (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0120', 'gia_thau_tho', 100116.0, 'co_vat', 'Giá thợ /mét (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0120', 'gia_khach_le', 111240.0, 'co_vat', 'Giá khách lẻ /mét (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0120', 'gia_ban_mau', 72306.0, 'co_vat', 'Giá bán mẫu /mét (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0121', 'VNTHA', 'Tấm nhựa lấy sáng LUSWELL VNTHA CPS: 0.80mmx1070mm', 'CAT-13', 'BR-05', 'Tấm nhựa lấy sáng LUSWELL', '', 'Mét', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'LẤY SÁNG', 4, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0121', 'gia_niem_yet', 129000.0, 'chua_vat', 'Giá niêm yết /mét (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0121', 'gia_khach_si', 111456.0, 'co_vat', 'Giá khách sỉ /mét (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0121', 'gia_thau_tho', 125388.0, 'co_vat', 'Giá thợ /mét (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0121', 'gia_khach_le', 139320.0, 'co_vat', 'Giá khách lẻ /mét (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0121', 'gia_ban_mau', 90558.0, 'co_vat', 'Giá bán mẫu /mét (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0122', 'VNTHA', 'Tấm nhựa lấy sáng LUSWELL VNTHA CPS: 1.00mmx1070mm', 'CAT-13', 'BR-05', 'Tấm nhựa lấy sáng LUSWELL', '', 'Mét', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'LẤY SÁNG', 5, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0122', 'gia_niem_yet', 159000.0, 'chua_vat', 'Giá niêm yết /mét (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0122', 'gia_khach_si', 137376.0, 'co_vat', 'Giá khách sỉ /mét (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0122', 'gia_thau_tho', 154548.0, 'co_vat', 'Giá thợ /mét (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0122', 'gia_khach_le', 171720.0, 'co_vat', 'Giá khách lẻ /mét (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0122', 'gia_ban_mau', 111618.0, 'co_vat', 'Giá bán mẫu /mét (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0123', 'VNTHA', 'Tấm nhựa lấy sáng LUSWELL VNTHA CPS: 1.20mmx1070mm', 'CAT-13', 'BR-05', 'Tấm nhựa lấy sáng LUSWELL', '', 'Mét', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'LẤY SÁNG', 6, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0123', 'gia_niem_yet', 225000.0, 'chua_vat', 'Giá niêm yết /mét (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0123', 'gia_khach_si', 194400.0, 'co_vat', 'Giá khách sỉ /mét (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0123', 'gia_thau_tho', 218700.0, 'co_vat', 'Giá thợ /mét (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0123', 'gia_khach_le', 243000.0, 'co_vat', 'Giá khách lẻ /mét (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0123', 'gia_ban_mau', 157950.0, 'co_vat', 'Giá bán mẫu /mét (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0124', 'VNTHA', 'Tấm nhựa lấy sáng LUSWELL VNTHA CPS: 1.50mmx1070mm', 'CAT-13', 'BR-05', 'Tấm nhựa lấy sáng LUSWELL', '', 'Mét', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'LẤY SÁNG', 7, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0124', 'gia_niem_yet', 280000.0, 'chua_vat', 'Giá niêm yết /mét (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0124', 'gia_khach_si', 241920.0, 'co_vat', 'Giá khách sỉ /mét (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0124', 'gia_thau_tho', 272160.0, 'co_vat', 'Giá thợ /mét (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0124', 'gia_khach_le', 302400.0, 'co_vat', 'Giá khách lẻ /mét (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0124', 'gia_ban_mau', 196560.0, 'co_vat', 'Giá bán mẫu /mét (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0125', 'VNTHA', 'Tấm nhựa lấy sáng LUSWELL VNTHA CPS: 2.00mmx1070mm', 'CAT-13', 'BR-05', 'Tấm nhựa lấy sáng LUSWELL', '', 'Mét', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'LẤY SÁNG', 8, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0125', 'gia_niem_yet', 358000.0, 'chua_vat', 'Giá niêm yết /mét (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0125', 'gia_khach_si', 309312.0, 'co_vat', 'Giá khách sỉ /mét (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0125', 'gia_thau_tho', 347976.0, 'co_vat', 'Giá thợ /mét (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0125', 'gia_khach_le', 386640.0, 'co_vat', 'Giá khách lẻ /mét (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0125', 'gia_ban_mau', 251316.0, 'co_vat', 'Giá bán mẫu /mét (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0126', 'VNTHA', 'Tấm nhựa lấy sáng LUSWELL VNTHA CPS: 2.50mmx1070mm', 'CAT-13', 'BR-05', 'Tấm nhựa lấy sáng LUSWELL', '', 'Mét', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'LẤY SÁNG', 9, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0126', 'gia_niem_yet', 445000.0, 'chua_vat', 'Giá niêm yết /mét (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0126', 'gia_khach_si', 384480.0, 'co_vat', 'Giá khách sỉ /mét (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0126', 'gia_thau_tho', 432540.0, 'co_vat', 'Giá thợ /mét (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0126', 'gia_khach_le', 480600.0, 'co_vat', 'Giá khách lẻ /mét (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0126', 'gia_ban_mau', 312390.0, 'co_vat', 'Giá bán mẫu /mét (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0127', 'VNTHA', 'Tấm nhựa lấy sáng LUSWELL VNTHA CPS: 3.00mmx1070mm', 'CAT-13', 'BR-05', 'Tấm nhựa lấy sáng LUSWELL', '', 'Mét', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'LẤY SÁNG', 10, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0127', 'gia_niem_yet', 557000.0, 'chua_vat', 'Giá niêm yết /mét (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0127', 'gia_khach_si', 481248.0, 'co_vat', 'Giá khách sỉ /mét (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0127', 'gia_thau_tho', 541404.0, 'co_vat', 'Giá thợ /mét (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0127', 'gia_khach_le', 601560.0, 'co_vat', 'Giá khách lẻ /mét (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0127', 'gia_ban_mau', 391014.0, 'co_vat', 'Giá bán mẫu /mét (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0128', '5TJ3110-7', 'Thiết bị đóng ngắt tự động 1 cực 10A 4.5kA 5TJ3110-7 SI', 'CAT-11', 'BR-07', 'Siemens MCB & RCCB', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SIEMENS', 3, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0128', 'gia_niem_yet', 99360.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0128', 'gia_khach_si', 49680.0, 'co_vat', 'Giá khách sỉ (CK 50%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0128', 'gia_thau_tho', 54648.0, 'co_vat', 'Giá thầu thợ (CK 45%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0128', 'gia_khach_le', 59616.0, 'co_vat', 'Giá khách lẻ (CK 40%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0129', '5TJ3116-7', 'Thiết bị đóng ngắt tự động 1 cực 16A 4.5kA 5TJ3116-7 SI', 'CAT-11', 'BR-07', 'Siemens MCB & RCCB', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SIEMENS', 4, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0129', 'gia_niem_yet', 99360.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0129', 'gia_khach_si', 49680.0, 'co_vat', 'Giá khách sỉ (CK 50%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0129', 'gia_thau_tho', 54648.0, 'co_vat', 'Giá thầu thợ (CK 45%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0129', 'gia_khach_le', 59616.0, 'co_vat', 'Giá khách lẻ (CK 40%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0130', '5TJ3120-7', 'Thiết bị đóng ngắt tự động 1 cực 20A 4.5kA 5TJ3120-7 SI', 'CAT-11', 'BR-07', 'Siemens MCB & RCCB', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SIEMENS', 5, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0130', 'gia_niem_yet', 99360.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0130', 'gia_khach_si', 49680.0, 'co_vat', 'Giá khách sỉ (CK 50%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0130', 'gia_thau_tho', 54648.0, 'co_vat', 'Giá thầu thợ (CK 45%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0130', 'gia_khach_le', 59616.0, 'co_vat', 'Giá khách lẻ (CK 40%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0131', '5TJ3125-7', 'Thiết bị đóng ngắt tự động 1 cực 25A 4.5kA 5TJ3125-7 SI', 'CAT-11', 'BR-07', 'Siemens MCB & RCCB', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SIEMENS', 6, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0131', 'gia_niem_yet', 99360.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0131', 'gia_khach_si', 49680.0, 'co_vat', 'Giá khách sỉ (CK 50%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0131', 'gia_thau_tho', 54648.0, 'co_vat', 'Giá thầu thợ (CK 45%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0131', 'gia_khach_le', 59616.0, 'co_vat', 'Giá khách lẻ (CK 40%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0132', '5TJ3132-7', 'Thiết bị đóng ngắt tự động 1 cực 32A 4.5kA 5TJ3132-7 SI', 'CAT-11', 'BR-07', 'Siemens MCB & RCCB', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SIEMENS', 7, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0132', 'gia_niem_yet', 99360.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0132', 'gia_khach_si', 49680.0, 'co_vat', 'Giá khách sỉ (CK 50%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0132', 'gia_thau_tho', 54648.0, 'co_vat', 'Giá thầu thợ (CK 45%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0132', 'gia_khach_le', 59616.0, 'co_vat', 'Giá khách lẻ (CK 40%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0133', '5TJ3210-7', 'Thiết bị đóng ngắt tự động 2 cực 10A 4.5kA 5TJ3210-7 SI', 'CAT-11', 'BR-07', 'Siemens MCB & RCCB', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SIEMENS', 8, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0133', 'gia_niem_yet', 286200.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0133', 'gia_khach_si', 143100.0, 'co_vat', 'Giá khách sỉ (CK 50%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0133', 'gia_thau_tho', 157410.0, 'co_vat', 'Giá thầu thợ (CK 45%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0133', 'gia_khach_le', 171720.0, 'co_vat', 'Giá khách lẻ (CK 40%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0134', '5TJ3216-7', 'Thiết bị đóng ngắt tự động 2 cực 16A 4.5kA 5TJ3216-7 SI', 'CAT-11', 'BR-07', 'Siemens MCB & RCCB', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SIEMENS', 9, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0134', 'gia_niem_yet', 286200.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0134', 'gia_khach_si', 143100.0, 'co_vat', 'Giá khách sỉ (CK 50%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0134', 'gia_thau_tho', 157410.0, 'co_vat', 'Giá thầu thợ (CK 45%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0134', 'gia_khach_le', 171720.0, 'co_vat', 'Giá khách lẻ (CK 40%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0135', '5TJ3220-7', 'Thiết bị đóng ngắt tự động 2 cực 20A 4.5kA 5TJ3220-7 SI', 'CAT-11', 'BR-07', 'Siemens MCB & RCCB', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SIEMENS', 10, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0135', 'gia_niem_yet', 286200.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0135', 'gia_khach_si', 143100.0, 'co_vat', 'Giá khách sỉ (CK 50%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0135', 'gia_thau_tho', 157410.0, 'co_vat', 'Giá thầu thợ (CK 45%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0135', 'gia_khach_le', 171720.0, 'co_vat', 'Giá khách lẻ (CK 40%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0136', '5TJ3225-7', 'Thiết bị đóng ngắt tự động 2 cực 25A 4.5kA 5TJ3225-7 SI', 'CAT-11', 'BR-07', 'Siemens MCB & RCCB', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SIEMENS', 11, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0136', 'gia_niem_yet', 286200.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0136', 'gia_khach_si', 143100.0, 'co_vat', 'Giá khách sỉ (CK 50%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0136', 'gia_thau_tho', 157410.0, 'co_vat', 'Giá thầu thợ (CK 45%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0136', 'gia_khach_le', 171720.0, 'co_vat', 'Giá khách lẻ (CK 40%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0137', '5TJ3232-7', 'Thiết bị đóng ngắt tự động 2 cực 32A 4.5kA 5TJ3232-7 SI', 'CAT-11', 'BR-07', 'Siemens MCB & RCCB', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SIEMENS', 12, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0137', 'gia_niem_yet', 286200.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0137', 'gia_khach_si', 143100.0, 'co_vat', 'Giá khách sỉ (CK 50%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0137', 'gia_thau_tho', 157410.0, 'co_vat', 'Giá thầu thợ (CK 45%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0137', 'gia_khach_le', 171720.0, 'co_vat', 'Giá khách lẻ (CK 40%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0138', '5TJ3240-7', 'Thiết bị đóng ngắt tự động 2 cực 40A 4.5kA 5TJ3240-7 SI', 'CAT-11', 'BR-07', 'Siemens MCB & RCCB', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SIEMENS', 13, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0138', 'gia_niem_yet', 286200.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0138', 'gia_khach_si', 143100.0, 'co_vat', 'Giá khách sỉ (CK 50%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0138', 'gia_thau_tho', 157410.0, 'co_vat', 'Giá thầu thợ (CK 45%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0138', 'gia_khach_le', 171720.0, 'co_vat', 'Giá khách lẻ (CK 40%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0139', '5TJ3250-7', 'Thiết bị đóng ngắt tự động 2 cực 50A 4.5kA 5TJ3250-7 SI', 'CAT-11', 'BR-07', 'Siemens MCB & RCCB', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SIEMENS', 14, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0139', 'gia_niem_yet', 476280.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0139', 'gia_khach_si', 238140.0, 'co_vat', 'Giá khách sỉ (CK 50%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0139', 'gia_thau_tho', 261954.0, 'co_vat', 'Giá thầu thợ (CK 45%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0139', 'gia_khach_le', 285768.0, 'co_vat', 'Giá khách lẻ (CK 40%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0140', '5TJ3263-7', 'Thiết bị đóng ngắt tự động 2 cực 63A 4.5kA 5TJ3263-7 SI', 'CAT-11', 'BR-07', 'Siemens MCB & RCCB', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SIEMENS', 15, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0140', 'gia_niem_yet', 476280.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0140', 'gia_khach_si', 238140.0, 'co_vat', 'Giá khách sỉ (CK 50%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0140', 'gia_thau_tho', 261954.0, 'co_vat', 'Giá thầu thợ (CK 45%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0140', 'gia_khach_le', 285768.0, 'co_vat', 'Giá khách lẻ (CK 40%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0141', '5TJ3332-7', 'Thiết bị đóng ngắt tự động 3 cực 32A 4.5kA 5TJ3332-7 SI', 'CAT-11', 'BR-07', 'Siemens MCB & RCCB', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SIEMENS', 16, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0141', 'gia_niem_yet', 509760.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0141', 'gia_khach_si', 254880.0, 'co_vat', 'Giá khách sỉ (CK 50%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0141', 'gia_thau_tho', 280368.0, 'co_vat', 'Giá thầu thợ (CK 45%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0141', 'gia_khach_le', 305856.0, 'co_vat', 'Giá khách lẻ (CK 40%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0142', '5TJ3340-7', 'Thiết bị đóng ngắt tự động 3 cực 40A 4.5kA 5TJ3340-7 SI', 'CAT-11', 'BR-07', 'Siemens MCB & RCCB', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SIEMENS', 17, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0142', 'gia_niem_yet', 509760.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0142', 'gia_khach_si', 254880.0, 'co_vat', 'Giá khách sỉ (CK 50%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0142', 'gia_thau_tho', 280368.0, 'co_vat', 'Giá thầu thợ (CK 45%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0142', 'gia_khach_le', 305856.0, 'co_vat', 'Giá khách lẻ (CK 40%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0143', '5TJ3350-7', 'Thiết bị đóng ngắt tự động 3 cực 50A 4.5kA 5TJ3350-7 SI', 'CAT-11', 'BR-07', 'Siemens MCB & RCCB', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SIEMENS', 18, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0143', 'gia_niem_yet', 762480.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0143', 'gia_khach_si', 381240.0, 'co_vat', 'Giá khách sỉ (CK 50%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0143', 'gia_thau_tho', 419364.0, 'co_vat', 'Giá thầu thợ (CK 45%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0143', 'gia_khach_le', 457488.0, 'co_vat', 'Giá khách lẻ (CK 40%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0144', '5TJ3363-7', 'Thiết bị đóng ngắt tự động 3 cực 63A 4.5kA 5TJ3363-7 SI', 'CAT-11', 'BR-07', 'Siemens MCB & RCCB', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SIEMENS', 19, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0144', 'gia_niem_yet', 762480.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0144', 'gia_khach_si', 381240.0, 'co_vat', 'Giá khách sỉ (CK 50%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0144', 'gia_thau_tho', 419364.0, 'co_vat', 'Giá thầu thợ (CK 45%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0144', 'gia_khach_le', 457488.0, 'co_vat', 'Giá khách lẻ (CK 40%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0145', '5TJ7312-0', 'Thiết bị đóng ngắt tự động chống dòng rò 2 cực 25A 30mA 6kA 5TJ7312-0 SI', 'CAT-11', 'BR-07', 'Siemens MCB & RCCB', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SIEMENS', 20, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0145', 'gia_niem_yet', 1023840.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0145', 'gia_khach_si', 511920.0, 'co_vat', 'Giá khách sỉ (CK 50%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0145', 'gia_thau_tho', 563112.0, 'co_vat', 'Giá thầu thợ (CK 45%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0145', 'gia_khach_le', 614304.0, 'co_vat', 'Giá khách lẻ (CK 40%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0146', '5TJ7314-0', 'Thiết bị đóng ngắt tự động chống dòng rò 2 cực 40A 30mA 6kA 5TJ7314-0 SI', 'CAT-11', 'BR-07', 'Siemens MCB & RCCB', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SIEMENS', 21, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0146', 'gia_niem_yet', 1087560.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0146', 'gia_khach_si', 543780.0, 'co_vat', 'Giá khách sỉ (CK 50%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0146', 'gia_thau_tho', 598158.0, 'co_vat', 'Giá thầu thợ (CK 45%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0146', 'gia_khach_le', 652536.0, 'co_vat', 'Giá khách lẻ (CK 40%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0147', '5TJ7316-0', 'Thiết bị đóng ngắt tự động chống dòng rò 2 cực 63A 30mA 6kA 5TJ7316-0 SI', 'CAT-11', 'BR-07', 'Siemens MCB & RCCB', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'SIEMENS', 22, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0147', 'gia_niem_yet', 1125360.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0147', 'gia_khach_si', 562680.0, 'co_vat', 'Giá khách sỉ (CK 50%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0147', 'gia_thau_tho', 618948.0, 'co_vat', 'Giá thầu thợ (CK 45%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0147', 'gia_khach_le', 675216.0, 'co_vat', 'Giá khách lẻ (CK 40%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0148', 'LBP-3T', 'Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-3T LUSCOM CNYAN: 3W ánh sáng trắng', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ. SL mẫu: 100 cái/ mẫu', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 3, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0148', 'gia_niem_yet', 20520.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 20.52, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0148', 'gia_khach_si', 16416.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 16.416, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0148', 'gia_thau_tho', 18468.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 18.468, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0148', 'gia_khach_le', 20520.0, 'co_vat', 'Giá khách lẻ', 20.52, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0148', 'gia_ban_mau', 13338.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 13.338, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0149', 'LBP-5T', 'Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-5T LUSCOM CNYAN: 5W ánh sáng trắng', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 4, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0149', 'gia_niem_yet', 23760.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 23.76, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0149', 'gia_khach_si', 19008.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 19.008, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0149', 'gia_thau_tho', 21384.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 21.384, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0149', 'gia_khach_le', 23760.0, 'co_vat', 'Giá khách lẻ', 23.76, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0149', 'gia_ban_mau', 15444.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 15.444, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0150', 'LBP-7T', 'Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-7T LUSCOM CNYAN: 7W ánh sáng trắng', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 5, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0150', 'gia_niem_yet', 29160.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 29.16, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0150', 'gia_khach_si', 23328.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 23.328, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0150', 'gia_thau_tho', 26244.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 26.244, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0150', 'gia_khach_le', 29160.0, 'co_vat', 'Giá khách lẻ', 29.16, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0150', 'gia_ban_mau', 18954.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 18.954, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0151', 'LBP-9T', 'Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-9T LUSCOM CNYAN: 9W ánh sáng trắng', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 6, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0151', 'gia_niem_yet', 34560.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 34.56, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0151', 'gia_khach_si', 27648.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 27.648, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0151', 'gia_thau_tho', 31104.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 31.104, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0151', 'gia_khach_le', 34560.0, 'co_vat', 'Giá khách lẻ', 34.56, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0151', 'gia_ban_mau', 22464.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 22.464, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0152', 'LBP-9V', 'Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-9V LUSCOM CNYAN: 9W ánh sáng vàng', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 7, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0152', 'gia_niem_yet', 34560.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 34.56, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0152', 'gia_khach_si', 27648.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 27.648, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0152', 'gia_thau_tho', 31104.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 31.104, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0152', 'gia_khach_le', 34560.0, 'co_vat', 'Giá khách lẻ', 34.56, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0152', 'gia_ban_mau', 22464.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 22.464, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0153', 'LBP-12T', 'Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-12T LUSCOM CNYAN: 12W ánh sáng trắng', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '80 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 8, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0153', 'gia_niem_yet', 42120.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 42.12, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0153', 'gia_khach_si', 33696.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 33.696, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0153', 'gia_thau_tho', 37908.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 37.908, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0153', 'gia_khach_le', 42120.0, 'co_vat', 'Giá khách lẻ', 42.12, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0153', 'gia_ban_mau', 27378.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 27.378, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0154', 'LBP-15T', 'Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-15T LUSCOM CNYAN: 15W ánh sáng trắng', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '80 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 9, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0154', 'gia_niem_yet', 56160.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 56.16, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0154', 'gia_khach_si', 44928.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 44.928, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0154', 'gia_thau_tho', 50544.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 50.544, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0154', 'gia_khach_le', 56160.0, 'co_vat', 'Giá khách lẻ', 56.16, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0154', 'gia_ban_mau', 36504.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 36.504, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0155', 'LBP-20T', 'Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-20T LUSCOM CNYAN: 20W ánh sáng trắng', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '40 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ. SL mẫu: 40 cái/ mẫu', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 10, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0155', 'gia_niem_yet', 68040.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 68.04, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0155', 'gia_khach_si', 54432.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 54.432, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0155', 'gia_thau_tho', 61236.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 61.236, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0155', 'gia_khach_le', 68040.0, 'co_vat', 'Giá khách lẻ', 68.04, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0155', 'gia_ban_mau', 44226.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 44.226, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0156', 'LBP-20V', 'Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-20V LUSCOM CNYAN: 20W ánh sáng vàng', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '40 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 11, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0156', 'gia_niem_yet', 68040.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 68.04, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0156', 'gia_khach_si', 54432.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 54.432, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0156', 'gia_thau_tho', 61236.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 61.236, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0156', 'gia_khach_le', 68040.0, 'co_vat', 'Giá khách lẻ', 68.04, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0156', 'gia_ban_mau', 44226.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 44.226, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0157', 'LBP-30T', 'Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-30T LUSCOM CNYAN: 30W ánh sáng trắng', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '20 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 12, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0157', 'gia_niem_yet', 101520.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 101.52, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0157', 'gia_khach_si', 81216.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 81.216, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0157', 'gia_thau_tho', 91368.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 91.368, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0157', 'gia_khach_le', 101520.0, 'co_vat', 'Giá khách lẻ', 101.52, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0157', 'gia_ban_mau', 65988.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 65.988, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0158', 'LBP-30V', 'Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-30V LUSCOM CNYAN: 30W ánh sáng vàng', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '20 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 13, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0158', 'gia_niem_yet', 101520.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 101.52, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0158', 'gia_khach_si', 81216.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 81.216, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0158', 'gia_thau_tho', 91368.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 91.368, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0158', 'gia_khach_le', 101520.0, 'co_vat', 'Giá khách lẻ', 101.52, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0158', 'gia_ban_mau', 65988.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 65.988, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0159', 'LBP-40T', 'Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-40T LUSCOM CNYAN: 40W ánh sáng trắng', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '12 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 14, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0159', 'gia_niem_yet', 135000.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 135.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0159', 'gia_khach_si', 108000.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 108.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0159', 'gia_thau_tho', 121500.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 121.5, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0159', 'gia_khach_le', 135000.0, 'co_vat', 'Giá khách lẻ', 135.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0159', 'gia_ban_mau', 87750.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 87.75, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0160', 'LBP-40V', 'Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-40V LUSCOM CNYAN: 40W ánh sáng vàng', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '12 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 15, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0160', 'gia_niem_yet', 135000.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 135.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0160', 'gia_khach_si', 108000.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 108.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0160', 'gia_thau_tho', 121500.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 121.5, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0160', 'gia_khach_le', 135000.0, 'co_vat', 'Giá khách lẻ', 135.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0160', 'gia_ban_mau', 87750.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 87.75, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0161', 'LBP-50T', 'Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-50T LUSCOM CNYAN: 50W ánh sáng trắng', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '8 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 16, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0161', 'gia_niem_yet', 162000.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 162.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0161', 'gia_khach_si', 129600.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 129.6, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0161', 'gia_thau_tho', 145800.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 145.8, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0161', 'gia_khach_le', 162000.0, 'co_vat', 'Giá khách lẻ', 162.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0161', 'gia_ban_mau', 105300.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 105.3, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0162', 'LBP-50V', 'Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-50V LUSCOM CNYAN: 50W ánh sáng vàng', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '8 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 17, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0162', 'gia_niem_yet', 162000.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 162.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0162', 'gia_khach_si', 129600.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 129.6, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0162', 'gia_thau_tho', 145800.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 145.8, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0162', 'gia_khach_le', 162000.0, 'co_vat', 'Giá khách lẻ', 162.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0162', 'gia_ban_mau', 105300.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 105.3, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0163', 'CNYAN', 'Đèn Led Bulb (trụ nhôm, đuôi E27) LBN-30T LUSCOM CNYAN: 30W ánh sáng trắng', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '12 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ. SL mẫu: 40 cái/ mẫu', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 18, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0163', 'gia_niem_yet', 109080.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 109.08, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0163', 'gia_khach_si', 87264.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 87.264, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0163', 'gia_thau_tho', 98172.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 98.172, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0163', 'gia_khach_le', 109080.0, 'co_vat', 'Giá khách lẻ', 109.08, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0163', 'gia_ban_mau', 70902.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 70.902, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0164', 'CNYAN', 'Đèn Led Bulb (trụ nhôm, đuôi E27) LBN-30V LUSCOM CNYAN: 30W ánh sáng vàng', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '12 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 19, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0164', 'gia_niem_yet', 109080.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 109.08, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0164', 'gia_khach_si', 87264.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 87.264, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0164', 'gia_thau_tho', 98172.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 98.172, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0164', 'gia_khach_le', 109080.0, 'co_vat', 'Giá khách lẻ', 109.08, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0164', 'gia_ban_mau', 70902.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 70.902, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0165', 'CNYAN', 'Đèn Led Bulb (trụ nhôm, đuôi E27) LBN-40T LUSCOM CNYAN: 40W ánh sáng trắng', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '12 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 20, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0165', 'gia_niem_yet', 164160.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 164.16, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0165', 'gia_khach_si', 131328.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 131.328, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0165', 'gia_thau_tho', 147744.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 147.744, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0165', 'gia_khach_le', 164160.0, 'co_vat', 'Giá khách lẻ', 164.16, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0165', 'gia_ban_mau', 106704.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 106.704, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0166', 'CNYAN', 'Đèn Led Bulb (trụ nhôm, đuôi E27) LBN-40V LUSCOM CNYAN: 40W ánh sáng vàng', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '12 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 21, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0166', 'gia_niem_yet', 164160.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 164.16, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0166', 'gia_khach_si', 131328.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 131.328, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0166', 'gia_thau_tho', 147744.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 147.744, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0166', 'gia_khach_le', 164160.0, 'co_vat', 'Giá khách lẻ', 164.16, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0166', 'gia_ban_mau', 106704.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 106.704, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0167', 'CNYAN', 'Đèn Led Bulb (trụ nhôm, đuôi E27) LBN-50T LUSCOM CNYAN: 50W ánh sáng trắng', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '8 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 22, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0167', 'gia_niem_yet', 194400.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 194.4, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0167', 'gia_khach_si', 155520.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 155.52, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0167', 'gia_thau_tho', 174960.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 174.96, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0167', 'gia_khach_le', 194400.0, 'co_vat', 'Giá khách lẻ', 194.4, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0167', 'gia_ban_mau', 126360.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 126.36, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0168', 'CNYAN', 'Đèn Led Bulb (trụ nhôm, đuôi E27) LBN-50V LUSCOM CNYAN: 50W ánh sáng vàng', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '8 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 23, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0168', 'gia_niem_yet', 194400.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 194.4, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0168', 'gia_khach_si', 155520.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 155.52, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0168', 'gia_thau_tho', 174960.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 174.96, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0168', 'gia_khach_le', 194400.0, 'co_vat', 'Giá khách lẻ', 194.4, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0168', 'gia_ban_mau', 126360.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 126.36, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0169', 'CNYAN', 'Đèn Led Bulb (trụ nhôm, đuôi E27) LBN-60T LUSCOM CNYAN: 60W ánh sáng trắng', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '8 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 24, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0169', 'gia_niem_yet', 291600.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 291.6, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0169', 'gia_khach_si', 233280.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 233.28, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0169', 'gia_thau_tho', 262440.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 262.44, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0169', 'gia_khach_le', 291600.0, 'co_vat', 'Giá khách lẻ', 291.6, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0169', 'gia_ban_mau', 189540.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 189.54, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0170', 'CNYAN', 'Đèn Led Bulb (trụ nhôm, đuôi E27) LBN-80T LUSCOM CNYAN: 80W ánh sáng trắng', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '8 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 25, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0170', 'gia_niem_yet', 395280.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 395.28, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0170', 'gia_khach_si', 316224.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 316.224, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0170', 'gia_thau_tho', 355752.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 355.752, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0170', 'gia_khach_le', 395280.0, 'co_vat', 'Giá khách lẻ', 395.28, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0170', 'gia_ban_mau', 256932.00000000003, 'co_vat', 'Giá bán mẫu (CK 35%)', 256.932, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0171', 'CNTWI', 'Đèn Led Panel âm trần (đổi màu) RP-7CC LUSCOM CNTWI: 7W/3CCT', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '60 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ. SL mẫu: 60 cái/ mẫu', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 29, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0171', 'gia_niem_yet', 108000.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 108.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0171', 'gia_khach_si', 86400.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 86.4, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0171', 'gia_thau_tho', 97200.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 97.2, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0171', 'gia_khach_le', 108000.0, 'co_vat', 'Giá khách lẻ', 108.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0171', 'gia_ban_mau', 70200.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 70.2, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0172', 'CNTWI', 'Đèn Led Panel âm trần (đổi màu) RP-9CC LUSCOM CNTWI: 9W/3CCT', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '40 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 30, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0172', 'gia_niem_yet', 113400.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 113.4, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0172', 'gia_khach_si', 90720.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 90.72, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0172', 'gia_thau_tho', 102060.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 102.06, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0172', 'gia_khach_le', 113400.0, 'co_vat', 'Giá khách lẻ', 113.4, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0172', 'gia_ban_mau', 73710.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 73.71, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0173', 'CNTWI', 'Đèn Led Panel âm trần (đổi màu) RP-12CC LUSCOM CNTWI: 12W/3CCT', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '40 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 31, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0173', 'gia_niem_yet', 129600.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 129.6, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0173', 'gia_khach_si', 103680.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 103.68, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0173', 'gia_thau_tho', 116640.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 116.64, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0173', 'gia_khach_le', 129600.0, 'co_vat', 'Giá khách lẻ', 129.6, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0173', 'gia_ban_mau', 84240.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 84.24, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0174', 'CNTWI', 'Đèn Led Panel âm trần (đổi màu, viền vàng) RP-7CC/G LUSCOM CNTWI: 7W/3CCT', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '60 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 32, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0174', 'gia_niem_yet', 113400.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 113.4, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0174', 'gia_khach_si', 90720.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 90.72, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0174', 'gia_thau_tho', 102060.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 102.06, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0174', 'gia_khach_le', 113400.0, 'co_vat', 'Giá khách lẻ', 113.4, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0174', 'gia_ban_mau', 73710.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 73.71, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0175', 'CNTWI', 'Đèn Led Panel âm trần (đổi màu, viền vàng) RP-9CC/G LUSCOM CNTWI: 9W/3CCT', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '40 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 33, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0175', 'gia_niem_yet', 129600.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 129.6, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0175', 'gia_khach_si', 103680.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 103.68, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0175', 'gia_thau_tho', 116640.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 116.64, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0175', 'gia_khach_le', 129600.0, 'co_vat', 'Giá khách lẻ', 129.6, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0175', 'gia_ban_mau', 84240.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 84.24, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0176', 'CNTWI', 'Đèn Led Panel âm trần (đổi màu, viền vàng) RP-12CC/G LUSCOM CNTWI: 12W/3CCT', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '40 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 34, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0176', 'gia_niem_yet', 135000.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 135.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0176', 'gia_khach_si', 108000.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 108.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0176', 'gia_thau_tho', 121500.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 121.5, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0176', 'gia_khach_le', 135000.0, 'co_vat', 'Giá khách lẻ', 135.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0176', 'gia_ban_mau', 87750.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 87.75, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0177', 'CNTWI', 'Đèn Led Panel âm trần (đổi màu, viền bạc) RP-7CC/S LUSCOM CNTWI: 7W/3CCT', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '60 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 35, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0177', 'gia_niem_yet', 113400.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 113.4, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0177', 'gia_khach_si', 90720.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 90.72, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0177', 'gia_thau_tho', 102060.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 102.06, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0177', 'gia_khach_le', 113400.0, 'co_vat', 'Giá khách lẻ', 113.4, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0177', 'gia_ban_mau', 73710.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 73.71, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0178', 'CNTWI', 'Đèn Led Panel âm trần (đổi màu, viền bạc) RP-9CC/S LUSCOM CNTWI: 9W/3CCT', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '40 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 36, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0178', 'gia_niem_yet', 129600.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 129.6, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0178', 'gia_khach_si', 103680.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 103.68, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0178', 'gia_thau_tho', 116640.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 116.64, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0178', 'gia_khach_le', 129600.0, 'co_vat', 'Giá khách lẻ', 129.6, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0178', 'gia_ban_mau', 84240.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 84.24, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0179', 'CNTWI', 'Đèn Led Panel âm trần (đổi màu, viền bạc) RP-12CC/S LUSCOM CNTWI: 12W/3CCT', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '40 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 37, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0179', 'gia_niem_yet', 135000.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 135.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0179', 'gia_khach_si', 108000.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 108.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0179', 'gia_thau_tho', 121500.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 121.5, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0179', 'gia_khach_le', 135000.0, 'co_vat', 'Giá khách lẻ', 135.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0179', 'gia_ban_mau', 87750.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 87.75, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0180', 'CNTWI', 'Đèn Led Panel âm trần RP-7V LUSCOM CNTWI: 7W ánh sáng vàng', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '60 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 38, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0180', 'gia_niem_yet', 81000.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 81.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0180', 'gia_khach_si', 64800.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 64.8, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0180', 'gia_thau_tho', 72900.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 72.9, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0180', 'gia_khach_le', 81000.0, 'co_vat', 'Giá khách lẻ', 81.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0180', 'gia_ban_mau', 52650.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 52.65, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0181', 'CNTWI', 'Đèn Led Panel âm trần RP-7T LUSCOM CNTWI: 7W ánh sáng trắng', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '60 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 39, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0181', 'gia_niem_yet', 81000.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 81.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0181', 'gia_khach_si', 64800.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 64.8, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0181', 'gia_thau_tho', 72900.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 72.9, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0181', 'gia_khach_le', 81000.0, 'co_vat', 'Giá khách lẻ', 81.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0181', 'gia_ban_mau', 52650.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 52.65, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0182', 'CNTWI', 'Đèn Led Panel âm trần RP-9V LUSCOM CNTWI: 9W ánh sáng vàng', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '40 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 40, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0182', 'gia_niem_yet', 91800.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 91.8, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0182', 'gia_khach_si', 73440.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 73.44, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0182', 'gia_thau_tho', 82620.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 82.62, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0182', 'gia_khach_le', 91800.0, 'co_vat', 'Giá khách lẻ', 91.8, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0182', 'gia_ban_mau', 59670.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 59.67, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0183', 'CNTWI', 'Đèn Led Panel âm trần RP-9T LUSCOM CNTWI: 9W ánh sáng trắng', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '40 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 41, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0183', 'gia_niem_yet', 91800.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 91.8, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0183', 'gia_khach_si', 73440.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 73.44, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0183', 'gia_thau_tho', 82620.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 82.62, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0183', 'gia_khach_le', 91800.0, 'co_vat', 'Giá khách lẻ', 91.8, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0183', 'gia_ban_mau', 59670.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 59.67, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0184', 'CNTWI', 'Đèn Led Panel âm trần RP-12V LUSCOM CNTWI: 12W ánh sáng vàng', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '40 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 42, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0184', 'gia_niem_yet', 124200.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 124.2, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0184', 'gia_khach_si', 99360.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 99.36, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0184', 'gia_thau_tho', 111780.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 111.78, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0184', 'gia_khach_le', 124200.0, 'co_vat', 'Giá khách lẻ', 124.2, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0184', 'gia_ban_mau', 80730.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 80.73, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0185', 'CNTWI', 'Đèn Led Panel âm trần RP-12T LUSCOM CNTWI: 12W ánh sáng trắng', 'CAT-10', 'BR-03', 'LED BULB', '', 'Cái', '40 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 43, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0185', 'gia_niem_yet', 124200.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 124.2, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0185', 'gia_khach_si', 99360.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 99.36, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0185', 'gia_thau_tho', 111780.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 111.78, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0185', 'gia_khach_le', 124200.0, 'co_vat', 'Giá khách lẻ', 124.2, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0185', 'gia_ban_mau', 80730.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 80.73, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0186', 'CNSHI', 'Đèn Led Panel SP-40T LUSCOM CNSHI: 40W ánh sáng trắng', 'CAT-10', 'BR-03', 'BẢNG GIÁ ĐÈN PANEL VUÔNG LUSCOM', '', 'Cái', '6 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ. SL mẫu: 60 cái', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'ĐÈN ĐIỆN', 47, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0186', 'gia_niem_yet', 365040000.0, 'co_vat', 'Giá niêm yết (Đã có VAT)', 365040.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0186', 'gia_khach_si', 292032000.0, 'co_vat', 'Giá khách sỉ (CK 20%)', 292032.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0186', 'gia_thau_tho', 328536000.0, 'co_vat', 'Giá thầu thợ (CK 10%)', 328536.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0186', 'gia_khach_le', 365040000.0, 'co_vat', 'Giá khách lẻ', 365040.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0186', 'gia_ban_mau', 237276000.0, 'co_vat', 'Giá bán mẫu (CK 35%)', 237276.0, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0187', 'CNSAN', 'TẤM XI MĂNG CNSAN: 2440mmx1220mmx6.00mm', 'CAT-14', 'BR-01', 'TẤM XI MĂNG CNSAN', '2440mmx1220mmx6.00mm', 'Tấm', '27,7 Kg/Tấm, Kiện ngang: 102, Kiện dọc: 140', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'TMX', 3, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0187', 'gia_niem_yet', 280000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0187', 'gia_khach_si', 226800.0, 'co_vat', 'Giá khách sỉ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0187', 'gia_thau_tho', 257040.0, 'co_vat', 'Giá thầu thợ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0187', 'gia_khach_le', 293328.0, 'co_vat', 'Giá khách lẻ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0187', 'gia_ban_mau', 196560.0, 'co_vat', 'Giá bán mẫu (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0188', 'CNSAN', 'TẤM XI MĂNG CNSAN: 2440mmx1220mmx8.00mm', 'CAT-14', 'BR-01', 'TẤM XI MĂNG CNSAN', '2440mmx1220mmx8.00mm', 'Tấm', '37,0 Kg/Tấm, Kiện ngang: 77, Kiện dọc: 105', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'TMX', 4, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0188', 'gia_niem_yet', 371000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0188', 'gia_khach_si', 300510.0, 'co_vat', 'Giá khách sỉ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0188', 'gia_thau_tho', 340578.0, 'co_vat', 'Giá thầu thợ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0188', 'gia_khach_le', 388659.6, 'co_vat', 'Giá khách lẻ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0188', 'gia_ban_mau', 260442.0, 'co_vat', 'Giá bán mẫu (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0189', 'CNSAN', 'TẤM XI MĂNG CNSAN: 2440mmx1220mmx10.00mm', 'CAT-14', 'BR-01', 'TẤM XI MĂNG CNSAN', '2440mmx1220mmx10.00mm', 'Tấm', '46,2 Kg/Tấm, Kiện ngang: 61, Kiện dọc: 84', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'TMX', 5, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0189', 'gia_niem_yet', 451000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0189', 'gia_khach_si', 365310.0, 'co_vat', 'Giá khách sỉ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0189', 'gia_thau_tho', 414018.0, 'co_vat', 'Giá thầu thợ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0189', 'gia_khach_le', 472467.6, 'co_vat', 'Giá khách lẻ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0189', 'gia_ban_mau', 316602.0, 'co_vat', 'Giá bán mẫu (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0190', 'CNSAN', 'TẤM XI MĂNG CNSAN: 2440mmx1220mmx12.00mm', 'CAT-14', 'BR-01', 'TẤM XI MĂNG CNSAN', '2440mmx1220mmx12.00mm', 'Tấm', '55,5 Kg/Tấm, Kiện ngang: 51, Kiện dọc: 70', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'TMX', 6, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0190', 'gia_niem_yet', 541000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0190', 'gia_khach_si', 438210.0, 'co_vat', 'Giá khách sỉ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0190', 'gia_thau_tho', 496638.0, 'co_vat', 'Giá thầu thợ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0190', 'gia_khach_le', 566751.6, 'co_vat', 'Giá khách lẻ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0190', 'gia_ban_mau', 379782.0, 'co_vat', 'Giá bán mẫu (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0191', 'CNSAN', 'TẤM XI MĂNG CNSAN: 2440mmx1220mmx14.00mm', 'CAT-14', 'BR-01', 'TẤM XI MĂNG CNSAN', '2440mmx1220mmx14.00mm', 'Tấm', '64,7 Kg/Tấm, Kiện ngang: 43, Kiện dọc: 53', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'TMX', 7, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0191', 'gia_niem_yet', 640000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0191', 'gia_khach_si', 518400.0, 'co_vat', 'Giá khách sỉ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0191', 'gia_thau_tho', 587520.0, 'co_vat', 'Giá thầu thợ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0191', 'gia_khach_le', 670464.0, 'co_vat', 'Giá khách lẻ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0191', 'gia_ban_mau', 449280.0, 'co_vat', 'Giá bán mẫu (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0192', 'CNSAN', 'TẤM XI MĂNG CNSAN: 2440mmx1220mmx16.00mm', 'CAT-14', 'BR-01', 'TẤM XI MĂNG CNSAN', '2440mmx1220mmx16.00mm', 'Tấm', '74,0 Kg/Tấm, Kiện ngang: 38, Kiện dọc: 47', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'TMX', 8, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0192', 'gia_niem_yet', 725000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0192', 'gia_khach_si', 587250.0, 'co_vat', 'Giá khách sỉ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0192', 'gia_thau_tho', 665550.0, 'co_vat', 'Giá thầu thợ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0192', 'gia_khach_le', 759510.0, 'co_vat', 'Giá khách lẻ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0192', 'gia_ban_mau', 508950.0, 'co_vat', 'Giá bán mẫu (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0193', 'CNSAN', 'TẤM XI MĂNG CNSAN: 2440mmx1220mmx18.00mm', 'CAT-14', 'BR-01', 'TẤM XI MĂNG CNSAN', '2440mmx1220mmx18.00mm', 'Tấm', '83,2 Kg/Tấm, Kiện ngang: 34, Kiện dọc: 41', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'TMX', 9, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0193', 'gia_niem_yet', 820000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0193', 'gia_khach_si', 664200.0, 'co_vat', 'Giá khách sỉ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0193', 'gia_thau_tho', 752760.0, 'co_vat', 'Giá thầu thợ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0193', 'gia_khach_le', 859032.0, 'co_vat', 'Giá khách lẻ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0193', 'gia_ban_mau', 575640.0, 'co_vat', 'Giá bán mẫu (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0194', 'CNSAN', 'TẤM XI MĂNG CNSAN: 2440mmx1220mmx20.00mm', 'CAT-14', 'BR-01', 'TẤM XI MĂNG CNSAN', '2440mmx1220mmx20.00mm', 'Tấm', 'None Kg/Tấm, Kiện ngang: 30, Kiện dọc: 37', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'TMX', 10, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0194', 'gia_niem_yet', 950000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0194', 'gia_khach_si', 769500.0, 'co_vat', 'Giá khách sỉ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0194', 'gia_thau_tho', 872100.0, 'co_vat', 'Giá thầu thợ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0194', 'gia_khach_le', 995220.0, 'co_vat', 'Giá khách lẻ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0194', 'gia_ban_mau', 666900.0, 'co_vat', 'Giá bán mẫu (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0195', 'THDIA', 'TẤM XI MĂNG THDIA: 2440mmx1220mmx6.00mm', 'CAT-14', 'BR-01', 'TẤM XI MĂNG THDIA', '2440mmx1220mmx6.00mm', 'Tấm', '26 Kg/Tấm, Kiện ngang: 98, Kiện dọc: 118', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'TMX', 14, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0195', 'gia_niem_yet', 278000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0195', 'gia_khach_si', 234187.2, 'co_vat', 'Giá khách sỉ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0195', 'gia_thau_tho', 264211.2, 'co_vat', 'Giá thầu thợ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0195', 'gia_khach_le', 294235.2, 'co_vat', 'Giá khách lẻ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0195', 'gia_ban_mau', 195156.0, 'co_vat', 'Giá bán mẫu (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0196', 'THDIA', 'TẤM XI MĂNG THDIA: 2440mmx1220mmx8.00mm', 'CAT-14', 'BR-01', 'TẤM XI MĂNG THDIA', '2440mmx1220mmx8.00mm', 'Tấm', '36 Kg/Tấm, Kiện ngang: 74, Kiện dọc: 87', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'TMX', 15, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0196', 'gia_niem_yet', 371000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0196', 'gia_khach_si', 312530.4, 'co_vat', 'Giá khách sỉ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0196', 'gia_thau_tho', 352598.4, 'co_vat', 'Giá thầu thợ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0196', 'gia_khach_le', 392666.4, 'co_vat', 'Giá khách lẻ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0196', 'gia_ban_mau', 260442.0, 'co_vat', 'Giá bán mẫu (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0197', 'THDIA', 'TẤM XI MĂNG THDIA: 2440mmx1220mmx14.00mm', 'CAT-14', 'BR-01', 'TẤM XI MĂNG THDIA', '2440mmx1220mmx14.00mm', 'Tấm', '65 Kg/Tấm, Kiện ngang: 42, Kiện dọc: 50', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'TMX', 16, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0197', 'gia_niem_yet', 630000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0197', 'gia_khach_si', 530712.0, 'co_vat', 'Giá khách sỉ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0197', 'gia_thau_tho', 598752.0, 'co_vat', 'Giá thầu thợ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0197', 'gia_khach_le', 666792.0, 'co_vat', 'Giá khách lẻ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0197', 'gia_ban_mau', 442260.0, 'co_vat', 'Giá bán mẫu (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0198', 'THDIA', 'TẤM XI MĂNG THDIA: 2440mmx1220mmx16.00mm', 'CAT-14', 'BR-01', 'TẤM XI MĂNG THDIA', '2440mmx1220mmx16.00mm', 'Tấm', '75 Kg/Tấm, Kiện ngang: 37, Kiện dọc: 44', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'TMX', 17, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0198', 'gia_niem_yet', 708000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0198', 'gia_khach_si', 596419.2, 'co_vat', 'Giá khách sỉ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0198', 'gia_thau_tho', 672883.2, 'co_vat', 'Giá thầu thợ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0198', 'gia_khach_le', 749347.2, 'co_vat', 'Giá khách lẻ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0198', 'gia_ban_mau', 497016.0, 'co_vat', 'Giá bán mẫu (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0199', 'THDIA', 'TẤM XI MĂNG THDIA: 2440mmx1220mmx18.00mm', 'CAT-14', 'BR-01', 'TẤM XI MĂNG THDIA', '2440mmx1220mmx18.00mm', 'Tấm', '85 Kg/Tấm, Kiện ngang: 33, Kiện dọc: 38', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'TMX', 18, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0199', 'gia_niem_yet', 825000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0199', 'gia_khach_si', 694980.0, 'co_vat', 'Giá khách sỉ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0199', 'gia_thau_tho', 784080.0, 'co_vat', 'Giá thầu thợ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0199', 'gia_khach_le', 873180.0, 'co_vat', 'Giá khách lẻ (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0199', 'gia_ban_mau', 579150.0, 'co_vat', 'Giá bán mẫu (có VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0200', 'VNDON', 'Chất chống thấm pha xi măng sàn LUSCOAT VNDON - 5KG', 'CAT-04', 'BR-02', 'Chất chống thấm pha xi măng sàn LUSCOAT VNDON', 'Khối lượng: 5KG', 'Lon', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CHỐNG THẤM', 3, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0200', 'gia_niem_yet', 500000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0200', 'gia_khach_si', 432000.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0200', 'gia_thau_tho', 486000.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0200', 'gia_khach_le', 540000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0200', 'gia_ban_mau', 351000.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0201', 'VNDON', 'Chất chống thấm pha xi măng sàn LUSCOAT VNDON - 20KG', 'CAT-04', 'BR-02', 'Chất chống thấm pha xi măng sàn LUSCOAT VNDON', 'Khối lượng: 20KG', 'THÙNG', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CHỐNG THẤM', 4, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0201', 'gia_niem_yet', 1800000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0201', 'gia_khach_si', 1555200.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0201', 'gia_thau_tho', 1749600.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0201', 'gia_khach_le', 1944000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0201', 'gia_ban_mau', 1263600.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0202', 'VNDON', 'Chất chống thấm pha xi măng tường LUSCOAT VNDON - 5KG', 'CAT-04', 'BR-02', 'Chất chống thấm pha xi măng tường LUSCOAT VNDON', 'Khối lượng: 5KG', 'Lon', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CHỐNG THẤM', 5, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0202', 'gia_niem_yet', 500000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0202', 'gia_khach_si', 432000.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0202', 'gia_thau_tho', 486000.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0202', 'gia_khach_le', 540000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0202', 'gia_ban_mau', 351000.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0203', 'VNDON', 'Chất chống thấm pha xi măng tường LUSCOAT VNDON - 20KG', 'CAT-04', 'BR-02', 'Chất chống thấm pha xi măng tường LUSCOAT VNDON', 'Khối lượng: 20KG', 'THÙNG', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CHỐNG THẤM', 6, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0203', 'gia_niem_yet', 1800000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0203', 'gia_khach_si', 1555200.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0203', 'gia_thau_tho', 1749600.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0203', 'gia_khach_le', 1944000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0203', 'gia_ban_mau', 1263600.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0204', 'CNYUH', 'Chống thấm màu trắng sứ LUSCOAT CNYUH: 5Kg - 5KG', 'CAT-04', 'BR-02', 'Chống thấm màu trắng sứ LUSCOAT CNYUH: 5Kg', 'Khối lượng: 5KG', 'LON', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CHỐNG THẤM', 7, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0204', 'gia_niem_yet', 650000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0204', 'gia_khach_si', 561600.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0204', 'gia_thau_tho', 631800.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0204', 'gia_khach_le', 702000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0204', 'gia_ban_mau', 456300.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0205', 'CNYUH', 'Chống thấm màu xám đậm LUSCOAT CNYUH: 5Kg - 5KG', 'CAT-04', 'BR-02', 'Chống thấm màu xám đậm LUSCOAT CNYUH: 5Kg', 'Khối lượng: 5KG', 'LON', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CHỐNG THẤM', 8, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0205', 'gia_niem_yet', 650000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0205', 'gia_khach_si', 561600.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0205', 'gia_thau_tho', 631800.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0205', 'gia_khach_le', 702000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0205', 'gia_ban_mau', 456300.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0206', 'CNYUH', 'Chống thấm màu xám nhạt LUSCOAT CNYUH: 5Kg - 5KG', 'CAT-04', 'BR-02', 'Chống thấm màu xám nhạt LUSCOAT CNYUH: 5Kg', 'Khối lượng: 5KG', 'LON', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CHỐNG THẤM', 9, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0206', 'gia_niem_yet', 650000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0206', 'gia_khach_si', 561600.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0206', 'gia_thau_tho', 631800.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0206', 'gia_khach_le', 702000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0206', 'gia_ban_mau', 456300.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0207', 'CNYUH', 'Chống thấm màu trắng sứ LUSCOAT CNYUH: 20Kg - 20KG', 'CAT-04', 'BR-02', 'Chống thấm màu trắng sứ LUSCOAT CNYUH: 20Kg', 'Khối lượng: 20KG', 'THÙNG', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CHỐNG THẤM', 10, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0207', 'gia_niem_yet', 2000000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0207', 'gia_khach_si', 1728000.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0207', 'gia_thau_tho', 1944000.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0207', 'gia_khach_le', 2160000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0207', 'gia_ban_mau', 1404000.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0208', 'CNYUH', 'Chống thấm màu xám đậm LUSCOAT CNYUH: 20Kg - 20KG', 'CAT-04', 'BR-02', 'Chống thấm màu xám đậm LUSCOAT CNYUH: 20Kg', 'Khối lượng: 20KG', 'THÙNG', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CHỐNG THẤM', 11, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0208', 'gia_niem_yet', 2000000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0208', 'gia_khach_si', 1728000.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0208', 'gia_thau_tho', 1944000.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0208', 'gia_khach_le', 2160000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0208', 'gia_ban_mau', 1404000.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0209', 'CNYUH', 'Chống thấm màu xám nhạt LUSCOAT CNYUH: 20Kg - 20KG', 'CAT-04', 'BR-02', 'Chống thấm màu xám nhạt LUSCOAT CNYUH: 20Kg', 'Khối lượng: 20KG', 'THÙNG', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CHỐNG THẤM', 12, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0209', 'gia_niem_yet', 2000000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0209', 'gia_khach_si', 1728000.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0209', 'gia_thau_tho', 1944000.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0209', 'gia_khach_le', 2160000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0209', 'gia_ban_mau', 1404000.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0210', 'WB6400A', 'Xe rùa bánh hơi WB6400A LUSFIX CNYIC: 150kgx67lít', 'CAT-18', 'BR-04', 'Xe rùa LUSFIX', 'Dung tích: 67 LIT', 'CHIẾC', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'LUSFIX', 3, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0210', 'gia_niem_yet', 875000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0210', 'gia_khach_si', 756000.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0210', 'gia_thau_tho', 850500.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0210', 'gia_khach_le', 945000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0210', 'gia_ban_mau', 614250.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0211', 'WB6400PU', 'Xe rùa bánh đặc WB6400PU LUSFIX CNYIC: 150kgx67lít', 'CAT-18', 'BR-04', 'Xe rùa LUSFIX', 'Dung tích: 67 LIT', 'CHIẾC', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'LUSFIX', 4, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0211', 'gia_niem_yet', 960000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0211', 'gia_khach_si', 829440.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0211', 'gia_thau_tho', 933120.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0211', 'gia_khach_le', 1036800.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0211', 'gia_ban_mau', 673920.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0212', 'WB6418A', 'Xe rùa bánh hơi WB6418A LUSFIX CNYIC: 150kgx85lít', 'CAT-18', 'BR-04', 'Xe rùa LUSFIX', 'Dung tích: 85 LIT', 'CHIẾC', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'LUSFIX', 5, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0212', 'gia_niem_yet', 1175000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0212', 'gia_khach_si', 1015200.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0212', 'gia_thau_tho', 1142100.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0212', 'gia_khach_le', 1269000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0212', 'gia_ban_mau', 824850.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0213', 'WB6418PU', 'Xe rùa bánh đặc WB6418PU LUSFIX CNYIC: 150kgx85lít', 'CAT-18', 'BR-04', 'Xe rùa LUSFIX', 'Dung tích: 85 LIT', 'CHIẾC', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'LUSFIX', 6, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0213', 'gia_niem_yet', 1290000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0213', 'gia_khach_si', 1114560.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0213', 'gia_thau_tho', 1253880.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0213', 'gia_khach_le', 1393200.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0213', 'gia_ban_mau', 905580.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0214', 'CNSEN', 'Đá mài đa năng màu xanh lá LUSFIX CNSEN: 100mmx6mmx16mm', 'CAT-19', 'BR-04', 'Đá cắt - Đá mài LUSFIX', '', 'Viên', '25 Viên/Hộp, 8 Hộp/Thùng', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'LUSFIX', 10, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0214', 'gia_niem_yet', 8000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0214', 'gia_khach_si', 6912.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0214', 'gia_thau_tho', 7776.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0214', 'gia_khach_le', 8640.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0214', 'gia_ban_mau', 5616.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0215', 'CNSEN', 'Đá cắt đa năng màu xanh lá LUSFIX CNSEN: 107mmx1.2mmx16mm', 'CAT-19', 'BR-04', 'Đá cắt - Đá mài LUSFIX', '', 'Viên', '50 Viên/Hộp, 20 Hộp/Thùng', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'LUSFIX', 11, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0215', 'gia_niem_yet', 3800.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0215', 'gia_khach_si', 3283.2, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0215', 'gia_thau_tho', 3693.6, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0215', 'gia_khach_le', 4104.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0215', 'gia_ban_mau', 2667.6, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0216', 'CNSEN', 'Đá cắt đa năng màu xanh lá LUSFIX CNSEN: 355mmx2.5mmx25.4mm', 'CAT-19', 'BR-04', 'Đá cắt - Đá mài LUSFIX', '', 'Viên', '25 Viên/Hộp, 1 Hộp/Thùng', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'LUSFIX', 12, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0216', 'gia_niem_yet', 38700.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0216', 'gia_khach_si', 33436.8, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0216', 'gia_thau_tho', 37616.4, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0216', 'gia_khach_le', 41796.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0216', 'gia_ban_mau', 27167.4, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0217', 'MCTV11', 'Mặt 1 công tắc 1 chiều (nút lớn) MCTV11 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ. SL mẫu: 100', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 3, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0217', 'gia_niem_yet', 49000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 49.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0217', 'gia_khach_si', 42336.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 42.336, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0217', 'gia_thau_tho', 47628.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 47.628, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0217', 'gia_khach_le', 52920.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 52.92, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0217', 'gia_ban_mau', 34398.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 34.398, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0218', 'MCTV12', 'Mặt 1 công tắc 2 chiều (nút lớn) MCTV12 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 4, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0218', 'gia_niem_yet', 52000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 52.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0218', 'gia_khach_si', 44928.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 44.928, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0218', 'gia_thau_tho', 50544.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 50.544, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0218', 'gia_khach_le', 56160.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 56.16, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0218', 'gia_ban_mau', 36504.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 36.504, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0219', 'MCTV2112', 'Mặt 2 công tắc 1 chiều (nút lớn, 1 vào, 2 ra) MCTV2112 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 5, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0219', 'gia_niem_yet', 63000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 63.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0219', 'gia_khach_si', 54432.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 54.432, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0219', 'gia_thau_tho', 61236.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 61.236, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0219', 'gia_khach_le', 68040.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 68.04, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0219', 'gia_ban_mau', 44226.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 44.226, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0220', 'MCTV22', 'Mặt 2 công tắc 2 chiều (nút lớn) MCTV22 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 6, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0220', 'gia_niem_yet', 65000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 65.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0220', 'gia_khach_si', 56160.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 56.16, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0220', 'gia_thau_tho', 63180.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 63.18, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0220', 'gia_khach_le', 70200.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 70.2, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0220', 'gia_ban_mau', 45630.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 45.63, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0221', 'MCTV2122', 'Mặt 2 công tắc 1 chiều (nút lớn, 2 vào, 2 ra) MCTV2122 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 7, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0221', 'gia_niem_yet', 63000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 63.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0221', 'gia_khach_si', 54432.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 54.432, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0221', 'gia_thau_tho', 61236.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 61.236, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0221', 'gia_khach_le', 68040.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 68.04, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0221', 'gia_ban_mau', 44226.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 44.226, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0222', 'MCTV31', 'Mặt 3 công tắc 1 chiều (nút lớn) MCTV31 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 8, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0222', 'gia_niem_yet', 69000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 69.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0222', 'gia_khach_si', 59616.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 59.616, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0222', 'gia_thau_tho', 67068.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 67.068, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0222', 'gia_khach_le', 74520.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 74.52, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0222', 'gia_ban_mau', 48438.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 48.438, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0223', 'MCTV32', 'Mặt 3 công tắc 2 chiều (nút lớn) MCTV32 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 9, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0223', 'gia_niem_yet', 73000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 73.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0223', 'gia_khach_si', 63072.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 63.072, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0223', 'gia_thau_tho', 70956.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 70.956, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0223', 'gia_khach_le', 78840.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 78.84, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0223', 'gia_ban_mau', 51246.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 51.246, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0224', 'MVCC', 'Mặt công tắc chuông cửa MVCC LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 10, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0224', 'gia_niem_yet', 76000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 76.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0224', 'gia_khach_si', 65664.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 65.664, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0224', 'gia_thau_tho', 73872.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 73.872, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0224', 'gia_khach_le', 82080.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 82.08, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0224', 'gia_ban_mau', 53352.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 53.352, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0225', 'MOC3CTN', 'Mặt 1 ổ cắm 3 chấu, 1 công tắc MF (đèn) MOC3CTN LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 11, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0225', 'gia_niem_yet', 62000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 62.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0225', 'gia_khach_si', 53568.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 53.568, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0225', 'gia_thau_tho', 60264.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 60.264, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0225', 'gia_khach_le', 66960.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 66.96, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0225', 'gia_ban_mau', 43524.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 43.524, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0226', 'MOC3-2CTN', 'Mặt 2 ổ cắm 3 chấu 2 chấu, 1 công tắc MF (đèn) MOC3-2CTN LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 12, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0226', 'gia_niem_yet', 185000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 185.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0226', 'gia_khach_si', 159840.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 159.84, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0226', 'gia_thau_tho', 179820.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 179.82, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0226', 'gia_khach_le', 199800.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 199.8, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0226', 'gia_ban_mau', 129870.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 129.87, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0227', 'MVTV', 'Ổ cắm TV MVTV LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 13, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0227', 'gia_niem_yet', 56000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 56.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0227', 'gia_khach_si', 48384.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 48.384, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0227', 'gia_thau_tho', 54432.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 54.432, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0227', 'gia_khach_le', 60480.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 60.48, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0227', 'gia_ban_mau', 39312.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 39.312, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0228', 'MVOI', 'Ổ cắm mạng MVOI LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 14, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0228', 'gia_niem_yet', 79000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 79.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0228', 'gia_khach_si', 68256.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 68.256, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0228', 'gia_thau_tho', 76788.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 76.788, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0228', 'gia_khach_le', 85320.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 85.32, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0228', 'gia_ban_mau', 55458.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 55.458, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0229', 'MVDF', 'Nút điều chỉnh quạt (cao cấp) MVDF LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '8 Cái/Hộp, 80 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 15, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0229', 'gia_niem_yet', 203000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 203.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0229', 'gia_khach_si', 175392.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 175.392, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0229', 'gia_thau_tho', 197316.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 197.316, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0229', 'gia_khach_le', 219240.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 219.24, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0229', 'gia_ban_mau', 142506.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 142.506, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0230', 'CNGOG', 'Nút điều chỉnh đèn led MVDL LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '8 Cái/Hộp, 80 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 16, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0230', 'gia_niem_yet', 203000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 203.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0230', 'gia_khach_si', 175392.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 175.392, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0230', 'gia_thau_tho', 197316.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 197.316, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0230', 'gia_khach_le', 219240.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 219.24, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0230', 'gia_ban_mau', 142506.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 142.506, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0231', 'CNGOG', 'Mặt 1 công tắc 1 chiều ACT11 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 17, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0231', 'gia_niem_yet', 26000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 26.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0231', 'gia_khach_si', 22464.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 22.464, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0231', 'gia_thau_tho', 25272.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 25.272, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0231', 'gia_khach_le', 28080.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 28.08, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0231', 'gia_ban_mau', 18252.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 18.252, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0232', 'CNGOG', 'Mặt 1 công tắc 2 chiều ACT12 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 18, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0232', 'gia_niem_yet', 35000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 35.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0232', 'gia_khach_si', 30240.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 30.24, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0232', 'gia_thau_tho', 34020.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 34.02, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0232', 'gia_khach_le', 37800.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 37.8, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0232', 'gia_ban_mau', 24570.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 24.57, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0233', 'CNGOG', 'Mặt 2 công tắc 1 chiều ACT21 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 19, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0233', 'gia_niem_yet', 37000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 37.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0233', 'gia_khach_si', 31968.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 31.968, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0233', 'gia_thau_tho', 35964.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 35.964, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0233', 'gia_khach_le', 39960.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 39.96, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0233', 'gia_ban_mau', 25974.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 25.974, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0234', 'CNGOG', 'Mặt 1 công tắc 1 chiều, 1 công tắc 2 chiều ACT1112 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 20, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0234', 'gia_niem_yet', 47000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 47.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0234', 'gia_khach_si', 40608.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 40.608, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0234', 'gia_thau_tho', 45684.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 45.684, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0234', 'gia_khach_le', 50760.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 50.76, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0234', 'gia_ban_mau', 32994.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 32.994, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0235', 'CNGOG', 'Mặt 2 công tắc 2 chiều ACT22 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 21, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0235', 'gia_niem_yet', 59000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 59.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0235', 'gia_khach_si', 50976.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 50.976, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0235', 'gia_thau_tho', 57348.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 57.348, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0235', 'gia_khach_le', 63720.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 63.72, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0235', 'gia_ban_mau', 41418.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 41.418, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0236', 'CNGOG', 'Mặt 3 công tắc 1 chiều ACT31 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 22, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0236', 'gia_niem_yet', 48000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 48.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0236', 'gia_khach_si', 41472.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 41.472, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0236', 'gia_thau_tho', 46656.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 46.656, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0236', 'gia_khach_le', 51840.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 51.84, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0236', 'gia_ban_mau', 33696.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 33.696, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0237', 'CNGOG', 'Mặt 2 công tắc 1 chiều, 1 công tắc 2 chiều ACT2112 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 23, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0237', 'gia_niem_yet', 58000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 58.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0237', 'gia_khach_si', 50112.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 50.112, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0237', 'gia_thau_tho', 56376.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 56.376, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0237', 'gia_khach_le', 62640.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 62.64, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0237', 'gia_ban_mau', 40716.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 40.716, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0238', 'CNGOG', 'Mặt 2 công tắc 2 chiều, 1 công tắc 1 chiều ACT2211 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 24, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0238', 'gia_niem_yet', 69000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 69.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0238', 'gia_khach_si', 59616.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 59.616, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0238', 'gia_thau_tho', 67068.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 67.068, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0238', 'gia_khach_le', 74520.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 74.52, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0238', 'gia_ban_mau', 48438.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 48.438, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0239', 'CNGOG', 'Mặt 2 ổ cắm 2 chấu AOC22 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 25, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0239', 'gia_niem_yet', 55000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 55.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0239', 'gia_khach_si', 47520.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 47.52, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0239', 'gia_thau_tho', 53460.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 53.46, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0239', 'gia_khach_le', 59400.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 59.4, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0239', 'gia_ban_mau', 38610.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 38.61, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0240', 'CNGOG', 'Mặt 2 ổ cắm 3 chấu AOC23 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 26, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0240', 'gia_niem_yet', 61000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 61.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0240', 'gia_khach_si', 52704.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 52.704, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0240', 'gia_thau_tho', 59292.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 59.292, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0240', 'gia_khach_le', 65880.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 65.88, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0240', 'gia_ban_mau', 42822.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 42.822, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0241', 'CNGOG', 'Mặt 1 ổ cắm 2 chấu, 1 ổ cắm 3 chấu đa năng AOC1213 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 27, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0241', 'gia_niem_yet', 65000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 65.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0241', 'gia_khach_si', 56160.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 56.16, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0241', 'gia_thau_tho', 63180.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 63.18, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0241', 'gia_khach_le', 70200.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 70.2, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0241', 'gia_ban_mau', 45630.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 45.63, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0242', 'CNGOG', 'Mặt 2 ổ cắm 2 chấu, 1 công tắc 1 chiều AOC22CT11 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 28, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0242', 'gia_niem_yet', 65000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 65.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0242', 'gia_khach_si', 56160.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 56.16, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0242', 'gia_thau_tho', 63180.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 63.18, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0242', 'gia_khach_le', 70200.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 70.2, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0242', 'gia_ban_mau', 45630.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 45.63, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0243', 'CNGOG', 'Mặt 1 ổ cắm 2 chấu, 1 ổ cắm TV AOC121TV LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 29, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0243', 'gia_niem_yet', 78000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 78.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0243', 'gia_khach_si', 67392.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 67.392, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0243', 'gia_thau_tho', 75816.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 75.816, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0243', 'gia_khach_le', 84240.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 84.24, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0243', 'gia_ban_mau', 54756.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 54.756, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0244', 'CNGOG', 'Mặt 1 ổ cắm 2 chấu, 1 công tắc 1 chiều AOC12CT11 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 30, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0244', 'gia_niem_yet', 45000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 45.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0244', 'gia_khach_si', 38880.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 38.88, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0244', 'gia_thau_tho', 43740.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 43.74, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0244', 'gia_khach_le', 48600.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 48.6, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0244', 'gia_ban_mau', 31590.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 31.59, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0245', 'CNGOG', 'Mặt 1 ổ cắm 2 chấu, 1 công tắc 2 chiều AOC12CT12 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 31, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0245', 'gia_niem_yet', 58000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 58.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0245', 'gia_khach_si', 50112.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 50.112, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0245', 'gia_thau_tho', 56376.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 56.376, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0245', 'gia_khach_le', 62640.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 62.64, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0245', 'gia_ban_mau', 40716.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 40.716, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0246', 'CNGOG', 'Mặt 1 ổ cắm 3 chấu, 1 công tắc 1 chiều AOC13CT11 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 32, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0246', 'gia_niem_yet', 58000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 58.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0246', 'gia_khach_si', 50112.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 50.112, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0246', 'gia_thau_tho', 56376.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 56.376, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0246', 'gia_khach_le', 62640.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 62.64, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0246', 'gia_ban_mau', 40716.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 40.716, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0247', 'CNGOG', 'Mặt 1 ổ cắm 3 chấu, 1 công tắc 2 chiều AOC13CT12 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 33, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0247', 'gia_niem_yet', 69000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 69.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0247', 'gia_khach_si', 59616.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 59.616, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0247', 'gia_thau_tho', 67068.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 67.068, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0247', 'gia_khach_le', 74520.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 74.52, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0247', 'gia_ban_mau', 48438.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 48.438, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0248', 'CNGOG', 'Mặt 1 ổ cắm 2 chấu, 2 công tắc 1 chiều AOC12CT21 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 34, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0248', 'gia_niem_yet', 52000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 52.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0248', 'gia_khach_si', 44928.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 44.928, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0248', 'gia_thau_tho', 50544.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 50.544, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0248', 'gia_khach_le', 56160.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 56.16, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0248', 'gia_ban_mau', 36504.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 36.504, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0249', 'CNGOG', 'Mặt 1 ổ cắm 2 chấu, 2 công tắc 2 chiều AOC12CT22 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '10 Cái/Hộp, 100 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 35, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0249', 'gia_niem_yet', 75000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 75.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0249', 'gia_khach_si', 64800.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 64.8, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0249', 'gia_thau_tho', 72900.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 72.9, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0249', 'gia_khach_le', 81000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 81.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0249', 'gia_ban_mau', 52650.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 52.65, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0250', 'CNGOG', 'Công tắc đơn 1 chiều CT11 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '48 Cái/Hộp, 480 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 36, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0250', 'gia_niem_yet', 12000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 12.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0250', 'gia_khach_si', 10368.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 10.368, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0250', 'gia_thau_tho', 11664.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 11.664, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0250', 'gia_khach_le', 12960.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 12.96, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0250', 'gia_ban_mau', 8424.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 8.424, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0251', 'CNGOG', 'Công tắc đơn 2 chiều CT12 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '48 Cái/Hộp, 480 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 37, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0251', 'gia_niem_yet', 25000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 25.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0251', 'gia_khach_si', 21600.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 21.6, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0251', 'gia_thau_tho', 24300.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 24.3, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0251', 'gia_khach_le', 27000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 27.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0251', 'gia_ban_mau', 17550.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 17.55, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0252', 'CNGOG', 'Công tắc đảo chiều CT13 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '48 Cái/Hộp, 480 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 38, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0252', 'gia_niem_yet', 31000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 31.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0252', 'gia_khach_si', 26784.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 26.784, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0252', 'gia_thau_tho', 30132.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 30.132, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0252', 'gia_khach_le', 33480.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 33.48, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0252', 'gia_ban_mau', 21762.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 21.762, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0253', 'CNGOG', 'Chuông cửa DB LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '48 Cái/Hộp, 480 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 39, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0253', 'gia_niem_yet', 40000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 40.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0253', 'gia_khach_si', 34560.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 34.56, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0253', 'gia_thau_tho', 38880.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 38.88, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0253', 'gia_khach_le', 43200.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 43.2, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0253', 'gia_ban_mau', 28080.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 28.08, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0254', 'CNGOG', 'Ổ cắm 2 chấu nhỏ OC2 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '48 Cái/Hộp, 480 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 40, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0254', 'gia_niem_yet', 23000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 23.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0254', 'gia_khach_si', 19872.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 19.872, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0254', 'gia_thau_tho', 22356.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 22.356, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0254', 'gia_khach_le', 24840.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 24.84, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0254', 'gia_ban_mau', 16146.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 16.146, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0255', 'CNGOG', 'Ổ cắm 3 chấu nhỏ OC3 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '48 Cái/Hộp, 480 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 41, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0255', 'gia_niem_yet', 39000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 39.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0255', 'gia_khach_si', 33696.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 33.696, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0255', 'gia_thau_tho', 37908.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 37.908, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0255', 'gia_khach_le', 42120.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 42.12, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0255', 'gia_ban_mau', 27378.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 27.378, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0256', 'CNGOG', 'Ổ cắm 3 chấu đa năng nhỏ OC3ĐN LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '32 Cái/Hộp, 420 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 42, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0256', 'gia_niem_yet', 33000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 33.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0256', 'gia_khach_si', 28512.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 28.512, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0256', 'gia_thau_tho', 32076.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 32.076, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0256', 'gia_khach_le', 35640.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 35.64, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0256', 'gia_ban_mau', 23166.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 23.166, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0257', 'CNGOG', 'Ổ cắm đôi 3 chấu OC23 LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '20 Cái/Hộp, 200 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 43, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0257', 'gia_niem_yet', 58000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 58.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0257', 'gia_khach_si', 50112.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 50.112, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0257', 'gia_thau_tho', 56376.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 56.376, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0257', 'gia_khach_le', 62640.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 62.64, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0257', 'gia_ban_mau', 40716.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 40.716, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0258', 'CNGOG', 'Mặt 1 thiết bị vừa MCN1TB LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '20 Cái/Hộp, 200 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 44, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0258', 'gia_niem_yet', 14000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 14.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0258', 'gia_khach_si', 12096.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 12.096, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0258', 'gia_thau_tho', 13608.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 13.608, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0258', 'gia_khach_le', 15120.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 15.12, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0258', 'gia_ban_mau', 9828.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 9.828, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0259', 'CNGOG', 'Mặt 1 thiết bị nhỏ MCN1TBN LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '20 Cái/Hộp, 200 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 45, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0259', 'gia_niem_yet', 14000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 14.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0259', 'gia_khach_si', 12096.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 12.096, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0259', 'gia_thau_tho', 13608.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 13.608, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0259', 'gia_khach_le', 15120.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 15.12, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0259', 'gia_ban_mau', 9828.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 9.828, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0260', 'CNGOG', 'Mặt 2 thiết bị nhỏ MCN2TB LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '20 Cái/Hộp, 200 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 46, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0260', 'gia_niem_yet', 14000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 14.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0260', 'gia_khach_si', 12096.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 12.096, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0260', 'gia_thau_tho', 13608.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 13.608, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0260', 'gia_khach_le', 15120.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 15.12, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0260', 'gia_ban_mau', 9828.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 9.828, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0261', 'CNGOG', 'Mặt 3 thiết bị nhỏ MCN3TB LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '20 Cái/Hộp, 200 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 47, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0261', 'gia_niem_yet', 14000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 14.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0261', 'gia_khach_si', 12096.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 12.096, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0261', 'gia_thau_tho', 13608.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 13.608, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0261', 'gia_khach_le', 15120.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 15.12, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0261', 'gia_ban_mau', 9828.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 9.828, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0262', 'CNGOG', 'Đế âm vuông DAV LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '300 Cái/Hộp, 300 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 48, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0262', 'gia_niem_yet', 8000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 8.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0262', 'gia_khach_si', 6912.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 6.912, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0262', 'gia_thau_tho', 7776.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 7.776, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0262', 'gia_khach_le', 8640.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 8.64, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0262', 'gia_ban_mau', 5616.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 5.616, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0263', 'DNV', 'Đế nổi vuông DNV LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '300 Cái/Hộp, 300 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 49, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0263', 'gia_niem_yet', 6000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 6.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0263', 'gia_khach_si', 5184.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 5.184, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0263', 'gia_thau_tho', 5832.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 5.832, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0263', 'gia_khach_le', 6480.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 6.48, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0263', 'gia_ban_mau', 4212.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 4.212, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0264', 'DACN', 'Đế âm chữ nhật DACN LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '300 Cái/Hộp, 200 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 50, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0264', 'gia_niem_yet', 9000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 9.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0264', 'gia_khach_si', 7776.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 7.776, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0264', 'gia_thau_tho', 8748.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 8.748, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0264', 'gia_khach_le', 9720.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 9.72, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0264', 'gia_ban_mau', 6318.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 6.318, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0265', 'DNCN', 'Đế nổi chữ nhật DNCN LUSCOM CNGOG', 'CAT-03', 'BR-03', 'Công tắc - Ổ cắm LUSCOM', '', 'Cái', '300 Cái/Hộp, 300 Cái/Thùng', 'Định dạng giá file gốc: x1.000 VNĐ', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'CTOC', 51, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0265', 'gia_niem_yet', 11000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', 11.0, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0265', 'gia_khach_si', 9504.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', 9.504, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0265', 'gia_thau_tho', 10692.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', 10.692, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0265', 'gia_khach_le', 11880.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', 11.88, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0265', 'gia_ban_mau', 7722.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', 7.722, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0266', 'MK02-001', 'Máy khoan 3 chức năng dùng pin MK02-001 LUSFIX CNMIN: 18V', 'CAT-06', 'BR-04', 'Máy & CCDC LUSFIX', '', 'Cái', '', '(giá máy , chưa bao gồm Pin và Sạc, CH lưu ý)', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'MÁY, CCDC LUSFIX', 3, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0266', 'gia_niem_yet', 1460000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0266', 'gia_khach_si', 1261440.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0266', 'gia_thau_tho', 1419120.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0266', 'gia_khach_le', 1576800.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0266', 'gia_ban_mau', 1024920.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0267', 'MK02-003', 'Máy khoan động lực dùng pin MK02-003 LUSFIX CNMIN: 18V', 'CAT-06', 'BR-04', 'Máy & CCDC LUSFIX', '', 'Cái', '', '(giá máy , chưa bao gồm Pin và Sạc)', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'MÁY, CCDC LUSFIX', 4, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0267', 'gia_niem_yet', 2500000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0267', 'gia_khach_si', 2160000.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0267', 'gia_thau_tho', 2430000.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0267', 'gia_khach_le', 2700000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0267', 'gia_ban_mau', 1755000.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0268', 'MV02-001', 'Máy vặn vít dùng pin MV02-001 LUSFIX CNMIN: 18V', 'CAT-06', 'BR-04', 'Máy & CCDC LUSFIX', '', 'Cái', '', '(giá máy , chưa bao gồm Pin và Sạc)', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'MÁY, CCDC LUSFIX', 5, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0268', 'gia_niem_yet', 14500000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0268', 'gia_khach_si', 12528000.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0268', 'gia_thau_tho', 14094000.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0268', 'gia_khach_le', 15660000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0268', 'gia_ban_mau', 10179000.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0269', 'MV02-002', 'Máy vặn vít mini dùng pin MV02-002 LUSFIX CNMIN: 4V', 'CAT-06', 'BR-04', 'Máy & CCDC LUSFIX', '', 'Cái', '', '(giá máy , chưa bao gồm Pin và Sạc)', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'MÁY, CCDC LUSFIX', 6, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0269', 'gia_niem_yet', 550000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0269', 'gia_khach_si', 475200.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0269', 'gia_thau_tho', 534600.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0269', 'gia_khach_le', 594000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0269', 'gia_ban_mau', 386100.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0270', 'MS02-001', 'Máy siết bulong dùng pin MS02-001 LUSFIX CNMIN: 18V', 'CAT-06', 'BR-04', 'Máy & CCDC LUSFIX', '', 'Cái', '', '(giá máy , chưa bao gồm Pin và Sạc)', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'MÁY, CCDC LUSFIX', 7, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0270', 'gia_niem_yet', 1900000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0270', 'gia_khach_si', 1641600.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0270', 'gia_thau_tho', 1846800.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0270', 'gia_khach_le', 2052000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0270', 'gia_ban_mau', 1333800.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0271', 'CNMIN', 'Pin 2AH LUSFIX CNMIN: 18V', 'CAT-06', 'BR-04', 'Máy & CCDC LUSFIX', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'MÁY, CCDC LUSFIX', 8, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0271', 'gia_niem_yet', 550000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0271', 'gia_khach_si', 475200.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0271', 'gia_thau_tho', 534600.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0271', 'gia_khach_le', 594000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0271', 'gia_ban_mau', 386100.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0272', 'CNMIN', 'Pin 4AH LUSFIX CNMIN: 18V', 'CAT-06', 'BR-04', 'Máy & CCDC LUSFIX', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'MÁY, CCDC LUSFIX', 9, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0272', 'gia_niem_yet', 850000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0272', 'gia_khach_si', 734400.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0272', 'gia_thau_tho', 826200.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0272', 'gia_khach_le', 918000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0272', 'gia_ban_mau', 596700.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0273', 'CNMIN', 'Sạc LUSFIX CNMIN: 18V', 'CAT-06', 'BR-04', 'Máy & CCDC LUSFIX', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'MÁY, CCDC LUSFIX', 10, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0273', 'gia_niem_yet', 500000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0273', 'gia_khach_si', 432000.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0273', 'gia_thau_tho', 486000.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0273', 'gia_khach_le', 540000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0273', 'gia_ban_mau', 351000.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0274', 'KN001', 'Kìm mũi nhọn KN001 LUSFIX VNQJT: 152mm', 'CAT-06', 'BR-04', 'Máy & CCDC LUSFIX', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'MÁY, CCDC LUSFIX', 11, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0274', 'gia_niem_yet', 85000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0274', 'gia_khach_si', 73440.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0274', 'gia_thau_tho', 82620.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0274', 'gia_khach_le', 91800.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0274', 'gia_ban_mau', 59670.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0275', 'KN002', 'Kìm mũi nhọn KN002 LUSFIX VNQJT: 203mm', 'CAT-06', 'BR-04', 'Máy & CCDC LUSFIX', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'MÁY, CCDC LUSFIX', 12, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0275', 'gia_niem_yet', 87000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0275', 'gia_khach_si', 75168.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0275', 'gia_thau_tho', 84564.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0275', 'gia_khach_le', 93960.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0275', 'gia_ban_mau', 61074.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0276', 'KR001', 'Kìm răng KR001 LUSFIX VNQJT: 152mm', 'CAT-06', 'BR-04', 'Máy & CCDC LUSFIX', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'MÁY, CCDC LUSFIX', 13, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0276', 'gia_niem_yet', 105000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0276', 'gia_khach_si', 90720.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0276', 'gia_thau_tho', 102060.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0276', 'gia_khach_le', 113400.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0276', 'gia_ban_mau', 73710.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0277', 'KR002', 'Kìm răng KR002 LUSFIX VNQJT: 203mm', 'CAT-06', 'BR-04', 'Máy & CCDC LUSFIX', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'MÁY, CCDC LUSFIX', 14, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0277', 'gia_niem_yet', 110000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0277', 'gia_khach_si', 95040.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0277', 'gia_thau_tho', 106920.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0277', 'gia_khach_le', 118800.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0277', 'gia_ban_mau', 77220.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0278', 'KC001', 'Kìm cắt KC001 LUSFIX VNQJT: 203mm', 'CAT-06', 'BR-04', 'Máy & CCDC LUSFIX', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'MÁY, CCDC LUSFIX', 15, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0278', 'gia_niem_yet', 1000000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0278', 'gia_khach_si', 864000.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0278', 'gia_thau_tho', 972000.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0278', 'gia_khach_le', 1080000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0278', 'gia_ban_mau', 702000.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0279', 'VNQJT', 'Kìm khóa KK001 LUSFIX VNQJT: 254mm', 'CAT-06', 'BR-04', 'Máy & CCDC LUSFIX', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'MÁY, CCDC LUSFIX', 16, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0279', 'gia_niem_yet', 110000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0279', 'gia_khach_si', 95040.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0279', 'gia_thau_tho', 106920.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0279', 'gia_khach_le', 118800.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0279', 'gia_ban_mau', 77220.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0280', 'VNQJT', 'Bộ 3 tua vít dẹp TD001 LUSFIX VNQJT: 8x152mm+6x102mm+3x76mm', 'CAT-06', 'BR-04', 'Máy & CCDC LUSFIX', '', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'MÁY, CCDC LUSFIX', 17, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0280', 'gia_niem_yet', 115000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0280', 'gia_khach_si', 99360.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0280', 'gia_thau_tho', 111780.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0280', 'gia_khach_le', 124200.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0280', 'gia_ban_mau', 80730.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0281', 'VNQJT', 'Bộ 3 tua vít bake TB001 LUSFIX VNQJT: PH2x102mm+PH1x102mm+PH0x76mm', 'CAT-06', 'BR-04', 'Máy & CCDC LUSFIX', '', 'Bộ', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'MÁY, CCDC LUSFIX', 18, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0281', 'gia_niem_yet', 110000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0281', 'gia_khach_si', 95040.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0281', 'gia_thau_tho', 106920.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0281', 'gia_khach_le', 118800.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0281', 'gia_ban_mau', 77220.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0282', 'VNQJT', 'Búa cán gỗ BG001 LUSFIX VNQJT: 198.45gram', 'CAT-06', 'BR-04', 'Máy & CCDC LUSFIX', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'MÁY, CCDC LUSFIX', 19, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0282', 'gia_niem_yet', 120000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0282', 'gia_khach_si', 103680.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0282', 'gia_thau_tho', 116640.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0282', 'gia_khach_le', 129600.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0282', 'gia_ban_mau', 84240.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0283', 'VNQJT', 'Cờ lê hai đầu CM001 LUSFIX VNQJT: 8mm-10mm', 'CAT-06', 'BR-04', 'Máy & CCDC LUSFIX', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'MÁY, CCDC LUSFIX', 20, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0283', 'gia_niem_yet', 48000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0283', 'gia_khach_si', 41472.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0283', 'gia_thau_tho', 46656.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0283', 'gia_khach_le', 51840.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0283', 'gia_ban_mau', 33696.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0284', 'VNQJT', 'Cờ lê hai đầu CM002 LUSFIX VNQJT: 10mm-12mm', 'CAT-06', 'BR-04', 'Máy & CCDC LUSFIX', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'MÁY, CCDC LUSFIX', 21, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0284', 'gia_niem_yet', 55000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0284', 'gia_khach_si', 47520.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0284', 'gia_thau_tho', 53460.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0284', 'gia_khach_le', 59400.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0284', 'gia_ban_mau', 38610.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0285', 'VNQJT', 'Cờ lê hai đầu CM003 LUSFIX VNQJT: 14mm-17mm', 'CAT-06', 'BR-04', 'Máy & CCDC LUSFIX', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'MÁY, CCDC LUSFIX', 22, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0285', 'gia_niem_yet', 63000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0285', 'gia_khach_si', 54432.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0285', 'gia_thau_tho', 61236.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0285', 'gia_khach_le', 68040.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0285', 'gia_ban_mau', 44226.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0286', 'VNQJT', 'Cờ lê hai đầu CM004 LUSFIX VNQJT: 13mm-15mm', 'CAT-06', 'BR-04', 'Máy & CCDC LUSFIX', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'MÁY, CCDC LUSFIX', 23, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0286', 'gia_niem_yet', 60000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0286', 'gia_khach_si', 51840.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0286', 'gia_thau_tho', 58320.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0286', 'gia_khach_le', 64800.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0286', 'gia_ban_mau', 42120.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0287', 'VNQJT', 'Cờ lê hai đầu CM005 LUSFIX VNQJT: 17mm-19mm', 'CAT-06', 'BR-04', 'Máy & CCDC LUSFIX', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'MÁY, CCDC LUSFIX', 24, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0287', 'gia_niem_yet', 70000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0287', 'gia_khach_si', 60480.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0287', 'gia_thau_tho', 68040.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0287', 'gia_khach_le', 75600.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0287', 'gia_ban_mau', 49140.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0288', 'CV001', 'Cờ lê vòng miệng CV001 LUSFIX VNQJT: 12mm', 'CAT-06', 'BR-04', 'Máy & CCDC LUSFIX', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'MÁY, CCDC LUSFIX', 25, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0288', 'gia_niem_yet', 44000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0288', 'gia_khach_si', 38016.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0288', 'gia_thau_tho', 42768.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0288', 'gia_khach_le', 47520.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0288', 'gia_ban_mau', 30888.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0289', 'CV002', 'Cờ lê vòng miệng CV002 LUSFIX VNQJT: 13mm', 'CAT-06', 'BR-04', 'Máy & CCDC LUSFIX', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'MÁY, CCDC LUSFIX', 26, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0289', 'gia_niem_yet', 50000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0289', 'gia_khach_si', 43200.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0289', 'gia_thau_tho', 48600.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0289', 'gia_khach_le', 54000.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0289', 'gia_ban_mau', 35100.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0290', 'CV003', 'Cờ lê vòng miệng CV003 LUSFIX VNQJT: 14mm', 'CAT-06', 'BR-04', 'Máy & CCDC LUSFIX', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'MÁY, CCDC LUSFIX', 27, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0290', 'gia_niem_yet', 52000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0290', 'gia_khach_si', 44928.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0290', 'gia_thau_tho', 50544.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0290', 'gia_khach_le', 56160.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0290', 'gia_ban_mau', 36504.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0291', 'CV004', 'Cờ lê vòng miệng CV004 LUSFIX VNQJT: 17mm', 'CAT-06', 'BR-04', 'Máy & CCDC LUSFIX', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'MÁY, CCDC LUSFIX', 28, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0291', 'gia_niem_yet', 58000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0291', 'gia_khach_si', 50112.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0291', 'gia_thau_tho', 56376.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0291', 'gia_khach_le', 62640.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0291', 'gia_ban_mau', 40716.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO products (id, sku, product_name, category_id, brand_id, group_name, specs, unit, packaging, notes, source_file, sheet_name, row_number, price_version_id, is_active)
VALUES ('PROD-0292', 'CV005', 'Cờ lê vòng miệng CV005 LUSFIX VNQJT: 19mm', 'CAT-06', 'BR-04', 'Máy & CCDC LUSFIX', '', 'Cái', '', '', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'MÁY, CCDC LUSFIX', 29, 'VER-2024-0206', true)
ON CONFLICT (id) DO UPDATE SET product_name = EXCLUDED.product_name, specs = EXCLUDED.specs;
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0292', 'gia_niem_yet', 64000.0, 'chua_vat', 'Giá niêm yết (Chưa VAT)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0292', 'gia_khach_si', 55296.0, 'co_vat', 'Giá khách sỉ (CK 20% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0292', 'gia_thau_tho', 62208.0, 'co_vat', 'Giá thầu thợ (CK 10% + VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0292', 'gia_khach_le', 69120.0, 'co_vat', 'Giá khách lẻ (VAT 8%)', NULL, 'VER-2024-0206');
INSERT INTO product_prices (product_id, price_type_id, price_value, vat_status, label, raw_excel_value, price_version_id)
VALUES ('PROD-0292', 'gia_ban_mau', 44928.0, 'co_vat', 'Giá bán mẫu (CK 35% + VAT 8%)', NULL, 'VER-2024-0206');

-- 5. Ghi nhật ký Import Job
INSERT INTO import_jobs (id, filename, price_version_id, total_sheets, total_parsed, total_skipped, status, imported_by)
VALUES ('JOB-20240602-001', 'Copy of BẢNG GIÁ CCDC 0206.xlsx', 'VER-2024-0206', 17, 292, 60, 'completed', 'Admin')
ON CONFLICT (id) DO NOTHING;