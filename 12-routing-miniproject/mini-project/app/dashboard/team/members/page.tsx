// 
// DASHBOARD TEAM MEMBERS PAGE - Demonstrating TWO LEVELS UP (...) Intercepting Routes
// File: app/dashboard/team/members/page.tsx
// 
// This page will be intercepted by: app/@modal(...)/team/members/[id]/page.tsx
// The (...) pattern intercepts from TWO levels up
//

import Link from "next/link";

const teamMembers = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Lead Designer",
    emoji: "👩‍🎨",
    email: "alice@company.com",
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Senior Developer",
    emoji: "👨‍💻",
    email: "bob@company.com",
  },
  {
    id: 3,
    name: "Carol Davis",
    role: "Product Manager",
    emoji: "👩‍💼",
    email: "carol@company.com",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "DevOps Engineer",
    emoji: "👨‍🔧",
    email: "david@company.com",
  },
];

export default function DashboardTeamMembersPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      {/* Navigation */}
      <Link href="/dashboard" className="text-blue-600 hover:text-blue-700 font-semibold mb-8 inline-block">
        ← Back to Dashboard
      </Link>

      {/* Page Header */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Team Members</h1>
        <p className="text-lg text-gray-600">
          Click on any team member to view their profile (TWO LEVELS UP intercepting route)
        </p>
      </div>

      {/* Information Box */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-12">
        <h3 className="font-semibold text-gray-900 mb-2">📁 TWO LEVELS UP Intercepting Route (...)</h3>
        <p className="text-sm text-gray-600 mb-3">
          Folder structure:
        </p>
        <div className="bg-white px-3 py-2 rounded text-xs font-mono text-gray-700 mb-3">
          <div>app/dashboard/team/members/page.tsx ← You are here</div>
          <div>app/dashboard/team/members/[id]/page.tsx ← Full page</div>
          <div className="text-green-600">app/@modal(...)/team/members/[id]/page.tsx ← Modal (intercepts from TWO levels up)</div>
        </div>
        <p className="text-sm text-gray-600">
          This uses (...) pattern which intercepts TWO directory levels up! From @modal to the members/[id] route.
        </p>
      </div>

      {/* Team Members Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Name</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Role</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Email</th>
              <th className="px-6 py-4 text-left font-semibold text-gray-900">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {teamMembers.map((member) => (
              <tr key={member.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{member.emoji}</span>
                    <span className="font-semibold text-gray-900">{member.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">{member.role}</td>
                <td className="px-6 py-4 text-gray-600">{member.email}</td>
                <td className="px-6 py-4">
                  <Link
                    href={`/dashboard/team/members/${member.id}`}
                    className="text-green-600 hover:text-green-700 font-semibold hover:underline"
                  >
                    View Profile
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Comparison */}
      <div className="mt-12 grid md:grid-cols-3 gap-6 bg-gray-50 rounded-lg p-8">
        <div className="bg-white rounded p-4 border-l-4 border-blue-500">
          <p className="font-mono text-blue-600 font-bold mb-2">(.)</p>
          <p className="font-semibold text-gray-900 mb-2">SAME LEVEL</p>
          <p className="text-sm text-gray-600">Gallery example</p>
        </div>

        <div className="bg-white rounded p-4 border-l-4 border-purple-500">
          <p className="font-mono text-purple-600 font-bold mb-2">(..)</p>
          <p className="font-semibold text-gray-900 mb-2">ONE LEVEL UP</p>
          <p className="text-sm text-gray-600">Store products example</p>
        </div>

        <div className="bg-white rounded p-4 border-l-4 border-green-500">
          <p className="font-mono text-green-600 font-bold mb-2">(...)</p>
          <p className="font-semibold text-gray-900 mb-2">TWO LEVELS UP</p>
          <p className="text-sm text-gray-600">Current: Team members</p>
        </div>
      </div>
    </div>
  );
}
