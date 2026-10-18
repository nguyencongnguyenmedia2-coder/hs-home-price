// Dữ liệu đối soát chi tiết 100% từng dòng của 17 sheet từ file gốc Copy of BẢNG GIÁ CCDC 0206.xlsx

export interface SheetReconciliation {
  sheetName: string;
  categoryName: string;
  maxRow: number;
  nonEmptyRows: number;
  productRows: number;
  unparsedRows: number;
  unparsedReasons: string[];
  status: 'matched' | 'discrepancy';
}

export const EXCEL_RECONCILIATION_DATA: SheetReconciliation[] = [
  {
    sheetName: "NLMT",
    categoryName: "Máy nước nóng NLMT",
    maxRow: 15,
    nonEmptyRows: 15,
    productRows: 13,
    unparsedRows: 2,
    unparsedReasons: ["R1: Header tiêu đề cột", "R2: Tỷ lệ chiết khấu (0.2, 0.1, 0, 0.35)"],
    status: "matched"
  },
  {
    sheetName: "BỒN",
    categoryName: "Bồn nước Inox & Bồn nhựa",
    maxRow: 49,
    nonEmptyRows: 46,
    productRows: 38,
    unparsedRows: 8,
    unparsedReasons: [
      "R1: Header BỒN NƯỚC INOX VNVIE", "R2: Chiết khấu",
      "R17: Tiêu đề nhóm BỒN NƯỚC NHỰA VNVIE", "R18: Chiết khấu",
      "R28: Tiêu đề nhóm BỒN INOX VNDAI", "R29: Chiết khấu",
      "R45: Tiêu đề nhóm BỂ PHỐT", "R46: Chiết khấu"
    ],
    status: "matched"
  },
  {
    sheetName: "BỂ PHỐT - van đồng",
    categoryName: "Bồn tự hoại & Van vòi đồng",
    maxRow: 32,
    nonEmptyRows: 29,
    productRows: 14,
    unparsedRows: 15,
    unparsedReasons: [
      "R1: Header BỒN TỰ HOẠI LUSWELL", "R2: Chiết khấu",
      "R7: Header VAN VÒI ĐỒNG PUMA", "R8: Chiết khấu",
      "R22-32: Bảng phụ ghi giá làm tròn của 11 van Puwa (không có tên SP)"
    ],
    status: "matched"
  },
  {
    sheetName: "VÍT",
    categoryName: "Vít & Phụ kiện liên kết",
    maxRow: 11,
    nonEmptyRows: 11,
    productRows: 9,
    unparsedRows: 2,
    unparsedReasons: ["R1: Header VÍT LUSWELL", "R2: Quy cách con/hộp, hộp/thùng & Chiết khấu"],
    status: "matched"
  },
  {
    sheetName: "SILICON",
    categoryName: "Keo Silicone",
    maxRow: 10,
    nonEmptyRows: 10,
    productRows: 8,
    unparsedRows: 2,
    unparsedReasons: ["R1: Header SILICON LUSCOAT", "R2: Chiết khấu"],
    status: "matched"
  },
  {
    sheetName: "SKL",
    categoryName: "Sơn kim loại",
    maxRow: 11,
    nonEmptyRows: 11,
    productRows: 9,
    unparsedRows: 2,
    unparsedReasons: ["R1: Header SƠN KIM LOẠI LUSCOAT", "R2: Chiết khấu"],
    status: "matched"
  },
  {
    sheetName: "Sơn xịt",
    categoryName: "Sơn xịt Acrylic",
    maxRow: 7,
    nonEmptyRows: 7,
    productRows: 5,
    unparsedRows: 2,
    unparsedReasons: ["R1: Header SƠN XỊT LUSCOAT", "R2: Chiết khấu"],
    status: "matched"
  },
  {
    sheetName: "Que hàn",
    categoryName: "Vật liệu hàn Việt Đức",
    maxRow: 20,
    nonEmptyRows: 20,
    productRows: 18,
    unparsedRows: 2,
    unparsedReasons: ["R1: Header QUE HÀN VIỆT ĐỨC", "R2: Đơn vị đóng gói Đồng/Kg, Hộp, Thùng"],
    status: "matched"
  },
  {
    sheetName: "CÁCH NHIỆT",
    categoryName: "Tấm cách nhiệt",
    maxRow: 7,
    nonEmptyRows: 7,
    productRows: 5,
    unparsedRows: 2,
    unparsedReasons: ["R1: Header TẤM CÁCH NHIỆT", "R2: Chiết khấu"],
    status: "matched"
  },
  {
    sheetName: "LẤY SÁNG",
    categoryName: "Tấm lợp lấy sáng",
    maxRow: 10,
    nonEmptyRows: 10,
    productRows: 8,
    unparsedRows: 2,
    unparsedReasons: ["R1: Header TẤM NHỰA LẤY SÁNG", "R2: Chiết khấu"],
    status: "matched"
  },
  {
    sheetName: "SIEMENS",
    categoryName: "Thiết bị đóng ngắt Siemens",
    maxRow: 22,
    nonEmptyRows: 21,
    productRows: 20,
    unparsedRows: 1,
    unparsedReasons: ["R1: Header THIẾT BỊ ĐÓNG NGẮT - SIEMENS (kèm tỷ lệ CK 50%, 45%, 40%)"],
    status: "matched"
  },
  {
    sheetName: "ĐÈN ĐIỆN",
    categoryName: "Thiết bị chiếu sáng LED",
    maxRow: 47,
    nonEmptyRows: 45,
    productRows: 39,
    unparsedRows: 6,
    unparsedReasons: [
      "R1: Header LED BULB", "R2: Chiết khấu",
      "R27: Header PANEL LUSCOM", "R28: Chiết khấu",
      "R45: Header ĐÈN PANEL VUÔNG", "R46: Chiết khấu"
    ],
    status: "matched"
  },
  {
    sheetName: "TMX",
    categoryName: "Tấm xi măng Cemboard",
    maxRow: 18,
    nonEmptyRows: 17,
    productRows: 13,
    unparsedRows: 4,
    unparsedReasons: [
      "R1: Header TẤM XI MĂNG CNSAN", "R2: Chiết khấu & Kiện",
      "R12: Header TẤM XI MĂNG THDIA", "R13: Chiết khấu & Kiện"
    ],
    status: "matched"
  },
  {
    sheetName: "CHỐNG THẤM",
    categoryName: "Hóa chất chống thấm",
    maxRow: 12,
    nonEmptyRows: 12,
    productRows: 10,
    unparsedRows: 2,
    unparsedReasons: ["R1: Header CHỐNG THẤM LUSCOAT", "R2: Chiết khấu"],
    status: "matched"
  },
  {
    sheetName: "LUSFIX",
    categoryName: "Xe rùa & Đá cắt đá mài",
    maxRow: 13,
    nonEmptyRows: 11,
    productRows: 7,
    unparsedRows: 4,
    unparsedReasons: [
      "R1: Header XE RÙA LUSFIX", "R2: Chiết khấu",
      "R8: Header ĐÁ CẮT - ĐÁ MÀI LUSFIX", "R9: Chiết khấu"
    ],
    status: "matched"
  },
  {
    sheetName: "CTOC",
    categoryName: "Công tắc - Ổ cắm LusCom",
    maxRow: 51,
    nonEmptyRows: 51,
    productRows: 49,
    unparsedRows: 2,
    unparsedReasons: ["R1: Header CÔNG TẮC Ổ CẮM", "R2: Chiết khấu"],
    status: "matched"
  },
  {
    sheetName: "MÁY, CCDC LUSFIX",
    categoryName: "Máy móc & CCDC LusFix",
    maxRow: 30,
    nonEmptyRows: 29,
    productRows: 27,
    unparsedRows: 2,
    unparsedReasons: ["R1: Header Stt, Tên SP, Đvt, Giá NY", "R2: Chiết khấu"],
    status: "matched"
  }
];

export const TOTAL_PHYSICAL_ROWS = 365;
export const TOTAL_NON_EMPTY_ROWS = 352;
export const TOTAL_PRODUCT_ROWS = 292;
export const TOTAL_UNPARSED_NON_PRODUCT_ROWS = 60;
