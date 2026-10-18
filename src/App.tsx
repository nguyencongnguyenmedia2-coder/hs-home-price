import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { BottomNavigation } from './components/layout/BottomNavigation';
import { HomePage } from './components/home/HomePage';
import { ProductCatalog } from './components/products/ProductCatalog';
import { QuotationBuilder } from './components/quotation/QuotationBuilder';
import { FavoritesPage } from './components/favorites/FavoritesPage';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { AccountPage } from './components/account/AccountPage';
import { ProductDetailModal } from './components/products/ProductDetailModal';
import { EmployeeGateModal } from './components/auth/EmployeeGateModal';

const AppContent: React.FC = () => {
  const { activeTab, selectedProduct, setSelectedProduct, isEmployeeVerified, isAdmin } = useApp();

  const isLocked = !isEmployeeVerified && !isAdmin && activeTab !== 'admin';

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800">
      
      {/* Top Header Navigation */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 pt-3 sm:pt-6 pb-20 sm:pb-24 md:pb-12">
        {activeTab === 'home' && <HomePage />}
        {activeTab === 'catalog' && <ProductCatalog />}
        {activeTab === 'quotation' && <QuotationBuilder />}
        {activeTab === 'favorites' && <FavoritesPage />}
        {activeTab === 'admin' && <AdminDashboard />}
        {activeTab === 'account' && <AccountPage />}
      </main>

      {/* Internal Employee Verification Gate */}
      {isLocked && <EmployeeGateModal />}

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Global Footer with Admin Support Contacts */}
      <footer className="border-t border-[#E5EAF1] bg-white/80 py-4 px-3 text-center text-xs text-[#64748B] space-y-1.5 mb-16 md:mb-0">
        <div className="font-semibold text-[#172033]">
          Bản quyền © 2026 NGUYỄN CÔNG NGUYÊN PHÁT TRIỂN WEBSITE • Dành cho nhân viên thị trường
        </div>
        <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap text-xs">
          <span className="text-[#64748B] font-medium">Hỗ trợ kỹ thuật website:</span>
          <a 
            href="https://zalo.me/0934811307" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-lg border border-blue-200 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span>Zalo: 0934 811 307</span>
          </a>
          <a 
            href="tel:0981008274" 
            className="inline-flex items-center gap-1 font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-lg border border-emerald-200 transition-colors"
          >
            <span>📞 ĐT: 0981 008 274</span>
          </a>
        </div>
      </footer>

      {/* Mobile Bottom Navigation Bar */}
      <BottomNavigation />

    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
