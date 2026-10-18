import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { supabase } from '../../utils/supabaseClient';
import { 
  Lock, 
  Mail, 
  Key, 
  LogIn, 
  UserPlus, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ShieldCheck, 
  ArrowLeft,
  Info
} from 'lucide-react';

export const AdminAuthPortal: React.FC = () => {
  const { switchRole, setActiveTab } = useApp();

  const [authTab, setAuthTab] = useState<'signin' | 'signup'>('signin');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [adminFullName, setAdminFullName] = useState('');
  const [adminBranch, setAdminBranch] = useState('Trụ sở Tập đoàn Hoa Sen');

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
          msg = 'Email hoặc mật khẩu không chính xác. Nếu chưa có tài khoản, vui lòng bấm tab "Tạo tài khoản mới".';
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

  // Handle Create Admin Account via Supabase Auth
  const handleAdminSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword.length < 6) {
      setAuthMessage({ type: 'error', text: 'Mật khẩu phải có tối thiểu 6 ký tự.' });
      return;
    }

    setAuthLoading(true);
    setAuthMessage(null);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: adminEmail.trim(),
        password: adminPassword,
        options: {
          data: {
            full_name: adminFullName.trim() || 'Admin Hoa Sen',
            branch: adminBranch.trim(),
            role: 'admin'
          }
        }
      });

      if (error) {
        let msg = error.message;
        if (error.message.includes('User already registered')) {
          msg = 'Email này đã tồn tại tài khoản. Vui lòng chuyển sang tab Đăng nhập.';
        }
        setAuthMessage({ type: 'error', text: msg });
      } else if (data.user) {
        if (data.session) {
          setAuthMessage({ type: 'success', text: 'Tạo tài khoản Admin thành công và đã tự động đăng nhập!' });
          switchRole('admin');
        } else {
          setAuthMessage({ 
            type: 'success', 
            text: 'Đã tạo tài khoản Admin trên Supabase! Bạn có thể chuyển sang tab Đăng nhập.' 
          });
        }
      }
    } catch (err: any) {
      setAuthMessage({ type: 'error', text: err.message || 'Lỗi kết nối khi tạo tài khoản' });
    } finally {
      setAuthLoading(false);
    }
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center p-3 sm:p-4">
      <div className="w-full max-w-md bg-white rounded-3xl border border-[#E5EAF1] shadow-lg p-5 sm:p-7 space-y-5 animate-in fade-in duration-200">
        
        {/* Header & Logo */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-[#E60012] text-white font-extrabold text-xl flex items-center justify-center mx-auto shadow-sm">
            HS
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-50 text-[#E60012] text-[10px] font-bold uppercase mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Cổng Quản Trị (/admin)</span>
            </div>
            <h1 className="text-lg sm:text-xl font-extrabold text-[#172033] tracking-tight">
              Đăng Nhập Quản Trị Viên
            </h1>
            <p className="text-xs text-[#64748B] mt-0.5">
              Xác thực bằng tài khoản Supabase Auth để quản lý bảng giá và dữ liệu Excel.
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center bg-slate-100 p-1 rounded-2xl text-xs font-bold">
          <button
            type="button"
            onClick={() => {
              setAuthTab('signin');
              setAuthMessage(null);
            }}
            className={`flex-1 py-2 rounded-xl transition-all ${
              authTab === 'signin' ? 'bg-white text-[#E60012] shadow-2xs font-extrabold' : 'text-[#64748B]'
            }`}
          >
            Đăng nhập
          </button>
          <button
            type="button"
            onClick={() => {
              setAuthTab('signup');
              setAuthMessage(null);
            }}
            className={`flex-1 py-2 rounded-xl transition-all ${
              authTab === 'signup' ? 'bg-white text-[#E60012] shadow-2xs font-extrabold' : 'text-[#64748B]'
            }`}
          >
            Tạo tài khoản mới
          </button>
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

        {/* Tab 1: Đăng nhập */}
        {authTab === 'signin' ? (
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
              className="w-full min-h-[44px] py-2.5 rounded-xl bg-[#E60012] hover:bg-[#C90010] active:scale-[0.98] text-white font-bold text-xs sm:text-sm shadow-xs flex items-center justify-center gap-2 disabled:opacity-50 transition-all select-none"
            >
              {authLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <LogIn className="w-4 h-4" />
              )}
              <span>Đăng nhập Quản trị viên</span>
            </button>
          </form>
        ) : (
          /* Tab 2: Tạo tài khoản Admin mới */
          <form onSubmit={handleAdminSignUp} className="space-y-3">
            <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-[#64748B] flex items-start gap-2">
              <Info className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
              <span>Tài khoản sẽ được tạo trực tiếp trên <strong>Supabase Auth</strong>.</span>
            </div>

            <div>
              <label className="text-xs font-bold text-[#172033] block mb-1">
                Email Admin <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={adminEmail}
                  onChange={e => setAdminEmail(e.target.value)}
                  placeholder="admin.hoasen@gmail.com"
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-[#E5EAF1] text-xs sm:text-sm text-[#172033] focus:outline-none focus:border-[#E60012] focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-[#172033] block mb-1">
                Mật khẩu (tối thiểu 6 ký tự) <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Key className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  minLength={6}
                  value={adminPassword}
                  onChange={e => setAdminPassword(e.target.value)}
                  placeholder="Tối thiểu 6 ký tự"
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-[#E5EAF1] text-xs sm:text-sm text-[#172033] focus:outline-none focus:border-[#E60012] focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-xs font-bold text-[#172033] block mb-1">
                  Họ và tên
                </label>
                <input
                  type="text"
                  value={adminFullName}
                  onChange={e => setAdminFullName(e.target.value)}
                  placeholder="Trần Quản Trị"
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-[#E5EAF1] text-xs text-[#172033] focus:outline-none focus:border-[#E60012] focus:bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#172033] block mb-1">
                  Chi nhánh
                </label>
                <input
                  type="text"
                  value={adminBranch}
                  onChange={e => setAdminBranch(e.target.value)}
                  placeholder="Trụ sở"
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-[#E5EAF1] text-xs text-[#172033] focus:outline-none focus:border-[#E60012] focus:bg-white"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={authLoading}
              className="w-full min-h-[44px] mt-2 py-2.5 rounded-xl bg-[#E60012] hover:bg-[#C90010] active:scale-[0.98] text-white font-bold text-xs sm:text-sm shadow-xs flex items-center justify-center gap-2 disabled:opacity-50 transition-all select-none"
            >
              {authLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <UserPlus className="w-4 h-4" />
              )}
              <span>Tạo tài khoản Admin trên Supabase</span>
            </button>
          </form>
        )}

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
        <div className="text-center text-[10px] text-[#64748B] pt-2 border-t border-slate-100">
          <div>Bản quyền © 2026 NGUYỄN CÔNG NGUYÊN PHÁT TRIỂN WEBSITE • Dành cho nhân viên thị trường</div>
        </div>

      </div>
    </div>
  );
};
