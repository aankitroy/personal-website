'use client';

import React, { useState } from 'react';
import { Linkedin, Link2, Twitter } from 'lucide-react';

interface ShareButtonsProps {
  shareUrl: string;
  shareText: string;
}

const item =
  'inline-flex items-center gap-2 border border-gray-900/15 px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-gray-700 transition-colors duration-500 hover:border-[#a8834a] hover:text-[#a8834a] dark:border-white/15 dark:text-gray-300';

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
    <div className="flex flex-wrap items-center gap-3 border-b border-gray-900/10 pb-8 dark:border-white/10">
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
