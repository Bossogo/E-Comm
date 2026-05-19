'use client';
import React, { useState, useEffect } from 'react';
import Container from '../shared/Container';
import ProductCard from '../shared/ProductCard';

function BestSellers() {
  const [visibleCount, setVisibleCount] = useState(8);
  const [products, setProducts] = useState([]);
  const [showingAll, setShowingAll] = useState(false);

  const handleLoadMore = () => {
    setVisibleCount(products.length);
  };

  const handleHide = () => {
    setVisibleCount(8);
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data.data || data.products || data || []);
      }
      catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    
    fetchProducts();
  }, []);
  useEffect(() => {
    setShowingAll(visibleCount >= products.length);
  }, [visibleCount, products]);

  return (
    <section>
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold">BEST SELLER</h1>
        <ul className="flex justify-center gap-6 text-gray-500 mt-4 cursor-pointer">
          {['All', 'Bags', 'Sneakers', 'Sunglasses'].map((item) => (
            <li key={item} className="relative group font-medium">
              <span className="hover:text-blue-500 transition-colors duration-300">
                {item}
              </span>
              <span className="absolute left-0 -bottom-1.5 w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>

      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {products && products.slice(0, visibleCount).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center py-10">
          {!showingAll ? (
            <button
              onClick={handleLoadMore}
              className="relative inline-block cursor-pointer font-medium group"
            >
              <span className="transition-colors duration-300 group-hover:text-blue-500">
                LOAD MORE
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </button>
          ) : (
            <button
              onClick={handleHide}
              className="relative inline-block cursor-pointer font-medium group"
            >
              <span className="transition-colors duration-300 group-hover:text-blue-500">
                HIDE
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </button>
          )}
        </div>
      </Container>
    </section>
  );
}

export default BestSellers;
