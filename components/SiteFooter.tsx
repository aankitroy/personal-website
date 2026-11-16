import React from 'react';
import Link from 'next/link';
import { EMAIL, NAV, NEWSLETTER_URL, SOCIAL } from './site';
import c from './chrome.module.css';

/** The closing call to action lives in each page's own contact block; the footer is navigation and the wordmark. */
export function SiteFooter() {
  return (
    <footer className={c.footer}>
      <div className={c.footInner}>
        <div className={c.footTop}>
          <div className={c.footBrand}>
            <Link href="/" className={c.brand}>
              <span className={c.brandName}>Aankit Roy</span>
            </Link>
            <p className={c.footBlurb}>
              AI strategy and production AI systems for founders, CEOs and boards. Twelve years of building software used by millions.
            </p>
            <a href={`mailto:${EMAIL}`} className={c.footEmail}>
              {EMAIL}
            </a>
          </div>

          <nav className={c.footCol} aria-label="Footer">
            <h4>Site</h4>
            <Link href="/">Home</Link>
            {NAV.map((n) => (
              <Link key={n.key} href={n.href}>
                {n.label}
              </Link>
            ))}
          </nav>

          <div className={c.footCol}>
            <h4>Elsewhere</h4>
            {SOCIAL.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
            <a href={NEWSLETTER_URL} target="_blank" rel="noopener noreferrer">
              Newsletter
            </a>
          </div>
        </div>

        <div className={c.footBar}>
          <p>&copy; {new Date().getFullYear()} Aankit Roy. All rights reserved.</p>
          <p>Built for production, not for demos.</p>
        </div>
      </div>
      <p className={c.wordmark} aria-hidden>
        Aankit Roy
      </p>
    </footer>
  );
}
