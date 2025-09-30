'use client';
import { useFavorites } from '@/context/FavoritesContext';
import ProductCard from '@/components/shared/ProductCard';

export default function FavoritesPage(){
  const { favorites } = useFavorites();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">Your Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorites yet. Browse products and click the heart icon to add some.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}