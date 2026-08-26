'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';

const footerColumns = {
  Product: [
    { label: 'Discover', href: '/discover' },
    { label: 'Trending', href: '/discover?sort=trending' },
    { label: 'Developers', href: '/developers' },
    { label: 'Categories', href: '/categories' },
    { label: 'Collections', href: '/collections' },
    { label: 'Ship a product', href: '/launch' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
    { label: 'Contact', href: '/contact' },
    { label: 'Brand assets', href: '/brand' },
  ],
  Resources: [
    { label: 'Help Center', href: '/help' },
    { label: 'Guidelines', href: '/guidelines' },
    { label: 'For Developers', href: '/developers' },
    { label: 'API', href: '/api' },
    { label: 'Changelog', href: '/changelog' },
    { label: 'Status', href: '/status' },
  ],
  Legal: [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Community Rules', href: '/rules' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-light)] bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" fill="currentColor" />
                </svg>
              </div>
              <span className="text-[16px] font-bold text-[var(--color-text-primary)]">Scoutts</span>
            </Link>
            <p className="text-[13px] text-[var(--color-primary)] font-medium">where developers ship and<br />the word discovers.</p>
            <p className="mt-3 text-[12px] text-[var(--color-text-secondary)] leading-relaxed max-w-[200px]">
              Scouts is the home for innovative projects and the people behind them. Build in public. Get discovered
            </p>
            <div className="mt-4">
              <Link href="/signup">
                <Button variant="primary" size="sm" icon={
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                }>
                  Join Scoutts
                </Button>
              </Link>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerColumns).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-[12px] font-bold uppercase tracking-wider text-[var(--color-text-primary)] mb-3">
                {category.toUpperCase()}
              </h3>
              <ul className="space-y-1.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[12px] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[var(--color-border-light)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {['GitHub', 'X', 'LinkedIn'].map((social) => (
              <a key={social} href="#" className="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors" aria-label={social}>
                <span className="text-[13px] font-medium">{social[0]}</span>
              </a>
            ))}
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center hover:bg-[var(--color-primary-hover)] transition-colors"
            aria-label="Back to top"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="18 15 12 9 6 15" /></svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
