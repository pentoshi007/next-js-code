// 
// ROUTE GROUPS EXAMPLE - SIGNUP PAGE
// File: app/(auth)/signup/page.tsx
// 
// This is another page in the (auth) route group
// URL: /signup (not /auth/signup)
// Shares the same route group for organization
//

import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center px-4 py-24">
      <div className="w-full max-w-md">
        {/* Card Container */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
            <p className="text-gray-600">Join our community today</p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Terms & Conditions */}
            <label className="flex items-start gap-2 mt-4">
              <input type="checkbox" className="w-4 h-4 mt-1" />
              <span className="text-sm text-gray-600">
                I agree to the{" "}
                <a href="#" className="text-green-600 hover:text-green-700">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-green-600 hover:text-green-700">
                  Privacy Policy
                </a>
              </span>
            </label>

            {/* Submit Button */}
            <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors mt-6">
              Create Account
            </button>
          </form>

          {/* Sign In Link */}
          <p className="text-center text-gray-600 mt-8">
            Already have an account?{" "}
            <Link href="/login" className="text-green-600 hover:text-green-700 font-semibold">
              Sign in
            </Link>
          </p>
        </div>

        {/* Information Box */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-3">📁 Route Group Example</h3>
          <p className="text-sm text-gray-600 mb-3">
            This page is also in the <code className="bg-white px-2 py-1 rounded">(auth)</code> route group
          </p>
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold text-gray-700">File Path:</span>
              <code className="block bg-white px-2 py-1 rounded text-gray-600 mt-1">app/(auth)/signup/page.tsx</code>
            </p>
            <p>
              <span className="font-semibold text-gray-700">URL Generated:</span>
              <code className="block bg-white px-2 py-1 rounded text-green-600 mt-1">/signup</code>
            </p>
            <p className="text-gray-600 mt-3">
              ✓ Both login and signup pages share the same (auth) route group for better organization
            </p>
          </div>
          <div className="mt-4 flex gap-3">
            <Link
              href="/login"
              className="flex-1 text-center px-3 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors text-sm font-semibold"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="flex-1 text-center px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm font-semibold"
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
