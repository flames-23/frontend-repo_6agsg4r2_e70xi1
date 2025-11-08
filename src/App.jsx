import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

const App = () => {
  const [cart, setCart] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const cartCount = cart.reduce((sum, p) => sum + p.qty, 0);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onCartClick={() => setOpen(true)} cartCount={cartCount} />
      <main>
        <Hero />
        <ProductGrid onAddToCart={handleAddToCart} />
      </main>
      <Footer />

      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-semibold">Your Cart</h3>
              <button onClick={() => setOpen(false)} className="text-sm text-slate-600 hover:text-slate-900">Close</button>
            </div>
            <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-160px)]">
              {cart.length === 0 ? (
                <p className="text-sm text-slate-600">Your cart is empty.</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <img src={item.image} alt={item.name} className="h-16 w-16 rounded object-cover" />
                    <div className="flex-1">
                      <div className="font-medium line-clamp-1">{item.name}</div>
                      <div className="text-sm text-slate-500">Qty: {item.qty}</div>
                    </div>
                    <div className="font-semibold">${(item.price * item.qty).toFixed(2)}</div>
                  </div>
                ))
              )}
            </div>
            <div className="p-4 border-t">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-slate-600">Subtotal</span>
                <span className="font-semibold">
                  ${cart.reduce((sum, i) => sum + i.price * i.qty, 0).toFixed(2)}
                </span>
              </div>
              <button
                className="w-full rounded-full bg-gradient-to-r from-violet-600 via-blue-600 to-sky-500 text-white px-4 py-3 text-sm font-medium hover:from-violet-700 hover:via-blue-700 hover:to-sky-600 transition disabled:opacity-50"
                disabled={cart.length === 0}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
