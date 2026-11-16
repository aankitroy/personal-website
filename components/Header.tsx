'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { ClientThemeToggle } from './ClientThemeToggle';
import { BOOKING_URL, NAV } from './site';

interface HeaderProps {
  currentPage?: 'home' | 'about' | 'blog' | 'testimonials';
  /** "dark" sits on the evergreen hero band; "light" sits on the page background. */
  tone?: 'light' | 'dark';
}

export function Header({ currentPage = 'home', tone = 'light' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onDark = tone === 'dark';

  const base = onDark
    ? 'bg-[#0f2a22]/95 text-[#f4f3ee] border-white/10'
    : 'bg-gray-50/90 text-gray-900 border-gray-900/10 dark:bg-gray-950/90 dark:text-gray-100 dark:border-white/10';
  const link = onDark
    ? 'text-[#f4f3ee]/70 hover:text-white'
    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100';
  const active = onDark ? 'text-white' : 'text-gray-900 dark:text-gray-100';
  const cta = onDark
    ? 'border-[#d9c49a]/60 text-[#f4f3ee] hover:bg-[#d9c49a] hover:text-[#0a1d17]'
    : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-gray-50 dark:border-brass-300/70 dark:text-gray-100 dark:hover:bg-brass-300 dark:hover:text-evergreen-950';

  return (
    <header className={`sticky top-0 z-30 border-b px-[clamp(20px,5vw,80px)] backdrop-blur-md ${base}`}>
      <div className="mx-auto flex max-w-[1240px] items-center justify-between py-5">
        <Link href="/" className="font-luxe text-[1.3rem] font-medium uppercase leading-none tracking-[0.22em]">
          Aankit Roy
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              aria-current={currentPage === item.key ? 'page' : undefined}
              className={`text-[14px] tracking-[0.02em] transition-colors duration-500 ${currentPage === item.key ? active : link}`}
            >
              {item.label}
            </Link>
          ))}
          <ClientThemeToggle tone={tone} />
          <a
            href={BOOKING_URL}
            className={`border px-5 py-3 text-[12px] font-medium uppercase tracking-[0.16em] transition-colors duration-500 ${cta}`}
          >
            Book a conversation
          </a>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ClientThemeToggle tone={tone} />
          <button
            className="p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="h-6 w-6" strokeWidth={1.25} /> : <Menu className="h-6 w-6" strokeWidth={1.25} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className={`border-t pb-8 pt-4 md:hidden ${onDark ? 'border-white/10' : 'border-gray-900/10 dark:border-white/10'}`} aria-label="Mobile">
          {NAV.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 font-luxe text-3xl font-light"
            >
              {item.label}
            </Link>
          ))}
          <a href={BOOKING_URL} className="mt-5 inline-block bg-[#d9c49a] px-6 py-4 text-[12px] font-medium uppercase tracking-[0.16em] text-[#0a1d17]">
            Book a conversation
          </a>
        </nav>
      )}
    </header>
  );
}
