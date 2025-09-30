import ProductCard from '@/components/shared/ProductCard';

export default function ProductDisplay({ products, view = 'grid', currentPage, showCount }) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">No products found.</div>
    );
  }

  const startIndex = (currentPage - 1) * showCount;
  const paginatedProducts = products.slice(startIndex, startIndex + showCount);

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