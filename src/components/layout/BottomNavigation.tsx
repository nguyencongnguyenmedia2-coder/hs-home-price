import React from 'react';
import { useApp } from '../../context/AppContext';
import { Home, Layers, ReceiptText, Heart, User, FileSpreadsheet } from 'lucide-react';

export const BottomNavigation: React.FC = () => {
  const { activeTab, setActiveTab, quotationItems, favoriteIds } = useApp();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/98 backdrop-blur-lg border-t border-[#E5EAF1] shadow-lg pb-[env(safe-area-inset-bottom,0px)]">
      <div className="flex items-center justify-around h-14 max-w-md mx-auto px-1">
        
        {/* 1. Trang chủ */}
        <button
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center justify-center min-w-[48px] min-h-[44px] flex-1 py-1 transition-colors select-none ${
            activeTab === 'home' ? 'text-[#E60012] font-bold' : 'text-[#64748B] hover:text-[#172033]'
          }`}
          aria-label="Trang chủ"
        >
          <Home className="w-5 h-5 stroke-[2.2]" />
          <span className="text-[10px] mt-0.5 tracking-tight">Trang chủ</span>
        </button>

        {/* 2. Sản phẩm */}
        <button
          onClick={() => setActiveTab('catalog')}
          className={`flex flex-col items-center justify-center min-w-[48px] min-h-[44px] flex-1 py-1 transition-colors select-none ${
            activeTab === 'catalog' ? 'text-[#E60012] font-bold' : 'text-[#64748B] hover:text-[#172033]'
          }`}
          aria-label="Sản phẩm"
        >
          <Layers className="w-5 h-5 stroke-[2.2]" />
          <span className="text-[10px] mt-0.5 tracking-tight">Sản phẩm</span>
        </button>

        {/* 3. Báo giá */}
        <button
          onClick={() => setActiveTab('quotation')}
          className={`flex flex-col items-center justify-center min-w-[48px] min-h-[44px] flex-1 py-1 transition-colors relative select-none ${
            activeTab === 'quotation' ? 'text-[#E60012] font-bold' : 'text-[#64748B] hover:text-[#172033]'
          }`}
          aria-label="Báo giá"
        >
          <div className="relative">
            <ReceiptText className="w-5 h-5 stroke-[2.2]" />
            {quotationItems.length > 0 && (
              <span className="absolute -top-1.5 -right-2.5 px-1 py-0.2 min-w-[16px] h-[16px] rounded-full bg-[#E60012] text-white text-[9px] font-extrabold flex items-center justify-center shadow-xs">
                {quotationItems.length}
              </span>
            )}
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight">Báo giá</span>
        </button>

        {/* 4. Đã lưu */}
        <button
          onClick={() => setActiveTab('favorites')}
          className={`flex flex-col items-center justify-center min-w-[48px] min-h-[44px] flex-1 py-1 transition-colors relative select-none ${
            activeTab === 'favorites' ? 'text-[#E60012] font-bold' : 'text-[#64748B] hover:text-[#172033]'
          }`}
          aria-label="Đã lưu"
        >
          <div className="relative">
            <Heart className={`w-5 h-5 stroke-[2.2] ${favoriteIds.length > 0 && activeTab === 'favorites' ? 'fill-current' : ''}`} />
            {favoriteIds.length > 0 && (
              <span className="absolute -top-1 -right-1.5 w-2 h-2 rounded-full bg-[#E60012]"></span>
            )}
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight">Đã lưu</span>
        </button>

        {/* 5. Tài khoản */}
        <button
          onClick={() => setActiveTab('account')}
          className={`flex flex-col items-center justify-center min-w-[48px] min-h-[44px] flex-1 py-1 transition-colors select-none ${
            activeTab === 'account' || activeTab === 'admin' ? 'text-[#E60012] font-bold' : 'text-[#64748B] hover:text-[#172033]'
          }`}
          aria-label="Tài khoản"
        >
          <User className="w-5 h-5 stroke-[2.2]" />
          <span className="text-[10px] mt-0.5 tracking-tight">Tài khoản</span>
        </button>

      </div>
    </nav>
  );
};
