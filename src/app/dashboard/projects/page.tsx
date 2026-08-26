'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ProfileDropdown from '@/components/layout/ProfileDropdown';
import {
  Home,
  Compass,
  TrendingUp,
  Bookmark as BookmarkIcon,
  FolderOpen,
  Plus,
  Search,
  Bell,
  ChevronDown,
  Eye,
  Users,
  Heart,
  MessageSquare,
  Calendar,
  MoreHorizontal,
  FileText,
  Activity,
  ArrowUp,
  Star,
  Edit3,
  ExternalLink,
  Trash2,
  BarChart3,
} from 'lucide-react';

const sidebarItems = [
  { icon: Home, label: 'Home', href: '/home' },
  { icon: Compass, label: 'Discover', href: '/discover' },
  { icon: TrendingUp, label: 'Trending', href: '/trending' },
  { icon: BookmarkIcon, label: 'Bookmarks', href: '/saved' },
  
];

const yourSpace = [
  { icon: Compass, label: 'My Projects', href: '/dashboard/projects', active: true },
  { icon: FileText, label: 'Drafts', href: '/drafts' },
  { icon: MessageSquare, label: 'Feedback', href: '/feedback' },
  { icon: Activity, label: 'Analytics', href: '/dashboard' },
];

const projects = [
  { id: '1', name: 'FlowBoard', tagline: 'AI powered whiteboard for collaborative teams', status: 'live', image: '/landing/dashboard-tilt.png', views: '8,432', visitors: '2,945', likes: 842, comments: 154, rating: 4.9, letter: 'F', color: '#315BFF', category: 'SaaS', created: 'Jan 24, 2024' },
  { id: '2', name: 'ShipFast', tagline: 'Ship your MVP in days not months', status: 'live', image: '/landing/code.png', views: '2,841', visitors: '1,142', likes: 312, comments: 68, rating: 4.7, letter: 'S', color: '#8B5CF6', category: 'Developer tools', created: 'Mar 12, 2024' },
  { id: '3', name: 'MindMap AI', tagline: 'AI powered mind mapping and brainstorming', status: 'draft', image: '/landing/delicious.png', views: '1,642', visitors: '731', likes: 198, comments: 42, rating: 4.5, letter: 'M', color: '#10B981', category: 'AI', created: 'May 8, 2024' },
  { id: '4', name: 'LandingKit', tagline: 'Beautiful landing page templates for startups', status: 'live', image: '/landing/kartz.png', views: '842', visitors: '312', likes: 93, comments: 15, rating: 4.3, letter: 'L', color: '#6366F1', category: 'Design', created: 'Jun 20, 2024' },
];

/* ─── Page ─────────────────────────────────────────────────── */

export default function ProjectsPage() {
  const [statusFilter, setStatusFilter] = useState('all');

  const filtered = statusFilter === 'all' ? projects : projects.filter(p => p.status === statusFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f7ff] via-[#f3f1ff] to-[#e8e4ff] flex">
      {/* Sidebar */}
      <aside className="w-[220px] min-h-screen bg-white/60 backdrop-blur-xl border-r border-white/40 p-5 flex flex-col fixed left-0 top-0 bottom-0 z-10">
        <div className="flex items-center gap-2 mb-10">
          <Image src="/logo.svg" alt="Scoutts" width={24} height={30} className="h-auto" />
          <span className="text-[18px] font-bold text-[#111]">Scoutts</span>
        </div>
        <nav className="flex-1 flex flex-col gap-1">
          {sidebarItems.map((item) => (
            <Link key={item.label} href={item.href} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] font-medium text-[#555] hover:bg-[#f0eeff] transition-colors">
              <item.icon size={18} strokeWidth={1.8} />
              {item.label}
            </Link>
          ))}
          <div className="mt-6 mb-2 px-3 text-[11px] font-semibold tracking-wider text-[#888] uppercase">Your Space</div>
          {yourSpace.map((item) => (
            <Link key={item.label} href={item.href} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] font-medium transition-colors ${item.active ? 'bg-[#f0eeff] text-[#315BFF]' : 'text-[#555] hover:bg-[#f0eeff]'}`}>
              <item.icon size={18} strokeWidth={1.8} />
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/launch" className="flex items-center justify-center gap-2 w-full py-3 bg-[#315BFF] text-white rounded-xl text-[14px] font-semibold hover:bg-[#2a4de6] transition-colors mt-4">
          <Plus size={18} />
          Ship a product
        </Link>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-[220px] min-h-screen flex flex-col">
        <header className="flex items-center justify-between px-8 py-4 bg-white/40 backdrop-blur-xl border-b border-white/30">
          <div className="flex-1 max-w-md">
            <div className="flex items-center gap-2 bg-white/70 border border-white/50 rounded-full px-4 py-2.5">
              <Search size={16} className="text-[#999]" />
              <input type="text" placeholder="search project , developers ........" className="flex-1 bg-transparent text-[13px] text-[#333] placeholder-[#aaa] outline-none" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-[#555] hover:text-[#333]">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#315BFF] rounded-full"></span>
            </button>
            <ProfileDropdown />
          </div>
        </header>

        <main className="flex-1 px-8 py-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-[24px] font-bold text-[#111] mb-1">My Projects</h1>
              <p className="text-[14px] text-[#666]">Manage and track all your published projects</p>
            </div>
            <Link href="/launch" className="flex items-center gap-2 px-5 py-2.5 bg-[#315BFF] text-white rounded-xl text-[13px] font-semibold shadow-[0_2px_8px_rgba(49,91,255,0.25)] hover:bg-[#2a4de6] transition-colors">
              <Plus size={16} />
              New Project
            </Link>
          </div>

          {/* Stats Summary */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-white/50 backdrop-blur rounded-2xl p-4 border border-white/40">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#f0eeff] flex items-center justify-center"><Eye size={16} className="text-[#315BFF]" /></div>
                <span className="text-[12px] text-[#888]">Total Views</span>
              </div>
              <p className="text-[22px] font-bold text-[#111]">13.8K</p>
            </div>
            <div className="bg-white/50 backdrop-blur rounded-2xl p-4 border border-white/40">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#f0eeff] flex items-center justify-center"><Heart size={16} className="text-[#315BFF]" /></div>
                <span className="text-[12px] text-[#888]">Total Likes</span>
              </div>
              <p className="text-[22px] font-bold text-[#111]">1,445</p>
            </div>
            <div className="bg-white/50 backdrop-blur rounded-2xl p-4 border border-white/40">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#f0eeff] flex items-center justify-center"><MessageSquare size={16} className="text-[#315BFF]" /></div>
                <span className="text-[12px] text-[#888]">Comments</span>
              </div>
              <p className="text-[22px] font-bold text-[#111]">279</p>
            </div>
            <div className="bg-white/50 backdrop-blur rounded-2xl p-4 border border-white/40">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#f0eeff] flex items-center justify-center"><Star size={16} className="text-[#315BFF]" /></div>
                <span className="text-[12px] text-[#888]">Avg Rating</span>
              </div>
              <p className="text-[22px] font-bold text-[#111]">4.6</p>
            </div>
          </div>

          {/* Filter */}
          <div className="flex items-center gap-2 mb-5">
            {['all', 'live', 'draft'].map((filter) => (
              <button key={filter} onClick={() => setStatusFilter(filter)} className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-colors capitalize ${statusFilter === filter ? 'bg-[#315BFF] text-white' : 'bg-white/60 text-[#555] hover:bg-white'}`}>
                {filter}
              </button>
            ))}
          </div>

          {/* Projects List */}
          <div className="space-y-3">
            {filtered.map((project) => (
              <div key={project.id} className="flex items-center gap-5 bg-white/50 backdrop-blur rounded-2xl p-5 border border-white/40 hover:bg-white/70 transition-colors">
                {/* Image */}
                <div className="relative h-[80px] w-[140px] shrink-0 overflow-hidden rounded-xl bg-slate-900">
                  <Image src={project.image} alt={project.name} fill className="object-cover" sizes="140px" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[16px] font-semibold text-[#111]">{project.name}</h3>
                    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${project.status === 'live' ? 'bg-[#34C759]/10 text-[#34C759]' : 'bg-[#F59E0B]/10 text-[#F59E0B]'}`}>
                      {project.status}
                    </span>
                    <span className="rounded-md bg-[#f0eeff] px-2 py-0.5 text-[10px] font-medium text-[#315BFF]">{project.category}</span>
                  </div>
                  <p className="mt-1 text-[13px] text-[#666] truncate">{project.tagline}</p>
                  <div className="mt-2 flex items-center gap-4 text-[12px] text-[#888]">
                    <span className="flex items-center gap-1"><Eye size={12} />{project.views}</span>
                    <span className="flex items-center gap-1"><Users size={12} />{project.visitors}</span>
                    <span className="flex items-center gap-1"><ArrowUp size={12} className="text-[#34C759]" />{project.likes}</span>
                    <span className="flex items-center gap-1"><MessageSquare size={12} />{project.comments}</span>
                    <span className="flex items-center gap-1"><Star size={12} className="fill-[#111]" />{project.rating}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  <Link href={`/product/${project.id}`} className="flex items-center gap-1.5 rounded-lg border border-white/50 bg-white/60 px-3 py-2 text-[12px] font-medium text-[#555] hover:bg-white/80 transition-colors">
                    <ExternalLink size={12} />
                    View
                  </Link>
                  <Link href={`/dashboard`} className="flex items-center gap-1.5 rounded-lg border border-white/50 bg-white/60 px-3 py-2 text-[12px] font-medium text-[#555] hover:bg-white/80 transition-colors">
                    <BarChart3 size={12} />
                    Analytics
                  </Link>
                  <button className="p-2 rounded-lg text-[#888] hover:bg-white/60 transition-colors">
                    <MoreHorizontal size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-12 text-center">
              <FolderOpen className="mx-auto h-12 w-12 text-[#ccc]" />
              <p className="mt-3 text-[16px] font-semibold text-[#111]">No projects found</p>
              <p className="mt-1 text-[13px] text-[#666]">
                {statusFilter === 'draft' ? 'No draft projects' : 'Start by shipping your first product'}
              </p>
              <Link href="/launch" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#315BFF] px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-[#2a4de6]">
                <Plus size={14} />
                Ship a product
              </Link>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
