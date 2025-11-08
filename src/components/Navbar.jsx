import React from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = ({ onCartClick, cartCount }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="text-2xl font-semibold tracking-tight">
              <span className="text-black">VIYAN</span>{' '}
              <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-sky-500 bg-clip-text text-transparent">FASHION WORLD</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
              <a href="#new" className="hover:text-slate-900 transition">New Arrivals</a>
              <a href="#bestsellers" className="hover:text-slate-900 transition">Best Sellers</a>
              <a href="#summer" className="hover:text-slate-900 transition">Summer</a>
              <a href="#evening" className="hover:text-slate-900 transition">Evening</a>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onCartClick}
              className="relative inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium hover:border-slate-300 hover:bg-slate-50 transition"
              aria-label="Open cart"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 min-w-[1.25rem] rounded-full bg-violet-600 px-1.5 text-xs leading-5 text-white text-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen((s) => !s)}
              className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-50"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2 text-sm text-slate-700">
              <a href="#new" className="px-2 py-2 rounded hover:bg-slate-50">New Arrivals</a>
              <a href="#bestsellers" className="px-2 py-2 rounded hover:bg-slate-50">Best Sellers</a>
              <a href="#summer" className="px-2 py-2 rounded hover:bg-slate-50">Summer</a>
              <a href="#evening" className="px-2 py-2 rounded hover:bg-slate-50">Evening</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
