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
  Search as SearchIcon,
  Bell,
  Star,
  ArrowUp,
  Filter,
  X,
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
  { label: "Drafts", icon: FileText, href: "/drafts" },
  { label: "Feedback", icon: MessageSquare, href: "/feedback" },
];

const allProducts = [
  {
    id: "1",
    name: "FlowBoard",
    tagline: "AI powered whiteboard for collaborative teams",
    maker: "David Kimdashboard1
    image: "/landing/dashboard-tilt.png",
    category: "SaaS",
    upvotes: 482,
    comments: 68,
    rating: 4.8,
  },
  {
    id: "2",
    name: "DeliciousFood",
    tagline:
      "All in one platform that helps restaurants grow from dashboard to doorstep",
    maker: "Ivan",
    image: "/landing/delicious.png",
    category: "Web Apps",
    upvotes: 341,
    comments: 45,
    rating: 4.7,
  },
  {
    id: "3",
    name: "CodeSnap",
    tagline: "Beautiful code screenshots in one click",
    maker: "Cenat",
    image: "/landing/code.png",
    category: "Developer tools",
    upvotes: 298,
    comments: 32,
    rating: 4.6,
  },
  {
    id: "4",
    name: "Kartz",
    tagline: "Art Selling website for independent artists",
    maker: "Mandrake",
    image: "/landing/kartzs.webp",
    category: "Marketplace",
    upvotes: 267,
    comments: 28,
    rating: 4.5,
  },
  {
    id: "5",
    name: "ShipFast",
    tagline: "Ship your MVP in days not months",
    maker: "Liam Chen",
    image: "/landing/code.png",
    category: "Developer tools",
    upvotes: 234,
    comments: 22,
    rating: 4.4,
  },
  {
    id: "6",
    name: "MindMap AI",
    tagline: "AI powered mind mapping and brainstorming",
    maker: "Alex Park",
    image: "/landing/delicious.png",
    category: "AI",
    upvotes: 198,
    comments: 18,
    rating: 4.3,
  },
  {
    id: "7",
    name: "LandingKit",
    tagline: "Beautiful landing page templates for startups",
    maker: "Sara Kim",
    image: "/landing/kartzs.webp",
    category: "Design",
    upvotes: 167,
    comments: 15,
    rating: 4.2,
  },
  {
    id: "8",
    name: "DataPulse",
    tagline: "Real time analytics dashboard for SaaS",
    maker: "Mike Ross",
    image: "/landing/code.png",
    category: "SaaS",
    upvotes: 145,
    comments: 12,
    rating: 4.1,
  },
  {
    id: "9",
    name: "PixelForge",
    tagline: "AI image generation and editing platform",
    maker: "Emma Wilson",
    image: "/landing/delicious.png",
    category: "AI",
    upvotes: 123,
    comments: 9,
    rating: 4.0,
  },
];

const filterOptions = [
  "All",
  "SaaS",
  "AI",
  "Developer tools",
  "Web Apps",
  "Mobile",
  "Design",
  "Marketplace",
];

/* ─── Page ─────────────────────────────────────────────────── */

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const results = allProducts.filter((p) => {
    const matchesQuery =
      query === "" ||
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.tagline.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = activeFilter === "All" || p.category === activeFilter;
    return matchesQuery && matchesFilter;
  });

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
          <header className="sticky top-0 z-40 flex items-center justify-between border-b border-black/[0.04] bg-white/60 px-6 py-3 backdrop-blur-xl">
            <div className="relative w-full max-w-[480px]">
              <SearchIcon className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#999]" />
              <input
                type="text"
                placeholder="search project , developers ........."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
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
            <h1 className="text-[28px] font-bold text-[#111]">Search</h1>
            <p className="mt-1 text-[14px] text-[#666]">
              Find projects, developers, and tools
            </p>

            {/* Search Input (large) */}
            <div className="mt-5 relative">
              <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#999]" />
              <input
                type="text"
                placeholder="Type to search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-12 w-full rounded-xl border border-black/10 bg-white/70 pl-12 pr-10 text-[14px] text-[#111] placeholder:text-[#aaa] outline-none focus:border-[#315BFF]/30 focus:bg-white focus:ring-2 focus:ring-[#315BFF]/15"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999] hover:text-[#555]"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Filter Tabs */}
            <div className="mt-4 flex items-center gap-1.5 overflow-x-auto">
              <Filter className="h-4 w-4 shrink-0 text-[#999]" />
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`shrink-0 rounded-lg px-3 py-1.5 text-[12px] font-medium transition-colors duration-150 ${activeFilter === filter ? "bg-[#315BFF] text-white" : "bg-white/60 text-[#555] hover:bg-white hover:text-[#111]"}`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <p className="mt-4 text-[13px] text-[#666]">
              {results.length} result{results.length !== 1 ? "s" : ""} found
            </p>

            {/* Results */}
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {results.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="group overflow-hidden rounded-xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
                >
                  <div className="relative h-[160px] w-full overflow-hidden bg-slate-900">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[15px] font-semibold text-[#111]">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-[12px] text-[#666] line-clamp-2">
                      {product.tagline}
                    </p>
                    <p className="mt-2 text-[11px] text-[#999]">
                      by {product.maker}
                    </p>
                    <div className="mt-2 flex items-center gap-3 text-[11px] text-[#666]">
                      <span className="flex items-center gap-1">
                        <ArrowUp className="h-3 w-3 text-[#34C759]" />
                        {product.upvotes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="h-3 w-3" />
                        {product.comments}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-[#111] text-[#111]" />
                        {product.rating}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {results.length === 0 && (
              <div className="mt-12 text-center">
                <SearchIcon className="mx-auto h-12 w-12 text-[#ccc]" />
                <p className="mt-3 text-[16px] font-semibold text-[#111]">
                  No results found
                </p>
                <p className="mt-1 text-[13px] text-[#666]">
                  Try a different search term or filter
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
