'use client';

import AppLayout from './AppLayout';
import AMR from '../home/AMR';
import { useState } from 'react';
import { HiOutlineSquares2X2, HiOutlineBars3 } from 'react-icons/hi2';
import ProductCard from '../shared/ProductCard';

export const products = [
  {
    title: 'Classic Leather Bag',
    image: '/images/image Product.png',
    price: 120,
    oldPrice: 150,
    discount: 20,
    rating: 4.5,
    isHot: true,
  },
  {
    title: 'Running Sneakers',
    image: '/images/image Product (1).png',
    price: 80,
    oldPrice: 100,
    discount: 20,
    rating: 4.2,
    isHot: false,
  },
  {
    title: 'Elegant Belt',
    image: '/images/image Product (2).png',
    price: 35,
    oldPrice: 50,
    discount: 30,
    rating: 4.0,
    isHot: true,
  },
  {
    title: 'Casual Backpack',
    image: '/images/image Product (3).png',
    price: 65,
    rating: 4.3,
    isHot: false,
  },
  {
    title: 'High Top Sneakers',
    image: '/images/image Product (4).png',
    price: 95,
    oldPrice: 120,
    discount: 20,
    rating: 4.6,
    isHot: true,
  },
  {
    title: 'Fashionable Belt',
    image: '/images/image Product (5).png',
    price: 40,
    rating: 4.1,
    isHot: false,
  },
  {
    title: 'Mini Leather Bag',
    image: '/images/image Product (3).png',
    price: 90,
    oldPrice: 110,
    discount: 18,
    rating: 4.4,
    isHot: false,
  },
  {
    title: 'Sports Sneakers',
    image: '/images/image Product.png',
    price: 70,
    rating: 4.0,
    isHot: false,
  },
  {
    title: 'Sports Sneakers',
    image: '/images/image Product.png',
    price: 70,
    rating: 4.0,
    isHot: false,
  },
  {
    title: 'Sports Sneakers',
    image: '/images/image Product.png',
    price: 70,
    rating: 4.0,
    isHot: false,
  },
  {
    title: 'Sports Sneakers',
    image: '/images/image Product.png',
    price: 70,
    rating: 4.0,
    isHot: false,
  },
];

function ProductToolbar({
  totalItems,
  view,
  setView,
  showCount,
  setShowCount,
}) {
  const [sortBy, setSortBy] = useState('default');

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-6 mb-6 gap-4">
      {/* Left side: Items count */}
      <div className="text-gray-700 font-medium">{totalItems} items</div>

      {/* Middle: Sort & Show dropdowns */}
      <div className="flex items-center gap-4">
        <div>
          <label className="mr-2 font-medium text-gray-700">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
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

      {/* Right side: View toggle */}
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
          {paginatedProducts.map((product, index) => (
            <ProductCard key={index} product={product} layout="overlay" />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {paginatedProducts.map((product, index) => (
            <ProductCard key={index} product={product} layout="row" />
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

  const totalPages = Math.ceil(products.length / showCount);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <AppLayout>
      <AMR />

      <ProductToolbar
        totalItems={products.length}
        view={view}
        setView={setView}
        showCount={showCount}
        setShowCount={(count) => {
          setShowCount(count);
          setCurrentPage(1); // reset page on items-per-page change
        }}
      />

      <ProductDisplay
        products={products}
        view={view}
        currentPage={currentPage}
        showCount={showCount}
      />

      {/* Pagination */}
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
    </AppLayout>
  );
}
