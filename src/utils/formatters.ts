/**
 * Định dạng số thành chuỗi tiền tệ VND
 * Ví dụ: 5060000 -> "5.060.000 ₫"
 */
export function formatVND(amount: number | null | undefined): string {
  if (amount === null || amount === undefined || isNaN(amount)) {
    return 'Liên hệ';
  }
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Định dạng số gọn gàng không kèm ký hiệu tiền tệ
 */
export function formatNumber(num: number | null | undefined): string {
  if (num === null || num === undefined || isNaN(num)) return '-';
  return new Intl.NumberFormat('vi-VN').format(num);
}

/**
 * Chuẩn hóa chuỗi tiếng Việt: loại bỏ dấu, chuyển về chữ thường, bỏ ký tự đặc biệt
 * Giúp tìm kiếm không phân biệt có dấu / không dấu
 */
export function normalizeVietnamese(str: string): string {
  if (!str) return '';
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .trim();
}

/**
 * Kiểm tra xem từ khóa tìm kiếm có khớp với nội dung không
 * Hỗ trợ nhiều từ khóa cách nhau bởi dấu cách (AND match)
 */
export function matchesSearch(content: string, query: string): boolean {
  if (!query.trim()) return true;
  const normContent = normalizeVietnamese(content);
  const normKeywords = normalizeVietnamese(query)
    .split(/\s+/)
    .filter(Boolean);

  return normKeywords.every(kw => normContent.includes(kw));
}

/**
 * Định dạng ngày giờ chuẩn Việt Nam
 */
export function formatDate(dateStr: string | Date): string {
  try {
    const d = new Date(dateStr);
    return new Intl.DateTimeFormat('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(d);
  } catch {
    return String(dateStr);
  }
}

/**
 * Tạo mã báo giá ngẫu nhiên duy nhất
 * Ví dụ: "BG-20241018-492"
 */
export function generateQuotationCode(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `BG-${year}${month}${day}-${rand}`;
}
