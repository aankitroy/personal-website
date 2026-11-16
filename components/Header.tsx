'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { ClientThemeToggle } from './ClientThemeToggle';
import { BOOKING_URL, NAV } from './site';
import c from './chrome.module.css';

interface HeaderProps {
  currentPage?: 'home' | 'about' | 'blog' | 'testimonials';
  /** Kept for compatibility with older call sites; the floating nav adapts to every surface. */
  tone?: 'light' | 'dark';
}

/** A floating cream pill: serif wordmark, quiet links with the current page marked in stone, and the ink CTA. */
export function Header({ currentPage = 'home' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isEssay = pathname?.startsWith('/blog/') ?? false;
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile panel on Escape.
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMenuOpen]);

  // Bronze reading-progress hairline on essays.
  useEffect(() => {
    if (!isEssay) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = progressRef.current;
      if (!el) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      el.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [isEssay]);

  return (
    <>
      {isEssay && <span ref={progressRef} className="reading-progress" aria-hidden />}
      <header className={c.nav} data-scrolled={scrolled || isMenuOpen}>
        <Link href="/" className={`${c.brand} ${c.navBrand}`} aria-label="Aankit Roy, home">
          <span className={c.brandName}>Aankit Roy</span>
        </Link>
        <span className={c.navRule} aria-hidden />
        <nav className={c.navLinks} aria-label="Main">
          {NAV.map((item) => (
            <Link key={item.key} href={item.href} aria-current={currentPage === item.key ? 'page' : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <ClientThemeToggle />
        <button
          className={`${c.iconBtn} ${c.menuBtn}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
        </button>
        <a href={BOOKING_URL} className={c.cta}>
          <span className={c.ctaLabelLong}>Book a conversation</span>
          <span className={c.ctaLabelShort}>Book</span>
          <ArrowUpRight size={15} strokeWidth={1.75} aria-hidden />
        </a>
      </header>

      {isMenuOpen && (
        <nav id="mobile-nav" className={c.panel} aria-label="Mobile">
          <Link href="/" onClick={() => setIsMenuOpen(false)} aria-current={currentPage === 'home' ? 'page' : undefined}>
            Home <span>→</span>
          </Link>
          {NAV.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              aria-current={currentPage === item.key ? 'page' : undefined}
            >
              {item.label} <span>→</span>
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
