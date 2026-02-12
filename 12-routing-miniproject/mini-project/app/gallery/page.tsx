// 
// GALLERY PAGE - Main Page
// File: app/gallery/page.tsx
// 
// This is the main gallery page that displays a grid of photos
// When user clicks a photo, the intercepting route (.)gallery/[id] takes over
// and shows a modal instead of navigating to a full page
//

import Link from "next/link";

// Mock photo data
const photos = [
  {
    id: 1,
    title: "Mountain Vista",
    image: "🏔️",
    description: "Beautiful mountain landscape with snow-capped peaks",
  },
  {
    id: 2,
    title: "Ocean Waves",
    image: "🌊",
    description: "Serene ocean view during sunset",
  },
  {
    id: 3,
    title: "Forest Trail",
    image: "🌲",
    description: "Peaceful walk through a dense forest",
  },
  {
    id: 4,
    title: "Desert Dunes",
    image: "🏜️",
    description: "Golden sand dunes stretching to the horizon",
  },
  {
    id: 5,
    title: "City Lights",
    image: "🌃",
    description: "Urban skyline illuminated at night",
  },
  {
    id: 6,
    title: "Tropical Beach",
    image: "🏝️",
    description: "Paradise island with white sandy beaches",
  },
];

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Photo Gallery
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Click on any photo to view it in a modal (demonstrating intercepting routes)
        </p>
      </div>

      {/* Information Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
        <h3 className="font-semibold text-gray-900 mb-2">🎯 Intercepting Routes Demo</h3>
        <p className="text-sm text-gray-600">
          When you click a photo, an intercepting route shows a modal overlay while keeping the URL as <code className="bg-white px-2 py-1 rounded">/gallery/[id]</code>. 
          This allows you to close the modal and return to the gallery without a full page reload.
        </p>
      </div>

      {/* Photo Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {photos.map((photo) => (
          <Link
            key={photo.id}
            href={`/gallery/${photo.id}`}
            className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
          >
            {/* Photo Container */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-64 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-300">
              {photo.image}
            </div>

            {/* Photo Info */}
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {photo.title}
              </h2>
              <p className="text-gray-600 text-sm">{photo.description}</p>
            </div>

            {/* Click Indicator */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold">
                View Photo
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-50 rounded-lg p-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">📁 How This Works</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Folder Structure */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Folder Structure:</h3>
            <div className="bg-white rounded p-4 font-mono text-sm text-gray-600 border border-gray-200">
              <div>app/</div>
              <div className="ml-4">
                <div>gallery/</div>
                <div className="ml-4">
                  <div>page.tsx <span className="text-gray-400">← You are here</span></div>
                  <div>[id]/page.tsx <span className="text-gray-400">← Full page view</span></div>
                </div>
                <div><span className="text-blue-600">(<span className="text-blue-500">.</span>)gallery/</span> <span className="text-gray-400">← Intercepting route</span></div>
                <div className="ml-4">
                  <div>[id]/page.tsx <span className="text-gray-400">← Modal view</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">What Happens:</h3>
            <div className="space-y-4">
              <div className="bg-white rounded p-4 border border-green-200 bg-green-50">
                <p className="font-semibold text-gray-900 mb-1">✓ Click on photo from gallery</p>
                <p className="text-sm text-gray-600">Intercepting route takes over</p>
              </div>
              <div className="bg-white rounded p-4 border border-blue-200 bg-blue-50">
                <p className="font-semibold text-gray-900 mb-1">📱 Modal opens with photo</p>
                <p className="text-sm text-gray-600">URL changes to /gallery/[id]</p>
              </div>
              <div className="bg-white rounded p-4 border border-purple-200 bg-purple-50">
                <p className="font-semibold text-gray-900 mb-1">✕ Close modal or click back</p>
                <p className="text-sm text-gray-600">Return to gallery, URL reverts</p>
              </div>
              <div className="bg-white rounded p-4 border border-orange-200 bg-orange-50">
                <p className="font-semibold text-gray-900 mb-1">↪️ Direct link to /gallery/[id]</p>
                <p className="text-sm text-gray-600">Shows full page (no interception)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
