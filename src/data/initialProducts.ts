// Dữ liệu sản phẩm thực tế trích xuất từ bảng giá Hoa Sen Home: Copy of BẢNG GIÁ CCDC 0206.xlsx
// Phiên bản bảng giá: CCDC 0206 (Cập nhật 02/06)
// Tổng số sản phẩm: 292
// Số sheet trích xuất: 17

export interface PriceDetail {
  value: number;
  vat: 'chua_vat' | 'co_vat' | 'chua_xac_dinh';
  label: string;
  raw_value?: number;
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

export const INITIAL_PRICE_VERSION = {
  id: "VER-2024-0206",
  name: "BẢNG GIÁ CCDC 0206",
  filename: "Copy of BẢNG GIÁ CCDC 0206.xlsx",
  effectiveDate: "2024-06-02",
  status: "active" as const,
  importedAt: "2024-06-02T08:00:00.000Z",
  totalProducts: 292,
  totalSheets: 17
};

export const INITIAL_PRODUCTS: Product[] = [
  {
    "sheet_name": "NLMT",
    "row_number": 3,
    "category": "Máy nước nóng NLMT",
    "group_name": "Bộ máy nước nóng NLMT  LusWell VNDAI I304",
    "product_name": "Bộ máy nước nóng NLMT  LusWell VNDAI I304 - 12 ống: 130L",
    "sku": "VNDAI",
    "brand": "LusWell",
    "specs": "12 ống: 130L",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 5060000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 4371840.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 4918320.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 5464800.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 3552120.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0001",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "NLMT",
    "row_number": 4,
    "category": "Máy nước nóng NLMT",
    "group_name": "Bộ máy nước nóng NLMT  LusWell VNDAI I304",
    "product_name": "Bộ máy nước nóng NLMT  LusWell VNDAI I304 - 15 ống: 160L",
    "sku": "VNDAI",
    "brand": "LusWell",
    "specs": "15 ống: 160L",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 6220000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 5374080.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 6045840.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 6717600.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 4366440.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0002",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "NLMT",
    "row_number": 5,
    "category": "Máy nước nóng NLMT",
    "group_name": "Bộ máy nước nóng NLMT  LusWell VNDAI I304",
    "product_name": "Bộ máy nước nóng NLMT  LusWell VNDAI I304 - 18 ống: 180L",
    "sku": "VNDAI",
    "brand": "LusWell",
    "specs": "18 ống: 180L",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 7380000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 6376320.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 7173360.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 7970400.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 5180760.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0003",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "NLMT",
    "row_number": 6,
    "category": "Máy nước nóng NLMT",
    "group_name": "Bộ máy nước nóng NLMT  LusWell VNDAI I304",
    "product_name": "Bộ máy nước nóng NLMT  LusWell VNDAI I304 - 20 ống: 200L",
    "sku": "VNDAI",
    "brand": "LusWell",
    "specs": "20 ống: 200L",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 8160000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 7050240.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 7931520.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 8812800.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 5728320.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0004",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "NLMT",
    "row_number": 7,
    "category": "Máy nước nóng NLMT",
    "group_name": "Bộ máy nước nóng NLMT  LusWell VNDAI I304",
    "product_name": "Bộ máy nước nóng NLMT  LusWell VNDAI I304 - 24 ống: 240L",
    "sku": "VNDAI",
    "brand": "LusWell",
    "specs": "24 ống: 240L",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 9760000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 8432640.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 9486720.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 10540800.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 6851520.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0005",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "NLMT",
    "row_number": 8,
    "category": "Máy nước nóng NLMT",
    "group_name": "Bộ máy nước nóng NLMT  LusWell VNDAI I304",
    "product_name": "Bộ máy nước nóng NLMT  LusWell VNDAI I304 - 30 ống: 300L",
    "sku": "VNDAI",
    "brand": "LusWell",
    "specs": "30 ống: 300L",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 12100000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 10454400.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 11761200.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 13068000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 8494200.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0006",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "NLMT",
    "row_number": 9,
    "category": "Máy nước nóng NLMT",
    "group_name": "Bộ máy nước nóng NLMT  LusWell VNVIE ống trơn",
    "product_name": "Bộ máy nước nóng NLMT  LusWell VNVIE ống trơn - 12 ống: 120L",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "12 ống: 120L",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 4280000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 3605472.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 4067712.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 4529952.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 3004560.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0007",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "NLMT",
    "row_number": 10,
    "category": "Máy nước nóng NLMT",
    "group_name": "Bộ máy nước nóng NLMT  LusWell VNVIE ống trơn",
    "product_name": "Bộ máy nước nóng NLMT  LusWell VNVIE ống trơn - 14 ống: 140L",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "14 ống: 140L",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 4800000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 4043520.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 4561920.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 5080320.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 3369600.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0008",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "NLMT",
    "row_number": 11,
    "category": "Máy nước nóng NLMT",
    "group_name": "Bộ máy nước nóng NLMT  LusWell VNVIE ống trơn",
    "product_name": "Bộ máy nước nóng NLMT  LusWell VNVIE ống trơn - 16 ống: 160L",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "16 ống: 160L",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 5480000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 4616352.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 5208192.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 5800032.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 3846960.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0009",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "NLMT",
    "row_number": 12,
    "category": "Máy nước nóng NLMT",
    "group_name": "Bộ máy nước nóng NLMT  LusWell VNVIE ống trơn",
    "product_name": "Bộ máy nước nóng NLMT  LusWell VNVIE ống trơn - 18 ống: 180L",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "18 ống: 180L",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 6170000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 5197608.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 5863968.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 6530328.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 4331340.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0010",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "NLMT",
    "row_number": 13,
    "category": "Máy nước nóng NLMT",
    "group_name": "Bộ máy nước nóng NLMT  LusWell VNVIE ống trơn",
    "product_name": "Bộ máy nước nóng NLMT  LusWell VNVIE ống trơn - 20 ống: 200L",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "20 ống: 200L",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 6850000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 5770440.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 6510240.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 7250040.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 4808700.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0011",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "NLMT",
    "row_number": 14,
    "category": "Máy nước nóng NLMT",
    "group_name": "Bộ máy nước nóng NLMT  LusWell VNVIE ống trơn",
    "product_name": "Bộ máy nước nóng NLMT  LusWell VNVIE ống trơn - 24 ống: 240L",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "24 ống: 240L",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 8220000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 6924528.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 7812288.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 8700048.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 5770440.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0012",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "NLMT",
    "row_number": 15,
    "category": "Máy nước nóng NLMT",
    "group_name": "Bộ máy nước nóng NLMT  LusWell VNVIE ống trơn",
    "product_name": "Bộ máy nước nóng NLMT  LusWell VNVIE ống trơn - 30 ống: 300L",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "30 ống: 300L",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 10270000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 8651448.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 9760608.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 10869768.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 7209540.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0013",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 3,
    "category": "Bồn nước Inox",
    "group_name": "1 Bộ bồn nước Luswell VNVIE đứng",
    "product_name": "1 Bộ bồn nước Luswell VNVIE đứng - 500L - 760mm",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "500L - 760mm",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 2365000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 2043360.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 2298780.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 2554200.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 1660230.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0014",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 4,
    "category": "Bồn nước Inox",
    "group_name": "1 Bộ bồn nước Luswell VNVIE đứng",
    "product_name": "1 Bộ bồn nước Luswell VNVIE đứng - 1000L - 935mm",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "1000L - 935mm",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 3500000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 3024000.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 3402000.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 3780000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 2457000.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0015",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 5,
    "category": "Bồn nước Inox",
    "group_name": "1 Bộ bồn nước Luswell VNVIE đứng",
    "product_name": "1 Bộ bồn nước Luswell VNVIE đứng - 1500L - 1140mm",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "1500L - 1140mm",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 5325000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 4600800.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 5175900.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 5751000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 3738150.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0016",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 6,
    "category": "Bồn nước Inox",
    "group_name": "1 Bộ bồn nước Luswell VNVIE đứng",
    "product_name": "1 Bộ bồn nước Luswell VNVIE đứng - 2000L - 1140 mm",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "2000L - 1140 mm",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 7110000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 6143040.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 6910920.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 7678800.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 4991220.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0017",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 7,
    "category": "Bồn nước Inox",
    "group_name": "1 Bộ bồn nước Luswell VNVIE đứng",
    "product_name": "1 Bộ bồn nước Luswell VNVIE đứng - 3000L - 1380mm",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "3000L - 1380mm",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 10560000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 9123840.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 10264320.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 11404800.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 7413120.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0018",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 8,
    "category": "Bồn nước Inox",
    "group_name": "1 Bộ bồn nước Luswell VNVIE đứng",
    "product_name": "1 Bộ bồn nước Luswell VNVIE đứng - 5000L - 1380mm",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "5000L - 1380mm",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 16200000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 13996800.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 15746400.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 17496000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 11372400.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0019",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 9,
    "category": "Bồn nước Inox",
    "group_name": "7 Bộ bồn nước Luswell VNVIE ngang",
    "product_name": "7 Bộ bồn nước Luswell VNVIE ngang - 500L - 760mm",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "500L - 760mm",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 2645000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 2285280.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 2570940.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 2856600.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 1856790.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0020",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 10,
    "category": "Bồn nước Inox",
    "group_name": "7 Bộ bồn nước Luswell VNVIE ngang",
    "product_name": "7 Bộ bồn nước Luswell VNVIE ngang - 700L - 775mm",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "700L - 775mm",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 3141000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 2713824.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 3053052.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 3392280.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 2204982.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0021",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 11,
    "category": "Bồn nước Inox",
    "group_name": "7 Bộ bồn nước Luswell VNVIE ngang",
    "product_name": "7 Bộ bồn nước Luswell VNVIE ngang - 1000L - 935mm",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "1000L - 935mm",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 3810000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 3291840.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 3703320.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 4114800.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 2674620.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0022",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 12,
    "category": "Bồn nước Inox",
    "group_name": "7 Bộ bồn nước Luswell VNVIE ngang",
    "product_name": "7 Bộ bồn nước Luswell VNVIE ngang - 1500L - 1140mm",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "1500L - 1140mm",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 5755000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 4972320.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 5593860.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 6215400.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 4040010.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0023",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 13,
    "category": "Bồn nước Inox",
    "group_name": "7 Bộ bồn nước Luswell VNVIE ngang",
    "product_name": "7 Bộ bồn nước Luswell VNVIE ngang - 2000L - 1140 mm",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "2000L - 1140 mm",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 7550000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 6523200.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 7338600.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 8154000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 5300100.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0024",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 14,
    "category": "Bồn nước Inox",
    "group_name": "7 Bộ bồn nước Luswell VNVIE ngang",
    "product_name": "7 Bộ bồn nước Luswell VNVIE ngang - 3000L - 1380mm",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "3000L - 1380mm",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 10940000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 9452160.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 10633680.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 11815200.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 7679880.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0025",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 15,
    "category": "Bồn nước Inox",
    "group_name": "7 Bộ bồn nước Luswell VNVIE ngang",
    "product_name": "7 Bộ bồn nước Luswell VNVIE ngang - 5000L - 1380mm",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "5000L - 1380mm",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 16950000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 14644800.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 16475400.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 18306000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 11898900.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0026",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 19,
    "category": "Bồn nước Inox",
    "group_name": "1 Bồn nước nhựa  Luswell VNVIE đứng",
    "product_name": "1 Bồn nước nhựa  Luswell VNVIE đứng - 500L - 775mm",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "500L - 775mm",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 1605000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 1386720.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 1560060.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 1733400.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 1126710.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0027",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 20,
    "category": "Bồn nước Inox",
    "group_name": "1 Bồn nước nhựa  Luswell VNVIE đứng",
    "product_name": "1 Bồn nước nhựa  Luswell VNVIE đứng - 1000L - 1010mm",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "1000L - 1010mm",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 2210000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 1909440.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 2148120.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 2386800.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 1551420.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0028",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 21,
    "category": "Bồn nước Inox",
    "group_name": "1 Bồn nước nhựa  Luswell VNVIE đứng",
    "product_name": "1 Bồn nước nhựa  Luswell VNVIE đứng - 1500L - 1215mm",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "1500L - 1215mm",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 3255000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 2812320.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 3163860.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 3515400.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 2285010.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0029",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 22,
    "category": "Bồn nước Inox",
    "group_name": "1 Bồn nước nhựa  Luswell VNVIE đứng",
    "product_name": "1 Bồn nước nhựa  Luswell VNVIE đứng - 2000L - 1310 mm",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "2000L - 1310 mm",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 4330000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 3741120.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 4208760.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 4676400.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 3039660.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0030",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 23,
    "category": "Bồn nước Inox",
    "group_name": "1 Bồn nước nhựa  Luswell VNVIE đứng",
    "product_name": "1 Bồn nước nhựa  Luswell VNVIE đứng - 3000L - 1490mm",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "3000L - 1490mm",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 6410000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 5538240.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 6230520.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 6922800.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 4499820.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0031",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 24,
    "category": "Bồn nước Inox",
    "group_name": "1 Bồn nước nhựa  Luswell VNVIE đứng",
    "product_name": "1 Bồn nước nhựa  Luswell VNVIE đứng - 5000L - 1750mm",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "5000L - 1750mm",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 11890000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 10272960.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 11557080.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 12841200.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 8346780.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0032",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 25,
    "category": "Bồn nước Inox",
    "group_name": "7 Bồn nước nhựa  Luswell VNVIE ngang",
    "product_name": "7 Bồn nước nhựa  Luswell VNVIE ngang - 500L - 780mm",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "500L - 780mm",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 1945000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 1680480.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 1890540.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 2100600.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 1365390.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0033",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 26,
    "category": "Bồn nước Inox",
    "group_name": "7 Bồn nước nhựa  Luswell VNVIE ngang",
    "product_name": "7 Bồn nước nhựa  Luswell VNVIE ngang - 1000L - 960mm",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "1000L - 960mm",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 3200000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 2764800.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 3110400.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 3456000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 2246400.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0034",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 30,
    "category": "Bồn nước Inox",
    "group_name": "1      Bồn nước inox  Luswell VNDAI đứng",
    "product_name": "1      Bồn nước inox  Luswell VNDAI đứng - 500L - 775mm",
    "sku": "VNDAI",
    "brand": "LusWell",
    "specs": "500L - 775mm",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 2400000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 2073600.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 2332800.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 2592000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 1684800.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0035",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 31,
    "category": "Bồn nước Inox",
    "group_name": "1      Bồn nước inox  Luswell VNDAI đứng",
    "product_name": "1      Bồn nước inox  Luswell VNDAI đứng - 700L - 775mm",
    "sku": "VNDAI",
    "brand": "LusWell",
    "specs": "700L - 775mm",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 2800000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 2419200.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 2721600.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 3024000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 1965600.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0036",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 32,
    "category": "Bồn nước Inox",
    "group_name": "1      Bồn nước inox  Luswell VNDAI đứng",
    "product_name": "1      Bồn nước inox  Luswell VNDAI đứng - 1000L - 940mm",
    "sku": "VNDAI",
    "brand": "LusWell",
    "specs": "1000L - 940mm",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 3580000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 3093120.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 3479760.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 3866400.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 2513160.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0037",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 33,
    "category": "Bồn nước Inox",
    "group_name": "1      Bồn nước inox  Luswell VNDAI đứng",
    "product_name": "1      Bồn nước inox  Luswell VNDAI đứng - 1500L - 1160mm",
    "sku": "VNDAI",
    "brand": "LusWell",
    "specs": "1500L - 1160mm",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 5380000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 4648320.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 5229360.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 5810400.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 3776760.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0038",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 34,
    "category": "Bồn nước Inox",
    "group_name": "1      Bồn nước inox  Luswell VNDAI đứng",
    "product_name": "1      Bồn nước inox  Luswell VNDAI đứng - 2000L - 1160 mm",
    "sku": "VNDAI",
    "brand": "LusWell",
    "specs": "2000L - 1160 mm",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 7180000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 6203520.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 6978960.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 7754400.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 5040360.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0039",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 35,
    "category": "Bồn nước Inox",
    "group_name": "1      Bồn nước inox  Luswell VNDAI đứng",
    "product_name": "1      Bồn nước inox  Luswell VNDAI đứng - 3000L - 1170mm",
    "sku": "VNDAI",
    "brand": "LusWell",
    "specs": "3000L - 1170mm",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 11670000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 10082880.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 11343240.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 12603600.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 8192340.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0040",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 36,
    "category": "Bồn nước Inox",
    "group_name": "1      Bồn nước inox  Luswell VNDAI đứng",
    "product_name": "1      Bồn nước inox  Luswell VNDAI đứng - 5000L - 1400mm",
    "sku": "VNDAI",
    "brand": "LusWell",
    "specs": "5000L - 1400mm",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 19250000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 16632000.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 18711000.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 20790000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 13513500.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0041",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 37,
    "category": "Bồn nước Inox",
    "group_name": "1      Bồn nước inox  Luswell VNDAI ngang",
    "product_name": "1      Bồn nước inox  Luswell VNDAI ngang - 500L - 775mm",
    "sku": "VNDAI",
    "brand": "LusWell",
    "specs": "500L - 775mm",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 2670000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 2306880.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 2595240.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 2883600.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 1874340.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0042",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 38,
    "category": "Bồn nước Inox",
    "group_name": "1      Bồn nước inox  Luswell VNDAI ngang",
    "product_name": "1      Bồn nước inox  Luswell VNDAI ngang - 700L - 775mm",
    "sku": "VNDAI",
    "brand": "LusWell",
    "specs": "700L - 775mm",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 3050000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 2635200.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 2964600.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 3294000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 2141100.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0043",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 39,
    "category": "Bồn nước Inox",
    "group_name": "1      Bồn nước inox  Luswell VNDAI ngang",
    "product_name": "1      Bồn nước inox  Luswell VNDAI ngang - 1000L - 940mm",
    "sku": "VNDAI",
    "brand": "LusWell",
    "specs": "1000L - 940mm",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 3860000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 3335040.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 3751920.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 4168800.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 2709720.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0044",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 40,
    "category": "Bồn nước Inox",
    "group_name": "1      Bồn nước inox  Luswell VNDAI ngang",
    "product_name": "1      Bồn nước inox  Luswell VNDAI ngang - 1500L - 1160mm",
    "sku": "VNDAI",
    "brand": "LusWell",
    "specs": "1500L - 1160mm",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 5750000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 4968000.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 5589000.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 6210000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 4036500.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0045",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 41,
    "category": "Bồn nước Inox",
    "group_name": "1      Bồn nước inox  Luswell VNDAI ngang",
    "product_name": "1      Bồn nước inox  Luswell VNDAI ngang - 2000L - 1160 mm",
    "sku": "VNDAI",
    "brand": "LusWell",
    "specs": "2000L - 1160 mm",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 7610000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 6575040.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 7396920.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 8218800.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 5342220.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0046",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 42,
    "category": "Bồn nước Inox",
    "group_name": "1      Bồn nước inox  Luswell VNDAI ngang",
    "product_name": "1      Bồn nước inox  Luswell VNDAI ngang - 3000L - 1170mm",
    "sku": "VNDAI",
    "brand": "LusWell",
    "specs": "3000L - 1170mm",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 12040000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 10402560.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 11702880.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 13003200.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 8452080.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0047",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 43,
    "category": "Bồn nước Inox",
    "group_name": "1      Bồn nước inox  Luswell VNDAI ngang",
    "product_name": "1      Bồn nước inox  Luswell VNDAI ngang - 5000L - 1400mm",
    "sku": "VNDAI",
    "brand": "LusWell",
    "specs": "5000L - 1400mm",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 20000000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 17280000.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 19440000.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 21600000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 14040000.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0048",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 47,
    "category": "Bồn nước Inox",
    "group_name": "1 Bồn tự hoại Septic LUSWELL MAX VNVIE đứng: 1000L",
    "product_name": "1 Bồn tự hoại Septic LUSWELL MAX VNVIE đứng: 1000L",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 3500000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 3024000.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 3402000.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 3780000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 2457000.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0049",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 48,
    "category": "Bồn nước Inox",
    "group_name": "2 Bồn tự hoại Septic LUSWELL MAX VNVIE đứng: 1600L",
    "product_name": "2 Bồn tự hoại Septic LUSWELL MAX VNVIE đứng: 1600L",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 4660000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 4026260.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 4529520.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 5032800.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 3271320.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0050",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỒN",
    "row_number": 49,
    "category": "Bồn nước Inox",
    "group_name": "3 Bồn tự hoại Septic LUSWELL MAX VNVIE đứng: 2200L",
    "product_name": "3 Bồn tự hoại Septic LUSWELL MAX VNVIE đứng: 2200L",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 6870000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 5935680.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 6677640.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 7419600.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 4822740.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0051",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỂ PHỐT - van đồng",
    "row_number": 3,
    "category": "Bồn tự hoại",
    "group_name": "Bồn tự hoại",
    "product_name": "Bồn tự hoại Septic LUSWELL MAX VNVIE đứng: 1000L",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "Bồn tự hoại Septic LUSWELL MAX VNVIE đứng: 1000L",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 3500000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 3024000.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 3402000.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 3780000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 2457000.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0052",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỂ PHỐT - van đồng",
    "row_number": 4,
    "category": "Bồn tự hoại",
    "group_name": "Bồn tự hoại",
    "product_name": "Bồn tự hoại Septic LUSWELL MAX VNVIE đứng: 1600L",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "Bồn tự hoại Septic LUSWELL MAX VNVIE đứng: 1600L",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 4660000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 4026240.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 4529520.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 5032800.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 3271320.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0053",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỂ PHỐT - van đồng",
    "row_number": 5,
    "category": "Bồn tự hoại",
    "group_name": "Bồn tự hoại",
    "product_name": "Bồn tự hoại Septic LUSWELL MAX VNVIE đứng: 2200L",
    "sku": "VNVIE",
    "brand": "LusWell",
    "specs": "Bồn tự hoại Septic LUSWELL MAX VNVIE đứng: 2200L",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 6870000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 5935680.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 6677640.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 7419600.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 4822740.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0054",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỂ PHỐT - van đồng",
    "row_number": 9,
    "category": "Van vòi đồng",
    "group_name": "Van vòi đồng",
    "product_name": "Van bi đồng tay gạt DN15 PN16 CNTIA PUWA",
    "sku": "CNTIA",
    "brand": "Puwa",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 80400.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 70768.08,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 79451.28,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 88134.48,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": null
    },
    "id": "PROD-0055",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỂ PHỐT - van đồng",
    "row_number": 10,
    "category": "Van vòi đồng",
    "group_name": "Van vòi đồng",
    "product_name": "Van bi đồng tay gạt DN20 PN16 CNTIA PUWA",
    "sku": "CNTIA",
    "brand": "Puwa",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 118700.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 104479.74,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 117299.34,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 130118.94,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": null
    },
    "id": "PROD-0056",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỂ PHỐT - van đồng",
    "row_number": 11,
    "category": "Van vòi đồng",
    "group_name": "Van vòi đồng",
    "product_name": "Van cổng đồng DN15 PN16 CNTIA PUWA",
    "sku": "CNTIA",
    "brand": "Puwa",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 103300.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 90924.66,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 102081.06,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 113237.46,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": null
    },
    "id": "PROD-0057",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỂ PHỐT - van đồng",
    "row_number": 12,
    "category": "Van vòi đồng",
    "group_name": "Van vòi đồng",
    "product_name": "Van một chiều lá lật đồng DN20 PN16 CNTIA PUWA",
    "sku": "CNTIA",
    "brand": "Puwa",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 87600.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 77105.52,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 86566.32,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 96027.12,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": null
    },
    "id": "PROD-0058",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỂ PHỐT - van đồng",
    "row_number": 13,
    "category": "Van vòi đồng",
    "group_name": "Van vòi đồng",
    "product_name": "Van một chiều lá lật đồng DN25 PN16 CNTIA PUWA",
    "sku": "CNTIA",
    "brand": "Puwa",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 132000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 116186.4,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 130442.4,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 144698.4,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": null
    },
    "id": "PROD-0059",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỂ PHỐT - van đồng",
    "row_number": 14,
    "category": "Van vòi đồng",
    "group_name": "Van vòi đồng",
    "product_name": "Vòi đồng tay nhôm đầu nối thông minh DN15 PN10 CNTIA PUWA",
    "sku": "CNTIA",
    "brand": "Puwa",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 72500.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 63814.5,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 71644.5,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 79474.5,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": null
    },
    "id": "PROD-0060",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỂ PHỐT - van đồng",
    "row_number": 15,
    "category": "Van vòi đồng",
    "group_name": "Van vòi đồng",
    "product_name": "Vòi đồng tay nhôm đầu nối thông minh DN20 PN10 CNTIA PUWA",
    "sku": "CNTIA",
    "brand": "Puwa",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 79200.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 69711.84,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 78265.44,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 86819.04,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": null
    },
    "id": "PROD-0061",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỂ PHỐT - van đồng",
    "row_number": 16,
    "category": "Van vòi đồng",
    "group_name": "Van vòi đồng",
    "product_name": "Vòi đồng tay thép đầu nối thường DN15 PN16 CNTIA PUWA",
    "sku": "CNTIA",
    "brand": "Puwa",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 79700.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 70151.94,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 78759.54,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 87367.14,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": null
    },
    "id": "PROD-0062",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỂ PHỐT - van đồng",
    "row_number": 17,
    "category": "Van vòi đồng",
    "group_name": "Van vòi đồng",
    "product_name": "Vòi đồng tay nhôm đầu nối thông minh DN15 PN16 CNTIA PUWA",
    "sku": "CNTIA",
    "brand": "Puwa",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 79700.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 70151.94,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 78759.54,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 87367.14,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": null
    },
    "id": "PROD-0063",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỂ PHỐT - van đồng",
    "row_number": 18,
    "category": "Van vòi đồng",
    "group_name": "Van vòi đồng",
    "product_name": "Vòi đồng tay thép đầu nối thường DN20 PN16 CNTIA PUWA",
    "sku": "CNTIA",
    "brand": "Puwa",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 90400.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 79570.08,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 89333.28,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 99096.48,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": null
    },
    "id": "PROD-0064",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "BỂ PHỐT - van đồng",
    "row_number": 19,
    "category": "Van vòi đồng",
    "group_name": "Van vòi đồng",
    "product_name": "Vòi đồng tay nhôm đầu nối thông minh DN20 PN16 CNTIA PUWA",
    "sku": "CNTIA",
    "brand": "Puwa",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 90400.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 79570.08,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 89333.28,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 99096.48,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": null
    },
    "id": "PROD-0065",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "VÍT",
    "row_number": 3,
    "category": "Vít & Phụ kiện liên kết",
    "group_name": "Vít bắn tôn",
    "product_name": "Vít bắn tôn - Vít LUSWELL MAX VNSHE: 45mm",
    "sku": "VNSHE",
    "brand": "LusWell",
    "specs": "Vít LUSWELL MAX VNSHE: 45mm",
    "unit": "Con",
    "packaging": "600 Con/Hộp, 4 Hộp/Thùng",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 1800.0,
        "vat": "chua_vat",
        "label": "Giá NY /con (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 1555.2,
        "vat": "co_vat",
        "label": "Giá sỉ /con (CK 20% + VAT 8%)"
      },
      "gia_khach_si_hop": {
        "value": 933120.0,
        "vat": "co_vat",
        "label": "Giá sỉ /hộp (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 1749.6,
        "vat": "co_vat",
        "label": "Giá thầu thợ /con (CK 10% + VAT 8%)"
      },
      "gia_thau_tho_hop": {
        "value": 1049760.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ /hộp (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 1944.0,
        "vat": "co_vat",
        "label": "Giá lẻ /con (VAT 8%)"
      },
      "gia_khach_le_hop": {
        "value": 1166400.0,
        "vat": "co_vat",
        "label": "Giá lẻ /hộp (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 1263.6,
        "vat": "co_vat",
        "label": "Giá mẫu /con (CK 35% + VAT 8%)"
      },
      "gia_ban_mau_hop": {
        "value": 758160.0,
        "vat": "co_vat",
        "label": "Giá mẫu /hộp (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0066",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "VÍT",
    "row_number": 4,
    "category": "Vít & Phụ kiện liên kết",
    "group_name": "Vít bắn tôn",
    "product_name": "Vít bắn tôn - Vít LUSWELL MAX VNSHE: 50mm",
    "sku": "VNSHE",
    "brand": "LusWell",
    "specs": "Vít LUSWELL MAX VNSHE: 50mm",
    "unit": "Con",
    "packaging": "600 Con/Hộp, 4 Hộp/Thùng",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 1900.0,
        "vat": "chua_vat",
        "label": "Giá NY /con (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 1641.6,
        "vat": "co_vat",
        "label": "Giá sỉ /con (CK 20% + VAT 8%)"
      },
      "gia_khach_si_hop": {
        "value": 984960.0,
        "vat": "co_vat",
        "label": "Giá sỉ /hộp (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 1846.8,
        "vat": "co_vat",
        "label": "Giá thầu thợ /con (CK 10% + VAT 8%)"
      },
      "gia_thau_tho_hop": {
        "value": 1108080.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ /hộp (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 2052.0,
        "vat": "co_vat",
        "label": "Giá lẻ /con (VAT 8%)"
      },
      "gia_khach_le_hop": {
        "value": 1231200.0,
        "vat": "co_vat",
        "label": "Giá lẻ /hộp (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 1333.8,
        "vat": "co_vat",
        "label": "Giá mẫu /con (CK 35% + VAT 8%)"
      },
      "gia_ban_mau_hop": {
        "value": 800280.0,
        "vat": "co_vat",
        "label": "Giá mẫu /hộp (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0067",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "VÍT",
    "row_number": 5,
    "category": "Vít & Phụ kiện liên kết",
    "group_name": "Vít bắn tôn",
    "product_name": "Vít bắn tôn - Vít LUSWELL MAX VNSHE: 68mm (2000H) 100 con",
    "sku": "VNSHE",
    "brand": "LusWell",
    "specs": "Vít LUSWELL MAX VNSHE: 68mm (2000H) 100 con",
    "unit": "Con",
    "packaging": "600 Con/Hộp, 4 Hộp/Thùng",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 2300.0,
        "vat": "chua_vat",
        "label": "Giá NY /con (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 1987.2,
        "vat": "co_vat",
        "label": "Giá sỉ /con (CK 20% + VAT 8%)"
      },
      "gia_khach_si_hop": {
        "value": 1192320.0,
        "vat": "co_vat",
        "label": "Giá sỉ /hộp (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 2235.6,
        "vat": "co_vat",
        "label": "Giá thầu thợ /con (CK 10% + VAT 8%)"
      },
      "gia_thau_tho_hop": {
        "value": 1341360.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ /hộp (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 2484.0,
        "vat": "co_vat",
        "label": "Giá lẻ /con (VAT 8%)"
      },
      "gia_khach_le_hop": {
        "value": 1490400.0,
        "vat": "co_vat",
        "label": "Giá lẻ /hộp (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 1614.6,
        "vat": "co_vat",
        "label": "Giá mẫu /con (CK 35% + VAT 8%)"
      },
      "gia_ban_mau_hop": {
        "value": 968760.0,
        "vat": "co_vat",
        "label": "Giá mẫu /hộp (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0068",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "VÍT",
    "row_number": 6,
    "category": "Vít & Phụ kiện liên kết",
    "group_name": "Vít bắn tôn",
    "product_name": "Vít bắn tôn - Vít LUSWELL CNHEB: 45mm",
    "sku": "CNHEB",
    "brand": "LusWell",
    "specs": "Vít LUSWELL CNHEB: 45mm",
    "unit": "Con",
    "packaging": "100 Con/Hộp, 35 Hộp/Thùng",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 1150.0,
        "vat": "chua_vat",
        "label": "Giá NY /con (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 993.6,
        "vat": "co_vat",
        "label": "Giá sỉ /con (CK 20% + VAT 8%)"
      },
      "gia_khach_si_hop": {
        "value": 99360.0,
        "vat": "co_vat",
        "label": "Giá sỉ /hộp (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 1117.8,
        "vat": "co_vat",
        "label": "Giá thầu thợ /con (CK 10% + VAT 8%)"
      },
      "gia_thau_tho_hop": {
        "value": 111780.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ /hộp (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 1242.0,
        "vat": "co_vat",
        "label": "Giá lẻ /con (VAT 8%)"
      },
      "gia_khach_le_hop": {
        "value": 124200.0,
        "vat": "co_vat",
        "label": "Giá lẻ /hộp (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 807.3,
        "vat": "co_vat",
        "label": "Giá mẫu /con (CK 35% + VAT 8%)"
      },
      "gia_ban_mau_hop": {
        "value": 80730.0,
        "vat": "co_vat",
        "label": "Giá mẫu /hộp (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0069",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "VÍT",
    "row_number": 7,
    "category": "Vít & Phụ kiện liên kết",
    "group_name": "Vít bắn tôn",
    "product_name": "Vít bắn tôn - Vít LUSWELL CNHEB: 50mm",
    "sku": "CNHEB",
    "brand": "LusWell",
    "specs": "Vít LUSWELL CNHEB: 50mm",
    "unit": "Con",
    "packaging": "100 Con/Hộp, 30 Hộp/Thùng",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 1250.0,
        "vat": "chua_vat",
        "label": "Giá NY /con (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 1080.0,
        "vat": "co_vat",
        "label": "Giá sỉ /con (CK 20% + VAT 8%)"
      },
      "gia_khach_si_hop": {
        "value": 108000.0,
        "vat": "co_vat",
        "label": "Giá sỉ /hộp (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 1215.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ /con (CK 10% + VAT 8%)"
      },
      "gia_thau_tho_hop": {
        "value": 121500.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ /hộp (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 1350.0,
        "vat": "co_vat",
        "label": "Giá lẻ /con (VAT 8%)"
      },
      "gia_khach_le_hop": {
        "value": 135000.0,
        "vat": "co_vat",
        "label": "Giá lẻ /hộp (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 877.5,
        "vat": "co_vat",
        "label": "Giá mẫu /con (CK 35% + VAT 8%)"
      },
      "gia_ban_mau_hop": {
        "value": 87750.0,
        "vat": "co_vat",
        "label": "Giá mẫu /hộp (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0070",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "VÍT",
    "row_number": 8,
    "category": "Vít & Phụ kiện liên kết",
    "group_name": "Vít bắn tôn",
    "product_name": "Vít bắn tôn - Vít LUSWELL CNHEB: 68mm (1000H)",
    "sku": "CNHEB",
    "brand": "LusWell",
    "specs": "Vít LUSWELL CNHEB: 68mm (1000H)",
    "unit": "Con",
    "packaging": "80 Con/Hộp, 24 Hộp/Thùng",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 1450.0,
        "vat": "chua_vat",
        "label": "Giá NY /con (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 1252.8,
        "vat": "co_vat",
        "label": "Giá sỉ /con (CK 20% + VAT 8%)"
      },
      "gia_khach_si_hop": {
        "value": 100224.0,
        "vat": "co_vat",
        "label": "Giá sỉ /hộp (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 1409.4,
        "vat": "co_vat",
        "label": "Giá thầu thợ /con (CK 10% + VAT 8%)"
      },
      "gia_thau_tho_hop": {
        "value": 112752.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ /hộp (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 1566.0,
        "vat": "co_vat",
        "label": "Giá lẻ /con (VAT 8%)"
      },
      "gia_khach_le_hop": {
        "value": 125280.0,
        "vat": "co_vat",
        "label": "Giá lẻ /hộp (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 1017.9,
        "vat": "co_vat",
        "label": "Giá mẫu /con (CK 35% + VAT 8%)"
      },
      "gia_ban_mau_hop": {
        "value": 81432.0,
        "vat": "co_vat",
        "label": "Giá mẫu /hộp (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0071",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "VÍT",
    "row_number": 9,
    "category": "Vít & Phụ kiện liên kết",
    "group_name": "Vít bắn ngói",
    "product_name": "Vít bắn ngói - Vít ngói LusWell CNHEB: 65mm",
    "sku": "CNHEB",
    "brand": "LusWell",
    "specs": "Vít ngói LusWell CNHEB: 65mm",
    "unit": "Con",
    "packaging": "200 Con/Hộp, 36 Hộp/Thùng",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 460.0,
        "vat": "chua_vat",
        "label": "Giá NY /con (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 397.44,
        "vat": "co_vat",
        "label": "Giá sỉ /con (CK 20% + VAT 8%)"
      },
      "gia_khach_si_hop": {
        "value": 79488.0,
        "vat": "co_vat",
        "label": "Giá sỉ /hộp (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 447.12,
        "vat": "co_vat",
        "label": "Giá thầu thợ /con (CK 10% + VAT 8%)"
      },
      "gia_thau_tho_hop": {
        "value": 89424.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ /hộp (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 496.8,
        "vat": "co_vat",
        "label": "Giá lẻ /con (VAT 8%)"
      },
      "gia_khach_le_hop": {
        "value": 99360.0,
        "vat": "co_vat",
        "label": "Giá lẻ /hộp (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 322.92,
        "vat": "co_vat",
        "label": "Giá mẫu /con (CK 35% + VAT 8%)"
      },
      "gia_ban_mau_hop": {
        "value": 64584.0,
        "vat": "co_vat",
        "label": "Giá mẫu /hộp (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0072",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "VÍT",
    "row_number": 10,
    "category": "Vít & Phụ kiện liên kết",
    "group_name": "Vít bắn TXM",
    "product_name": "Vít bắn TXM - Vít bắn tấm xi măng LUSWELL CNHEB: 30mm",
    "sku": "CNHEB",
    "brand": "LusWell",
    "specs": "Vít bắn tấm xi măng LUSWELL CNHEB: 30mm",
    "unit": "Con",
    "packaging": "300 Con/Hộp, 70 Hộp/Thùng",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 260.0,
        "vat": "chua_vat",
        "label": "Giá NY /con (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 224.64,
        "vat": "co_vat",
        "label": "Giá sỉ /con (CK 20% + VAT 8%)"
      },
      "gia_khach_si_hop": {
        "value": 67392.0,
        "vat": "co_vat",
        "label": "Giá sỉ /hộp (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 252.72,
        "vat": "co_vat",
        "label": "Giá thầu thợ /con (CK 10% + VAT 8%)"
      },
      "gia_thau_tho_hop": {
        "value": 75816.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ /hộp (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 280.8,
        "vat": "co_vat",
        "label": "Giá lẻ /con (VAT 8%)"
      },
      "gia_khach_le_hop": {
        "value": 84240.0,
        "vat": "co_vat",
        "label": "Giá lẻ /hộp (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 182.52,
        "vat": "co_vat",
        "label": "Giá mẫu /con (CK 35% + VAT 8%)"
      },
      "gia_ban_mau_hop": {
        "value": 54756.0,
        "vat": "co_vat",
        "label": "Giá mẫu /hộp (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0073",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "VÍT",
    "row_number": 11,
    "category": "Vít & Phụ kiện liên kết",
    "group_name": "Vít bắn TXM",
    "product_name": "Vít bắn TXM - Vít bắn tấm xi măng LUSWELL CNHEB: 40mm",
    "sku": "CNHEB",
    "brand": "LusWell",
    "specs": "Vít bắn tấm xi măng LUSWELL CNHEB: 40mm",
    "unit": "Con",
    "packaging": "300 Con/Hộp, 40 Hộp/Thùng",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 310.0,
        "vat": "chua_vat",
        "label": "Giá NY /con (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 267.84,
        "vat": "co_vat",
        "label": "Giá sỉ /con (CK 20% + VAT 8%)"
      },
      "gia_khach_si_hop": {
        "value": 80352.0,
        "vat": "co_vat",
        "label": "Giá sỉ /hộp (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 301.32,
        "vat": "co_vat",
        "label": "Giá thầu thợ /con (CK 10% + VAT 8%)"
      },
      "gia_thau_tho_hop": {
        "value": 90396.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ /hộp (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 334.8,
        "vat": "co_vat",
        "label": "Giá lẻ /con (VAT 8%)"
      },
      "gia_khach_le_hop": {
        "value": 100440.0,
        "vat": "co_vat",
        "label": "Giá lẻ /hộp (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 217.62,
        "vat": "co_vat",
        "label": "Giá mẫu /con (CK 35% + VAT 8%)"
      },
      "gia_ban_mau_hop": {
        "value": 65286.0,
        "vat": "co_vat",
        "label": "Giá mẫu /hộp (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0074",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SILICON",
    "row_number": 3,
    "category": "Keo Silicone",
    "group_name": "AXIT A300",
    "product_name": "Keo silicone Acid màu trắng LUSCOAT CNSYI: 0.3L",
    "sku": "CNSYI",
    "brand": "LusCoat",
    "specs": "Dung tích: 0,3L",
    "unit": "CHAI",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 50500.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 43632.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 49086.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 54540.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 35451.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0075",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SILICON",
    "row_number": 4,
    "category": "Keo Silicone",
    "group_name": "AXIT A300",
    "product_name": "Keo silicone Acid màu trắng trong LUSCOAT CNSYI: 0.3L",
    "sku": "CNSYI",
    "brand": "LusCoat",
    "specs": "Dung tích: 0,3L",
    "unit": "CHAI",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 50500.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 43632.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 49086.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 54540.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 35451.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0076",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SILICON",
    "row_number": 5,
    "category": "Keo Silicone",
    "group_name": "AXIT A300",
    "product_name": "Keo silicone Acid màu đen LUSCOAT CNSYI: 0.3L",
    "sku": "CNSYI",
    "brand": "LusCoat",
    "specs": "Dung tích: 0,3L",
    "unit": "CHAI",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 50500.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 43632.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 49086.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 54540.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 35451.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0077",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SILICON",
    "row_number": 6,
    "category": "Keo Silicone",
    "group_name": "AXIT A300",
    "product_name": "Keo silicone Acid màu xám xingfa LUSCOAT CNSYI: 0.3L",
    "sku": "CNSYI",
    "brand": "LusCoat",
    "specs": "Dung tích: 0,3L",
    "unit": "CHAI",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 50500.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 43632.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 49086.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 54540.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 35451.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0078",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SILICON",
    "row_number": 7,
    "category": "Keo Silicone",
    "group_name": "TRUNG TÍNH A500",
    "product_name": "Keo silicone Oxime màu trắng LUSCOAT CNSYI: 0.3L",
    "sku": "CNSYI",
    "brand": "LusCoat",
    "specs": "Dung tích: 0,3L",
    "unit": "CHAI",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 47500.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 41040.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 46170.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 51300.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 33345.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0079",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SILICON",
    "row_number": 8,
    "category": "Keo Silicone",
    "group_name": "TRUNG TÍNH A500",
    "product_name": "Keo silicone Oxime màu trắng trong LUSCOAT CNSYI: 0.3L",
    "sku": "CNSYI",
    "brand": "LusCoat",
    "specs": "Dung tích: 0,3L",
    "unit": "CHAI",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 47500.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 41040.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 46170.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 51300.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 33345.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0080",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SILICON",
    "row_number": 9,
    "category": "Keo Silicone",
    "group_name": "TRUNG TÍNH A500",
    "product_name": "Keo silicone Oxime màu đen LUSCOAT CNSYI: 0.3L",
    "sku": "CNSYI",
    "brand": "LusCoat",
    "specs": "Dung tích: 0,3L",
    "unit": "CHAI",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 47500.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 41040.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 46170.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 51300.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 33345.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0081",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SILICON",
    "row_number": 10,
    "category": "Keo Silicone",
    "group_name": "TRUNG TÍNH A500",
    "product_name": "Keo silicone Oxime màu xám xingfa LUSCOAT CNSYI: 0.3L",
    "sku": "CNSYI",
    "brand": "LusCoat",
    "specs": "Dung tích: 0,3L",
    "unit": "CHAI",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 47500.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 41040.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 46170.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 51300.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 33345.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0082",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SKL",
    "row_number": 3,
    "category": "Sơn kim loại",
    "group_name": "Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu thường (bao gồm màu nhũ trắng/ nhũ bạc)",
    "product_name": "Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu thường (bao gồm màu nhũ trắng/ nhũ bạc) - 0.75ML",
    "sku": "VNRON",
    "brand": "LusCoat",
    "specs": "Dung tích: 0.75ML",
    "unit": "Lon",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 110000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 95040.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 106920.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 118800.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 77220.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0083",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SKL",
    "row_number": 4,
    "category": "Sơn kim loại",
    "group_name": "Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu thường (bao gồm màu nhũ trắng/ nhũ bạc)",
    "product_name": "Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu thường (bao gồm màu nhũ trắng/ nhũ bạc) - 2,6L",
    "sku": "VNRON",
    "brand": "LusCoat",
    "specs": "Dung tích: 2,6L",
    "unit": "Lon",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 381000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 329184.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 370332.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 411480.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 267462.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0084",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SKL",
    "row_number": 5,
    "category": "Sơn kim loại",
    "group_name": "Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu thường (bao gồm màu nhũ trắng/ nhũ bạc)",
    "product_name": "Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu thường (bao gồm màu nhũ trắng/ nhũ bạc) - 17L",
    "sku": "VNRON",
    "brand": "LusCoat",
    "specs": "Dung tích: 17L",
    "unit": "Thùng",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 2347000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 2027808.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 2281284.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 2534760.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 1647594.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0085",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SKL",
    "row_number": 6,
    "category": "Sơn kim loại",
    "group_name": "Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu nhũ BẠC",
    "product_name": "Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu nhũ BẠC - 0.75ML",
    "sku": "VNRON",
    "brand": "LusCoat",
    "specs": "Dung tích: 0.75ML",
    "unit": "Lon",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 129000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 111456.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 125388.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 139320.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 90558.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0086",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SKL",
    "row_number": 7,
    "category": "Sơn kim loại",
    "group_name": "Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu nhũ BẠC",
    "product_name": "Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu nhũ BẠC - 2,6L",
    "sku": "VNRON",
    "brand": "LusCoat",
    "specs": "Dung tích: 2,6L",
    "unit": "Long",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 445000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 384480.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 432540.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 480600.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 312390.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0087",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SKL",
    "row_number": 8,
    "category": "Sơn kim loại",
    "group_name": "Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu nhũ BẠC",
    "product_name": "Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu nhũ BẠC - 17L",
    "sku": "VNRON",
    "brand": "LusCoat",
    "specs": "Dung tích: 17L",
    "unit": "Thùng",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 2735000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 2363040.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 2658420.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 2953800.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 1919970.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0088",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SKL",
    "row_number": 9,
    "category": "Sơn kim loại",
    "group_name": "Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu nhũ VÀNG",
    "product_name": "Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu nhũ VÀNG - 0.75ML",
    "sku": "VNRON",
    "brand": "LusCoat",
    "specs": "Dung tích: 0.75ML",
    "unit": "Lon",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 166000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 143424.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 161352.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 179280.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 116532.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0089",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SKL",
    "row_number": 10,
    "category": "Sơn kim loại",
    "group_name": "Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu nhũ VÀNG",
    "product_name": "Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu nhũ VÀNG - 2,6L",
    "sku": "VNRON",
    "brand": "LusCoat",
    "specs": "Dung tích: 2,6L",
    "unit": "Long",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 564000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 487296.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 548208.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 609120.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 395928.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0090",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SKL",
    "row_number": 11,
    "category": "Sơn kim loại",
    "group_name": "Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu nhũ VÀNG",
    "product_name": "Sơn thép mạ kẽm LUSCOAT VNRON 1TP hệ màu nhũ VÀNG - 17L",
    "sku": "VNRON",
    "brand": "LusCoat",
    "specs": "Dung tích: 17L",
    "unit": "Thùng",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 3477000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 3004128.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 3379644.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 3755160.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 2440854.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0091",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "Sơn xịt",
    "row_number": 3,
    "category": "Sơn xịt",
    "group_name": "SƠN XỊT ACRYLIC LUSCOAT CNAER HỆ MÀU THƯỜNG (không bao gồm màu bạc)",
    "product_name": "Sơn xịt Acrylic màu đen 39 LUSCOAT CNAER: 0.4L",
    "sku": "CNAER",
    "brand": "LusCoat",
    "specs": "Dung tích: 0.4L",
    "unit": "Chai",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 32000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 27648.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 31104.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 34560.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 22464.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0092",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "Sơn xịt",
    "row_number": 4,
    "category": "Sơn xịt",
    "group_name": "SƠN XỊT ACRYLIC LUSCOAT CNAER HỆ MÀU THƯỜNG (không bao gồm màu bạc)",
    "product_name": "Sơn xịt Acrylic màu đỏ 26 LUSCOAT CNAER: 0.4L",
    "sku": "CNAER",
    "brand": "LusCoat",
    "specs": "Dung tích: 0.4L",
    "unit": "Chai",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 32000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 27648.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 31104.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 34560.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 22464.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0093",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "Sơn xịt",
    "row_number": 5,
    "category": "Sơn xịt",
    "group_name": "SƠN XỊT ACRYLIC LUSCOAT CNAER HỆ MÀU THƯỜNG (không bao gồm màu bạc)",
    "product_name": "Sơn xịt Acrylic màu trắng 40 LUSCOAT CNAER: 0.4L",
    "sku": "CNAER",
    "brand": "LusCoat",
    "specs": "Dung tích: 0.4L",
    "unit": "Chai",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 32000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 27648.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 31104.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 34560.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 22464.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0094",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "Sơn xịt",
    "row_number": 6,
    "category": "Sơn xịt",
    "group_name": "SƠN XỊT ACRYLIC LUSCOAT CNAER HỆ MÀU THƯỜNG (không bao gồm màu bạc)",
    "product_name": "Sơn xịt Acrylic màu xám 301 LUSCOAT CNAER: 0.4L",
    "sku": "CNAER",
    "brand": "LusCoat",
    "specs": "Dung tích: 0.4L",
    "unit": "Chai",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 32000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 27648.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 31104.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 34560.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 22464.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0095",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "Sơn xịt",
    "row_number": 7,
    "category": "Sơn xịt",
    "group_name": "SƠN XỊT ACRYLIC LUSCOAT CNAER HỆ MÀU BẠC",
    "product_name": "Sơn xịt Acrylic màu nhũ bạc 1580 LUSCOAT CNAER: 0.4L",
    "sku": "CNAER",
    "brand": "LusCoat",
    "specs": "Dung tích: 0.4L",
    "unit": "Chai",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 34000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 29376.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 33048.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 36720.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 23868.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0096",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "Que hàn",
    "row_number": 3,
    "category": "Vật liệu hàn",
    "group_name": "Que hàn J421",
    "product_name": "Que hàn J421 VĐ: 2.5mmx300mm",
    "sku": "J421",
    "brand": "Việt Đức",
    "specs": "",
    "unit": "Kg",
    "packaging": "2.5 kg/Hộp, 20 kg/Thùng, 8 Hộp/Thùng",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 26650.0,
        "vat": "chua_vat",
        "label": "Giá NY /kg (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 26622.0,
        "vat": "co_vat",
        "label": "Giá sỉ /kg (VAT 8%)"
      },
      "gia_khach_si_hop": {
        "value": 66555.0,
        "vat": "co_vat",
        "label": "Giá sỉ /hộp (VAT 8%)"
      },
      "gia_khach_si_thung": {
        "value": 532440.0,
        "vat": "co_vat",
        "label": "Giá sỉ /thùng (VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 27162.0,
        "vat": "co_vat",
        "label": "Giá thợ /kg (VAT 8%)"
      },
      "gia_thau_tho_hop": {
        "value": 67905.0,
        "vat": "co_vat",
        "label": "Giá thợ /hộp (VAT 8%)"
      },
      "gia_thau_tho_thung": {
        "value": 543240.0,
        "vat": "co_vat",
        "label": "Giá thợ /thùng (VAT 8%)"
      },
      "gia_khach_le": {
        "value": 28782.0,
        "vat": "co_vat",
        "label": "Giá lẻ /kg (VAT 8%)"
      },
      "gia_khach_le_hop": {
        "value": 71955.0,
        "vat": "co_vat",
        "label": "Giá lẻ /hộp (VAT 8%)"
      }
    },
    "id": "PROD-0097",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "Que hàn",
    "row_number": 4,
    "category": "Vật liệu hàn",
    "group_name": "Que hàn J421",
    "product_name": "Que hàn J421 VĐ: 3.2mmx350mm",
    "sku": "J421",
    "brand": "Việt Đức",
    "specs": "",
    "unit": "Kg",
    "packaging": "5 kg/Hộp, 20 kg/Thùng, 4 Hộp/Thùng",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 25750.0,
        "vat": "chua_vat",
        "label": "Giá NY /kg (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 25650.0,
        "vat": "co_vat",
        "label": "Giá sỉ /kg (VAT 8%)"
      },
      "gia_khach_si_hop": {
        "value": 128250.0,
        "vat": "co_vat",
        "label": "Giá sỉ /hộp (VAT 8%)"
      },
      "gia_khach_si_thung": {
        "value": 513000.0,
        "vat": "co_vat",
        "label": "Giá sỉ /thùng (VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 26190.0,
        "vat": "co_vat",
        "label": "Giá thợ /kg (VAT 8%)"
      },
      "gia_thau_tho_hop": {
        "value": 130950.0,
        "vat": "co_vat",
        "label": "Giá thợ /hộp (VAT 8%)"
      },
      "gia_thau_tho_thung": {
        "value": 523800.0,
        "vat": "co_vat",
        "label": "Giá thợ /thùng (VAT 8%)"
      },
      "gia_khach_le": {
        "value": 27810.0,
        "vat": "co_vat",
        "label": "Giá lẻ /kg (VAT 8%)"
      },
      "gia_khach_le_hop": {
        "value": 139050.0,
        "vat": "co_vat",
        "label": "Giá lẻ /hộp (VAT 8%)"
      }
    },
    "id": "PROD-0098",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "Que hàn",
    "row_number": 5,
    "category": "Vật liệu hàn",
    "group_name": "Que hàn J421",
    "product_name": "Que hàn J421 VĐ: 4.0mmx400mm",
    "sku": "J421",
    "brand": "Việt Đức",
    "specs": "",
    "unit": "Kg",
    "packaging": "5 kg/Hộp, 20 kg/Thùng, 4 Hộp/Thùng",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 25750.0,
        "vat": "chua_vat",
        "label": "Giá NY /kg (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 25650.0,
        "vat": "co_vat",
        "label": "Giá sỉ /kg (VAT 8%)"
      },
      "gia_khach_si_hop": {
        "value": 128250.0,
        "vat": "co_vat",
        "label": "Giá sỉ /hộp (VAT 8%)"
      },
      "gia_khach_si_thung": {
        "value": 513000.0,
        "vat": "co_vat",
        "label": "Giá sỉ /thùng (VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 26190.0,
        "vat": "co_vat",
        "label": "Giá thợ /kg (VAT 8%)"
      },
      "gia_thau_tho_hop": {
        "value": 130950.0,
        "vat": "co_vat",
        "label": "Giá thợ /hộp (VAT 8%)"
      },
      "gia_thau_tho_thung": {
        "value": 523800.0,
        "vat": "co_vat",
        "label": "Giá thợ /thùng (VAT 8%)"
      },
      "gia_khach_le": {
        "value": 27810.0,
        "vat": "co_vat",
        "label": "Giá lẻ /kg (VAT 8%)"
      },
      "gia_khach_le_hop": {
        "value": 139050.0,
        "vat": "co_vat",
        "label": "Giá lẻ /hộp (VAT 8%)"
      }
    },
    "id": "PROD-0099",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "Que hàn",
    "row_number": 6,
    "category": "Vật liệu hàn",
    "group_name": "Que hàn 6013",
    "product_name": "Que hàn 6013 VĐ: 2.5mmx300mm",
    "sku": "6013",
    "brand": "Việt Đức",
    "specs": "",
    "unit": "Kg",
    "packaging": "2.5 kg/Hộp, 20 kg/Thùng, 8 Hộp/Thùng",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 27350.0,
        "vat": "chua_vat",
        "label": "Giá NY /kg (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 27378.0,
        "vat": "co_vat",
        "label": "Giá sỉ /kg (VAT 8%)"
      },
      "gia_khach_si_hop": {
        "value": 68445.0,
        "vat": "co_vat",
        "label": "Giá sỉ /hộp (VAT 8%)"
      },
      "gia_khach_si_thung": {
        "value": 547560.0,
        "vat": "co_vat",
        "label": "Giá sỉ /thùng (VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 27918.0,
        "vat": "co_vat",
        "label": "Giá thợ /kg (VAT 8%)"
      },
      "gia_thau_tho_hop": {
        "value": 69795.0,
        "vat": "co_vat",
        "label": "Giá thợ /hộp (VAT 8%)"
      },
      "gia_thau_tho_thung": {
        "value": 558360.0,
        "vat": "co_vat",
        "label": "Giá thợ /thùng (VAT 8%)"
      },
      "gia_khach_le": {
        "value": 29538.0,
        "vat": "co_vat",
        "label": "Giá lẻ /kg (VAT 8%)"
      },
      "gia_khach_le_hop": {
        "value": 73845.0,
        "vat": "co_vat",
        "label": "Giá lẻ /hộp (VAT 8%)"
      }
    },
    "id": "PROD-0100",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "Que hàn",
    "row_number": 7,
    "category": "Vật liệu hàn",
    "group_name": "Que hàn 6013",
    "product_name": "Que hàn 6013 VĐ: 3.2mmx350mm",
    "sku": "6013",
    "brand": "Việt Đức",
    "specs": "",
    "unit": "Kg",
    "packaging": "5 kg/Hộp, 20 kg/Thùng, 4 Hộp/Thùng",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 26150.0,
        "vat": "chua_vat",
        "label": "Giá NY /kg (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 26082.0,
        "vat": "co_vat",
        "label": "Giá sỉ /kg (VAT 8%)"
      },
      "gia_khach_si_hop": {
        "value": 130410.0,
        "vat": "co_vat",
        "label": "Giá sỉ /hộp (VAT 8%)"
      },
      "gia_khach_si_thung": {
        "value": 521640.0,
        "vat": "co_vat",
        "label": "Giá sỉ /thùng (VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 26622.0,
        "vat": "co_vat",
        "label": "Giá thợ /kg (VAT 8%)"
      },
      "gia_thau_tho_hop": {
        "value": 133110.0,
        "vat": "co_vat",
        "label": "Giá thợ /hộp (VAT 8%)"
      },
      "gia_thau_tho_thung": {
        "value": 532440.0,
        "vat": "co_vat",
        "label": "Giá thợ /thùng (VAT 8%)"
      },
      "gia_khach_le": {
        "value": 28242.0,
        "vat": "co_vat",
        "label": "Giá lẻ /kg (VAT 8%)"
      },
      "gia_khach_le_hop": {
        "value": 141210.0,
        "vat": "co_vat",
        "label": "Giá lẻ /hộp (VAT 8%)"
      }
    },
    "id": "PROD-0101",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "Que hàn",
    "row_number": 8,
    "category": "Vật liệu hàn",
    "group_name": "Que hàn 6013",
    "product_name": "Que hàn 6013 VĐ: 4.0mmx400mm",
    "sku": "6013",
    "brand": "Việt Đức",
    "specs": "",
    "unit": "Kg",
    "packaging": "5 kg/Hộp, 20 kg/Thùng, 4 Hộp/Thùng",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 26150.0,
        "vat": "chua_vat",
        "label": "Giá NY /kg (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 26082.0,
        "vat": "co_vat",
        "label": "Giá sỉ /kg (VAT 8%)"
      },
      "gia_khach_si_hop": {
        "value": 130410.0,
        "vat": "co_vat",
        "label": "Giá sỉ /hộp (VAT 8%)"
      },
      "gia_khach_si_thung": {
        "value": 521640.0,
        "vat": "co_vat",
        "label": "Giá sỉ /thùng (VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 26622.0,
        "vat": "co_vat",
        "label": "Giá thợ /kg (VAT 8%)"
      },
      "gia_thau_tho_hop": {
        "value": 133110.0,
        "vat": "co_vat",
        "label": "Giá thợ /hộp (VAT 8%)"
      },
      "gia_thau_tho_thung": {
        "value": 532440.0,
        "vat": "co_vat",
        "label": "Giá thợ /thùng (VAT 8%)"
      },
      "gia_khach_le": {
        "value": 28242.0,
        "vat": "co_vat",
        "label": "Giá lẻ /kg (VAT 8%)"
      },
      "gia_khach_le_hop": {
        "value": 141210.0,
        "vat": "co_vat",
        "label": "Giá lẻ /hộp (VAT 8%)"
      }
    },
    "id": "PROD-0102",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "Que hàn",
    "row_number": 9,
    "category": "Vật liệu hàn",
    "group_name": "Que hàn Inox",
    "product_name": "Que hàn Inox 308-16 VĐ: 2.5mmx300mm",
    "sku": "HS-VẬT-103",
    "brand": "Việt Đức",
    "specs": "",
    "unit": "Kg",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 134850.0,
        "vat": "chua_vat",
        "label": "Giá NY /kg (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 143478.0,
        "vat": "co_vat",
        "label": "Giá sỉ /kg (VAT 8%)"
      },
      "gia_khach_si_hop": null,
      "gia_khach_si_thung": null,
      "gia_thau_tho": {
        "value": 144018.0,
        "vat": "co_vat",
        "label": "Giá thợ /kg (VAT 8%)"
      },
      "gia_thau_tho_hop": null,
      "gia_thau_tho_thung": null,
      "gia_khach_le": {
        "value": 145638.0,
        "vat": "co_vat",
        "label": "Giá lẻ /kg (VAT 8%)"
      },
      "gia_khach_le_hop": null
    },
    "id": "PROD-0103",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "Que hàn",
    "row_number": 10,
    "category": "Vật liệu hàn",
    "group_name": "Que hàn Inox",
    "product_name": "Que hàn Inox 308-16 VĐ: 3.2mmx350mm",
    "sku": "HS-VẬT-104",
    "brand": "Việt Đức",
    "specs": "",
    "unit": "Kg",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 131350.0,
        "vat": "chua_vat",
        "label": "Giá NY /kg (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 139698.0,
        "vat": "co_vat",
        "label": "Giá sỉ /kg (VAT 8%)"
      },
      "gia_khach_si_hop": null,
      "gia_khach_si_thung": null,
      "gia_thau_tho": {
        "value": 140238.0,
        "vat": "co_vat",
        "label": "Giá thợ /kg (VAT 8%)"
      },
      "gia_thau_tho_hop": null,
      "gia_thau_tho_thung": null,
      "gia_khach_le": {
        "value": 141858.0,
        "vat": "co_vat",
        "label": "Giá lẻ /kg (VAT 8%)"
      },
      "gia_khach_le_hop": null
    },
    "id": "PROD-0104",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "Que hàn",
    "row_number": 11,
    "category": "Vật liệu hàn",
    "group_name": "Que hàn Inox",
    "product_name": "Que hàn Inox 308-16 VĐ: 4.0mmx350mm",
    "sku": "HS-VẬT-105",
    "brand": "Việt Đức",
    "specs": "",
    "unit": "Kg",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 131350.0,
        "vat": "chua_vat",
        "label": "Giá NY /kg (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 139698.0,
        "vat": "co_vat",
        "label": "Giá sỉ /kg (VAT 8%)"
      },
      "gia_khach_si_hop": null,
      "gia_khach_si_thung": null,
      "gia_thau_tho": {
        "value": 140238.0,
        "vat": "co_vat",
        "label": "Giá thợ /kg (VAT 8%)"
      },
      "gia_thau_tho_hop": null,
      "gia_thau_tho_thung": null,
      "gia_khach_le": {
        "value": 141858.0,
        "vat": "co_vat",
        "label": "Giá lẻ /kg (VAT 8%)"
      },
      "gia_khach_le_hop": null
    },
    "id": "PROD-0105",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "Que hàn",
    "row_number": 12,
    "category": "Vật liệu hàn",
    "group_name": "Dây hàn",
    "product_name": "Dây hàn W49 VĐ: 0.8mmx15kg",
    "sku": "W49",
    "brand": "Việt Đức",
    "specs": "",
    "unit": "Kg",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 37000.0,
        "vat": "chua_vat",
        "label": "Giá NY /kg (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 37800.0,
        "vat": "co_vat",
        "label": "Giá sỉ /kg (VAT 8%)"
      },
      "gia_khach_si_hop": null,
      "gia_khach_si_thung": {
        "value": 567000.0,
        "vat": "co_vat",
        "label": "Giá sỉ /thùng (VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 38340.0,
        "vat": "co_vat",
        "label": "Giá thợ /kg (VAT 8%)"
      },
      "gia_thau_tho_hop": null,
      "gia_thau_tho_thung": {
        "value": 575100.0,
        "vat": "co_vat",
        "label": "Giá thợ /thùng (VAT 8%)"
      },
      "gia_khach_le": {
        "value": 39960.0,
        "vat": "co_vat",
        "label": "Giá lẻ /kg (VAT 8%)"
      },
      "gia_khach_le_hop": null
    },
    "id": "PROD-0106",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "Que hàn",
    "row_number": 13,
    "category": "Vật liệu hàn",
    "group_name": "Dây hàn",
    "product_name": "Dây hàn W49 VĐ: 0.9mmx15kg",
    "sku": "W49",
    "brand": "Việt Đức",
    "specs": "",
    "unit": "Kg",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 36700.0,
        "vat": "chua_vat",
        "label": "Giá NY /kg (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 37476.0,
        "vat": "co_vat",
        "label": "Giá sỉ /kg (VAT 8%)"
      },
      "gia_khach_si_hop": null,
      "gia_khach_si_thung": {
        "value": 562140.0,
        "vat": "co_vat",
        "label": "Giá sỉ /thùng (VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 38016.0,
        "vat": "co_vat",
        "label": "Giá thợ /kg (VAT 8%)"
      },
      "gia_thau_tho_hop": null,
      "gia_thau_tho_thung": {
        "value": 542700.0,
        "vat": "co_vat",
        "label": "Giá thợ /thùng (VAT 8%)"
      },
      "gia_khach_le": {
        "value": 39636.0,
        "vat": "co_vat",
        "label": "Giá lẻ /kg (VAT 8%)"
      },
      "gia_khach_le_hop": null
    },
    "id": "PROD-0107",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "Que hàn",
    "row_number": 14,
    "category": "Vật liệu hàn",
    "group_name": "Dây hàn",
    "product_name": "Dây hàn W49 VĐ: 1.0mmx15kg",
    "sku": "W49",
    "brand": "Việt Đức",
    "specs": "",
    "unit": "Kg",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 34900.0,
        "vat": "chua_vat",
        "label": "Giá NY /kg (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 35532.0,
        "vat": "co_vat",
        "label": "Giá sỉ /kg (VAT 8%)"
      },
      "gia_khach_si_hop": null,
      "gia_khach_si_thung": {
        "value": 532980.0,
        "vat": "co_vat",
        "label": "Giá sỉ /thùng (VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 36072.0,
        "vat": "co_vat",
        "label": "Giá thợ /kg (VAT 8%)"
      },
      "gia_thau_tho_hop": null,
      "gia_thau_tho_thung": {
        "value": 513540.0,
        "vat": "co_vat",
        "label": "Giá thợ /thùng (VAT 8%)"
      },
      "gia_khach_le": {
        "value": 37692.0,
        "vat": "co_vat",
        "label": "Giá lẻ /kg (VAT 8%)"
      },
      "gia_khach_le_hop": null
    },
    "id": "PROD-0108",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "Que hàn",
    "row_number": 15,
    "category": "Vật liệu hàn",
    "group_name": "Dây hàn",
    "product_name": "Dây hàn W49 VĐ: 1.2mmx15kg",
    "sku": "W49",
    "brand": "Việt Đức",
    "specs": "",
    "unit": "Kg",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 33900.0,
        "vat": "chua_vat",
        "label": "Giá NY /kg (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 34452.0,
        "vat": "co_vat",
        "label": "Giá sỉ /kg (VAT 8%)"
      },
      "gia_khach_si_hop": null,
      "gia_khach_si_thung": {
        "value": 516780.0,
        "vat": "co_vat",
        "label": "Giá sỉ /thùng (VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 34992.0,
        "vat": "co_vat",
        "label": "Giá thợ /kg (VAT 8%)"
      },
      "gia_thau_tho_hop": null,
      "gia_thau_tho_thung": {
        "value": 497340.0,
        "vat": "co_vat",
        "label": "Giá thợ /thùng (VAT 8%)"
      },
      "gia_khach_le": {
        "value": 36612.0,
        "vat": "co_vat",
        "label": "Giá lẻ /kg (VAT 8%)"
      },
      "gia_khach_le_hop": null
    },
    "id": "PROD-0109",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "Que hàn",
    "row_number": 16,
    "category": "Vật liệu hàn",
    "group_name": "Dây hàn",
    "product_name": "Dây hàn W71T VĐ: 1.2mmx15kg",
    "sku": "HS-VẬT-110",
    "brand": "Việt Đức",
    "specs": "",
    "unit": "Kg",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 32900.0,
        "vat": "chua_vat",
        "label": "Giá NY /kg (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 33372.0,
        "vat": "co_vat",
        "label": "Giá sỉ /kg (VAT 8%)"
      },
      "gia_khach_si_hop": null,
      "gia_khach_si_thung": {
        "value": 500580.0,
        "vat": "co_vat",
        "label": "Giá sỉ /thùng (VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 33912.0,
        "vat": "co_vat",
        "label": "Giá thợ /kg (VAT 8%)"
      },
      "gia_thau_tho_hop": null,
      "gia_thau_tho_thung": {
        "value": 489240.0,
        "vat": "co_vat",
        "label": "Giá thợ /thùng (VAT 8%)"
      },
      "gia_khach_le": {
        "value": 35532.0,
        "vat": "co_vat",
        "label": "Giá lẻ /kg (VAT 8%)"
      },
      "gia_khach_le_hop": null
    },
    "id": "PROD-0110",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "Que hàn",
    "row_number": 17,
    "category": "Vật liệu hàn",
    "group_name": "Que hàn E7018",
    "product_name": "Que hàn E7018 VĐ: 3.2mmx350mm",
    "sku": "E7018",
    "brand": "Việt Đức",
    "specs": "",
    "unit": "Kg",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 34800.0,
        "vat": "chua_vat",
        "label": "Giá NY /kg (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 35424.0,
        "vat": "co_vat",
        "label": "Giá sỉ /kg (VAT 8%)"
      },
      "gia_khach_si_hop": null,
      "gia_khach_si_thung": null,
      "gia_thau_tho": {
        "value": 35964.0,
        "vat": "co_vat",
        "label": "Giá thợ /kg (VAT 8%)"
      },
      "gia_thau_tho_hop": null,
      "gia_thau_tho_thung": null,
      "gia_khach_le": {
        "value": 37584.0,
        "vat": "co_vat",
        "label": "Giá lẻ /kg (VAT 8%)"
      },
      "gia_khach_le_hop": null
    },
    "id": "PROD-0111",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "Que hàn",
    "row_number": 18,
    "category": "Vật liệu hàn",
    "group_name": "Que hàn E7018",
    "product_name": "Que hàn E7018 VĐ: 4.0mmx400mm",
    "sku": "E7018",
    "brand": "Việt Đức",
    "specs": "",
    "unit": "Kg",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 34500.0,
        "vat": "chua_vat",
        "label": "Giá NY /kg (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 35100.0,
        "vat": "co_vat",
        "label": "Giá sỉ /kg (VAT 8%)"
      },
      "gia_khach_si_hop": null,
      "gia_khach_si_thung": null,
      "gia_thau_tho": {
        "value": 35640.0,
        "vat": "co_vat",
        "label": "Giá thợ /kg (VAT 8%)"
      },
      "gia_thau_tho_hop": null,
      "gia_thau_tho_thung": null,
      "gia_khach_le": {
        "value": 37260.0,
        "vat": "co_vat",
        "label": "Giá lẻ /kg (VAT 8%)"
      },
      "gia_khach_le_hop": null
    },
    "id": "PROD-0112",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "Que hàn",
    "row_number": 19,
    "category": "Vật liệu hàn",
    "group_name": "Que hàn E7018",
    "product_name": "Que hàn N46 VĐ: 2.5mmx300mm",
    "sku": "N46",
    "brand": "Việt Đức",
    "specs": "",
    "unit": "Kg",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 34000.0,
        "vat": "chua_vat",
        "label": "Giá NY /kg (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 34560.0,
        "vat": "co_vat",
        "label": "Giá sỉ /kg (VAT 8%)"
      },
      "gia_khach_si_hop": null,
      "gia_khach_si_thung": null,
      "gia_thau_tho": {
        "value": 35100.0,
        "vat": "co_vat",
        "label": "Giá thợ /kg (VAT 8%)"
      },
      "gia_thau_tho_hop": null,
      "gia_thau_tho_thung": null,
      "gia_khach_le": {
        "value": 36720.0,
        "vat": "co_vat",
        "label": "Giá lẻ /kg (VAT 8%)"
      },
      "gia_khach_le_hop": null
    },
    "id": "PROD-0113",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "Que hàn",
    "row_number": 20,
    "category": "Vật liệu hàn",
    "group_name": "Que hàn E7018",
    "product_name": "Que hàn N46 VĐ: 4.0mmx400mm",
    "sku": "N46",
    "brand": "Việt Đức",
    "specs": "",
    "unit": "Kg",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 33500.0,
        "vat": "chua_vat",
        "label": "Giá NY /kg (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 34020.0,
        "vat": "co_vat",
        "label": "Giá sỉ /kg (VAT 8%)"
      },
      "gia_khach_si_hop": null,
      "gia_khach_si_thung": null,
      "gia_thau_tho": {
        "value": 34560.0,
        "vat": "co_vat",
        "label": "Giá thợ /kg (VAT 8%)"
      },
      "gia_thau_tho_hop": null,
      "gia_thau_tho_thung": null,
      "gia_khach_le": {
        "value": 36180.0,
        "vat": "co_vat",
        "label": "Giá lẻ /kg (VAT 8%)"
      },
      "gia_khach_le_hop": null
    },
    "id": "PROD-0114",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CÁCH NHIỆT",
    "row_number": 3,
    "category": "Tấm cách nhiệt",
    "group_name": "TẤM CÁCH NHIỆT LUSWELL",
    "product_name": "Tấm cách nhiệt LusWell VNWIN P2: 4mmx1.55m",
    "sku": "VNWIN",
    "brand": "LusWell",
    "specs": "",
    "unit": "M2",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 26500.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết /M2 (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 22896.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ /M2 (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 25758.0,
        "vat": "co_vat",
        "label": "Giá thợ /M2 (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 28620.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ /M2 (VAT 8%)"
      },
      "gia_khach_si_cuon": {
        "value": 1419552.0,
        "vat": "co_vat",
        "label": "Giá sỉ theo cuộn (CK 20% + VAT 8%)"
      },
      "gia_ban_mau_cuon": {
        "value": 1153386.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu theo cuộn (CK 35% + VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 18603.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu /M2 (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0115",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CÁCH NHIỆT",
    "row_number": 4,
    "category": "Tấm cách nhiệt",
    "group_name": "TẤM CÁCH NHIỆT LUSWELL",
    "product_name": "Tấm cách nhiệt LusWell VNWIN P2: 4mmx1.1m",
    "sku": "VNWIN",
    "brand": "LusWell",
    "specs": "",
    "unit": "M2",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 26700.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết /M2 (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 23068.8,
        "vat": "co_vat",
        "label": "Giá khách sỉ /M2 (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 25952.4,
        "vat": "co_vat",
        "label": "Giá thợ /M2 (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 28836.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ /M2 (VAT 8%)"
      },
      "gia_khach_si_cuon": {
        "value": 1015027.2,
        "vat": "co_vat",
        "label": "Giá sỉ theo cuộn (CK 20% + VAT 8%)"
      },
      "gia_ban_mau_cuon": {
        "value": 824709.6,
        "vat": "co_vat",
        "label": "Giá bán mẫu theo cuộn (CK 35% + VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 18743.4,
        "vat": "co_vat",
        "label": "Giá bán mẫu /M2 (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0116",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CÁCH NHIỆT",
    "row_number": 5,
    "category": "Tấm cách nhiệt",
    "group_name": "TẤM CÁCH NHIỆT LUSWELL",
    "product_name": "Tấm cách nhiệt LusWell VNWIN AP: 4mmx1.55m",
    "sku": "VNWIN",
    "brand": "LusWell",
    "specs": "",
    "unit": "M2",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 30600.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết /M2 (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 26438.4,
        "vat": "co_vat",
        "label": "Giá khách sỉ /M2 (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 29743.2,
        "vat": "co_vat",
        "label": "Giá thợ /M2 (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 33048.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ /M2 (VAT 8%)"
      },
      "gia_khach_si_cuon": {
        "value": 1639180.8,
        "vat": "co_vat",
        "label": "Giá sỉ theo cuộn (CK 20% + VAT 8%)"
      },
      "gia_ban_mau_cuon": {
        "value": 1331834.4,
        "vat": "co_vat",
        "label": "Giá bán mẫu theo cuộn (CK 35% + VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 21481.2,
        "vat": "co_vat",
        "label": "Giá bán mẫu /M2 (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0117",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CÁCH NHIỆT",
    "row_number": 6,
    "category": "Tấm cách nhiệt",
    "group_name": "TẤM CÁCH NHIỆT LUSWELL",
    "product_name": "Tấm cách nhiệt LusWell VNWIN A2: 4mmx1.55m",
    "sku": "VNWIN",
    "brand": "LusWell",
    "specs": "",
    "unit": "M2",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 37700.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết /M2 (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 32572.8,
        "vat": "co_vat",
        "label": "Giá khách sỉ /M2 (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 36644.4,
        "vat": "co_vat",
        "label": "Giá thợ /M2 (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 40716.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ /M2 (VAT 8%)"
      },
      "gia_khach_si_cuon": {
        "value": 2019513.6,
        "vat": "co_vat",
        "label": "Giá sỉ theo cuộn (CK 20% + VAT 8%)"
      },
      "gia_ban_mau_cuon": {
        "value": 1640854.8,
        "vat": "co_vat",
        "label": "Giá bán mẫu theo cuộn (CK 35% + VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 26465.4,
        "vat": "co_vat",
        "label": "Giá bán mẫu /M2 (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0118",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CÁCH NHIỆT",
    "row_number": 7,
    "category": "Tấm cách nhiệt",
    "group_name": "TẤM CÁCH NHIỆT LUSWELL",
    "product_name": "Băng keo hai mặt chuyên dụng LusWell VNWIN: 0.05mx40m",
    "sku": "VNWIN",
    "brand": "LusWell",
    "specs": "",
    "unit": "Cuộn",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 40500.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết /Cuộn (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 34992.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ /Cuộn (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 39366.0,
        "vat": "co_vat",
        "label": "Giá thợ /Cuộn (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 43740.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ /Cuộn (VAT 8%)"
      },
      "gia_khach_si_cuon": null,
      "gia_ban_mau_cuon": null,
      "gia_ban_mau": {
        "value": 28431.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu /Cuộn (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0119",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "LẤY SÁNG",
    "row_number": 3,
    "category": "Tấm lợp lấy sáng",
    "group_name": "Tấm nhựa lấy sáng LUSWELL",
    "product_name": "Tấm nhựa lấy sáng LUSWELL VNTHA CPS: 0.60mmx1070mm",
    "sku": "VNTHA",
    "brand": "LusWell",
    "specs": "",
    "unit": "Mét",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 103000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết /mét (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 88992.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ /mét (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 100116.0,
        "vat": "co_vat",
        "label": "Giá thợ /mét (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 111240.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ /mét (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 72306.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu /mét (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0120",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "LẤY SÁNG",
    "row_number": 4,
    "category": "Tấm lợp lấy sáng",
    "group_name": "Tấm nhựa lấy sáng LUSWELL",
    "product_name": "Tấm nhựa lấy sáng LUSWELL VNTHA CPS: 0.80mmx1070mm",
    "sku": "VNTHA",
    "brand": "LusWell",
    "specs": "",
    "unit": "Mét",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 129000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết /mét (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 111456.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ /mét (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 125388.0,
        "vat": "co_vat",
        "label": "Giá thợ /mét (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 139320.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ /mét (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 90558.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu /mét (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0121",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "LẤY SÁNG",
    "row_number": 5,
    "category": "Tấm lợp lấy sáng",
    "group_name": "Tấm nhựa lấy sáng LUSWELL",
    "product_name": "Tấm nhựa lấy sáng LUSWELL VNTHA CPS: 1.00mmx1070mm",
    "sku": "VNTHA",
    "brand": "LusWell",
    "specs": "",
    "unit": "Mét",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 159000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết /mét (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 137376.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ /mét (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 154548.0,
        "vat": "co_vat",
        "label": "Giá thợ /mét (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 171720.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ /mét (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 111618.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu /mét (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0122",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "LẤY SÁNG",
    "row_number": 6,
    "category": "Tấm lợp lấy sáng",
    "group_name": "Tấm nhựa lấy sáng LUSWELL",
    "product_name": "Tấm nhựa lấy sáng LUSWELL VNTHA CPS: 1.20mmx1070mm",
    "sku": "VNTHA",
    "brand": "LusWell",
    "specs": "",
    "unit": "Mét",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 225000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết /mét (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 194400.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ /mét (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 218700.0,
        "vat": "co_vat",
        "label": "Giá thợ /mét (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 243000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ /mét (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 157950.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu /mét (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0123",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "LẤY SÁNG",
    "row_number": 7,
    "category": "Tấm lợp lấy sáng",
    "group_name": "Tấm nhựa lấy sáng LUSWELL",
    "product_name": "Tấm nhựa lấy sáng LUSWELL VNTHA CPS: 1.50mmx1070mm",
    "sku": "VNTHA",
    "brand": "LusWell",
    "specs": "",
    "unit": "Mét",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 280000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết /mét (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 241920.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ /mét (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 272160.0,
        "vat": "co_vat",
        "label": "Giá thợ /mét (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 302400.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ /mét (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 196560.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu /mét (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0124",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "LẤY SÁNG",
    "row_number": 8,
    "category": "Tấm lợp lấy sáng",
    "group_name": "Tấm nhựa lấy sáng LUSWELL",
    "product_name": "Tấm nhựa lấy sáng LUSWELL VNTHA CPS: 2.00mmx1070mm",
    "sku": "VNTHA",
    "brand": "LusWell",
    "specs": "",
    "unit": "Mét",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 358000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết /mét (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 309312.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ /mét (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 347976.0,
        "vat": "co_vat",
        "label": "Giá thợ /mét (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 386640.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ /mét (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 251316.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu /mét (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0125",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "LẤY SÁNG",
    "row_number": 9,
    "category": "Tấm lợp lấy sáng",
    "group_name": "Tấm nhựa lấy sáng LUSWELL",
    "product_name": "Tấm nhựa lấy sáng LUSWELL VNTHA CPS: 2.50mmx1070mm",
    "sku": "VNTHA",
    "brand": "LusWell",
    "specs": "",
    "unit": "Mét",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 445000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết /mét (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 384480.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ /mét (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 432540.0,
        "vat": "co_vat",
        "label": "Giá thợ /mét (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 480600.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ /mét (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 312390.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu /mét (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0126",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "LẤY SÁNG",
    "row_number": 10,
    "category": "Tấm lợp lấy sáng",
    "group_name": "Tấm nhựa lấy sáng LUSWELL",
    "product_name": "Tấm nhựa lấy sáng LUSWELL VNTHA CPS: 3.00mmx1070mm",
    "sku": "VNTHA",
    "brand": "LusWell",
    "specs": "",
    "unit": "Mét",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 557000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết /mét (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 481248.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ /mét (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 541404.0,
        "vat": "co_vat",
        "label": "Giá thợ /mét (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 601560.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ /mét (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 391014.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu /mét (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0127",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SIEMENS",
    "row_number": 3,
    "category": "Thiết bị đóng ngắt",
    "group_name": "Siemens MCB & RCCB",
    "product_name": "Thiết bị đóng ngắt tự động 1 cực 10A 4.5kA 5TJ3110-7 SI",
    "sku": "5TJ3110-7",
    "brand": "Siemens",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 99360.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)"
      },
      "gia_khach_si": {
        "value": 49680.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 50%)"
      },
      "gia_thau_tho": {
        "value": 54648.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 45%)"
      },
      "gia_khach_le": {
        "value": 59616.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (CK 40%)"
      }
    },
    "id": "PROD-0128",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SIEMENS",
    "row_number": 4,
    "category": "Thiết bị đóng ngắt",
    "group_name": "Siemens MCB & RCCB",
    "product_name": "Thiết bị đóng ngắt tự động 1 cực 16A 4.5kA 5TJ3116-7 SI",
    "sku": "5TJ3116-7",
    "brand": "Siemens",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 99360.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)"
      },
      "gia_khach_si": {
        "value": 49680.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 50%)"
      },
      "gia_thau_tho": {
        "value": 54648.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 45%)"
      },
      "gia_khach_le": {
        "value": 59616.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (CK 40%)"
      }
    },
    "id": "PROD-0129",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SIEMENS",
    "row_number": 5,
    "category": "Thiết bị đóng ngắt",
    "group_name": "Siemens MCB & RCCB",
    "product_name": "Thiết bị đóng ngắt tự động 1 cực 20A 4.5kA 5TJ3120-7 SI",
    "sku": "5TJ3120-7",
    "brand": "Siemens",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 99360.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)"
      },
      "gia_khach_si": {
        "value": 49680.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 50%)"
      },
      "gia_thau_tho": {
        "value": 54648.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 45%)"
      },
      "gia_khach_le": {
        "value": 59616.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (CK 40%)"
      }
    },
    "id": "PROD-0130",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SIEMENS",
    "row_number": 6,
    "category": "Thiết bị đóng ngắt",
    "group_name": "Siemens MCB & RCCB",
    "product_name": "Thiết bị đóng ngắt tự động 1 cực 25A 4.5kA 5TJ3125-7 SI",
    "sku": "5TJ3125-7",
    "brand": "Siemens",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 99360.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)"
      },
      "gia_khach_si": {
        "value": 49680.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 50%)"
      },
      "gia_thau_tho": {
        "value": 54648.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 45%)"
      },
      "gia_khach_le": {
        "value": 59616.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (CK 40%)"
      }
    },
    "id": "PROD-0131",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SIEMENS",
    "row_number": 7,
    "category": "Thiết bị đóng ngắt",
    "group_name": "Siemens MCB & RCCB",
    "product_name": "Thiết bị đóng ngắt tự động 1 cực 32A 4.5kA 5TJ3132-7 SI",
    "sku": "5TJ3132-7",
    "brand": "Siemens",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 99360.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)"
      },
      "gia_khach_si": {
        "value": 49680.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 50%)"
      },
      "gia_thau_tho": {
        "value": 54648.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 45%)"
      },
      "gia_khach_le": {
        "value": 59616.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (CK 40%)"
      }
    },
    "id": "PROD-0132",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SIEMENS",
    "row_number": 8,
    "category": "Thiết bị đóng ngắt",
    "group_name": "Siemens MCB & RCCB",
    "product_name": "Thiết bị đóng ngắt tự động 2 cực 10A 4.5kA 5TJ3210-7 SI",
    "sku": "5TJ3210-7",
    "brand": "Siemens",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 286200.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)"
      },
      "gia_khach_si": {
        "value": 143100.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 50%)"
      },
      "gia_thau_tho": {
        "value": 157410.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 45%)"
      },
      "gia_khach_le": {
        "value": 171720.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (CK 40%)"
      }
    },
    "id": "PROD-0133",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SIEMENS",
    "row_number": 9,
    "category": "Thiết bị đóng ngắt",
    "group_name": "Siemens MCB & RCCB",
    "product_name": "Thiết bị đóng ngắt tự động 2 cực 16A 4.5kA 5TJ3216-7 SI",
    "sku": "5TJ3216-7",
    "brand": "Siemens",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 286200.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)"
      },
      "gia_khach_si": {
        "value": 143100.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 50%)"
      },
      "gia_thau_tho": {
        "value": 157410.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 45%)"
      },
      "gia_khach_le": {
        "value": 171720.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (CK 40%)"
      }
    },
    "id": "PROD-0134",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SIEMENS",
    "row_number": 10,
    "category": "Thiết bị đóng ngắt",
    "group_name": "Siemens MCB & RCCB",
    "product_name": "Thiết bị đóng ngắt tự động 2 cực 20A 4.5kA 5TJ3220-7 SI",
    "sku": "5TJ3220-7",
    "brand": "Siemens",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 286200.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)"
      },
      "gia_khach_si": {
        "value": 143100.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 50%)"
      },
      "gia_thau_tho": {
        "value": 157410.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 45%)"
      },
      "gia_khach_le": {
        "value": 171720.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (CK 40%)"
      }
    },
    "id": "PROD-0135",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SIEMENS",
    "row_number": 11,
    "category": "Thiết bị đóng ngắt",
    "group_name": "Siemens MCB & RCCB",
    "product_name": "Thiết bị đóng ngắt tự động 2 cực 25A 4.5kA 5TJ3225-7 SI",
    "sku": "5TJ3225-7",
    "brand": "Siemens",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 286200.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)"
      },
      "gia_khach_si": {
        "value": 143100.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 50%)"
      },
      "gia_thau_tho": {
        "value": 157410.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 45%)"
      },
      "gia_khach_le": {
        "value": 171720.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (CK 40%)"
      }
    },
    "id": "PROD-0136",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SIEMENS",
    "row_number": 12,
    "category": "Thiết bị đóng ngắt",
    "group_name": "Siemens MCB & RCCB",
    "product_name": "Thiết bị đóng ngắt tự động 2 cực 32A 4.5kA 5TJ3232-7 SI",
    "sku": "5TJ3232-7",
    "brand": "Siemens",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 286200.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)"
      },
      "gia_khach_si": {
        "value": 143100.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 50%)"
      },
      "gia_thau_tho": {
        "value": 157410.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 45%)"
      },
      "gia_khach_le": {
        "value": 171720.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (CK 40%)"
      }
    },
    "id": "PROD-0137",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SIEMENS",
    "row_number": 13,
    "category": "Thiết bị đóng ngắt",
    "group_name": "Siemens MCB & RCCB",
    "product_name": "Thiết bị đóng ngắt tự động 2 cực 40A 4.5kA 5TJ3240-7 SI",
    "sku": "5TJ3240-7",
    "brand": "Siemens",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 286200.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)"
      },
      "gia_khach_si": {
        "value": 143100.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 50%)"
      },
      "gia_thau_tho": {
        "value": 157410.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 45%)"
      },
      "gia_khach_le": {
        "value": 171720.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (CK 40%)"
      }
    },
    "id": "PROD-0138",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SIEMENS",
    "row_number": 14,
    "category": "Thiết bị đóng ngắt",
    "group_name": "Siemens MCB & RCCB",
    "product_name": "Thiết bị đóng ngắt tự động 2 cực 50A 4.5kA 5TJ3250-7 SI",
    "sku": "5TJ3250-7",
    "brand": "Siemens",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 476280.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)"
      },
      "gia_khach_si": {
        "value": 238140.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 50%)"
      },
      "gia_thau_tho": {
        "value": 261954.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 45%)"
      },
      "gia_khach_le": {
        "value": 285768.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (CK 40%)"
      }
    },
    "id": "PROD-0139",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SIEMENS",
    "row_number": 15,
    "category": "Thiết bị đóng ngắt",
    "group_name": "Siemens MCB & RCCB",
    "product_name": "Thiết bị đóng ngắt tự động 2 cực 63A 4.5kA 5TJ3263-7 SI",
    "sku": "5TJ3263-7",
    "brand": "Siemens",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 476280.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)"
      },
      "gia_khach_si": {
        "value": 238140.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 50%)"
      },
      "gia_thau_tho": {
        "value": 261954.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 45%)"
      },
      "gia_khach_le": {
        "value": 285768.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (CK 40%)"
      }
    },
    "id": "PROD-0140",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SIEMENS",
    "row_number": 16,
    "category": "Thiết bị đóng ngắt",
    "group_name": "Siemens MCB & RCCB",
    "product_name": "Thiết bị đóng ngắt tự động 3 cực 32A 4.5kA 5TJ3332-7 SI",
    "sku": "5TJ3332-7",
    "brand": "Siemens",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 509760.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)"
      },
      "gia_khach_si": {
        "value": 254880.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 50%)"
      },
      "gia_thau_tho": {
        "value": 280368.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 45%)"
      },
      "gia_khach_le": {
        "value": 305856.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (CK 40%)"
      }
    },
    "id": "PROD-0141",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SIEMENS",
    "row_number": 17,
    "category": "Thiết bị đóng ngắt",
    "group_name": "Siemens MCB & RCCB",
    "product_name": "Thiết bị đóng ngắt tự động 3 cực 40A 4.5kA 5TJ3340-7 SI",
    "sku": "5TJ3340-7",
    "brand": "Siemens",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 509760.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)"
      },
      "gia_khach_si": {
        "value": 254880.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 50%)"
      },
      "gia_thau_tho": {
        "value": 280368.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 45%)"
      },
      "gia_khach_le": {
        "value": 305856.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (CK 40%)"
      }
    },
    "id": "PROD-0142",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SIEMENS",
    "row_number": 18,
    "category": "Thiết bị đóng ngắt",
    "group_name": "Siemens MCB & RCCB",
    "product_name": "Thiết bị đóng ngắt tự động 3 cực 50A 4.5kA 5TJ3350-7 SI",
    "sku": "5TJ3350-7",
    "brand": "Siemens",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 762480.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)"
      },
      "gia_khach_si": {
        "value": 381240.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 50%)"
      },
      "gia_thau_tho": {
        "value": 419364.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 45%)"
      },
      "gia_khach_le": {
        "value": 457488.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (CK 40%)"
      }
    },
    "id": "PROD-0143",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SIEMENS",
    "row_number": 19,
    "category": "Thiết bị đóng ngắt",
    "group_name": "Siemens MCB & RCCB",
    "product_name": "Thiết bị đóng ngắt tự động 3 cực 63A 4.5kA 5TJ3363-7 SI",
    "sku": "5TJ3363-7",
    "brand": "Siemens",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 762480.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)"
      },
      "gia_khach_si": {
        "value": 381240.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 50%)"
      },
      "gia_thau_tho": {
        "value": 419364.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 45%)"
      },
      "gia_khach_le": {
        "value": 457488.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (CK 40%)"
      }
    },
    "id": "PROD-0144",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SIEMENS",
    "row_number": 20,
    "category": "Thiết bị đóng ngắt",
    "group_name": "Siemens MCB & RCCB",
    "product_name": "Thiết bị đóng ngắt tự động chống dòng rò 2 cực 25A 30mA 6kA 5TJ7312-0 SI",
    "sku": "5TJ7312-0",
    "brand": "Siemens",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 1023840.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)"
      },
      "gia_khach_si": {
        "value": 511920.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 50%)"
      },
      "gia_thau_tho": {
        "value": 563112.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 45%)"
      },
      "gia_khach_le": {
        "value": 614304.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (CK 40%)"
      }
    },
    "id": "PROD-0145",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SIEMENS",
    "row_number": 21,
    "category": "Thiết bị đóng ngắt",
    "group_name": "Siemens MCB & RCCB",
    "product_name": "Thiết bị đóng ngắt tự động chống dòng rò 2 cực 40A 30mA 6kA 5TJ7314-0 SI",
    "sku": "5TJ7314-0",
    "brand": "Siemens",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 1087560.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)"
      },
      "gia_khach_si": {
        "value": 543780.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 50%)"
      },
      "gia_thau_tho": {
        "value": 598158.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 45%)"
      },
      "gia_khach_le": {
        "value": 652536.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (CK 40%)"
      }
    },
    "id": "PROD-0146",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "SIEMENS",
    "row_number": 22,
    "category": "Thiết bị đóng ngắt",
    "group_name": "Siemens MCB & RCCB",
    "product_name": "Thiết bị đóng ngắt tự động chống dòng rò 2 cực 63A 30mA 6kA 5TJ7316-0 SI",
    "sku": "5TJ7316-0",
    "brand": "Siemens",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 1125360.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)"
      },
      "gia_khach_si": {
        "value": 562680.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 50%)"
      },
      "gia_thau_tho": {
        "value": 618948.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 45%)"
      },
      "gia_khach_le": {
        "value": 675216.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (CK 40%)"
      }
    },
    "id": "PROD-0147",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 3,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-3T LUSCOM CNYAN: 3W ánh sáng trắng",
    "sku": "LBP-3T",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ. SL mẫu: 100 cái/ mẫu",
    "prices": {
      "gia_niem_yet": {
        "value": 20520.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 20.52
      },
      "gia_khach_si": {
        "value": 16416.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 16.416
      },
      "gia_thau_tho": {
        "value": 18468.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 18.468
      },
      "gia_khach_le": {
        "value": 20520.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 20.52
      },
      "gia_ban_mau": {
        "value": 13338.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 13.338
      }
    },
    "id": "PROD-0148",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 4,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-5T LUSCOM CNYAN: 5W ánh sáng trắng",
    "sku": "LBP-5T",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 23760.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 23.76
      },
      "gia_khach_si": {
        "value": 19008.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 19.008
      },
      "gia_thau_tho": {
        "value": 21384.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 21.384
      },
      "gia_khach_le": {
        "value": 23760.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 23.76
      },
      "gia_ban_mau": {
        "value": 15444.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 15.444
      }
    },
    "id": "PROD-0149",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 5,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-7T LUSCOM CNYAN: 7W ánh sáng trắng",
    "sku": "LBP-7T",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 29160.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 29.16
      },
      "gia_khach_si": {
        "value": 23328.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 23.328
      },
      "gia_thau_tho": {
        "value": 26244.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 26.244
      },
      "gia_khach_le": {
        "value": 29160.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 29.16
      },
      "gia_ban_mau": {
        "value": 18954.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 18.954
      }
    },
    "id": "PROD-0150",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 6,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-9T LUSCOM CNYAN: 9W ánh sáng trắng",
    "sku": "LBP-9T",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 34560.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 34.56
      },
      "gia_khach_si": {
        "value": 27648.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 27.648
      },
      "gia_thau_tho": {
        "value": 31104.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 31.104
      },
      "gia_khach_le": {
        "value": 34560.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 34.56
      },
      "gia_ban_mau": {
        "value": 22464.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 22.464
      }
    },
    "id": "PROD-0151",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 7,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-9V LUSCOM CNYAN: 9W ánh sáng vàng",
    "sku": "LBP-9V",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 34560.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 34.56
      },
      "gia_khach_si": {
        "value": 27648.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 27.648
      },
      "gia_thau_tho": {
        "value": 31104.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 31.104
      },
      "gia_khach_le": {
        "value": 34560.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 34.56
      },
      "gia_ban_mau": {
        "value": 22464.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 22.464
      }
    },
    "id": "PROD-0152",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 8,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-12T LUSCOM CNYAN: 12W ánh sáng trắng",
    "sku": "LBP-12T",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "80 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 42120.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 42.12
      },
      "gia_khach_si": {
        "value": 33696.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 33.696
      },
      "gia_thau_tho": {
        "value": 37908.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 37.908
      },
      "gia_khach_le": {
        "value": 42120.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 42.12
      },
      "gia_ban_mau": {
        "value": 27378.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 27.378
      }
    },
    "id": "PROD-0153",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 9,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-15T LUSCOM CNYAN: 15W ánh sáng trắng",
    "sku": "LBP-15T",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "80 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 56160.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 56.16
      },
      "gia_khach_si": {
        "value": 44928.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 44.928
      },
      "gia_thau_tho": {
        "value": 50544.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 50.544
      },
      "gia_khach_le": {
        "value": 56160.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 56.16
      },
      "gia_ban_mau": {
        "value": 36504.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 36.504
      }
    },
    "id": "PROD-0154",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 10,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-20T LUSCOM CNYAN: 20W ánh sáng trắng",
    "sku": "LBP-20T",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "40 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ. SL mẫu: 40 cái/ mẫu",
    "prices": {
      "gia_niem_yet": {
        "value": 68040.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 68.04
      },
      "gia_khach_si": {
        "value": 54432.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 54.432
      },
      "gia_thau_tho": {
        "value": 61236.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 61.236
      },
      "gia_khach_le": {
        "value": 68040.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 68.04
      },
      "gia_ban_mau": {
        "value": 44226.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 44.226
      }
    },
    "id": "PROD-0155",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 11,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-20V LUSCOM CNYAN: 20W ánh sáng vàng",
    "sku": "LBP-20V",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "40 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 68040.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 68.04
      },
      "gia_khach_si": {
        "value": 54432.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 54.432
      },
      "gia_thau_tho": {
        "value": 61236.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 61.236
      },
      "gia_khach_le": {
        "value": 68040.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 68.04
      },
      "gia_ban_mau": {
        "value": 44226.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 44.226
      }
    },
    "id": "PROD-0156",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 12,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-30T LUSCOM CNYAN: 30W ánh sáng trắng",
    "sku": "LBP-30T",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "20 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 101520.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 101.52
      },
      "gia_khach_si": {
        "value": 81216.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 81.216
      },
      "gia_thau_tho": {
        "value": 91368.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 91.368
      },
      "gia_khach_le": {
        "value": 101520.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 101.52
      },
      "gia_ban_mau": {
        "value": 65988.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 65.988
      }
    },
    "id": "PROD-0157",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 13,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-30V LUSCOM CNYAN: 30W ánh sáng vàng",
    "sku": "LBP-30V",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "20 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 101520.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 101.52
      },
      "gia_khach_si": {
        "value": 81216.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 81.216
      },
      "gia_thau_tho": {
        "value": 91368.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 91.368
      },
      "gia_khach_le": {
        "value": 101520.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 101.52
      },
      "gia_ban_mau": {
        "value": 65988.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 65.988
      }
    },
    "id": "PROD-0158",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 14,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-40T LUSCOM CNYAN: 40W ánh sáng trắng",
    "sku": "LBP-40T",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "12 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 135000.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 135.0
      },
      "gia_khach_si": {
        "value": 108000.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 108.0
      },
      "gia_thau_tho": {
        "value": 121500.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 121.5
      },
      "gia_khach_le": {
        "value": 135000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 135.0
      },
      "gia_ban_mau": {
        "value": 87750.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 87.75
      }
    },
    "id": "PROD-0159",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 15,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-40V LUSCOM CNYAN: 40W ánh sáng vàng",
    "sku": "LBP-40V",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "12 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 135000.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 135.0
      },
      "gia_khach_si": {
        "value": 108000.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 108.0
      },
      "gia_thau_tho": {
        "value": 121500.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 121.5
      },
      "gia_khach_le": {
        "value": 135000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 135.0
      },
      "gia_ban_mau": {
        "value": 87750.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 87.75
      }
    },
    "id": "PROD-0160",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 16,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-50T LUSCOM CNYAN: 50W ánh sáng trắng",
    "sku": "LBP-50T",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "8 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 162000.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 162.0
      },
      "gia_khach_si": {
        "value": 129600.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 129.6
      },
      "gia_thau_tho": {
        "value": 145800.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 145.8
      },
      "gia_khach_le": {
        "value": 162000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 162.0
      },
      "gia_ban_mau": {
        "value": 105300.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 105.3
      }
    },
    "id": "PROD-0161",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 17,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Bulb (trụ nhựa, đuôi E27) LBP-50V LUSCOM CNYAN: 50W ánh sáng vàng",
    "sku": "LBP-50V",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "8 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 162000.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 162.0
      },
      "gia_khach_si": {
        "value": 129600.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 129.6
      },
      "gia_thau_tho": {
        "value": 145800.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 145.8
      },
      "gia_khach_le": {
        "value": 162000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 162.0
      },
      "gia_ban_mau": {
        "value": 105300.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 105.3
      }
    },
    "id": "PROD-0162",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 18,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Bulb (trụ nhôm, đuôi E27) LBN-30T LUSCOM CNYAN: 30W ánh sáng trắng",
    "sku": "CNYAN",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "12 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ. SL mẫu: 40 cái/ mẫu",
    "prices": {
      "gia_niem_yet": {
        "value": 109080.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 109.08
      },
      "gia_khach_si": {
        "value": 87264.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 87.264
      },
      "gia_thau_tho": {
        "value": 98172.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 98.172
      },
      "gia_khach_le": {
        "value": 109080.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 109.08
      },
      "gia_ban_mau": {
        "value": 70902.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 70.902
      }
    },
    "id": "PROD-0163",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 19,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Bulb (trụ nhôm, đuôi E27) LBN-30V LUSCOM CNYAN: 30W ánh sáng vàng",
    "sku": "CNYAN",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "12 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 109080.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 109.08
      },
      "gia_khach_si": {
        "value": 87264.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 87.264
      },
      "gia_thau_tho": {
        "value": 98172.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 98.172
      },
      "gia_khach_le": {
        "value": 109080.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 109.08
      },
      "gia_ban_mau": {
        "value": 70902.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 70.902
      }
    },
    "id": "PROD-0164",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 20,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Bulb (trụ nhôm, đuôi E27) LBN-40T LUSCOM CNYAN: 40W ánh sáng trắng",
    "sku": "CNYAN",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "12 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 164160.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 164.16
      },
      "gia_khach_si": {
        "value": 131328.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 131.328
      },
      "gia_thau_tho": {
        "value": 147744.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 147.744
      },
      "gia_khach_le": {
        "value": 164160.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 164.16
      },
      "gia_ban_mau": {
        "value": 106704.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 106.704
      }
    },
    "id": "PROD-0165",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 21,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Bulb (trụ nhôm, đuôi E27) LBN-40V LUSCOM CNYAN: 40W ánh sáng vàng",
    "sku": "CNYAN",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "12 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 164160.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 164.16
      },
      "gia_khach_si": {
        "value": 131328.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 131.328
      },
      "gia_thau_tho": {
        "value": 147744.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 147.744
      },
      "gia_khach_le": {
        "value": 164160.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 164.16
      },
      "gia_ban_mau": {
        "value": 106704.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 106.704
      }
    },
    "id": "PROD-0166",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 22,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Bulb (trụ nhôm, đuôi E27) LBN-50T LUSCOM CNYAN: 50W ánh sáng trắng",
    "sku": "CNYAN",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "8 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 194400.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 194.4
      },
      "gia_khach_si": {
        "value": 155520.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 155.52
      },
      "gia_thau_tho": {
        "value": 174960.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 174.96
      },
      "gia_khach_le": {
        "value": 194400.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 194.4
      },
      "gia_ban_mau": {
        "value": 126360.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 126.36
      }
    },
    "id": "PROD-0167",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 23,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Bulb (trụ nhôm, đuôi E27) LBN-50V LUSCOM CNYAN: 50W ánh sáng vàng",
    "sku": "CNYAN",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "8 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 194400.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 194.4
      },
      "gia_khach_si": {
        "value": 155520.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 155.52
      },
      "gia_thau_tho": {
        "value": 174960.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 174.96
      },
      "gia_khach_le": {
        "value": 194400.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 194.4
      },
      "gia_ban_mau": {
        "value": 126360.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 126.36
      }
    },
    "id": "PROD-0168",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 24,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Bulb (trụ nhôm, đuôi E27) LBN-60T LUSCOM CNYAN: 60W ánh sáng trắng",
    "sku": "CNYAN",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "8 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 291600.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 291.6
      },
      "gia_khach_si": {
        "value": 233280.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 233.28
      },
      "gia_thau_tho": {
        "value": 262440.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 262.44
      },
      "gia_khach_le": {
        "value": 291600.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 291.6
      },
      "gia_ban_mau": {
        "value": 189540.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 189.54
      }
    },
    "id": "PROD-0169",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 25,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Bulb (trụ nhôm, đuôi E27) LBN-80T LUSCOM CNYAN: 80W ánh sáng trắng",
    "sku": "CNYAN",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "8 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 395280.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 395.28
      },
      "gia_khach_si": {
        "value": 316224.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 316.224
      },
      "gia_thau_tho": {
        "value": 355752.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 355.752
      },
      "gia_khach_le": {
        "value": 395280.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 395.28
      },
      "gia_ban_mau": {
        "value": 256932.00000000003,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 256.932
      }
    },
    "id": "PROD-0170",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 29,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Panel âm trần (đổi màu) RP-7CC LUSCOM CNTWI: 7W/3CCT",
    "sku": "CNTWI",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "60 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ. SL mẫu: 60 cái/ mẫu",
    "prices": {
      "gia_niem_yet": {
        "value": 108000.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 108.0
      },
      "gia_khach_si": {
        "value": 86400.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 86.4
      },
      "gia_thau_tho": {
        "value": 97200.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 97.2
      },
      "gia_khach_le": {
        "value": 108000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 108.0
      },
      "gia_ban_mau": {
        "value": 70200.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 70.2
      }
    },
    "id": "PROD-0171",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 30,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Panel âm trần (đổi màu) RP-9CC LUSCOM CNTWI: 9W/3CCT",
    "sku": "CNTWI",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "40 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 113400.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 113.4
      },
      "gia_khach_si": {
        "value": 90720.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 90.72
      },
      "gia_thau_tho": {
        "value": 102060.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 102.06
      },
      "gia_khach_le": {
        "value": 113400.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 113.4
      },
      "gia_ban_mau": {
        "value": 73710.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 73.71
      }
    },
    "id": "PROD-0172",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 31,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Panel âm trần (đổi màu) RP-12CC LUSCOM CNTWI: 12W/3CCT",
    "sku": "CNTWI",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "40 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 129600.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 129.6
      },
      "gia_khach_si": {
        "value": 103680.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 103.68
      },
      "gia_thau_tho": {
        "value": 116640.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 116.64
      },
      "gia_khach_le": {
        "value": 129600.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 129.6
      },
      "gia_ban_mau": {
        "value": 84240.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 84.24
      }
    },
    "id": "PROD-0173",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 32,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Panel âm trần (đổi màu, viền vàng) RP-7CC/G LUSCOM CNTWI: 7W/3CCT",
    "sku": "CNTWI",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "60 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 113400.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 113.4
      },
      "gia_khach_si": {
        "value": 90720.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 90.72
      },
      "gia_thau_tho": {
        "value": 102060.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 102.06
      },
      "gia_khach_le": {
        "value": 113400.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 113.4
      },
      "gia_ban_mau": {
        "value": 73710.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 73.71
      }
    },
    "id": "PROD-0174",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 33,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Panel âm trần (đổi màu, viền vàng) RP-9CC/G LUSCOM CNTWI: 9W/3CCT",
    "sku": "CNTWI",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "40 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 129600.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 129.6
      },
      "gia_khach_si": {
        "value": 103680.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 103.68
      },
      "gia_thau_tho": {
        "value": 116640.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 116.64
      },
      "gia_khach_le": {
        "value": 129600.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 129.6
      },
      "gia_ban_mau": {
        "value": 84240.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 84.24
      }
    },
    "id": "PROD-0175",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 34,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Panel âm trần (đổi màu, viền vàng) RP-12CC/G LUSCOM CNTWI: 12W/3CCT",
    "sku": "CNTWI",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "40 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 135000.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 135.0
      },
      "gia_khach_si": {
        "value": 108000.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 108.0
      },
      "gia_thau_tho": {
        "value": 121500.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 121.5
      },
      "gia_khach_le": {
        "value": 135000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 135.0
      },
      "gia_ban_mau": {
        "value": 87750.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 87.75
      }
    },
    "id": "PROD-0176",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 35,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Panel âm trần (đổi màu, viền bạc) RP-7CC/S LUSCOM CNTWI: 7W/3CCT",
    "sku": "CNTWI",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "60 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 113400.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 113.4
      },
      "gia_khach_si": {
        "value": 90720.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 90.72
      },
      "gia_thau_tho": {
        "value": 102060.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 102.06
      },
      "gia_khach_le": {
        "value": 113400.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 113.4
      },
      "gia_ban_mau": {
        "value": 73710.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 73.71
      }
    },
    "id": "PROD-0177",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 36,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Panel âm trần (đổi màu, viền bạc) RP-9CC/S LUSCOM CNTWI: 9W/3CCT",
    "sku": "CNTWI",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "40 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 129600.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 129.6
      },
      "gia_khach_si": {
        "value": 103680.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 103.68
      },
      "gia_thau_tho": {
        "value": 116640.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 116.64
      },
      "gia_khach_le": {
        "value": 129600.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 129.6
      },
      "gia_ban_mau": {
        "value": 84240.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 84.24
      }
    },
    "id": "PROD-0178",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 37,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Panel âm trần (đổi màu, viền bạc) RP-12CC/S LUSCOM CNTWI: 12W/3CCT",
    "sku": "CNTWI",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "40 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 135000.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 135.0
      },
      "gia_khach_si": {
        "value": 108000.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 108.0
      },
      "gia_thau_tho": {
        "value": 121500.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 121.5
      },
      "gia_khach_le": {
        "value": 135000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 135.0
      },
      "gia_ban_mau": {
        "value": 87750.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 87.75
      }
    },
    "id": "PROD-0179",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 38,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Panel âm trần RP-7V LUSCOM CNTWI: 7W ánh sáng vàng",
    "sku": "CNTWI",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "60 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 81000.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 81.0
      },
      "gia_khach_si": {
        "value": 64800.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 64.8
      },
      "gia_thau_tho": {
        "value": 72900.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 72.9
      },
      "gia_khach_le": {
        "value": 81000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 81.0
      },
      "gia_ban_mau": {
        "value": 52650.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 52.65
      }
    },
    "id": "PROD-0180",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 39,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Panel âm trần RP-7T LUSCOM CNTWI: 7W ánh sáng trắng",
    "sku": "CNTWI",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "60 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 81000.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 81.0
      },
      "gia_khach_si": {
        "value": 64800.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 64.8
      },
      "gia_thau_tho": {
        "value": 72900.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 72.9
      },
      "gia_khach_le": {
        "value": 81000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 81.0
      },
      "gia_ban_mau": {
        "value": 52650.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 52.65
      }
    },
    "id": "PROD-0181",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 40,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Panel âm trần RP-9V LUSCOM CNTWI: 9W ánh sáng vàng",
    "sku": "CNTWI",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "40 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 91800.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 91.8
      },
      "gia_khach_si": {
        "value": 73440.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 73.44
      },
      "gia_thau_tho": {
        "value": 82620.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 82.62
      },
      "gia_khach_le": {
        "value": 91800.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 91.8
      },
      "gia_ban_mau": {
        "value": 59670.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 59.67
      }
    },
    "id": "PROD-0182",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 41,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Panel âm trần RP-9T LUSCOM CNTWI: 9W ánh sáng trắng",
    "sku": "CNTWI",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "40 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 91800.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 91.8
      },
      "gia_khach_si": {
        "value": 73440.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 73.44
      },
      "gia_thau_tho": {
        "value": 82620.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 82.62
      },
      "gia_khach_le": {
        "value": 91800.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 91.8
      },
      "gia_ban_mau": {
        "value": 59670.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 59.67
      }
    },
    "id": "PROD-0183",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 42,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Panel âm trần RP-12V LUSCOM CNTWI: 12W ánh sáng vàng",
    "sku": "CNTWI",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "40 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 124200.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 124.2
      },
      "gia_khach_si": {
        "value": 99360.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 99.36
      },
      "gia_thau_tho": {
        "value": 111780.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 111.78
      },
      "gia_khach_le": {
        "value": 124200.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 124.2
      },
      "gia_ban_mau": {
        "value": 80730.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 80.73
      }
    },
    "id": "PROD-0184",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 43,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "LED BULB",
    "product_name": "Đèn Led Panel âm trần RP-12T LUSCOM CNTWI: 12W ánh sáng trắng",
    "sku": "CNTWI",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "40 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 124200.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 124.2
      },
      "gia_khach_si": {
        "value": 99360.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 99.36
      },
      "gia_thau_tho": {
        "value": 111780.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 111.78
      },
      "gia_khach_le": {
        "value": 124200.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 124.2
      },
      "gia_ban_mau": {
        "value": 80730.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 80.73
      }
    },
    "id": "PROD-0185",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "ĐÈN ĐIỆN",
    "row_number": 47,
    "category": "Thiết bị chiếu sáng LED",
    "group_name": "BẢNG GIÁ ĐÈN PANEL VUÔNG LUSCOM",
    "product_name": "Đèn Led Panel SP-40T LUSCOM CNSHI: 40W ánh sáng trắng",
    "sku": "CNSHI",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "6 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ. SL mẫu: 60 cái",
    "prices": {
      "gia_niem_yet": {
        "value": 365040000.0,
        "vat": "co_vat",
        "label": "Giá niêm yết (Đã có VAT)",
        "raw_value": 365040.0
      },
      "gia_khach_si": {
        "value": 292032000.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20%)",
        "raw_value": 292032.0
      },
      "gia_thau_tho": {
        "value": 328536000.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10%)",
        "raw_value": 328536.0
      },
      "gia_khach_le": {
        "value": 365040000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ",
        "raw_value": 365040.0
      },
      "gia_ban_mau": {
        "value": 237276000.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35%)",
        "raw_value": 237276.0
      }
    },
    "id": "PROD-0186",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "TMX",
    "row_number": 3,
    "category": "Tấm xi măng Cemboard",
    "group_name": "TẤM XI MĂNG CNSAN",
    "product_name": "TẤM XI MĂNG CNSAN: 2440mmx1220mmx6.00mm",
    "sku": "CNSAN",
    "brand": "Hoa Sen Home",
    "specs": "2440mmx1220mmx6.00mm",
    "unit": "Tấm",
    "packaging": "27,7 Kg/Tấm, Kiện ngang: 102, Kiện dọc: 140",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 280000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 226800.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (có VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 257040.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (có VAT 8%)"
      },
      "gia_khach_le": {
        "value": 293328.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (có VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 196560.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (có VAT 8%)"
      }
    },
    "id": "PROD-0187",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "TMX",
    "row_number": 4,
    "category": "Tấm xi măng Cemboard",
    "group_name": "TẤM XI MĂNG CNSAN",
    "product_name": "TẤM XI MĂNG CNSAN: 2440mmx1220mmx8.00mm",
    "sku": "CNSAN",
    "brand": "Hoa Sen Home",
    "specs": "2440mmx1220mmx8.00mm",
    "unit": "Tấm",
    "packaging": "37,0 Kg/Tấm, Kiện ngang: 77, Kiện dọc: 105",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 371000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 300510.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (có VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 340578.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (có VAT 8%)"
      },
      "gia_khach_le": {
        "value": 388659.6,
        "vat": "co_vat",
        "label": "Giá khách lẻ (có VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 260442.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (có VAT 8%)"
      }
    },
    "id": "PROD-0188",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "TMX",
    "row_number": 5,
    "category": "Tấm xi măng Cemboard",
    "group_name": "TẤM XI MĂNG CNSAN",
    "product_name": "TẤM XI MĂNG CNSAN: 2440mmx1220mmx10.00mm",
    "sku": "CNSAN",
    "brand": "Hoa Sen Home",
    "specs": "2440mmx1220mmx10.00mm",
    "unit": "Tấm",
    "packaging": "46,2 Kg/Tấm, Kiện ngang: 61, Kiện dọc: 84",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 451000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 365310.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (có VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 414018.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (có VAT 8%)"
      },
      "gia_khach_le": {
        "value": 472467.6,
        "vat": "co_vat",
        "label": "Giá khách lẻ (có VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 316602.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (có VAT 8%)"
      }
    },
    "id": "PROD-0189",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "TMX",
    "row_number": 6,
    "category": "Tấm xi măng Cemboard",
    "group_name": "TẤM XI MĂNG CNSAN",
    "product_name": "TẤM XI MĂNG CNSAN: 2440mmx1220mmx12.00mm",
    "sku": "CNSAN",
    "brand": "Hoa Sen Home",
    "specs": "2440mmx1220mmx12.00mm",
    "unit": "Tấm",
    "packaging": "55,5 Kg/Tấm, Kiện ngang: 51, Kiện dọc: 70",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 541000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 438210.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (có VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 496638.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (có VAT 8%)"
      },
      "gia_khach_le": {
        "value": 566751.6,
        "vat": "co_vat",
        "label": "Giá khách lẻ (có VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 379782.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (có VAT 8%)"
      }
    },
    "id": "PROD-0190",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "TMX",
    "row_number": 7,
    "category": "Tấm xi măng Cemboard",
    "group_name": "TẤM XI MĂNG CNSAN",
    "product_name": "TẤM XI MĂNG CNSAN: 2440mmx1220mmx14.00mm",
    "sku": "CNSAN",
    "brand": "Hoa Sen Home",
    "specs": "2440mmx1220mmx14.00mm",
    "unit": "Tấm",
    "packaging": "64,7 Kg/Tấm, Kiện ngang: 43, Kiện dọc: 53",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 640000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 518400.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (có VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 587520.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (có VAT 8%)"
      },
      "gia_khach_le": {
        "value": 670464.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (có VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 449280.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (có VAT 8%)"
      }
    },
    "id": "PROD-0191",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "TMX",
    "row_number": 8,
    "category": "Tấm xi măng Cemboard",
    "group_name": "TẤM XI MĂNG CNSAN",
    "product_name": "TẤM XI MĂNG CNSAN: 2440mmx1220mmx16.00mm",
    "sku": "CNSAN",
    "brand": "Hoa Sen Home",
    "specs": "2440mmx1220mmx16.00mm",
    "unit": "Tấm",
    "packaging": "74,0 Kg/Tấm, Kiện ngang: 38, Kiện dọc: 47",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 725000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 587250.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (có VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 665550.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (có VAT 8%)"
      },
      "gia_khach_le": {
        "value": 759510.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (có VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 508950.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (có VAT 8%)"
      }
    },
    "id": "PROD-0192",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "TMX",
    "row_number": 9,
    "category": "Tấm xi măng Cemboard",
    "group_name": "TẤM XI MĂNG CNSAN",
    "product_name": "TẤM XI MĂNG CNSAN: 2440mmx1220mmx18.00mm",
    "sku": "CNSAN",
    "brand": "Hoa Sen Home",
    "specs": "2440mmx1220mmx18.00mm",
    "unit": "Tấm",
    "packaging": "83,2 Kg/Tấm, Kiện ngang: 34, Kiện dọc: 41",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 820000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 664200.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (có VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 752760.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (có VAT 8%)"
      },
      "gia_khach_le": {
        "value": 859032.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (có VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 575640.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (có VAT 8%)"
      }
    },
    "id": "PROD-0193",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "TMX",
    "row_number": 10,
    "category": "Tấm xi măng Cemboard",
    "group_name": "TẤM XI MĂNG CNSAN",
    "product_name": "TẤM XI MĂNG CNSAN: 2440mmx1220mmx20.00mm",
    "sku": "CNSAN",
    "brand": "Hoa Sen Home",
    "specs": "2440mmx1220mmx20.00mm",
    "unit": "Tấm",
    "packaging": "None Kg/Tấm, Kiện ngang: 30, Kiện dọc: 37",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 950000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 769500.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (có VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 872100.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (có VAT 8%)"
      },
      "gia_khach_le": {
        "value": 995220.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (có VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 666900.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (có VAT 8%)"
      }
    },
    "id": "PROD-0194",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "TMX",
    "row_number": 14,
    "category": "Tấm xi măng Cemboard",
    "group_name": "TẤM XI MĂNG THDIA",
    "product_name": "TẤM XI MĂNG THDIA: 2440mmx1220mmx6.00mm",
    "sku": "THDIA",
    "brand": "Hoa Sen Home",
    "specs": "2440mmx1220mmx6.00mm",
    "unit": "Tấm",
    "packaging": "26 Kg/Tấm, Kiện ngang: 98, Kiện dọc: 118",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 278000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 234187.2,
        "vat": "co_vat",
        "label": "Giá khách sỉ (có VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 264211.2,
        "vat": "co_vat",
        "label": "Giá thầu thợ (có VAT 8%)"
      },
      "gia_khach_le": {
        "value": 294235.2,
        "vat": "co_vat",
        "label": "Giá khách lẻ (có VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 195156.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (có VAT 8%)"
      }
    },
    "id": "PROD-0195",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "TMX",
    "row_number": 15,
    "category": "Tấm xi măng Cemboard",
    "group_name": "TẤM XI MĂNG THDIA",
    "product_name": "TẤM XI MĂNG THDIA: 2440mmx1220mmx8.00mm",
    "sku": "THDIA",
    "brand": "Hoa Sen Home",
    "specs": "2440mmx1220mmx8.00mm",
    "unit": "Tấm",
    "packaging": "36 Kg/Tấm, Kiện ngang: 74, Kiện dọc: 87",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 371000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 312530.4,
        "vat": "co_vat",
        "label": "Giá khách sỉ (có VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 352598.4,
        "vat": "co_vat",
        "label": "Giá thầu thợ (có VAT 8%)"
      },
      "gia_khach_le": {
        "value": 392666.4,
        "vat": "co_vat",
        "label": "Giá khách lẻ (có VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 260442.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (có VAT 8%)"
      }
    },
    "id": "PROD-0196",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "TMX",
    "row_number": 16,
    "category": "Tấm xi măng Cemboard",
    "group_name": "TẤM XI MĂNG THDIA",
    "product_name": "TẤM XI MĂNG THDIA: 2440mmx1220mmx14.00mm",
    "sku": "THDIA",
    "brand": "Hoa Sen Home",
    "specs": "2440mmx1220mmx14.00mm",
    "unit": "Tấm",
    "packaging": "65 Kg/Tấm, Kiện ngang: 42, Kiện dọc: 50",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 630000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 530712.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (có VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 598752.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (có VAT 8%)"
      },
      "gia_khach_le": {
        "value": 666792.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (có VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 442260.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (có VAT 8%)"
      }
    },
    "id": "PROD-0197",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "TMX",
    "row_number": 17,
    "category": "Tấm xi măng Cemboard",
    "group_name": "TẤM XI MĂNG THDIA",
    "product_name": "TẤM XI MĂNG THDIA: 2440mmx1220mmx16.00mm",
    "sku": "THDIA",
    "brand": "Hoa Sen Home",
    "specs": "2440mmx1220mmx16.00mm",
    "unit": "Tấm",
    "packaging": "75 Kg/Tấm, Kiện ngang: 37, Kiện dọc: 44",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 708000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 596419.2,
        "vat": "co_vat",
        "label": "Giá khách sỉ (có VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 672883.2,
        "vat": "co_vat",
        "label": "Giá thầu thợ (có VAT 8%)"
      },
      "gia_khach_le": {
        "value": 749347.2,
        "vat": "co_vat",
        "label": "Giá khách lẻ (có VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 497016.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (có VAT 8%)"
      }
    },
    "id": "PROD-0198",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "TMX",
    "row_number": 18,
    "category": "Tấm xi măng Cemboard",
    "group_name": "TẤM XI MĂNG THDIA",
    "product_name": "TẤM XI MĂNG THDIA: 2440mmx1220mmx18.00mm",
    "sku": "THDIA",
    "brand": "Hoa Sen Home",
    "specs": "2440mmx1220mmx18.00mm",
    "unit": "Tấm",
    "packaging": "85 Kg/Tấm, Kiện ngang: 33, Kiện dọc: 38",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 825000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 694980.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (có VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 784080.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (có VAT 8%)"
      },
      "gia_khach_le": {
        "value": 873180.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (có VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 579150.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (có VAT 8%)"
      }
    },
    "id": "PROD-0199",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CHỐNG THẤM",
    "row_number": 3,
    "category": "Hóa chất chống thấm",
    "group_name": "Chất chống thấm pha xi măng sàn LUSCOAT VNDON",
    "product_name": "Chất chống thấm pha xi măng sàn LUSCOAT VNDON - 5KG",
    "sku": "VNDON",
    "brand": "LusCoat",
    "specs": "Khối lượng: 5KG",
    "unit": "Lon",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 500000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 432000.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 486000.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 540000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 351000.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0200",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CHỐNG THẤM",
    "row_number": 4,
    "category": "Hóa chất chống thấm",
    "group_name": "Chất chống thấm pha xi măng sàn LUSCOAT VNDON",
    "product_name": "Chất chống thấm pha xi măng sàn LUSCOAT VNDON - 20KG",
    "sku": "VNDON",
    "brand": "LusCoat",
    "specs": "Khối lượng: 20KG",
    "unit": "THÙNG",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 1800000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 1555200.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 1749600.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 1944000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 1263600.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0201",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CHỐNG THẤM",
    "row_number": 5,
    "category": "Hóa chất chống thấm",
    "group_name": "Chất chống thấm pha xi măng tường LUSCOAT VNDON",
    "product_name": "Chất chống thấm pha xi măng tường LUSCOAT VNDON - 5KG",
    "sku": "VNDON",
    "brand": "LusCoat",
    "specs": "Khối lượng: 5KG",
    "unit": "Lon",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 500000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 432000.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 486000.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 540000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 351000.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0202",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CHỐNG THẤM",
    "row_number": 6,
    "category": "Hóa chất chống thấm",
    "group_name": "Chất chống thấm pha xi măng tường LUSCOAT VNDON",
    "product_name": "Chất chống thấm pha xi măng tường LUSCOAT VNDON - 20KG",
    "sku": "VNDON",
    "brand": "LusCoat",
    "specs": "Khối lượng: 20KG",
    "unit": "THÙNG",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 1800000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 1555200.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 1749600.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 1944000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 1263600.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0203",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CHỐNG THẤM",
    "row_number": 7,
    "category": "Hóa chất chống thấm",
    "group_name": "Chống thấm màu trắng sứ LUSCOAT CNYUH: 5Kg",
    "product_name": "Chống thấm màu trắng sứ LUSCOAT CNYUH: 5Kg - 5KG",
    "sku": "CNYUH",
    "brand": "LusCoat",
    "specs": "Khối lượng: 5KG",
    "unit": "LON",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 650000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 561600.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 631800.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 702000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 456300.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0204",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CHỐNG THẤM",
    "row_number": 8,
    "category": "Hóa chất chống thấm",
    "group_name": "Chống thấm màu xám đậm LUSCOAT CNYUH: 5Kg",
    "product_name": "Chống thấm màu xám đậm LUSCOAT CNYUH: 5Kg - 5KG",
    "sku": "CNYUH",
    "brand": "LusCoat",
    "specs": "Khối lượng: 5KG",
    "unit": "LON",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 650000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 561600.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 631800.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 702000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 456300.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0205",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CHỐNG THẤM",
    "row_number": 9,
    "category": "Hóa chất chống thấm",
    "group_name": "Chống thấm màu xám nhạt LUSCOAT CNYUH: 5Kg",
    "product_name": "Chống thấm màu xám nhạt LUSCOAT CNYUH: 5Kg - 5KG",
    "sku": "CNYUH",
    "brand": "LusCoat",
    "specs": "Khối lượng: 5KG",
    "unit": "LON",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 650000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 561600.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 631800.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 702000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 456300.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0206",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CHỐNG THẤM",
    "row_number": 10,
    "category": "Hóa chất chống thấm",
    "group_name": "Chống thấm màu trắng sứ LUSCOAT CNYUH: 20Kg",
    "product_name": "Chống thấm màu trắng sứ LUSCOAT CNYUH: 20Kg - 20KG",
    "sku": "CNYUH",
    "brand": "LusCoat",
    "specs": "Khối lượng: 20KG",
    "unit": "THÙNG",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 2000000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 1728000.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 1944000.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 2160000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 1404000.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0207",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CHỐNG THẤM",
    "row_number": 11,
    "category": "Hóa chất chống thấm",
    "group_name": "Chống thấm màu xám đậm LUSCOAT CNYUH: 20Kg",
    "product_name": "Chống thấm màu xám đậm LUSCOAT CNYUH: 20Kg - 20KG",
    "sku": "CNYUH",
    "brand": "LusCoat",
    "specs": "Khối lượng: 20KG",
    "unit": "THÙNG",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 2000000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 1728000.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 1944000.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 2160000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 1404000.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0208",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CHỐNG THẤM",
    "row_number": 12,
    "category": "Hóa chất chống thấm",
    "group_name": "Chống thấm màu xám nhạt LUSCOAT CNYUH: 20Kg",
    "product_name": "Chống thấm màu xám nhạt LUSCOAT CNYUH: 20Kg - 20KG",
    "sku": "CNYUH",
    "brand": "LusCoat",
    "specs": "Khối lượng: 20KG",
    "unit": "THÙNG",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 2000000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 1728000.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 1944000.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 2160000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 1404000.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0209",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "LUSFIX",
    "row_number": 3,
    "category": "Xe rùa",
    "group_name": "Xe rùa LUSFIX",
    "product_name": "Xe rùa bánh hơi WB6400A LUSFIX CNYIC: 150kgx67lít",
    "sku": "WB6400A",
    "brand": "LusFix",
    "specs": "Dung tích: 67 LIT",
    "unit": "CHIẾC",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 875000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 756000.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 850500.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 945000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 614250.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0210",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "LUSFIX",
    "row_number": 4,
    "category": "Xe rùa",
    "group_name": "Xe rùa LUSFIX",
    "product_name": "Xe rùa bánh đặc WB6400PU LUSFIX CNYIC: 150kgx67lít",
    "sku": "WB6400PU",
    "brand": "LusFix",
    "specs": "Dung tích: 67 LIT",
    "unit": "CHIẾC",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 960000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 829440.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 933120.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 1036800.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 673920.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0211",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "LUSFIX",
    "row_number": 5,
    "category": "Xe rùa",
    "group_name": "Xe rùa LUSFIX",
    "product_name": "Xe rùa bánh hơi WB6418A LUSFIX CNYIC: 150kgx85lít",
    "sku": "WB6418A",
    "brand": "LusFix",
    "specs": "Dung tích: 85 LIT",
    "unit": "CHIẾC",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 1175000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 1015200.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 1142100.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 1269000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 824850.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0212",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "LUSFIX",
    "row_number": 6,
    "category": "Xe rùa",
    "group_name": "Xe rùa LUSFIX",
    "product_name": "Xe rùa bánh đặc WB6418PU LUSFIX CNYIC: 150kgx85lít",
    "sku": "WB6418PU",
    "brand": "LusFix",
    "specs": "Dung tích: 85 LIT",
    "unit": "CHIẾC",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 1290000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 1114560.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 1253880.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 1393200.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 905580.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0213",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "LUSFIX",
    "row_number": 10,
    "category": "Đá cắt - Đá mài",
    "group_name": "Đá cắt - Đá mài LUSFIX",
    "product_name": "Đá mài đa năng màu xanh lá LUSFIX CNSEN: 100mmx6mmx16mm",
    "sku": "CNSEN",
    "brand": "LusFix",
    "specs": "",
    "unit": "Viên",
    "packaging": "25 Viên/Hộp, 8 Hộp/Thùng",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 8000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 6912.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 7776.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 8640.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 5616.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0214",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "LUSFIX",
    "row_number": 11,
    "category": "Đá cắt - Đá mài",
    "group_name": "Đá cắt - Đá mài LUSFIX",
    "product_name": "Đá cắt đa năng màu xanh lá LUSFIX CNSEN: 107mmx1.2mmx16mm",
    "sku": "CNSEN",
    "brand": "LusFix",
    "specs": "",
    "unit": "Viên",
    "packaging": "50 Viên/Hộp, 20 Hộp/Thùng",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 3800.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 3283.2,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 3693.6,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 4104.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 2667.6,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0215",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "LUSFIX",
    "row_number": 12,
    "category": "Đá cắt - Đá mài",
    "group_name": "Đá cắt - Đá mài LUSFIX",
    "product_name": "Đá cắt đa năng màu xanh lá LUSFIX CNSEN: 355mmx2.5mmx25.4mm",
    "sku": "CNSEN",
    "brand": "LusFix",
    "specs": "",
    "unit": "Viên",
    "packaging": "25 Viên/Hộp, 1 Hộp/Thùng",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 38700.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 33436.8,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 37616.4,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 41796.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 27167.4,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0216",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 3,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 1 công tắc 1 chiều (nút lớn) MCTV11 LUSCOM CNGOG",
    "sku": "MCTV11",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ. SL mẫu: 100",
    "prices": {
      "gia_niem_yet": {
        "value": 49000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 49.0
      },
      "gia_khach_si": {
        "value": 42336.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 42.336
      },
      "gia_thau_tho": {
        "value": 47628.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 47.628
      },
      "gia_khach_le": {
        "value": 52920.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 52.92
      },
      "gia_ban_mau": {
        "value": 34398.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 34.398
      }
    },
    "id": "PROD-0217",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 4,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 1 công tắc 2 chiều (nút lớn) MCTV12 LUSCOM CNGOG",
    "sku": "MCTV12",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 52000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 52.0
      },
      "gia_khach_si": {
        "value": 44928.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 44.928
      },
      "gia_thau_tho": {
        "value": 50544.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 50.544
      },
      "gia_khach_le": {
        "value": 56160.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 56.16
      },
      "gia_ban_mau": {
        "value": 36504.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 36.504
      }
    },
    "id": "PROD-0218",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 5,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 2 công tắc 1 chiều (nút lớn, 1 vào, 2 ra) MCTV2112 LUSCOM CNGOG",
    "sku": "MCTV2112",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 63000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 63.0
      },
      "gia_khach_si": {
        "value": 54432.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 54.432
      },
      "gia_thau_tho": {
        "value": 61236.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 61.236
      },
      "gia_khach_le": {
        "value": 68040.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 68.04
      },
      "gia_ban_mau": {
        "value": 44226.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 44.226
      }
    },
    "id": "PROD-0219",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 6,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 2 công tắc 2 chiều (nút lớn) MCTV22 LUSCOM CNGOG",
    "sku": "MCTV22",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 65000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 65.0
      },
      "gia_khach_si": {
        "value": 56160.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 56.16
      },
      "gia_thau_tho": {
        "value": 63180.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 63.18
      },
      "gia_khach_le": {
        "value": 70200.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 70.2
      },
      "gia_ban_mau": {
        "value": 45630.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 45.63
      }
    },
    "id": "PROD-0220",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 7,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 2 công tắc 1 chiều (nút lớn, 2 vào, 2 ra) MCTV2122 LUSCOM CNGOG",
    "sku": "MCTV2122",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 63000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 63.0
      },
      "gia_khach_si": {
        "value": 54432.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 54.432
      },
      "gia_thau_tho": {
        "value": 61236.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 61.236
      },
      "gia_khach_le": {
        "value": 68040.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 68.04
      },
      "gia_ban_mau": {
        "value": 44226.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 44.226
      }
    },
    "id": "PROD-0221",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 8,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 3 công tắc 1 chiều (nút lớn) MCTV31 LUSCOM CNGOG",
    "sku": "MCTV31",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 69000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 69.0
      },
      "gia_khach_si": {
        "value": 59616.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 59.616
      },
      "gia_thau_tho": {
        "value": 67068.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 67.068
      },
      "gia_khach_le": {
        "value": 74520.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 74.52
      },
      "gia_ban_mau": {
        "value": 48438.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 48.438
      }
    },
    "id": "PROD-0222",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 9,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 3 công tắc 2 chiều (nút lớn) MCTV32 LUSCOM CNGOG",
    "sku": "MCTV32",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 73000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 73.0
      },
      "gia_khach_si": {
        "value": 63072.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 63.072
      },
      "gia_thau_tho": {
        "value": 70956.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 70.956
      },
      "gia_khach_le": {
        "value": 78840.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 78.84
      },
      "gia_ban_mau": {
        "value": 51246.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 51.246
      }
    },
    "id": "PROD-0223",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 10,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt công tắc chuông cửa MVCC LUSCOM CNGOG",
    "sku": "MVCC",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 76000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 76.0
      },
      "gia_khach_si": {
        "value": 65664.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 65.664
      },
      "gia_thau_tho": {
        "value": 73872.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 73.872
      },
      "gia_khach_le": {
        "value": 82080.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 82.08
      },
      "gia_ban_mau": {
        "value": 53352.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 53.352
      }
    },
    "id": "PROD-0224",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 11,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 1 ổ cắm 3 chấu, 1 công tắc MF (đèn) MOC3CTN LUSCOM CNGOG",
    "sku": "MOC3CTN",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 62000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 62.0
      },
      "gia_khach_si": {
        "value": 53568.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 53.568
      },
      "gia_thau_tho": {
        "value": 60264.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 60.264
      },
      "gia_khach_le": {
        "value": 66960.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 66.96
      },
      "gia_ban_mau": {
        "value": 43524.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 43.524
      }
    },
    "id": "PROD-0225",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 12,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 2 ổ cắm 3 chấu 2 chấu, 1 công tắc MF (đèn) MOC3-2CTN LUSCOM CNGOG",
    "sku": "MOC3-2CTN",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 185000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 185.0
      },
      "gia_khach_si": {
        "value": 159840.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 159.84
      },
      "gia_thau_tho": {
        "value": 179820.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 179.82
      },
      "gia_khach_le": {
        "value": 199800.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 199.8
      },
      "gia_ban_mau": {
        "value": 129870.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 129.87
      }
    },
    "id": "PROD-0226",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 13,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Ổ cắm TV MVTV LUSCOM CNGOG",
    "sku": "MVTV",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 56000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 56.0
      },
      "gia_khach_si": {
        "value": 48384.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 48.384
      },
      "gia_thau_tho": {
        "value": 54432.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 54.432
      },
      "gia_khach_le": {
        "value": 60480.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 60.48
      },
      "gia_ban_mau": {
        "value": 39312.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 39.312
      }
    },
    "id": "PROD-0227",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 14,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Ổ cắm mạng MVOI LUSCOM CNGOG",
    "sku": "MVOI",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 79000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 79.0
      },
      "gia_khach_si": {
        "value": 68256.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 68.256
      },
      "gia_thau_tho": {
        "value": 76788.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 76.788
      },
      "gia_khach_le": {
        "value": 85320.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 85.32
      },
      "gia_ban_mau": {
        "value": 55458.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 55.458
      }
    },
    "id": "PROD-0228",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 15,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Nút điều chỉnh quạt (cao cấp) MVDF LUSCOM CNGOG",
    "sku": "MVDF",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "8 Cái/Hộp, 80 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 203000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 203.0
      },
      "gia_khach_si": {
        "value": 175392.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 175.392
      },
      "gia_thau_tho": {
        "value": 197316.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 197.316
      },
      "gia_khach_le": {
        "value": 219240.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 219.24
      },
      "gia_ban_mau": {
        "value": 142506.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 142.506
      }
    },
    "id": "PROD-0229",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 16,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Nút điều chỉnh đèn led MVDL LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "8 Cái/Hộp, 80 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 203000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 203.0
      },
      "gia_khach_si": {
        "value": 175392.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 175.392
      },
      "gia_thau_tho": {
        "value": 197316.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 197.316
      },
      "gia_khach_le": {
        "value": 219240.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 219.24
      },
      "gia_ban_mau": {
        "value": 142506.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 142.506
      }
    },
    "id": "PROD-0230",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 17,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 1 công tắc 1 chiều ACT11 LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 26000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 26.0
      },
      "gia_khach_si": {
        "value": 22464.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 22.464
      },
      "gia_thau_tho": {
        "value": 25272.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 25.272
      },
      "gia_khach_le": {
        "value": 28080.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 28.08
      },
      "gia_ban_mau": {
        "value": 18252.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 18.252
      }
    },
    "id": "PROD-0231",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 18,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 1 công tắc 2 chiều ACT12 LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 35000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 35.0
      },
      "gia_khach_si": {
        "value": 30240.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 30.24
      },
      "gia_thau_tho": {
        "value": 34020.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 34.02
      },
      "gia_khach_le": {
        "value": 37800.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 37.8
      },
      "gia_ban_mau": {
        "value": 24570.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 24.57
      }
    },
    "id": "PROD-0232",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 19,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 2 công tắc 1 chiều ACT21 LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 37000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 37.0
      },
      "gia_khach_si": {
        "value": 31968.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 31.968
      },
      "gia_thau_tho": {
        "value": 35964.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 35.964
      },
      "gia_khach_le": {
        "value": 39960.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 39.96
      },
      "gia_ban_mau": {
        "value": 25974.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 25.974
      }
    },
    "id": "PROD-0233",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 20,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 1 công tắc 1 chiều, 1 công tắc 2 chiều ACT1112 LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 47000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 47.0
      },
      "gia_khach_si": {
        "value": 40608.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 40.608
      },
      "gia_thau_tho": {
        "value": 45684.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 45.684
      },
      "gia_khach_le": {
        "value": 50760.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 50.76
      },
      "gia_ban_mau": {
        "value": 32994.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 32.994
      }
    },
    "id": "PROD-0234",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 21,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 2 công tắc 2 chiều ACT22 LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 59000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 59.0
      },
      "gia_khach_si": {
        "value": 50976.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 50.976
      },
      "gia_thau_tho": {
        "value": 57348.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 57.348
      },
      "gia_khach_le": {
        "value": 63720.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 63.72
      },
      "gia_ban_mau": {
        "value": 41418.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 41.418
      }
    },
    "id": "PROD-0235",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 22,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 3 công tắc 1 chiều ACT31 LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 48000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 48.0
      },
      "gia_khach_si": {
        "value": 41472.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 41.472
      },
      "gia_thau_tho": {
        "value": 46656.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 46.656
      },
      "gia_khach_le": {
        "value": 51840.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 51.84
      },
      "gia_ban_mau": {
        "value": 33696.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 33.696
      }
    },
    "id": "PROD-0236",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 23,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 2 công tắc 1 chiều, 1 công tắc 2 chiều ACT2112 LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 58000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 58.0
      },
      "gia_khach_si": {
        "value": 50112.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 50.112
      },
      "gia_thau_tho": {
        "value": 56376.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 56.376
      },
      "gia_khach_le": {
        "value": 62640.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 62.64
      },
      "gia_ban_mau": {
        "value": 40716.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 40.716
      }
    },
    "id": "PROD-0237",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 24,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 2 công tắc 2 chiều, 1 công tắc 1 chiều ACT2211 LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 69000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 69.0
      },
      "gia_khach_si": {
        "value": 59616.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 59.616
      },
      "gia_thau_tho": {
        "value": 67068.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 67.068
      },
      "gia_khach_le": {
        "value": 74520.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 74.52
      },
      "gia_ban_mau": {
        "value": 48438.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 48.438
      }
    },
    "id": "PROD-0238",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 25,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 2 ổ cắm 2 chấu AOC22 LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 55000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 55.0
      },
      "gia_khach_si": {
        "value": 47520.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 47.52
      },
      "gia_thau_tho": {
        "value": 53460.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 53.46
      },
      "gia_khach_le": {
        "value": 59400.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 59.4
      },
      "gia_ban_mau": {
        "value": 38610.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 38.61
      }
    },
    "id": "PROD-0239",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 26,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 2 ổ cắm 3 chấu AOC23 LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 61000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 61.0
      },
      "gia_khach_si": {
        "value": 52704.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 52.704
      },
      "gia_thau_tho": {
        "value": 59292.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 59.292
      },
      "gia_khach_le": {
        "value": 65880.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 65.88
      },
      "gia_ban_mau": {
        "value": 42822.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 42.822
      }
    },
    "id": "PROD-0240",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 27,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 1 ổ cắm 2 chấu, 1 ổ cắm 3 chấu đa năng AOC1213 LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 65000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 65.0
      },
      "gia_khach_si": {
        "value": 56160.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 56.16
      },
      "gia_thau_tho": {
        "value": 63180.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 63.18
      },
      "gia_khach_le": {
        "value": 70200.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 70.2
      },
      "gia_ban_mau": {
        "value": 45630.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 45.63
      }
    },
    "id": "PROD-0241",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 28,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 2 ổ cắm 2 chấu, 1 công tắc 1 chiều AOC22CT11 LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 65000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 65.0
      },
      "gia_khach_si": {
        "value": 56160.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 56.16
      },
      "gia_thau_tho": {
        "value": 63180.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 63.18
      },
      "gia_khach_le": {
        "value": 70200.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 70.2
      },
      "gia_ban_mau": {
        "value": 45630.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 45.63
      }
    },
    "id": "PROD-0242",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 29,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 1 ổ cắm 2 chấu, 1 ổ cắm TV AOC121TV LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 78000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 78.0
      },
      "gia_khach_si": {
        "value": 67392.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 67.392
      },
      "gia_thau_tho": {
        "value": 75816.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 75.816
      },
      "gia_khach_le": {
        "value": 84240.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 84.24
      },
      "gia_ban_mau": {
        "value": 54756.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 54.756
      }
    },
    "id": "PROD-0243",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 30,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 1 ổ cắm 2 chấu, 1 công tắc 1 chiều AOC12CT11 LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 45000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 45.0
      },
      "gia_khach_si": {
        "value": 38880.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 38.88
      },
      "gia_thau_tho": {
        "value": 43740.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 43.74
      },
      "gia_khach_le": {
        "value": 48600.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 48.6
      },
      "gia_ban_mau": {
        "value": 31590.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 31.59
      }
    },
    "id": "PROD-0244",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 31,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 1 ổ cắm 2 chấu, 1 công tắc 2 chiều AOC12CT12 LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 58000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 58.0
      },
      "gia_khach_si": {
        "value": 50112.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 50.112
      },
      "gia_thau_tho": {
        "value": 56376.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 56.376
      },
      "gia_khach_le": {
        "value": 62640.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 62.64
      },
      "gia_ban_mau": {
        "value": 40716.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 40.716
      }
    },
    "id": "PROD-0245",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 32,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 1 ổ cắm 3 chấu, 1 công tắc 1 chiều AOC13CT11 LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 58000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 58.0
      },
      "gia_khach_si": {
        "value": 50112.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 50.112
      },
      "gia_thau_tho": {
        "value": 56376.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 56.376
      },
      "gia_khach_le": {
        "value": 62640.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 62.64
      },
      "gia_ban_mau": {
        "value": 40716.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 40.716
      }
    },
    "id": "PROD-0246",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 33,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 1 ổ cắm 3 chấu, 1 công tắc 2 chiều AOC13CT12 LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 69000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 69.0
      },
      "gia_khach_si": {
        "value": 59616.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 59.616
      },
      "gia_thau_tho": {
        "value": 67068.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 67.068
      },
      "gia_khach_le": {
        "value": 74520.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 74.52
      },
      "gia_ban_mau": {
        "value": 48438.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 48.438
      }
    },
    "id": "PROD-0247",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 34,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 1 ổ cắm 2 chấu, 2 công tắc 1 chiều AOC12CT21 LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 52000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 52.0
      },
      "gia_khach_si": {
        "value": 44928.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 44.928
      },
      "gia_thau_tho": {
        "value": 50544.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 50.544
      },
      "gia_khach_le": {
        "value": 56160.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 56.16
      },
      "gia_ban_mau": {
        "value": 36504.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 36.504
      }
    },
    "id": "PROD-0248",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 35,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 1 ổ cắm 2 chấu, 2 công tắc 2 chiều AOC12CT22 LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "10 Cái/Hộp, 100 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 75000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 75.0
      },
      "gia_khach_si": {
        "value": 64800.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 64.8
      },
      "gia_thau_tho": {
        "value": 72900.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 72.9
      },
      "gia_khach_le": {
        "value": 81000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 81.0
      },
      "gia_ban_mau": {
        "value": 52650.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 52.65
      }
    },
    "id": "PROD-0249",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 36,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Công tắc đơn 1 chiều CT11 LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "48 Cái/Hộp, 480 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 12000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 12.0
      },
      "gia_khach_si": {
        "value": 10368.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 10.368
      },
      "gia_thau_tho": {
        "value": 11664.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 11.664
      },
      "gia_khach_le": {
        "value": 12960.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 12.96
      },
      "gia_ban_mau": {
        "value": 8424.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 8.424
      }
    },
    "id": "PROD-0250",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 37,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Công tắc đơn 2 chiều CT12 LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "48 Cái/Hộp, 480 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 25000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 25.0
      },
      "gia_khach_si": {
        "value": 21600.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 21.6
      },
      "gia_thau_tho": {
        "value": 24300.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 24.3
      },
      "gia_khach_le": {
        "value": 27000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 27.0
      },
      "gia_ban_mau": {
        "value": 17550.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 17.55
      }
    },
    "id": "PROD-0251",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 38,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Công tắc đảo chiều CT13 LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "48 Cái/Hộp, 480 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 31000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 31.0
      },
      "gia_khach_si": {
        "value": 26784.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 26.784
      },
      "gia_thau_tho": {
        "value": 30132.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 30.132
      },
      "gia_khach_le": {
        "value": 33480.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 33.48
      },
      "gia_ban_mau": {
        "value": 21762.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 21.762
      }
    },
    "id": "PROD-0252",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 39,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Chuông cửa DB LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "48 Cái/Hộp, 480 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 40000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 40.0
      },
      "gia_khach_si": {
        "value": 34560.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 34.56
      },
      "gia_thau_tho": {
        "value": 38880.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 38.88
      },
      "gia_khach_le": {
        "value": 43200.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 43.2
      },
      "gia_ban_mau": {
        "value": 28080.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 28.08
      }
    },
    "id": "PROD-0253",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 40,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Ổ cắm 2 chấu nhỏ OC2 LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "48 Cái/Hộp, 480 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 23000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 23.0
      },
      "gia_khach_si": {
        "value": 19872.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 19.872
      },
      "gia_thau_tho": {
        "value": 22356.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 22.356
      },
      "gia_khach_le": {
        "value": 24840.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 24.84
      },
      "gia_ban_mau": {
        "value": 16146.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 16.146
      }
    },
    "id": "PROD-0254",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 41,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Ổ cắm 3 chấu nhỏ OC3 LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "48 Cái/Hộp, 480 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 39000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 39.0
      },
      "gia_khach_si": {
        "value": 33696.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 33.696
      },
      "gia_thau_tho": {
        "value": 37908.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 37.908
      },
      "gia_khach_le": {
        "value": 42120.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 42.12
      },
      "gia_ban_mau": {
        "value": 27378.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 27.378
      }
    },
    "id": "PROD-0255",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 42,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Ổ cắm 3 chấu đa năng nhỏ OC3ĐN LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "32 Cái/Hộp, 420 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 33000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 33.0
      },
      "gia_khach_si": {
        "value": 28512.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 28.512
      },
      "gia_thau_tho": {
        "value": 32076.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 32.076
      },
      "gia_khach_le": {
        "value": 35640.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 35.64
      },
      "gia_ban_mau": {
        "value": 23166.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 23.166
      }
    },
    "id": "PROD-0256",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 43,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Ổ cắm đôi 3 chấu OC23 LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "20 Cái/Hộp, 200 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 58000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 58.0
      },
      "gia_khach_si": {
        "value": 50112.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 50.112
      },
      "gia_thau_tho": {
        "value": 56376.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 56.376
      },
      "gia_khach_le": {
        "value": 62640.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 62.64
      },
      "gia_ban_mau": {
        "value": 40716.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 40.716
      }
    },
    "id": "PROD-0257",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 44,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 1 thiết bị vừa MCN1TB LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "20 Cái/Hộp, 200 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 14000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 14.0
      },
      "gia_khach_si": {
        "value": 12096.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 12.096
      },
      "gia_thau_tho": {
        "value": 13608.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 13.608
      },
      "gia_khach_le": {
        "value": 15120.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 15.12
      },
      "gia_ban_mau": {
        "value": 9828.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 9.828
      }
    },
    "id": "PROD-0258",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 45,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 1 thiết bị nhỏ MCN1TBN LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "20 Cái/Hộp, 200 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 14000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 14.0
      },
      "gia_khach_si": {
        "value": 12096.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 12.096
      },
      "gia_thau_tho": {
        "value": 13608.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 13.608
      },
      "gia_khach_le": {
        "value": 15120.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 15.12
      },
      "gia_ban_mau": {
        "value": 9828.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 9.828
      }
    },
    "id": "PROD-0259",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 46,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 2 thiết bị nhỏ MCN2TB LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "20 Cái/Hộp, 200 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 14000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 14.0
      },
      "gia_khach_si": {
        "value": 12096.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 12.096
      },
      "gia_thau_tho": {
        "value": 13608.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 13.608
      },
      "gia_khach_le": {
        "value": 15120.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 15.12
      },
      "gia_ban_mau": {
        "value": 9828.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 9.828
      }
    },
    "id": "PROD-0260",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 47,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Mặt 3 thiết bị nhỏ MCN3TB LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "20 Cái/Hộp, 200 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 14000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 14.0
      },
      "gia_khach_si": {
        "value": 12096.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 12.096
      },
      "gia_thau_tho": {
        "value": 13608.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 13.608
      },
      "gia_khach_le": {
        "value": 15120.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 15.12
      },
      "gia_ban_mau": {
        "value": 9828.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 9.828
      }
    },
    "id": "PROD-0261",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 48,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Đế âm vuông DAV LUSCOM CNGOG",
    "sku": "CNGOG",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "300 Cái/Hộp, 300 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 8000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 8.0
      },
      "gia_khach_si": {
        "value": 6912.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 6.912
      },
      "gia_thau_tho": {
        "value": 7776.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 7.776
      },
      "gia_khach_le": {
        "value": 8640.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 8.64
      },
      "gia_ban_mau": {
        "value": 5616.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 5.616
      }
    },
    "id": "PROD-0262",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 49,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Đế nổi vuông DNV LUSCOM CNGOG",
    "sku": "DNV",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "300 Cái/Hộp, 300 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 6000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 6.0
      },
      "gia_khach_si": {
        "value": 5184.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 5.184
      },
      "gia_thau_tho": {
        "value": 5832.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 5.832
      },
      "gia_khach_le": {
        "value": 6480.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 6.48
      },
      "gia_ban_mau": {
        "value": 4212.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 4.212
      }
    },
    "id": "PROD-0263",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 50,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Đế âm chữ nhật DACN LUSCOM CNGOG",
    "sku": "DACN",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "300 Cái/Hộp, 200 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 9000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 9.0
      },
      "gia_khach_si": {
        "value": 7776.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 7.776
      },
      "gia_thau_tho": {
        "value": 8748.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 8.748
      },
      "gia_khach_le": {
        "value": 9720.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 9.72
      },
      "gia_ban_mau": {
        "value": 6318.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 6.318
      }
    },
    "id": "PROD-0264",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "CTOC",
    "row_number": 51,
    "category": "Công tắc - Ổ cắm",
    "group_name": "Công tắc - Ổ cắm LUSCOM",
    "product_name": "Đế nổi chữ nhật DNCN LUSCOM CNGOG",
    "sku": "DNCN",
    "brand": "LusCom",
    "specs": "",
    "unit": "Cái",
    "packaging": "300 Cái/Hộp, 300 Cái/Thùng",
    "notes": "Định dạng giá file gốc: x1.000 VNĐ",
    "prices": {
      "gia_niem_yet": {
        "value": 11000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)",
        "raw_value": 11.0
      },
      "gia_khach_si": {
        "value": 9504.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)",
        "raw_value": 9.504
      },
      "gia_thau_tho": {
        "value": 10692.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)",
        "raw_value": 10.692
      },
      "gia_khach_le": {
        "value": 11880.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)",
        "raw_value": 11.88
      },
      "gia_ban_mau": {
        "value": 7722.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)",
        "raw_value": 7.722
      }
    },
    "id": "PROD-0265",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "MÁY, CCDC LUSFIX",
    "row_number": 3,
    "category": "Máy móc & Dụng cụ cầm tay",
    "group_name": "Máy & CCDC LUSFIX",
    "product_name": "Máy khoan 3 chức năng dùng pin MK02-001 LUSFIX CNMIN: 18V",
    "sku": "MK02-001",
    "brand": "LusFix",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "(giá máy , chưa bao gồm Pin và Sạc, CH lưu ý)",
    "prices": {
      "gia_niem_yet": {
        "value": 1460000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 1261440.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 1419120.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 1576800.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 1024920.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0266",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "MÁY, CCDC LUSFIX",
    "row_number": 4,
    "category": "Máy móc & Dụng cụ cầm tay",
    "group_name": "Máy & CCDC LUSFIX",
    "product_name": "Máy khoan động lực dùng pin MK02-003 LUSFIX CNMIN: 18V",
    "sku": "MK02-003",
    "brand": "LusFix",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "(giá máy , chưa bao gồm Pin và Sạc)",
    "prices": {
      "gia_niem_yet": {
        "value": 2500000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 2160000.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 2430000.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 2700000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 1755000.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0267",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "MÁY, CCDC LUSFIX",
    "row_number": 5,
    "category": "Máy móc & Dụng cụ cầm tay",
    "group_name": "Máy & CCDC LUSFIX",
    "product_name": "Máy vặn vít dùng pin MV02-001 LUSFIX CNMIN: 18V",
    "sku": "MV02-001",
    "brand": "LusFix",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "(giá máy , chưa bao gồm Pin và Sạc)",
    "prices": {
      "gia_niem_yet": {
        "value": 14500000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 12528000.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 14094000.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 15660000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 10179000.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0268",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "MÁY, CCDC LUSFIX",
    "row_number": 6,
    "category": "Máy móc & Dụng cụ cầm tay",
    "group_name": "Máy & CCDC LUSFIX",
    "product_name": "Máy vặn vít mini dùng pin MV02-002 LUSFIX CNMIN: 4V",
    "sku": "MV02-002",
    "brand": "LusFix",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "(giá máy , chưa bao gồm Pin và Sạc)",
    "prices": {
      "gia_niem_yet": {
        "value": 550000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 475200.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 534600.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 594000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 386100.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0269",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "MÁY, CCDC LUSFIX",
    "row_number": 7,
    "category": "Máy móc & Dụng cụ cầm tay",
    "group_name": "Máy & CCDC LUSFIX",
    "product_name": "Máy siết bulong dùng pin MS02-001 LUSFIX CNMIN: 18V",
    "sku": "MS02-001",
    "brand": "LusFix",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "(giá máy , chưa bao gồm Pin và Sạc)",
    "prices": {
      "gia_niem_yet": {
        "value": 1900000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 1641600.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 1846800.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 2052000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 1333800.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0270",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "MÁY, CCDC LUSFIX",
    "row_number": 8,
    "category": "Máy móc & Dụng cụ cầm tay",
    "group_name": "Máy & CCDC LUSFIX",
    "product_name": "Pin 2AH LUSFIX CNMIN: 18V",
    "sku": "CNMIN",
    "brand": "LusFix",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 550000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 475200.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 534600.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 594000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 386100.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0271",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "MÁY, CCDC LUSFIX",
    "row_number": 9,
    "category": "Máy móc & Dụng cụ cầm tay",
    "group_name": "Máy & CCDC LUSFIX",
    "product_name": "Pin 4AH LUSFIX CNMIN: 18V",
    "sku": "CNMIN",
    "brand": "LusFix",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 850000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 734400.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 826200.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 918000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 596700.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0272",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "MÁY, CCDC LUSFIX",
    "row_number": 10,
    "category": "Máy móc & Dụng cụ cầm tay",
    "group_name": "Máy & CCDC LUSFIX",
    "product_name": "Sạc LUSFIX CNMIN: 18V",
    "sku": "CNMIN",
    "brand": "LusFix",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 500000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 432000.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 486000.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 540000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 351000.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0273",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "MÁY, CCDC LUSFIX",
    "row_number": 11,
    "category": "Máy móc & Dụng cụ cầm tay",
    "group_name": "Máy & CCDC LUSFIX",
    "product_name": "Kìm mũi nhọn KN001 LUSFIX VNQJT: 152mm",
    "sku": "KN001",
    "brand": "LusFix",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 85000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 73440.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 82620.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 91800.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 59670.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0274",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "MÁY, CCDC LUSFIX",
    "row_number": 12,
    "category": "Máy móc & Dụng cụ cầm tay",
    "group_name": "Máy & CCDC LUSFIX",
    "product_name": "Kìm mũi nhọn KN002 LUSFIX VNQJT: 203mm",
    "sku": "KN002",
    "brand": "LusFix",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 87000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 75168.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 84564.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 93960.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 61074.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0275",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "MÁY, CCDC LUSFIX",
    "row_number": 13,
    "category": "Máy móc & Dụng cụ cầm tay",
    "group_name": "Máy & CCDC LUSFIX",
    "product_name": "Kìm răng KR001 LUSFIX VNQJT: 152mm",
    "sku": "KR001",
    "brand": "LusFix",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 105000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 90720.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 102060.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 113400.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 73710.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0276",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "MÁY, CCDC LUSFIX",
    "row_number": 14,
    "category": "Máy móc & Dụng cụ cầm tay",
    "group_name": "Máy & CCDC LUSFIX",
    "product_name": "Kìm răng KR002 LUSFIX VNQJT: 203mm",
    "sku": "KR002",
    "brand": "LusFix",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 110000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 95040.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 106920.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 118800.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 77220.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0277",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "MÁY, CCDC LUSFIX",
    "row_number": 15,
    "category": "Máy móc & Dụng cụ cầm tay",
    "group_name": "Máy & CCDC LUSFIX",
    "product_name": "Kìm cắt KC001 LUSFIX VNQJT: 203mm",
    "sku": "KC001",
    "brand": "LusFix",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 1000000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 864000.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 972000.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 1080000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 702000.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0278",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "MÁY, CCDC LUSFIX",
    "row_number": 16,
    "category": "Máy móc & Dụng cụ cầm tay",
    "group_name": "Máy & CCDC LUSFIX",
    "product_name": "Kìm khóa KK001 LUSFIX VNQJT: 254mm",
    "sku": "VNQJT",
    "brand": "LusFix",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 110000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 95040.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 106920.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 118800.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 77220.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0279",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "MÁY, CCDC LUSFIX",
    "row_number": 17,
    "category": "Máy móc & Dụng cụ cầm tay",
    "group_name": "Máy & CCDC LUSFIX",
    "product_name": "Bộ 3 tua vít dẹp TD001 LUSFIX VNQJT: 8x152mm+6x102mm+3x76mm",
    "sku": "VNQJT",
    "brand": "LusFix",
    "specs": "",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 115000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 99360.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 111780.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 124200.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 80730.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0280",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "MÁY, CCDC LUSFIX",
    "row_number": 18,
    "category": "Máy móc & Dụng cụ cầm tay",
    "group_name": "Máy & CCDC LUSFIX",
    "product_name": "Bộ 3 tua vít bake TB001 LUSFIX VNQJT: PH2x102mm+PH1x102mm+PH0x76mm",
    "sku": "VNQJT",
    "brand": "LusFix",
    "specs": "",
    "unit": "Bộ",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 110000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 95040.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 106920.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 118800.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 77220.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0281",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "MÁY, CCDC LUSFIX",
    "row_number": 19,
    "category": "Máy móc & Dụng cụ cầm tay",
    "group_name": "Máy & CCDC LUSFIX",
    "product_name": "Búa cán gỗ BG001 LUSFIX VNQJT: 198.45gram",
    "sku": "VNQJT",
    "brand": "LusFix",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 120000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 103680.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 116640.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 129600.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 84240.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0282",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "MÁY, CCDC LUSFIX",
    "row_number": 20,
    "category": "Máy móc & Dụng cụ cầm tay",
    "group_name": "Máy & CCDC LUSFIX",
    "product_name": "Cờ lê hai đầu CM001 LUSFIX VNQJT: 8mm-10mm",
    "sku": "VNQJT",
    "brand": "LusFix",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 48000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 41472.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 46656.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 51840.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 33696.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0283",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "MÁY, CCDC LUSFIX",
    "row_number": 21,
    "category": "Máy móc & Dụng cụ cầm tay",
    "group_name": "Máy & CCDC LUSFIX",
    "product_name": "Cờ lê hai đầu CM002 LUSFIX VNQJT: 10mm-12mm",
    "sku": "VNQJT",
    "brand": "LusFix",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 55000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 47520.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 53460.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 59400.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 38610.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0284",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "MÁY, CCDC LUSFIX",
    "row_number": 22,
    "category": "Máy móc & Dụng cụ cầm tay",
    "group_name": "Máy & CCDC LUSFIX",
    "product_name": "Cờ lê hai đầu CM003 LUSFIX VNQJT: 14mm-17mm",
    "sku": "VNQJT",
    "brand": "LusFix",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 63000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 54432.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 61236.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 68040.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 44226.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0285",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "MÁY, CCDC LUSFIX",
    "row_number": 23,
    "category": "Máy móc & Dụng cụ cầm tay",
    "group_name": "Máy & CCDC LUSFIX",
    "product_name": "Cờ lê hai đầu CM004 LUSFIX VNQJT: 13mm-15mm",
    "sku": "VNQJT",
    "brand": "LusFix",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 60000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 51840.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 58320.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 64800.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 42120.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0286",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "MÁY, CCDC LUSFIX",
    "row_number": 24,
    "category": "Máy móc & Dụng cụ cầm tay",
    "group_name": "Máy & CCDC LUSFIX",
    "product_name": "Cờ lê hai đầu CM005 LUSFIX VNQJT: 17mm-19mm",
    "sku": "VNQJT",
    "brand": "LusFix",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 70000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 60480.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 68040.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 75600.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 49140.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0287",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "MÁY, CCDC LUSFIX",
    "row_number": 25,
    "category": "Máy móc & Dụng cụ cầm tay",
    "group_name": "Máy & CCDC LUSFIX",
    "product_name": "Cờ lê vòng miệng CV001 LUSFIX VNQJT: 12mm",
    "sku": "CV001",
    "brand": "LusFix",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 44000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 38016.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 42768.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 47520.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 30888.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0288",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "MÁY, CCDC LUSFIX",
    "row_number": 26,
    "category": "Máy móc & Dụng cụ cầm tay",
    "group_name": "Máy & CCDC LUSFIX",
    "product_name": "Cờ lê vòng miệng CV002 LUSFIX VNQJT: 13mm",
    "sku": "CV002",
    "brand": "LusFix",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 50000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 43200.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 48600.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 54000.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 35100.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0289",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "MÁY, CCDC LUSFIX",
    "row_number": 27,
    "category": "Máy móc & Dụng cụ cầm tay",
    "group_name": "Máy & CCDC LUSFIX",
    "product_name": "Cờ lê vòng miệng CV003 LUSFIX VNQJT: 14mm",
    "sku": "CV003",
    "brand": "LusFix",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 52000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 44928.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 50544.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 56160.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 36504.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0290",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "MÁY, CCDC LUSFIX",
    "row_number": 28,
    "category": "Máy móc & Dụng cụ cầm tay",
    "group_name": "Máy & CCDC LUSFIX",
    "product_name": "Cờ lê vòng miệng CV004 LUSFIX VNQJT: 17mm",
    "sku": "CV004",
    "brand": "LusFix",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 58000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 50112.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 56376.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 62640.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 40716.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0291",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  },
  {
    "sheet_name": "MÁY, CCDC LUSFIX",
    "row_number": 29,
    "category": "Máy móc & Dụng cụ cầm tay",
    "group_name": "Máy & CCDC LUSFIX",
    "product_name": "Cờ lê vòng miệng CV005 LUSFIX VNQJT: 19mm",
    "sku": "CV005",
    "brand": "LusFix",
    "specs": "",
    "unit": "Cái",
    "packaging": "",
    "notes": "",
    "prices": {
      "gia_niem_yet": {
        "value": 64000.0,
        "vat": "chua_vat",
        "label": "Giá niêm yết (Chưa VAT)"
      },
      "gia_khach_si": {
        "value": 55296.0,
        "vat": "co_vat",
        "label": "Giá khách sỉ (CK 20% + VAT 8%)"
      },
      "gia_thau_tho": {
        "value": 62208.0,
        "vat": "co_vat",
        "label": "Giá thầu thợ (CK 10% + VAT 8%)"
      },
      "gia_khach_le": {
        "value": 69120.0,
        "vat": "co_vat",
        "label": "Giá khách lẻ (VAT 8%)"
      },
      "gia_ban_mau": {
        "value": 44928.0,
        "vat": "co_vat",
        "label": "Giá bán mẫu (CK 35% + VAT 8%)"
      }
    },
    "id": "PROD-0292",
    "source_file": "Copy of BẢNG GIÁ CCDC 0206.xlsx"
  }
];
