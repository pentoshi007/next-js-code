// 
// TWO LEVELS UP INTERCEPTING ROUTE - MODAL
// File: app/@modal(...)/team/members/[id]/page.tsx
// 
// SYNTAX EXPLANATION:
// ==================
// @modal - Parallel route slot for the modal
// (...) - Intercept TWO levels up from this file's location
// 
// File hierarchy:
// app/
//   dashboard/
//     team/
//       members/
//         [id]/page.tsx ← Where we're intercepting
//   @modal/
//     (...)/
//       team/members/[id]/page.tsx ← This file intercepts from TWO levels up
// 
// The (...) pattern goes up from members directory level, TWO levels up to reach the intercept point
// 
// When you click a team member from /dashboard/team/members page:
// - Navigation goes to /dashboard/team/members/[id]
// - This (...) route intercepts it
// - Shows modal instead of full page
// - URL: /dashboard/team/members/[id]
//

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const teamMembers: Record<
  number,
  {
    name: string;
    emoji: string;
    role: string;
    email: string;
  }
> = {
  1: {
    name: "Alice Johnson",
    emoji: "👩‍🎨",
    role: "Lead Designer",
    email: "alice@company.com",
  },
  2: {
    name: "Bob Smith",
    emoji: "👨‍💻",
    role: "Senior Developer",
    email: "bob@company.com",
  },
  3: {
    name: "Carol Davis",
    emoji: "👩‍💼",
    role: "Product Manager",
    email: "carol@company.com",
  },
  4: {
    name: "David Wilson",
    emoji: "👨‍🔧",
    role: "DevOps Engineer",
    email: "david@company.com",
  },
};

export default function TeamMemberModal({ params }: { params: { id: string } }) {
  const memberId = parseInt(params.id);
  const member = teamMembers[memberId];
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  const handleClose = () => {
    router.back();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      handleClose();
    }
  };

  if (!member) {
    return null;
  }

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 rounded-lg backdrop:bg-black backdrop:bg-opacity-50 w-full max-w-md mx-auto"
    >
      <div className="bg-white rounded-lg shadow-2xl max-h-screen overflow-auto">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-gray-200 bg-white">
          <h2 className="text-2xl font-bold text-gray-900">{member.name}</h2>
          <button
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-8">
          <div className="bg-gradient-to-br from-green-100 to-green-200 h-64 flex items-center justify-center text-7xl rounded-lg mb-6">
            {member.emoji}
          </div>

          <p className="text-2xl font-bold text-green-600 mb-2">{member.role}</p>
          <p className="text-gray-600 mb-6">{member.email}</p>

          <div className="space-y-3 mb-6">
            <p className="text-sm">
              <span className="font-semibold text-gray-900">Department:</span>
              <span className="text-gray-600 ml-2">Engineering</span>
            </p>
            <p className="text-sm">
              <span className="font-semibold text-gray-900">Status:</span>
              <span className="text-green-600 ml-2 font-semibold">Active</span>
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleClose}
              className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
            >
              Close
            </button>
            <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
              Send Message
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="bg-green-50 border-t border-green-200 p-4">
          <p className="text-xs text-green-700">
            💚 <strong>Intercepting Route:</strong> Two levels up (...) - Shows modal when clicked from team members list
          </p>
        </div>
      </div>
    </dialog>
  );
}
