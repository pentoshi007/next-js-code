// 
// PRIVATE FOLDER EXAMPLE - SHARED COMPONENT
// File: app/_components/AuthCard.tsx
// 
// What are Private Folders?
// ==========================
// Private folders use underscore _ prefix to exclude them from routing
// 
// How it works:
// - Folder name: _components
// - The underscore prefix tells Next.js this is NOT a route
// - Files inside cannot be accessed via URL (e.g., /components/AuthCard won't work)
// - Only importable within the app directory
// 
// Why use private folders?
// 1. Keep reusable components organized
// 2. Co-locate logic with routes that use it
// 3. Avoid accidental route creation
// 4. Better code organization and clarity
// 5. Prevent URL clashing
// 
// Use cases:
// ✓ Shared components used by multiple pages
// ✓ UI components that shouldn't be accessible via URL
// ✓ Helper functions and utilities
// ✓ Hooks and state management
// ✓ Constants and configurations
//

import React from "react";

interface AuthCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  bgGradient: string;
  accentColor: string;
}

export function AuthCard({
  title,
  subtitle,
  children,
  bgGradient,
  accentColor,
}: AuthCardProps) {
  return (
    <div className={`min-h-screen bg-gradient-to-br ${bgGradient} flex items-center justify-center px-4 py-24`}>
      <div className="w-full max-w-md">
        {/* Main Card */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className={`text-3xl font-bold ${accentColor} mb-2`}>{title}</h1>
            <p className="text-gray-600">{subtitle}</p>
          </div>

          {/* Content */}
          {children}
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-3">📁 Private Folder Example</h3>
          <p className="text-sm text-gray-600">
            This component is in the <code className="bg-white px-2 py-1 rounded">_components</code> private folder
          </p>
          <p className="text-xs text-gray-500 mt-2">
            ✓ Not accessible via URL<br />
            ✓ Reusable across routes<br />
            ✓ Keeps code organized
          </p>
        </div>
      </div>
    </div>
  );
}
