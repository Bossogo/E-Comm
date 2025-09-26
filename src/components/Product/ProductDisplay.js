import ProductCard from '@/components/Product/ProductCard';

export default function ProductDisplay({ products, view = 'grid', currentPage, showCount, sortBy }) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">No products found.</div>
    );
  }
  const sortedProducts = [...products];
  if (sortBy === 'price-low-high') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high-low') {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'newest') {
    sortedProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  const startIndex = (currentPage - 1) * showCount;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + showCount);

  return (
    <div>
      {view === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} layout="overlay" />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} layout="row" />
          ))}
        </div>
      )}
    </div>
  );
}