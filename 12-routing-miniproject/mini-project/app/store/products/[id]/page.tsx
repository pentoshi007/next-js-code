// 
// FULL PAGE VIEW - Store Product Details
// File: app/store/products/[id]/page.tsx
// 
// This is the full page view when:
// 1. Direct URL access
// 2. Page refresh while modal is open
// 3. Direct link sharing
//

import Link from "next/link";

const products: Record<
  number,
  {
    name: string;
    emoji: string;
    price: string;
    description: string;
    details: string;
    specs: string[];
  }
> = {
  1: {
    name: "Wireless Headphones",
    emoji: "🎧",
    price: "$149.99",
    description: "Premium sound quality",
    details:
      "Experience crystal-clear audio with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort.",
    specs: ["30-hour battery", "ANC technology", "Bluetooth 5.0", "Foldable design"],
  },
  2: {
    name: "Smart Watch",
    emoji: "⌚",
    price: "$299.99",
    description: "Stay connected",
    details:
      "Keep track of your fitness goals and stay connected with our advanced smart watch. Monitor heart rate, track workouts, and receive notifications.",
    specs: ["Heart rate monitor", "GPS tracking", "7-day battery", "Water resistant"],
  },
  3: {
    name: "Tablet",
    emoji: "📱",
    price: "$599.99",
    description: "Large screen display",
    details:
      "Perfect for entertainment and productivity. Large 12-inch display, powerful processor, and all-day battery life.",
    specs: ["12-inch display", "128GB storage", "Stylus included", "Long battery"],
  },
  4: {
    name: "Laptop",
    emoji: "💻",
    price: "$1299.99",
    description: "Powerful performance",
    details:
      "Built for professionals. High-performance processor, dedicated graphics, and premium build quality.",
    specs: ["16GB RAM", "512GB SSD", "RTX GPU", "17-inch display"],
  },
};

export default function StoreProductDetailPage({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id);
  const product = products[productId];

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="bg-red-50 border border-red-200 rounded-lg p-8">
          <h1 className="text-2xl font-bold text-red-700 mb-2">Product Not Found</h1>
          <p className="text-red-600 mb-6">The product you're looking for doesn't exist.</p>
          <Link href="/store/products" className="text-red-600 hover:text-red-700 font-semibold">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <Link
        href="/store/products"
        className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold mb-8"
      >
        <span>←</span> Back to Products
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-br from-purple-100 to-purple-200 h-96 flex items-center justify-center text-9xl">
          {product.emoji}
        </div>

        <div className="p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-3xl font-bold text-purple-600 mb-6">{product.price}</p>

          <p className="text-lg text-gray-600 mb-8">{product.details}</p>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Specifications</h2>
            <ul className="grid grid-cols-2 gap-4">
              {product.specs.map((spec, idx) => (
                <li key={idx} className="flex gap-3 text-gray-600">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className="w-full mt-8 bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
