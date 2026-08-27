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
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Clock,
  Send,
  Filter,
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
  { label: 'Feedback', icon: MessageSquare, href: '/feedback', active: true },
];

type FeedbackItem = {
  id: string;
  projectName: string;
  user: string;
  avatar: string;
  avatarColor: string;
  type: 'suggestion' | 'bug' | 'praise' | 'question';
  message: string;
  time: string;
  upvotes: number;
  replies: number;
  responded: boolean;
};

const feedbackItems: FeedbackItem[] = [
  { id: '1', projectName: 'FlowBoard', user: 'Sarah Johnson', avatar: 'SJ', avatarColor: '#8B5CF6', type: 'suggestion', message: 'It would be great to have a dark mode option for the canvas. Working late at night with a bright background is tiring.', time: '2 hours ago', upvotes: 24, replies: 3, responded: true },
  { id: '2', projectName: 'FlowBoard', user: 'Mike Chen', avatar: 'MC', avatarColor: '#10B981', type: 'praise', message: 'Absolutely love the real-time collaboration feature! The cursor tracking is super smooth and the AI suggestions are spot on.', time: '5 hours ago', upvotes: 18, replies: 1, responded: false },
  { id: '3', projectName: 'ShipFast', user: 'Emma Wilson', avatar: 'EW', avatarColor: '#F59E0B', type: 'bug', message: 'The deployment step seems to hang when deploying to Vercel. It works fine on Netlify though. Any ideas?', time: '1 day ago', upvotes: 12, replies: 5, responded: true },
  { id: '4', projectName: 'CodeSnap', user: 'Alex Park', avatar: 'AP', avatarColor: '#EF4444', type: 'suggestion', message: 'Could you add support for more programming languages? I mainly use Rust and Go, and the syntax highlighting is missing for those.', time: '2 days ago', upvotes: 9, replies: 2, responded: false },
  { id: '5', projectName: 'FlowBoard', user: 'David Kim', avatar: 'DK', avatarColor: '#315BFF', type: 'question', message: 'Is there a plan to support mobile editing? Would love to make quick edits from my phone.', time: '3 days ago', upvotes: 15, replies: 4, responded: true },
  { id: '6', projectName: 'ShipFast', user: 'Lisa Brown', avatar: 'LB', avatarColor: '#EC4899', type: 'praise', message: 'This saved me weeks of work! The template system is incredibly well thought out. Highly recommend to any founder.', time: '5 days ago', upvotes: 31, replies: 2, responded: false },
];

const typeStyles: Record<string, { bg: string; text: string; label: string }> = {
  suggestion: { bg: 'bg-[#315BFF]/10', text: 'text-[#315BFF]', label: 'Suggestion' },
  bug: { bg: 'bg-[#EF4444]/10', text: 'text-[#EF4444]', label: 'Bug Report' },
  praise: { bg: 'bg-[#34C759]/10', text: 'text-[#34C759]', label: 'Praise' },
  question: { bg: 'bg-[#F59E0B]/10', text: 'text-[#F59E0B]', label: 'Question' },
};

/* ─── Page ─────────────────────────────────────────────────── */

export default function FeedbackPage() {
  const [filterType, setFilterType] = useState<string>('all');
  const [replyText, setReplyText] = useState('');

  const filtered = filterType === 'all' ? feedbackItems : feedbackItems.filter(f => f.type === filterType);

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
                    <Link key={item.label} href={item.href} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] font-medium transition-colors duration-150 ${item.active ? 'bg-[#315BFF]/10 text-[#315BFF]' : 'text-[#555] hover:bg-black/[0.03] hover:text-[#111]'}`}>
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
                <h1 className="text-[28px] font-bold text-[#111]">Feedback</h1>
                <p className="mt-1 text-[14px] text-[#666]">Review feedback from users on your projects</p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-5 grid grid-cols-4 gap-3">
              <div className="rounded-xl border border-black/[0.04] bg-white/60 p-4 backdrop-blur-sm">
                <p className="text-[20px] font-bold text-[#111]">24</p>
                <p className="text-[11px] text-[#666]">Total feedback</p>
              </div>
              <div className="rounded-xl border border-black/[0.04] bg-white/60 p-4 backdrop-blur-sm">
                <p className="text-[20px] font-bold text-[#315BFF]">8</p>
                <p className="text-[11px] text-[#666]">Suggestions</p>
              </div>
              <div className="rounded-xl border border-black/[0.04] bg-white/60 p-4 backdrop-blur-sm">
                <p className="text-[20px] font-bold text-[#EF4444]">3</p>
                <p className="text-[11px] text-[#666]">Bug reports</p>
              </div>
              <div className="rounded-xl border border-black/[0.04] bg-white/60 p-4 backdrop-blur-sm">
                <p className="text-[20px] font-bold text-[#34C759]">13</p>
                <p className="text-[11px] text-[#666]">Responded</p>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="mt-5 flex items-center gap-1.5 overflow-x-auto">
              <Filter className="h-4 w-4 shrink-0 text-[#999]" />
              {['all', 'suggestion', 'bug', 'praise', 'question'].map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setFilterType(filter)}
                  className={`shrink-0 rounded-lg px-3 py-1.5 text-[12px] font-medium capitalize transition-colors duration-150 ${filterType === filter ? 'bg-[#315BFF] text-white' : 'bg-white/60 text-[#555] hover:bg-white hover:text-[#111]'}`}
                >
                  {filter === 'all' ? 'All' : filter}
                </button>
              ))}
            </div>

            {/* Feedback Items */}
            <div className="mt-5 space-y-3">
              {filtered.map((item) => {
                const style = typeStyles[item.type];
                return (
                  <div key={item.id} className="rounded-xl border border-black/[0.04] bg-white/60 p-5 backdrop-blur-sm transition-all duration-200 hover:bg-white/80">
                    {/* Header */}
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 shrink-0 rounded-full flex items-center justify-center text-[12px] font-bold text-white" style={{ backgroundColor: item.avatarColor }}>
                        {item.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[14px] font-semibold text-[#111]">{item.user}</span>
                          <span className="text-[11px] text-[#999]">on</span>
                          <span className="text-[13px] font-medium text-[#315BFF]">{item.projectName}</span>
                          <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${style.bg} ${style.text}`}>
                            {style.label}
                          </span>
                          {item.responded && (
                            <span className="rounded-full bg-[#34C759]/10 px-2 py-0.5 text-[10px] font-semibold text-[#34C759]">
                              Responded
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-[14px] text-[#555] leading-relaxed">{item.message}</p>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-4 flex items-center justify-between border-t border-black/[0.04] pt-3">
                      <div className="flex items-center gap-4 text-[12px] text-[#999]">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {item.time}
                        </span>
                        <button type="button" className="flex items-center gap-1 hover:text-[#555]">
                          <ThumbsUp className="h-3.5 w-3.5" />
                          {item.upvotes}
                        </button>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-3.5 w-3.5" />
                          {item.replies} replies
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          placeholder="Reply..."
                          className="h-8 w-[200px] rounded-lg border border-black/10 bg-white/60 px-3 text-[12px] text-[#111] placeholder:text-[#aaa] outline-none focus:border-[#315BFF]/30 focus:ring-1 focus:ring-[#315BFF]/15"
                        />
                        <button type="button" className="rounded-lg bg-[#315BFF] p-2 text-white hover:bg-[#254DE8] transition-colors">
                          <Send className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
