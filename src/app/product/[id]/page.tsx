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
  ArrowLeft,
  Calendar,
  Reply,
  ThumbsUp,
  ExternalLink,
} from 'lucide-react';

/* ─── Data ─────────────────────────────────────────────────── */

const sidebarNav = [
  { label: 'Home', icon: Home, href: '/home' },
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

const features = [
  { title: 'AI Powered assistance', desc: 'Get smart suggestions, auto generate diagrams, and improve your workflow' },
  { title: 'Real time collaboration', desc: 'Work together with your team in real time with cursors, comments and voice chat' },
  { title: 'Infinite canvas', desc: 'No limits create connect and visualize your ideas freely' },
  { title: 'Multiple templates', desc: 'Use ready made templates for flowcharts mind maps wireframes and more' },
  { title: 'Export & intergrations', desc: 'Export to PDF ,SVG ,PDF , or intergrate with your favorite tool' },
];

const techStack = [
  { name: 'React', icon: '⚛️', color: '#61DAFB' },
  { name: 'Typescript', icon: 'TS', color: '#3178C6' },
  { name: 'Nodejs', icon: 'N', color: '#339933' },
  { name: 'Tailwind css', icon: '~', color: '#06B6D4' },
  { name: 'MongoDB', icon: 'M', color: '#47A248' },
];

const tags = ['productivity', 'Collaboration', 'AI', 'SaaS', 'Design'];

const comments = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'SJ',
    time: '2h ago',
    text: 'This is exactly what our team needed the AI suggestions are 🔥 and real time collaboration is super smooth',
    likes: 12,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    avatar: 'SJ',
    time: '2h ago',
    text: 'This is exactly what our team needed the AI suggestions are 🔥 and real time collaboration is super smooth',
    likes: 12,
  },
];

const similarProjects = [
  { name: 'MiroClone', tagline: 'Online collaborative teams', votes: 482 },
  { name: 'MiroClone', tagline: 'Online collaborative teams', votes: 482 },
  { name: 'MiroClone', tagline: 'Online collaborative teams', votes: 482 },
];

/* ─── Page ─────────────────────────────────────────────────── */

export default function ProductDetailPage() {
  const [activeTab, setActiveTab] = useState('about');
  const [comment, setComment] = useState('');

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
            <Link href="/" className="mb-8 flex items-center gap-2.5 text-[#111] no-underline">
              <Image src="/logo.svg" alt="ScouTTs" width={32} height={32} unoptimized />
              <span className="text-[17px] font-extrabold tracking-tight">Scoutts</span>
            </Link>

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
            <div className="relative w-full max-w-[480px]">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#999]" />
              <input
                type="text"
                placeholder="search project , developers ........."
                className="h-10 w-full rounded-lg border border-black/10 bg-white/70 pl-10 pr-4 text-[13px] text-[#111] placeholder:text-[#aaa] outline-none focus:border-[#315BFF]/30 focus:bg-white focus:ring-2 focus:ring-[#315BFF]/15"
              />
            </div>
            <div className="flex items-center gap-4">
              <button type="button" className="relative text-[#555] hover:text-[#111]">
                <Bell className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#315BFF]" />
              </button>
              <ProfileDropdown />
            </div>
          </header>

          {/* ── Content ── */}
          <main className="px-6 py-6">
            {/* Back link */}
            <Link href="/discover" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#555] hover:text-[#111]">
              <ArrowLeft className="h-4 w-4" />
              Back to Explore
            </Link>

            {/* Product Header */}
            <div className="mt-4 flex items-start justify-between gap-6">
              <div className="flex-1">
                <h1 className="text-[28px] font-bold text-[#111]">FlowBoard</h1>
                <p className="mt-1 text-[14px] text-[#666]">AI powered whiteboard for collaborative teams</p>

                {/* Author */}
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-8 w-8 overflow-hidden rounded-full bg-[#E8EDFF]">
                    <div className="flex h-full w-full items-center justify-center text-[11px] font-bold text-[#315BFF]">DK</div>
                  </div>
                  <span className="text-[13px] text-[#555]">by David Kim</span>
                  <span className="text-[12px] text-[#999]">2.5K followers</span>
                  <button type="button" className="rounded-lg border border-black/10 bg-white px-3 py-1 text-[12px] font-medium text-[#555] hover:bg-gray-50">
                    Follow
                  </button>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="rounded-lg bg-white/60 px-3 py-1 text-[12px] font-medium text-[#555] border border-black/[0.04]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col gap-2">
                <button type="button" className="flex items-center gap-2 rounded-xl bg-[#315BFF] px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_2px_8px_rgba(49,91,255,0.25)] hover:bg-[#254DE8]">
                  <ArrowUp className="h-4 w-4" />
                  Upvote
                </button>
                <button type="button" className="flex items-center gap-2 rounded-xl border border-black/10 bg-white px-5 py-2.5 text-[13px] font-medium text-[#555] hover:bg-gray-50">
                  <Bookmark className="h-4 w-4" />
                  Save for later
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="mt-6 overflow-hidden rounded-2xl bg-[#1a1a2e]">
              <div className="relative h-[320px]">
                <Image
                  src="/landing/dashboard-tilt.png"
                  alt="FlowBoard preview"
                  fill
                  className="object-cover"
                  sizes="60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/80 via-transparent to-transparent">
                  <div className="p-5">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                      <Star className="h-3 w-3 fill-[#F0B48F] text-[#F0B48F]" />
                      Featured today
                    </div>
                    <h2 className="mt-3 text-[24px] font-bold text-white">
                      Flow<span className="text-[#7958FF]">Board</span>
                    </h2>
                    <p className="mt-1 text-[13px] text-[#ccc]">AI powered whiteboard for collaborative teams</p>
                    <p className="mt-2 text-[12px] text-[#999]">by David Kim</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="mt-4 flex gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative h-[70px] w-[100px] overflow-hidden rounded-lg bg-slate-200">
                  <Image
                    src="/landing/code.png"
                    alt={`Screenshot ${i}`}
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                </div>
              ))}
              <div className="flex h-[70px] w-[100px] items-center justify-center rounded-lg bg-[#315BFF] text-[16px] font-bold text-white">
                +8
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-8 border-b border-black/[0.06]">
              <div className="flex gap-6">
                {['about', 'features', 'techstack', 'reviews'].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 text-[14px] font-medium capitalize transition-colors duration-150 ${
                      activeTab === tab
                        ? 'border-b-2 border-[#315BFF] text-[#315BFF]'
                        : 'text-[#666] hover:text-[#111]'
                    }`}
                  >
                    {tab === 'techstack' ? 'TechStack' : tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="mt-6">
              {/* About */}
              {activeTab === 'about' && (
                <div>
                  <h2 className="text-[18px] font-bold text-[#111]">About FlowBoard</h2>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#555]">
                    FlowBoard is an AI powered online whiteboard designed for modern teams. Brainstorm, diagram,
                    and design together in real time. From idea to execution, keep everything on an infinite canvas
                  </p>

                  <div className="mt-6 space-y-4">
                    {features.map((f) => (
                      <div key={f.title} className="flex gap-3">
                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#315BFF]/10">
                          <div className="h-2 w-2 rounded-full bg-[#315BFF]" />
                        </div>
                        <div>
                          <p className="text-[14px] font-semibold text-[#111]">{f.title}</p>
                          <p className="mt-0.5 text-[13px] text-[#666]">{f.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-8">
                    <h3 className="text-[16px] font-bold text-[#111]">Tech Stack</h3>
                    <div className="mt-3 flex flex-wrap gap-4">
                      {techStack.map((t) => (
                        <div key={t.name} className="flex items-center gap-2 text-[13px] font-medium text-[#555]">
                          <span className="flex h-6 w-6 items-center justify-center rounded-md text-[10px] font-bold text-white" style={{ backgroundColor: t.color }}>
                            {t.icon}
                          </span>
                          {t.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Features */}
              {activeTab === 'features' && (
                <div>
                  <h2 className="text-[18px] font-bold text-[#111]">Features</h2>
                  <div className="mt-4 space-y-4">
                    {features.map((f) => (
                      <div key={f.title} className="rounded-xl border border-black/[0.04] bg-white/60 p-4">
                        <p className="text-[14px] font-semibold text-[#111]">{f.title}</p>
                        <p className="mt-1 text-[13px] text-[#666]">{f.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TechStack */}
              {activeTab === 'techstack' && (
                <div>
                  <h2 className="text-[18px] font-bold text-[#111]">Tech Stack</h2>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                    {techStack.map((t) => (
                      <div key={t.name} className="flex items-center gap-3 rounded-xl border border-black/[0.04] bg-white/60 p-4">
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg text-[14px] font-bold text-white" style={{ backgroundColor: t.color }}>
                          {t.icon}
                        </span>
                        <span className="text-[13px] font-medium text-[#111]">{t.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Reviews */}
              {activeTab === 'reviews' && (
                <div>
                  <h2 className="text-[18px] font-bold text-[#111]">Reviews</h2>
                  <p className="mt-2 text-[14px] text-[#666]">No reviews yet. Be the first to review this project.</p>
                </div>
              )}
            </div>

            {/* Comments */}
            <div className="mt-8">
              <h2 className="text-[18px] font-bold text-[#111]">Comments</h2>

              {/* Comment input */}
              <div className="mt-4 flex items-start gap-3">
                <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full">
                  <Image src="/avatar.png" alt="You" width={32} height={32} className="h-full w-full object-cover" unoptimized />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write a comment..."
                    className="h-10 w-full rounded-lg border border-black/10 bg-white/60 px-4 text-[13px] text-[#111] placeholder:text-[#aaa] outline-none focus:border-[#315BFF]/30 focus:bg-white focus:ring-2 focus:ring-[#315BFF]/15"
                  />
                </div>
                <button type="button" className="rounded-lg bg-[#315BFF] px-4 py-2 text-[12px] font-semibold text-white hover:bg-[#254DE8]">
                  Post comment
                </button>
              </div>

              {/* Comment list */}
              <div className="mt-6 space-y-4">
                {comments.map((c) => (
                  <div key={c.id} className="flex items-start gap-3">
                    <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full bg-[#E8EDFF]">
                      <div className="flex h-full w-full items-center justify-center text-[10px] font-bold text-[#315BFF]">{c.avatar}</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[13px] font-semibold text-[#111]">{c.name}</span>
                        <span className="text-[11px] text-[#999]">{c.time}</span>
                      </div>
                      <p className="mt-1 text-[13px] text-[#555]">{c.text}</p>
                      <div className="mt-2 flex items-center gap-4 text-[11px] text-[#999]">
                        <button type="button" className="flex items-center gap-1 hover:text-[#555]">
                          <Reply className="h-3.5 w-3.5" />
                          reply
                        </button>
                        <button type="button" className="flex items-center gap-1 hover:text-[#555]">
                          <ThumbsUp className="h-3.5 w-3.5" />
                          {c.likes}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button type="button" className="mt-6 w-full rounded-xl border border-[#315BFF] py-2.5 text-[13px] font-medium text-[#315BFF] hover:bg-[#315BFF]/5">
                View all comments
              </button>
            </div>
          </main>
        </div>

        {/* ═══════════════════════════════════════════════════
            RIGHT SIDEBAR
            ═══════════════════════════════════════════════════ */}
        <aside className="hidden w-[280px] shrink-0 border-l border-black/[0.04] bg-white/40 p-5 backdrop-blur-sm xl:block">
          {/* About the author */}
          <div className="rounded-xl border border-black/[0.04] bg-white/60 p-4">
            <h3 className="text-[13px] font-semibold text-[#111]">About the author</h3>
            <div className="mt-3 flex items-center gap-2.5">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-[#E8EDFF]">
                <div className="flex h-full w-full items-center justify-center text-[12px] font-bold text-[#315BFF]">DK</div>
              </div>
              <div>
                <p className="text-[13px] font-semibold text-[#111]">David Kim</p>
                <p className="text-[11px] text-[#999]">@davidkim</p>
              </div>
            </div>
            <p className="mt-3 text-[12px] leading-relaxed text-[#666]">
              Building tools that help teams think and create better together.
            </p>
            <button type="button" className="mt-3 w-full rounded-lg border border-black/10 bg-white py-2 text-[12px] font-medium text-[#555] hover:bg-gray-50">
              View Profile
            </button>
          </div>

          {/* Projects stats */}
          <div className="mt-4 rounded-xl border border-black/[0.04] bg-white/60 p-4">
            <h3 className="text-[13px] font-semibold text-[#111]">Projects stats</h3>
            <div className="mt-3 space-y-3">
              <div className="flex items-center gap-2.5">
                <ArrowUp className="h-4 w-4 text-[#34C759]" />
                <div>
                  <p className="text-[14px] font-bold text-[#111]">482</p>
                  <p className="text-[11px] text-[#999]">Upvotes</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="h-4 w-4 text-[#555]" />
                <div>
                  <p className="text-[14px] font-bold text-[#111]">68</p>
                  <p className="text-[11px] text-[#999]">Comments</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Star className="h-4 w-4 fill-[#111] text-[#111]" />
                <div>
                  <p className="text-[14px] font-bold text-[#111]">4.8</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Calendar className="h-4 w-4 text-[#555]" />
                <div>
                  <p className="text-[12px] text-[#666]">Launched on Jan 24,2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-4 rounded-xl border border-black/[0.04] bg-white/60 p-4">
            <h3 className="text-[13px] font-semibold text-[#111]">Tags</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span key={tag} className="rounded-md bg-[#F3F4F6] px-2 py-1 text-[11px] font-medium text-[#666]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Built with */}
          <div className="mt-4 rounded-xl border border-black/[0.04] bg-white/60 p-4">
            <h3 className="text-[13px] font-semibold text-[#111]">Built with</h3>
            <div className="mt-3 space-y-2.5">
              {techStack.map((t) => (
                <div key={t.name} className="flex items-center gap-2.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md text-[9px] font-bold text-white" style={{ backgroundColor: t.color }}>
                    {t.icon}
                  </span>
                  <span className="text-[12px] font-medium text-[#555]">{t.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Similar projects */}
          <div className="mt-4 rounded-xl border border-black/[0.04] bg-white/60 p-4">
            <h3 className="text-[13px] font-semibold text-[#111]">Similar projects</h3>
            <div className="mt-3 space-y-3">
              {similarProjects.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-slate-200">
                    <Image src="/landing/code.png" alt={p.name} width={40} height={40} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[12px] font-semibold text-[#111]">{p.name}</p>
                    <p className="text-[10px] text-[#999]">{p.tagline}</p>
                    <p className="flex items-center gap-1 text-[10px] text-[#666]">
                      <ArrowUp className="h-2.5 w-2.5 text-[#34C759]" />
                      {p.votes}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button type="button" className="mt-3 w-full rounded-lg border border-black/10 bg-white py-2 text-[11px] font-medium text-[#555] hover:bg-gray-50">
              View more projects
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
