import React from 'react';
import { Star } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-md transition">
      <div className="aspect-[4/5] overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium text-gray-900 line-clamp-2">{product.name}</h3>
          <div className="text-right">
            <div className="font-semibold text-gray-900">${product.price.toFixed(2)}</div>
            {product.originalPrice && (
              <div className="text-xs text-gray-500 line-through">${product.originalPrice.toFixed(2)}</div>
            )}
          </div>
        </div>
        <div className="mt-2 flex items-center gap-1 text-amber-500">
          {[0,1,2,3,4].map((i) => (
            <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? 'fill-amber-400 stroke-amber-400' : 'stroke-amber-400'}`} />
          ))}
          <span className="ml-2 text-xs text-gray-500">({product.reviews})</span>
        </div>
        <button
          onClick={() => onAddToCart(product)}
          className="mt-4 w-full rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
