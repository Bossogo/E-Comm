"use client";
import BestSellers from "@/components/home/BestSellers";
import HeroSection from "@/components/home/HeroSection";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Image from "next/image";
import { use, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      alert(JSON.stringify(data, null, 2));
    }
    getProducts();
  
  }, [])
  
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Best Seller */}
        <BestSellers />

        {/* Adidas Sneaker */}

        {/* Why Us */}
        
        {/* Latest News */}

        {/* Featured Products */}

        {/* Search Bar */}
      </main>
      <Footer />
    </>
  );
}
