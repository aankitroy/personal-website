import React from 'react';
import Link from 'next/link';
import { BOOKING_URL, EMAIL, NAV, NEWSLETTER_URL, SOCIAL } from './site';

const colHead = 'mb-5 text-[11px] font-medium uppercase tracking-[0.28em] text-[#d9c49a]';
const colLink = 'block py-1.5 text-[14px] text-[#f4f3ee]/70 transition-colors duration-500 hover:text-white';

/** `compact` drops the closing call to action, for pages that end with their own. */
export function SiteFooter({ compact = false }: { compact?: boolean }) {
  return (
    <footer className="bg-[#0a1d17] px-[clamp(20px,5vw,80px)] text-[#f4f3ee]/60">
      <div className="mx-auto max-w-[1240px]">
        {!compact && (
          <div className="border-b border-white/10 py-24 lg:py-32">
            <p className="max-w-3xl font-luxe text-[clamp(38px,4.4vw,60px)] font-light leading-[1.04] text-[#f4f3ee]">
              If AI is on your board&rsquo;s agenda,
              <br />
              <em className="text-[#d9c49a]">let&rsquo;s talk before the roadmap is set.</em>
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5">
              <a
                href={BOOKING_URL}
                className="bg-[#d9c49a] px-8 py-[19px] text-[12.5px] font-medium uppercase tracking-[0.18em] text-[#0a1d17] transition-colors duration-500 hover:bg-[#ebdcbc]"
              >
                Book a conversation
              </a>
              <a href={`mailto:${EMAIL}`} className="border-b border-[#d9c49a]/50 pb-1.5 text-[15px] text-[#f4f3ee]/80 hover:text-white">
                {EMAIL}
              </a>
            </div>
          </div>
        )}

        <div className="flex flex-wrap justify-between gap-12 pt-20">
          <div className="max-w-xs">
            <Link href="/" className="font-luxe text-[1.3rem] font-medium uppercase leading-none tracking-[0.22em] text-[#f4f3ee]">
              Aankit Roy
            </Link>
            <p className="mt-5 text-[14px] leading-relaxed">AI strategy and production AI systems for founders, CEOs and boards.</p>
          </div>

          <nav className="flex gap-16 sm:gap-24" aria-label="Footer">
            <div>
              <h4 className={colHead}>Site</h4>
              <Link href="/" className={colLink}>Home</Link>
              {NAV.map((n) => (
                <Link key={n.key} href={n.href} className={colLink}>{n.label}</Link>
              ))}
            </div>
            <div>
              <h4 className={colHead}>Elsewhere</h4>
              {SOCIAL.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={colLink}>{s.label}</a>
              ))}
              <a href={NEWSLETTER_URL} target="_blank" rel="noopener noreferrer" className={colLink}>Newsletter</a>
            </div>
          </nav>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-3 border-t border-white/10 py-8 text-[12px] tracking-[0.04em] text-[#f4f3ee]/45 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Aankit Roy</p>
          <p>Working with leadership teams worldwide</p>
        </div>
      </div>
    </footer>
  );
}
