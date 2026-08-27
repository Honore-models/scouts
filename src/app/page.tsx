"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* ═══════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════ */

const navLinks = [
  { label: "Discover", href: "/discover", active: true },
  { label: "Trending", href: "/trending" },
  { label: "Developers", href: "/developers" },
  { label: "Categories", href: "/categories", dropdown: true },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

import { products as allProducts } from "@/lib/mock-data";
import { useAuth } from "@/lib/auth-context";
import ProfileDropdown from "@/components/layout/ProfileDropdown";

const products: ((typeof allProducts)[number] & { large?: boolean })[] = [
  { ...allProducts[0], image: "/landing/freelance.png", large: true },
  allProducts[1],
  allProducts[3],
  allProducts[2],
  allProducts[4],
  allProducts[5],
  allProducts[6],
  allProducts[7],
];

const communityAvatars = [
  "/avatar.png",
  "/landing/dashboard.png",
  "/landing/freelance.png",
];

/* ═══════════════════════════════════════════════════════════════
   SVG ICONS
   ═══════════════════════════════════════════════════════════════ */

function ArrowRightIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════ */

export default function LandingPage() {
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailLoading, setEmailLoading] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleEmailSubmit = () => {
    if (!email.trim()) {
      setEmailError("Please enter your email");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }
    setEmailError("");
    setEmailLoading(true);
    setTimeout(() => {
      setEmailLoading(false);
      setEmailSubmitted(true);
      setEmail("");
    }, 1500);
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden text-[#111]"
      style={{
        background:
          "linear-gradient(180deg, #F8F6FF 0%, #F2EEFF 15%, #F0ECFF 30%, #EDE8FF 50%, #E8E0FF 70%, #E4DAFF 100%)",
      }}
    >
      {/* Background glow */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 85% 40%, rgba(100,80,220,0.15) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 70% 75%, rgba(80,60,220,0.12) 0%, transparent 60%)",
        }}
      />

      {/* ════════════════════════════════════════════════════════
          NAVBAR
          ════════════════════════════════════════════════════════ */}
      <nav className="flex items-center justify-between px-6 lg:px-10 py-4 bg-white/40 backdrop-blur-xl border-b border-white/30">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Scoutts" width={32} height={32} />
            <span className="text-[18px] font-bold text-[#111]">Scoutts</span>
          </Link>
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[14px] font-medium transition-colors ${
                  item.active
                    ? "text-[#111] border-b-2 border-[#111] pb-0.5"
                    : "text-[#555] hover:text-[#111]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-white/70 border border-white/50 rounded-full px-4 py-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#999"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="search project , developers ........"
              className="bg-transparent text-[13px] text-[#333] placeholder-[#aaa] outline-none w-48"
            />
          </div>
          {user ? (
            <ProfileDropdown />
          ) : (
            <>
              <Link
                href="/login"
                className="px-5 py-2 text-[13px] font-medium text-[#333] border border-[#ddd] rounded-full hover:bg-white/60 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-5 py-2 text-[13px] font-semibold text-white bg-[#315BFF] rounded-full hover:bg-[#2a4de6] transition-colors"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* ════════════════════════════════════════════════════════
          TAGLINE
          ════════════════════════════════════════════════════════ */}
      <div className="text-center pt-6 pb-2">
        <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#555]">
          <span className="text-[#315BFF]">★</span>
          where you ship and we market
        </span>
      </div>

      {/* ════════════════════════════════════════════════════════
          HERO
          ════════════════════════════════════════════════════════ */}
      <section className="relative mx-auto max-w-[1200px] px-6 pt-10 pb-8 text-center">
        <h1 className="mx-auto max-w-[720px] text-[36px] font-bold leading-[1.12] tracking-tight sm:text-[48px] lg:text-[52px]">
          Discover the next{" "}
          <span className="bg-gradient-to-r from-[#315BFF] to-[#7958FF] bg-clip-text text-transparent">
            big thing
          </span>{" "}
          built by developers.
        </h1>
        <p className="mx-auto mt-5 max-w-[480px] text-[16px] leading-relaxed text-[#555] sm:text-[17px]">
          Explore innovative projects, tools and apps
          <br className="hidden sm:block" />
          upvote your favorites and help great products grow.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3.5">
          <Link
            href="/discover"
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#315BFF] px-5.5 text-[14px] font-medium text-white shadow-[0_3px_10px_rgba(49,91,255,0.3)] transition-colors duration-150 hover:bg-[#254DE8]"
          >
            Explore projects <ArrowRightIcon />
          </Link>
          <Link
            href="/launch"
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-black/15 bg-white/80 px-5.5 text-[14px] font-medium text-[#111] transition-colors duration-150 hover:bg-white"
          >
            Ship your product <ExternalIcon />
          </Link>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          PRODUCT OF THE DAY
          ════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1200px] px-6 py-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[300px_1fr_240px] items-start">
          {/* Left: Product Info */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#f0f4ff] px-3 py-1.5">
              <StarIcon className="text-[#315BFF] w-3.5 h-3.5" />
              <span className="text-[13px] font-semibold text-[#315BFF]">
                Product of the day
              </span>
            </div>
            <div>
              <h2 className="text-[32px] font-bold text-[#111] leading-tight">
                Hoobank
              </h2>
              <p className="text-[16px] text-[#555] mt-2 leading-relaxed">
                Next generation
                <br />
                payment method
              </p>
              <p className="text-[15px] text-[#888] mt-3">by awk</p>
            </div>
            <div className="flex items-center gap-5 pt-3">
              <span className="flex items-center gap-1.5 text-[15px] font-semibold text-[#555]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#315BFF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
                482
              </span>
              <span className="w-px h-3.5 bg-[#ddd]" />
              <span className="flex items-center gap-1.5 text-[15px] font-semibold text-[#555]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                68
              </span>
              <span className="w-px h-3.5 bg-[#ddd]" />
              <span className="flex items-center gap-1.5 text-[15px] font-semibold text-[#555]">
                <StarIcon className="text-[#F59E0B] w-3.5 h-3.5" />
                4.8
              </span>
            </div>
          </div>

          {/* Center: Hoobank Image with stats overlay */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/hoobank.png"
              alt="Hoobank - Next generation payment method"
              width={600}
              height={400}
              className="w-full h-auto"
            />
            {/* Stats overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5">
              <div className="flex items-center gap-6">
                <div>
                  <span className="text-[18px] font-bold text-white">
                    3800+
                  </span>
                  <span className="text-[11px] text-white/60 ml-1.5">
                    USERS ONLINE
                  </span>
                </div>
                <div>
                  <span className="text-[18px] font-bold text-white">230+</span>
                  <span className="text-[11px] text-white/60 ml-1.5">
                    TRUSTED BY COMPANY
                  </span>
                </div>
                <div>
                  <span className="text-[18px] font-bold text-white">
                    $230M+
                  </span>
                  <span className="text-[11px] text-white/60 ml-1.5">
                    TRANSACTION
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats Cards */}
          <div className="space-y-4">
            {/* Projects Shipped */}
            <div className="rounded-2xl bg-white/60 backdrop-blur border border-white/40 p-5">
              <div className="w-11 h-11 rounded-full bg-[#10B981] flex items-center justify-center mb-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
              </div>
              <div className="text-[28px] font-bold text-[#111] leading-tight">
                12K+
              </div>
              <div className="text-[14px] text-[#888] mt-0.5">
                projects shipped
              </div>
            </div>

            {/* Developers */}
            <div className="rounded-2xl bg-white/60 backdrop-blur border border-white/40 p-5">
              <div className="w-11 h-11 rounded-full bg-[#315BFF] flex items-center justify-center mb-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="text-[28px] font-bold text-[#111] leading-tight">
                25K+
              </div>
              <div className="text-[14px] text-[#888] mt-0.5">developers</div>
            </div>

            {/* Average Rating */}
            <div className="rounded-2xl bg-white/60 backdrop-blur border border-white/40 p-5">
              <div className="w-11 h-11 rounded-full bg-[#8B5CF6] flex items-center justify-center mb-3">
                <StarIcon className="text-white w-5 h-5" />
              </div>
              <div className="text-[28px] font-bold text-[#111] leading-tight">
                4.8
              </div>
              <div className="text-[14px] text-[#888] mt-0.5">
                Average rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          CATEGORY TABS
          ════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1200px] px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 overflow-x-auto">
            {[
              { label: "For you", icon: "star", active: true },
              { label: "All" },
              { label: "Saas" },
              { label: "AI" },
              { label: "Developer tools" },
              { label: "Web Apps" },
              { label: "Mobile" },
              { label: "Design" },
            ].map((tab) => (
              <button
                key={tab.label}
                className={`flex items-center gap-1 whitespace-nowrap px-3.5 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                  tab.active
                    ? "bg-[#315BFF] text-white"
                    : "text-[#555] hover:bg-white/60"
                }`}
              >
                {tab.icon === "star" && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3 h-3"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                )}
                {tab.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#ddd] bg-white/60 text-[13px] font-medium text-[#555] hover:bg-white/80">
              Trending
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <button className="p-2 rounded-lg border border-[#ddd] bg-white/60 text-[#555] hover:bg-white/80">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          PRODUCT GRID
          ════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1200px] px-6 py-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Large Featured Card */}
          {products
            .filter((p) => p.large)
            .map((product) => (
              <div
                key={product.id}
                className="relative overflow-hidden rounded-2xl bg-[#1a1a2e] sm:col-span-2 lg:col-span-2 aspect-[16/9]"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(min-width:1280px) 36vw, 50vw"
                />
              </div>
            ))}

          {/* Regular Cards */}
          {products
            .filter((p) => !p.large)
            .map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group overflow-hidden rounded-2xl border border-white/40 bg-white/50 backdrop-blur transition-all duration-200 hover:shadow-lg hover:bg-white/70"
              >
                <div className="relative aspect-[4/3] bg-[#1a1a2e]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(min-width:1280px) 18vw, 50vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-[15px] font-semibold text-[#111]">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-[13px] text-[#555] line-clamp-2">
                    {product.tagline}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[12px] text-[#888]">
                      by {product.maker}
                    </span>
                    <div className="flex items-center gap-3 text-[12px] text-[#888]">
                      <span className="flex items-center gap-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        >
                          <path d="M12 19V5M5 12l7-7 7 7" />
                        </svg>
                        {product.upvotes}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        >
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        {product.comments}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="#F59E0B"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        {product.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          COMMUNITY CTA
          ════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          {/* Left: Auth form */}
          <div className="max-w-[480px]">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#f0f4ff] px-3 py-1 mb-5">
              <span className="text-[12px] font-medium text-[#315BFF]">
                ♧ Join the community
              </span>
              <div className="flex -space-x-1.5">
                {communityAvatars.map((a, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-full border border-white overflow-hidden"
                  >
                    <Image
                      src={a}
                      alt=""
                      width={16}
                      height={16}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <h2 className="text-[32px] font-bold leading-tight text-[#111] sm:text-[36px]">
              Login or sign up
              <br />
              to unlock the best
              <br />
              of <span className="text-[#315BFF]">ScouTTs</span>
            </h2>
            <p className="mt-4 text-[15px] text-[#555] leading-relaxed">
              Save your favorite projects, follow developers,
              <br />
              and get personalized recommendations.
            </p>

            <div className="mt-8 max-w-[380px]">
              {/* Google */}
              <button
                type="button"
                className="flex h-[46px] w-full items-center justify-center gap-2.5 rounded-xl border border-black/10 bg-white text-[14px] font-semibold text-[#111] shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-colors duration-150 hover:bg-gray-50"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Continue with Google
              </button>

              {/* Apple */}
              <button
                type="button"
                className="mt-2.5 flex h-[46px] w-full items-center justify-center gap-2.5 rounded-xl border border-black/10 bg-white text-[14px] font-semibold text-[#111] shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-colors duration-150 hover:bg-gray-50"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.7 19.5c-.8 1.2-1.7 2.4-3 2.5-1.3 0-1.8-.8-3.3-.8s-2 .8-3.3.8c-1.3.1-2.3-1.3-3.1-2.5-1.7-2.5-3-7-1.3-10.1.9-1.5 2.4-2.5 4.1-2.5 1.3 0 2.5.9 3.3.9s2.3-1.1 3.8-.9c.7 0 2.5.3 3.6 2-3.2 1.9-2.7 6.4.6 7.7-.3.8-.7 1.8-1.4 2.9ZM13 3.5c.7-.8 1.9-1.5 2.9-1.5.1 1.2-.3 2.4-1 3.2-.7.9-1.8 1.5-3 1.4-.1-1.1.4-2.3 1.1-3.1Z" />
                </svg>
                Continue with Apple
              </button>

              {/* Divider */}
              <div className="my-5 flex items-center gap-5">
                <div className="h-px flex-1 bg-black/12" />
                <span className="text-[14px] text-[#999]">or</span>
                <div className="h-px flex-1 bg-black/12" />
              </div>

              {/* Email */}
              <label className="relative block">
                <svg
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#999]"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                    setEmailSubmitted(false);
                  }}
                  placeholder="Enter your Email address"
                  className="h-[46px] w-full rounded-xl border border-black/10 bg-white pl-11 pr-3 text-[14px] font-medium text-[#111] placeholder:text-[#999] outline-none focus:border-[#315BFF]/30 focus:ring-2 focus:ring-[#315BFF]/15"
                />
              </label>
              {emailError && (
                <p className="mt-1.5 text-[12px] text-red-500">{emailError}</p>
              )}
              {emailSubmitted && (
                <p className="mt-1.5 text-[12px] text-green-600">
                  Check your inbox for the next step!
                </p>
              )}
              <button
                type="button"
                onClick={handleEmailSubmit}
                disabled={emailLoading}
                className="mt-2.5 h-[46px] w-full rounded-xl bg-[#315BFF] text-[14px] font-semibold text-white shadow-[0_3px_10px_rgba(49,91,255,0.25)] transition-colors duration-150 hover:bg-[#254DE8] disabled:opacity-70"
              >
                {emailLoading ? "Sending..." : "Continue with Email"}
              </button>
            </div>
          </div>

          {/* Right: Floating product screenshots */}
          <div className="relative hidden min-h-[440px] lg:block">
            <div className="absolute left-0 top-8 w-[460px] rounded-2xl overflow-hidden shadow-2xl rotate-[-2deg]">
              <Image
                src="/landing/restaurant-wide.png"
                alt="DeliciousFood preview"
                width={460}
                height={280}
                className="h-auto w-full"
              />
            </div>
            <div className="absolute left-20 top-[180px] w-[380px] rounded-2xl overflow-hidden shadow-2xl rotate-[3deg] z-10">
              <Image
                src="/landing/dashboard1.png"
                alt="Dashboard preview"
                width={380}
                height={340}
                className="h-auto w-full"
              />
            </div>
            <div className="absolute left-10 top-[300px] w-[420px] rounded-2xl overflow-hidden shadow-2xl rotate-[-1deg] z-20">
              <Image
                src="/hoobank.png"
                alt="Hoobank preview"
                width={420}
                height={280}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          FOOTER
          ════════════════════════════════════════════════════════ */}
      <footer className="border-t border-white/30 bg-white/30 backdrop-blur-xl">
        <div className="mx-auto max-w-[1200px] px-6 py-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
            {/* Brand */}
            <div className="max-w-[260px]">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo.svg"
                  alt="Scoutts"
                  width={22}
                  height={28}
                  className="h-auto"
                />
                <span className="text-[16px] font-bold text-[#111]">
                  Scoutts
                </span>
              </Link>
              <p className="text-[13px] text-[#555] leading-relaxed mb-1">
                where developers ship and
              </p>
              <p className="text-[13px] text-[#555] leading-relaxed mb-4">
                the word discovers.
              </p>
              <p className="text-[12px] text-[#888] leading-relaxed mb-5">
                Scouts is the home for innovative
                <br />
                projects and the people behind them.
                <br />
                Build in public. Get discovered.
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#315BFF] hover:underline"
              >
                Join Scouts →
              </Link>
            </div>

            {/* Columns */}
            {[
              {
                title: "PRODUCT",
                links: [
                  "Discover",
                  "Trending",
                  "Developers",
                  "Categories",
                  "Ship a product",
                ],
              },
              {
                title: "COMPANY",
                links: [
                  "About Us",
                  "Blog",
                  "Careers",
                  "Press",
                  "Contact",
                  "Brand assets",
                ],
              },
              {
                title: "RESOURCES",
                links: [
                  "Help Center",
                  "Guidelines",
                  "For Developers",
                  "API",
                  "Changelog",
                  "Status",
                ],
              },
              {
                title: "LEGAL",
                links: [
                  "Terms of Service",
                  "Privacy Policy",
                  "Cookie Policy",
                  "Community Rules",
                ],
              },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-[11px] font-bold tracking-wider text-[#888] mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-[13px] text-[#555] hover:text-[#111] transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="mt-12 flex items-center justify-between border-t border-white/30 pt-6">
            <div className="flex items-center gap-4">
              {/* GitHub */}
              <a
                href="#"
                className="text-[#888] hover:text-[#111] transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              {/* X */}
              <a
                href="#"
                className="text-[#888] hover:text-[#111] transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                className="text-[#888] hover:text-[#111] transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ddd] bg-white/60 text-[#555] hover:bg-white/80 transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
