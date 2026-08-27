"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ProfileDropdown from "@/components/layout/ProfileDropdown";
import AuthGuard from "@/components/auth-guard";
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
  Edit3,
  Trash2,
  Clock,
  MoreHorizontal,
  ArrowUp,
} from "lucide-react";

/* ─── Data ─────────────────────────────────────────────────── */

const sidebarNav = [
  { label: "Home", icon: Home, href: "/home" },
  { label: "Discover", icon: Compass, href: "/discover" },
  { label: "Trending", icon: TrendingUp, href: "/trending" },
  { label: "Bookmarks", icon: Bookmark, href: "/saved" },
];

const sidebarSpace = [
  { label: "My Projects", icon: Compass, href: "/dashboard/projects" },
  { label: "Drafts", icon: FileText, href: "/drafts", active: true },
  { label: "Feedback", icon: MessageSquare, href: "/feedback" },
];

type Draft = {
  id: string;
  name: string;
  description: string;
  lastEdited: string;
  completionPercent: number;
  image: string;
  category: string;
};

const drafts: Draft[] = [
  {
    id: "1",
    name: "ChatFlow",
    description: "AI powered chatbot builder for customer support",
    lastEdited: "2 hours ago",
    completionPercent: 65,
    image: "/landing/code.png",
    category: "AI",
  },
  {
    id: "2",
    name: "PixelPerfect",
    description: "Design to code tool with AI assistance",
    lastEdited: "1 day ago",
    completionPercent: 40,
    image: "/landing/kartzs.webp",
    category: "Design",
  },
  {
    id: "3",
    name: "APIHub",
    description: "Centralized API management dashboard",
    lastEdited: "3 days ago",
    completionPercent: 25,
    image: "/landing/delicious.png",
    category: "Developer tools",
  },
  {
    id: "4",
    name: "TaskBoard",
    description: "Kanban style project management for small teams",
    lastEdited: "1 week ago",
    completionPercentdashboard1
    image: "/landing/dashboard-tilt.png",
    category: "Productivity",
  },
];

/* ─── Page ─────────────────────────────────────────────────── */

export default function DraftsPage() {
  const [items, setItems] = useState(drafts);

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-[#111]">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, #F8F6FF 0%, #F2EEFF 15%, #F0ECFF 30%, #EDE8FF 50%, #E8E0FF 70%, #E4DAFF 100%)",
        }}
      />

      <div className="flex min-h-screen">
        {/* ═══ LEFT SIDEBAR ═══ */}
        <aside className="hidden w-[220px] shrink-0 border-r border-black/[0.04] bg-white/40 backdrop-blur-sm lg:block">
          <div className="sticky top-0 flex h-screen flex-col px-4 py-6">
            <Link
              href="/"
              className="mb-8 flex items-center gap-2.5 text-[#111] no-underline"
            >
              <Image
                src="/logo.svg"
                alt="ScouTTs"
                width={24}
                height={30}
                className="h-auto"
                unoptimized
              />
              <span className="text-[17px] font-extrabold tracking-tight">
                Scoutts
              </span>
            </Link>
            <nav className="space-y-1">
              {sidebarNav.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] font-medium transition-colors duration-150 ${item.label === "Discover" ? "bg-[#315BFF]/10 text-[#315BFF]" : "text-[#555] hover:bg-black/[0.03] hover:text-[#111]"}`}
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
                      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] font-medium transition-colors duration-150 ${item.active ? "bg-[#315BFF]/10 text-[#315BFF]" : "text-[#555] hover:bg-black/[0.03] hover:text-[#111]"}`}
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

        {/* ═══ MAIN CONTENT ═══ */}
        <div className="flex-1">
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
              <button
                type="button"
                className="relative text-[#555] transition-colors duration-150 hover:text-[#111]"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#315BFF]" />
              </button>
              <ProfileDropdown />
            </div>
          </header>

          <main className="px-6 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-[28px] font-bold text-[#111]">Drafts</h1>
                <p className="mt-1 text-[14px] text-[#666]">
                  Continue working on your unpublished projects
                </p>
              </div>
              <Link
                href="/launch"
                className="flex items-center gap-2 rounded-xl bg-[#315BFF] px-4 py-2.5 text-[13px] font-semibold text-white shadow-[0_2px_8px_rgba(49,91,255,0.25)] hover:bg-[#254DE8]"
              >
                <Plus className="h-4 w-4" />
                New Draft
              </Link>
            </div>

            {/* Drafts List */}
            {items.length > 0 ? (
              <div className="mt-6 space-y-3">
                {items.map((draft) => (
                  <div
                    key={draft.id}
                    className="group flex items-center gap-4 rounded-xl bg-white/60 p-4 backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
                  >
                    {/* Image */}
                    <div className="relative h-[80px] w-[120px] shrink-0 overflow-hidden rounded-lg bg-slate-900">
                      <Image
                        src={draft.image}
                        alt={draft.name}
                        fill
                        className="object-cover"
                        sizes="120px"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-[15px] font-semibold text-[#111]">
                          {draft.name}
                        </h3>
                        <span className="rounded-md bg-[#F3F4F6] px-2 py-0.5 text-[10px] font-medium text-[#666]">
                          {draft.category}
                        </span>
                      </div>
                      <p className="mt-1 text-[13px] text-[#666] truncate">
                        {draft.description}
                      </p>
                      <div className="mt-2 flex items-center gap-3 text-[11px] text-[#999]">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {draft.lastEdited}
                        </span>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="w-[140px] shrink-0">
                      <div className="flex items-center justify-between text-[11px] text-[#666] mb-1">
                        <span>Completion</span>
                        <span className="font-medium">
                          {draft.completionPercent}%
                        </span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-[#F3F4F6]">
                        <div
                          className="h-full rounded-full bg-[#315BFF] transition-all duration-300"
                          style={{ width: `${draft.completionPercent}%` }}
                        />
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1 shrink-0">
                      <Link
                        href="/launch"
                        className="rounded-lg p-2 text-[#555] hover:bg-[#315BFF]/10 hover:text-[#315BFF] transition-colors"
                      >
                        <Edit3 className="h-4 w-4" />
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeItem(draft.id)}
                        className="rounded-lg p-2 text-[#999] hover:bg-red-50 hover:text-[#EF4444] transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-12 text-center">
                <FileText className="mx-auto h-12 w-12 text-[#ccc]" />
                <p className="mt-3 text-[16px] font-semibold text-[#111]">
                  No drafts
                </p>
                <p className="mt-1 text-[13px] text-[#666]">
                  Start a new project to see drafts here
                </p>
                <Link
                  href="/launch"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#315BFF] px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-[#254DE8]"
                >
                  <Plus className="h-4 w-4" />
                  Ship a product
                </Link>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
