// 
// EXAMPLE 2: CATCH-ALL SLUG (REQUIRED)
// File: app/blog/[...slug]/page.tsx
// 
// What this does:
// - [...slug] is a catch-all route (three dots, single brackets)
// - It matches one or more path segments (slug is REQUIRED)
// - This file handles routes like:
//   /blog/my-first-post          -> slug = ["my-first-post"]
//   /blog/2024/january/post-name -> slug = ["2024", "january", "post-name"]
//   /blog/category/tutorial      -> slug = ["category", "tutorial"]
// 
// Key Difference from [[...slug]]:
// - [...slug] requires at least one segment
// - [[...slug]] allows zero segments (optional)
// - /blog alone will NOT match this route (would show 404)
// 
// When to use:
// - Blog posts with date-based URLs
// - Category hierarchies that require segments
// - Complex nested paths
// - When you need at least one parameter
//

import React from "react";
import Link from "next/link";

const BlogPage = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  // Await the params Promise
  const { slug } = await params;

  // 
  // Blog structure with different URL patterns
  // slug array represents the path segments
  // Examples:
  // - /blog/getting-started -> slug = ["getting-started"]
  // - /blog/2024/january/new-year-post -> slug = ["2024", "january", "new-year-post"]
  //
  const blogPosts: Record<string, { 
    title: string; 
    author: string; 
    date: string; 
    excerpt: string; 
    content: string;
    category: string;
  }> = {
    "getting-started": {
      title: "Getting Started with Next.js",
      author: "John Doe",
      date: "Jan 15, 2024",
      category: "Tutorial",
      excerpt: "Learn the basics of Next.js and start building modern web applications.",
      content: "Next.js is a powerful React framework that enables you to build full-stack web applications with ease. This guide covers the fundamentals and gets you started quickly.",
    },
    "2024/january/new-year-post": {
      title: "New Year, New Projects: 2024 Web Development Trends",
      author: "Jane Smith",
      date: "Jan 1, 2024",
      category: "News",
      excerpt: "Explore the top web development trends expected in 2024.",
      content: "As we enter 2024, the web development landscape continues to evolve. From AI-powered tools to serverless architectures, discover what's shaping the future of web development.",
    },
    "2024/february/react-hooks": {
      title: "Mastering React Hooks",
      author: "Mike Wilson",
      date: "Feb 10, 2024",
      category: "Deep Dive",
      excerpt: "Advanced patterns and best practices for using React hooks.",
      content: "React hooks have revolutionized how we write functional components. Learn advanced patterns, custom hooks, and best practices for managing state and side effects.",
    },
    "tutorials/tailwind-css": {
      title: "Tailwind CSS: The Modern Way to Style",
      author: "Sarah Johnson",
      date: "Jan 28, 2024",
      category: "Tutorial",
      excerpt: "Master utility-first CSS with Tailwind CSS.",
      content: "Tailwind CSS provides a utility-first approach to building beautiful user interfaces. Discover how it can speed up your development workflow and keep your CSS organized.",
    },
    "web-development": {
      title: "The Future of Web Development",
      author: "Alex Brown",
      date: "Jan 20, 2024",
      category: "Opinion",
      excerpt: "Thoughts on where web development is heading.",
      content: "Web development is constantly evolving. This post explores emerging technologies, frameworks, and methodologies that are shaping the future of our industry.",
    },
  };

  // Convert slug array to path string
  const currentPath = slug.join("/");
  const post = blogPosts[currentPath];

  // Generate breadcrumb navigation
  const breadcrumbs = [
    { label: "Blog", path: "/blog" },
    ...slug.map((segment, index) => {
      const path = "/blog/" + slug.slice(0, index + 1).join("/");
      const label = isNaN(Number(segment))
        ? segment
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
        : segment;
      return { label, path };
    }),
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-gray-600">
          Example of a catch-all slug - <code className="bg-gray-100 px-2 py-1 rounded">/blog/[...slug]</code>
        </p>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 mb-8 text-sm flex-wrap">
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={breadcrumb.path}>
            <Link
              href={breadcrumb.path}
              className={`hover:text-blue-600 transition-colors ${
                index === breadcrumbs.length - 1
                  ? "text-gray-900 font-semibold"
                  : "text-gray-600"
              }`}
            >
              {breadcrumb.label}
            </Link>
            {index < breadcrumbs.length - 1 && (
              <span className="text-gray-400">/</span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Sidebar - Recent Posts */}
        <div className="md:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
            <h3 className="font-semibold text-gray-900 mb-4">Recent Posts</h3>
            <nav className="space-y-2">
              <Link
                href="/blog/getting-started"
                className={`block px-3 py-2 rounded-lg transition-colors text-sm ${
                  currentPath === "getting-started"
                    ? "bg-blue-100 text-blue-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Getting Started
              </Link>
              <Link
                href="/blog/2024/january/new-year-post"
                className={`block px-3 py-2 rounded-lg transition-colors text-sm ${
                  currentPath === "2024/january/new-year-post"
                    ? "bg-blue-100 text-blue-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                New Year Post
              </Link>
              <Link
                href="/blog/2024/february/react-hooks"
                className={`block px-3 py-2 rounded-lg transition-colors text-sm ${
                  currentPath === "2024/february/react-hooks"
                    ? "bg-blue-100 text-blue-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                React Hooks
              </Link>
              <Link
                href="/blog/tutorials/tailwind-css"
                className={`block px-3 py-2 rounded-lg transition-colors text-sm ${
                  currentPath === "tutorials/tailwind-css"
                    ? "bg-blue-100 text-blue-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Tailwind CSS
              </Link>
              <Link
                href="/blog/web-development"
                className={`block px-3 py-2 rounded-lg transition-colors text-sm ${
                  currentPath === "web-development"
                    ? "bg-blue-100 text-blue-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Web Development
              </Link>
            </nav>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="md:col-span-2">
          {post ? (
            <article>
              {/* Post Header */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h2>
                <div className="flex items-center gap-4 text-gray-600 text-sm">
                  <span>By {post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
              </div>

              {/* Post Excerpt */}
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{post.excerpt}</p>

              {/* Post Content */}
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-600 leading-relaxed">{post.content}</p>
              </div>

              {/* URL Information */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">Current Route Information:</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      <strong>Current URL:</strong>
                    </p>
                    <p className="font-mono text-blue-600 bg-white px-3 py-2 rounded">
                      /blog/{slug.join("/")}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      <strong>Slug Parameter (Array):</strong>
                    </p>
                    <p className="font-mono text-blue-600 bg-white px-3 py-2 rounded">
                      {JSON.stringify(slug)}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      <strong>Number of Segments:</strong>
                    </p>
                    <p className="font-mono text-blue-600 bg-white px-3 py-2 rounded">
                      {slug.length}
                    </p>
                  </div>
                </div>
              </div>

              {/* How It Works */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">How Catch-All Routes Work:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">1.</span>
                    <span>Pattern: <code className="bg-white px-2 py-1 rounded border">/blog/[...slug]</code></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">2.</span>
                    <span>Requires at least 1 segment (slug is REQUIRED)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">3.</span>
                    <span>Matches: <code className="bg-white px-2 py-1 rounded border">/blog/post</code>, <code className="bg-white px-2 py-1 rounded border">/blog/2024/january/post</code></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">4.</span>
                    <span>All segments collected into <code className="bg-white px-2 py-1 rounded border">slug</code> array</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">5.</span>
                    <span>Perfect for date-based blogs, nested categories, or hierarchical content</span>
                  </li>
                </ul>
              </div>
            </article>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded-lg p-8">
              <h3 className="font-semibold text-red-700 mb-2">Post Not Found</h3>
              <p className="text-red-600 mb-4">
                No blog post found for: <code className="bg-white px-2 py-1 rounded">/blog/{slug.join("/")}</code>
              </p>
              <p className="text-red-600 text-sm">
                Try visiting one of the posts in the sidebar or check the URL.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="mt-16 bg-gray-50 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Slug Patterns Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="px-4 py-3 font-semibold text-gray-900">Pattern</th>
                <th className="px-4 py-3 font-semibold text-gray-900">Name</th>
                <th className="px-4 py-3 font-semibold text-gray-900">Example URL</th>
                <th className="px-4 py-3 font-semibold text-gray-900">Required</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-mono text-blue-600">[id]</td>
                <td className="px-4 py-3">Simple Slug</td>
                <td className="px-4 py-3">/products/123</td>
                <td className="px-4 py-3">Yes (1 segment)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-blue-600">[...slug]</td>
                <td className="px-4 py-3">Catch-All</td>
                <td className="px-4 py-3">/blog/2024/jan/post</td>
                <td className="px-4 py-3">Yes (1+ segments)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-blue-600">[[...slug]]</td>
                <td className="px-4 py-3">Catch-All Optional</td>
                <td className="px-4 py-3">/docs or /docs/api/auth</td>
                <td className="px-4 py-3">No (0+ segments)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
