import BestSellers from '@/components/home/BestSellers';
import HeroSection from '@/components/home/HeroSection';
import AMR from '@/components/home/AMR';
import GRI from '@/components/home/GRI';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import LatestNews from '@/components/home/LatestNews';
import SearchBar from '@/components/home/SearchBar';
import Header from '@/components/shared/Header';

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
