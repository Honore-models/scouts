'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Users, Target, Heart, Globe, ArrowRight, Mail, MapPin, Calendar } from 'lucide-react';

/* ─── Data ─────────────────────────────────────────────────── */

const team = [
  { name: 'David Kim', role: 'Founder & CEO', avatar: 'DK', color: '#315BFF', bio: 'Building tools that help teams think better.' },
  { name: 'Ivan Hirwa', role: 'Head of Product', avatar: 'IH', color: '#8B5CF6', bio: 'Passionate about developer experience.' },
  { name: 'Cenat', role: 'Lead Engineer', avatar: 'CE', color: '#10B981', bio: 'Creating beautiful developer tools.' },
  { name: 'Sara Kim', role: 'Design Lead', avatar: 'SK', color: '#F59E0B', bio: 'Crafting intuitive user experiences.' },
];

const values = [
  { icon: Target, title: 'Mission-driven', description: 'We believe every developer deserves a platform to showcase their work and get discovered by the right audience.' },
  { icon: Users, title: 'Community-first', description: 'ScouTTs is built by developers, for developers. Our community drives every decision we make.' },
  { icon: Heart, title: 'Quality over quantity', description: 'We curate and promote projects that demonstrate exceptional craftsmanship and innovation.' },
  { icon: Globe, title: 'Open & transparent', description: 'We operate with transparency, share our journey publicly, and believe in building in the open.' },
];

const stats = [
  { value: '12K+', label: 'Projects shipped' },
  { value: '25K+', label: 'Developers' },
  { value: '100K+', label: 'Monthly visitors' },
  { value: '4.8', label: 'Average rating' },
];

/* ─── Page ─────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden text-[#111]" style={{ background: 'linear-gradient(180deg, #F8F6FF 0%, #F2EEFF 15%, #F0ECFF 30%, #EDE8FF 50%, #E8E0FF 70%, #E4DAFF 100%)' }}>
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10" style={{ background: 'radial-gradient(ellipse 70% 50% at 85% 40%, rgba(100,80,220,0.15) 0%, transparent 70%)' }} />

      {/* ═══ NAVBAR ═══ */}
      <nav className="flex items-center justify-between px-6 lg:px-10 py-4 bg-white/40 backdrop-blur-xl border-b border-white/30">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Scoutts" width={32} height={32} className="h-auto" />
            <span className="text-[18px] font-bold text-[#111]">Scoutts</span>
          </Link>
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/discover" className="text-[14px] font-medium text-[#555] hover:text-[#111] transition-colors">Discover</Link>
            <Link href="/trending" className="text-[14px] font-medium text-[#555] hover:text-[#111] transition-colors">Trending</Link>
            <Link href="/developers" className="text-[14px] font-medium text-[#555] hover:text-[#111] transition-colors">Developers</Link>
            <Link href="/pricing" className="text-[14px] font-medium text-[#555] hover:text-[#111] transition-colors">Pricing</Link>
            <span className="text-[14px] font-semibold text-[#111] border-b-2 border-[#111] pb-0.5">About</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="px-5 py-2 text-[13px] font-medium text-[#333] border border-[#ddd] rounded-full hover:bg-white/60 transition-colors">Login</Link>
          <Link href="/signup" className="px-5 py-2 text-[13px] font-semibold text-white bg-[#315BFF] rounded-full hover:bg-[#2a4de6] transition-colors">Sign up</Link>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="mx-auto max-w-[800px] px-6 pt-20 pb-16 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f0f4ff] px-4 py-1.5 text-[13px] font-medium text-[#315BFF]">
          <span className="text-[#315BFF]">★</span>
          About Scoutts
        </span>
        <h1 className="mt-6 text-[40px] font-bold leading-[1.15] tracking-tight text-[#111] sm:text-[52px]">
          Where developers<br />
          <span className="bg-gradient-to-r from-[#315BFF] to-[#7958FF] bg-clip-text text-transparent">
            ship and get discovered
          </span>
        </h1>
        <p className="mt-5 mx-auto max-w-[520px] text-[16px] leading-relaxed text-[#555]">
          Scoutts is the home for innovative projects and the people behind them. We help developers share their work, get feedback, and connect with a community that cares.
        </p>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="mx-auto max-w-[900px] px-6 pb-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white/60 backdrop-blur border border-white/40 p-6 text-center">
              <p className="text-[32px] font-bold text-[#111]">{stat.value}</p>
              <p className="mt-1 text-[13px] text-[#666]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ MISSION ═══ */}
      <section className="mx-auto max-w-[900px] px-6 pb-16">
        <div className="rounded-2xl bg-gradient-to-br from-[#315BFF] to-[#7958FF] p-10 text-white">
          <h2 className="text-[28px] font-bold">Our Mission</h2>
          <p className="mt-4 max-w-[600px] text-[16px] leading-relaxed text-white/85">
            We believe that great products deserve to be discovered. Scoutts exists to bridge the gap between talented developers and the audience that needs their creations. Every day, we work to make the developer experience smoother, the discovery process fairer, and the community stronger.
          </p>
          <Link href="/discover" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-[14px] font-semibold text-[#315BFF] transition-colors hover:bg-white/90">
            Explore projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="mx-auto max-w-[900px] px-6 pb-16">
        <h2 className="text-[28px] font-bold text-[#111] text-center">Our Values</h2>
        <p className="mt-2 text-[15px] text-[#666] text-center">The principles that guide everything we do</p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="rounded-2xl border border-black/[0.04] bg-white/60 p-6 backdrop-blur-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#315BFF]/10">
                  <Icon className="h-5 w-5 text-[#315BFF]" />
                </div>
                <h3 className="mt-4 text-[16px] font-bold text-[#111]">{value.title}</h3>
                <p className="mt-2 text-[14px] text-[#666] leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══ TEAM ═══ */}
      <section className="mx-auto max-w-[900px] px-6 pb-16">
        <h2 className="text-[28px] font-bold text-[#111] text-center">Meet the Team</h2>
        <p className="mt-2 text-[15px] text-[#666] text-center">The people building Scoutts</p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="rounded-2xl border border-black/[0.04] bg-white/60 p-5 backdrop-blur-sm text-center">
              <div className="mx-auto h-16 w-16 rounded-full flex items-center justify-center text-[18px] font-bold text-white" style={{ backgroundColor: member.color }}>
                {member.avatar}
              </div>
              <h3 className="mt-3 text-[14px] font-semibold text-[#111]">{member.name}</h3>
              <p className="text-[11px] text-[#315BFF] font-medium">{member.role}</p>
              <p className="mt-2 text-[12px] text-[#666] leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="mx-auto max-w-[900px] px-6 pb-20">
        <div className="rounded-2xl border border-black/[0.04] bg-white/60 p-10 text-center backdrop-blur-sm">
          <h2 className="text-[24px] font-bold text-[#111]">Ready to get started?</h2>
          <p className="mt-2 text-[15px] text-[#666]">Join thousands of developers who are already shipping and discovering on Scoutts.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/signup" className="rounded-xl bg-[#315BFF] px-6 py-3 text-[14px] font-semibold text-white shadow-[0_2px_8px_rgba(49,91,255,0.25)] hover:bg-[#254DE8] transition-colors">
              Get started for free
            </Link>
            <Link href="/discover" className="rounded-xl border border-black/10 bg-white px-6 py-3 text-[14px] font-medium text-[#555] hover:bg-gray-50 transition-colors">
              Explore projects
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-white/30 bg-white/30 backdrop-blur-xl">
        <div className="mx-auto max-w-[1200px] px-6 py-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Scoutts" width={22} height={28} className="h-auto" />
              <span className="text-[16px] font-bold text-[#111]">Scoutts</span>
            </div>
            <p className="text-[12px] text-[#999]">&copy; 2024 Scoutts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
