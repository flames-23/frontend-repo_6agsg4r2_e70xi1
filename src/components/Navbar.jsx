import React from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = ({ onCartClick, cartCount }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="text-2xl font-semibold tracking-tight">
              Dressy
              <span className="text-rose-500">Boutique</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
              <a href="#new" className="hover:text-gray-900 transition">New Arrivals</a>
              <a href="#bestsellers" className="hover:text-gray-900 transition">Best Sellers</a>
              <a href="#summer" className="hover:text-gray-900 transition">Summer</a>
              <a href="#evening" className="hover:text-gray-900 transition">Evening</a>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onCartClick}
              className="relative inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium hover:border-gray-300 hover:bg-gray-50 transition"
              aria-label="Open cart"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 min-w-[1.25rem] rounded-full bg-rose-500 px-1.5 text-xs leading-5 text-white text-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen((s) => !s)}
              className="md:hidden inline-flex items-center justify-center rounded-full border border-gray-200 p-2 hover:bg-gray-50"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2 text-sm text-gray-700">
              <a href="#new" className="px-2 py-2 rounded hover:bg-gray-50">New Arrivals</a>
              <a href="#bestsellers" className="px-2 py-2 rounded hover:bg-gray-50">Best Sellers</a>
              <a href="#summer" className="px-2 py-2 rounded hover:bg-gray-50">Summer</a>
              <a href="#evening" className="px-2 py-2 rounded hover:bg-gray-50">Evening</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
