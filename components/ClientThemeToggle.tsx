'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const ThemeToggle = dynamic(() => import('./ThemeToggle').then((mod) => ({ default: mod.ThemeToggle })), {
  ssr: false,
  loading: () => <div className="h-8 w-8" />,
});

export function ClientThemeToggle({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  return <ThemeToggle tone={tone} />;
}
