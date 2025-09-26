// src/app/product/[productId]/page.js
'use client';
import { products } from '@/app/products/Products';

export default function ProductPage({ params }) {
  const { productId } = params; // dynamic route param
  const product = products.find((p) => p.id === productId);

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-64 h-64 object-cover mb-4"
      />
      <p className="text-xl font-semibold mb-2">{product.price}</p>
      {product.oldPrice && (
        <p className="line-through text-gray-400 mb-2">{product.oldPrice}</p>
      )}
      {product.discount && (
        <p className="text-red-500 font-semibold mb-2">
          {product.discount}% Off
        </p>
      )}
      {product.rating && <p className="text-yellow-500">⭐ {product.rating}</p>}
    </div>
  );
}
