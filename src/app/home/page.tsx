'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ProfileDropdown from '@/components/layout/ProfileDropdown';
import {
  Home,
  Compass,
  TrendingUp,
  Bookmark,
  FileText,
  MessageSquare,
  Settings,
  Plus,
  Search,
  Bell,
  ChevronDown,
  Star,
  ArrowUp,
  Heart,
  Sparkles,
  Users,
  Eye,
  ArrowRight,
} from 'lucide-react';

/* ─── Data ─────────────────────────────────────────────────── */

const sidebarNav = [
  { label: 'Home', icon: Home, href: '/home', active: true },
  { label: 'Discover', icon: Compass, href: '/discover' },
  { label: 'Trending', icon: TrendingUp, href: '/trending' },
  { label: 'Bookmarks', icon: Bookmark, href: '/saved' },
];

const sidebarSpace = [
  { label: 'My Projects', icon: Compass, href: '/dashboard' },
  { label: 'Drafts', icon: FileText, href: '/drafts' },
  { label: 'Feedback', icon: MessageSquare, href: '/feedback' },
];

const categories = [
  { id: 'foryou', label: 'For you', icon: true },
  { id: 'all', label: 'All' },
  { id: 'saas', label: 'SaaS' },
  { id: 'ai', label: 'AI' },
  { id: 'devtools', label: 'Developer tools' },
  { id: 'web', label: 'Web Apps' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'design', label: 'Design' },
];

const recommendedProducts = [
  { id: '1', name: 'CodeSnap', tagline: 'Beautiful code screenshots in one click', maker: 'Cenat', image: '/landing/code.png' },
  { id: '2', name: 'CodeSnap', tagline: 'Beautiful code screenshots in one click', maker: 'Cenat', image: '/landing/delicious.png' },
  { id: '3', name: 'CodeSnap', tagline: 'Beautiful code screenshots in one click', maker: 'Cenat', image: '/landing/hoobank.png' },
  { id: '4', name: 'CodeSnap', tagline: 'Beautiful code screenshots in one click', maker: 'Cenat', image: '/landing/code.png' },
];

const trendingProducts = [
  { id: '5', name: 'DeliciousFood', tagline: 'All in one platform that helps restaurants grow from dashboard to doorstep', maker: 'Ivan', image: '/landing/delicious.png' },
  { id: '6', name: 'Kartz', tagline: 'Art Selling website', maker: 'Cenat', image: '/landing/kartz.png' },
  { id: '7', name: 'CodeSnap', tagline: 'Beautiful code screenshots in one click', maker: 'Cenat', image: '/landing/code.png' },
];

/* ─── Page ─────────────────────────────────────────────────── */

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('foryou');

  return (
    <div className="relative min-h-screen overflow-hidden text-[#111]">
      {/* ── Background ── */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg, #F8F6FF 0%, #F2EEFF 15%, #F0ECFF 30%, #EDE8FF 50%, #E8E0FF 70%, #E4DAFF 100%)',
        }}
      />

      <div className="flex min-h-screen">
        {/* ═══════════════════════════════════════════════════
            LEFT SIDEBAR
            ═══════════════════════════════════════════════════ */}
        <aside className="hidden w-[220px] shrink-0 border-r border-black/[0.04] bg-white/40 backdrop-blur-sm lg:block">
          <div className="sticky top-0 flex h-screen flex-col px-4 py-6">
            {/* Logo */}
            <Link href="/" className="mb-8 flex items-center gap-2.5 text-[#111] no-underline">
              <Image src="/logo.svg" alt="ScouTTs" width={24} height={30} className="h-auto" unoptimized />
              <span className="text-[17px] font-extrabold tracking-tight">Scoutts</span>
            </Link>

            {/* Main nav */}
            <nav className="space-y-1">
              {sidebarNav.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] font-medium transition-colors duration-150 ${
                      item.active
                        ? 'bg-[#315BFF]/10 text-[#315BFF]'
                        : 'text-[#555] hover:bg-black/[0.03] hover:text-[#111]'
                    }`}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Your Space */}
            <div className="mt-8">
              <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-[#999]">
                Your Space
              </p>
              <nav className="space-y-1">
                {sidebarSpace.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] font-medium text-[#555] transition-colors duration-150 hover:bg-black/[0.03] hover:text-[#111]"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Ship a product */}
            <div className="mt-auto pt-6">
              <Link
                href="/launch"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#315BFF] px-4 py-3 text-[14px] font-semibold text-white shadow-[0_3px_10px_rgba(49,91,255,0.25)] transition-colors duration-150 hover:bg-[#254DE8]"
              >
                <Plus className="h-4 w-4" />
                Ship a product
              </Link>
            </div>
          </div>
        </aside>

        {/* ═══════════════════════════════════════════════════
            MAIN CONTENT
            ═══════════════════════════════════════════════════ */}
        <div className="flex-1">
          {/* ── Top Bar ── */}
          <header className="sticky top-0 z-40 flex items-center justify-between border-b border-black/[0.04] bg-white/60 px-6 py-3 backdrop-blur-xl">
            {/* Search */}
            <div className="relative w-full max-w-[480px]">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#999]" />
              <input
                type="text"
                placeholder="search project , developers ........."
                className="h-10 w-full rounded-lg border border-black/10 bg-white/70 pl-10 pr-4 text-[13px] text-[#111] placeholder:text-[#aaa] outline-none focus:border-[#315BFF]/30 focus:bg-white focus:ring-2 focus:ring-[#315BFF]/15"
              />
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              <button type="button" className="relative text-[#555] transition-colors duration-150 hover:text-[#111]">
                <Bell className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#315BFF]" />
              </button>
              <ProfileDropdown />
            </div>
          </header>

          {/* ── Content ── */}
          <main className="px-6 py-6">
            {/* Greeting */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-[28px] font-bold text-[#111]">
                  Good Morning, Ivan{' '}
                  <span className="inline-block" role="img" aria-label="wave">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="inline-block -mt-1">
                      <path d="M7 15.5c.83.83 2.17.83 3 0 1.66-1.66 1.66-4.34 0-6-1.66-1.66-4.34-1.66-6 0-.83.83-.83 2.17 0 3" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 6.5c.83-.83 2.17-.83 3 0 1.66 1.66 1.66 4.34 0 6-.83.83-2.17.83-3 0" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17 4.5c.83-.83 2.17-.83 3 0 .83.83.83 2.17 0 3" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </h1>
                <p className="mt-1 text-[14px] text-[#666]">Here&apos;s is what&apos;s trending today</p>
              </div>
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-lg bg-white/60 px-3 py-2 text-[13px] font-medium text-[#555] hover:bg-white"
              >
                For you
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Category Tabs */}
            <div className="mt-5 flex items-center gap-1.5 overflow-x-auto">
              {categories.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex shrink-0 items-center gap-1.5 rounded-lg px-4 py-2 text-[13px] font-medium transition-colors duration-150 ${
                    activeTab === tab.id
                      ? 'bg-[#315BFF] text-white shadow-[0_2px_8px_rgba(49,91,255,0.25)]'
                      : 'bg-white/60 text-[#555] hover:bg-white hover:text-[#111]'
                  }`}
                >
                  {tab.icon && <Star className="h-3.5 w-3.5" />}
                  {tab.label}
                </button>
              ))}
              <button
                type="button"
                className="flex shrink-0 items-center gap-1 rounded-lg bg-white/60 px-3 py-2 text-[13px] font-medium text-[#555] hover:bg-white"
              >
                More
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* ═══ Featured + Stats Row ═══ */}
            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_320px]">
              {/* Featured Card */}
              <div className="overflow-hidden rounded-2xl bg-[#1a1a2e] shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
                <div className="relative h-[280px]">
                  <Image
                    src="/landing/dashboard-tilt.png"
                    alt="FlowBoard — AI powered whiteboard"
                    fill
                    className="object-cover"
                    sizes="(min-width:1024px) 50vw, 100vw"
                  />
                  {/* Overlay content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/90 via-[#1a1a2e]/40 to-transparent">
                    <div className="p-5">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                        <Star className="h-3 w-3 fill-[#F0B48F] text-[#F0B48F]" />
                        Featured today
                      </div>
                      <h2 className="mt-3 text-[28px] font-bold text-white">
                        Flow<span className="text-[#7958FF]">Board</span>
                      </h2>
                      <p className="mt-1 text-[13px] text-[#ccc]">
                        AI powered whiteboard<br />for collaborative teams
                      </p>
                      <p className="mt-2 text-[12px] text-[#999]">by David Kim</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-[#15152a] px-5 py-3">
                  <button type="button" className="flex items-center gap-1.5 text-[13px] font-medium text-white">
                    View Project <ArrowRight className="h-4 w-4" />
                  </button>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-[#FF6B6B] text-[9px] font-bold text-white ring-2 ring-[#15152a]">A</span>
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-[#4ECDC4] text-[9px] font-bold text-white ring-2 ring-[#15152a]">B</span>
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-[#315BFF] text-[8px] font-bold text-white ring-2 ring-[#15152a]">10K+</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Keep exploring + Stats */}
              <div className="flex flex-col gap-4">
                {/* Keep exploring */}
                <div className="rounded-2xl bg-gradient-to-br from-[#315BFF] to-[#7958FF] p-5 text-white shadow-[0_4px_20px_rgba(49,91,255,0.2)]">
                  <h3 className="text-[16px] font-semibold">Keep exploring</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-white/80">
                    we&apos;ve found more projects you might love based on your activity.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-white/60" />
                    <Heart className="h-5 w-5 text-white/40" />
                    <Heart className="h-5 w-5 text-white/30" />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  <div className="rounded-xl border border-black/[0.04] bg-white/60 p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#315BFF]/10">
                        <Eye className="h-4 w-4 text-[#315BFF]" />
                      </div>
                      <div>
                        <p className="text-[20px] font-bold text-[#111]">1.2K</p>
                        <p className="text-[11px] text-[#666]">Projects viewed</p>
                      </div>
                    </div>
                    <p className="mt-1 text-[11px] text-[#34C759]">+18% this week</p>
                  </div>

                  <div className="rounded-xl border border-black/[0.04] bg-white/60 p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7958FF]/10">
                        <Users className="h-4 w-4 text-[#7958FF]" />
                      </div>
                      <div>
                        <p className="text-[20px] font-bold text-[#111]">342</p>
                        <p className="text-[11px] text-[#666]">Following</p>
                      </div>
                    </div>
                    <p className="mt-1 text-[11px] text-[#34C759]">+8 new this week</p>
                  </div>

                  <div className="rounded-xl border border-black/[0.04] bg-white/60 p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF6B6B]/10">
                        <Heart className="h-4 w-4 text-[#FF6B6B]" />
                      </div>
                      <div>
                        <p className="text-[20px] font-bold text-[#111]">128</p>
                        <p className="text-[11px] text-[#666]">Products liked</p>
                      </div>
                    </div>
                    <p className="mt-1 text-[11px] text-[#34C759]">+24% this week</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ═══ Recommended for you ═══ */}
            <section className="mt-8">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#315BFF]" />
                <h2 className="text-[20px] font-bold text-[#111]">Recommended for you</h2>
              </div>
              <p className="mt-1 text-[13px] text-[#666]">Curated projects picked for you</p>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {recommendedProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    className="group overflow-hidden rounded-xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
                  >
                    <div className="relative h-[140px] w-full overflow-hidden bg-slate-900">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="25vw"
                      />
                    </div>
                    <div className="p-3.5">
                      <h3 className="text-[14px] font-semibold text-[#111]">{product.name}</h3>
                      <p className="mt-1 text-[12px] text-[#666] line-clamp-2">{product.tagline}</p>
                      <p className="mt-1.5 text-[11px] text-[#999]">by {product.maker}</p>
                      <div className="mt-2 flex items-center gap-3 text-[11px] text-[#666]">
                        <span className="flex items-center gap-1">
                          <ArrowUp className="h-3 w-3 text-[#34C759]" />
                          482
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="h-3 w-3" />
                          68
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-[#111] text-[#111]" />
                          4.8
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* ═══ Trending today ═══ */}
            <section className="mt-8">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-[#315BFF]" />
                <h2 className="text-[20px] font-bold text-[#111]">Trending today</h2>
              </div>
              <p className="mt-1 text-[13px] text-[#666]">The most popular projects right now</p>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {trendingProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    className="group overflow-hidden rounded-xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
                  >
                    <div className="relative h-[160px] w-full overflow-hidden bg-slate-900">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-[15px] font-semibold text-[#111]">{product.name}</h3>
                      <p className="mt-1 text-[12px] text-[#666] line-clamp-2">{product.tagline}</p>
                      <p className="mt-2 text-[11px] text-[#999]">by {product.maker}</p>
                      <div className="mt-2 flex items-center gap-3 text-[11px] text-[#666]">
                        <span className="flex items-center gap-1">
                          <ArrowUp className="h-3 w-3 text-[#34C759]" />
                          482
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="h-3 w-3" />
                          68
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-[#111] text-[#111]" />
                          4.8
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Community Banner */}
            <div className="mt-8 flex items-center justify-between rounded-xl border border-black/[0.04] bg-white/60 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[#FF6B6B] text-[10px] font-bold text-white ring-2 ring-white">A</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[#4ECDC4] text-[10px] font-bold text-white ring-2 ring-white">B</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[#315BFF] text-[9px] font-bold text-white ring-2 ring-white">10K+</span>
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#111]">Join a community of builders</p>
                  <p className="text-[12px] text-[#666]">
                    Create an account to save projects, follow developers and get personalized recommendations.
                  </p>
                </div>
              </div>
              <Link
                href="/signup"
                className="shrink-0 rounded-lg bg-[#315BFF] px-4 py-2 text-[13px] font-semibold text-white shadow-[0_2px_8px_rgba(49,91,255,0.25)] transition-colors duration-150 hover:bg-[#254DE8]"
              >
                Invite Friends
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
