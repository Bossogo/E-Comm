import BestSellers from "@/components/home/BestSellers";
import HeroSection from "@/components/home/HeroSection";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Image from "next/image";

export default function Home() {
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
