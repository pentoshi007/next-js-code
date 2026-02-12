// Dashboard Page - Quick access to all sections

import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard</h1>
      <p className="text-gray-600 mb-12">
        Welcome to the dashboard. Navigate to team members to see the two-level-up intercepting route in action.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <Link
          href="/dashboard/team/members"
          className="bg-green-50 border-2 border-green-200 rounded-lg p-8 hover:shadow-lg transition-shadow cursor-pointer group"
        >
          <h2 className="text-2xl font-bold text-green-900 mb-2 group-hover:text-green-700">Team Members</h2>
          <p className="text-green-700">
            View team members with (...) two-level-up intercepting routes
          </p>
        </Link>

        <Link
          href="/store/products"
          className="bg-purple-50 border-2 border-purple-200 rounded-lg p-8 hover:shadow-lg transition-shadow cursor-pointer group"
        >
          <h2 className="text-2xl font-bold text-purple-900 mb-2 group-hover:text-purple-700">Store Products</h2>
          <p className="text-purple-700">
            View products with (..) one-level-up intercepting routes
          </p>
        </Link>

        <Link
          href="/gallery"
          className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 hover:shadow-lg transition-shadow cursor-pointer group"
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-2 group-hover:text-blue-700">Photo Gallery</h2>
          <p className="text-blue-700">
            View photos with (.) same-level intercepting routes
          </p>
        </Link>

        <Link
          href="/intercepting-routes-guide"
          className="bg-orange-50 border-2 border-orange-200 rounded-lg p-8 hover:shadow-lg transition-shadow cursor-pointer group"
        >
          <h2 className="text-2xl font-bold text-orange-900 mb-2 group-hover:text-orange-700">Learning Guide</h2>
          <p className="text-orange-700">
            Complete guide to all intercepting route patterns
          </p>
        </Link>
      </div>
    </div>
  );
}
