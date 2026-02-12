// 
// ROUTE GROUPS EXAMPLE - LOGIN PAGE
// File: app/(auth)/login/page.tsx
// 
// What are Route Groups?
// =====================
// Route groups use parentheses () to organize routes WITHOUT affecting the URL
// 
// How it works:
// - Folder name: (auth)
// - File path: app/(auth)/login/page.tsx
// - URL generated: /login (NOT /auth/login)
// - The parentheses are stripped from the URL path
// 
// Why use route groups?
// 1. Organization: Group related routes together
// 2. Shared Layouts: Apply a layout to specific routes only
// 3. Code Splitting: Better project structure
// 4. Flexibility: Reuse the same URL structure across groups
// 
// Benefits:
// ✓ Keep URL structure clean
// ✓ Organize routes logically without affecting paths
// ✓ Share layouts between grouped routes
// ✓ Separate concerns (auth, admin, public, etc.)
// 
// This example groups auth pages: login, signup, forgot-password
// All are under (auth) folder but URLs don't show "auth"
//

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-24">
      <div className="w-full max-w-md">
        {/* Card Container */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your account</p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-600 hover:text-blue-700 font-semibold">
              Sign up
            </Link>
          </p>
        </div>

        {/* Information Box */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-3">📁 Route Group Example</h3>
          <p className="text-sm text-gray-600 mb-3">
            This page is in the <code className="bg-white px-2 py-1 rounded">(auth)</code> route group
          </p>
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold text-gray-700">File Path:</span>
              <code className="block bg-white px-2 py-1 rounded text-gray-600 mt-1">app/(auth)/login/page.tsx</code>
            </p>
            <p>
              <span className="font-semibold text-gray-700">URL Generated:</span>
              <code className="block bg-white px-2 py-1 rounded text-blue-600 mt-1">/login</code>
            </p>
            <p className="text-gray-600 mt-3">
              ✓ The <code className="bg-white px-2 py-1 rounded">(auth)</code> folder is a route group - it organizes routes without affecting the URL path
            </p>
          </div>
          <div className="mt-4 flex gap-3">
            <Link
              href="/login"
              className="flex-1 text-center px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-semibold"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="flex-1 text-center px-3 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors text-sm font-semibold"
            >
              Signup
            </Link>
            <Link
              href="/forgot-password"
              className="flex-1 text-center px-3 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors text-sm font-semibold"
            >
              Forgot
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
