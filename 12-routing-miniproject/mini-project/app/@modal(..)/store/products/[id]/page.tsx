// 
// ONE LEVEL UP INTERCEPTING ROUTE - MODAL
// File: app/@modal(..)/store/products/[id]/page.tsx
// 
// SYNTAX EXPLANATION:
// ==================
// @modal - Parallel route slot for the modal
// (..) - Intercept ONE level up from this file's location
// 
// File hierarchy:
// app/
//   store/
//     products/
//       [id]/page.tsx ← Where we're intercepting
//   @modal/
//     (..)/
//       store/products/[id]/page.tsx ← This file intercepts from one level up
// 
// When you click a product from /store/products page:
// - Navigation goes to /store/products/[id]
// - This (..) route intercepts it because it's one level up from the target
// - Shows modal instead of full page
// - URL: /store/products/[id]
//

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const products: Record<
  number,
  {
    name: string;
    emoji: string;
    price: string;
    description: string;
  }
> = {
  1: {
    name: "Wireless Headphones",
    emoji: "🎧",
    price: "$149.99",
    description: "Premium sound quality with ANC",
  },
  2: {
    name: "Smart Watch",
    emoji: "⌚",
    price: "$299.99",
    description: "Stay connected with style",
  },
  3: {
    name: "Tablet",
    emoji: "📱",
    price: "$599.99",
    description: "Large 12-inch display",
  },
  4: {
    name: "Laptop",
    emoji: "💻",
    price: "$1299.99",
    description: "Powerful performance",
  },
};

export default function StoreProductModal({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id);
  const product = products[productId];
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  const handleClose = () => {
    router.back();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      handleClose();
    }
  };

  if (!product) {
    return null;
  }

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 rounded-lg backdrop:bg-black backdrop:bg-opacity-50 w-full max-w-md mx-auto"
    >
      <div className="bg-white rounded-lg shadow-2xl max-h-screen overflow-auto">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-gray-200 bg-white">
          <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
          <button
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-8">
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 h-64 flex items-center justify-center text-7xl rounded-lg mb-6">
            {product.emoji}
          </div>

          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-3xl font-bold text-purple-600 mb-6">{product.price}</p>

          <div className="flex gap-3">
            <button
              onClick={handleClose}
              className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
            >
              Close
            </button>
            <button className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="bg-purple-50 border-t border-purple-200 p-4">
          <p className="text-xs text-purple-700">
            💜 <strong>Intercepting Route:</strong> One level up (..) - Shows modal when clicked from products list
          </p>
        </div>
      </div>
    </dialog>
  );
}
