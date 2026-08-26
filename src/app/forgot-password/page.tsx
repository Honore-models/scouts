'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Mail, ArrowLeft, Check } from 'lucide-react';

/* ─── Page ─────────────────────────────────────────────────── */

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-[#111]">
      {/* Background */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{ background: 'linear-gradient(180deg, #F8F6FF 0%, #F2EEFF 15%, #F0ECFF 30%, #EDE8FF 50%, #E8E0FF 70%, #E4DAFF 100%)' }}
      />

      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-[420px]">
          {/* Logo */}
          <div className="mb-8 text-center">
            <Link href="/" className="inline-flex items-center gap-2.5 text-[#111] no-underline">
              <Image src="/logo.svg" alt="ScouTTs" width={28} height={35} className="h-auto" unoptimized />
              <span className="text-[20px] font-extrabold tracking-tight">Scoutts</span>
            </Link>
          </div>

          {/* Card */}
          <div className="rounded-2xl border border-black/[0.04] bg-white/70 p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] backdrop-blur-xl">
            {!submitted ? (
              <>
                <Link href="/login" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#555] hover:text-[#111]">
                  <ArrowLeft className="h-4 w-4" />
                  Back to login
                </Link>

                <h1 className="mt-4 text-[24px] font-bold text-[#111]">Forgot password?</h1>
                <p className="mt-2 text-[14px] text-[#666]">Enter your email address and we&apos;ll send you a link to reset your password.</p>

                <form onSubmit={handleSubmit} className="mt-6">
                  <label className="block text-[13px] font-medium text-[#555]">Email address</label>
                  <div className="relative mt-1.5">
                    <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#999]" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setError(''); }}
                      placeholder="Enter your email"
                      className={`h-11 w-full rounded-xl border bg-white/60 pl-10 pr-4 text-[14px] text-[#111] placeholder:text-[#aaa] outline-none transition-colors ${error ? 'border-[#EF4444] focus:ring-2 focus:ring-[#EF4444]/15' : 'border-black/10 focus:border-[#315BFF]/30 focus:ring-2 focus:ring-[#315BFF]/15'}`}
                    />
                  </div>
                  {error && <p className="mt-1.5 text-[12px] text-[#EF4444]">{error}</p>}

                  <button type="submit" className="mt-5 h-11 w-full rounded-xl bg-[#315BFF] text-[14px] font-semibold text-white shadow-[0_2px_8px_rgba(49,91,255,0.25)] transition-colors hover:bg-[#254DE8]">
                    Send reset link
                  </button>
                </form>

                <p className="mt-6 text-center text-[13px] text-[#666]">
                  Don&apos;t have an account?{' '}
                  <Link href="/signup" className="font-medium text-[#315BFF] hover:underline">Sign up</Link>
                </p>
              </>
            ) : (
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#34C759]/10">
                  <Check className="h-7 w-7 text-[#34C759]" />
                </div>
                <h1 className="mt-4 text-[24px] font-bold text-[#111]">Check your email</h1>
                <p className="mt-2 text-[14px] text-[#666]">
                  We&apos;ve sent a password reset link to<br />
                  <span className="font-medium text-[#111]">{email}</span>
                </p>
                <p className="mt-4 text-[13px] text-[#999]">
                  Didn&apos;t receive the email? Check your spam folder or{' '}
                  <button type="button" onClick={() => setSubmitted(false)} className="font-medium text-[#315BFF] hover:underline">try again</button>
                </p>
                <Link href="/login" className="mt-6 inline-block rounded-xl bg-[#315BFF] px-6 py-2.5 text-[13px] font-semibold text-white hover:bg-[#254DE8]">
                  Back to login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
