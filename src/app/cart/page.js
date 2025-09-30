'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Minus, Plus, X } from 'lucide-react';
import CheckoutModal from '@/components/CheckoutModal';
import Header from '@/components/shared/Header';

export default function CartPage() {
  const { cartItems, addToCart, removeFromCart, cartTotal } = useCart();

  const shippingFee = 20;

  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-contain border rounded"
                    />
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-gray-500">${item.price.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <button
                        onClick={() =>
                          addToCart({ ...item }, item.quantity > 1 ? -1 : 0)
                        }
                        className="px-3 py-2 hover:bg-gray-100"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-4 text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => addToCart({ ...item }, 1)}
                        className="px-3 py-2 hover:bg-gray-100"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <span className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border rounded-lg p-6 bg-gray-50">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping fee</span>
              <span>${shippingFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Coupon</span>
              <span>No</span>
            </div>
          </div>

          <div className="border-t mt-4 pt-4 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${(cartTotal + shippingFee).toFixed(2)}</span>
          </div>

          <button
            onClick={() => setShowCheckout(true)}
            className="w-full mt-6 bg-sky-600 text-white py-3 rounded-lg hover:bg-sky-700"
          >
            Check out
          </button>

          <CheckoutModal
            isOpen={showCheckout}
            onClose={() => setShowCheckout(false)}
          />
        </div>
      </div>
    </>
  );
}
