import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-amber-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Effortless Style for Every Occasion
            </h1>
            <p className="mt-5 text-gray-600 text-lg leading-relaxed max-w-xl">
              Discover curated dresses crafted with premium fabrics and timeless silhouettes. From breezy daywear to statement evening looks — we’ve got your next favorite outfit.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#new" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition">
                Shop New Arrivals
              </a>
              <a href="#bestsellers" className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-sm font-medium hover:bg-gray-50 transition">
                View Best Sellers
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-gray-600">
              <div>
                <div className="font-semibold text-gray-900">Free Shipping</div>
                <div>On orders over $75</div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Easy Returns</div>
                <div>30-day return window</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1520975682031-a4dd1a5d7c67?q=80&w=1600&auto=format&fit=crop"
                alt="Model wearing a flowing dress"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block bg-white shadow-xl rounded-2xl ring-1 ring-black/5 p-4">
              <div className="text-xs uppercase tracking-wide text-gray-500">New Season</div>
              <div className="font-semibold">Linen Summer Collection</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
