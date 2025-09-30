'use client';

import { useState } from 'react';

export default function CheckoutModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-center">
          Make Payment
        </h2>

        <div className="flex justify-center gap-3 mb-6">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium 
                ${
                  step >= num
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                }
              `}
            >
              {num}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input className="border p-2 rounded" placeholder="First Name" />
              <input className="border p-2 rounded" placeholder="Last Name" />
              <input
                className="border p-2 rounded col-span-2"
                placeholder="Email Address"
              />
              <input
                className="border p-2 rounded col-span-2"
                placeholder="Delivery Address"
              />
              <input
                className="border p-2 rounded col-span-2"
                placeholder="Mobile Phone"
              />
            </div>

            <p className="font-medium mb-2">Select Method of Payment</p>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" defaultChecked /> Credit Card
                / Debit
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" /> PayPal
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" /> Bank Transfer
              </label>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex justify-center">
              <img
                src="/images/CreditCard.png"
                alt="Card Preview"
                className="w-full max-w-[280px] rounded-lg shadow-md"
              />
            </div>

            <div className="space-y-4">
              <input
                className="border p-2 rounded w-full"
                placeholder="Card Number"
              />
              <div className="grid grid-cols-2 gap-4">
                <input className="border p-2 rounded" placeholder="MM/YY" />
                <input className="border p-2 rounded" placeholder="CVC" />
              </div>
              <input
                className="border p-2 rounded w-full"
                placeholder="Name on Card"
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full text-3xl mb-4">
              ✓
            </div>
            <h3 className="text-xl font-semibold">Success</h3>
            <p className="text-gray-600">Your payment has been completed.</p>
          </div>
        )}

        <div className="mt-6 flex justify-between">
          {step > 1 && step < 3 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 border rounded"
            >
              Back
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              {step === 2 ? 'Confirm' : 'Go to Payment'}
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Complete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
