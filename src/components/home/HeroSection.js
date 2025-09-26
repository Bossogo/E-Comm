import Container from '../shared/Container';
import ProductCard from '../Product/ProductCard';

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
    <section className="relative w-full mb-16 sm:mb-24 lg:mb-32">
      <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
        <img
          src="/images/Promotion Image.png"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <Container>
          <div className="flex flex-col justify-center h-full py-8">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
