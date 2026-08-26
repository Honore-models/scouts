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
  Plus,
  Search,
  Bell,
  Star,
  ArrowUp,
  Globe,
  Smartphone,
  Palette,
  Brain,
  Code,
  Database,
  Layout,
  ShoppingCart,
  Wrench,
  Layers,
} from 'lucide-react';

/* ─── Data ─────────────────────────────────────────────────── */

const sidebarNav = [
  { label: 'Home', icon: Home, href: '/home' },
  { label: 'Discover', icon: Compass, href: '/discover' },
  { label: 'Trending', icon: TrendingUp, href: '/trending' },
  { label: 'Bookmarks', icon: Bookmark, href: '/saved' },
];

const sidebarSpace = [
  { label: 'My Projects', icon: Compass, href: '/dashboard' },
  { label: 'Drafts', icon: FileText, href: '/drafts' },
  { label: 'Feedback', icon: MessageSquare, href: '/feedback' },
];

const categoryList = [
  { id: 'saas', label: 'SaaS', icon: Layers, count: 342, color: '#315BFF' },
  { id: 'ai', label: 'AI & Machine Learning', icon: Brain, count: 289, color: '#8B5CF6' },
  { id: 'devtools', label: 'Developer Tools', icon: Code, count: 256, color: '#10B981' },
  { id: 'web', label: 'Web Apps', icon: Globe, count: 198, color: '#F59E0B' },
  { id: 'mobile', label: 'Mobile Apps', icon: Smartphone, count: 167, color: '#EF4444' },
  { id: 'design', label: 'Design Tools', icon: Palette, count: 143, color: '#EC4899' },
  { id: 'database', label: 'Database & Storage', icon: Database, count: 98, color: '#06B6D4' },
  { id: 'ecommerce', label: 'E-Commerce', icon: ShoppingCart, count: 87, color: '#F97316' },
  { id: 'productivity', label: 'Productivity', icon: Layout, count: 124, color: '#6366F1' },
  { id: 'utilities', label: 'Utilities', icon: Wrench, count: 76, color: '#84CC16' },
];

const featuredByCategory = [
  { id: '1', name: 'FlowBoard', tagline: 'AI powered whiteboard for teams', maker: 'David Kim', image: '/landing/dashboard-tilt.png', category: 'SaaS', upvotes: 482, comments: 68, rating: 4.8 },
  { id: '2', name: 'DeliciousFood', tagline: 'Restaurant management platform', maker: 'Ivan', image: '/landing/delicious.png', category: 'Web Apps', upvotes: 341, comments: 45, rating: 4.7 },
  { id: '3', name: 'CodeSnap', tagline: 'Beautiful code screenshots', maker: 'Cenat', image: '/landing/code.png', category: 'Developer Tools', upvotes: 298, comments: 32, rating: 4.6 },
  { id: '4', name: 'Kartz', tagline: 'Art marketplace for artists', maker: 'Mandrake', image: '/landing/kartz.png', category: 'E-Commerce', upvotes: 267, comments: 28, rating: 4.5 },
  { id: '5', name: 'ShipFast', tagline: 'Ship MVPs faster', maker: 'Liam Chen', image: '/landing/code.png', category: 'Developer Tools', upvotes: 234, comments: 22, rating: 4.4 },
  { id: '6', name: 'MindMap AI', tagline: 'AI brainstorming tool', maker: 'Alex Park', image: '/landing/delicious.png', category: 'AI & Machine Learning', upvotes: 198, comments: 18, rating: 4.3 },
];

/* ─── Page ─────────────────────────────────────────────────── */

export default function CategoriesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

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
                  <Link key={item.label} href={item.href} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] font-medium transition-colors duration-150 ${item.label === 'Discover' ? 'bg-[#315BFF]/10 text-[#315BFF]' : 'text-[#555] hover:bg-black/[0.03] hover:text-[#111]'}`}>
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
            <h1 className="text-[28px] font-bold text-[#111]">Categories</h1>
            <p className="mt-1 text-[14px] text-[#666]">Browse projects by category</p>

            {/* Category Grid */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {categoryList.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button key={cat.id} type="button" onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)} className={`flex flex-col items-center gap-2 rounded-xl border p-5 transition-all duration-200 ${activeCategory === cat.id ? 'border-[#315BFF] bg-[#315BFF]/5 shadow-[0_2px_12px_rgba(49,91,255,0.12)]' : 'border-black/[0.04] bg-white/60 hover:bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]'}`}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: `${cat.color}15` }}>
                      <Icon className="h-5 w-5" style={{ color: cat.color }} />
                    </div>
                    <span className="text-[13px] font-semibold text-[#111]">{cat.label}</span>
                    <span className="text-[11px] text-[#999]">{cat.count} projects</span>
                  </button>
                );
              })}
            </div>

            {/* Featured in category */}
            {activeCategory && (
              <section className="mt-8">
                <h2 className="text-[20px] font-bold text-[#111]">Featured in {categoryList.find(c => c.id === activeCategory)?.label}</h2>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {featuredByCategory.map((product) => (
                    <Link key={product.id} href={`/product/${product.id}`} className="group overflow-hidden rounded-xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
                      <div className="relative h-[160px] w-full overflow-hidden bg-slate-900">
                        <Image src={product.image} alt={product.name} fill className="object-cover" sizes="33vw" />
                      </div>
                      <div className="p-4">
                        <h3 className="text-[15px] font-semibold text-[#111]">{product.name}</h3>
                        <p className="mt-1 text-[12px] text-[#666] line-clamp-2">{product.tagline}</p>
                        <p className="mt-2 text-[11px] text-[#999]">by {product.maker}</p>
                        <div className="mt-2 flex items-center gap-3 text-[11px] text-[#666]">
                          <span className="flex items-center gap-1"><ArrowUp className="h-3 w-3 text-[#34C759]" />{product.upvotes}</span>
                          <span className="flex items-center gap-1"><MessageSquare className="h-3 w-3" />{product.comments}</span>
                          <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-[#111] text-[#111]" />{product.rating}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
