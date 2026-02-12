// 
// ROUTE GROUPS EXAMPLE - FORGOT PASSWORD PAGE
// File: app/(auth)/forgot-password/page.tsx
// 
// Another page grouped under (auth)
// URL: /forgot-password (not /auth/forgot-password)
//

import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 flex items-center justify-center px-4 py-24">
      <div className="w-full max-w-md">
        {/* Card Container */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Forgot Password?</h1>
            <p className="text-gray-600">We'll help you reset it</p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                Email Address
              </label>
              <p className="text-sm text-gray-600 mb-3">
                Enter the email address associated with your account, and we'll send you a link to reset your password.
              </p>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Submit Button */}
            <button className="w-full bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
              Send Reset Link
            </button>
          </form>

          {/* Back to Login */}
          <p className="text-center text-gray-600 mt-8">
            Remember your password?{" "}
            <Link href="/login" className="text-orange-600 hover:text-orange-700 font-semibold">
              Sign in
            </Link>
          </p>
        </div>

        {/* Information Box */}
        <div className="mt-8 bg-orange-50 border border-orange-200 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-3">📁 Route Group Example</h3>
          <p className="text-sm text-gray-600 mb-3">
            This page is part of the <code className="bg-white px-2 py-1 rounded">(auth)</code> route group
          </p>
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold text-gray-700">File Path:</span>
              <code className="block bg-white px-2 py-1 rounded text-gray-600 mt-1">app/(auth)/forgot-password/page.tsx</code>
            </p>
            <p>
              <span className="font-semibold text-gray-700">URL Generated:</span>
              <code className="block bg-white px-2 py-1 rounded text-orange-600 mt-1">/forgot-password</code>
            </p>
            <p className="text-gray-600 mt-3">
              ✓ All three auth pages (login, signup, forgot-password) are organized in one route group
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
              className="flex-1 text-center px-3 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors text-sm font-semibold"
            >
              Signup
            </Link>
            <Link
              href="/forgot-password"
              className="flex-1 text-center px-3 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors text-sm font-semibold"
            >
              Forgot
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
