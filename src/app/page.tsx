'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

/* ═══════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════ */

const navLinks = [
  { label: 'Discover', href: '/discover', active: true },
  { label: 'Trending', href: '/discover?sort=trending' },
  { label: 'Developers', href: '/developers' },
  { label: 'Categories', href: '/categories', dropdown: true },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
];

const categoryTabs = [
  { id: 'foryou', label: 'For you', icon: true },
  { id: 'all', label: 'All' },
  { id: 'saas', label: 'SaaS' },
  { id: 'ai', label: 'AI' },
  { id: 'devtools', label: 'Developer tools' },
  { id: 'web', label: 'Web Apps' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'design', label: 'Design' },
];

const statCards = [
  { value: '12K+', label: 'projects shipped', color: '#57D736', iconBg: '#57D736', icon: 'arrow' as const },
  { value: '25K+', label: 'developers', color: '#315BFF', iconBg: '#315BFF', icon: 'users' as const },
  { value: '4.8', label: 'Average rating', color: '#9361D5', iconBg: '#9361D5', icon: 'star' as const },
];

const products = [
  { id: '1', name: 'FreelanceFlow', tagline: 'Manage your freelance business like a pro.', maker: 'yochanan', image: '/landing/freelance.png', large: true },
  { id: '2', name: 'DeliciousFood', tagline: 'All in one platform that helps restaurants grow from dashboard to doorstep', maker: 'yochanan', image: '/landing/delicious.png' },
  { id: '3', name: 'Kartz', tagline: 'Art selling website', maker: 'Mandrake', image: '/landing/kartz.png' },
  { id: '4', name: 'CodeSnap', tagline: 'Beautiful code screenshots in one go', maker: 'yochanan', image: '/landing/code.png' },
  { id: '5', name: 'CodeSnap', tagline: 'Beautiful code screenshots in one go', maker: 'yochanan', image: '/landing/code.png' },
  { id: '6', name: 'CodeSnap', tagline: 'Beautiful code screenshots in one go', maker: 'yochanan', image: '/landing/code.png' },
  { id: '7', name: 'CodeSnap', tagline: 'Beautiful code screenshots in one go', maker: 'yochanan', image: '/landing/code.png' },
  { id: '8', name: 'CodeSnap', tagline: 'Beautiful code screenshots in one go', maker: 'yochanan', image: '/landing/code.png' },
];

const footerColumns = [
  { title: 'Product', links: ['Discover', 'Trending', 'Developers', 'Categories', 'Collections', 'Ship a product'] },
  { title: 'Company', links: ['About Us', 'Blog', 'Careers', 'Press', 'Contact', 'Brand assets'] },
  { title: 'Resources', links: ['Help Center', 'Guidelines', 'For Developers', 'API', 'Changelog', 'Status'] },
  { title: 'Legal', links: ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Community Rules'] },
];

/* ═══════════════════════════════════════════════════════════════
   ICONS (inline SVG, clean outline style)
   ═══════════════════════════════════════════════════════════════ */

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8f93a3" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4.2-4.2" />
    </svg>
  );
}

function StarIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m12 2.6 2.8 6 6.5.8-4.8 4.5 1.2 6.5-5.7-3.2-5.7 3.2 1.2-6.5-4.8-4.5 6.5-.8L12 2.6Z" />
    </svg>
  );
}

function ArrowUpIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 19V5" />
      <path d="m5 12 7-7 7 7" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.86" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M4 6h10" />
      <path d="M4 12h10" />
      <path d="M4 18h10" />
      <path d="M19 5v.01" />
      <path d="M19 11v.01" />
      <path d="M19 17v.01" />
    </svg>
  );
}

function StatIcon({ type }: { type: 'arrow' | 'users' | 'star' }) {
  if (type === 'users') return <UsersIcon />;
  if (type === 'star') return <StarIcon />;
  return <ArrowUpIcon />;
}

/* ═══════════════════════════════════════════════════════════════
   SHARED PIECES
   ═══════════════════════════════════════════════════════════════ */

function VoteStats({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex items-center ${compact ? 'gap-1.5 text-[12px]' : 'gap-0 text-[16px]'} font-medium text-[#555]`}>
      <span className={`flex items-center gap-1 ${compact ? '' : 'px-3.5'}`}>
        <ArrowUpIcon className="text-[#57D736]" />
        <span>482</span>
      </span>
      <span className={`${compact ? 'h-3.5' : 'h-6'} w-px bg-black/15`} />
      <span className={`flex items-center gap-1 ${compact ? '' : 'px-3.5'}`}>
        <CommentIcon />
        <span>68</span>
      </span>
      <span className={`${compact ? 'h-3.5' : 'h-6'} w-px bg-black/15`} />
      <span className={`flex items-center gap-1 ${compact ? '' : 'px-3.5'}`}>
        <StarIcon className="text-[#111]" />
        <span>4.8</span>
      </span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════ */

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState('foryou');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailLoading, setEmailLoading] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleEmailSubmit = () => {
    setEmailError('');
    if (!email) {
      setEmailError('Please enter your email address');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailLoading(true);
    setTimeout(() => {
      setEmailLoading(false);
      setEmailSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen overflow-hidden text-[#111111]">
      {/* ── Background gradient ── */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg, #F8F6FF 0%, #F2EEFF 15%, #F0ECFF 30%, #EDE8FF 50%, #E8E0FF 70%, #E4DAFF 100%)',
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 85% 50%, rgba(120,100,240,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 70% 80%, rgba(80,60,220,0.10) 0%, transparent 60%)',
        }}
      />

      {/* ════════════════════════════════════════════════════════
          NAVBAR
          ════════════════════════════════════════════════════════ */}
      <header className="sticky top-0 z-50 border-b border-black/[0.04] bg-white/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-[56px] max-w-[1320px] items-center justify-between px-5 sm:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-[#111] no-underline">
            <Image src="/logo.svg" alt="ScouTTs" width={32} height={32} unoptimized />
            <span className="text-[17px] font-extrabold tracking-tight">ScouTTs</span>
          </Link>

          {/* Nav links */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center gap-1 rounded-lg px-3 py-1.5 text-[14px] font-medium transition-colors duration-150 ${
                  link.active
                    ? 'bg-white text-[#111] shadow-[0_1px_6px_rgba(0,0,0,0.08)]'
                    : 'text-[#555] hover:bg-white/60 hover:text-[#111]'
                }`}
              >
                {link.label}
                {link.dropdown && <ChevronDown />}
              </Link>
            ))}
          </div>

          {/* Search */}
          <div className="hidden w-full max-w-[280px] px-4 md:block">
            <label className="relative block">
              <span className="absolute left-3 top-1/2 -translate-y-1/2"><SearchIcon /></span>
              <input
                aria-label="Search projects and developers"
                placeholder="search project , developers ........"
                className="h-9 w-full rounded-lg border border-black/10 bg-white/60 pl-9 pr-3 text-[13px] text-[#111] placeholder:text-[#8f93a3] outline-none focus:border-[#315BFF]/30 focus:bg-white focus:ring-2 focus:ring-[#315BFF]/15"
              />
            </label>
          </div>

          {/* Auth buttons */}
          <div className="flex items-center gap-2.5">
            <Link href="/login" className="rounded-lg border border-black/12 bg-white px-4 py-1.5 text-[13px] font-medium text-[#111] transition-colors duration-150 hover:bg-gray-50">
              Login
            </Link>
            <Link href="/signup" className="rounded-lg bg-[#315BFF] px-4.5 py-1.5 text-[13px] font-medium text-white shadow-[0_2px_8px_rgba(49,91,255,0.25)] transition-colors duration-150 hover:bg-[#254DE8]">
              Sign up
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* ════════════════════════════════════════════════════════
            BANNER TAGLINE
            ════════════════════════════════════════════════════════ */}
        <section className="mx-auto max-w-[1320px] px-5 pt-6 sm:px-8">
          <div className="flex items-center gap-2.5">
            <span className="text-[18px] text-[#315BFF]">&#9733;</span>
            <p className="text-[15px] font-medium text-[#111]">where you ship and we market</p>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            HERO
            ════════════════════════════════════════════════════════ */}
        <section className="mx-auto max-w-[1320px] px-5 pt-10 pb-14 sm:px-8">
          <div className="mx-auto max-w-[720px] text-center">
            <h1 className="text-[36px] font-bold leading-[1.12] tracking-tight text-[#111] sm:text-[44px] lg:text-[50px]">
              Discover the next{' '}
              <span className="bg-gradient-to-r from-[#315BFF] to-[#7958FF] bg-clip-text text-transparent">
                big thing
              </span>{' '}
              built by developers.
            </h1>
            <p className="mx-auto mt-5 max-w-[480px] text-[16px] leading-relaxed text-[#555] sm:text-[17px]">
              Explore innovative projects, tools and apps
              <br className="hidden sm:block" />
              upvote your favorites and help great products grow.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3.5">
              <Link
                href="/discover"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#315BFF] px-5.5 text-[14px] font-medium text-white shadow-[0_3px_10px_rgba(49,91,255,0.3)] transition-colors duration-150 hover:bg-[#254DE8]"
              >
                Explore projects <ArrowRightIcon />
              </Link>
              <Link
                href="/launch"
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-black/15 bg-white/80 px-5.5 text-[14px] font-medium text-[#111] transition-colors duration-150 hover:bg-white"
              >
                Ship your product <ExternalIcon />
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            PRODUCT OF THE DAY
            ════════════════════════════════════════════════════════ */}
        <section className="mx-auto max-w-[1320px] px-5 pb-16 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[260px_1fr_220px]">
            {/* Left: Product Info */}
            <div className="order-2 lg:order-1 lg:pt-4">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#EEF2FF] px-3.5 py-1.5 text-[13px] font-semibold text-[#315BFF]">
                <StarIcon className="h-3.5 w-3.5" />
                Product of the day
              </div>
              <h2 className="mt-6 text-[28px] font-extrabold text-[#111]">Hoobank</h2>
              <p className="mt-2.5 text-[16px] font-medium leading-snug text-[#555]">
                Next generation<br />payment method
              </p>
              <p className="mt-4 text-[14px] font-medium text-[#555]">by awk</p>
              <div className="mt-5 inline-flex h-[48px] items-center rounded-xl border border-black/[0.07] bg-white/60 px-3.5 shadow-sm">
                <VoteStats />
              </div>
            </div>

            {/* Center: Hoobank Image */}
            <div className="order-1 lg:order-2">
              <Image
                src="/hoobank.png"
                alt="Hoobank — next generation payment method"
                width={720}
                height={480}
                priority
                className="h-auto w-full rounded-xl"
              />
            </div>

            {/* Right: Stats */}
            <div className="order-3 flex flex-col gap-4">
              {statCards.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/50 bg-white/45 p-4 shadow-[0_1px_4px_rgba(0,0,0,0.04)] backdrop-blur-sm">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: stat.iconBg }}
                  >
                    <StatIcon type={stat.icon} />
                  </div>
                  <p className="mt-4 text-[24px] font-extrabold leading-none text-[#111]">{stat.value}</p>
                  <p className="mt-1 text-[13px] font-medium text-[#555]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            CATEGORY TABS
            ════════════════════════════════════════════════════════ */}
        <section className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="flex items-center justify-between gap-3 border-b border-black/[0.06] pb-3">
            <div className="flex gap-0.5 overflow-x-auto">
              {categoryTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3.5 py-2 text-[14px] font-medium transition-colors duration-150 ${
                    activeTab === tab.id
                      ? 'bg-white text-[#111] shadow-[0_1px_4px_rgba(0,0,0,0.06)]'
                      : 'text-[#666] hover:bg-white/50 hover:text-[#333]'
                  }`}
                >
                  {tab.icon && <StarIcon className="text-[#315BFF]" />}
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="flex shrink-0 items-center gap-2.5">
              <button
                type="button"
                className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-black/10 bg-white/60 px-3 text-[13px] font-medium text-[#555]"
              >
                Trending
                <ChevronDown />
              </button>
              <button
                type="button"
                aria-label="Switch to list view"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-black/10 bg-white/60 text-[#555]"
              >
                <ListIcon />
              </button>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            PROJECT GRID
            ════════════════════════════════════════════════════════ */}
        <section className="mx-auto max-w-[1320px] px-5 py-7 sm:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {/* FreelanceFlow — large visual card */}
            <Link
              href="/product/1"
              className="group overflow-hidden rounded-xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)]"
            >
              <div className="relative h-[200px] w-full overflow-hidden bg-slate-900">
                <Image
                  src="/landing/freelance.png"
                  alt="FreelanceFlow preview"
                  fill
                  className="object-cover"
                  sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw"
                />
              </div>
            </Link>

            {/* DeliciousFood — split card */}
            <Link
              href="/product/2"
              className="group grid min-h-[190px] grid-cols-[1fr_55%] overflow-hidden rounded-xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] max-sm:grid-cols-1"
            >
              <div className="flex flex-col justify-center p-4">
                <h3 className="text-[15px] font-semibold text-[#111]">DeliciousFood</h3>
                <p className="mt-2 line-clamp-2 text-[12px] leading-snug text-[#666]">
                  All in one platform that helps restaurants grow from dashboard to doorstep
                </p>
                <p className="mt-2 text-[11px] text-[#999]">by yochanan</p>
                <div className="mt-2"><VoteStats compact /></div>
              </div>
              <div className="relative min-h-[130px] bg-slate-950 max-sm:order-first">
                <Image src="/landing/delicious.png" alt="DeliciousFood preview" fill className="object-cover" sizes="(min-width:1280px) 18vw, 50vw" />
              </div>
            </Link>

            {/* Kartz — split card */}
            <Link
              href="/product/3"
              className="group grid min-h-[190px] grid-cols-[1fr_55%] overflow-hidden rounded-xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] max-sm:grid-cols-1"
            >
              <div className="flex flex-col justify-center p-4">
                <h3 className="text-[15px] font-semibold text-[#111]">Kartz</h3>
                <p className="mt-2 line-clamp-2 text-[12px] leading-snug text-[#666]">Art selling website</p>
                <p className="mt-2 text-[11px] text-[#999]">by Mandrake</p>
                <div className="mt-2"><VoteStats compact /></div>
              </div>
              <div className="relative min-h-[130px] bg-slate-950 max-sm:order-first">
                <Image src="/landing/kartz.png" alt="Kartz preview" fill className="object-cover" sizes="(min-width:1280px) 18vw, 50vw" />
              </div>
            </Link>

            {/* CodeSnap cards — repeated as shown in reference */}
            {[4, 5, 6, 7, 8].map((id) => (
              <Link
                key={id}
                href={`/product/${id}`}
                className="group grid min-h-[170px] grid-cols-[1fr_55%] overflow-hidden rounded-xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] max-sm:grid-cols-1"
              >
                <div className="flex flex-col justify-center p-4">
                  <h3 className="text-[15px] font-semibold text-[#111]">CodeSnap</h3>
                  <p className="mt-2 line-clamp-2 text-[12px] leading-snug text-[#666]">
                    Beautiful code screenshots in one go
                  </p>
                  <p className="mt-2 text-[11px] text-[#999]">by yochanan</p>
                  <div className="mt-2"><VoteStats compact /></div>
                </div>
                <div className="relative min-h-[130px] bg-slate-950 max-sm:order-first">
                  <Image src="/landing/code.png" alt="CodeSnap preview" fill className="object-cover" sizes="(min-width:1280px) 18vw, 50vw" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            COMMUNITY / LOGIN CTA
            ════════════════════════════════════════════════════════ */}
        <section className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[400px_1fr]">
            {/* Left: Auth */}
            <div>
              <div className="inline-flex items-center gap-2.5 rounded-2xl bg-[#EEF2FF] px-3.5 py-2 text-[14px] font-medium text-[#555]">
                <UsersIcon />
                Join the community
                <div className="flex -space-x-2">
                  <span className="grid h-5.5 w-5.5 place-items-center rounded-full bg-[#F0B48F] text-[8px] font-bold text-white ring-2 ring-[#EEF2FF]">A</span>
                  <span className="grid h-5.5 w-5.5 place-items-center rounded-full bg-[#111] text-[8px] font-bold text-white ring-2 ring-[#EEF2FF]">M</span>
                  <span className="grid h-5.5 w-5.5 place-items-center rounded-full bg-[#315BFF] text-[7px] font-bold text-white ring-2 ring-[#EEF2FF]">10K</span>
                </div>
              </div>

              <h2 className="mt-6 text-[30px] font-medium leading-[1.25] text-[#111] sm:text-[34px]">
                Login or sign up<br />
                to unlock the best<br />
                of <span className="font-semibold text-[#315BFF]">ScouTTs</span>
              </h2>
              <p className="mt-3.5 max-w-[320px] text-[14px] leading-relaxed text-[#666]">
                Save your favorite projects, follow developers, and get personalized recommendations.
              </p>

              <div className="mt-5 max-w-[340px]">
                {/* Google */}
                <button
                  type="button"
                  className="flex h-[46px] w-full items-center justify-center gap-2.5 rounded-xl border border-black/10 bg-white text-[14px] font-semibold text-[#111] shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-colors duration-150 hover:bg-gray-50"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Continue with Google
                </button>

                {/* Apple */}
                <button
                  type="button"
                  className="mt-2.5 flex h-[46px] w-full items-center justify-center gap-2.5 rounded-xl border border-black/10 bg-white text-[14px] font-semibold text-[#111] shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-colors duration-150 hover:bg-gray-50"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.7 19.5c-.8 1.2-1.7 2.4-3 2.5-1.3 0-1.8-.8-3.3-.8s-2 .8-3.3.8c-1.3.1-2.3-1.3-3.1-2.5-1.7-2.5-3-7-1.3-10.1.9-1.5 2.4-2.5 4.1-2.5 1.3 0 2.5.9 3.3.9s2.3-1.1 3.8-.9c.7 0 2.5.3 3.6 2-3.2 1.9-2.7 6.4.6 7.7-.3.8-.7 1.8-1.4 2.9ZM13 3.5c.7-.8 1.9-1.5 2.9-1.5.1 1.2-.3 2.4-1 3.2-.7.9-1.8 1.5-3 1.4-.1-1.1.4-2.3 1.1-3.1Z" />
                  </svg>
                  Continue with Apple
                </button>

                {/* Divider */}
                <div className="my-5 flex items-center gap-5">
                  <div className="h-px flex-1 bg-black/12" />
                  <span className="text-[14px] text-[#999]">or</span>
                  <div className="h-px flex-1 bg-black/12" />
                </div>

                {/* Email */}
                <label className="relative block">
                  <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#999]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setEmailError(''); setEmailSubmitted(false); }}
                    placeholder="Enter your Email address"
                    className="h-[46px] w-full rounded-xl border border-black/10 bg-white pl-11 pr-3 text-[14px] font-medium text-[#111] placeholder:text-[#999] outline-none focus:border-[#315BFF]/30 focus:ring-2 focus:ring-[#315BFF]/15"
                  />
                </label>
                {emailError && (
                  <p className="mt-1.5 text-[12px] text-red-500">{emailError}</p>
                )}
                {emailSubmitted && (
                  <p className="mt-1.5 text-[12px] text-green-600">Check your inbox for the next step!</p>
                )}
                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  disabled={emailLoading}
                  className="mt-2.5 h-[46px] w-full rounded-xl bg-[#315BFF] text-[14px] font-semibold text-white shadow-[0_3px_10px_rgba(49,91,255,0.25)] transition-colors duration-150 hover:bg-[#254DE8] disabled:opacity-70"
                >
                  {emailLoading ? 'Sending...' : 'Continue with Email'}
                </button>
              </div>
            </div>

            {/* Right: Floating product screenshots */}
            <div className="relative hidden min-h-[440px] lg:block">
              <div className="absolute left-[6%] top-[22%] w-[48%] rotate-[-5deg] overflow-hidden rounded-xl shadow-[0_18px_45px_rgba(0,0,0,0.22)]">
                <Image src="/landing/restaurant-wide.png" alt="DeliciousFood preview" width={460} height={280} className="h-auto w-full" />
              </div>
              <div className="absolute right-[2%] top-[0%] w-[40%] rotate-[8deg] overflow-hidden rounded-xl shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
                <Image src="/landing/dashboard-tilt.png" alt="Dashboard preview" width={380} height={340} className="h-auto w-full" />
              </div>
              <div className="absolute bottom-[4%] left-[28%] w-[43%] overflow-hidden rounded-xl shadow-[0_20px_45px_rgba(0,0,0,0.25)]">
                <Image src="/hoobank.png" alt="Hoobank preview" width={420} height={280} className="h-auto w-full" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ════════════════════════════════════════════════════════
          FOOTER
          ════════════════════════════════════════════════════════ */}
      <footer className="border-t border-black/[0.04] bg-white/30">
        <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[300px_1fr]">
            {/* Left: Brand */}
            <div>
              <Link href="/" className="flex items-center gap-2 text-[#111] no-underline">
                <Image src="/logo.svg" alt="ScouTTs" width={28} height={28} unoptimized />
                <span className="text-[16px] font-extrabold">ScouTTs</span>
              </Link>
              <p className="mt-3 max-w-[280px] text-[15px] font-medium leading-snug text-[#555]">
                where developers ship and the word discovers.
              </p>
              <p className="mt-4 max-w-[300px] text-[14px] leading-relaxed text-[#666]">
                Scouts is the home for innovative projects and the people behind them. Build in public. Get discovered.
              </p>
              <Link
                href="/signup"
                className="mt-5 inline-flex h-[42px] items-center gap-2.5 rounded-xl bg-[#315BFF] px-6 text-[14px] font-medium text-white shadow-[0_3px_10px_rgba(49,91,255,0.25)] transition-colors duration-150 hover:bg-[#254DE8]"
              >
                Join Scoutts <ArrowRightIcon />
              </Link>
            </div>

            {/* Right: Columns */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#315BFF]">{column.title}</h3>
                  <ul className="mt-3.5 space-y-2.5">
                    {column.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-[13px] font-medium text-[#555] transition-colors duration-150 hover:text-[#315BFF]">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex items-center justify-between border-t border-black/[0.04] pt-7">
            <div className="flex items-center gap-5">
              <a href="#" aria-label="GitHub" className="text-[#555] transition-colors duration-150 hover:text-[#315BFF]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1 2.1.1 3.4.3.1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2A11.5 11.5 0 0 1 12 4.8c1 0 2 .1 3 .4 2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
                </svg>
              </a>
              <a href="#" aria-label="X" className="text-[20px] font-bold text-[#555] transition-colors duration-150 hover:text-[#315BFF]">
                X
              </a>
              <a href="#" aria-label="LinkedIn" className="text-[#555] transition-colors duration-150 hover:text-[#315BFF]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6A2.5 2.5 0 0 1 0 3.5 2.5 2.5 0 0 1 2.5 1c1.37 0 2.48 1.12 2.48 2.5ZM.4 8h4.2v14H.4V8Zm7.2 0h4v1.9h.1c.6-1.1 2-2.2 4.1-2.2 4.4 0 5.2 2.9 5.2 6.6V22h-4.2v-6.8c0-1.6 0-3.7-2.3-3.7s-2.6 1.7-2.6 3.6V22H7.6V8Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-5 right-5 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-[#315BFF] text-white shadow-[0_4px_16px_rgba(49,91,255,0.3)] transition-colors duration-150 hover:bg-[#254DE8]"
        aria-label="Back to top"
      >
        <ArrowUpIcon />
      </button>
    </div>
  );
}
