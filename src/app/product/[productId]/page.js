'use client';
import { useState, useEffect } from 'react';
import { products } from '@/app/data/products';
import ProductCard from '@/components/shared/ProductCard';
import { Minus, Plus, ShoppingCart, Heart, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Header from '@/components/shared/Header';
import Image from 'next/image';

export default function ProductPage({ params }) {
  const { productId } = params;
  let product = products.find((p) => String(p.id) === String(productId));
  const { addToCart } = useCart();

  if (!product) {
    const withoutP = productId.startsWith('p') ? productId.slice(1) : null;
    const withP = !productId.startsWith('p') ? `p${productId}` : null;
    product =
      (withoutP && products.find((p) => String(p.id) === withoutP)) ||
      (withP && products.find((p) => String(p.id) === withP));
  }
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] ?? 'default'
  );
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product?.image ?? '');
  const [sidebarIndex, setSidebarIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSidebarIndex((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const sidebarProduct = products[sidebarIndex];

  if (!product) {
    return (
      <>
        <Header />
        <div className="p-8">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <p className="text-gray-600">No product matched id: {productId}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="p-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div>
          <Image
            width={375}
            height={271.68}
            src={mainImage}
            alt={product.title}
            className="w-full h-96 object-contain border rounded-lg mb-4"
          />

          <div className="flex gap-3">
            {[product.image, ...(product.gallery || [])].map((img, i) => (
              <Image
                key={i}
                width={85.79}
                height={86.25}
                src={img}
                alt={`${product.title} preview ${i}`}
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 object-contain border rounded cursor-pointer transition 
                  ${
                    mainImage === img
                      ? 'border-sky-500'
                      : 'border-gray-300 hover:border-sky-400'
                  }`}
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-500"><Star /> {product.rating || '0'}</span>
            <span className="text-gray-500 text-sm">
              {product.reviews || 0} reviews
            </span>
            <a href="#" className="text-sky-600 text-sm underline">
              Submit a review
            </a>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-bold text-sky-600">
              ${product.price}
            </span>
            {product.oldPrice && (
              <span className="line-through text-gray-400 text-lg">
                ${product.oldPrice}
              </span>
            )}
            {product.discount && (
              <span className="text-red-500 font-semibold">
                {product.discount}% Off
              </span>
            )}
          </div>

          <div className="text-sm text-gray-700 mb-4 space-y-1">
            <p>
              <strong>Availability:</strong>{' '}
              {product.inStock ? 'In stock' : 'Out of stock'}
            </p>
            <p>
              <strong>Category:</strong> {product.category || 'Accessories'}
            </p>
            <p>
              <strong>Shipping:</strong> Free shipping
            </p>
          </div>

          {product.colors && (
            <div className="mb-4">
              <h4 className="font-medium mb-2">Select Color:</h4>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color
                        ? 'border-sky-600'
                        : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mb-4">
            <h4 className="font-medium mb-2">Size:</h4>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="border rounded px-3 py-1"
            >
              {['XS', 'S', 'M', 'L', 'XL'].map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 hover:bg-gray-100"
              >
                <Minus size={16} />
              </button>
              <span className="px-4 text-sm font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 hover:bg-gray-100"
              >
                <Plus size={16} />
              </button>
            </div>

            <button
              className="flex items-center gap-2 bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-sky-700 transition"
              onClick={() =>
                addToCart(
                  {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                  },
                  quantity
                )
              }
            >
              <ShoppingCart size={18} />
              <span>Add to Cart</span>
            </button>

            <button className="p-2 border rounded-lg hover:bg-gray-100 transition">
              <Heart size={20} className="text-gray-500 hover:text-red-500" />
            </button>
          </div>

          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Share on Facebook
            </button>
            <button className="bg-sky-400 text-white px-4 py-2 rounded">
              Share on Twitter
            </button>
          </div>
        </div>

        <div className="w-full lg:w-72">
          <h3 className="font-semibold text-lg mb-3">You may like</h3>
          <ProductCard product={sidebarProduct} />
        </div>
      </div>

      <div className="px-8 max-w-7xl mx-auto">
        <div className="mt-10">
          <div className="border-b flex gap-6 mb-4">
            <button className="pb-2 border-b-2 border-sky-600 font-medium">
              Product Information
            </button>
            <button className="pb-2 text-gray-600">Reviews</button>
            <button className="pb-2 text-gray-600">Another Tab</button>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {product.description ||
              'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
          </p>
        </div>

        <div className="mt-16 mb-16">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>

          <div className="flex gap-4 overflow-x-auto md:hidden pb-4">
            {products.slice(0, 8).map((p) => (
              <div key={p.id} className="min-w-[70%] sm:min-w-[45%]">
                <ProductCard product={p} />
              </div>
            ))}
          </div>

          <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
