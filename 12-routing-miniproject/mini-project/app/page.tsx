export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      <div className="text-4xl font-bold md:text-6xl text-center mb-8 text-gray-900">
        Welcome to MyWebsite
      </div>
      <p className="text-lg text-center mb-12 text-gray-600">
        This is a simple, clean website built with Next.js and Tailwind CSS.
        Perfect for
        <br />
        beginners learning web development
      </p>
      {/* space-x-4: Adds horizontal spacing (1rem/16px) between child elements.
          This uses margin-left on all children except the first one.
          The "x" refers to the x-axis (horizontal), and "4" is the spacing scale (4 × 0.25rem = 1rem).
          Other options: space-x-2 (0.5rem), space-x-6 (1.5rem), space-x-8 (2rem), etc.
          For vertical spacing between children, use space-y-4 instead. */}
      <div className="flex justify-center space-x-4">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 font-semibold transition-colors">
          Get Started
        </button>
        <button className="text-gray-700 px-6 py-3 rounded-md border border-gray-300 hover:bg-gray-100 font-semibold transition-colors">
          Learn more
        </button>
      </div>

      {/* Features Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 mt-24 max-w-sm mx-auto md:max-w-none">
        {/* Fast Feature */}
        <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-6 h-6 text-blue-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast</h3>
          <p className="text-gray-600">
            Built With Modern Tech for Optimal Performance
          </p>
        </div>

        {/* Simple Feature */}
        <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-6 h-6 text-green-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Simple</h3>
          <p className="text-gray-600">Clean and Easy to understand</p>
        </div>

        {/* Responsive Feature */}
        <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-6 h-6 text-purple-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5-3H7V4h10v13z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Responsive
          </h3>
          <p className="text-gray-600">
            Works Perfectly on all devices and screen sizes
          </p>
        </div>
      </div>
    </div>
  );
}
