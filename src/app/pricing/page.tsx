"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ChevronDown, Search } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for trying out Scouts.",
    price: "$0",
    period: "/month",
    billedYearly: null,
    popular: false,
    cta: "Get started",
    ctaVariant: "outline" as const,
    featuresTitle: "Includes:",
    features: [
      "Launch 1 product",
      "Upload up to 3 media files",
      "Basic analytics",
      "Community support",
    ],
  },
  {
    name: "Pro",
    description: "Grow faster and reach more people.",
    price: "$19",
    period: "/month",
    billedYearly: "$228",
    popular: true,
    cta: "Start free trial",
    ctaVariant: "solid" as const,
    featuresTitle: "Everything in Starter, plus:",
    features: [
      "Launch up to 20 products",
      "Upload unlimited media",
      "Detailed analytics & insights",
      "Custom domain",
      "Newsletter feature",
      "Priority support",
    ],
  },
  {
    name: "Team",
    description: "For teams building and shipping together.",
    price: "$49",
    period: "/month",
    billedYearly: "$588",
    popular: false,
    cta: "Start free trial",
    ctaVariant: "outline" as const,
    featuresTitle: "Everything in Pro, plus:",
    features: [
      "Unlimited products",
      "Team collaboration",
      "Role & permission management",
      "API access",
      "Dedicated support",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f7ff] via-[#f3f1ff] to-[#e8e4ff]">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 lg:px-10 py-4 bg-white/40 backdrop-blur-xl border-b border-white/30">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Scoutts" width={32} height={32} />
            <span className="text-[18px] font-bold text-[#111]">Scoutts</span>
          </Link>
          <div className="hidden lg:flex items-center gap-6">
            {["Discover", "Trending", "Developers"].map((item) => (
              <Link
                key={item}
                href="/discover"
                className="text-[14px] font-medium text-[#555] hover:text-[#111] transition-colors"
              >
                {item}
              </Link>
            ))}
            <div className="flex items-center gap-1 text-[14px] font-medium text-[#555] cursor-pointer hover:text-[#111] transition-colors">
              Categories
              <ChevronDown size={14} />
            </div>
            <Link href="/" className="text-[14px] font-medium text-[#555] hover:text-[#111] transition-colors">
              About
            </Link>
            <span className="text-[14px] font-semibold text-[#111] border-b-2 border-[#111] pb-0.5">
              Pricing
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-white/70 border border-white/50 rounded-full px-4 py-2">
            <Search size={14} className="text-[#999]" />
            <input
              type="text"
              placeholder="search project , developers ........"
              className="bg-transparent text-[13px] text-[#333] placeholder-[#aaa] outline-none w-48"
            />
          </div>
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
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-[1100px] mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-[42px] sm:text-[52px] font-bold text-[#111] leading-tight tracking-tight mb-4">
            Plans that grow with you
          </h1>
          <p className="text-[16px] text-[#555] mb-1">
            Choose the perfect plan to launch, grow, and scale your products.
          </p>
          <p className="text-[14px] text-[#888]">
            No hidden fees. Cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-14">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 transition-all duration-200 ${
                plan.popular
                  ? "bg-white border-2 border-[#8B5CF6] shadow-xl shadow-[#8B5CF6]/10 scale-[1.02] z-10"
                  : "bg-white/70 border border-white/50 hover:bg-white/90 hover:shadow-lg"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-[#8B5CF6] text-white text-[12px] font-semibold rounded-full">
                    Most popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-5">
                <h3 className="text-[20px] font-bold text-[#111] mb-1">
                  {plan.name}
                </h3>
                <p className="text-[14px] text-[#666]">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-[42px] font-bold text-[#111]">
                  {plan.price}
                </span>
                <span className="text-[14px] text-[#888]">{plan.period}</span>
                {plan.billedYearly && (
                  <div className="text-[13px] text-[#888] mt-0.5">
                    Billed yearly{" "}
                    <span className="text-[#8B5CF6] font-medium">
                      {plan.billedYearly}
                    </span>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <Link
                href="/signup"
                className={`block w-full text-center py-3 rounded-xl text-[14px] font-semibold transition-colors mb-6 ${
                  plan.popular
                    ? "bg-[#315BFF] text-white hover:bg-[#2a4de6]"
                    : "border border-[#ddd] text-[#333] bg-white hover:bg-[#f8f7ff]"
                }`}
              >
                {plan.cta}
              </Link>

              {/* Features */}
              <div>
                <p className="text-[13px] font-semibold text-[#111] mb-3">
                  {plan.featuresTitle}
                </p>
                <ul className="space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#f0f4ff] flex items-center justify-center shrink-0 mt-0.5">
                        <Check
                          size={12}
                          className="text-[#315BFF]"
                          strokeWidth={3}
                        />
                      </div>
                      <span className="text-[13px] text-[#555] leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="text-center">
          <p className="text-[14px] text-[#666]">
            Need a custom plan for your organization?{" "}
            <Link
              href="#"
              className="text-[#315BFF] font-semibold hover:underline"
            >
              Contact sales →
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
