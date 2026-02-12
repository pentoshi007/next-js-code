// 
// FULL PAGE VIEW - Team Member Profile
// File: app/dashboard/team/members/[id]/page.tsx
//

import Link from "next/link";

const teamMembers: Record<
  number,
  {
    name: string;
    emoji: string;
    role: string;
    email: string;
    department: string;
    joinDate: string;
    bio: string;
  }
> = {
  1: {
    name: "Alice Johnson",
    emoji: "👩‍🎨",
    role: "Lead Designer",
    email: "alice@company.com",
    department: "Design",
    joinDate: "Jan 2022",
    bio: "Creative designer with 8+ years of experience in UI/UX design.",
  },
  2: {
    name: "Bob Smith",
    emoji: "👨‍💻",
    role: "Senior Developer",
    email: "bob@company.com",
    department: "Engineering",
    joinDate: "Mar 2020",
    bio: "Full-stack developer passionate about clean code and best practices.",
  },
  3: {
    name: "Carol Davis",
    emoji: "👩‍💼",
    role: "Product Manager",
    email: "carol@company.com",
    department: "Product",
    joinDate: "Jun 2021",
    bio: "Strategic product manager focused on user experience and business goals.",
  },
  4: {
    name: "David Wilson",
    emoji: "👨‍🔧",
    role: "DevOps Engineer",
    email: "david@company.com",
    department: "Infrastructure",
    joinDate: "Sep 2021",
    bio: "DevOps specialist with expertise in cloud infrastructure and CI/CD.",
  },
};

export default function TeamMemberDetailPage({ params }: { params: { id: string } }) {
  const memberId = parseInt(params.id);
  const member = teamMembers[memberId];

  if (!member) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="bg-red-50 border border-red-200 rounded-lg p-8">
          <h1 className="text-2xl font-bold text-red-700 mb-2">Member Not Found</h1>
          <p className="text-red-600 mb-6">The team member you're looking for doesn't exist.</p>
          <Link href="/dashboard/team/members" className="text-red-600 hover:text-red-700 font-semibold">
            ← Back to Team Members
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <Link
        href="/dashboard/team/members"
        className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold mb-8"
      >
        <span>←</span> Back to Team
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-br from-green-100 to-green-200 h-40 flex items-center justify-center text-9xl">
          {member.emoji}
        </div>

        <div className="p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{member.name}</h1>
          <p className="text-xl text-green-600 font-semibold mb-6">{member.role}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-gray-200">
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase">Email</p>
              <p className="text-gray-700">{member.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase">Department</p>
              <p className="text-gray-700">{member.department}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase">Join Date</p>
              <p className="text-gray-700">{member.joinDate}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase">Status</p>
              <p className="text-green-600 font-semibold">Active</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{member.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
