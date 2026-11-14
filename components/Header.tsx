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
    ? 'bg-evergreen-900 text-evergreen-50 border-evergreen-800'
    : 'bg-gray-50 text-gray-900 border-gray-200 dark:bg-gray-950 dark:text-gray-100 dark:border-gray-800';
  const link = onDark
    ? 'text-evergreen-100/80 hover:text-white'
    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100';
  const active = onDark ? 'text-white' : 'text-gray-900 dark:text-gray-100';

  return (
    <header className={`relative z-20 border-b ${base}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="font-serif text-[1.65rem] font-medium leading-none tracking-tight">
          Aankit Roy
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              aria-current={currentPage === item.key ? 'page' : undefined}
              className={`text-[15px] transition-colors ${currentPage === item.key ? active : link}`}
            >
              {item.label}
            </Link>
          ))}
          <ClientThemeToggle tone={tone} />
          <a
            href={BOOKING_URL}
            className={
              onDark
                ? 'rounded-full border border-brass-300/60 px-5 py-2 text-[15px] text-brass-100 transition-colors hover:bg-brass-300 hover:text-evergreen-950'
                : 'rounded-full bg-evergreen-800 px-5 py-2 text-[15px] text-white transition-colors hover:bg-evergreen-700 dark:bg-brass-300 dark:text-evergreen-950 dark:hover:bg-brass-200'
            }
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
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className={`border-t px-6 pb-8 pt-4 md:hidden ${onDark ? 'border-evergreen-800' : 'border-gray-200 dark:border-gray-800'}`} aria-label="Mobile">
          {NAV.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 font-serif text-2xl"
            >
              {item.label}
            </Link>
          ))}
          <a href={BOOKING_URL} className="mt-4 inline-block rounded-full bg-brass-300 px-5 py-2.5 text-evergreen-950">
            Book a conversation
          </a>
        </nav>
      )}
    </header>
  );
}
