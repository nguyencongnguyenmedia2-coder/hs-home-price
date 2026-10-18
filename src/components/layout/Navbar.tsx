import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Building2, 
  FileSpreadsheet, 
  Heart, 
  ReceiptText, 
  ShieldCheck, 
  UserCheck, 
  Layers, 
  Home
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    currentUser, 
    switchRole, 
    currentVersion, 
    quotationItems, 
    favoriteIds, 
    activeTab, 
    setActiveTab 
  } = useApp();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5EAF1] shadow-xs pt-[env(safe-area-inset-top,0px)]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer select-none group min-w-0"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#E60012] flex items-center justify-center text-white font-extrabold text-sm sm:text-base shadow-sm shrink-0 group-hover:scale-105 transition-transform">
              HS
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-nowrap">
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#172033] group-hover:text-[#E60012] transition-colors whitespace-nowrap">
                  HOA SEN HOME
                </span>
                <span className="px-1.5 py-0.2 text-[9px] sm:text-[10px] font-bold uppercase rounded bg-amber-50 text-amber-800 border border-amber-200/60 shrink-0">
                  Nội bộ
                </span>
              </div>
              <div className="text-[10px] sm:text-[11px] text-[#64748B] flex items-center gap-1 font-medium truncate">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                <span className="truncate">{currentVersion.name}</span>
                <span className="text-slate-300">•</span>
                <span className="shrink-0">292 SP</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1.5 transition-colors ${
                activeTab === 'home'
                  ? 'bg-red-50 text-red-600'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Trang chủ</span>
            </button>

            <button
              onClick={() => setActiveTab('catalog')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1.5 transition-colors ${
                activeTab === 'catalog'
                  ? 'bg-red-50 text-red-600'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Sản phẩm</span>
            </button>

            <button
              onClick={() => setActiveTab('quotation')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1.5 transition-colors relative ${
                activeTab === 'quotation'
                  ? 'bg-red-50 text-red-600'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <ReceiptText className="w-4 h-4" />
              <span>Báo giá</span>
              {quotationItems.length > 0 && (
                <span className="px-1.5 py-0.2 text-[11px] font-bold rounded-full bg-red-600 text-white animate-bounce">
                  {quotationItems.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('favorites')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1.5 transition-colors ${
                activeTab === 'favorites'
                  ? 'bg-red-50 text-red-600'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>Đã lưu</span>
              {favoriteIds.length > 0 && (
                <span className="text-[11px] font-semibold text-slate-400">
                  ({favoriteIds.length})
                </span>
              )}
            </button>

            {currentUser.role === 'admin' && (
              <button
                onClick={() => setActiveTab('admin')}
                className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1.5 transition-colors ${
                  activeTab === 'admin'
                    ? 'bg-red-50 text-red-600'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>Quản trị bảng giá</span>
              </button>
            )}
          </nav>

          {/* Right Action: Admin / Staff Status & Account */}
          <div className="flex items-center gap-2">
            
            {/* Desktop Role Pill: Admin vs Staff */}
            <div className="hidden sm:flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs font-semibold">
              <span className={`px-2.5 py-1 rounded-md transition-all ${
                currentUser.role === 'admin'
                  ? 'bg-[#E60012] text-white shadow-xs font-bold'
                  : 'bg-white text-slate-700 shadow-2xs'
              }`}>
                {currentUser.role === 'admin' ? 'Quản trị viên (Admin)' : 'Nhân viên thị trường'}
              </span>
            </div>

            {/* Profile Avatar / Trigger */}
            <button
              onClick={() => setActiveTab('account')}
              className={`flex items-center gap-2 p-1.5 rounded-xl border transition-all ${
                activeTab === 'account'
                  ? 'border-red-400 bg-red-50/50'
                  : 'border-transparent hover:bg-slate-100'
              }`}
            >
              <div className={`w-8 h-8 rounded-full text-white font-bold text-xs flex items-center justify-center shadow-xs ${
                currentUser.role === 'admin' ? 'bg-[#E60012]' : 'bg-gradient-to-tr from-slate-700 to-slate-900'
              }`}>
                {currentUser.name.charAt(0)}
              </div>
              <div className="hidden lg:block text-left">
                <div className="text-xs font-bold text-slate-900 truncate max-w-[130px]">
                  {currentUser.name}
                </div>
                <div className="text-[10px] text-slate-500 font-medium">
                  {currentUser.role === 'admin' ? 'Admin Supabase' : 'Không cần đăng nhập'}
                </div>
              </div>
            </button>

          </div>

        </div>
      </div>
    </header>
  );
};
