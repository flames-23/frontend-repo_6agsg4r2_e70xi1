import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="font-semibold text-gray-900">Shop</div>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li><a href="#new" className="hover:text-gray-900">New Arrivals</a></li>
              <li><a href="#bestsellers" className="hover:text-gray-900">Best Sellers</a></li>
              <li><a href="#summer" className="hover:text-gray-900">Summer</a></li>
              <li><a href="#evening" className="hover:text-gray-900">Evening</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Support</div>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Shipping</a></li>
              <li><a href="#" className="hover:text-gray-900">Returns</a></li>
              <li><a href="#" className="hover:text-gray-900">Sizing</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          <div className="col-span-2">
            <div className="font-semibold text-gray-900">Join our newsletter</div>
            <p className="mt-3 text-gray-600">Be first to know about new drops and exclusive offers.</p>
            <form className="mt-4 flex max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-l-xl border border-gray-300 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-rose-200"
              />
              <button className="rounded-r-xl bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} VIYAN FASHION WORLD. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
            <a href="#" className="hover:text-gray-700">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
