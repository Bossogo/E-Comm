import BestSellers from '@/components/home/BestSellers';
import HeroSection from '@/components/home/HeroSection';
import AMR from '@/components/home/AMR';
import GRI from '@/components/home/GRI';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import LatestNews from '@/components/home/LatestNews';
import SearchBar from '@/components/home/SearchBar';
import Header from '@/components/shared/Header';

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
        <AMR />
        {/* Why Us */}
        <GRI />
        {/* Latest News */}
        <LatestNews />
        {/* Featured Products */}
        <FeaturedProducts />
        {/* Search Bar */}
        <SearchBar />
      </main>
    </>
  );
}
