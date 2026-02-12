// Routing Guide - Index page that explains all slug patterns with examples

import Link from "next/link";

export default function RoutingGuide() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Next.js Dynamic Routing Guide
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Learn about different slug patterns and dynamic routing in Next.js with interactive examples
        </p>
      </div>

      {/* Main Grid - 3 Column Layout */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {/* Card 1: Simple Slug */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">Simple Slug</h3>
            <p className="text-blue-100">[id]</p>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-4">
              Single dynamic segment that captures one URL parameter.
            </p>
            <div className="bg-gray-50 rounded p-3 mb-4">
              <p className="text-sm font-mono text-gray-700">
                <span className="text-gray-500">Pattern:</span> <code>/products/[id]</code>
              </p>
              <p className="text-sm font-mono text-gray-700 mt-2">
                <span className="text-gray-500">Example:</span> <code>/products/123</code>
              </p>
            </div>
            <div className="space-y-2 mb-6">
              <p className="text-sm font-semibold text-gray-900">Use Cases:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Product pages</li>
                <li>✓ User profiles</li>
                <li>✓ Single resource pages</li>
              </ul>
            </div>
            <Link
              href="/products/1"
              className="w-full inline-block text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            >
              View Example →
            </Link>
          </div>
        </div>

        {/* Card 2: Catch-All Slug */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
          <div className="bg-gradient-to-br from-green-400 to-green-600 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">Catch-All Slug</h3>
            <p className="text-green-100">[...slug]</p>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-4">
              Captures multiple segments (required: at least 1).
            </p>
            <div className="bg-gray-50 rounded p-3 mb-4">
              <p className="text-sm font-mono text-gray-700">
                <span className="text-gray-500">Pattern:</span> <code>/blog/[...slug]</code>
              </p>
              <p className="text-sm font-mono text-gray-700 mt-2">
                <span className="text-gray-500">Example:</span> <code>/blog/2024/jan/post</code>
              </p>
            </div>
            <div className="space-y-2 mb-6">
              <p className="text-sm font-semibold text-gray-900">Use Cases:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Blog with dates</li>
                <li>✓ Nested categories</li>
                <li>✓ Hierarchical content</li>
              </ul>
            </div>
            <Link
              href="/blog/getting-started"
              className="w-full inline-block text-center bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors font-semibold"
            >
              View Example →
            </Link>
          </div>
        </div>

        {/* Card 3: Catch-All Optional Slug */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
          <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">Optional Catch-All</h3>
            <p className="text-purple-100">[[...slug]]</p>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-4">
              Captures multiple segments (optional: 0 or more).
            </p>
            <div className="bg-gray-50 rounded p-3 mb-4">
              <p className="text-sm font-mono text-gray-700">
                <span className="text-gray-500">Pattern:</span> <code>/docs/[[...slug]]</code>
              </p>
              <p className="text-sm font-mono text-gray-700 mt-2">
                <span className="text-gray-500">Example:</span> <code>/docs/api/auth</code>
              </p>
            </div>
            <div className="space-y-2 mb-6">
              <p className="text-sm font-semibold text-gray-900">Use Cases:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Documentation sites</li>
                <li>✓ Root pages with nested</li>
                <li>✓ Breadcrumb navigation</li>
              </ul>
            </div>
            <Link
              href="/docs"
              className="w-full inline-block text-center bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-colors font-semibold"
            >
              View Example →
            </Link>
          </div>
        </div>
      </div>

      {/* Detailed Comparison Section */}
      <div className="bg-gray-50 rounded-lg p-12 mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Detailed Comparison
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="px-4 py-4 text-left font-semibold text-gray-900">Feature</th>
                <th className="px-4 py-4 text-left font-semibold text-gray-900">[id]</th>
                <th className="px-4 py-4 text-left font-semibold text-gray-900">[...slug]</th>
                <th className="px-4 py-4 text-left font-semibold text-gray-900">[[...slug]]</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-4 font-semibold text-gray-900">Segments Matched</td>
                <td className="px-4 py-4 text-gray-600">Exactly 1</td>
                <td className="px-4 py-4 text-gray-600">1 or more</td>
                <td className="px-4 py-4 text-gray-600">0 or more</td>
              </tr>
              <tr>
                <td className="px-4 py-4 font-semibold text-gray-900">Params Type</td>
                <td className="px-4 py-4 font-mono text-blue-600">string</td>
                <td className="px-4 py-4 font-mono text-blue-600">string[]</td>
                <td className="px-4 py-4 font-mono text-blue-600">string[] | undefined</td>
              </tr>
              <tr>
                <td className="px-4 py-4 font-semibold text-gray-900">Bracket Type</td>
                <td className="px-4 py-4 font-mono text-gray-700">[id]</td>
                <td className="px-4 py-4 font-mono text-gray-700">[...slug]</td>
                <td className="px-4 py-4 font-mono text-gray-700">[[...slug]]</td>
              </tr>
              <tr>
                <td className="px-4 py-4 font-semibold text-gray-900">Required</td>
                <td className="px-4 py-4">
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                    Yes
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                    Yes
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    No
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 font-semibold text-gray-900">Example URLs</td>
                <td className="px-4 py-4 text-gray-600 text-sm">
                  <code>/products/123</code>
                </td>
                <td className="px-4 py-4 text-gray-600 text-sm">
                  <code>/blog/post</code><br />
                  <code>/blog/2024/jan/post</code>
                </td>
                <td className="px-4 py-4 text-gray-600 text-sm">
                  <code>/docs</code><br />
                  <code>/docs/api/auth</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Concepts Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">💡 Key Concepts</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">→</span>
              <span>Square brackets <code className="bg-white px-2 py-1 rounded">[param]</code> create dynamic segments</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">→</span>
              <span>Three dots <code className="bg-white px-2 py-1 rounded">...</code> indicate catch-all routes</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">→</span>
              <span>Double brackets <code className="bg-white px-2 py-1 rounded">[[...]]</code> make segments optional</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">→</span>
              <span>Params is always a Promise in Next.js 15+ (must await)</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">✅ Best Practices</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>Use simple slugs for single identifiers (IDs, usernames)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>Use catch-all for hierarchical content (blogs, docs)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>Always validate params before using them</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">•</span>
              <span>Provide meaningful 404 pages for invalid routes</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Interactive Examples Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Interactive Examples
        </h2>

        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Click the buttons below to explore real working examples of each routing pattern
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Example 1 */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">📦 Simple Slug Example</h3>
            <p className="text-gray-600 text-sm mb-6">
              Visit a product page with a simple ID parameter. Try different product IDs.
            </p>
            <div className="space-y-2">
              <Link
                href="/products/1"
                className="block text-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
              >
                Product 1
              </Link>
              <Link
                href="/products/2"
                className="block text-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
              >
                Product 2
              </Link>
              <Link
                href="/products/my-product"
                className="block text-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
              >
                My Product
              </Link>
            </div>
          </div>

          {/* Example 2 */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">📝 Catch-All Example</h3>
            <p className="text-gray-600 text-sm mb-6">
              Visit blog posts with different URL depths and date hierarchies.
            </p>
            <div className="space-y-2">
              <Link
                href="/blog/getting-started"
                className="block text-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
              >
                Getting Started
              </Link>
              <Link
                href="/blog/2024/january/new-year-post"
                className="block text-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
              >
                Date-Based Post
              </Link>
              <Link
                href="/blog/tutorials/tailwind-css"
                className="block text-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
              >
                Category Post
              </Link>
            </div>
          </div>

          {/* Example 3 */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">📚 Optional Catch-All</h3>
            <p className="text-gray-600 text-sm mb-6">
              Visit docs home or nested documentation pages. Try with and without segments.
            </p>
            <div className="space-y-2">
              <Link
                href="/docs"
                className="block text-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm"
              >
                Docs Home
              </Link>
              <Link
                href="/docs/api"
                className="block text-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm"
              >
                API Reference
              </Link>
              <Link
                href="/docs/api/authentication/jwt"
                className="block text-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm"
              >
                Nested Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
