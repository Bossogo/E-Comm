import React from 'react';
import Container from '../shared/Container';
import ProductCard from '../Product/ProductCard';

function BestSellers() {
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
    {
      id: 4,
      title: 'FS - Nike Red Runner',
      image: '/images/image Product (2).png',
      oldPrice: 534.33,
      discount: 24,
      price: 299.43,
    },
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
      isHot: true,
    },
    {
      id: 4,
      title: 'FS - Nike Red Runner',
      image: '/images/image Product (2).png',
      oldPrice: 534.33,
      discount: 24,
      price: 299.43,
    },
  ];
  return (
    <section>
      <div className="text-center py-10">
        <h1>BEST SELLER</h1>
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
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="text-center py-10">
          <h1 className="relative inline-block cursor-pointer font-medium group">
            <span className="transition-colors duration-300 group-hover:text-blue-500">
              LOAD MORE
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </h1>
        </div>
      </Container>
    </section>
  );
}

export default BestSellers;
