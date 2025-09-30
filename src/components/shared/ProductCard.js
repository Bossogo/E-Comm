'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useFavorites } from '@/context/FavoritesContext';
import { Heart, ShoppingCart, Star } from 'lucide-react';

export default function ProductCard({
  product,
  layout = 'overlay',
  title,
  image,
  price,
  oldPrice,
  discount,
  rating,
  isHot,
  id,
}) {
  const item = product || {
    id,
    title,
    image,
    price,
    oldPrice,
    discount,
    rating,
    isHot,
  };
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(item.id);

  const renderStars = (raw) => {
    const max = 5;
    const ratingValue = Math.min(max, Math.max(0, Number(raw) || 0));
    const filled = Math.floor(ratingValue);
    return (
      <div className="flex items-center gap-1" aria-label={`Rated ${ratingValue} out of 5`}>
        {Array.from({ length: max }).map((_, i) => {
          const isFilled = i < filled;
            return (
            <Star
              key={i}
              className={`w-4 h-4 ${isFilled ? 'text-brand-yellow fill-brand-yellow stroke-brand-yellow' : 'text-star-grey stroke-star-grey fill-star-grey'}`}
              fill={'currentColor'}
              strokeWidth={1.5}
            />
            );
        })}
        {ratingValue > 0 && (
          <span className="ml-2 text-xs text-gray-500">{ratingValue.toFixed(1)}</span>
        )}
      </div>
    );
  };

  const cardContent =
    layout === 'row' ? (
      <div className="flex items-center bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition relative">
        {item.isHot && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            HOT
          </div>
        )}

        <div className="w-20 h-20 flex-shrink-0">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="ml-4 flex-1">
          <h3 className="text-base font-semibold text-gray-900">
            {item.title}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm font-bold text-gray-900">
              {item.price}
            </span>
            {item.oldPrice && (
              <span className="text-xs line-through text-gray-400">
                {item.oldPrice}
              </span>
            )}
          </div>
          {item.rating && <div className="mt-1">{renderStars(item.rating)}</div>}
        </div>
      </div>
    ) : (
      <div className="relative overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg rounded-lg group">
        {item.isHot && (
          <div className="absolute top-0 left-0 bg-brand-pink text-white text-lg font-normal px-3 py-1 rounded z-20">
            HOT
          </div>
        )}

        {/* Media Area (image + hover actions) */}
        <div className="relative aspect-[4/3] w-full bg-brand-grey">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          {/* Action buttons centered ONLY over the image */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/0 group-hover:bg-black/20 backdrop-blur-[2px]">
            <button
              aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
              className={`p-3 rounded-full transition shadow-md focus:outline-none focus:ring-2 focus:ring-white/40 ${favorite ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-black/50 hover:bg-black/70 text-white'}`}
              onClick={(e) => {
                e.preventDefault();
                toggleFavorite(item);
              }}
            >
              <Heart className={`w-5 h-5 ${favorite ? 'fill-current' : ''}`} />
            </button>
            <button
              aria-label="Add to cart"
              className="p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition shadow-md focus:outline-none focus:ring-2 focus:ring-white/40"
              onClick={(e) => {
                e.preventDefault();
                addToCart(item, 1);
              }}
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-4 flex flex-col items-center gap-1">
          <h3 className="font-semibold text-brand-dark-blue text-lg text-center line-clamp-2">
            {item.title}
          </h3>
          {item.rating && renderStars(item.rating)}
          <div className='flex items-center gap-2'>
            <p className="text-sky-400 font-bold text-lg">${item.price}</p>
            {item.oldPrice && (
              <p className="line-through text-gray-300 text-md">
                ${item.oldPrice}
              </p>
            )}
            {item.discount && (
              <p className="text-red-400 font-bold text-md">
                {item.discount}% Off
              </p>
            )}
          </div>
        </div>
      </div>
    );

  return (
    <Link href={`/product/${item.id}`} className="block">
      {cardContent}
    </Link>
  );
}
