'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import ThemeToggle with no SSR
const ThemeToggle = dynamic(() => import('./ThemeToggle').then(mod => ({ default: mod.ThemeToggle })), {
  ssr: false,
  loading: () => (
    <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 w-9 h-9 animate-pulse">
      {/* Loading placeholder */}
    </div>
  )
});

export function ClientThemeToggle() {
  return <ThemeToggle />;
}
