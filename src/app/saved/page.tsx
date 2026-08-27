'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ProfileDropdown from '@/components/layout/ProfileDropdown';
import AuthGuard from '@/components/auth-guard';
import {
  Home,
  Compass,
  TrendingUp,
  Bookmark,
  FileText,
  MessageSquare,
  Plus,
  Search,
  Bell,
  Star,
  ArrowUp,
  BookmarkCheck,
  Trash2,
} from 'lucide-react';

/* ─── Data ─────────────────────────────────────────────────── */

const sidebarNav = [
  { label: 'Home', icon: Home, href: '/home' },
  { label: 'Discover', icon: Compass, href: '/discover' },
  { label: 'Trending', icon: TrendingUp, href: '/trending' },
  { label: 'Bookmarks', icon: Bookmark, href: '/saved', active: true },
];

const sidebarSpace = [
  { label: 'My Projects', icon: Compass, href: '/dashboard/projects' },
  { label: 'Drafts', icon: FileText, href: '/drafts' },
  { label: 'Feedback', icon: MessageSquare, href: '/feedback' },
];

const savedProducts = [dashboard1
  { id: '1', name: 'FlowBoard', tagline: 'AI powered whiteboard for collaborative teams', maker: 'David Kim', image: '/landing/dashboard-tilt.png', category: 'SaaS', upvotes: 482, comments: 68, rating: 4.8, saved: '2 days ago' },
  { id: '2', name: 'CodeSnap', tagline: 'Beautiful code screenshots in one click', maker: 'Cenat', image: '/landing/code.png', category: 'Developer tools', upvotes: 298, comments: 32, rating: 4.6, saved: '5 days ago' },
  { id: '3', name: 'ShipFast', tagline: 'Ship your MVP in days not months', maker: 'Liam Chen', image: '/landing/code.png', category: 'Developer tools', upvotes: 234, comments: 22, rating: 4.4, saved: '1 week ago' },
  { id: '4', name: 'MindMap AI', tagline: 'AI powered mind mapping and brainstorming', maker: 'Alex Park', image: '/landing/delicious.png', category: 'AI', upvotes: 198, comments: 18, rating: 4.3, saved: '2 weeks ago' },
];

/* ─── Page ─────────────────────────────────────────────────── */

export default function SavedPage() {
  const [items, setItems] = useState(savedProducts);

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-[#111]">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{ background: 'linear-gradient(180deg, #F8F6FF 0%, #F2EEFF 15%, #F0ECFF 30%, #EDE8FF 50%, #E8E0FF 70%, #E4DAFF 100%)' }}
      />

      <div className="flex min-h-screen">
        {/* ═══ LEFT SIDEBAR ═══ */}
        <aside className="hidden w-[220px] shrink-0 border-r border-black/[0.04] bg-white/40 backdrop-blur-sm lg:block">
          <div className="sticky top-0 flex h-screen flex-col px-4 py-6">
            <Link href="/" className="mb-8 flex items-center gap-2.5 text-[#111] no-underline">
              <Image src="/logo.svg" alt="ScouTTs" width={24} height={30} className="h-auto" unoptimized />
              <span className="text-[17px] font-extrabold tracking-tight">Scoutts</span>
            </Link>
            <nav className="space-y-1">
              {sidebarNav.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.label} href={item.href} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] font-medium transition-colors duration-150 ${item.active ? 'bg-[#315BFF]/10 text-[#315BFF]' : 'text-[#555] hover:bg-black/[0.03] hover:text-[#111]'}`}>
                    <Icon className="h-[18px] w-[18px]" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-8">
              <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-[#999]">Your Space</p>
              <nav className="space-y-1">
                {sidebarSpace.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link key={item.label} href={item.href} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] font-medium text-[#555] transition-colors duration-150 hover:bg-black/[0.03] hover:text-[#111]">
                      <Icon className="h-[18px] w-[18px]" />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
            <div className="mt-auto pt-6">
              <Link href="/launch" className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#315BFF] px-4 py-3 text-[14px] font-semibold text-white shadow-[0_3px_10px_rgba(49,91,255,0.25)] transition-colors duration-150 hover:bg-[#254DE8]">
                <Plus className="h-4 w-4" />
                Ship a product
              </Link>
            </div>
          </div>
        </aside>

        {/* ═══ MAIN CONTENT ═══ */}
        <div className="flex-1">
          <header className="sticky top-0 z-40 flex items-center justify-between border-b border-black/[0.04] bg-white/60 px-6 py-3 backdrop-blur-xl">
            <div className="relative w-full max-w-[480px]">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#999]" />
              <input type="text" placeholder="search project , developers ........." className="h-10 w-full rounded-lg border border-black/10 bg-white/70 pl-10 pr-4 text-[13px] text-[#111] placeholder:text-[#aaa] outline-none focus:border-[#315BFF]/30 focus:bg-white focus:ring-2 focus:ring-[#315BFF]/15" />
            </div>
            <div className="flex items-center gap-4">
              <button type="button" className="relative text-[#555] transition-colors duration-150 hover:text-[#111]">
                <Bell className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#315BFF]" />
              </button>
              <ProfileDropdown />
            </div>
          </header>

          <main className="px-6 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-[28px] font-bold text-[#111]">Saved Projects</h1>
                <p className="mt-1 text-[14px] text-[#666]">Projects you&apos;ve bookmarked for later</p>
              </div>
              <div className="flex items-center gap-2">
                <BookmarkCheck className="h-5 w-5 text-[#315BFF]" />
                <span className="text-[14px] font-medium text-[#555]">{items.length} saved</span>
              </div>
            </div>

            {/* Saved Products */}
            {items.length > 0 ? (
              <div className="mt-6 space-y-3">
                {items.map((product) => (
                  <div key={product.id} className="group flex items-center gap-4 rounded-xl bg-white/60 p-4 backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
                    <Link href={`/product/${product.id}`} className="relative h-[80px] w-[120px] shrink-0 overflow-hidden rounded-lg bg-slate-900">
                      <Image src={product.image} alt={product.name} fill className="object-cover" sizes="120px" />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <Link href={`/product/${product.id}`} className="text-[15px] font-semibold text-[#111] hover:text-[#315BFF]">{product.name}</Link>
                        <span className="rounded-md bg-[#F3F4F6] px-2 py-0.5 text-[10px] font-medium text-[#666]">{product.category}</span>
                      </div>
                      <p className="mt-1 text-[13px] text-[#666] truncate">{product.tagline}</p>
                      <p className="mt-1 text-[12px] text-[#999]">by {product.maker} &middot; Saved {product.saved}</p>
                      <div className="mt-2 flex items-center gap-3 text-[11px] text-[#666]">
                        <span className="flex items-center gap-1"><ArrowUp className="h-3 w-3 text-[#34C759]" />{product.upvotes}</span>
                        <span className="flex items-center gap-1"><MessageSquare className="h-3 w-3" />{product.comments}</span>
                        <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-[#111] text-[#111]" />{product.rating}</span>
                      </div>
                    </div>
                    <button type="button" onClick={() => removeItem(product.id)} className="shrink-0 rounded-lg p-2 text-[#999] transition-colors hover:bg-red-50 hover:text-[#EF4444]">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-12 text-center">
                <Bookmark className="mx-auto h-12 w-12 text-[#ccc]" />
                <p className="mt-3 text-[16px] font-semibold text-[#111]">No saved projects</p>
                <p className="mt-1 text-[13px] text-[#666]">Projects you save will appear here</p>
                <Link href="/discover" className="mt-4 inline-block rounded-lg bg-[#315BFF] px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-[#254DE8]">
                  Discover projects
                </Link>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
