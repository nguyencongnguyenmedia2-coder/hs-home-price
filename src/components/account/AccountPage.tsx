import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  User, 
  CheckCircle2, 
  Building,
  Mail, 
  FileSpreadsheet,
  ShieldCheck,
  Search,
  ReceiptText,
  Heart,
  FileCheck2,
  Calendar,
  LogOut,
  ExternalLink,
  Phone,
  MessageCircle,
  Headphones,
  KeyRound
} from 'lucide-react';

export const AccountPage: React.FC = () => {
  const { 
    currentUser, 
    currentVersion, 
    products, 
    setActiveTab, 
    logoutAdmin,
    employeeCode,
    logoutEmployeeCode
  } = useApp();

  const isAdmin = currentUser.role === 'admin';

  return (
    <div className="space-y-4 sm:space-y-6 pb-24 md:pb-12 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="border-b border-[#E5EAF1] pb-3 flex items-center justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-[#172033] flex items-center gap-2">
            <User className="w-5 h-5 sm:w-6 sm:h-6 text-[#E60012] stroke-[2.2]" />
            <span>Tài Khoản & Thông Tin Hệ Thống</span>
          </h1>
          <p className="text-xs text-[#64748B] mt-0.5">
            Ứng dụng tra cứu sản phẩm và bảng giá nội bộ Tập đoàn Hoa Sen Home.
          </p>
        </div>
        <img src="/hoa-sen-home-logo.png" alt="Hoa Sen Home" className="w-10 h-10 rounded-xl object-cover shadow-xs hidden sm:block" />
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-3xl border border-[#E5EAF1] p-5 sm:p-6 shadow-2xs flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5">
        <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl text-white font-extrabold text-2xl flex items-center justify-center shadow-xs shrink-0 ${
          isAdmin ? 'bg-[#E60012]' : 'bg-gradient-to-tr from-slate-700 to-slate-900'
        }`}>
          {currentUser.name.charAt(0)}
        </div>

        <div className="flex-1 text-center sm:text-left space-y-1.5 min-w-0">
          <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
            <h2 className="text-base sm:text-lg font-extrabold text-[#172033]">{currentUser.name}</h2>
            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${
              isAdmin
                ? 'bg-red-50 text-[#E60012] border border-red-200'
                : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
            }`}>
              {isAdmin ? 'Quản trị viên (Admin)' : (employeeCode ? `Đã xác thực: ${employeeCode}` : 'Nhân viên thị trường')}
            </span>
          </div>

          {employeeCode && (
            <div className="text-xs text-[#172033] font-mono font-bold flex items-center justify-center sm:justify-start gap-1">
              <KeyRound className="w-3.5 h-3.5 text-[#E60012]" />
              <span>Mã nhân viên: <span className="bg-red-50 text-[#E60012] px-2 py-0.5 rounded-md border border-red-200">{employeeCode}</span></span>
            </div>
          )}

          <div className="text-xs text-[#64748B] flex items-center justify-center sm:justify-start gap-1">
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>{currentUser.email}</span>
          </div>

          <div className="text-xs text-[#172033] flex items-center justify-center sm:justify-start gap-1 font-medium">
            <Building className="w-3.5 h-3.5 text-slate-400" />
            <span>{currentUser.branch || 'Hoa Sen Home - Toàn hệ thống'}</span>
          </div>

          {/* Note for Staff */}
          {!isAdmin ? (
            <div className="mt-2.5 p-3 bg-emerald-50/80 border border-emerald-200/70 rounded-2xl text-xs text-emerald-900 flex items-start gap-2 text-left">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>Chế độ nhân viên Hoa Sen Home:</strong> Bạn đã xác thực mã nhân viên hợp lệ ({employeeCode || 'HSHxxxxxx'}). Bạn được tự do tra cứu toàn bộ 292 sản phẩm, xem mọi mức giá bán (sỉ, thầu thợ, lẻ, niêm yết), tạo báo giá và lưu ảnh gửi Zalo cho khách hàng.
              </div>
            </div>
          ) : (
            <div className="mt-2.5 p-3 bg-red-50 border border-red-200 rounded-2xl text-xs text-red-900 flex items-start gap-2 text-left">
              <ShieldCheck className="w-4 h-4 text-[#E60012] shrink-0 mt-0.5" />
              <div>
                <strong>Tài khoản Quản trị viên:</strong> Bạn đang có toàn quyền quản trị bảng giá, nhập file Excel và xem đối soát 17 sheet.
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 shrink-0 pt-2 sm:pt-0 w-full sm:w-auto">
          {isAdmin ? (
            <>
              <button
                type="button"
                onClick={() => setActiveTab('admin')}
                className="px-4 py-2 rounded-xl bg-[#E60012] hover:bg-[#C90010] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Mở Bảng Quản Trị</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  logoutAdmin();
                  setActiveTab('home');
                }}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#172033] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <LogOut className="w-3.5 h-3.5 text-[#64748B]" />
                <span>Đăng xuất Admin</span>
              </button>
            </>
          ) : (
            employeeCode && (
              <button
                type="button"
                onClick={() => {
                  logoutEmployeeCode();
                }}
                className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-red-50 hover:text-red-600 hover:border-red-200 border border-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                title="Đổi hoặc xóa mã nhân viên đã lưu"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Đổi Mã Nhân Viên</span>
              </button>
            )
          )}
        </div>
      </div>

      {/* Staff Guide & Feature Highlights */}
      <div className="bg-white rounded-3xl border border-[#E5EAF1] p-5 sm:p-6 shadow-2xs space-y-3.5">
        <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#172033] flex items-center gap-2">
          <FileCheck2 className="w-4 h-4 text-[#E60012]" />
          <span>Hướng dẫn thao tác nhanh cho nhân viên thị trường</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
            <div className="font-bold text-[#172033] flex items-center gap-1.5 text-xs sm:text-sm">
              <Search className="w-4 h-4 text-[#E60012]" />
              <span>1. Tra cứu giá tức thì</span>
            </div>
            <p className="text-[#64748B] leading-relaxed">
              Mở ứng dụng và gõ tên sản phẩm, mã SKU hoặc quy cách vào thanh tìm kiếm. Kết quả hiển thị tức thì theo từng đơn vị tính (cây, mét, cuộn, cái, kg).
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
            <div className="font-bold text-[#172033] flex items-center gap-1.5 text-xs sm:text-sm">
              <ReceiptText className="w-4 h-4 text-[#E60012]" />
              <span>2. Lập báo giá & Lưu ảnh gửi Zalo</span>
            </div>
            <p className="text-[#64748B] leading-relaxed">
              Bấm "+ Báo giá", chọn số lượng và loại giá (Sỉ / Thợ / Lẻ). Bấm <strong>"Xem trước & Lưu ảnh"</strong> để tải ảnh báo giá PNG độ nét cao gửi ngay cho khách hàng.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
            <div className="font-bold text-[#172033] flex items-center gap-1.5 text-xs sm:text-sm">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span>3. Đánh dấu sản phẩm thường bán</span>
            </div>
            <p className="text-[#64748B] leading-relaxed">
              Nhấn biểu tượng trái tim trên bất kỳ sản phẩm nào để đưa vào tab <strong>"Đã lưu"</strong>, giúp truy cập nhanh khi tư vấn tại điểm bán.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
            <div className="font-bold text-[#172033] flex items-center gap-1.5 text-xs sm:text-sm">
              <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
              <span>4. Dữ liệu chuẩn xác 100%</span>
            </div>
            <p className="text-[#64748B] leading-relaxed">
              Toàn bộ dữ liệu giá và quy cách đều được đối soát chính xác 100% từng dòng từ file bảng giá Excel chính thức của Tập đoàn Hoa Sen Home.
            </p>
          </div>
        </div>
      </div>

      {/* Price Version & Status Info */}
      <div className="bg-white rounded-3xl border border-[#E5EAF1] p-5 sm:p-6 shadow-2xs space-y-3">
        <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#172033] flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#E60012]" />
          <span>Phiên bản bảng giá áp dụng</span>
        </h3>

        <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/70 text-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[#64748B]">Tên phiên bản:</span>
            <strong className="text-[#172033] font-extrabold">{currentVersion.name}</strong>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#64748B]">Ngày hiệu lực:</span>
            <span className="font-semibold text-[#172033]">{currentVersion.effectiveDate}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#64748B]">Quy mô kho hàng:</span>
            <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              {products.length} sản phẩm • 17 sheet Excel
            </span>
          </div>
          <div className="flex items-center justify-between pt-1 border-t border-slate-200/60 text-[11px] text-[#64748B]">
            <span>Nguồn dữ liệu:</span>
            <span>{currentVersion.filename}</span>
          </div>
        </div>
      </div>

      {/* Support & Admin Contact Card */}
      <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl border border-[#E5EAF1] p-5 sm:p-6 shadow-2xs space-y-3.5">
        <div className="flex items-center justify-between">
          <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#172033] flex items-center gap-2">
            <Headphones className="w-4 h-4 text-[#E60012]" />
            <span>Hỗ Trợ Kỹ Thuật & Quản Trị Website</span>
          </h3>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-50 text-[#E60012] border border-red-200">
            Hỗ trợ 24/7
          </span>
        </div>

        <p className="text-xs text-[#64748B] leading-relaxed">
          Nhân viên thị trường gặp khó khăn khi tra cứu giá, xuất báo giá hoặc cần hỗ trợ kỹ thuật website, vui lòng liên hệ trực tiếp Admin:
        </p>

        <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-red-600 to-rose-500 text-white flex items-center justify-center font-black text-sm shadow-sm shrink-0">
              AD
            </div>
            <div className="min-w-0">
              <div className="font-extrabold text-sm text-[#172033] flex items-center gap-1.5 flex-wrap">
                <span>Nguyễn Công Nguyên</span>
                <span className="text-[10px] font-bold px-1.5 py-0.2 bg-slate-100 text-slate-700 rounded">Admin Thiết Kế Website</span>
              </div>
              <div className="text-[11px] text-[#64748B]">
                Hệ thống Tra cứu Bảng giá & Lập báo giá Hoa Sen Home
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            {/* Zalo Contact */}
            <a 
              href="https://zalo.me/0934811307" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-blue-50/80 hover:bg-blue-100 border border-blue-200 text-blue-900 transition-all active:scale-[0.98] group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-blue-700 uppercase">Chat Zalo hỗ trợ</div>
                  <div className="font-extrabold text-sm text-blue-950 font-mono">0934 811 307</div>
                </div>
              </div>
              <span className="text-xs font-bold text-blue-600 group-hover:translate-x-0.5 transition-transform">
                Nhắn tin →
              </span>
            </a>

            {/* Phone Hotline Contact */}
            <a 
              href="tel:0981008274" 
              className="flex items-center justify-between p-3 rounded-xl bg-emerald-50/80 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 transition-all active:scale-[0.98] group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-emerald-700 uppercase">Gọi điện thoại trực tiếp</div>
                  <div className="font-extrabold text-sm text-emerald-950 font-mono">0981 008 274</div>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-600 group-hover:translate-x-0.5 transition-transform">
                Gọi ngay →
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="text-center text-[11px] text-[#64748B] space-y-1 pt-2">
        <div>HỆ THỐNG TRA CỨU SẢN PHẨM & BẢNG GIÁ HOA SEN HOME</div>
        <div>Bản quyền © 2026 NGUYỄN CÔNG NGUYÊN PHÁT TRIỂN WEBSITE • Dành cho nhân viên thị trường</div>
        <div className="text-[10px] text-slate-400">
          Zalo: 0934 811 307 • Hotline: 0981 008 274
        </div>
      </div>

    </div>
  );
};
