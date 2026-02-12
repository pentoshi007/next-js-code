export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center">
        <p className="text-sm text-gray-500">
          {new Date().getFullYear()} MyWebsite. All Rights Reserved
        </p>
        <p className="text-sm text-gray-500">Built with Next.js and Tailwind CSS</p>
      </div>
    </div>
  );
}
