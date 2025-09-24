'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Mail, Linkedin, Twitter, Github } from 'lucide-react';
import { ClientThemeToggle } from './ClientThemeToggle';

interface HeaderProps {
  currentPage?: 'home' | 'about' | 'services' | 'blog' | 'testimonials';
}

export function Header({ currentPage = 'home' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/about', label: 'About', key: 'about' },
    { href: '/services', label: 'Services', key: 'services' },
    { href: '/blog', label: 'Blog', key: 'blog' },
    { href: '/testimonials', label: 'Testimonials', key: 'testimonials' },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Aankit Roy
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={
                  currentPage === item.key
                    ? "text-purple-600 font-semibold"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                }
              >
                {item.label}
              </Link>
            ))}
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a href="mailto:aankitroy1990@gmail.com" className="text-purple-600 hover:text-purple-700">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/aankit-roy-20515b35/" className="text-purple-600 hover:text-purple-700">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/AankitRoy" target="_blank" className="text-purple-600 hover:text-purple-700">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/aankitroy" target="_blank" className="text-purple-600 hover:text-purple-700">
                <Github className="w-5 h-5" />
              </a>
              <ClientThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ClientThemeToggle />
            <button 
              className="text-gray-600 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-200 dark:border-gray-700">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={
                  currentPage === item.key
                    ? "block text-purple-600 font-semibold"
                    : "block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              <a href="mailto:aankitroy1990@gmail.com" className="text-purple-600 hover:text-purple-700">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/aankit-roy-20515b35/" className="text-purple-600 hover:text-purple-700">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/AankitRoy" target="_blank" className="text-purple-600 hover:text-purple-700">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/aankitroy" target="_blank" className="text-purple-600 hover:text-purple-700">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
