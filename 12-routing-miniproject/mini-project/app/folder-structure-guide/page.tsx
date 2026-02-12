// Folder Structure Guide - Route Groups & Private Folders

import Link from "next/link";

export default function FolderStructureGuide() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Route Groups & Private Folders
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Learn how to organize your Next.js project structure effectively
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        {/* Route Groups Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
              ()
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Route Groups</h2>
          </div>

          <p className="text-gray-600 mb-6">
            Use parentheses to group routes without affecting the URL structure.
          </p>

          {/* How It Works */}
          <div className="bg-white rounded p-4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">How It Works:</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div>
                <p className="font-mono bg-gray-50 px-2 py-1 rounded text-gray-700">app/(auth)/login</p>
                <p className="text-xs text-gray-500 mt-1">↓</p>
                <p className="font-semibold text-blue-600">URL: /login</p>
              </div>
              <p className="text-xs text-gray-500">
                The (auth) folder is stripped from the URL but organizes the routes
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded p-4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Benefits:</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Keep URLs clean</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Organize related routes</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Shared layouts for grouped routes</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Better project structure</span>
              </li>
            </ul>
          </div>

          {/* Examples */}
          <div className="bg-white rounded p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Examples:</h3>
            <div className="space-y-2 text-xs">
              <div>
                <p className="font-mono text-gray-600">app/(auth)/login → <span className="text-blue-600 font-bold">/login</span></p>
              </div>
              <div>
                <p className="font-mono text-gray-600">app/(auth)/signup → <span className="text-blue-600 font-bold">/signup</span></p>
              </div>
              <div>
                <p className="font-mono text-gray-600">app/(admin)/dashboard → <span className="text-blue-600 font-bold">/dashboard</span></p>
              </div>
              <div>
                <p className="font-mono text-gray-600">app/(admin)/users → <span className="text-blue-600 font-bold">/users</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Private Folders Section */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 border border-purple-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
              _
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Private Folders</h2>
          </div>

          <p className="text-gray-600 mb-6">
            Use underscore prefix to exclude folders from routing completely.
          </p>

          {/* How It Works */}
          <div className="bg-white rounded p-4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">How It Works:</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div>
                <p className="font-mono bg-gray-50 px-2 py-1 rounded text-gray-700">app/_components/Button.tsx</p>
                <p className="text-xs text-gray-500 mt-1">↓</p>
                <p className="font-semibold text-purple-600">Not a route - just a component</p>
              </div>
              <p className="text-xs text-gray-500">
                The _components folder is completely hidden from routing
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded p-4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Benefits:</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span>Prevent accidental routes</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span>Organize non-route files</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span>Co-locate related logic</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span>Clear code separation</span>
              </li>
            </ul>
          </div>

          {/* Examples */}
          <div className="bg-white rounded p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Examples:</h3>
            <div className="space-y-2 text-xs">
              <div>
                <p className="font-mono text-gray-600">app/_components/Button.tsx → <span className="text-purple-600 font-bold">Not a route</span></p>
              </div>
              <div>
                <p className="font-mono text-gray-600">app/_lib/utils.ts → <span className="text-purple-600 font-bold">Not a route</span></p>
              </div>
              <div>
                <p className="font-mono text-gray-600">app/_hooks/useAuth.ts → <span className="text-purple-600 font-bold">Not a route</span></p>
              </div>
              <div>
                <p className="font-mono text-gray-600">app/_types/index.ts → <span className="text-purple-600 font-bold">Not a route</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Structure Example */}
      <div className="bg-gray-50 rounded-lg p-8 mb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Example Project Structure</h2>

        <div className="bg-white rounded-lg p-6 font-mono text-sm overflow-x-auto">
          <div className="text-gray-600">
            <div><span className="text-gray-400">app/</span></div>
            <div className="ml-4">
              <div>
                <span className="text-blue-600">(<span className="text-blue-500">auth</span>)/</span>
                <span className="text-gray-500 ml-2">← Route Group (no URL impact)</span>
              </div>
              <div className="ml-4">
                <div>login/page.tsx <span className="text-gray-500">→ /login</span></div>
                <div>signup/page.tsx <span className="text-gray-500">→ /signup</span></div>
                <div>forgot-password/page.tsx <span className="text-gray-500">→ /forgot-password</span></div>
              </div>
            </div>
            <div className="ml-4 mt-3">
              <div>
                <span className="text-blue-600">(<span className="text-blue-500">admin</span>)/</span>
                <span className="text-gray-500 ml-2">← Route Group</span>
              </div>
              <div className="ml-4">
                <div>dashboard/page.tsx <span className="text-gray-500">→ /dashboard</span></div>
                <div>users/page.tsx <span className="text-gray-500">→ /users</span></div>
              </div>
            </div>
            <div className="ml-4 mt-3">
              <div>
                <span className="text-purple-600">_<span className="text-purple-500">components</span>/</span>
                <span className="text-gray-500 ml-2">← Private Folder (not a route)</span>
              </div>
              <div className="ml-4">
                <div>Button.tsx <span className="text-gray-500">← Component</span></div>
                <div>Card.tsx <span className="text-gray-500">← Component</span></div>
              </div>
            </div>
            <div className="ml-4 mt-3">
              <div>
                <span className="text-purple-600">_<span className="text-purple-500">lib</span>/</span>
                <span className="text-gray-500 ml-2">← Private Folder (not a route)</span>
              </div>
              <div className="ml-4">
                <div>utils.ts <span className="text-gray-500">← Helper functions</span></div>
                <div>api.ts <span className="text-gray-500">← API utilities</span></div>
              </div>
            </div>
            <div className="ml-4 mt-3">
              <div>page.tsx <span className="text-gray-500">→ /</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Examples */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-12 mb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Live Examples
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Route Group Example */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-200">
            <h3 className="font-bold text-gray-900 mb-4">📁 Route Groups</h3>
            <p className="text-sm text-gray-600 mb-4">
              All these routes are in the (auth) group:
            </p>
            <div className="space-y-2">
              <Link
                href="/login"
                className="block px-4 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors text-center"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="block px-4 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors text-center"
              >
                Signup
              </Link>
              <Link
                href="/forgot-password"
                className="block px-4 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors text-center"
              >
                Forgot Password
              </Link>
            </div>
          </div>

          {/* Private Folders Example */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-purple-200">
            <h3 className="font-bold text-gray-900 mb-4">📁 Private Folders</h3>
            <p className="text-sm text-gray-600 mb-4">
              These files are NOT accessible as routes:
            </p>
            <div className="space-y-2">
              <div className="px-4 py-2 bg-gray-100 text-gray-700 rounded text-sm">
                _components/AuthCard.tsx
              </div>
              <div className="px-4 py-2 bg-gray-100 text-gray-700 rounded text-sm">
                _lib/utils.ts
              </div>
              <div className="px-4 py-2 bg-gray-100 text-gray-700 rounded text-sm">
                (Only importable, not URLs)
              </div>
            </div>
          </div>

          {/* Comparison */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-green-200">
            <h3 className="font-bold text-gray-900 mb-4">⚖️ Comparison</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-blue-600">(folder)</p>
                <p className="text-gray-600">Organize routes</p>
              </div>
              <div>
                <p className="font-semibold text-purple-600">_folder</p>
                <p className="text-gray-600">Hide from routes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            🎯 When to Use Route Groups
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-blue-600">→</span>
              <span>Group related pages together</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600">→</span>
              <span>Apply shared layouts to specific routes</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600">→</span>
              <span>Keep URLs clean and organized</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600">→</span>
              <span>Separate concerns (auth, admin, public)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600">→</span>
              <span>Multiple root layouts</span>
            </li>
          </ul>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            🎯 When to Use Private Folders
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-purple-600">→</span>
              <span>Shared components and utilities</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600">→</span>
              <span>Helper functions and hooks</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600">→</span>
              <span>Type definitions and constants</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600">→</span>
              <span>Co-locate logic with features</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-600">→</span>
              <span>Prevent accidental route creation</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
