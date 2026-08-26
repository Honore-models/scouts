'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Check, CreditCard, Lock, ArrowLeft, Shield, ChevronDown } from 'lucide-react';

/* ─── Page ─────────────────────────────────────────────────── */

export default function CheckoutPage() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [name, setName] = useState('');
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const plan = {
    name: 'Pro',
    price: '$19',
    period: 'month',
    billed: '$228 billed yearly',
    features: [
      'Unlimited project listings',
      'Advanced analytics dashboard',
      'Priority in search results',
      'Custom project branding',
      'API access',
      'Email support',
    ],
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cardNumber || !expiry || !cvc || !name) return;
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
    }, 2000);
  };

  if (success) {
    return (
      <div className="relative min-h-screen overflow-hidden text-[#111]">
        <div className="pointer-events-none fixed inset-0 -z-10" style={{ background: 'linear-gradient(180deg, #F8F6FF 0%, #F2EEFF 15%, #F0ECFF 30%, #EDE8FF 50%, #E8E0FF 70%, #E4DAFF 100%)' }} />
        <div className="flex min-h-screen items-center justify-center px-4">
          <div className="w-full max-w-[460px] text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#34C759]/10">
              <Check className="h-10 w-10 text-[#34C759]" />
            </div>
            <h1 className="mt-6 text-[28px] font-bold text-[#111]">Payment successful!</h1>
            <p className="mt-3 text-[14px] text-[#666]">Welcome to {plan.name}. You now have access to all premium features.</p>
            <div className="mt-8 flex justify-center gap-3">
              <Link href="/home" className="rounded-xl bg-[#315BFF] px-6 py-3 text-[14px] font-semibold text-white shadow-[0_2px_8px_rgba(49,91,255,0.25)] hover:bg-[#254DE8]">
                Go to Dashboard
              </Link>
              <Link href="/discover" className="rounded-xl border border-black/10 bg-white px-6 py-3 text-[14px] font-medium text-[#555] hover:bg-gray-50">
                Explore Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden text-[#111]">
      <div className="pointer-events-none fixed inset-0 -z-10" style={{ background: 'linear-gradient(180deg, #F8F6FF 0%, #F2EEFF 15%, #F0ECFF 30%, #EDE8FF 50%, #E8E0FF 70%, #E4DAFF 100%)' }} />

      <div className="flex min-h-screen items-center justify-center px-4 py-12">
        <div className="w-full max-w-[800px]">
          <Link href="/pricing" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#555] hover:text-[#111]">
            <ArrowLeft className="h-4 w-4" />
            Back to pricing
          </Link>

          <h1 className="mt-4 text-[28px] font-bold text-[#111]">Checkout</h1>
          <p className="mt-1 text-[14px] text-[#666]">Complete your purchase to unlock premium features</p>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px]">
            {/* Payment Form */}
            <div className="rounded-2xl border border-black/[0.04] bg-white/70 p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-5">
                <CreditCard className="h-5 w-5 text-[#315BFF]" />
                <h2 className="text-[16px] font-bold text-[#111]">Payment details</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[13px] font-medium text-[#555]">Cardholder name</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" className="mt-1.5 h-11 w-full rounded-xl border border-black/10 bg-white/60 px-4 text-[14px] text-[#111] placeholder:text-[#aaa] outline-none focus:border-[#315BFF]/30 focus:bg-white focus:ring-2 focus:ring-[#315BFF]/15" />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-[#555]">Card number</label>
                  <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder="1234 5678 9012 3456" maxLength={19} className="mt-1.5 h-11 w-full rounded-xl border border-black/10 bg-white/60 px-4 text-[14px] text-[#111] placeholder:text-[#aaa] outline-none focus:border-[#315BFF]/30 focus:bg-white focus:ring-2 focus:ring-[#315BFF]/15" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-medium text-[#555]">Expiry date</label>
                    <input type="text" value={expiry} onChange={(e) => setExpiry(e.target.value)} placeholder="MM/YY" maxLength={5} className="mt-1.5 h-11 w-full rounded-xl border border-black/10 bg-white/60 px-4 text-[14px] text-[#111] placeholder:text-[#aaa] outline-none focus:border-[#315BFF]/30 focus:bg-white focus:ring-2 focus:ring-[#315BFF]/15" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-[#555]">CVC</label>
                    <input type="text" value={cvc} onChange={(e) => setCvc(e.target.value)} placeholder="123" maxLength={4} className="mt-1.5 h-11 w-full rounded-xl border border-black/10 bg-white/60 px-4 text-[14px] text-[#111] placeholder:text-[#aaa] outline-none focus:border-[#315BFF]/30 focus:bg-white focus:ring-2 focus:ring-[#315BFF]/15" />
                  </div>
                </div>

                <button type="submit" disabled={processing} className="mt-2 h-12 w-full rounded-xl bg-[#315BFF] text-[14px] font-semibold text-white shadow-[0_2px_8px_rgba(49,91,255,0.25)] transition-colors hover:bg-[#254DE8] disabled:opacity-60 disabled:cursor-not-allowed">
                  {processing ? 'Processing...' : `Pay ${plan.price}`}
                </button>
              </form>

              <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-[#999]">
                <Lock className="h-3 w-3" />
                <span>Secured with 256-bit SSL encryption</span>
              </div>
            </div>

            {/* Order Summary */}
            <div className="rounded-2xl border border-[#315BFF]/10 bg-white/70 p-6 shadow-[0_2px_12px_rgba(49,91,255,0.06)] backdrop-blur-xl">
              <h2 className="text-[16px] font-bold text-[#111]">Order summary</h2>

              <div className="mt-4 rounded-xl bg-[#F8F6FF] p-4">
                <div className="flex items-center justify-between">
                  <span className="text-[15px] font-semibold text-[#111]">{plan.name} Plan</span>
                  <span className="text-[15px] font-bold text-[#111]">{plan.price}/{plan.period}</span>
                </div>
                <p className="mt-1 text-[12px] text-[#666]">{plan.billed}</p>
              </div>

              <div className="mt-5 space-y-3">
                <p className="text-[13px] font-semibold text-[#111]">What&apos;s included:</p>
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#34C759]" />
                    <span className="text-[13px] text-[#555]">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-black/[0.06] pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-[14px] font-medium text-[#555]">Subtotal</span>
                  <span className="text-[14px] text-[#111]">$19.00</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[14px] font-medium text-[#555]">Tax</span>
                  <span className="text-[14px] text-[#111]">$0.00</span>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-black/[0.06] pt-3">
                  <span className="text-[16px] font-bold text-[#111]">Total</span>
                  <span className="text-[16px] font-bold text-[#111]">$19.00/mo</span>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 rounded-lg bg-[#F8F6FF] px-3 py-2">
                <Shield className="h-4 w-4 text-[#315BFF]" />
                <p className="text-[11px] text-[#666]">30-day money-back guarantee. Cancel anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
