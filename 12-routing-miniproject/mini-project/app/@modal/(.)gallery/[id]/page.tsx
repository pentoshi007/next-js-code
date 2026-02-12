// 
// INTERCEPTING ROUTE WITH MODAL
// File: app/@modal/(.)gallery/[id]/page.tsx
// 
// WHAT ARE INTERCEPTING ROUTES?
// =============================
// Intercepting routes allow you to intercept navigation to a route from within the same layout
// The route is "intercepted" before it loads, and you can render alternative content instead
// 
// Syntax: (.)../[route] - intercepts sibling segments
//         (..)../[route] - intercepts parent and siblings
//         (...)/[route] - intercepts from root
//         (..)../../ - intercepts multiple levels
// 
// How it works with parallel routes (@modal):
// 1. User clicks on a gallery photo (/gallery/[id])
// 2. Instead of navigating to app/gallery/[id]/page.tsx
// 3. This intercepting route (.)gallery/[id] intercepts it
// 4. Shows a modal overlay instead
// 5. URL still shows /gallery/[id]
// 6. When modal closes, browser back button works naturally
// 
// Why use intercepting routes?
// ✓ Show modals with navigation
// ✓ Search results in overlay
// ✓ Image galleries with lightbox
// ✓ Product quick-view features
// ✓ Better UX with smooth transitions
//

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

// Mock photo data
const photos: Record<
  number,
  {
    title: string;
    image: string;
    description: string;
    date: string;
    location: string;
  }
> = {
  1: {
    title: "Mountain Vista",
    image: "🏔️",
    description: "Beautiful mountain landscape with snow-capped peaks",
    date: "March 15, 2024",
    location: "Alpine Region",
  },
  2: {
    title: "Ocean Waves",
    image: "🌊",
    description: "Serene ocean view during sunset",
    date: "February 20, 2024",
    location: "Coastal Paradise",
  },
  3: {
    title: "Forest Trail",
    image: "🌲",
    description: "Peaceful walk through a dense forest",
    date: "April 10, 2024",
    location: "Deep Forest",
  },
  4: {
    title: "Desert Dunes",
    image: "🏜️",
    description: "Golden sand dunes stretching to the horizon",
    date: "May 5, 2024",
    location: "Sahara Desert",
  },
  5: {
    title: "City Lights",
    image: "🌃",
    description: "Urban skyline illuminated at night",
    date: "June 12, 2024",
    location: "Metropolitan Center",
  },
  6: {
    title: "Tropical Beach",
    image: "🏝️",
    description: "Paradise island with white sandy beaches",
    date: "July 8, 2024",
    location: "Tropical Island",
  },
};

interface ModalProps {
  params: { id: string };
}

export default function PhotoModal({ params }: ModalProps) {
  const photoId = parseInt(params.id);
  const photo = photos[photoId];
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  // 
  // Open modal on mount using HTML dialog element
  // Dialog provides native modal behavior with backdrop
  //
  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  // 
  // Handle close button - navigate back to gallery
  // This triggers the intercepting route to unmount and shows the gallery page
  //
  const handleClose = () => {
    router.back();
  };

  // 
  // Handle backdrop click - close the modal
  // ESC key also closes native dialog
  //
  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      handleClose();
    }
  };

  if (!photo) {
    return (
      <dialog
        ref={dialogRef}
        className="fixed inset-0 z-50 rounded-lg backdrop:bg-black backdrop:bg-opacity-50"
      >
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md mx-auto mt-20">
          <p className="text-gray-700">Photo not found</p>
        </div>
      </dialog>
    );
  }

  return (
    // 
    // HTML Dialog Element - Native modal with backdrop
    // backdrop: creates the dark overlay behind the modal
    // User can click backdrop or press ESC to close
    //
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 rounded-lg backdrop:bg-black backdrop:bg-opacity-50 w-full max-w-2xl mx-auto"
    >
      {/* Modal Content */}
      <div className="bg-white rounded-lg shadow-2xl max-h-screen overflow-auto">
        {/* Close Button */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-gray-200 bg-white">
          <h2 className="text-2xl font-bold text-gray-900">{photo.title}</h2>
          <button
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
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

        {/* Modal Body */}
        <div className="p-8">
          {/* Large Photo */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-80 flex items-center justify-center text-8xl rounded-lg mb-8">
            {photo.image}
          </div>

          {/* Photo Info */}
          <div className="space-y-6">
            <p className="text-gray-600 text-lg">{photo.description}</p>

            {/* Meta Information */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-200">
              <div>
                <p className="text-sm text-gray-500 font-semibold uppercase">Date</p>
                <p className="text-gray-700">{photo.date}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold uppercase">Location</p>
                <p className="text-gray-700">{photo.location}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button
                onClick={handleClose}
                className="flex-1 px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
              >
                Close
              </button>
              <button
                onClick={() => router.push(`/gallery/${photoId}`)}
                className="flex-1 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                View Full Page
              </button>
            </div>
          </div>
        </div>

        {/* Info Footer */}
        <div className="bg-blue-50 border-t border-blue-200 p-6">
          <p className="text-xs text-blue-700">
            💡 <strong>Tip:</strong> This is an intercepting route modal. Press ESC or click outside to close, or click "View Full Page" to see the complete details.
          </p>
        </div>
      </div>
    </dialog>
  );
}
