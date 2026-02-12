// 
// EXAMPLE 3: CATCH-ALL OPTIONAL SLUG
// File: app/docs/[[...slug]]/page.tsx
// 
// What this does:
// - [[...slug]] is an optional catch-all route (double brackets)
// - It matches zero or more path segments
// - This file handles routes like:
//   /docs                          -> slug = undefined (or empty array)
//   /docs/getting-started          -> slug = ["getting-started"]
//   /docs/api/authentication       -> slug = ["api", "authentication"]
//   /docs/api/auth/jwt/usage       -> slug = ["api", "auth", "jwt", "usage"]
// 
// Key Difference from [...slug]:
// - [[...slug]] makes the slug OPTIONAL (can be empty)
// - [...slug] makes the slug REQUIRED (must have at least one segment)
// 
// When to use:
// - Documentation sites with nested pages
// - Multi-level category hierarchies
// - Breadcrumb navigation support
// - Graceful handling of root paths
//

import React from "react";
import Link from "next/link";

const DocsPage = async ({ params }: { params: Promise<{ slug?: string[] }> }) => {
  // Await the params Promise
  const { slug } = await params;

  // 
  // Documentation structure with nested pages
  // slug array represents the breadcrumb path
  // Example: /docs/api/authentication -> slug = ["api", "authentication"]
  //
  const docStructure: Record<string, { title: string; content: string }> = {
    "": { 
      title: "Documentation Home", 
      content: "Welcome to the documentation. Choose a topic from the sidebar to get started." 
    },
    "getting-started": { 
      title: "Getting Started", 
      content: "Learn the basics and set up your first project in minutes." 
    },
    "getting-started/installation": { 
      title: "Installation Guide", 
      content: "Step-by-step instructions to install and configure the project." 
    },
    "api": { 
      title: "API Reference", 
      content: "Complete API documentation with examples and use cases." 
    },
    "api/authentication": { 
      title: "Authentication", 
      content: "Learn how to authenticate users and manage sessions securely." 
    },
    "api/authentication/jwt": { 
      title: "JWT Authentication", 
      content: "Deep dive into JSON Web Token (JWT) authentication patterns." 
    },
    "guides": { 
      title: "Guides", 
      content: "In-depth guides and tutorials for advanced topics." 
    },
    "guides/deployment": { 
      title: "Deployment Guide", 
      content: "How to deploy your application to production environments." 
    },
  };

  // Convert slug array to path string
  const currentPath = slug ? slug.join("/") : "";
  const currentDoc = docStructure[currentPath];

  // 
  // Generate breadcrumb navigation
  // Example: /docs/api/authentication -> Docs > API > Authentication
  //
  const generateBreadcrumbs = () => {
    const breadcrumbs = [{ label: "Docs", path: "/docs" }];
    
    if (slug && slug.length > 0) {
      let accumulatedPath = "/docs";
      slug.forEach((segment, index) => {
        accumulatedPath += `/${segment}`;
        breadcrumbs.push({
          label: segment
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
          path: accumulatedPath,
        });
      });
    }
    
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Documentation</h1>
        <p className="text-gray-600">
          Example of a catch-all optional slug - <code className="bg-gray-100 px-2 py-1 rounded">/docs/[[...slug]]</code>
        </p>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 mb-8 text-sm">
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
      <div className="grid md:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="md:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
            <h3 className="font-semibold text-gray-900 mb-4">Navigation</h3>
            <nav className="space-y-2">
              {/* Home */}
              <Link
                href="/docs"
                className={`block px-3 py-2 rounded-lg transition-colors ${
                  currentPath === ""
                    ? "bg-blue-100 text-blue-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                📚 Home
              </Link>

              {/* Getting Started Section */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase px-3 py-2">Getting Started</p>
                <Link
                  href="/docs/getting-started"
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    currentPath === "getting-started"
                      ? "bg-blue-100 text-blue-600 font-semibold"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  ▸ Overview
                </Link>
                <Link
                  href="/docs/getting-started/installation"
                  className={`block px-3 py-2 rounded-lg transition-colors ml-2 ${
                    currentPath === "getting-started/installation"
                      ? "bg-blue-100 text-blue-600 font-semibold"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  ▸ Installation
                </Link>
              </div>

              {/* API Section */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase px-3 py-2">API</p>
                <Link
                  href="/docs/api"
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    currentPath === "api"
                      ? "bg-blue-100 text-blue-600 font-semibold"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  ▸ Reference
                </Link>
                <Link
                  href="/docs/api/authentication"
                  className={`block px-3 py-2 rounded-lg transition-colors ml-2 ${
                    currentPath === "api/authentication"
                      ? "bg-blue-100 text-blue-600 font-semibold"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  ▸ Auth
                </Link>
                <Link
                  href="/docs/api/authentication/jwt"
                  className={`block px-3 py-2 rounded-lg transition-colors ml-4 ${
                    currentPath === "api/authentication/jwt"
                      ? "bg-blue-100 text-blue-600 font-semibold"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  ▸ JWT
                </Link>
              </div>

              {/* Guides Section */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase px-3 py-2">Guides</p>
                <Link
                  href="/docs/guides"
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    currentPath === "guides"
                      ? "bg-blue-100 text-blue-600 font-semibold"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  ▸ Overview
                </Link>
                <Link
                  href="/docs/guides/deployment"
                  className={`block px-3 py-2 rounded-lg transition-colors ml-2 ${
                    currentPath === "guides/deployment"
                      ? "bg-blue-100 text-blue-600 font-semibold"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  ▸ Deployment
                </Link>
              </div>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          {currentDoc ? (
            <div>
              {/* Content Header */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{currentDoc.title}</h2>

              {/* Content Body */}
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-600 leading-relaxed">{currentDoc.content}</p>
              </div>

              {/* URL Information Box */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">Current Route Information:</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      <strong>Current URL:</strong>
                    </p>
                    <p className="font-mono text-blue-600 bg-white px-3 py-2 rounded">
                      /docs{slug && slug.length > 0 ? "/" + slug.join("/") : ""}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      <strong>Slug Parameter (Array):</strong>
                    </p>
                    <p className="font-mono text-blue-600 bg-white px-3 py-2 rounded">
                      {slug && slug.length > 0 ? JSON.stringify(slug) : "undefined (or empty)"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      <strong>Current Path:</strong>
                    </p>
                    <p className="font-mono text-blue-600 bg-white px-3 py-2 rounded">
                      "{currentPath}"
                    </p>
                  </div>
                </div>
              </div>

              {/* How It Works */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">How Optional Catch-All Works:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">1.</span>
                    <span>Pattern: <code className="bg-white px-2 py-1 rounded border">/docs/[[...slug]]</code></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">2.</span>
                    <span>Matches: <code className="bg-white px-2 py-1 rounded border">/docs</code> (slug is undefined)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">3.</span>
                    <span>Also matches: <code className="bg-white px-2 py-1 rounded border">/docs/api/auth/jwt</code> (any depth)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">4.</span>
                    <span>Segments collected into <code className="bg-white px-2 py-1 rounded border">slug</code> array</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">5.</span>
                    <span>Perfect for nested docs, categories, or breadcrumb navigation</span>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded-lg p-8">
              <p className="text-red-700 text-lg">Document not found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
