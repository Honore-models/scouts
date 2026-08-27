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
  FolderOpen,
  FileText,
  MessageSquare,
  Plus,
  Search,
  Bell,
  Star,
  ArrowUp,
  FolderPlus,
  MoreHorizontal,
  Lock,
  Globe,
  Trash2,
  Edit3,
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

type Collection = {
  id: string;
  name: string;
  description: string;
  projectCount: number;
  isPublic: boolean;
  image: string;
  projects: string[];
};

const collections: Collection[] = [
  {
    id: "1",
    name: "AI Tools",
    description: "Best AI powered tools and platforms",
    projectCount: 12,
    isPublic: true,
    image: "/landing/delicious.png",
    projects: ["FlowBoard", "MindMap AI", "CodeSnap"],
  },
  {
    id: "2",
    name: "Developer Productivity",
    description: "Tools to boost developer workflow",
    projectCount: 8,
    isPublic: true,
    image: "/landing/code.png",
    projects: ["ShipFast", "CodeSnap", "LandingKit"],
  },
  {
    id: "3",
    name: "Design Inspiration",
    description: "Beautiful design tools and references",
    projectCount: 6,
    isPublic: false,
    image: "/landing/kartzs.webp",
    projects: ["Kartz", "LandingKit"],
  },
  {
    id: "4",
    name: "SaaS Picks",
    description: "Top SaaS products to watch",
    projectCount: 15,
    isPublic: true,dashboard1
    image: "/landing/dashboard-tilt.png",
    projects: ["FlowBoard", "DataPulse", "ShipFast"],
  },
  {
    id: "5",
    name: "Web Apps",
    description: "Interesting web applications",
    projectCount: 10,
    isPublic: false,
    image: "/landing/delicious.png",
    projects: ["DeliciousFood", "FlowBoard"],
  },
  {
    id: "6",
    name: "Bookmarked",
    description: "Projects I want to check out later",
    projectCount: 23,
    isPublic: false,
    image: "/landing/code.png",
    projects: ["CodeSnap", "ShipFast", "MindMap AI"],
  },
];

/* ─── Page ─────────────────────────────────────────────────── */

export default function CollectionsPage() {
  const [showCreateModal, setShowCreateModal] = useState(false);

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
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] font-medium transition-colors duration-150 $'text-[#555] hover:bg-black/[0.03] hover:text-[#111]'`}
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
                <h1 className="text-[28px] font-bold text-[#111]">
                  Collections
                </h1>
                <p className="mt-1 text-[14px] text-[#666]">
                  Organize projects into curated collections
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowCreateModal(true)}
                className="flex items-center gap-2 rounded-xl bg-[#315BFF] px-4 py-2.5 text-[13px] font-semibold text-white shadow-[0_2px_8px_rgba(49,91,255,0.25)] hover:bg-[#254DE8]"
              >
                <FolderPlus className="h-4 w-4" />
                New Collection
              </button>
            </div>

            {/* Collections Grid */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {collections.map((collection) => (
                <div
                  key={collection.id}
                  className="group rounded-xl border border-black/[0.04] bg-white/60 backdrop-blur-sm overflow-hidden transition-all duration-200 hover:bg-white hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
                >
                  {/* Image */}
                  <div className="relative h-[120px] w-full overflow-hidden bg-slate-900">
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      className="object-cover"
                      sizes="33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[13px] font-semibold text-white">
                        {collection.projectCount} projects
                      </span>
                      <div className="flex items-center gap-1">
                        {collection.isPublic ? (
                          <span className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                            <Globe className="h-2.5 w-2.5" /> Public
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                            <Lock className="h-2.5 w-2.5" /> Private
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-[15px] font-semibold text-[#111]">
                        {collection.name}
                      </h3>
                      <button
                        type="button"
                        className="rounded-lg p-1 text-[#999] opacity-0 transition-opacity group-hover:opacity-100 hover:bg-black/[0.03] hover:text-[#555]"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="mt-1 text-[12px] text-[#666] line-clamp-2">
                      {collection.description}
                    </p>

                    {/* Project previews */}
                    <div className="mt-3 flex flex-wrap gap-1">
                      {collection.projects.slice(0, 3).map((name) => (
                        <span
                          key={name}
                          className="rounded-md bg-[#F3F4F6] px-2 py-0.5 text-[10px] font-medium text-[#666]"
                        >
                          {name}
                        </span>
                      ))}
                      {collection.projectCount > 3 && (
                        <span className="rounded-md bg-[#F3F4F6] px-2 py-0.5 text-[10px] font-medium text-[#666]">
                          +{collection.projectCount - 3}
                        </span>
                      )}
                    </div>
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
