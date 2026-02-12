// Intercepting Routes Guide - Complete Documentation

import Link from "next/link";

export default function InterceptingRoutesGuide() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Intercepting Routes
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Learn how to intercept navigation and show modals or alternative content
        </p>
      </div>

      {/* What are Intercepting Routes */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-12 mb-20 border border-blue-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What are Intercepting Routes?</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Definition</h3>
            <p className="text-gray-700 leading-relaxed">
              Intercepting routes allow you to intercept navigation to a certain route and optionally show alternative
              content. This is useful for scenarios like showing a modal overlay for a photo gallery, search results, or
              quick-view popups without leaving the current page context.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Show modals with URL updates</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Maintain context while navigating</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Browser back button works naturally</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Shareable modal URLs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Syntax */}
      <div className="bg-gray-50 rounded-lg p-12 mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Intercepting Route Syntax</h2>

        <div className="space-y-6">
          {/* Convention */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-3 font-mono text-lg">(.)</h3>
            <p className="text-gray-600 mb-3">Intercept siblings - matches the same level</p>
            <div className="bg-gray-100 p-4 rounded font-mono text-sm text-gray-700 mb-3">
              <div>app/</div>
              <div className="ml-4">
                <div>gallery/[id]/page.tsx</div>
                <div><span className="text-blue-600">(@modal)(.)gallery/[id]</span>/page.tsx ← Intercepts above</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">Example: <code className="bg-white px-2 py-1 rounded border">/gallery/1</code> → shows modal</p>
          </div>

          {/* (..) Convention */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-3 font-mono text-lg">(..)</h3>
            <p className="text-gray-600 mb-3">Intercept parent segments and siblings</p>
            <div className="bg-gray-100 p-4 rounded font-mono text-sm text-gray-700 mb-3">
              <div>app/</div>
              <div className="ml-4">
                <div>users/[id]/page.tsx</div>
                <div>(<span className="text-blue-600">@modal</span>)(..)users/[id]/page.tsx ← Can intercept</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">One level up from current position</p>
          </div>

          {/* (...) Convention */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-3 font-mono text-lg">(...)</h3>
            <p className="text-gray-600 mb-3">Intercept from root level</p>
            <div className="bg-gray-100 p-4 rounded font-mono text-sm text-gray-700 mb-3">
              <div>app/</div>
              <div className="ml-4">
                <div>(...)/photos/[id]/page.tsx ← Intercepts from root</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">Access any route from the root</p>
          </div>

          {/* (..)(../) Convention */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-3 font-mono text-lg">(..)(../)</h3>
            <p className="text-gray-600 mb-3">Multiple levels up</p>
            <div className="bg-gray-100 p-4 rounded font-mono text-sm text-gray-700 mb-3">
              <div>app/</div>
              <div className="ml-4">
                <div>users/[id]/posts/[postId]/page.tsx</div>
                <div className="ml-4">
                  <div>(<span className="text-blue-600">@modal</span>)(..)(../posts/[postId])/page.tsx</div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600">Go multiple levels up</p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-12 mb-20 border border-green-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">How It Works - Step by Step</h2>

        <div className="space-y-4">
          {/* Step 1 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white font-bold">
                1
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">User clicks a gallery photo</h3>
              <p className="text-gray-600">
                User clicks on a photo link pointing to <code className="bg-white px-2 py-1 rounded border">/gallery/1</code>
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white font-bold">
                2
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Intercepting route activates</h3>
              <p className="text-gray-600">
                The <code className="bg-white px-2 py-1 rounded border">(@modal)(.)gallery/[id]</code> route intercepts the navigation
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white font-bold">
                3
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Modal renders</h3>
              <p className="text-gray-600">
                Instead of navigating to the full page, a modal overlay appears with the photo
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white font-bold">
                4
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">URL updates</h3>
              <p className="text-gray-600">
                The URL in the address bar changes to <code className="bg-white px-2 py-1 rounded border">/gallery/1</code>
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white font-bold">
                5
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Close modal or go back</h3>
              <p className="text-gray-600">
                User closes the modal or clicks browser back button, URL reverts to <code className="bg-white px-2 py-1 rounded border">/gallery</code>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation */}
      <div className="bg-gray-50 rounded-lg p-12 mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Implementation Guide</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Folder Structure */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Folder Structure</h3>
            <div className="bg-white rounded p-6 font-mono text-sm text-gray-600 border border-gray-200">
              <div>app/</div>
              <div className="ml-4">
                <div>gallery/</div>
                <div className="ml-4">
                  <div>page.tsx ← Main gallery</div>
                  <div>[id]/</div>
                  <div className="ml-4">
                    <div>page.tsx ← Full page view</div>
                  </div>
                </div>
                <div><span className="text-blue-600">@modal/</span> ← Parallel route slot</div>
                <div className="ml-4">
                  <div><span className="text-blue-600">(.)gallery/[id]/</span></div>
                  <div className="ml-4">
                    <div>page.tsx ← Modal component</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Key Requirements</h3>
            <ul className="space-y-3 text-gray-700 bg-white rounded p-6 border border-gray-200">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">1.</span>
                <span><strong>Parallel Routes</strong> - Use @modal slot</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">2.</span>
                <span><strong>Intercepting Pattern</strong> - (.)path/[id]</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">3.</span>
                <span><strong>Root Layout</strong> - Must accept modal prop</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">4.</span>
                <span><strong>Client Component</strong> - "use client" for interactivity</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">5.</span>
                <span><strong>Full Page Fallback</strong> - Direct URL access</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">🖼️ Photo Gallery</h3>
          <p className="text-gray-600 text-sm">
            Click photos to view in a lightbox modal instead of navigating to a new page
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">🔍 Search Results</h3>
          <p className="text-gray-600 text-sm">
            Show search details in a modal while keeping the search page visible in the background
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">🛍️ Product Preview</h3>
          <p className="text-gray-600 text-sm">
            Quick-view modal for products without leaving the shop listing page
          </p>
        </div>
      </div>

      {/* Live Examples Section */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-12 border border-orange-200 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Try All Three Intercepting Route Patterns
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Same Level */}
          <div className="bg-white rounded-lg p-8 border-l-4 border-blue-500 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                (.)
              </div>
              <h3 className="text-xl font-bold text-gray-900">Same Level</h3>
            </div>

            <p className="text-gray-600 mb-4">
              Photo gallery with same-level intercepting routes
            </p>

            <div className="bg-blue-50 p-3 rounded mb-6 text-xs text-gray-600 font-mono">
              <p>Pattern: (.)</p>
              <p>File: (@modal)(.)/gallery/[id]</p>
            </div>

            <Link
              href="/gallery"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center"
            >
              View Gallery →
            </Link>
          </div>

          {/* One Level Up */}
          <div className="bg-white rounded-lg p-8 border-l-4 border-purple-500 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                (..)
              </div>
              <h3 className="text-xl font-bold text-gray-900">One Level Up</h3>
            </div>

            <p className="text-gray-600 mb-4">
              Store products with one-level-up intercepting routes
            </p>

            <div className="bg-purple-50 p-3 rounded mb-6 text-xs text-gray-600 font-mono">
              <p>Pattern: (..)</p>
              <p>File: (@modal)(..)/store/products/[id]</p>
            </div>

            <Link
              href="/store/products"
              className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold text-center"
            >
              View Products →
            </Link>
          </div>

          {/* Two Levels Up */}
          <div className="bg-white rounded-lg p-8 border-l-4 border-green-500 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                (...)
              </div>
              <h3 className="text-xl font-bold text-gray-900">Two Levels Up</h3>
            </div>

            <p className="text-gray-600 mb-4">
              Team members with two-level-up intercepting routes
            </p>

            <div className="bg-green-50 p-3 rounded mb-6 text-xs text-gray-600 font-mono">
              <p>Pattern: (...)</p>
              <p>File: (@modal)(...)/team/members/[id]</p>
            </div>

            <Link
              href="/dashboard/team/members"
              className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-center"
            >
              View Team →
            </Link>
          </div>
        </div>
      </div>

      {/* How Each Pattern Works */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Pattern (.) */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Pattern: (.)</h3>
          <div className="bg-white rounded p-4 mb-4 font-mono text-xs text-gray-600">
            <div>app/</div>
            <div className="ml-4">
              <div>gallery/[id]/page.tsx</div>
              <div className="text-blue-600">@modal/(.)gallery/[id]/page.tsx</div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Same directory level - intercepts sibling routes
          </p>
          <div className="bg-blue-100 rounded p-3 text-sm text-blue-900">
            ✓ Gallery → Photo modal
          </div>
        </div>

        {/* Pattern (..) */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Pattern: (..)</h3>
          <div className="bg-white rounded p-4 mb-4 font-mono text-xs text-gray-600">
            <div>app/</div>
            <div className="ml-4">
              <div>store/products/[id]/page.tsx</div>
              <div className="text-purple-600">@modal(..)/store/products/[id]/page.tsx</div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            One level up - from a nested route
          </p>
          <div className="bg-purple-100 rounded p-3 text-sm text-purple-900">
            ✓ Products → Product modal
          </div>
        </div>

        {/* Pattern (...) */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Pattern: (...)</h3>
          <div className="bg-white rounded p-4 mb-4 font-mono text-xs text-gray-600">
            <div>app/</div>
            <div className="ml-4">
              <div>dashboard/team/members/[id]/page.tsx</div>
              <div className="text-green-600">@modal(...)/team/members/[id]/page.tsx</div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Two levels up - from deeply nested routes
          </p>
          <div className="bg-green-100 rounded p-3 text-sm text-green-900">
            ✓ Team → Member modal
          </div>
        </div>
      </div>
    </div>
  );
}
