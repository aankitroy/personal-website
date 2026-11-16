'use client';

import React, { useState } from 'react';
import { Linkedin, Link2, Twitter } from 'lucide-react';

interface ShareButtonsProps {
  shareUrl: string;
  shareText: string;
}

// Quiet pills in the site's language: paper fill, 1px ring, ink on hover.
const item =
  'inline-flex h-8 items-center gap-2 rounded-full bg-[var(--paper)] px-3.5 text-[13px] font-medium text-[var(--fg-2)] shadow-[0_0_0_1px_var(--line-strong)] transition-colors duration-200 hover:bg-[var(--bg-muted)] hover:text-[var(--fg)]';

export function ShareButtons({ shareUrl, shareText }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be unavailable (permissions, insecure context); nothing else to do.
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2 border-b border-[var(--line-strong)] pb-8">
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={item}
      >
        <Twitter className="h-3.5 w-3.5" strokeWidth={1.5} />
        Share on X
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={item}
      >
        <Linkedin className="h-3.5 w-3.5" strokeWidth={1.5} />
        LinkedIn
      </a>
      <button type="button" onClick={handleCopyLink} className={item} aria-live="polite">
        <Link2 className="h-3.5 w-3.5" strokeWidth={1.5} />
        {copied ? 'Link copied' : 'Copy link'}
      </button>
    </div>
  );
}
