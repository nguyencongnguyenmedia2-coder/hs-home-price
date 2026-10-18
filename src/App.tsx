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

const AppContent: React.FC = () => {
  const { activeTab, selectedProduct, setSelectedProduct } = useApp();

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

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

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
