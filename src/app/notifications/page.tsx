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
  Heart,
  UserPlus,
  MessageCircle,
  Check,
  Settings,
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

type Notification = {
  id: string;
  type: 'upvote' | 'comment' | 'follow' | 'like' | 'mention';
  user: string;
  avatar: string;
  avatarColor: string;
  action: string;
  target: string;
  time: string;
  read: boolean;
};

const notifications: Notification[] = [
  { id: '1', type: 'upvote', user: 'David Kim', avatar: 'DK', avatarColor: '#315BFF', action: 'upvoted your project', target: 'FlowBoard', time: '2 min ago', read: false },
  { id: '2', type: 'comment', user: 'Sarah Johnson', avatar: 'SJ', avatarColor: '#8B5CF6', action: 'commented on', target: 'FlowBoard', time: '15 min ago', read: false },
  { id: '3', type: 'follow', user: 'Liam Chen', avatar: 'LC', avatarColor: '#10B981', action: 'started following you', target: '', time: '1 hour ago', read: false },
  { id: '4', type: 'like', user: 'Emma Wilson', avatar: 'EW', avatarColor: '#F59E0B', action: 'liked your project', target: 'ShipFast', time: '2 hours ago', read: true },
  { id: '5', type: 'mention', user: 'Alex Park', avatar: 'AP', avatarColor: '#EF4444', action: 'mentioned you in a comment on', target: 'MindMap AI', time: '3 hours ago', read: true },
  { id: '6', type: 'upvote', user: 'Mike Ross', avatar: 'MR', avatarColor: '#06B6D4', action: 'upvoted your project', target: 'DataPulse', time: '5 hours ago', read: true },
  { id: '7', type: 'comment', user: 'Sara Kim', avatar: 'SK', avatarColor: '#EC4899', action: 'replied to your comment on', target: 'LandingKit', time: '1 day ago', read: true },
  { id: '8', type: 'follow', user: 'Mandrake', avatar: 'MA', avatarColor: '#F97316', action: 'started following you', target: '', time: '2 days ago', read: true },
];

const getIcon = (type: string) => {
  switch (type) {
    case 'upvote': return ArrowUp;
    case 'comment': return MessageCircle;
    case 'follow': return UserPlus;
    case 'like': return Heart;
    case 'mention': return MessageSquare;
    default: return Bell;
  }
};

const getIconColor = (type: string) => {
  switch (type) {
    case 'upvote': return 'text-[#34C759] bg-[#34C759]/10';
    case 'comment': return 'text-[#315BFF] bg-[#315BFF]/10';
    case 'follow': return 'text-[#8B5CF6] bg-[#8B5CF6]/10';
    case 'like': return 'text-[#EF4444] bg-[#EF4444]/10';
    case 'mention': return 'text-[#F59E0B] bg-[#F59E0B]/10';
    default: return 'text-[#555] bg-[#555]/10';
  }
};

/* ─── Page ─────────────────────────────────────────────────── */

export default function NotificationsPage() {
  const [items, setItems] = useState(notifications);

  const markAllRead = () => {
    setItems(items.map(n => ({ ...n, read: true })));
  };

  const unreadCount = items.filter(n => !n.read).length;

  return (
    <AuthGuard>
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
    <AuthGuard>
                  <Link key={item.label} href={item.href} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] font-medium transition-colors duration-150 ${item.label === 'Home' ? 'bg-[#315BFF]/10 text-[#315BFF]' : 'text-[#555] hover:bg-black/[0.03] hover:text-[#111]'}`}>
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
    <AuthGuard>
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
                <h1 className="text-[28px] font-bold text-[#111]">Notifications</h1>
                <p className="mt-1 text-[14px] text-[#666]">{unreadCount > 0 ? `${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}` : 'All caught up!'}</p>
              </div>
              <div className="flex items-center gap-2">
                {unreadCount > 0 && (
                  <button type="button" onClick={markAllRead} className="flex items-center gap-1.5 rounded-lg bg-white/60 px-3 py-2 text-[12px] font-medium text-[#555] hover:bg-white">
                    <Check className="h-3.5 w-3.5" />
                    Mark all read
                  </button>
                )}
              </div>
            </div>

            {/* Notifications List */}
            <div className="mt-6 space-y-2">
              {items.map((notif) => {
                const Icon = getIcon(notif.type);
                const iconColor = getIconColor(notif.type);
                return (
    <AuthGuard>
                  <div key={notif.id} className={`flex items-start gap-3.5 rounded-xl p-4 transition-colors duration-150 ${!notif.read ? 'bg-[#315BFF]/[0.03] border border-[#315BFF]/10' : 'bg-white/40 border border-transparent hover:bg-white/60'}`}>
                    {/* Avatar */}
                    <div className="relative shrink-0">
                      <div className="h-10 w-10 rounded-full flex items-center justify-center text-[12px] font-bold text-white" style={{ backgroundColor: notif.avatarColor }}>
                        {notif.avatar}
                      </div>
                      <div className={`absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full ${iconColor}`}>
                        <Icon className="h-2.5 w-2.5" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] text-[#555]">
                        <span className="font-semibold text-[#111]">{notif.user}</span>
                        {' '}{notif.action}{' '}
                        {notif.target && <span className="font-semibold text-[#315BFF]">{notif.target}</span>}
                      </p>
                      <p className="mt-0.5 text-[11px] text-[#999]">{notif.time}</p>
                    </div>

                    {/* Unread indicator */}
                    {!notif.read && (
                      <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#315BFF]" />
                    )}
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
    </AuthGuard>
  );
}
