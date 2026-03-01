"use client";

import { useState } from "react";

const steps = [
  {
    title: "Install Signal for all movement communications",
    desc: "End-to-end encrypted messaging. Replace all SMS, WhatsApp, and Telegram for organizing. Enable disappearing messages.",
    time: "5 min",
  },
  {
    title: "Enable a verified VPN",
    desc: "We recommend Mullvad or ProtonVPN — both confirmed by EFF to not log traffic. Paid with cash or crypto only.",
    time: "10 min",
  },
  {
    title: "Opt out of the 14 high-priority data brokers",
    desc: "These brokers are confirmed to supply data to Palantir and ICE contractor networks. We auto-generate and submit your opt-out requests.",
    time: "15 min",
  },
  {
    title: "Harden your phone settings",
    desc: "Disable location history, ad tracking, Bluetooth scanning, and cross-app tracking. Platform-specific guides for iOS and Android.",
    time: "10 min",
  },
  {
    title: "Configure browser for surveillance resistance",
    desc: "Install uBlock Origin, disable third-party cookies, enable HTTPS-only mode, and configure DNS-over-HTTPS. Firefox or Brave recommended.",
    time: "10 min",
  },
  {
    title: "Set up Briar or Meshtastic for mesh communications",
    desc: "Offline-capable, peer-to-peer communication for when cell networks go down. Practice with your local chapter monthly.",
    time: "20 min",
  },
];

export default function PrivacyWizard() {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const progress = (checked.size / steps.length) * 100;

  return (
    <section className="py-[100px] px-10 max-w-[1200px] mx-auto" id="privacy">
      <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
        Pillar V — Security
      </div>
      <div className="font-heading text-[40px] max-md:text-[28px] font-black text-white leading-[1.15] mb-6">
        Privacy Hardening Wizard
      </div>
      <div className="text-[18px] text-light max-w-[700px] leading-[1.8]">
        Step by step. Verified to work. Each action reduces your exposure to government surveillance and data broker tracking. Complete them all and you&apos;re harder to find than 99% of Americans.
      </div>

      <div className="mt-10 space-y-3">
        {steps.map((step, i) => (
          <div
            key={i}
            onClick={() => toggle(i)}
            className="bg-card border border-border p-6 px-7 flex items-start gap-5 transition-colors hover:border-red cursor-pointer"
            role="checkbox"
            aria-checked={checked.has(i)}
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(i); }}}
          >
            <div
              className={`w-7 h-7 border-2 flex items-center justify-center flex-shrink-0 mt-0.5 text-[14px] transition-all ${
                checked.has(i)
                  ? "border-green text-green bg-green/10"
                  : "border-border text-border"
              }`}
            >
              &#10003;
            </div>
            <div className="flex-1">
              <div className={`font-heading text-[15px] font-bold mb-1 ${checked.has(i) ? "text-muted" : "text-white"}`}>
                {step.title}
              </div>
              <div className="text-[14px] text-muted leading-normal">
                {step.desc}
              </div>
            </div>
            <div className="font-heading text-[11px] text-muted tracking-[1px]">
              {step.time}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <div className="h-1 bg-border w-full">
          <div
            className="h-full bg-red transition-all duration-500"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={checked.size}
            aria-valuemax={steps.length}
          />
        </div>
        <div className="font-heading text-[12px] text-muted mt-2">
          {checked.size} of {steps.length} steps completed
        </div>
      </div>
    </section>
  );
}
