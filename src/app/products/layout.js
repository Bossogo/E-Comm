'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/shared/Header';
import { useFilters } from '@/context/FiltersContext';
import { useRouter } from 'next/navigation';

function Sidebar() {
  const { filters, setFilters } = useFilters();
  const router = useRouter();
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products client-side (avoids broken static import path causing prerender error)
  // Sidebar is a client component so safe to fetch here.
  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        setLoading(true);
        const res = await fetch('/api/products', { cache: 'no-store' });
        const data = await res.json();
        let extracted = [];
        if (Array.isArray(data)) extracted = data;
        else if (Array.isArray(data.data)) extracted = data.data;
        else if (Array.isArray(data.products)) extracted = data.products;
        if (!ignore) setAllProducts(extracted);
      } catch (e) {
        console.warn('Sidebar products fetch failed', e);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    return () => { ignore = true; };
  }, []);

  const brandCounts = allProducts.reduce((acc, p) => {
    if (p.brand) acc[p.brand] = (acc[p.brand] || 0) + 1;
    return acc;
  }, {});

  const colorCounts = allProducts.reduce((acc, p) => {
    if (p.color) acc[p.color] = (acc[p.color] || 0) + 1;
    return acc;
  }, {});

  const handleClearFilters = () => {
    setFilters(prev => ({
      ...prev,
      hotDeal: null,
      brand: null,
      color: null,
      priceRange: [0, 200],
    }));
    router.push('/products');
  };

  return (
    <aside className="flex flex-col p-6 pt-17.5 w-64 md:w-64 bg-white overflow-y-auto">
      <div className="mb-6 bg-brand-grey p-6">
        <h2 className="text-xl font-semibold mb-4">Hot Deals</h2>
        <ul className="space-y-1">
          <li
            onClick={() => setFilters({ ...filters, hotDeal: true })}
            className={`flex justify-between cursor-pointer hover:text-blue-500 ${
              filters.hotDeal ? 'text-blue-600 font-semibold' : ''
            }`}
          >
            <span>Hot Deals</span>
            <span className="text-gray-500">
              {allProducts.filter((p) => p.isHot || p.isBestSeller).length}
            </span>
          </li>
        </ul>
      </div>

      <div className="mb-6 bg-brand-grey p-6">
        <h2 className="text-xl font-semibold mb-2">Prices</h2>
        <div className="flex justify-between text-gray-700 text-sm mb-2">
          <span>${filters.priceRange[0].toFixed(2)}</span>
          <span>${filters.priceRange[1].toFixed(2)}</span>
        </div>
        <input
          type="range"
          min={0}
          max={200}
          value={filters.priceRange[1]}
          onChange={(e) =>
            setFilters({
              ...filters,
              priceRange: [filters.priceRange[0], Number(e.target.value)],
            })
          }
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
      </div>

      <div className="mb-6 bg-brand-grey p-6">
        <h2 className="text-xl font-semibold mb-2">Color</h2>
        <div className="flex flex-wrap gap-2">
          {loading && <span className="text-sm text-gray-400">Loading…</span>}
          {!loading && Object.entries(colorCounts).map(([color, count]) => (
            <div
              key={color}
              onClick={() => setFilters({ ...filters, color })}
              className={`flex items-center gap-2 cursor-pointer hover:scale-105 transition ${
                filters.color === color ? 'ring-2 ring-blue-500 rounded' : ''
              }`}
            >
              <span
                className="w-6 h-6 rounded-full border border-gray-300"
                style={{ backgroundColor: color.toLowerCase() }}
                title={color}
              ></span>
              <span className="text-gray-500 text-sm">{count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6 bg-brand-grey p-6">
        <h2 className="text-xl font-semibold mb-2">Brand</h2>
        <ul className="space-y-1">
          {loading && <li className="text-sm text-gray-400">Loading…</li>}
          {!loading && Object.entries(brandCounts).map(([brand, count]) => (
            <li
              key={brand}
              onClick={() => setFilters({ ...filters, brand })}
              className={`flex justify-between cursor-pointer hover:text-blue-500 ${
                filters.brand === brand ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              <span>{brand}</span>
              <span className="text-gray-500">{count}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleClearFilters}
        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded transition"
      >
        Clear Filters
      </button>
    </aside>
  );
}

export default function AppLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <div className="bg-gray-100 mb-2 text-md flex items-center justify-center py-2">
        <span className="text-brand-blue">Home </span>&nbsp;/ Hotdeal
      </div>
      <div className="flex min-h-screen bg-white">
        <div
          className={`fixed inset-0 z-50 transform transition-transform duration-300 md:relative md:translate-x-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <Sidebar />
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-4 md:hidden text-gray-700 font-bold"
          >
            ✕
          </button>
        </div>

        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </>
  );
}
