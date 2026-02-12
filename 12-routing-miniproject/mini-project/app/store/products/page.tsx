// 
// STORE PRODUCTS PAGE - Demonstrating ONE LEVEL UP (..) Intercepting Routes
// File: app/store/products/page.tsx
// 
// This page will be intercepted by: app/@modal(..)/store/products/[id]/page.tsx
// The (..) pattern intercepts from one level up
//

import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$149.99",
    emoji: "🎧",
    description: "Premium sound quality",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$299.99",
    emoji: "⌚",
    description: "Stay connected",
  },
  {
    id: 3,
    name: "Tablet",
    price: "$599.99",
    emoji: "📱",
    description: "Large screen display",
  },
  {
    id: 4,
    name: "Laptop",
    price: "$1299.99",
    emoji: "💻",
    description: "Powerful performance",
  },
];

export default function StoreProductsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Store Products
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Click on any product to view details in a modal (ONE LEVEL UP intercepting route)
        </p>
      </div>

      {/* Information Box */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-12">
        <h3 className="font-semibold text-gray-900 mb-2">📁 ONE LEVEL UP Intercepting Route (..)</h3>
        <p className="text-sm text-gray-600 mb-3">
          Folder structure:
        </p>
        <div className="bg-white px-3 py-2 rounded text-xs font-mono text-gray-700 mb-3">
          <div>app/store/products/page.tsx ← You are here</div>
          <div>app/store/products/[id]/page.tsx ← Full page</div>
          <div className="text-purple-600">app/@modal(..)/store/products/[id]/page.tsx ← Modal (intercepts from one level up)</div>
        </div>
        <p className="text-sm text-gray-600">
          When you click a product, (..) intercepting route intercepts the navigation and shows a modal!
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/store/products/${product.id}`}
            className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer border border-gray-200"
          >
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 h-40 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
              {product.emoji}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-2xl font-bold text-purple-600">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Comparison */}
      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Intercepting Route Levels</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Same Level */}
          <div className="bg-white rounded p-6 border-l-4 border-blue-500">
            <p className="font-mono text-sm text-blue-600 font-bold mb-2">(.)</p>
            <p className="font-semibold text-gray-900 mb-2">Same Level</p>
            <p className="text-sm text-gray-600 mb-3">
              Intercepts routes at the same level
            </p>
            <p className="text-xs text-gray-500">Example: Gallery photos</p>
          </div>

          {/* One Level Up */}
          <div className="bg-white rounded p-6 border-l-4 border-purple-500">
            <p className="font-mono text-sm text-purple-600 font-bold mb-2">(..)</p>
            <p className="font-semibold text-gray-900 mb-2">One Level Up</p>
            <p className="text-sm text-gray-600 mb-3">
              Intercepts from one level up (this page)
            </p>
            <p className="text-xs text-gray-500">Current example: Store products</p>
          </div>

          {/* Two Levels Up */}
          <div className="bg-white rounded p-6 border-l-4 border-green-500">
            <p className="font-mono text-sm text-green-600 font-bold mb-2">(..)(.)</p>
            <p className="font-semibold text-gray-900 mb-2">Two Levels Up</p>
            <p className="text-sm text-gray-600 mb-3">
              Intercepts from two levels up
            </p>
            <p className="text-xs text-gray-500">See dashboard example</p>
          </div>
        </div>
      </div>
    </div>
  );
}
