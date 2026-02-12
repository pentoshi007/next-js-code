// 
// EXAMPLE 1: SIMPLE SLUG / DYNAMIC ROUTE
// File: app/products/[id]/page.tsx
// 
// What this does:
// - [id] is a dynamic segment that matches a single path parameter
// - This file handles routes like:
//   /products/1          -> id = "1"
//   /products/123        -> id = "123"
//   /products/my-product -> id = "my-product"
// 
// How it works:
// - [id] is a folder name with square brackets
// - Each value in the URL becomes accessible via the `params` object
// - In Next.js 15+, params is a Promise that must be awaited
//

import React from "react";

// 
// Component receives params as a Promise
// params.id contains the dynamic segment value from the URL
// 
const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  // Await the params Promise to get the actual values
  const { id } = await params;

  // Example product data (in real app, you'd fetch from database)
  const products: Record<string, { name: string; price: string; description: string }> = {
    "1": { name: "Laptop", price: "$999", description: "High-performance laptop for developers" },
    "2": { name: "Keyboard", price: "$129", description: "Mechanical keyboard with RGB lighting" },
    "3": { name: "Monitor", price: "$349", description: "4K Ultra HD curved monitor" },
  };

  const product = products[id];

  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Product Details
        </h1>
        <p className="text-gray-600">
          Example of a simple slug/dynamic route - <code className="bg-gray-100 px-2 py-1 rounded">/products/[id]</code>
        </p>
      </div>

      {/* Product Information */}
      {product ? (
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Product Image Placeholder */}
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg h-96 flex items-center justify-center">
            <span className="text-white text-6xl font-bold">📦</span>
          </div>

          {/* Product Details */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h2>
            
            {/* URL Parameter Display */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Dynamic Parameter Value:</strong>
              </p>
              <p className="text-lg font-mono text-blue-600">id = "{id}"</p>
            </div>

            <p className="text-2xl font-bold text-blue-600 mb-4">{product.price}</p>
            <p className="text-gray-600 text-lg mb-8">{product.description}</p>

            {/* How It Works Section */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">How This Route Works:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">1.</span>
                  <span>URL: <code className="bg-white px-2 py-1 rounded border">/products/{id}</code></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">2.</span>
                  <span>The <code className="bg-white px-2 py-1 rounded border">[id]</code> folder matches this segment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">3.</span>
                  <span>Params object receives: <code className="bg-white px-2 py-1 rounded border">{'{ id: "' + id + '" }'}</code></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">4.</span>
                  <span>You can access it via <code className="bg-white px-2 py-1 rounded border">params.id</code></span>
                </li>
              </ul>
            </div>

            {/* Try Other Examples */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Try Other Product IDs:</h3>
              <div className="flex flex-wrap gap-3">
                {["1", "2", "3"].map((num) => (
                  <a
                    key={num}
                    href={`/products/${num}`}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Product {num}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-red-50 border border-red-200 rounded-lg p-8">
          <p className="text-red-700 text-lg">
            Product with ID "<strong>{id}</strong>" not found. Try: /products/1, /products/2, or /products/3
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
