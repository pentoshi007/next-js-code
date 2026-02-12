// Test All Intercepting Routes - Interactive Testing Guide

import Link from "next/link";

export default function TestInterceptingRoutesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Test Intercepting Routes
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Interactive guide to test all three intercepting route patterns in this project
        </p>
      </div>

      {/* Test Guide Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {/* Test 1: Same Level */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-8 border border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              (.)
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Test 1: Same Level</h2>
          </div>

          <div className="bg-white rounded p-4 mb-6">
            <p className="text-sm font-semibold text-gray-900 mb-2">Pattern:</p>
            <p className="font-mono text-blue-600 text-sm">@modal/(.)gallery/[id]</p>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <p className="font-semibold text-gray-900 mb-2">Steps:</p>
              <ol className="text-sm text-gray-600 space-y-1">
                <li>1. Click the "Go to Gallery" button</li>
                <li>2. You'll see a grid of photos</li>
                <li>3. Click ANY photo</li>
                <li>4. Modal appears with photo</li>
                <li>5. URL changes to /gallery/[id]</li>
                <li>6. Press ESC to close</li>
                <li>7. Returns to /gallery</li>
              </ol>
            </div>

            <div className="bg-blue-50 rounded p-3">
              <p className="text-xs font-semibold text-blue-900 mb-1">What to notice:</p>
              <p className="text-xs text-blue-700">
                ✓ Modal shows without full page navigation
                <br />✓ URL updates
                <br />✓ Browser back works
              </p>
            </div>
          </div>

          <Link
            href="/gallery"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center"
          >
            Go to Gallery →
          </Link>
        </div>

        {/* Test 2: One Level Up */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 border border-purple-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              (..)
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Test 2: One Level Up</h2>
          </div>

          <div className="bg-white rounded p-4 mb-6">
            <p className="text-sm font-semibold text-gray-900 mb-2">Pattern:</p>
            <p className="font-mono text-purple-600 text-sm">@modal(..)/store/products/[id]</p>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <p className="font-semibold text-gray-900 mb-2">Steps:</p>
              <ol className="text-sm text-gray-600 space-y-1">
                <li>1. Click the "Go to Store" button</li>
                <li>2. You'll see a grid of products</li>
                <li>3. Click ANY product card</li>
                <li>4. Modal appears with product</li>
                <li>5. URL changes to /store/products/[id]</li>
                <li>6. Click "Close" or press ESC</li>
                <li>7. Returns to /store/products</li>
              </ol>
            </div>

            <div className="bg-purple-50 rounded p-3">
              <p className="text-xs font-semibold text-purple-900 mb-1">What to notice:</p>
              <p className="text-xs text-purple-700">
                ✓ One level up from route location
                <br />✓ Still uses modal pattern
                <br />✓ Same UX as same-level
              </p>
            </div>
          </div>

          <Link
            href="/store/products"
            className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold text-center"
          >
            Go to Store →
          </Link>
        </div>

        {/* Test 3: Two Levels Up */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 border border-green-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              (...)
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Test 3: Two Levels Up</h2>
          </div>

          <div className="bg-white rounded p-4 mb-6">
            <p className="text-sm font-semibold text-gray-900 mb-2">Pattern:</p>
            <p className="font-mono text-green-600 text-sm">@modal(...)/team/members/[id]</p>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <p className="font-semibold text-gray-900 mb-2">Steps:</p>
              <ol className="text-sm text-gray-600 space-y-1">
                <li>1. Click the "Go to Team" button</li>
                <li>2. You'll see a table of team members</li>
                <li>3. Click "View Profile" on ANY member</li>
                <li>4. Modal appears with member details</li>
                <li>5. URL changes to /dashboard/team/members/[id]</li>
                <li>6. Click "Close" or press ESC</li>
                <li>7. Returns to /dashboard/team/members</li>
              </ol>
            </div>

            <div className="bg-green-50 rounded p-3">
              <p className="text-xs font-semibold text-green-900 mb-1">What to notice:</p>
              <p className="text-xs text-green-700">
                ✓ TWO levels deep in routing
                <br />✓ Still intercepts with modal
                <br />✓ Most complex pattern
              </p>
            </div>
          </div>

          <Link
            href="/dashboard/team/members"
            className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-center"
          >
            Go to Team →
          </Link>
        </div>
      </div>

      {/* Advanced Testing */}
      <div className="bg-gray-50 rounded-lg p-12 mb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Advanced Testing</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Test Direct URLs */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">Test Direct URLs</h3>
            <p className="text-gray-600 text-sm mb-4">
              Visit the modal URLs directly in your browser address bar:
            </p>
            <div className="space-y-3">
              <div>
                <p className="font-mono text-xs bg-gray-100 p-2 rounded mb-1">
                  /gallery/1
                </p>
                <p className="text-xs text-gray-600">
                  Should show FULL PAGE (not modal) because navigated directly
                </p>
              </div>
              <div>
                <p className="font-mono text-xs bg-gray-100 p-2 rounded mb-1">
                  /store/products/2
                </p>
                <p className="text-xs text-gray-600">
                  Should show FULL PAGE (not modal) because navigated directly
                </p>
              </div>
              <div>
                <p className="font-mono text-xs bg-gray-100 p-2 rounded mb-1">
                  /dashboard/team/members/3
                </p>
                <p className="text-xs text-gray-600">
                  Should show FULL PAGE (not modal) because navigated directly
                </p>
              </div>
            </div>
          </div>

          {/* Test Browser Navigation */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">Test Browser Navigation</h3>
            <p className="text-gray-600 text-sm mb-4">
              Test the browser back button and history:
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Open list page</li>
              <li>✓ Click item (modal opens)</li>
              <li>✓ Click browser back</li>
              <li>✓ Should return to list</li>
              <li>✓ Modal should close</li>
              <li>✓ URL should revert</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Points to Understand */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">💡 Key Points</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-2">
              <span>→</span>
              <span>Intercepting routes intercept navigation</span>
            </li>
            <li className="flex gap-2">
              <span>→</span>
              <span>They show alternative content (modal)</span>
            </li>
            <li className="flex gap-2">
              <span>→</span>
              <span>URL still updates to the intercepted route</span>
            </li>
            <li className="flex gap-2">
              <span>→</span>
              <span>Direct URL access shows full page</span>
            </li>
            <li className="flex gap-2">
              <span>→</span>
              <span>Browser back works naturally</span>
            </li>
            <li className="flex gap-2">
              <span>→</span>
              <span>Requires parallel routes (@modal)</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">✅ What You Should See</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-2">
              <span>✓</span>
              <span>Modal dialog overlay</span>
            </li>
            <li className="flex gap-2">
              <span>✓</span>
              <span>Semi-transparent backdrop</span>
            </li>
            <li className="flex gap-2">
              <span>✓</span>
              <span>URL changing in address bar</span>
            </li>
            <li className="flex gap-2">
              <span>✓</span>
              <span>Smooth transitions</span>
            </li>
            <li className="flex gap-2">
              <span>✓</span>
              <span>ESC key closes modal</span>
            </li>
            <li className="flex gap-2">
              <span>✓</span>
              <span>Backdrop click closes modal</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Documentation Links */}
      <div className="grid md:grid-cols-2 gap-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-8">
        <Link
          href="/intercepting-routes-guide"
          className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow border border-orange-200 cursor-pointer"
        >
          <h3 className="font-bold text-gray-900 mb-2">📚 Learn More</h3>
          <p className="text-gray-600 text-sm">
            Read the complete guide to intercepting routes with detailed explanations and patterns
          </p>
        </Link>

        <Link
          href="/examples"
          className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow border border-orange-200 cursor-pointer"
        >
          <h3 className="font-bold text-gray-900 mb-2">🎯 Examples Hub</h3>
          <p className="text-gray-600 text-sm">
            Visit the examples hub for quick access to all routing examples and learning resources
          </p>
        </Link>
      </div>
    </div>
  );
}
