'use client';

import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const { theme, toggleTheme } = useTheme();
  const color =
    tone === 'dark'
      ? 'text-evergreen-100/80 hover:text-white'
      : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100';

  return (
    <button
      onClick={toggleTheme}
      className={`flex h-8 w-8 items-center justify-center transition-colors ${color}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <Moon className="h-[18px] w-[18px]" strokeWidth={1.5} /> : <Sun className="h-[18px] w-[18px]" strokeWidth={1.5} />}
    </button>
  );
}
