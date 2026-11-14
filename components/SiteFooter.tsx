import React from 'react';
import Link from 'next/link';
import { BOOKING_URL, EMAIL, NAV, NEWSLETTER_URL, SOCIAL } from './site';

export function SiteFooter() {
  return (
    <footer className="bg-evergreen-950 text-evergreen-100">
      <div className="mx-auto max-w-6xl px-6 pb-12 pt-24 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="max-w-xl font-serif text-display-sm text-white sm:text-display-md">
              If AI is on your board’s agenda, let’s talk before the roadmap is set.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={BOOKING_URL}
                className="rounded-full bg-brass-300 px-7 py-3.5 text-[15px] font-medium text-evergreen-950 transition-colors hover:bg-brass-200"
              >
                Book a conversation
              </a>
              <a href={`mailto:${EMAIL}`} className="text-[15px] text-evergreen-100/80 underline decoration-evergreen-100/30 underline-offset-4 hover:text-white">
                {EMAIL}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 text-[15px]">
            <ul className="space-y-3">
              <li><Link href="/" className="text-evergreen-100/70 hover:text-white">Home</Link></li>
              {NAV.map((n) => (
                <li key={n.key}>
                  <Link href={n.href} className="text-evergreen-100/70 hover:text-white">{n.label}</Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-evergreen-100/70 hover:text-white">{s.label}</a>
                </li>
              ))}
              <li>
                <a href={NEWSLETTER_URL} target="_blank" rel="noopener noreferrer" className="text-evergreen-100/70 hover:text-white">Newsletter</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 flex flex-col justify-between gap-4 border-t border-evergreen-800 pt-8 text-sm text-evergreen-100/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Aankit Roy</p>
          <p>Working with leadership teams worldwide</p>
        </div>
      </div>
    </footer>
  );
}
