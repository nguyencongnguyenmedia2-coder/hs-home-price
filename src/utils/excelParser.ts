import * as XLSX from 'xlsx';
import type { Product } from '../types';

/**
 * Chuẩn hóa và làm sạch chuỗi số tiền từ Excel (hỗ trợ số, chuỗi có dấu phẩy, chấm, đ, VNĐ)
 */
export function cleanExcelPrice(val: any): number {
  if (val === null || val === undefined) return 0;
  if (typeof val === 'number') {
    return isNaN(val) || !isFinite(val) ? 0 : Math.round(val);
  }
  let str = String(val).trim();
  if (!str) return 0;
  str = str.replace(/[₫đĐ\sVNvnd]/gi, '');
  if (str.includes('.') && str.includes(',')) {
    if (str.lastIndexOf(',') > str.lastIndexOf('.')) {
      str = str.replace(/\./g, '').replace(',', '.');
    } else {
      str = str.replace(/,/g, '');
    }
  } else if (str.includes('.')) {
    const parts = str.split('.');
    if (parts.length > 2 || (parts.length === 2 && parts[1].length === 3)) {
      str = str.replace(/\./g, '');
    }
  } else if (str.includes(',')) {
    const parts = str.split(',');
    if (parts.length > 2 || (parts.length === 2 && parts[1].length === 3)) {
      str = str.replace(/,/g, '');
    } else {
      str = str.replace(',', '.');
    }
  }
  const num = parseFloat(str);
  return isNaN(num) || !isFinite(num) ? 0 : Math.round(num);
}

/**
 * Chuẩn hóa tiêu đề cột để nhận diện
 */
export function normalizeHeader(str: string): string {
  if (!str) return '';
  return String(str)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9]/g, '');
}

export interface ParsedExcelResult {
  products: Product[];
  totalSheets: number;
  sheetNames: string[];
  skippedRows: number;
  warnings: string[];
}

/**
 * Phân tích thông minh file Excel:
 * - Tự động nhận diện cấu trúc file mẫu Hoa Sen CCDC (nhiều sheet, ô gộp, chiết khấu...)
 * - Tự động nhận diện file bảng tính chuẩn (Header ở dòng 0-5, các cột Tên, Mã, ĐVT, Quy cách, Giá...)
 * - Tự động tính toán 4 mức giá Hoa Sen nếu file chỉ cung cấp 1 mức giá gốc / giá lẻ
 */
export function parseExcelWorkbook(workbook: XLSX.WorkBook, fileName: string): ParsedExcelResult {
  const products: Product[] = [];
  const warnings: string[] = [];
  let skipped = 0;
  const sheetNames = workbook.SheetNames || [];

  sheetNames.forEach(sheetName => {
    const ws = workbook.Sheets[sheetName];
    if (!ws) return;
    const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' }) as any[][];
    if (!rows || rows.length < 2) {
      skipped += (rows ? rows.length : 0);
      return;
    }

    // Kiểm tra định dạng bảng giá Hoa Sen đặc thù (Hàng 0 có GIÁ NIÊM YẾT hoặc KHÁCH SỈ hoặc Hàng 1 có 0.2)
    const row0Str = (rows[0] || []).map(c => normalizeHeader(String(c))).join(' ');
    const isHoaSenFormat =
      row0Str.includes('gianiemyet') ||
      row0Str.includes('khachsi') ||
      row0Str.includes('thautho') ||
      (rows[1] && rows[1].some(c => c === 0.2 || c === '0.2' || c === '20%'));

    let headerRowIdx = -1;
    const colMap = {
      name: -1,
      sku: -1,
      specs: -1,
      unit: -1,
      category: -1,
      brand: -1,
      priceList: -1,
      priceRetail: -1,
      priceContractor: -1,
      priceWholesale: -1,
      priceSample: -1
    };

    if (!isHoaSenFormat) {
      // Tìm dòng tiêu đề trong 6 dòng đầu
      for (let r = 0; r < Math.min(6, rows.length); r++) {
        const row = rows[r] || [];
        for (let c = 0; c < row.length; c++) {
          const norm = normalizeHeader(String(row[c]));
          if (norm.includes('ten') || norm.includes('sanpham') || norm.includes('hanghoa')) {
            headerRowIdx = r;
            break;
          }
        }
        if (headerRowIdx !== -1) break;
      }

      if (headerRowIdx !== -1) {
        const hRow = rows[headerRowIdx];
        hRow.forEach((cell, idx) => {
          const h = normalizeHeader(String(cell));
          if (!h) return;
          if ((h.includes('ten') || h.includes('sanpham')) && colMap.name === -1) colMap.name = idx;
          else if ((h.includes('ma') || h.includes('sku') || h.includes('code')) && colMap.sku === -1) colMap.sku = idx;
          else if ((h.includes('quycach') || h.includes('thongso') || h.includes('size')) && colMap.specs === -1) colMap.specs = idx;
          else if ((h.includes('dvt') || h.includes('donvi')) && colMap.unit === -1) colMap.unit = idx;
          else if ((h.includes('danhmuc') || h.includes('nhom') || h.includes('loai')) && colMap.category === -1) colMap.category = idx;
          else if ((h.includes('thuonghieu') || h.includes('hieu') || h.includes('brand')) && colMap.brand === -1) colMap.brand = idx;
          else if (h.includes('niemyet') || h.includes('giagoc')) colMap.priceList = idx;
          else if (h.includes('le') || h.includes('banle') || h.includes('khachle')) colMap.priceRetail = idx;
          else if (h.includes('thau') || h.includes('tho')) colMap.priceContractor = idx;
          else if (h.includes('si') || h.includes('daily')) colMap.priceWholesale = idx;
          else if (h.includes('mau')) colMap.priceSample = idx;
          else if (h.includes('gia') && colMap.priceRetail === -1 && colMap.priceList === -1) colMap.priceRetail = idx;
        });
      }
    }

    let currentGroup = sheetName;
    const startRow = isHoaSenFormat ? 2 : (headerRowIdx !== -1 ? headerRowIdx + 1 : 1);

    for (let r = startRow; r < rows.length; r++) {
      const row = rows[r];
      if (!row || row.length === 0) continue;

      let productName = '';
      let sku = '';
      let specs = '';
      let unit = 'Cái';
      let category = sheetName;
      let brand = 'Hoa Sen Home';
      let pList = 0;
      let pRetail = 0;
      let pContractor = 0;
      let pWholesale = 0;
      let pSample = 0;

      if (isHoaSenFormat) {
        const c1 = String(row[1] || '').trim();
        const c2 = String(row[2] || '').trim();
        const c3 = String(row[3] || '').trim();

        if (c1 && c1.length > 2) {
          currentGroup = c1.replace(/\r\n/g, ' ').replace(/\n/g, ' ').trim();
        }

        if (c2) {
          specs = c2;
          productName = currentGroup ? (c1 ? currentGroup : `${currentGroup} - ${c2}`) : c2;
        } else if (c1) {
          productName = c1;
        }

        if (c3) unit = c3;

        pList = cleanExcelPrice(row[4]);
        pWholesale = cleanExcelPrice(row[5]);
        pContractor = cleanExcelPrice(row[6]);
        pRetail = cleanExcelPrice(row[7]);
        pSample = cleanExcelPrice(row[8]);
      } else if (colMap.name !== -1) {
        productName = String(row[colMap.name] || '').trim();
        if (colMap.sku !== -1) sku = String(row[colMap.sku] || '').trim();
        if (colMap.specs !== -1) specs = String(row[colMap.specs] || '').trim();
        if (colMap.unit !== -1) unit = String(row[colMap.unit] || 'Cái').trim();
        if (colMap.category !== -1) category = String(row[colMap.category] || sheetName).trim();
        if (colMap.brand !== -1) brand = String(row[colMap.brand] || 'Hoa Sen Home').trim();

        pList = colMap.priceList !== -1 ? cleanExcelPrice(row[colMap.priceList]) : 0;
        pRetail = colMap.priceRetail !== -1 ? cleanExcelPrice(row[colMap.priceRetail]) : 0;
        pContractor = colMap.priceContractor !== -1 ? cleanExcelPrice(row[colMap.priceContractor]) : 0;
        pWholesale = colMap.priceWholesale !== -1 ? cleanExcelPrice(row[colMap.priceWholesale]) : 0;
        pSample = colMap.priceSample !== -1 ? cleanExcelPrice(row[colMap.priceSample]) : 0;
      } else {
        // Fallback: Quét các ô text và ô số
        const textCells = row
          .map((cell, idx) => ({ cell: String(cell).trim(), idx }))
          .filter(item => item.cell.length >= 2 && isNaN(Number(item.cell)));
        if (textCells.length > 0) {
          productName = textCells[0].cell;
          if (textCells.length > 1) specs = textCells[1].cell;
        }
        const numCells = row.map(cleanExcelPrice).filter(v => v > 100);
        if (numCells.length > 0) {
          pRetail = numCells[0];
        }
      }

      if (!productName || productName.length < 2) {
        skipped++;
        continue;
      }

      // Tự động tính toán các mức giá chuẩn Hoa Sen nếu chỉ có 1 mức giá
      const activeBase = pList || (pRetail ? Math.round(pRetail / 1.08) : 0);
      if (!pList && activeBase) pList = activeBase;
      if (!pRetail && activeBase) pRetail = Math.round(activeBase * 1.08);
      if (!pContractor && pRetail) pContractor = Math.round(pRetail * 0.9);
      if (!pWholesale && pRetail) pWholesale = Math.round(pRetail * 0.8);
      if (!pSample && pRetail) pSample = Math.round(pRetail * 0.65);

      if (pRetail <= 0 && pList <= 0) {
        skipped++;
        continue;
      }

      const prodId = `PROD-${Date.now().toString(36).toUpperCase()}-${products.length + 1}`;
      const generatedSku = sku || `HS-${sheetName.substring(0, 3).toUpperCase()}-${products.length + 1}`;

      products.push({
        id: prodId,
        source_file: fileName,
        sheet_name: sheetName,
        row_number: r + 1,
        category: category || sheetName,
        group_name: currentGroup || category || sheetName,
        product_name: productName,
        sku: generatedSku,
        brand: brand || 'Hoa Sen Home',
        specs: specs || '',
        unit: unit || 'Cái',
        packaging: '',
        notes: '',
        prices: {
          gia_niem_yet: pList ? { value: pList, vat: 'chua_vat', label: 'Giá niêm yết (Chưa VAT)' } : null,
          gia_khach_le: pRetail ? { value: pRetail, vat: 'co_vat', label: 'Giá khách lẻ (VAT 8%)' } : null,
          gia_thau_tho: pContractor ? { value: pContractor, vat: 'co_vat', label: 'Giá thầu thợ (CK 10%)' } : null,
          gia_khach_si: pWholesale ? { value: pWholesale, vat: 'co_vat', label: 'Giá khách sỉ (CK 20%)' } : null,
          gia_ban_mau: pSample ? { value: pSample, vat: 'co_vat', label: 'Giá bán mẫu (CK 35%)' } : null
        }
      });
    }
  });

  return {
    products,
    totalSheets: sheetNames.length,
    sheetNames,
    skippedRows: skipped,
    warnings
  };
}
