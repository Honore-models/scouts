'use client';

import Link from 'next/link';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Avatar from '@/components/ui/Avatar';
import ThemeToggle from '@/components/ui/ThemeToggle';

const navLinks = [
  { label: 'Discover', href: '/discover' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Launch', href: '/launch' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loggedIn] = useState(false); // placeholder state

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Frosted glass backdrop — Apple HIG materials */}
      <div className="absolute inset-0 bg-[var(--color-bg-primary)]/80 backdrop-blur-xl border-b border-[var(--color-border-light)]" />

      <nav className="relative mx-auto flex h-14 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-[17px] text-[var(--color-text-primary)]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[var(--color-primary)]">
            <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" />
            <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          Scouts
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-[14px] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-[var(--transition-fast)] rounded-[var(--radius-sm)] hover:bg-[var(--color-bg-secondary)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          {loggedIn ? (
            <>
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">Dashboard</Button>
              </Link>
              <Avatar name="John Doe" size="sm" />
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" size="sm">Sign in</Button>
              </Link>
              <Link href="/signup">
                <Button variant="primary" size="sm">Get started</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-[var(--radius-sm)] hover:bg-[var(--color-bg-secondary)] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden relative border-t border-[var(--color-border-light)] bg-[var(--color-bg-primary)] animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 text-[15px] font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] rounded-[var(--radius-md)] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-[var(--color-border-light)] flex flex-col gap-2">
              {loggedIn ? (
                <Link href="/dashboard" onClick={() => setMobileOpen(false)}>
                  <Button variant="secondary" fullWidth>Dashboard</Button>
                </Link>
              ) : (
                <>
                  <Link href="/login" onClick={() => setMobileOpen(false)}>
                    <Button variant="secondary" fullWidth>Sign in</Button>
                  </Link>
                  <Link href="/signup" onClick={() => setMobileOpen(false)}>
                    <Button variant="primary" fullWidth>Get started</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
