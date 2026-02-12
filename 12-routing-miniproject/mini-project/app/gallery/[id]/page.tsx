// 
// FULL PAGE VIEW - Photo Details Page
// File: app/gallery/[id]/page.tsx
// 
// This is the full page view that displays when:
// 1. User navigates directly to /gallery/[id]
// 2. User's browser refreshes while viewing the modal
// 3. User shares the direct link
// 
// When accessed from the gallery page, the intercepting route
// (.)gallery/[id]/page.tsx shows a modal instead
//

import Link from "next/link";

// Mock photo data
const photos: Record<
  number,
  {
    title: string;
    image: string;
    description: string;
    details: string;
    date: string;
    location: string;
  }
> = {
  1: {
    title: "Mountain Vista",
    image: "🏔️",
    description: "Beautiful mountain landscape with snow-capped peaks",
    details:
      "This breathtaking view captures the majesty of nature in its purest form. The snow-capped peaks stand tall against the clear blue sky, creating a stunning contrast of white and blue.",
    date: "March 15, 2024",
    location: "Alpine Region",
  },
  2: {
    title: "Ocean Waves",
    image: "🌊",
    description: "Serene ocean view during sunset",
    details:
      "The gentle waves lap against the shore as the sun sets on the horizon. Golden light reflects off the water, creating a peaceful and tranquil atmosphere perfect for meditation.",
    date: "February 20, 2024",
    location: "Coastal Paradise",
  },
  3: {
    title: "Forest Trail",
    image: "🌲",
    description: "Peaceful walk through a dense forest",
    details:
      "Ancient trees create a canopy of green, filtering the sunlight into gentle rays. The forest is alive with the sounds of nature, birds chirping, and leaves rustling in the breeze.",
    date: "April 10, 2024",
    location: "Deep Forest",
  },
  4: {
    title: "Desert Dunes",
    image: "🏜️",
    description: "Golden sand dunes stretching to the horizon",
    details:
      "Endless golden dunes stretch across the landscape, creating a sea of sand. The warm sun illuminates each grain, creating patterns of light and shadow across the dunes.",
    date: "May 5, 2024",
    location: "Sahara Desert",
  },
  5: {
    title: "City Lights",
    image: "🌃",
    description: "Urban skyline illuminated at night",
    details:
      "The city comes alive at night with thousands of lights twinkling in the darkness. Skyscrapers pierce the sky, creating a stunning silhouette against the night sky.",
    date: "June 12, 2024",
    location: "Metropolitan Center",
  },
  6: {
    title: "Tropical Beach",
    image: "🏝️",
    description: "Paradise island with white sandy beaches",
    details:
      "Crystal clear waters meet pristine white sand. Palm trees sway gently in the breeze, and the water shimmers with shades of turquoise and blue, inviting you to take a swim.",
    date: "July 8, 2024",
    location: "Tropical Island",
  },
};

export default function PhotoDetailPage({ params }: { params: { id: string } }) {
  const photoId = parseInt(params.id);
  const photo = photos[photoId];

  if (!photo) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="bg-red-50 border border-red-200 rounded-lg p-8">
          <h1 className="text-2xl font-bold text-red-700 mb-2">Photo Not Found</h1>
          <p className="text-red-600 mb-6">
            The photo you're looking for doesn't exist.
          </p>
          <Link href="/gallery" className="text-red-600 hover:text-red-700 font-semibold">
            ← Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      {/* Back Button */}
      <Link
        href="/gallery"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8"
      >
        <span>←</span> Back to Gallery
      </Link>

      {/* Photo Container */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        {/* Large Photo */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-96 flex items-center justify-center text-9xl">
          {photo.image}
        </div>

        {/* Photo Details */}
        <div className="p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{photo.title}</h1>

          {/* Meta Information */}
          <div className="grid md:grid-cols-2 gap-4 mb-8 pb-8 border-b border-gray-200">
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase">Date</p>
              <p className="text-lg text-gray-700">{photo.date}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase">Location</p>
              <p className="text-lg text-gray-700">{photo.location}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-lg text-gray-600">{photo.description}</p>
          </div>

          {/* Full Details */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Photo</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{photo.details}</p>
          </div>
        </div>
      </div>

      {/* Information Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-900 mb-3">📄 Full Page View</h3>
        <p className="text-sm text-gray-600 mb-3">
          You're viewing this photo in full-page mode. This happens when:
        </p>
        <ul className="text-sm text-gray-600 space-y-2 mb-4">
          <li>✓ You navigated directly to this URL</li>
          <li>✓ You refreshed the page while viewing the modal</li>
          <li>✓ You shared and opened a direct link</li>
        </ul>
        <p className="text-sm text-gray-600">
          If you click the gallery link again, the intercepting route will show a modal instead!
        </p>
      </div>
    </div>
  );
}
