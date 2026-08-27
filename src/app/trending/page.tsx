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
  ChevronDown,
  Star,
  ArrowUp,
  Flame,
  Clock,
  TrendingDown,
} from "lucide-react";

/* ─── Data ─────────────────────────────────────────────────── */

const sidebarNav = [
  { label: "Home", icon: Home, href: "/home" },
  { label: "Discover", icon: Compass, href: "/discover" },
  { label: "Trending", icon: TrendingUp, href: "/trending", active: true },
  { label: "Bookmarks", icon: Bookmark, href: "/saved" },
];

const sidebarSpace = [
  { label: "My Projects", icon: Compass, href: "/dashboard/projects" },
  { label: "Drafts", icon: FileText, href: "/drafts" },
  { label: "Feedback", icon: MessageSquare, href: "/feedback" },
];

const timeFilters = [
  { id: "today", label: "Today", icon: Flame },
  { id: "week", label: "This week", icon: Clock },
  { id: "month", label: "This month", icon: TrendingUp },
  { id: "all", label: "All time", icon: TrendingDown },
];

const trendingProducts = [
  {
    id: "1",
    name: "FlowBoard",
    tagline: "AI powered whiteboard for collaborative teams",
    maker: "David Kimdashboard1
    image: "/landing/dashboard-tilt.png",
    upvotes: 1240,
    comments: 89,
    rating: 4.9,
    rank: 1,
    category: "SaaS",
  },
  {
    id: "2",
    name: "DeliciousFood",
    tagline:
      "All in one platform that helps restaurants grow from dashboard to doorstep",
    maker: "Ivan",
    image: "/landing/delicious.png",
    upvotes: 987,
    comments: 64,
    rating: 4.8,
    rank: 2,
    category: "Web Apps",
  },
  {
    id: "3",
    name: "CodeSnap",
    tagline: "Beautiful code screenshots in one click",
    maker: "Cenat",
    image: "/landing/code.png",
    upvotes: 856,
    comments: 52,
    rating: 4.7,
    rank: 3,
    category: "Developer tools",
  },
  {
    id: "4",
    name: "Kartz",
    tagline: "Art Selling website for independent artists",
    maker: "Mandrake",
    image: "/landing/kartzs.webp",
    upvotes: 743,
    comments: 41,
    rating: 4.6,
    rank: 4,
    category: "Marketplace",
  },
  {
    id: "5",
    name: "ShipFast",
    tagline: "Ship your MVP in days not months",
    maker: "Liam Chen",
    image: "/landing/code.png",
    upvotes: 621,
    comments: 38,
    rating: 4.5,
    rank: 5,
    category: "Developer tools",
  },
  {
    id: "6",
    name: "MindMap AI",
    tagline: "AI powered mind mapping and brainstorming",
    maker: "Alex Park",
    image: "/landing/delicious.png",
    upvotes: 534,
    comments: 29,
    rating: 4.4,
    rank: 6,
    category: "AI",
  },
  {
    id: "7",
    name: "LandingKit",
    tagline: "Beautiful landing page templates for startups",
    maker: "Sara Kim",
    image: "/landing/kartzs.webp",
    upvotes: 412,
    comments: 22,
    rating: 4.3,
    rank: 7,
    category: "Design",
  },
  {
    id: "8",
    name: "DataPulse",
    tagline: "Real time analytics dashboard for SaaS products",
    maker: "Mike Ross",
    image: "/landing/code.png",
    upvotes: 389,
    comments: 18,
    rating: 4.2,
    rank: 8,
    category: "SaaS",
  },
  {
    id: "9",
    name: "PixelForge",
    tagline: "AI image generation and editing platform",
    maker: "Emma Wilson",
    image: "/landing/delicious.png",
    upvotes: 367,
    comments: 15,
    rating: 4.1,
    rank: 9,
    category: "AI",
  },
];

/* ─── Page ─────────────────────────────────────────────────── */

export default function TrendingPage() {
  const [activeFilter, setActiveFilter] = useState("week");

  return (
    <div className="relative min-h-screen overflow-hidden text-[#111]">
      {/* ── Background ── */}
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
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] font-medium transition-colors duration-150 ${item.active ? "bg-[#315BFF]/10 text-[#315BFF]" : "text-[#555] hover:bg-black/[0.03] hover:text-[#111]"}`}
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

        {/* ═══ MAIN CONTENT ═══ */}
        <div className="flex-1">
          {/* Top Bar */}
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

          {/* Content */}
          <main className="px-6 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-[28px] font-bold text-[#111]">Trending</h1>
                <p className="mt-1 text-[14px] text-[#666]">
                  The most popular projects right now
                </p>
              </div>
            </div>

            {/* Time Filter Tabs */}
            <div className="mt-5 flex items-center gap-1.5 overflow-x-auto">
              {timeFilters.map((filter) => {
                const Icon = filter.icon;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActiveFilter(filter.id)}
                    className={`flex shrink-0 items-center gap-1.5 rounded-lg px-4 py-2 text-[13px] font-medium transition-colors duration-150 ${activeFilter === filter.id ? "bg-[#315BFF] text-white shadow-[0_2px_8px_rgba(49,91,255,0.25)]" : "bg-white/60 text-[#555] hover:bg-white hover:text-[#111]"}`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {filter.label}
                  </button>
                );
              })}
            </div>

            {/* Trending Products */}
            <div className="mt-6 space-y-3">
              {trendingProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="group flex items-center gap-4 rounded-xl bg-white/60 p-4 backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
                >
                  {/* Rank */}
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[16px] font-bold ${product.rank <= 3 ? "bg-[#315BFF] text-white" : "bg-[#F3F4F6] text-[#666]"}`}
                  >
                    {product.rank}
                  </div>

                  {/* Image */}
                  <div className="relative h-[80px] w-[120px] shrink-0 overflow-hidden rounded-lg bg-slate-900">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="120px"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-[15px] font-semibold text-[#111]">
                        {product.name}
                      </h3>
                      <span className="rounded-md bg-[#F3F4F6] px-2 py-0.5 text-[10px] font-medium text-[#666]">
                        {product.category}
                      </span>
                    </div>
                    <p className="mt-1 text-[13px] text-[#666] truncate">
                      {product.tagline}
                    </p>
                    <p className="mt-1 text-[12px] text-[#999]">
                      by {product.maker}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 shrink-0 text-[12px] text-[#666]">
                    <span className="flex items-center gap-1">
                      <ArrowUp className="h-3.5 w-3.5 text-[#34C759]" />
                      {product.upvotes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="h-3.5 w-3.5" />
                      {product.comments}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-[#111] text-[#111]" />
                      {product.rating}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
