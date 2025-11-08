import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Floral Midi Wrap Dress',
    price: 79,
    originalPrice: 99,
    rating: 4.6,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1626120140923-5e38d407fe03?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGbG9yYWwlMjBNaWRpJTIwV3JhcCUyMERyZXNzfGVufDB8MHx8fDE3NjI2MTM1NjZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Satin Slip Evening Dress',
    price: 119,
    rating: 4.8,
    reviews: 214,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Linen Tiered Sundress',
    price: 69,
    rating: 4.4,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1597532842922-dd855db3e562?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMaW5lbiUyMFRpZXJlZCUyMFN1bmRyZXNzfGVufDB8MHx8fDE3NjI2MTM1NjZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    name: 'Pleated Chiffon Maxi',
    price: 139,
    originalPrice: 159,
    rating: 4.7,
    reviews: 171,
    image: 'https://images.unsplash.com/photo-1675627452466-fec3fa89f394?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQbGVhdGVkJTIwQ2hpZmZvbiUyME1heGl8ZW58MHwwfHx8MTc2MjYxMzU2Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    name: 'Tailored Shirt Dress',
    price: 89,
    rating: 4.5,
    reviews: 102,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Embroidered Boho Dress',
    price: 99,
    rating: 4.6,
    reviews: 147,
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop'
  }
];

const ProductGrid = ({ onAddToCart }) => {
  return (
    <section id="new" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">New Arrivals</h2>
            <p className="mt-2 text-gray-600">Fresh styles just landed. Limited stock available.</p>
          </div>
          <a href="#" className="text-sm font-medium text-rose-600 hover:text-rose-700">View all</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
