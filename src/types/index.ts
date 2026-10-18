export type UserRole = 'admin' | 'sales';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  branch?: string;
}

export type VatStatus = 'chua_vat' | 'co_vat' | 'chua_xac_dinh';

export interface PriceDetail {
  value: number; // in VND
  vat: VatStatus;
  label: string;
  raw_value?: number; // raw value in excel (e.g. 20.52 for ĐÈN ĐIỆN)
}

export interface Product {
  id: string;
  source_file: string;
  sheet_name: string;
  row_number: number;
  category: string;
  group_name: string;
  product_name: string;
  sku: string;
  brand: string;
  specs: string;
  unit: string;
  packaging: string;
  notes: string;
  prices: Record<string, PriceDetail | null>;
}

export interface PriceVersion {
  id: string;
  name: string;
  filename: string;
  effectiveDate: string;
  status: 'active' | 'archived' | 'draft';
  importedAt: string;
  importedBy?: string;
  totalProducts: number;
  totalSheets: number;
  description?: string;
}

export interface QuotationItem {
  id: string;
  productId: string;
  productName: string;
  sku: string;
  unit: string;
  specs: string;
  quantity: number;
  selectedPriceKey: string;
  unitPrice: number;
  priceLabel: string;
  vatStatus: VatStatus;
  notes?: string;
}

export interface Quotation {
  id: string;
  code: string;
  createdAt: string;
  creatorName: string;
  creatorId: string;
  customerName: string;
  customerPhone?: string;
  customerAddress?: string;
  priceVersionId: string;
  priceVersionName: string;
  items: QuotationItem[];
  subtotal: number;
  vatAmount: number;
  totalAmount: number;
  notes: string;
  status: 'draft' | 'sent' | 'approved' | 'rejected';
}

export interface FilterState {
  searchQuery: string;
  category: string;
  brand: string;
  unit: string;
  priceRange: [number, number];
  sortBy: 'name_asc' | 'name_desc' | 'price_asc' | 'price_desc';
  selectedPriceGroup: 'gia_niem_yet' | 'gia_khach_si' | 'gia_thau_tho' | 'gia_khach_le' | 'gia_ban_mau';
}

export interface PriceComparisonItem {
  sku: string;
  productName: string;
  category: string;
  brand: string;
  oldPrice?: number;
  newPrice?: number;
  diff: number;
  diffPercent: number;
  status: 'increased' | 'decreased' | 'unchanged' | 'new' | 'removed';
}

export interface AuditLog {
  id: string;
  timestamp: string;
  userId: string;
  userName: string;
  action: string;
  details: string;
}
