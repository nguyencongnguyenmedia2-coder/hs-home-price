import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { supabase } from '../../utils/supabaseClient';
import { 
  Lock, 
  Mail, 
  Key, 
  LogIn, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ShieldCheck, 
  ArrowLeft
} from 'lucide-react';

export const AdminAuthPortal: React.FC = () => {
  const { switchRole, setActiveTab } = useApp();

  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  const [authMessage, setAuthMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Handle Admin Sign In via Supabase Auth
  const handleAdminSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthMessage(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: adminEmail.trim(),
        password: adminPassword
      });

      if (error) {
        let msg = error.message;
        if (error.message.includes('Invalid login credentials')) {
          msg = 'Email hoặc mật khẩu quản trị viên không chính xác. Vui lòng kiểm tra lại.';
        }
        setAuthMessage({ type: 'error', text: msg });
      } else if (data.user) {
        setAuthMessage({ type: 'success', text: 'Đăng nhập Quản trị viên thành công!' });
        switchRole('admin');
      }
    } catch (err: any) {
      setAuthMessage({ type: 'error', text: err.message || 'Lỗi kết nối khi đăng nhập' });
    } finally {
      setAuthLoading(false);
    }
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center p-3 sm:p-4">
      <div className="w-full max-w-md bg-white rounded-3xl border border-[#E5EAF1] shadow-lg p-5 sm:p-7 space-y-5 animate-in fade-in duration-200">
        
        {/* Header & Logo */}
        <div className="text-center space-y-2">
          <img 
            src="/hoa-sen-home-logo.png" 
            alt="Hoa Sen Home" 
            className="w-14 h-14 rounded-2xl object-cover mx-auto shadow-sm" 
          />
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-50 text-[#E60012] text-[10px] font-bold uppercase mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Cổng Quản Trị (/admin)</span>
            </div>
            <h1 className="text-lg sm:text-xl font-extrabold text-[#172033] tracking-tight">
              Đăng Nhập Quản Trị Viên
            </h1>
            <p className="text-xs text-[#64748B] mt-0.5">
              Hệ thống đã khóa đăng ký mới. Chỉ tài khoản Quản trị viên đã cấp quyền mới có thể đăng nhập.
            </p>
          </div>
        </div>

        {/* Feedback Alert */}
        {authMessage && (
          <div className={`p-3 rounded-2xl text-xs flex items-start gap-2 animate-in fade-in ${
            authMessage.type === 'success'
              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {authMessage.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
            )}
            <span>{authMessage.text}</span>
          </div>
        )}

        {/* Form Đăng nhập Admin duy nhất */}
        <form onSubmit={handleAdminSignIn} className="space-y-3.5">
          <div>
            <label className="text-xs font-bold text-[#172033] block mb-1">
              Email Quản trị viên
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={adminEmail}
                onChange={e => setAdminEmail(e.target.value)}
                placeholder="admin@hoasenhome.vn"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-[#E5EAF1] text-xs sm:text-sm text-[#172033] focus:outline-none focus:border-[#E60012] focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-[#172033] block mb-1">
              Mật khẩu
            </label>
            <div className="relative">
              <Key className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={adminPassword}
                onChange={e => setAdminPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-[#E5EAF1] text-xs sm:text-sm text-[#172033] focus:outline-none focus:border-[#E60012] focus:bg-white transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={authLoading}
            className="w-full min-h-[44px] mt-1 py-2.5 rounded-xl bg-[#E60012] hover:bg-[#C90010] active:scale-[0.98] text-white font-bold text-xs sm:text-sm shadow-xs flex items-center justify-center gap-2 disabled:opacity-50 transition-all select-none"
          >
            {authLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <LogIn className="w-4 h-4" />
            )}
            <span>Đăng nhập Quản trị viên</span>
          </button>
        </form>

        {/* Back to Staff App */}
        <div className="pt-2 text-center">
          <button
            type="button"
            onClick={() => setActiveTab('home')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#64748B] hover:text-[#172033] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Quay lại Tra cứu giá của Nhân viên</span>
          </button>
        </div>

        {/* Footer Branding */}
        <div className="text-center text-[10px] text-[#64748B] pt-2 border-t border-slate-100 space-y-1">
          <div>Bản quyền © 2026 NGUYỄN CÔNG NGUYÊN PHÁT TRIỂN WEBSITE • Dành cho nhân viên thị trường</div>
          <div className="flex items-center justify-center gap-3 text-[11px] pt-1">
            <a href="https://zalo.me/0934811307" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:underline">
              Zalo: 0934 811 307
            </a>
            <span className="text-slate-300">•</span>
            <a href="tel:0981008274" className="font-bold text-emerald-600 hover:underline">
              ĐT: 0981 008 274
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
