'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  Search,
  ChevronRight,
  ChevronLeft,
  Bot,
  Code,
  Smartphone,
  Palette,
  Cloud,
  Zap,
  Gamepad2,
  GraduationCap,
  Link2,
  ShoppingBag,
  Cpu,
  MoreHorizontal,
  ArrowRight,
} from 'lucide-react';

/* ─── Data ─────────────────────────────────────────────────── */

const categories = [
  { id: 'ai', label: 'AI/Machine Learning', icon: Bot },
  { id: 'web', label: 'Web Development', icon: Code },
  { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
  { id: 'design', label: 'Design & UI/UX', icon: Palette },
  { id: 'saas', label: 'SaaS', icon: Cloud },
  { id: 'productivity', label: 'Productivity tools', icon: Zap },
  { id: 'games', label: 'Games', icon: Gamepad2 },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'blockchain', label: 'Blockchain', icon: Link2 },
  { id: 'ecommerce', label: 'E-commerce', icon: ShoppingBag },
  { id: 'iot', label: 'IoT/Hardware', icon: Cpu },
  { id: 'other', label: 'Other', icon: MoreHorizontal },
];

/* ─── Page ─────────────────────────────────────────────────── */

export default function OnboardingPage() {
  const [selected, setSelected] = useState<string[]>(['ai', 'mobile']);
  const [customTopic, setCustomTopic] = useState('');

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

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
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 85% 50%, rgba(120,100,240,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 70% 80%, rgba(80,60,220,0.10) 0%, transparent 60%)',
        }}
      />

      {/* ── Header ── */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6">
        <Link href="/" className="flex items-center gap-2.5 text-[#111] no-underline">
          <Image src="/logo.svg" alt="ScouTTs" width={36} height={36} unoptimized />
          <span className="text-[18px] font-extrabold tracking-tight">Scoutts</span>
        </Link>
        <Link
          href="/discover"
          className="flex items-center gap-1.5 text-[14px] font-medium text-[#555] transition-colors duration-150 hover:text-[#111]"
        >
          Skip for now
          <ChevronRight className="h-4 w-4" />
        </Link>
      </header>

      {/* ── Main ── */}
      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-120px)] max-w-[1320px] items-center px-8 pb-10">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_480px]">
          {/* ═══════════════════════════════════════════════
              LEFT — Onboarding Form
              ═══════════════════════════════════════════════ */}
          <div className="max-w-[600px]">
            {/* Heading */}
            <h1 className="text-[36px] font-bold leading-[1.15] tracking-tight text-[#111] sm:text-[42px]">
              What are you<br />interested in?
            </h1>
            <p className="mt-4 max-w-[380px] text-[15px] leading-relaxed text-[#555]">
              Choose a few that excite you,<br />
              We&apos;ll customize your feed for you.
            </p>

            {/* Category Grid */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {categories.map((cat) => {
                const isSelected = selected.includes(cat.id);
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => toggle(cat.id)}
                    className={`relative flex h-[90px] flex-col items-center justify-center gap-2.5 rounded-xl border-2 transition-all duration-150 ${
                      isSelected
                        ? 'border-[#315BFF] bg-[#F0F4FF] shadow-[0_2px_8px_rgba(49,91,255,0.12)]'
                        : 'border-black/[0.06] bg-white/50 hover:border-black/15 hover:bg-white/80'
                    }`}
                  >
                    {isSelected && (
                      <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#315BFF]">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                    )}
                    <Icon className={`h-6 w-6 ${isSelected ? 'text-[#315BFF]' : 'text-[#555]'}`} />
                    <span className={`text-[13px] font-medium leading-tight text-center ${isSelected ? 'text-[#315BFF]' : 'text-[#333]'}`}>
                      {cat.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Custom topic */}
            <div className="relative mt-6">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999]">
                <Search className="h-4.5 w-4.5" />
              </span>
              <input
                type="text"
                value={customTopic}
                onChange={(e) => setCustomTopic(e.target.value)}
                placeholder="Add a custom topic"
                className="h-[48px] w-full rounded-xl border border-black/10 bg-white/50 pl-11 pr-4 text-[14px] text-[#111] placeholder:text-[#aaa] outline-none backdrop-blur-sm transition-colors duration-150 focus:border-[#315BFF]/30 focus:bg-white/80 focus:ring-2 focus:ring-[#315BFF]/15"
              />
            </div>

            {/* Buttons */}
            <div className="mt-8 flex items-center justify-between">
              <Link
                href="/signup"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-black/12 bg-white/60 px-5 text-[14px] font-medium text-[#333] backdrop-blur-sm transition-colors duration-150 hover:bg-white/90"
              >
                <ChevronLeft className="h-4 w-4" />
                Back
              </Link>
              <Link
                href="/discover"
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#315BFF] px-6 text-[14px] font-semibold text-white shadow-[0_3px_10px_rgba(49,91,255,0.25)] transition-colors duration-150 hover:bg-[#254DE8]"
              >
                continue
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════
              RIGHT — Floating Product Cards
              ═══════════════════════════════════════════════ */}
          <div className="relative hidden h-[520px] lg:block">
            {/* DevDash card (top) */}
            <div className="absolute right-0 top-0 w-[420px] rotate-[2deg] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
              <Image
                src="/DevDash.png"
                alt="DevDash — Developer analytics"
                width={420}
                height={300}
                className="h-auto w-full"
              />
            </div>

            {/* EcoTrack card (bottom) */}
            <div className="absolute right-4 bottom-[40px] w-[400px] rotate-[-2deg] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
              <Image
                src="/EcoTrack.png"
                alt="EcoTrack — Carbon footprint tracker"
                width={400}
                height={280}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
