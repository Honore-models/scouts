'use client';

import Link from 'next/link';
import { type ReactNode } from 'react';

const navLinks = [
  { label: 'Discover', href: '/discover' },
  { label: 'Trending', href: '/trending' },
  { label: 'Developers', href: '/developers' },
  { label: 'Categories', href: '/categories', dropdown: true },
  { label: 'About', href: '/about' },
];

const footerCols = {
  Product: ['Discover', 'Trending', 'Developers', 'Categories', 'Ship a product'],
  Company: ['About Us', 'Blog', 'Careers', 'Press', 'Contact', 'Brand assets'],
  Resources: ['Help Center', 'Guidelines', 'For Developers', 'API', 'Changelog', 'Status'],
  Legal: ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Community Rules'],
};

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ background: 'var(--bg-page)', minHeight: '100vh' }}>
      {/* Navbar */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(237,238,248,0.85)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border-color)' }}>
        <nav style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56, padding: '0 20px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" fill="white" /></svg>
            </div>
            <span style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-heading)' }}>Scoutts</span>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} style={{ padding: '6px 12px', fontSize: 14, fontWeight: 500, color: 'var(--text-muted)', textDecoration: 'none', borderRadius: 8 }}>
                {link.label}
                {link.dropdown && <span style={{ marginLeft: 4, fontSize: 10 }}>▾</span>}
              </Link>
            ))}
          </div>
          <div style={{ position: 'relative', width: 220 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-faint)" strokeWidth="2" strokeLinecap="round" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }}>
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input type="text" placeholder="search project, developers..." style={{ width: '100%', height: 36, paddingLeft: 36, paddingRight: 12, background: 'white', border: '1px solid var(--border-color)', borderRadius: 9999, fontSize: 13, color: 'var(--text-heading)', outline: 'none' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Link href="/login" style={{ padding: '8px 16px', fontSize: 14, fontWeight: 500, color: 'var(--text-heading)', textDecoration: 'none', borderRadius: 8 }}>Login</Link>
            <Link href="/signup" style={{ padding: '8px 20px', fontSize: 14, fontWeight: 600, color: 'white', background: 'var(--color-primary)', textDecoration: 'none', borderRadius: 8 }}>Sign up</Link>
          </div>
        </nav>
      </header>

      {/* Content */}
      <main style={{ minHeight: 'calc(100vh - 56px)' }}>{children}</main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border-color)', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr repeat(4, 1fr)', gap: 32 }}>
            <div>
              <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', marginBottom: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: 7, background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" fill="white" /></svg>
                </div>
                <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-heading)' }}>Scoutts</span>
              </Link>
              <p style={{ fontSize: 13, color: 'var(--color-primary)', fontWeight: 500, margin: '0 0 12px' }}>where developers ship and<br />the word discovers.</p>
              <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: 200, margin: '0 0 16px' }}>
                Scouts is the home for innovative projects and the people behind them.
              </p>
              <Link href="/signup" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 18px', background: 'var(--color-primary)', color: 'white', fontWeight: 600, fontSize: 13, borderRadius: 8, textDecoration: 'none' }}>
                Join Scoutts →
              </Link>
            </div>
            {Object.entries(footerCols).map(([cat, links]) => (
              <div key={cat}>
                <h3 style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: 1, color: 'var(--text-heading)', margin: '0 0 12px' }}>{cat}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {links.map((l) => (
                    <li key={l} style={{ marginBottom: 6 }}>
                      <a href="#" style={{ fontSize: 12, color: 'var(--text-muted)', textDecoration: 'none' }}>{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: 16 }}>
              {['GitHub', 'X', 'LinkedIn'].map((s) => (
                <a key={s} href="#" style={{ fontSize: 13, color: 'var(--text-faint)', textDecoration: 'none' }}>{s[0]}</a>
              ))}
            </div>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--color-primary)', border: 'none', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="18 15 12 9 6 15" /></svg>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
