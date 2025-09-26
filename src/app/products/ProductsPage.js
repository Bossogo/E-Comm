'use client';
import AMR from '../../components/home/AMR';
import { useEffect, useState } from 'react';
import ProductDisplay from '../../components/Product/ProductDisplay';
import ProductToolbar from '../../components/Product/ProductToolbar';
import ProductPagination from '@/components/Product/ProductPagination';

export default function Products() {
  const [view, setView] = useState('grid');
  const [showCount, setShowCount] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('default');
  const [products, setProducts] = useState([]);

  const totalPages = Math.ceil(products.length / showCount);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <>
      <AMR size="small" />

      <ProductToolbar
        totalItems={products.length}
        view={view}
        setView={setView}
        sortBy={sortBy}
        setSortBy={setSortBy}
        showCount={showCount}
        setShowCount={(count) => {
          setShowCount(count);
          setCurrentPage(1);
        }}
      />

      <ProductDisplay
        products={products}
        view={view}
        currentPage={currentPage}
        showCount={showCount}
        sortBy={sortBy}
      />

      {/* Pagination */}
      <ProductPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
}
