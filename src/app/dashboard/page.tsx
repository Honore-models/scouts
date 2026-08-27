"use client";

import React, { useState, useEffect } from "react";
import {
  LiveLineChart,
  LiveLine,
  LiveXAxis,
  LiveYAxis,
  ChartTooltip,
} from "@/components/charts/LiveLineChart";
import {
  PieChart,
  PieSlice,
  PieCenter,
  Legend,
  LegendItemComponent,
  LegendMarker,
  LegendLabel,
} from "@/components/charts/PieChart";
import type { LegendItem } from "@/components/charts/PieChart";
import ProfileDropdown from "@/components/layout/ProfileDropdown";
import AuthGuard from "@/components/auth-guard";
import type { LiveLinePoint } from "@/components/charts/LiveLineChart";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Compass,
  TrendingUp,
  Bookmark as BookmarkIcon,
  Plus,
  Search,
  Bell,
  ChevronDown,
  Eye,
  Users,
  Heart,
  MessageSquare,
  Calendar,
  Download,
  ChevronUp,
  Activity,
  FileText,
  Settings,
} from "lucide-react";

const sidebarItems = [
  { icon: Home, label: "Home", href: "/home" },
  { icon: Compass, label: "Discover", href: "/discover" },
  { icon: TrendingUp, label: "Trending", href: "/trending" },
  { icon: BookmarkIcon, label: "Bookmarks", href: "/saved" },
];

const yourSpace = [
  { icon: Compass, label: "My Projects", href: "/dashboard/projects" },
  { icon: FileText, label: "Drafts", href: "/drafts" },
  { icon: MessageSquare, label: "Feedback", href: "/feedback" },
  { icon: Activity, label: "Analytics", href: "/dashboard" },
];



const stats = [
  {
    icon: Eye,
    label: "Views",
    value: "12.4K",
    change: "18.4%",
    sub: "vs previous 30 days",
    up: true,
    color: "#315BFF",
  },
  {
    icon: Users,
    label: "Visitors",
    value: "3,842",
    change: "12.1%",
    sub: "vs previous 30 days",
    up: true,
    color: "#315BFF",
  },
  {
    icon: Heart,
    label: "Likes",
    value: "1,284",
    change: "24.8%",
    sub: "vs previous 30 days",
    up: true,
    color: "#315BFF",
  },
  {
    icon: MessageSquare,
    label: "Comments",
    value: "368",
    change: "31.3%",
    sub: "vs previous 30 days",
    up: true,
    color: "#315BFF",
  },
  {
    icon: BookmarkIcon,
    label: "Saves",
    value: "742",
    change: "27.6%",
    sub: "vs previous 30 days",
    up: true,
    color: "#315BFF",
  },
];

const topProjects = [
  { name: "FlowBoard", views: "8,432", visitors: "2,945", likes: 842, comments: 154, letter: "F", color: "#315BFF" },
  { name: "ShipFast", views: "2,841", visitors: "1,142", likes: 312, comments: 68, letter: "S", color: "#8B5CF6" },
  { name: "MindMap AI", views: "1,642", visitors: "731", likes: 198, comments: 42, letter: "M", color: "#10B981" },
  { name: "DeliciousFood", views: "1,204", visitors: "532", likes: 121, comments: 29, letter: "D", color: "#F59E0B" },
  { name: "LandingKit", views: "842", visitors: "312", likes: 93, comments: 15, letter: "L", color: "#6366F1" },
];

const trafficSources = [
  { label: "Discover feed", pct: 45, color: "#315BFF" },
  { label: "Search", pct: 28, color: "#8B5CF6" },
  { label: "Direct", pct: 15, color: "#10B981" },
  { label: "External", pct: 8, color: "#F59E0B" },
  { label: "Other", pct: 4, color: "#D1D5DB" },
];

const audienceLocations = [
  { country: "United States", pct: 32 },
  { country: "India", pct: 18 },
  { country: "United Kingdom", pct: 9 },
  { country: "Germany", pct: 6 },
  { country: "Other", pct: 35 },
];

function generateInitialData(): LiveLinePoint[] {
  const now = Date.now() / 1000;
  const points: LiveLinePoint[] = [];
  let value = 800;
  for (let i = 60; i >= 0; i--) {
    value += (Math.random() - 0.45) * 80;
    value = Math.max(200, Math.min(2000, value));
    points.push({ time: now - i * 2, value: Math.round(value) });
  }
  return points;
}

const legendItems: LegendItem[] = trafficSources.map((s) => ({
  label: s.label,
  color: s.color,
  value: s.pct,
}));

export default function DashboardPage() {
  const [chartData, setChartData] = useState<LiveLinePoint[]>(generateInitialData);
  const [chartValue, setChartValue] = useState(1240);
  const [hoveredTrafficIndex, setHoveredTrafficIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((prev) => {
        const now = Date.now() / 1000;
        const lastVal = prev.length > 0 ? prev[prev.length - 1].value : 800;
        const newVal = lastVal + (Math.random() - 0.45) * 60;
        const clamped = Math.max(200, Math.min(2000, Math.round(newVal)));
        setChartValue(clamped);
        const newPoint: LiveLinePoint = { time: now, value: clamped };
        return [...prev.slice(-200), newPoint];
      });
    }, 2000);
    return (
    <AuthGuard>) => clearInterval(interval);
  }, []);

  return (
    <AuthGuard>
    <div className="min-h-screen bg-gradient-to-br from-[#f8f7ff] via-[#f3f1ff] to-[#e8e4ff] flex">
      {/* Sidebar */}
      <aside className="w-[220px] min-h-screen bg-white/60 backdrop-blur-xl border-r border-white/40 p-5 flex flex-col fixed left-0 top-0 bottom-0 z-10">
        <div className="flex items-center gap-2 mb-10">
          <Image src="/logo.svg" alt="Scoutts" width={24} height={30} className="h-auto" />
          <span className="text-[18px] font-bold text-[#111]">Scoutts</span>
        </div>

        <nav className="flex-1 flex flex-col gap-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] font-medium text-[#555] hover:bg-[#f0eeff] transition-colors"
            >
              <item.icon size={18} strokeWidth={1.8} />
              {item.label}
            </Link>
          ))}

          <div className="mt-6 mb-2 px-3 text-[11px] font-semibold tracking-wider text-[#888] uppercase">
            Your Space
          </div>

          {yourSpace.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] font-medium transition-colors ${
                item.href === "/dashboard"
                  ? "bg-[#f0eeff] text-[#315BFF]"
                  : "text-[#555] hover:bg-[#f0eeff]"
              }`}
            >
              <item.icon size={18} strokeWidth={1.8} />
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/launch"
          className="flex items-center justify-center gap-2 w-full py-3 bg-[#315BFF] text-white rounded-xl text-[14px] font-semibold hover:bg-[#2a4de6] transition-colors mt-4"
        >
          <Plus size={18} />
          Ship a product
        </Link>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-[220px] min-h-screen flex flex-col">
        {/* Top Bar */}
        <header className="flex items-center justify-between px-8 py-4 bg-white/40 backdrop-blur-xl border-b border-white/30">
          <div className="flex-1 max-w-md">
            <div className="flex items-center gap-2 bg-white/70 border border-white/50 rounded-full px-4 py-2.5">
              <Search size={16} className="text-[#999]" />
              <input
                type="text"
                placeholder="search project , developers ........"
                className="flex-1 bg-transparent text-[13px] text-[#333] placeholder-[#aaa] outline-none"
              />
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

        {/* Page Content */}
        <main className="flex-1 px-8 py-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-[24px] font-bold text-[#111] mb-1">
                Analytics
              </h1>
              <p className="text-[14px] text-[#666]">
                Track how your projects are performing.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2.5 bg-white/60 border border-white/50 rounded-xl text-[13px] font-medium text-[#333] hover:bg-white/80 transition-colors">
                <Calendar size={14} className="text-[#888]" />
                Last 30 days
                <ChevronDown size={14} className="text-[#888]" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-white/60 border border-white/50 rounded-xl text-[13px] font-medium text-[#333] hover:bg-white/80 transition-colors">
                <Download size={14} className="text-[#888]" />
                Export
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-5 gap-4 mb-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/50 backdrop-blur rounded-2xl p-5 border border-white/40"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#f0eeff] flex items-center justify-center">
                    <s.icon size={16} className="text-[#315BFF]" />
                  </div>
                  <span className="text-[13px] text-[#888] font-medium">
                    {s.label}
                  </span>
                </div>
                <div className="text-[28px] font-bold text-[#111] mb-1">
                  {s.value}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="flex items-center gap-0.5 text-[12px] font-semibold text-[#10B981]">
                    <ChevronUp size={12} />
                    {s.change}
                  </span>
                  <span className="text-[11px] text-[#999]">{s.sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Chart + Traffic Sources */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Views Over Time Chart */}
            <div className="col-span-2 bg-white/50 backdrop-blur rounded-2xl p-6 border border-white/40">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[16px] font-bold text-[#111]">
                  Views over time
                </h2>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white/60 border border-white/40 rounded-lg text-[12px] font-medium text-[#555]">
                  Daily
                  <ChevronDown size={12} className="text-[#888]" />
                </button>
              </div>

              {/* Live Chart Area */}
              <div className="h-[260px]">
                <LiveLineChart
                  data={chartData}
                  value={chartValue}
                  window={120}
                  numXTicks={5}
                  margin={{ top: 10, right: 60, bottom: 30, left: 50 }}
                >
                  <LiveYAxis
                    position="left"
                    numTicks={5}
                    formatValue={(v) => `${v >= 1000 ? (v / 1000).toFixed(1) + "K" : Math.round(v)}`}
                  />
                  <LiveLine
                    dataKey="value"
                    stroke="#315BFF"
                    strokeWidth={2.5}
                    fill={true}
                    pulse={true}
                    badge={true}
                    formatValue={(v) => `${v.toLocaleString()} views`}
                    momentumColors={{
                      up: "#10B981",
                      down: "#EF4444",
                      flat: "#315BFF",
                    }}
                  />
                  <LiveXAxis numTicks={5} />
                  <ChartTooltip
                    showDatePill={false}
                    content={(val, time) => (
                      <div className="bg-white border border-[#e0dff0] rounded-lg px-3 py-2 shadow-md">
                        <div className="text-[11px] text-[#888]">
                          {time.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                        <div className="text-[13px] font-semibold text-[#111]">
                          {val.toLocaleString()} views
                        </div>
                      </div>
                    )}
                  />
                </LiveLineChart>
              </div>
            </div>

            {/* Top Traffic Sources */}
            <div className="bg-white/50 backdrop-blur rounded-2xl p-6 border border-white/40">
              <h2 className="text-[16px] font-bold text-[#111] mb-6">
                Top traffic sources
              </h2>

              {/* Donut Chart */}
              <div className="flex justify-center mb-6">
                <PieChart
                  data={trafficSources.map((s) => ({ value: s.pct, color: s.color, label: s.label }))}
                  hoveredIndex={hoveredTrafficIndex}
                  innerRadius={55}
                  onHoverChange={setHoveredTrafficIndex}
                  size={180}
                >
                  {trafficSources.map((_, i) => (
                    <PieSlice index={i} key={i} />
                  ))}
                  <PieCenter defaultLabel="Total views" />
                </PieChart>
              </div>

              {/* Legend */}
              <Legend
                hoveredIndex={hoveredTrafficIndex}
                items={legendItems}
                onHoverChange={setHoveredTrafficIndex}
              >
                {legendItems.map((_, i) => (
                  <LegendItemComponent index={i} key={i}>
                    <LegendMarker />
                    <LegendLabel />
                  </LegendItemComponent>
                ))}
              </Legend>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-3 gap-6">
            {/* Top Projects Table */}
            <div className="col-span-2 bg-white/50 backdrop-blur rounded-2xl p-6 border border-white/40">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-[16px] font-bold text-[#111]">
                  Top projects
                </h2>
                <button className="text-[13px] font-medium text-[#315BFF] hover:underline">
                  View all projects →
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#e8e6f0]">
                      <th className="text-left text-[12px] font-medium text-[#888] pb-3">
                        Project
                      </th>
                      <th className="text-left text-[12px] font-medium text-[#888] pb-3">
                        Views
                      </th>
                      <th className="text-left text-[12px] font-medium text-[#888] pb-3">
                        Visitors
                      </th>
                      <th className="text-left text-[12px] font-medium text-[#888] pb-3">
                        Likes
                      </th>
                      <th className="text-left text-[12px] font-medium text-[#888] pb-3">
                        Comments
                      </th>
                      <th className="text-right text-[12px] font-medium text-[#888] pb-3">
                        
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {topProjects.map((project, i) => (
                      <tr
                        key={project.name}
                        className={`border-b border-[#f0eef5] ${i === topProjects.length - 1 ? "border-b-0" : ""}`}
                      >
                        <td className="py-3.5">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center text-[13px] font-bold text-white"
                              style={{ backgroundColor: project.color }}
                            >
                              {project.letter}
                            </div>
                            <span className="text-[14px] font-medium text-[#111]">
                              {project.name}
                            </span>
                          </div>
                        </td>
                        <td className="py-3.5 text-[14px] text-[#333]">
                          {project.views}
                        </td>
                        <td className="py-3.5 text-[14px] text-[#333]">
                          {project.visitors}
                        </td>
                        <td className="py-3.5 text-[14px] text-[#333]">
                          {project.likes}
                        </td>
                        <td className="py-3.5 text-[14px] text-[#333]">
                          {project.comments}
                        </td>
                        <td className="py-3.5 text-right">
                          {/* Sparkline */}
                          <svg
                            width="48"
                            height="20"
                            viewBox="0 0 48 20"
                            className="inline-block"
                          >
                            <path
                              d={`M0,${10 + (i % 3) * 3} C8,${5 + i * 2} 16,${15 - i} 24,${8 + i * 2} C32,${12 - i} 40,${6 + i} 48,${10 - i}`}
                              fill="none"
                              stroke="#315BFF"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Audience Location */}
            <div className="bg-white/50 backdrop-blur rounded-2xl p-6 border border-white/40">
              <h2 className="text-[16px] font-bold text-[#111] mb-5">
                Audience location
              </h2>

              {/* Map */}
              <div className="w-full h-[140px] bg-white rounded-xl mb-5 flex items-center justify-center overflow-hidden border border-[#e8e6f0]">
                <Image
                  src="/world-map.svg"
                  alt="Audience location map"
                  width={400}
                  height={160}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Location Stats */}
              <div className="space-y-3">
                {audienceLocations.map((loc) => (
                  <div key={loc.country} className="flex items-center justify-between">
                    <span className="text-[13px] text-[#555]">{loc.country}</span>
                    <span className="text-[13px] font-semibold text-[#111]">
                      {loc.pct}%
                    </span>
                  </div>
                ))}
              </div>

              <button className="w-full mt-5 text-[13px] font-medium text-[#315BFF] hover:underline text-center">
                View full report →
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
    </AuthGuard>
  );
}
