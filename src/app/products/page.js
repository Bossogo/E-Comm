'use client';

import AMR from '@/components/home/AMR';
import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { useFilters } from '@/context/FiltersContext';

import ProductDisplay from '../../components/Product/ProductDisplay';
import ProductToolbar from '../../components/Product/ProductToolbar';
import ProductPagination from '@/components/Product/ProductPagination';




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

          <ProductPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </>
      )}
    </>
  );
}
