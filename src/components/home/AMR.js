import Container from '../shared/Container';
import Link from 'next/link';
import React from 'react';

export default function AMR() {
  return (
    <section className="bg-[#40BFFF] relative mt-12">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between py-10 lg:py-16">
          <div className="text-white max-w-lg">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Adidas Men Running Sneakers
            </h1>
            <p className="mt-4 text-sm sm:text-base lg:text-lg">
              Performance and designs. Taken right to the edge.
            </p>
            <Link
              href="/products"
              className="block mt-6 text-white font-semibold relative group cursor-pointer"
            >
              <span className="relative">
                SHOP NOW
                <span className="absolute left-0 -bottom-1.5 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </span>
            </Link>
          </div>

          <div className="flex justify-center lg:justify-end w-full lg:w-1/2 mt-10 lg:mt-0">
            <img
              src="/images/shoes-shoe-png-transparent-shoe-images-pluspng-17 1.png"
              alt="Adidas Running Sneakers"
              className="w-[280px] sm:w-[350px] lg:w-[420px] drop-shadow-xl -mt-10 lg:-mt-44"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
