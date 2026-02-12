// Examples Index Page - All Learning Resources

import Link from "next/link";

export default function ExamplesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Next.js Routing Examples
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Complete learning resource covering dynamic routing, route groups, and private folders
        </p>
      </div>

      {/* Quick Navigation Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Routing Patterns */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-8 border border-blue-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                🔗
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Dynamic Routing</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Learn about simple slugs, catch-all routes, and optional catch-all patterns
            </p>
            <div className="space-y-2">
              <Link
                href="/products/1"
                className="block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-center font-semibold"
              >
                Simple Slug Example
              </Link>
              <Link
                href="/blog/getting-started"
                className="block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-center font-semibold"
              >
                Catch-All Example
              </Link>
              <Link
                href="/docs"
                className="block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-center font-semibold"
              >
                Optional Catch-All
              </Link>
              <Link
                href="/routing-guide"
                className="block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center font-semibold"
              >
                View Detailed Guide →
              </Link>
            </div>
          </div>

          {/* Folder Structure */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 border border-purple-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                📁
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Folder Organization</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Route groups and private folders for better project structure
            </p>
            <div className="space-y-2">
              <Link
                href="/login"
                className="block px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-center font-semibold"
              >
                Route Groups Demo
              </Link>
              <Link
                href="/signup"
                className="block px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-center font-semibold"
              >
                More Route Groups
              </Link>
              <Link
                href="/folder-structure-guide"
                className="block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-center font-semibold"
              >
                View Detailed Guide →
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Quick Reference */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 border border-green-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🎓 Quick Reference</h2>

            <div className="space-y-4">
              {/* Simple Slug */}
              <div className="bg-white rounded p-4">
                <p className="font-mono text-sm text-blue-600 font-semibold mb-2">[id]</p>
                <p className="text-xs text-gray-600 mb-2">Single segment</p>
                <p className="text-xs text-gray-500">/products/123</p>
              </div>

              {/* Catch-All */}
              <div className="bg-white rounded p-4">
                <p className="font-mono text-sm text-blue-600 font-semibold mb-2">[...slug]</p>
                <p className="text-xs text-gray-600 mb-2">Multiple segments (required)</p>
                <p className="text-xs text-gray-500">/blog/2024/january/post</p>
              </div>

              {/* Optional Catch-All */}
              <div className="bg-white rounded p-4">
                <p className="font-mono text-sm text-blue-600 font-semibold mb-2">[[...slug]]</p>
                <p className="text-xs text-gray-600 mb-2">Multiple segments (optional)</p>
                <p className="text-xs text-gray-500">/docs or /docs/api/auth</p>
              </div>

              {/* Route Groups */}
              <div className="bg-white rounded p-4">
                <p className="font-mono text-sm text-purple-600 font-semibold mb-2">(name)</p>
                <p className="text-xs text-gray-600 mb-2">Organize without URL change</p>
                <p className="text-xs text-gray-500">app/(auth)/login → /login</p>
              </div>

              {/* Private Folders */}
              <div className="bg-white rounded p-4">
                <p className="font-mono text-sm text-purple-600 font-semibold mb-2">_name</p>
                <p className="text-xs text-gray-600 mb-2">Hide from routing</p>
                <p className="text-xs text-gray-500">app/_components/Button</p>
              </div>
            </div>
          </div>

          {/* Key Concepts */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-8 border border-orange-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">💡 Key Concepts</h2>

            <div className="space-y-3 text-sm text-gray-700">
              <p className="flex gap-2">
                <span className="text-orange-600 font-bold">→</span>
                <span><strong>Square brackets</strong> create dynamic segments</span>
              </p>
              <p className="flex gap-2">
                <span className="text-orange-600 font-bold">→</span>
                <span><strong>Three dots (...)</strong> indicate catch-all routes</span>
              </p>
              <p className="flex gap-2">
                <span className="text-orange-600 font-bold">→</span>
                <span><strong>Double brackets [[...]]</strong> make segments optional</span>
              </p>
              <p className="flex gap-2">
                <span className="text-orange-600 font-bold">→</span>
                <span><strong>Parentheses ()</strong> group routes without URL impact</span>
              </p>
              <p className="flex gap-2">
                <span className="text-orange-600 font-bold">→</span>
                <span><strong>Underscore _</strong> hides folders from routing</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Intercepting Routes Section */}
      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-8 border border-orange-200 hover:shadow-lg transition-shadow mb-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
            ⚡
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Intercepting Routes</h2>
        </div>
        <p className="text-gray-600 mb-6">
          Show modals and alternative content without navigating away from the current page
        </p>
        <div className="space-y-2">
          <Link
            href="/gallery"
            className="block px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-center font-semibold"
          >
            Photo Gallery Demo
          </Link>
          <Link
            href="/intercepting-routes-guide"
            className="block px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-center font-semibold"
          >
            View Detailed Guide →
          </Link>
        </div>
      </div>

      {/* Learning Path */}
      <div className="bg-gray-50 rounded-lg p-12 mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Suggested Learning Path
        </h2>

        <div className="grid md:grid-cols-6 gap-4">
          {/* Step 1 */}
          <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500 shadow-sm">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
              1
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Start Here</h3>
            <p className="text-sm text-gray-600 mb-4">
              Visit the home page and explore the project
            </p>
            <Link href="/" className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
              Home →
            </Link>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg p-6 border-l-4 border-green-500 shadow-sm">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
              2
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Simple Slugs</h3>
            <p className="text-sm text-gray-600 mb-4">
              Learn basic dynamic routing with [id]
            </p>
            <Link href="/products/1" className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
              View Example →
            </Link>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg p-6 border-l-4 border-purple-500 shadow-sm">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
              3
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Catch-All Routes</h3>
            <p className="text-sm text-gray-600 mb-4">
              Explore [...slug] patterns
            </p>
            <Link href="/blog/getting-started" className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
              View Example →
            </Link>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500 shadow-sm">
            <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
              4
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Optional Routes</h3>
            <p className="text-sm text-gray-600 mb-4">
              Master [[...slug]]
            </p>
            <Link href="/docs" className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
              View Example →
            </Link>
          </div>

          {/* Step 5 */}
          <div className="bg-white rounded-lg p-6 border-l-4 border-red-500 shadow-sm">
            <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
              5
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Organization</h3>
            <p className="text-sm text-gray-600 mb-4">
              Route groups & private folders
            </p>
            <Link href="/folder-structure-guide" className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
              View Guide →
            </Link>
          </div>

          {/* Step 6 */}
          <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500 shadow-sm">
            <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
              6
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Advanced Routes</h3>
            <p className="text-sm text-gray-600 mb-4">
              Intercepting routes & modals
            </p>
            <Link href="/gallery" className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
              View Example →
            </Link>
          </div>
        </div>
      </div>

      {/* Features Overview */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">✅ What You'll Learn</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Dynamic routing patterns</li>
            <li>✓ Single vs multiple segments</li>
            <li>✓ Required vs optional routes</li>
            <li>✓ Route organization strategies</li>
            <li>✓ Project structure best practices</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">🚀 Live Examples</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Working route implementations</li>
            <li>✓ Interactive navigation</li>
            <li>✓ Real-world scenarios</li>
            <li>✓ Parameter visualization</li>
            <li>✓ Breadcrumb examples</li>
          </ul>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">📚 Documentation</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Detailed comments in code</li>
            <li>✓ How-it-works explanations</li>
            <li>✓ Use case examples</li>
            <li>✓ Best practices guides</li>
            <li>✓ Comparison tables</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
