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
  Users,
  ExternalLink,
  MapPin,
} from 'lucide-react';

/* ─── Data ─────────────────────────────────────────────────── */

const sidebarNav = [
  { label: 'Home', icon: Home, href: '/home' },
  { label: 'Discover', icon: Compass, href: '/discover' },
  { label: 'Trending', icon: TrendingUp, href: '/trending' },
  { label: 'Bookmarks', icon: Bookmark, href: '/saved' },
];

const sidebarSpace = [
  { label: 'My Projects', icon: Compass, href: '/dashboard/projects' },
  { label: 'Drafts', icon: FileText, href: '/drafts' },
  { label: 'Feedback', icon: MessageSquare, href: '/feedback' },
];

const developers = [
  { id: '1', name: 'David Kim', handle: '@davidkim', bio: 'Building tools that help teams think and create better together.', location: 'San Francisco', projects: 12, followers: 2540, avatar: 'DK', color: '#315BFF', featured: 'FlowBoard' },
  { id: '2', name: 'Ivan Hirwa', handle: '@ivanhirwa', bio: 'Full stack developer passionate about restaurant tech and AI.', location: 'New York', projects: 8, followers: 1820, avatar: 'IH', color: '#8B5CF6', featured: 'DeliciousFood' },
  { id: '3', name: 'Cenat', handle: '@cenat', bio: 'Creating beautiful developer tools and code utilities.', location: 'London', projects: 15, followers: 3210, avatar: 'CE', color: '#10B981', featured: 'CodeSnap' },
  { id: '4', name: 'Mandrake', handle: '@mandrake', bio: 'Designer and developer building art marketplaces.', location: 'Berlin', projects: 6, followers: 980, avatar: 'MA', color: '#F59E0B', featured: 'Kartz' },
  { id: '5', name: 'Liam Chen', handle: '@liamchen', bio: 'Ship fast, ship often. Building MVP tools for founders.', location: 'Toronto', projects: 10, followers: 2100, avatar: 'LC', color: '#EF4444', featured: 'ShipFast' },
  { id: '6', name: 'Alex Park', handle: '@alexpark', bio: 'AI researcher building the next generation of brainstorming tools.', location: 'Seoul', projects: 7, followers: 1560, avatar: 'AP', color: '#EC4899', featured: 'MindMap AI' },
  { id: '7', name: 'Sara Kim', handle: '@sarakim', bio: 'Design engineer crafting beautiful templates for startups.', location: 'Tokyo', projects: 9, followers: 1340, avatar: 'SK', color: '#6366F1', featured: 'LandingKit' },
  { id: '8', name: 'Mike Ross', handle: '@mikeross', bio: 'Data enthusiast building analytics dashboards for SaaS.', location: 'Austin', projects: 5, followers: 870, avatar: 'MR', color: '#06B6D4', featured: 'DataPulse' },
];

/* ─── Page ─────────────────────────────────────────────────── */

export default function DevelopersPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = developers.filter(d =>
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.handle.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-[28px] font-bold text-[#111]">Developers</h1>
                <p className="mt-1 text-[14px] text-[#666]">Discover talented builders and creators</p>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#999]" />
                <input
                  type="text"
                  placeholder="Search developers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-10 w-[280px] rounded-lg border border-black/10 bg-white/70 pl-10 pr-4 text-[13px] text-[#111] placeholder:text-[#aaa] outline-none focus:border-[#315BFF]/30 focus:bg-white focus:ring-2 focus:ring-[#315BFF]/15"
                />
              </div>
            </div>

            {/* Developers Grid */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {filtered.map((dev) => (
                <div key={dev.id} className="group rounded-xl border border-black/[0.04] bg-white/60 p-5 backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
                  {/* Avatar + Name */}
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 shrink-0 rounded-full flex items-center justify-center text-[14px] font-bold text-white" style={{ backgroundColor: dev.color }}>
                      {dev.avatar}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[14px] font-semibold text-[#111] truncate">{dev.name}</p>
                      <p className="text-[12px] text-[#999] truncate">{dev.handle}</p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="mt-3 text-[12px] leading-relaxed text-[#666] line-clamp-2">{dev.bio}</p>

                  {/* Location */}
                  <div className="mt-2 flex items-center gap-1 text-[11px] text-[#999]">
                    <MapPin className="h-3 w-3" />
                    {dev.location}
                  </div>

                  {/* Stats */}
                  <div className="mt-4 flex items-center gap-4 text-[12px] text-[#666]">
                    <span className="flex items-center gap-1">
                      <Compass className="h-3 w-3" />
                      {dev.projects} projects
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {dev.followers.toLocaleString()}
                    </span>
                  </div>

                  {/* Featured project */}
                  <div className="mt-3 rounded-lg bg-[#F8F6FF] px-3 py-2">
                    <p className="text-[11px] text-[#999]">Featured</p>
                    <p className="text-[12px] font-medium text-[#315BFF]">{dev.featured}</p>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 flex gap-2">
                    <Link href={`/profile/${dev.id}`} className="flex-1 rounded-lg border border-black/10 bg-white py-2 text-center text-[12px] font-medium text-[#555] transition-colors hover:bg-gray-50">
                      View Profile
                    </Link>
                    <button type="button" className="flex-1 rounded-lg bg-[#315BFF] py-2 text-[12px] font-semibold text-white transition-colors hover:bg-[#254DE8]">
                      Follow
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
