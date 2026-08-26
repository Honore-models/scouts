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
  FolderOpen,
  User,
  FileText,
  MessageSquare,
  Settings,
  Plus,
  Search,
  Bell,
  ChevronDown,
  Star,
  ArrowUp,
  MoreHorizontal,
} from 'lucide-react';

/* ─── Data ─────────────────────────────────────────────────── */

const sidebarNav = [
  { label: 'Home', icon: Home, href: '/' },
  { label: 'Discover', icon: Compass, href: '/discover', active: true },
  { label: 'Trending', icon: TrendingUp, href: '/discover?sort=trending' },
  { label: 'Bookmarks', icon: Bookmark, href: '/bookmarks' },
  { label: 'Collections', icon: FolderOpen, href: '/collections' },
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

const products = [
  { id: '1', name: 'DeliciousFood', tagline: 'Art Selling website', maker: 'Mandrake', image: '/landing/delicious.png', tags: ['Design', 'Marketplace', 'Web'] },
  { id: '2', name: 'Kartz', tagline: 'Art Selling website', maker: 'Mandrake', image: '/landing/kartz.png', tags: ['Design', 'Marketplace', 'Web'] },
  { id: '3', name: 'CodeSnap', tagline: 'Art Selling website', maker: 'Mandrake', image: '/landing/kartz.png', tags: ['Design', 'Marketplace', 'Web'] },
  { id: '4', name: 'DeliciousFood', tagline: 'Art Selling website', maker: 'Mandrake', image: '/landing/delicious.png', tags: ['Design', 'Marketplace', 'Web'] },
  { id: '5', name: 'Kartz', tagline: 'Art Selling website', maker: 'Mandrake', image: '/landing/kartz.png', tags: ['Design', 'Marketplace', 'Web'] },
  { id: '6', name: 'CodeSnap', tagline: 'Art Selling website', maker: 'Mandrake', image: '/landing/kartz.png', tags: ['Design', 'Marketplace', 'Web'] },
  { id: '7', name: 'DeliciousFood', tagline: 'Art Selling website', maker: 'Mandrake', image: '/landing/delicious.png', tags: ['Design', 'Marketplace', 'Web'] },
  { id: '8', name: 'Kartz', tagline: 'Art Selling website', maker: 'Mandrake', image: '/landing/kartz.png', tags: ['Design', 'Marketplace', 'Web'] },
  { id: '9', name: 'CodeSnap', tagline: 'Art Selling website', maker: 'Mandrake', image: '/landing/kartz.png', tags: ['Design', 'Marketplace', 'Web'] },
];

/* ─── Page ─────────────────────────────────────────────────── */

export default function DiscoverPage() {
  const [activeTab, setActiveTab] = useState('foryou');
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
              <Image src="/logo.svg" alt="ScouTTs" width={32} height={32} unoptimized />
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
            {/* Heading */}
            <h1 className="text-[28px] font-bold text-[#111]">Explore Projects</h1>
            <p className="mt-1 text-[14px] text-[#666]">Discover the things built by developers</p>

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

            {/* Product Grid */}
            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="group overflow-hidden rounded-xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
                >
                  {/* Image */}
                  <div className="relative h-[180px] w-full overflow-hidden bg-slate-900">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-[16px] font-semibold text-[#111]">{product.name}</h3>
                    <p className="mt-1 text-[13px] text-[#666]">{product.tagline}</p>
                    <p className="mt-2 text-[12px] text-[#999]">by {product.maker}</p>

                    {/* Tags */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-[#F3F4F6] px-2 py-0.5 text-[11px] font-medium text-[#666]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="mt-3 flex items-center gap-3 border-t border-black/[0.04] pt-3 text-[12px] text-[#666]">
                      <span className="flex items-center gap-1">
                        <ArrowUp className="h-3.5 w-3.5 text-[#34C759]" />
                        482
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="h-3.5 w-3.5" />
                        68
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 fill-[#111] text-[#111]" />
                        4.8
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

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
