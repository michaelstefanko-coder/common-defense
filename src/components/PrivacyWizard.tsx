"use client";

import { useEffect, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useToast } from "./Toast";

const steps = [
  {
    title: "Install Signal for all movement communications",
    desc: "End-to-end encrypted messaging. Replace all SMS, WhatsApp, and Telegram for organizing. Enable disappearing messages.",
    time: "5 min",
    detail: "Download Signal from signal.org. Set up a PIN. Enable disappearing messages (Settings > Privacy > Default Timer > 1 week). Create a group for your local chapter.",
  },
  {
    title: "Enable a verified VPN",
    desc: "We recommend Mullvad or ProtonVPN — both confirmed by EFF to not log traffic. Paid with cash or crypto only.",
    time: "10 min",
    detail: "Go to mullvad.net or protonvpn.com. Create an account with minimal info. Pay with cash voucher or crypto. Install the app. Enable kill switch. Set to auto-connect on startup.",
  },
  {
    title: "Opt out of the 14 high-priority data brokers",
    desc: "These brokers are confirmed to supply data to Palantir and ICE contractor networks. We auto-generate and submit your opt-out requests.",
    time: "15 min",
    detail: "The 14 brokers: Spokeo, BeenVerified, WhitePages, Pipl, Clearview AI, TruePeopleSearch, FastPeopleSearch, Intelius, USSearch, PeekYou, Radaris, MyLife, ZabaSearch, FamilyTreeNow. Visit each site's opt-out page and follow the removal process.",
  },
  {
    title: "Harden your phone settings",
    desc: "Disable location history, ad tracking, Bluetooth scanning, and cross-app tracking. Platform-specific guides for iOS and Android.",
    time: "10 min",
    detail: "iOS: Settings > Privacy > Tracking > disable. Settings > Privacy > Location > reduce to 'While Using'. Android: Settings > Privacy > Ads > Delete advertising ID. Settings > Location > disable Bluetooth/Wi-Fi scanning.",
  },
  {
    title: "Configure browser for surveillance resistance",
    desc: "Install uBlock Origin, disable third-party cookies, enable HTTPS-only mode, and configure DNS-over-HTTPS. Firefox or Brave recommended.",
    time: "10 min",
    detail: "Install Firefox or Brave. Add uBlock Origin extension. Settings > Privacy: Block third-party cookies, enable HTTPS-Only mode, set DNS-over-HTTPS to Cloudflare or NextDNS. Disable telemetry.",
  },
  {
    title: "Set up Briar or Meshtastic for mesh communications",
    desc: "Offline-capable, peer-to-peer communication for when cell networks go down. Practice with your local chapter monthly.",
    time: "20 min",
    detail: "Install Briar (briarproject.org) for phone-to-phone messaging over Bluetooth/Wi-Fi. For longer range: get a Meshtastic-compatible LoRa device ($30-60). Flash firmware from meshtastic.org. Practice with your chapter monthly.",
  },
];

export default function PrivacyWizard() {
  const [checkedArr, setCheckedArr] = useLocalStorage<number[]>("cd-privacy-steps", []);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const toast = useToast();

  useEffect(() => setMounted(true), []);

  const checked = new Set(checkedArr);

  const toggle = (index: number) => {
    const next = new Set(checked);
    if (next.has(index)) {
      next.delete(index);
    } else {
      next.add(index);
      toast.addToast(`Step completed: ${steps[index].title.split(" ").slice(0, 4).join(" ")}...`, "success");
    }
    setCheckedArr(Array.from(next));
  };

  const progress = mounted ? (checked.size / steps.length) * 100 : 0;
  const allComplete = mounted && checked.size === steps.length;

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
          <div key={i} className="bg-card border border-border transition-colors hover:border-red">
            <div
              onClick={() => toggle(i)}
              className="p-6 px-7 flex items-start gap-5 cursor-pointer"
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
                <div className={`font-heading text-[15px] font-bold mb-1 ${checked.has(i) ? "text-muted line-through" : "text-white"}`}>
                  {step.title}
                </div>
                <div className="text-[14px] text-muted leading-normal">
                  {step.desc}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="font-heading text-[11px] text-muted tracking-[1px]">
                  {step.time}
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); setExpandedStep(expandedStep === i ? null : i); }}
                  className="font-heading text-[10px] tracking-[1px] uppercase py-1.5 px-3 bg-transparent border border-border text-muted cursor-pointer hover:border-red hover:text-white transition-all"
                >
                  {expandedStep === i ? "Less" : "Guide"}
                </button>
              </div>
            </div>
            {expandedStep === i && (
              <div className="px-7 pb-6 pl-[68px] border-t border-border">
                <div className="text-[13px] text-light leading-[1.8] mt-4 p-4 bg-black/30 border border-border">
                  <div className="font-heading text-[10px] tracking-[2px] uppercase text-red mb-2">Step-by-Step Guide</div>
                  {step.detail}
                </div>
              </div>
            )}
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
        <div className="font-heading text-[12px] mt-2 flex justify-between">
          <span className="text-muted">{checked.size} of {steps.length} steps completed</span>
          {allComplete && (
            <span className="text-green font-bold">All steps complete — your privacy is hardened</span>
          )}
        </div>
      </div>
    </section>
  );
}
