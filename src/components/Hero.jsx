import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[520px] sm:h-[560px] lg:h-[680px]">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-[#0f172a]/30 to-white/10" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white drop-shadow">
                VIYAN FASHION WORLD
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-100/90 drop-shadow">
                Effortless style for every occasion. Discover curated dresses crafted with premium fabrics and timeless silhouettes — from breezy daywear to statement evening looks.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#new"
                  className="inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:bg-slate-900 transition"
                >
                  Shop New Arrivals
                </a>
                <a
                  href="#bestsellers"
                  className="inline-flex items-center justify-center rounded-full border border-blue-600 text-blue-600 px-6 py-3 text-sm font-medium hover:bg-blue-50 transition"
                >
                  View Best Sellers
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-white/90">
                <div>
                  <div className="font-semibold">Free Shipping</div>
                  <div className="text-white/80">On orders over $75</div>
                </div>
                <div>
                  <div className="font-semibold">Easy Returns</div>
                  <div className="text-white/80">30-day return window</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="-mt-10 sm:-mt-12 lg:-mt-16 relative z-10">
            <div className="rounded-3xl bg-white shadow-xl ring-1 ring-black/5 p-5 sm:p-6 lg:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-700">Handpicked picks</p>
                  <p className="text-slate-500 text-sm">Modern silhouettes in black, violet, and blue</p>
                </div>
                <a href="#new" className="inline-flex items-center rounded-full bg-violet-600 text-white px-4 py-2 text-sm font-medium hover:bg-violet-700 transition">
                  Explore Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
