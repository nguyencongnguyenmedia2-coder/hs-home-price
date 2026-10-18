import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ShieldCheck, 
  KeyRound, 
  ArrowRight, 
  AlertCircle, 
  Lock, 
  HelpCircle,
  MessageCircle,
  Phone,
  CheckCircle2
} from 'lucide-react';
import { HOA_SEN_LOGO_BASE64 } from '../../assets/brandLogo';

export const EmployeeGateModal: React.FC = () => {
  const { loginWithEmployeeCode, setActiveTab } = useApp();
  const [code, setCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Normalize code as user types: uppercase and trim
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toUpperCase().replace(/\s+/g, '');
    setCode(val);
    if (error) setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code) {
      setError('Vui lòng nhập mã nhân viên của bạn.');
      return;
    }

    const result = loginWithEmployeeCode(code);
    if (result.success) {
      setSuccess(true);
      setError(null);
    } else {
      setError(result.message || 'Mã nhân viên không hợp lệ.');
    }
  };

  // Check if format currently looks valid
  const isFormatValid = /^HSH\d{4,8}$/.test(code.trim());

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-in fade-in">
      <div 
        className="relative bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden p-6 sm:p-8 space-y-6"
        onClick={e => e.stopPropagation()}
      >
        {/* Brand Logo & Header */}
        <div className="text-center space-y-3">
          <img 
            src={HOA_SEN_LOGO_BASE64} 
            alt="Hoa Sen Home" 
            className="w-16 h-16 rounded-2xl object-cover mx-auto shadow-md"
          />
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#E60012] text-xs font-bold uppercase tracking-wider mb-2 border border-red-200/60">
              <Lock className="w-3.5 h-3.5" />
              <span>Hệ Thống Nội Bộ Hoa Sen Home</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#172033] tracking-tight">
              XÁC THỰC TRUY CẬP
            </h2>
            <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
              Vui lòng nhập <strong>Mã nhân viên</strong> của bạn để mở khóa tra cứu bảng giá và lập báo giá sản phẩm.
            </p>
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-extrabold text-[#172033] block">
              Mã nhân viên Hoa Sen Home:
            </label>
            <div className="relative flex items-center">
              <KeyRound className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 stroke-[2.2]" />
              <input 
                type="text"
                value={code}
                onChange={handleChange}
                maxLength={12}
                placeholder="HSHxxxxxx (VD: HSH003687)"
                autoFocus
                className="w-full pl-11 pr-10 py-3.5 bg-slate-50 border-2 border-slate-200 rounded-2xl text-base font-mono font-bold text-[#172033] tracking-wide placeholder:font-sans placeholder:font-normal placeholder:text-slate-400 focus:outline-none focus:border-[#E60012] focus:bg-white focus:ring-4 focus:ring-red-100 transition-all uppercase"
              />
              {isFormatValid && (
                <CheckCircle2 className="w-5 h-5 text-emerald-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
              )}
            </div>
            <div className="flex items-center justify-between text-[11px] text-[#64748B] px-1">
              <span>Định dạng: <strong>HSHxxxxxx</strong> (x là số)</span>
              <span>Ví dụ: <strong>HSH003687</strong></span>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 font-medium flex items-start gap-2 animate-in fade-in">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-bold flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Xác thực thành công! Đang chuyển vào hệ thống...</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-4 bg-[#E60012] hover:bg-[#C90010] active:scale-[0.99] text-white rounded-2xl font-extrabold text-sm shadow-md shadow-red-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>Vào Hệ Thống Tra Cứu</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Support Section */}
        <div className="pt-4 border-t border-slate-100 space-y-3 text-center">
          <div className="text-xs text-[#64748B]">
            Chưa có mã hoặc cần cấp quyền truy cập? Liên hệ Admin:
          </div>

          <div className="grid grid-cols-2 gap-2">
            <a 
              href="https://zalo.me/0934811307" 
              target="_blank" 
              rel="noopener noreferrer"
              className="py-2 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-900 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-blue-600" />
              <span>Zalo: 0934 811 307</span>
            </a>
            <a 
              href="tel:0981008274" 
              className="py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>ĐT: 0981 008 274</span>
            </a>
          </div>

          {/* Admin link */}
          <div className="pt-1">
            <button
              type="button"
              onClick={() => setActiveTab('admin')}
              className="text-[11px] font-semibold text-slate-400 hover:text-slate-700 transition-colors"
            >
              Cổng Quản Trị Hệ Thống (/admin) →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
