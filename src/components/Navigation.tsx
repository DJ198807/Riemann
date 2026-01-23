"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-opacity-90 backdrop-blur-strong shadow-lg sticky top-0 z-50 animate-fadeInUp">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-4xl font-bold text-white animate-float">π</div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-yellow-300 transition-all duration-300 font-medium hover:scale-110 transform"
            >
              首页
            </Link>
            <Link
              href="/timeline"
              className="text-white hover:text-yellow-300 transition-all duration-300 font-medium hover:scale-110 transform"
            >
              时间线
            </Link>
            <Link
              href="/resources"
              className="text-white hover:text-yellow-300 transition-all duration-300 font-medium hover:scale-110 transform"
            >
              资源
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fadeInUp">
            <Link
              href="/"
              className="block py-2 text-white hover:text-yellow-300 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              首页
            </Link>
            <Link
              href="/timeline"
              className="block py-2 text-white hover:text-yellow-300 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              时间线
            </Link>
            <Link
              href="/resources"
              className="block py-2 text-white hover:text-yellow-300 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              资源
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
