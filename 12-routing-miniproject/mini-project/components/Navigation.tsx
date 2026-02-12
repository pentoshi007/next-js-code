// We need "use client" because we're using React hooks (useState) for interactivity
// Server components cannot use hooks or handle browser events like onClick
"use client";

import Link from "next/link";
// useState is a React hook that lets us add state to functional components
import { useState } from "react";

export default function Navigation() {
  // useState returns an array with two elements:
  // 1. The current state value (isMenuOpen) - initially false (menu is closed)
  // 2. A function to update the state (setIsMenuOpen)
  // When setIsMenuOpen is called, React re-renders the component with the new value
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle function: if menu is open, close it; if closed, open it
  // The ! operator flips the boolean value
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // sticky: keeps the nav fixed at the top when scrolling, BUT unlike 'fixed',
    // it does NOT remove the element from the normal document flow.
    // The element takes up its normal space in the layout until you scroll past it,
    // then it "sticks" to the top of the viewport.
    // top-0: sticks to the top of the viewport when scrolling
    // z-50: ensures the nav appears above other content when sticky
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-800">
              MyWebsite
            </Link>
          </div>
          {/* Desktop navigation - hidden on mobile (hidden), shown on medium screens and up (md:flex) */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="font-bold text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-bold text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="font-bold text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Contact
            </Link>
            <Link
              href="/examples"
              className="font-bold text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Examples
            </Link>
          </div>
          {/* Hamburger button - only visible on mobile (md:hidden hides it on medium screens and up) */}
          <div className="md:hidden relative">
            <button
              // onClick handler calls our toggle function when the button is clicked
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900"
              title="Toggle navigation menu"
              // aria-expanded tells screen readers whether the menu is open or closed
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {/* Conditional rendering: show X icon when open, hamburger icon when closed */}
              {isMenuOpen ? (
                // X (close) icon - shown when menu is open
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                // Hamburger (menu) icon - shown when menu is closed
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>

            {/* Mobile menu dropdown - positioned below the hamburger button */}
            {/* This is called "conditional rendering" - the && operator means:
                "if isMenuOpen is true, render the following JSX" */}
            {isMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                {/* Container for mobile menu items with padding and spacing */}
                <div className="py-2">
                  {/* Each link closes the menu when clicked using onClick={() => setIsMenuOpen(false)} */}
                  <Link
                    href="/"
                    className="block font-bold text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4 py-2 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="block font-bold text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4 py-2 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="block font-bold text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4 py-2 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
