"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProfileDropdown from "@/components/layout/ProfileDropdown";
import {
  Home,
  Compass,
  TrendingUp,
  Bookmark,
  FolderOpen,
  Plus,
  Search,
  Bell,
  ChevronDown,
  ArrowRight,
  Upload,
  X,
  Check,
  Globe,
  Tag,
  ExternalLink,
  FileText,
  ArrowLeft,
  MessageSquare,
  Settings,
  Video,
  Play,
  Image as ImageIcon,
  Link2,
  Grid3X3,
  Rocket,
  Info,
  Star,
  Users,
} from "lucide-react";

const sidebarItems = [
  { icon: Home, label: "Home", href: "/home" },
  { icon: Compass, label: "Discover", href: "/discover" },
  { icon: TrendingUp, label: "Trending", href: "/trending" },
  { icon: Bookmark, label: "Bookmarks", href: "/bookmarks" },
  { icon: FolderOpen, label: "Collections", href: "/collections" },
];

const yourSpace = [
  { icon: Compass, label: "My Projects", href: "/projects" },
  { icon: FileText, label: "Drafts", href: "/drafts" },
  { icon: MessageSquare, label: "Feedback", href: "/feedback" },
];

const steps = [
  { num: 1, label: "Basics", sub: "Project details" },
  { num: 2, label: "Media", sub: "Photos & Videos" },
  { num: 3, label: "Links", sub: "Links & Category" },
  { num: 4, label: "Summary", sub: "Review & Publish" },
];

export default function LaunchPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectName: "",
    shortDesc: "",
    detailedDesc: "",
    website: "",
    github: "",
    linkedin: "",
    productHunt: "",
    category: "",
    tags: [] as string[],
    screenshots: [] as string[],
  });

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f7ff] via-[#f3f1ff] to-[#e8e4ff] flex">
      {/* Sidebar */}
      <aside className="w-[220px] min-h-screen bg-white/60 backdrop-blur-xl border-r border-white/40 p-5 flex flex-col fixed left-0 top-0 bottom-0 z-10">
        <div className="flex items-center gap-2 mb-10">
          <Image src="/logo.svg" alt="Scoutts" width={32} height={32} />
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
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] font-medium text-[#555] hover:bg-[#f0eeff] transition-colors"
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
        <main className="flex-1 px-8 py-8 max-w-4xl">
          <h1 className="text-[28px] font-bold text-[#111] mb-2">
            Launch your product
          </h1>
          <p className="text-[14px] text-[#666] mb-8">
            Share your product with the world and get discovered by thousand of
            users
          </p>

          {/* Step Progress */}
          <div className="flex items-center mb-10 bg-white/50 backdrop-blur rounded-2xl p-4 border border-white/40">
            {steps.map((step, i) => (
              <React.Fragment key={step.num}>
                <div className="flex items-center gap-3 flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-bold shrink-0 ${
                      currentStep >= step.num
                        ? "bg-[#315BFF] text-white"
                        : "bg-[#e5e4f0] text-[#888]"
                    }`}
                  >
                    {step.num}
                  </div>
                  <div>
                    <div
                      className={`text-[14px] font-semibold ${
                        currentStep >= step.num ? "text-[#111]" : "text-[#888]"
                      }`}
                    >
                      {step.label}
                    </div>
                    <div className="text-[12px] text-[#888]">{step.sub}</div>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`h-[2px] flex-1 mx-2 rounded ${
                      currentStep > step.num ? "bg-[#315BFF]" : "bg-[#e0dff0]"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Step 1: Basics */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-[15px] font-semibold text-[#111] mb-2.5">
                  Project name
                </label>
                <input
                  type="text"
                  placeholder="e.g FlowBoard"
                  value={formData.projectName}
                  onChange={(e) =>
                    setFormData({ ...formData, projectName: e.target.value })
                  }
                  className="w-full px-4 py-3.5 bg-white/60 border border-white/50 rounded-xl text-[14px] text-[#333] placeholder-[#bbb] outline-none focus:border-[#315BFF] focus:ring-2 focus:ring-[#315BFF]/20 transition"
                />
              </div>

              <div>
                <label className="block text-[15px] font-semibold text-[#111] mb-1">
                  Short desciption
                </label>
                <p className="text-[13px] text-[#777] mb-2.5">
                  A short and catchy description that shows what your product
                  does
                </p>
                <textarea
                  placeholder="e.g AI powered whiteboard for collaborative teams"
                  value={formData.shortDesc}
                  onChange={(e) =>
                    setFormData({ ...formData, shortDesc: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3.5 bg-white/60 border border-white/50 rounded-xl text-[14px] text-[#333] placeholder-[#bbb] outline-none focus:border-[#315BFF] focus:ring-2 focus:ring-[#315BFF]/20 transition resize-none"
                />
              </div>

              <div>
                <label className="block text-[15px] font-semibold text-[#111] mb-1">
                  Detailed description
                </label>
                <p className="text-[13px] text-[#777] mb-2.5">
                  Tell the story behind your product. What problem does it solve?
                  Who is it for
                </p>
                <textarea
                  placeholder="e.g AI powered whiteboard for collaborative teams"
                  value={formData.detailedDesc}
                  onChange={(e) =>
                    setFormData({ ...formData, detailedDesc: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3.5 bg-white/60 border border-white/50 rounded-xl text-[14px] text-[#333] placeholder-[#bbb] outline-none focus:border-[#315BFF] focus:ring-2 focus:ring-[#315BFF]/20 transition resize-none"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-7 py-3.5 bg-[#315BFF] text-white rounded-xl text-[14px] font-semibold hover:bg-[#2a4de6] transition-colors"
                >
                  Save and continue
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Media */}
          {currentStep === 2 && (
            <div className="space-y-0">
              <div className="mb-6">
                <h2 className="text-[18px] font-bold text-[#111] mb-1">
                  Add media to showcase your product
                </h2>
                <p className="text-[14px] text-[#666]">
                  High quality visuals and videos get more attention
                </p>
              </div>

              <div className="mb-8">
                <div className="mb-3">
                  <span className="text-[15px] font-semibold text-[#111]">
                    Demo video
                  </span>
                  <span className="text-[14px] text-[#888] ml-0.5">
                    (optional)
                  </span>
                </div>
                <p className="text-[13px] text-[#777] mb-4">
                  Add video to show your product in action
                </p>
                <div className="border border-[#d0ccee] rounded-2xl p-10 flex flex-col items-center justify-center text-center hover:border-[#315BFF] transition-colors cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-[#f0eeff] flex items-center justify-center mb-4">
                    <Play size={22} className="text-[#315BFF] ml-0.5" />
                  </div>
                  <p className="text-[14px] font-semibold text-[#333] mb-1">
                    Upload a video or paste a link
                  </p>
                  <p className="text-[13px] text-[#888] mb-4">
                    MP4, Webm or Youtube/video link
                  </p>
                  <button className="px-5 py-2.5 bg-[#315BFF] text-white rounded-xl text-[13px] font-semibold hover:bg-[#2a4de6] transition-colors">
                    Upload video
                  </button>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-[15px] font-semibold text-[#111] mb-1">
                  Screenshots
                </h3>
                <p className="text-[13px] text-[#777] mb-4">
                  Add screenshots of your product(up to 8)
                </p>
                <div className="border border-[#d0ccee] rounded-2xl p-10 flex flex-col items-center justify-center text-center hover:border-[#315BFF] transition-colors cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-[#f0eeff] flex items-center justify-center mb-4">
                    <ImageIcon size={22} className="text-[#315BFF]" />
                  </div>
                  <p className="text-[14px] font-semibold text-[#333] mb-1">
                    Drag and drop images here
                  </p>
                  <p className="text-[13px] text-[#888] mb-4">
                    PNG, JPG up to 10mb
                  </p>
                  <button className="px-5 py-2.5 bg-[#315BFF] text-white rounded-xl text-[13px] font-semibold hover:bg-[#2a4de6] transition-colors">
                    Select images
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 px-6 py-3 border border-[#ddd] bg-white/60 rounded-xl text-[14px] font-medium text-[#333] hover:bg-white/80 transition-colors"
                >
                  <ArrowLeft size={16} />
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-7 py-3.5 bg-[#315BFF] text-white rounded-xl text-[14px] font-semibold hover:bg-[#2a4de6] transition-colors"
                >
                  continue
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Links */}
          {currentStep === 3 && (
            <div className="space-y-8">
              {/* Links Section */}
              <div>
                <h2 className="text-[18px] font-bold text-[#111] mb-1">
                  Links
                </h2>
                <p className="text-[14px] text-[#666] mb-6">
                  Add important links so users can now abour your product
                </p>

                <div className="space-y-4">
                  {/* Website */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3 w-[200px] shrink-0">
                      <div className="w-9 h-9 rounded-full bg-[#eef0ff] flex items-center justify-center">
                        <Link2 size={16} className="text-[#315BFF]" />
                      </div>
                      <span className="text-[15px] font-medium text-[#111]">
                        Website
                      </span>
                    </div>
                    <input
                      type="url"
                      placeholder="https://yourproduct.com"
                      value={formData.website}
                      onChange={(e) =>
                        setFormData({ ...formData, website: e.target.value })
                      }
                      className="flex-1 px-4 py-3 bg-white/60 border border-white/50 rounded-xl text-[14px] text-[#333] placeholder-[#bbb] outline-none focus:border-[#315BFF] focus:ring-2 focus:ring-[#315BFF]/20 transition"
                    />
                  </div>

                  {/* GitHub */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3 w-[200px] shrink-0">
                      <div className="w-9 h-9 rounded-full bg-[#111] flex items-center justify-center">
                        <svg
                          viewBox="0 0 24 24"
                          fill="white"
                          className="w-4 h-4"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </div>
                      <span className="text-[15px] font-medium text-[#111]">
                        GitHub
                      </span>
                    </div>
                    <input
                      type="url"
                      placeholder="https://github.com/username/repo"
                      value={formData.github}
                      onChange={(e) =>
                        setFormData({ ...formData, github: e.target.value })
                      }
                      className="flex-1 px-4 py-3 bg-white/60 border border-white/50 rounded-xl text-[14px] text-[#333] placeholder-[#bbb] outline-none focus:border-[#315BFF] focus:ring-2 focus:ring-[#315BFF]/20 transition"
                    />
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3 w-[200px] shrink-0">
                      <div className="w-9 h-9 rounded-full bg-[#0077B5] flex items-center justify-center">
                        <span className="text-white text-[12px] font-bold">
                          in
                        </span>
                      </div>
                      <span className="text-[15px] font-medium text-[#111]">
                        LinkedIn
                      </span>
                    </div>
                    <input
                      type="url"
                      placeholder="https://github.com/username/repo"
                      value={formData.linkedin}
                      onChange={(e) =>
                        setFormData({ ...formData, linkedin: e.target.value })
                      }
                      className="flex-1 px-4 py-3 bg-white/60 border border-white/50 rounded-xl text-[14px] text-[#333] placeholder-[#bbb] outline-none focus:border-[#315BFF] focus:ring-2 focus:ring-[#315BFF]/20 transition"
                    />
                  </div>

                  {/* Product Hunt */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3 w-[200px] shrink-0">
                      <div className="w-9 h-9 rounded-full bg-[#DA552F] flex items-center justify-center">
                        <span className="text-white text-[14px] font-bold">
                          P
                        </span>
                      </div>
                      <span className="text-[15px] font-medium text-[#111]">
                        Product hunt
                      </span>
                      <span className="text-[13px] text-[#888]">
                        (optional)
                      </span>
                    </div>
                    <input
                      type="url"
                      placeholder="https://github.com/username/repo"
                      value={formData.productHunt}
                      onChange={(e) =>
                        setFormData({ ...formData, productHunt: e.target.value })
                      }
                      className="flex-1 px-4 py-3 bg-white/60 border border-white/50 rounded-xl text-[14px] text-[#333] placeholder-[#bbb] outline-none focus:border-[#315BFF] focus:ring-2 focus:ring-[#315BFF]/20 transition"
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#e0dff0]" />

              {/* Category Section */}
              <div>
                <h2 className="text-[18px] font-bold text-[#111] mb-1">
                  Category
                </h2>
                <p className="text-[14px] text-[#666] mb-5">
                  Choose the most relevant category for your product
                </p>

                <div className="relative">
                  <div className="flex items-center gap-3 px-4 py-3.5 bg-white/60 border border-white/50 rounded-xl cursor-pointer hover:border-[#315BFF] transition">
                    <Grid3X3 size={16} className="text-[#888]" />
                    <span className="flex-1 text-[14px] text-[#999]">
                      Select category
                    </span>
                    <ChevronDown size={16} className="text-[#888]" />
                  </div>
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 px-8 py-4 border border-[#ddd] bg-white/60 rounded-xl text-[16px] font-semibold text-[#333] hover:bg-white/80 transition-colors"
                >
                  <ArrowLeft size={18} />
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-8 py-4 bg-[#315BFF] text-white rounded-xl text-[16px] font-semibold hover:bg-[#2a4de6] transition-colors"
                >
                  continue
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Summary */}
          {currentStep === 4 && (
            <div className="space-y-8">
              {/* Product Preview + Info */}
              <div className="flex gap-8 items-start">
                {/* Product Card Preview */}
                <div className="w-[340px] shrink-0">
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a3e] to-[#0d0d2b] p-5 text-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#315BFF]/20 to-[#8B5CF6]/20" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-1.5 mb-3">
                        <Star size={12} className="text-[#F59E0B] fill-[#F59E0B]" />
                        <span className="text-[11px] text-white/80">
                          Featured today
                        </span>
                      </div>
                      <h3 className="text-[20px] font-bold mb-1">
                        FlowBoard
                      </h3>
                      <p className="text-[12px] text-white/60 mb-3 leading-relaxed">
                        AI powered whiteboard
                        <br />
                        for collaborative teams
                      </p>
                      <p className="text-[11px] text-white/50 mb-4">
                        by David Kim
                      </p>
                      <div className="flex items-center justify-between">
                        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur rounded-lg text-[11px] font-medium hover:bg-white/20 transition">
                          View Project
                          <ArrowRight size={10} />
                        </button>
                        <div className="flex -space-x-1.5">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="w-5 h-5 rounded-full bg-gradient-to-br from-[#315BFF] to-[#8B5CF6] border border-[#1a1a3e]"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex-1 pt-2">
                  <h2 className="text-[32px] font-bold text-[#111] mb-2">
                    {formData.projectName || "FlowBoard"}
                  </h2>
                  <p className="text-[15px] text-[#555] mb-5">
                    {formData.shortDesc ||
                      "AI powered whiteboard for collaborative teams."}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(formData.tags.length > 0
                      ? formData.tags
                      : ["Productivity", "SaaS", "Collaboration"]
                    ).map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 bg-white/60 border border-white/40 rounded-lg text-[13px] font-medium text-[#444]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Details Grid */}
              <div className="bg-white/50 backdrop-blur rounded-2xl p-6 border border-white/40">
                <div className="grid grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-full bg-[#eef0ff] flex items-center justify-center shrink-0">
                        <ImageIcon size={18} className="text-[#315BFF]" />
                      </div>
                      <div>
                        <div className="text-[15px] font-semibold text-[#111]">
                          Media
                        </div>
                        <div className="text-[13px] text-[#888]">
                          3 images, 1 video
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-full bg-[#eef0ff] flex items-center justify-center shrink-0">
                        <Link2 size={18} className="text-[#315BFF]" />
                      </div>
                      <div>
                        <div className="text-[15px] font-semibold text-[#111]">
                          Links
                        </div>
                        <div className="text-[13px] text-[#888]">5 links</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-full bg-[#eef0ff] flex items-center justify-center shrink-0">
                        <Grid3X3 size={18} className="text-[#315BFF]" />
                      </div>
                      <div>
                        <div className="text-[15px] font-semibold text-[#111]">
                          Category
                        </div>
                        <div className="text-[13px] text-[#888]">
                          {formData.category || "Productivity"}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#111] mb-2">
                      Description
                    </h3>
                    <p className="text-[14px] text-[#555] leading-relaxed mb-5">
                      {formData.detailedDesc ||
                        "A powerful whiteboard for modern teams to brainstorm, plan and build together."}
                    </p>

                    <h3 className="text-[15px] font-semibold text-[#111] mb-2">
                      Key features
                    </h3>
                    <ul className="space-y-1.5">
                      {[
                        "Real-time collaboration",
                        "Cloud sync",
                        "Intuitive drag & drop",
                      ].map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-[14px] text-[#555]"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#315BFF] shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Info Banner */}
              <div className="flex items-center gap-3 px-5 py-4 bg-[#eef2ff] border border-[#d0d9ff] rounded-xl">
                <Info size={18} className="text-[#315BFF] shrink-0" />
                <span className="text-[14px] text-[#315BFF] font-medium">
                  Looks good! Your product is ready to go live.
                </span>
              </div>

              {/* Bottom Buttons */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 px-8 py-4 border border-[#ddd] bg-white/60 rounded-xl text-[16px] font-semibold text-[#333] hover:bg-white/80 transition-colors"
                >
                  <ArrowLeft size={18} />
                  Back
                </button>
                <button
                  onClick={() => window.location.href = "/dashboard"}
                  className="flex items-center gap-2 px-8 py-4 bg-[#315BFF] text-white rounded-xl text-[16px] font-semibold hover:bg-[#2a4de6] transition-colors"
                >
                  Launch project
                  <Rocket size={18} />
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
