import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ScouTTs — Discover the next big thing built by developers',
  description:
    'Discover innovative projects, tools and apps built by developers. Upvote your favorites and help great products grow.',
  keywords: [
    'developer projects',
    'startup projects',
    'developer tools',
    'SaaS',
    'AI tools',
    'web apps',
    'mobile apps',
    'discover products',
    'indie developers',
  ],
  openGraph: {
    title: 'ScouTTs — Discover the next big thing built by developers',
    description:
      'Discover innovative projects, tools and apps built by developers. Upvote your favorites and help great products grow.',
    images: ['/landing/hoobank.png'],
    type: 'website',
    siteName: 'ScouTTs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ScouTTs — Discover the next big thing built by developers',
    description:
      'Discover innovative projects, tools and apps built by developers. Upvote your favorites and help great products grow.',
    images: ['/landing/hoobank.png'],
  },
  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' },
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
    apple: '/logo.svg',
    shortcut: '/logo.svg',
  },
  metadataBase: new URL('https://scoutts.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <meta name="theme-color" content="#315BFF" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
