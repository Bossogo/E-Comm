import Container from '../shared/Container';
import ProductCard from '../Product/ProductCard';

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      image: '/images/Vector.png',
      title: 'Nike Air Max 270',
      price: '$120',
      oldPrice: '$150',
      rating: 4.5,
    },
    {
      id: 2,
      image: '/images/Vector.png',
      title: 'Adidas Ultraboost',
      price: '$180',
      oldPrice: '$220',
      rating: 5,
    },
    {
      id: 3,
      image: '/images/Vector.png',
      title: 'Puma RS-X',
      price: '$95',
      oldPrice: '$120',
      rating: 4,
    },
  ];

  return (
    <section className="py-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Featured Products
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} layout="row" />
          ))}
        </div>
      </Container>
    </section>
  );
}
