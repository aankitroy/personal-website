'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const ThemeToggle = dynamic(() => import('./ThemeToggle').then((mod) => ({ default: mod.ThemeToggle })), {
  ssr: false,
  loading: () => <div style={{ width: 36, height: 36 }} />,
});

export function ClientThemeToggle() {
  return <ThemeToggle />;
}
