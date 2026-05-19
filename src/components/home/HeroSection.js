import Image from 'next/image';
import Container from '../shared/Container';
import ProductCard from '../shared/ProductCard';

import React from 'react';
import { ImageResponse } from 'next/server';

export default function HeroSection() {
  const products = [
    {
      id: 1,
      title: 'FS - Quilted Maxi Cross Bag',
      image: '/images/image Product.png',
      oldPrice: 534.33,
      discount: 24,
      price: 299.43,
    },
    {
      id: 2,
      title: 'FS - Nike Air Max 270 React',
      image: '/images/image Product (1).png',
      oldPrice: 534.33,
      discount: 24,
      price: 299.43,
    },
    {
      id: 3,
      title: 'FS - Nike Red Runner',
      image: '/images/image Product (2).png',
      oldPrice: 534.33,
      discount: 24,
      price: 299.43,
    },
  ];

  return (
    <section className="relative w-full mb-3 sm:mb-6 lg:mb-9 min-h-[250px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px] xl:min-h-[600px]">
      <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
        <Image
          src="/images/Promotion Image.png"
          alt="Hero"
          width={1918}
          height={653}
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <Container>
          <div className="flex flex-col justify-center h-full py-8 lg:translate-y-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold leading-tight">
              Super Flash Sale
              <span className="block mt-2">50% Off</span>
            </h1>
            <p className="text-white/90 mt-4 text-sm sm:text-base lg:text-lg max-w-lg">
              Limited time offer on selected items
            </p>
          </div>
        </Container>
      </div>

      <div className="relative -mt-20 sm:-mt-24 lg:-mt-32">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
            {products.map((product, idx) => {
              const visibilityClasses =
                idx < 2
                  ? 'hidden sm:block'
                  : 'hidden lg:block';
              return (
                <div key={product.id} className={visibilityClasses}>
                  <ProductCard {...product} />
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}
