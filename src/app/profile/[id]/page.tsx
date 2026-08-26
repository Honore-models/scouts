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
  MapPin,
  Calendar,
  ExternalLink,
  ArrowLeft,
  Globe,
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

const profileData = {
  name: 'David Kim',
  handle: '@davidkim',
  bio: 'Building tools that help teams think and create better together. Passionate about AI, collaboration, and developer experience.',
  location: 'San Francisco, CA',
  website: 'https://davidkim.dev',
  joinDate: 'March 2023',
  followers: 2540,
  following: 186,
  projects: 12,
  totalUpvotes: 4820,
  avatar: 'DK',
  color: '#315BFF',
};

const profileProjects = [
  { id: '1', name: 'FlowBoard', tagline: 'AI powered whiteboard for collaborative teams', image: '/landing/dashboard-tilt.png', upvotes: 1240, comments: 89, rating: 4.9, category: 'SaaS' },
  { id: '2', name: 'FlowBoard Pro', tagline: 'Enterprise version with advanced AI features', image: '/landing/code.png', upvotes: 856, comments: 52, rating: 4.7, category: 'SaaS' },
  { id: '3', name: 'TeamSync', tagline: 'Real time collaboration toolkit for remote teams', image: '/landing/delicious.png', upvotes: 634, comments: 38, rating: 4.5, category: 'Developer tools' },
  { id: '4', name: 'DiagramAI', tagline: 'AI powered diagram and flowchart generator', image: '/landing/kartz.png', upvotes: 423, comments: 25, rating: 4.3, category: 'AI' },
];

/* ─── Page ─────────────────────────────────────────────────── */

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('projects');

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
            <Link href="/discover" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#555] hover:text-[#111]">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>

            {/* Profile Header */}
            <div className="mt-6 flex items-start gap-6">
              <div className="h-20 w-20 shrink-0 rounded-full flex items-center justify-center text-[24px] font-bold text-white" style={{ backgroundColor: profileData.color }}>
                {profileData.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h1 className="text-[24px] font-bold text-[#111]">{profileData.name}</h1>
                  <span className="text-[14px] text-[#999]">{profileData.handle}</span>
                </div>
                <p className="mt-2 text-[14px] text-[#555] leading-relaxed">{profileData.bio}</p>
                <div className="mt-3 flex items-center gap-4 text-[12px] text-[#999]">
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{profileData.location}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />Joined {profileData.joinDate}</span>
                  <span className="flex items-center gap-1"><Globe className="h-3 w-3" />{profileData.website}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button type="button" className="rounded-xl bg-[#315BFF] px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_2px_8px_rgba(49,91,255,0.25)] hover:bg-[#254DE8]">
                  Follow
                </button>
                <button type="button" className="rounded-xl border border-black/10 bg-white px-5 py-2.5 text-[13px] font-medium text-[#555] hover:bg-gray-50">
                  Message
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 flex items-center gap-6 rounded-xl border border-black/[0.04] bg-white/60 p-4 backdrop-blur-sm">
              <div className="text-center">
                <p className="text-[20px] font-bold text-[#111]">{profileData.projects}</p>
                <p className="text-[11px] text-[#999]">Projects</p>
              </div>
              <div className="h-8 w-px bg-black/[0.06]" />
              <div className="text-center">
                <p className="text-[20px] font-bold text-[#111]">{profileData.followers.toLocaleString()}</p>
                <p className="text-[11px] text-[#999]">Followers</p>
              </div>
              <div className="h-8 w-px bg-black/[0.06]" />
              <div className="text-center">
                <p className="text-[20px] font-bold text-[#111]">{profileData.following}</p>
                <p className="text-[11px] text-[#999]">Following</p>
              </div>
              <div className="h-8 w-px bg-black/[0.06]" />
              <div className="text-center">
                <p className="text-[20px] font-bold text-[#111]">{profileData.totalUpvotes.toLocaleString()}</p>
                <p className="text-[11px] text-[#999]">Total Upvotes</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-6 border-b border-black/[0.06]">
              <div className="flex gap-6">
                {['projects', 'about'].map((tab) => (
                  <button key={tab} type="button" onClick={() => setActiveTab(tab)} className={`pb-3 text-[14px] font-medium capitalize transition-colors duration-150 ${activeTab === tab ? 'border-b-2 border-[#315BFF] text-[#315BFF]' : 'text-[#666] hover:text-[#111]'}`}>
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            {activeTab === 'projects' && (
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {profileProjects.map((product) => (
                  <Link key={product.id} href={`/product/${product.id}`} className="group overflow-hidden rounded-xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
                    <div className="relative h-[160px] w-full overflow-hidden bg-slate-900">
                      <Image src={product.image} alt={product.name} fill className="object-cover" sizes="33vw" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-[15px] font-semibold text-[#111]">{product.name}</h3>
                      <p className="mt-1 text-[12px] text-[#666] line-clamp-2">{product.tagline}</p>
                      <div className="mt-2 flex items-center gap-3 text-[11px] text-[#666]">
                        <span className="flex items-center gap-1"><ArrowUp className="h-3 w-3 text-[#34C759]" />{product.upvotes}</span>
                        <span className="flex items-center gap-1"><MessageSquare className="h-3 w-3" />{product.comments}</span>
                        <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-[#111] text-[#111]" />{product.rating}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* About */}
            {activeTab === 'about' && (
              <div className="mt-6 max-w-2xl">
                <h2 className="text-[18px] font-bold text-[#111]">About {profileData.name}</h2>
                <p className="mt-3 text-[14px] leading-relaxed text-[#555]">{profileData.bio}</p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-[13px] text-[#555]">
                    <MapPin className="h-4 w-4 text-[#999]" />
                    {profileData.location}
                  </div>
                  <div className="flex items-center gap-3 text-[13px] text-[#555]">
                    <Globe className="h-4 w-4 text-[#999]" />
                    <a href={profileData.website} className="text-[#315BFF] hover:underline">{profileData.website}</a>
                  </div>
                  <div className="flex items-center gap-3 text-[13px] text-[#555]">
                    <Calendar className="h-4 w-4 text-[#999]" />
                    Joined {profileData.joinDate}
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
