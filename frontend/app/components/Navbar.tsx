'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-lg">📋</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-slate-900">DocLang Boba</h1>
              <p className="text-xs text-slate-500">Lelang Negara KPKNL</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Beranda
            </Link>
            <Link
              href="/lelang"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Lelang
            </Link>
            <Link
              href="#"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Tentang
            </Link>
            <Link
              href="#"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Kontak
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Beranda
            </Link>
            <Link
              href="/lelang"
              className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Lelang
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Tentang
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Kontak
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
