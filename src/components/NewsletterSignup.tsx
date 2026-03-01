"use client";

import { useState, useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useToast } from "./Toast";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useLocalStorage<{ email: string } | null>("cd-newsletter", null);
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);
  const toast = useToast();

  useEffect(() => setMounted(true), []);

  const isSubscribed = mounted && !!subscribed;

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(true);
      return;
    }
    setError(false);
    setSubscribed({ email: email.trim() });
    setEmail("");
    toast.addToast("Subscribed. Weekly intelligence brief incoming.", "success");
  };

  return (
    <section className="py-[80px] px-10 bg-dark border-t border-b border-border" id="newsletter">
      <div className="max-w-[600px] mx-auto text-center">
        <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
          Stay Informed
        </div>
        <div className="font-heading text-[32px] max-md:text-[24px] font-black text-white leading-[1.15] mb-4">
          Weekly Intelligence Brief
        </div>
        <p className="text-[16px] text-light mb-8">
          One email per week. Campaign updates, new operations, movement intelligence. No spam. Unsubscribe anytime.
        </p>

        {isSubscribed ? (
          <div className="bg-green/10 border border-green/30 p-6">
            <div className="font-heading text-[14px] text-green font-bold">
              &#10003; Subscribed as {subscribed?.email}
            </div>
            <p className="text-[13px] text-light mt-2">
              You&apos;ll receive the weekly intelligence brief every Monday at 06:00 ET.
            </p>
          </div>
        ) : (
          <div className="flex gap-3 max-md:flex-col">
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(false); }}
              placeholder="your@email.com"
              className={`flex-1 py-3.5 px-5 bg-card border text-white font-heading text-[14px] outline-none transition-colors placeholder:text-muted ${
                error ? "border-red" : "border-border focus:border-red"
              }`}
              onKeyDown={(e) => { if (e.key === "Enter") handleSubscribe(); }}
              aria-label="Email address"
            />
            <button
              onClick={handleSubscribe}
              className="font-heading text-[13px] tracking-[2px] uppercase bg-red text-white px-10 py-4 border-none cursor-pointer font-bold hover:bg-red-light transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        )}

        <p className="text-[12px] text-muted mt-4">
          Encrypted with PGP. Your email is never shared or sold.
        </p>
      </div>
    </section>
  );
}
