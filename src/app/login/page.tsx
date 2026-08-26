'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, User, MessageSquare, TrendingUp, Heart } from 'lucide-react';

/* ─── Page ─────────────────────────────────────────────────── */

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    const newErrors: typeof errors = {};
    if (!email) newErrors.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Please enter a valid email';
    if (!password) newErrors.password = 'Please enter your password';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
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

      <div className="mx-auto flex min-h-screen max-w-[1320px] items-center justify-center px-5 py-10 sm:px-8 lg:justify-between">
        {/* ═══════════════════════════════════════════════════
            LEFT — Marketing
            ═══════════════════════════════════════════════════ */}
        <div className="hidden max-w-[480px] lg:block">
          {/* Logo */}
          <Link href="/" className="mb-8 flex items-center gap-2.5 text-[#111] no-underline">
            <Image src="/logo.svg" alt="ScouTTs" width={40} height={40} unoptimized />
            <span className="text-[20px] font-extrabold tracking-tight">Scoutts</span>
          </Link>

          {/* Heading */}
          <h1 className="text-[42px] font-bold leading-[1.15] tracking-tight text-[#111]">
            Launch. Share.<br />
            <span className="bg-gradient-to-r from-[#315BFF] to-[#7958FF] bg-clip-text text-transparent">
              Grow together.
            </span>
          </h1>
          <p className="mt-5 max-w-[400px] text-[16px] leading-relaxed text-[#555]">
            Join Scoutts and bring your product to the right audience. Get discovered, get feedback, and grow your impact.
          </p>

          {/* Preview Card */}
          <div className="mt-8 rounded-2xl bg-white/70 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#315BFF]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span className="text-[13px] font-semibold text-[#111]">My Product</span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {/* Product mini card */}
              <div className="rounded-xl border border-black/[0.05] bg-white p-3.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EEF2FF]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#315BFF" aria-hidden="true">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-[#111]">Creative<br />Project</p>
                    <p className="text-[10px] text-[#7958FF]">Productivity</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="rounded-full bg-[#E8F5E9] px-2 py-0.5 text-[10px] font-medium text-[#2E7D32]">Published</span>
                  <span className="flex items-center gap-1 text-[10px] text-[#999]">
                    <Eye className="h-2.5 w-2.5" />
                    2.4K
                  </span>
                </div>
              </div>

              {/* Views chart */}
              <div className="rounded-xl border border-black/[0.05] bg-white p-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-[#999]">Views</span>
                  <span className="text-[10px] font-medium text-[#34C759]">+28%</span>
                </div>
                <p className="mt-1 text-[22px] font-bold text-[#111]">12.4K</p>
                <svg className="mt-2" viewBox="0 0 120 40" fill="none" aria-hidden="true">
                  <path
                    d="M0 35 Q15 30, 25 28 T50 22 T75 18 T100 12 T120 8"
                    stroke="#315BFF"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0 35 Q15 30, 25 28 T50 22 T75 18 T100 12 T120 8 V40 H0 Z"
                    fill="url(#chartGradLogin)"
                    opacity="0.15"
                  />
                  <defs>
                    <linearGradient id="chartGradLogin" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#315BFF" />
                      <stop offset="100%" stopColor="#315BFF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Floating stats */}
            <div className="mt-3 flex gap-2.5">
              <div className="flex-1 rounded-xl border border-black/[0.05] bg-white px-3 py-2.5 text-center">
                <p className="flex items-center justify-center gap-1 text-[10px] text-[#999]">
                  <Heart className="h-2.5 w-2.5" /> Likes
                </p>
                <p className="text-[14px] font-bold text-[#111]">842</p>
              </div>
              <div className="flex-1 rounded-xl border border-black/[0.05] bg-white px-3 py-2.5 text-center">
                <p className="flex items-center justify-center gap-1 text-[10px] text-[#999]">
                  <MessageSquare className="h-2.5 w-2.5" /> Comments
                </p>
                <p className="text-[14px] font-bold text-[#111]">128</p>
              </div>
              <div className="flex-1 rounded-xl border border-black/[0.05] bg-white px-3 py-2.5 text-center">
                <p className="flex items-center justify-center gap-1 text-[10px] text-[#999]">
                  <TrendingUp className="h-2.5 w-2.5" /> Upvotes
                </p>
                <p className="text-[14px] font-bold text-[#111]">1.2K</p>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            RIGHT — Form Card
            ═══════════════════════════════════════════════════ */}
        <div className="w-full max-w-[420px]">
          {/* Mobile logo */}
          <Link href="/" className="mb-6 flex items-center gap-2.5 text-[#111] no-underline lg:hidden">
            <Image src="/logo.svg" alt="ScouTTs" width={36} height={36} unoptimized />
            <span className="text-[18px] font-extrabold tracking-tight">Scoutts</span>
          </Link>

          <div className="rounded-2xl bg-white/80 px-8 py-9 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-md">
            {/* Header */}
            <h2 className="text-[24px] font-bold text-[#111]">Welcome back</h2>
            <p className="mt-1.5 text-[14px] text-[#666]">Log in to your Scoutts account</p>

            {/* Social buttons */}
            <div className="mt-6 space-y-2.5">
              <button
                type="button"
                className="flex h-[44px] w-full items-center justify-center gap-2.5 rounded-xl border border-black/10 bg-white text-[14px] font-semibold text-[#111] shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-colors duration-150 hover:bg-gray-50"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>
              <button
                type="button"
                className="flex h-[44px] w-full items-center justify-center gap-2.5 rounded-xl border border-black/10 bg-white text-[14px] font-semibold text-[#111] shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-colors duration-150 hover:bg-gray-50"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1 2.1.1 3.4.3.1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2A11.5 11.5 0 0 1 12 4.8c1 0 2 .1 3 .4 2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
                </svg>
                Continue with GitHub
              </button>
            </div>

            {/* Divider */}
            <div className="my-5 flex items-center gap-4">
              <div className="h-px flex-1 bg-black/10" />
              <span className="text-[13px] text-[#999]">or</span>
              <div className="h-px flex-1 bg-black/10" />
            </div>

            {/* Form */}
            <div className="space-y-4">
              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-1.5 block text-[13px] font-medium text-[#333]">
                  Email address
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })); }}
                    placeholder="Enter your email"
                    className={`h-[42px] w-full rounded-lg border bg-white px-3.5 pr-10 text-[14px] text-[#111] placeholder:text-[#aaa] outline-none transition-colors duration-150 focus:border-[#315BFF]/40 focus:ring-2 focus:ring-[#315BFF]/15 ${
                      errors.email ? 'border-red-400' : 'border-black/10'
                    }`}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999]">
                    <Mail className="h-4 w-4" />
                  </span>
                </div>
                {errors.email && <p className="mt-1 text-[11px] text-red-500">{errors.email}</p>}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="mb-1.5 block text-[13px] font-medium text-[#333]">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setErrors((p) => ({ ...p, password: undefined })); }}
                    placeholder="Enter your password"
                    className={`h-[42px] w-full rounded-lg border bg-white px-3.5 pr-10 text-[14px] text-[#111] placeholder:text-[#aaa] outline-none transition-colors duration-150 focus:border-[#315BFF]/40 focus:ring-2 focus:ring-[#315BFF]/15 ${
                      errors.password ? 'border-red-400' : 'border-black/10'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999] transition-colors duration-150 hover:text-[#555]"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && <p className="mt-1 text-[11px] text-red-500">{errors.password}</p>}
              </div>
            </div>

            {/* Forgot password */}
            <div className="mt-3 text-right">
              <a href="#" className="text-[13px] font-medium text-[#315BFF] transition-colors duration-150 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="mt-5 h-[44px] w-full rounded-xl bg-[#315BFF] text-[14px] font-semibold text-white shadow-[0_3px_10px_rgba(49,91,255,0.25)] transition-colors duration-150 hover:bg-[#254DE8] disabled:opacity-70"
            >
              {loading ? 'Logging in...' : 'Log in'}
            </button>

            {/* Signup link */}
            <p className="mt-5 text-center text-[13px] text-[#666]">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="font-medium text-[#315BFF] hover:underline">
                Sign up
              </Link>
            </p>
          </div>

          {/* Terms */}
          <p className="mt-5 text-center text-[12px] leading-relaxed text-[#888]">
            By logging in, you agree to our{' '}
            <a href="#" className="text-[#315BFF] hover:underline">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-[#315BFF] hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
