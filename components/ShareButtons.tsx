'use client';

import React from 'react';
import { Twitter, Linkedin, Share2 } from 'lucide-react';

interface ShareButtonsProps {
  shareUrl: string;
  shareText: string;
}

export function ShareButtons({ shareUrl, shareText }: ShareButtonsProps) {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    // You could add a toast notification here
  };

  return (
    <div className="flex items-center space-x-4 pb-8 border-b border-gray-200 dark:border-gray-700">
      <span className="text-gray-600 dark:text-gray-300 font-semibold">Share:</span>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        <Twitter className="w-4 h-4 mr-2" />
        Twitter
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-3 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
      >
        <Linkedin className="w-4 h-4 mr-2" />
        LinkedIn
      </a>
      <button
        onClick={handleCopyLink}
        className="flex items-center px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
      >
        <Share2 className="w-4 h-4 mr-2" />
        Copy Link
      </button>
    </div>
  );
}
