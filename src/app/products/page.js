'use client';

import AMR from '@/components/home/AMR';
import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { HiOutlineSquares2X2, HiOutlineBars3 } from 'react-icons/hi2';
import ProductCard from '@/components/shared/ProductCard';
import { useFilters } from '@/context/FiltersContext';

function ProductToolbar({
  totalItems,
  view,
  setView,
  showCount,
  setShowCount,
}) {
  // useFilters returns { filters, setFilters }
  const { filters, setFilters } = useFilters();
  const { sortBy } = filters;

  return (
    <div className="flex flex-col bg-brand-grey px-4 py-4 md:flex-row items-center justify-between mt-6 mb-6 gap-4">
      <div className="text-gray-700 font-medium">{totalItems} items</div>

      <div className="flex items-center gap-4">
        <div>
          <label className="mr-2 font-medium text-gray-700">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, sortBy: e.target.value }))
            }
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value="default">Default</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="rating">Rating</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        <div>
          <label className="mr-2 font-medium text-gray-700">Show:</label>
          <select
            value={showCount}
            onChange={(e) => setShowCount(Number(e.target.value))}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value={3}>3</option>
            <option value={6}>6</option>
            <option value={9}>9</option>
            <option value={12}>12</option>
            <option value={15}>15</option>
          </select>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button
          onClick={() => setView('grid')}
          className={`p-2 rounded border ${
            view === 'grid' ? 'bg-blue-500 text-white' : 'border-gray-300'
          }`}
        >
          <HiOutlineSquares2X2 className="w-5 h-5" />
        </button>

        <button
          onClick={() => setView('list')}
          className={`p-2 rounded border ${
            view === 'list' ? 'bg-blue-500 text-white' : 'border-gray-300'
          }`}
        >
          <HiOutlineBars3 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

function ProductDisplay({ products, view = 'grid', currentPage, showCount }) {
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

export default function Products() {
  const [view, setView] = useState('grid');
  const [showCount, setShowCount] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchParams = useSearchParams();
  const queryCategory = searchParams.get('category');

  const { filters } = useFilters();
  const { category, hotDeal, brand, color, priceRange, search, sortBy } = filters;

  useEffect(() => {
    let ignore = false;
    const getProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/products', { cache: 'no-store' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        // Accept shapes: array, {data: [...]}, {products: [...]}
        let extracted = [];
        if (Array.isArray(data)) extracted = data;
        else if (Array.isArray(data.data)) extracted = data.data;
        else if (Array.isArray(data.products)) extracted = data.products;
        else console.warn('Unexpected products payload shape', data);
        setProducts(extracted);
            } catch (e) {
              if (!ignore) setError(e.message || 'Failed to load products');
            } finally {
              if (!ignore) setLoading(false);
            }
          };
    getProducts();
    return () => { ignore = true; };
  }, []);

  const filteredProducts = useMemo(() => {
    let result = Array.isArray(products) ? products : [];
    if (!Array.isArray(result)) {
      console.warn('Products state is not an array; received:', products);
      return [];
    }

    const activeCategory = queryCategory || category;
    if (activeCategory) {
      // Attempt numeric match first then fallback to string field if added later
      result = result.filter((p) => {
        if (p.category) {
          return (
            typeof p.category === 'string' &&
            p.category.toLowerCase() === activeCategory.toLowerCase()
          );
        }
        return String(p.categoryId) === String(activeCategory);
      });
    }

    if (filters.hotOnly) {
      result = result.filter((p) => p.isHot || p.isBestSeller);
    }
    if (hotDeal) {
      result = result.filter((p) => p.isHot === true || p.isBestSeller);
    }
    if (brand) {
      result = result.filter((p) => p.brand === brand);
    }
    if (color) {
      result = result.filter((p) => p.color === color);
    }
    if (Array.isArray(priceRange) && priceRange.length === 2) {
      result = result.filter(
        (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
      );
    }
    if (search) {
      result = result.filter((p) =>
        p.title?.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (sortBy === 'price-low-high') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high-low') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result = [...result].sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortBy === 'newest') {
      result = [...result].sort(
        (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
      );
    }
    // Final defensive return – always an array
    return Array.isArray(result) ? result : [];
  }, [
    products,
    queryCategory,
    category,
    filters.hotOnly,
    hotDeal,
    brand,
    color,
    priceRange,
    search,
    sortBy,
  ]);

  useEffect(() => {
    setCurrentPage(1);
  }, [
    queryCategory,
    category,
    filters.hotOnly,
    hotDeal,
    brand,
    color,
    priceRange,
    search,
    sortBy,
    showCount,
  ]);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(filteredProducts.length / showCount)),
    [filteredProducts.length, showCount]
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      <AMR />

      {loading && (
        <div className="py-10 text-center text-gray-500">Loading products...</div>
      )}
      {error && !loading && (
        <div className="py-10 text-center text-red-600">{error}</div>
      )}

      {!loading && !error && (
        <>
          <ProductToolbar
            totalItems={filteredProducts.length}
            view={view}
            setView={setView}
            showCount={showCount}
            setShowCount={(count) => {
              setShowCount(count);
              setCurrentPage(1);
            }}
          />

          <ProductDisplay
            products={filteredProducts}
            view={view}
            currentPage={currentPage}
            showCount={showCount}
          />

          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span className="text-gray-700 font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
}
