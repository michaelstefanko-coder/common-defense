"use client";

import { useState, useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useToast } from "./Toast";

interface Broker {
  name: string;
  url: string;
  iceFeed: boolean;
  difficulty: "Easy" | "Medium" | "Hard";
  time: string;
  instructions: string;
}

const brokers: Broker[] = [
  { name: "Spokeo", url: "https://www.spokeo.com/optout", iceFeed: true, difficulty: "Easy", time: "2 min", instructions: "Search for your name, find your listing, click 'Remove This Listing', enter your email, click the confirmation link." },
  { name: "BeenVerified", url: "https://www.beenverified.com/app/optout/search", iceFeed: true, difficulty: "Easy", time: "3 min", instructions: "Search for yourself, select your record, click 'Proceed with opt out', enter email for verification, confirm via email link." },
  { name: "WhitePages", url: "https://www.whitepages.com/suppression-requests", iceFeed: true, difficulty: "Medium", time: "5 min", instructions: "Find your listing, click 'Remove me', select reason, verify via phone call (automated). Phone verification required." },
  { name: "TruePeopleSearch", url: "https://www.truepeoplesearch.com/removal", iceFeed: true, difficulty: "Easy", time: "2 min", instructions: "Find your listing, click the remove button. No email verification needed. Removal within 72 hours." },
  { name: "FastPeopleSearch", url: "https://www.fastpeoplesearch.com/removal", iceFeed: true, difficulty: "Easy", time: "2 min", instructions: "Find your listing, click 'Remove This Record'. No verification needed. Immediate removal." },
  { name: "Intelius", url: "https://www.intelius.com/opt-out", iceFeed: true, difficulty: "Medium", time: "5 min", instructions: "Submit opt-out form with your information. Email verification required. ID upload may be requested. Processing takes 7-14 days." },
  { name: "USSearch", url: "https://www.ussearch.com/opt-out/submit/", iceFeed: false, difficulty: "Easy", time: "2 min", instructions: "Enter name and state, find your listing, click opt out. Email verification required." },
  { name: "PeekYou", url: "https://www.peekyou.com/about/contact/optout/", iceFeed: false, difficulty: "Easy", time: "3 min", instructions: "Find your profile URL on PeekYou, submit it in the opt-out form with your email. Processing takes 30 days." },
  { name: "Radaris", url: "https://radaris.com/control/privacy", iceFeed: true, difficulty: "Hard", time: "10 min", instructions: "Create an account (required), find your profile, request removal. May require ID verification. Persistent — check back in 30 days." },
  { name: "MyLife", url: "https://www.mylife.com/privacy-policy#cali-shine-the-light", iceFeed: false, difficulty: "Hard", time: "10 min", instructions: "Call 1-888-704-1900 or email privacy@mylife.com. Phone call is most effective. Request deletion under CCPA if in California." },
  { name: "ZabaSearch", url: "https://www.zabasearch.com/block_records/", iceFeed: false, difficulty: "Easy", time: "3 min", instructions: "Submit opt-out form with your information. Fax option also available. Processing takes 4-6 weeks." },
  { name: "FamilyTreeNow", url: "https://www.familytreenow.com/optout", iceFeed: false, difficulty: "Easy", time: "2 min", instructions: "Search for yourself, find your record, click 'opt out'. Immediate processing." },
  { name: "Clearview AI", url: "https://clearview.ai/privacy/requests", iceFeed: true, difficulty: "Hard", time: "10 min", instructions: "Submit a GDPR/CCPA deletion request. Upload a photo of yourself for them to search and delete. Requires proof of identity. This is a facial recognition company used by ICE." },
  { name: "Pipl", url: "https://pipl.com/personal-information-removal-request", iceFeed: true, difficulty: "Medium", time: "5 min", instructions: "Submit removal request form. Commercial data broker — removal may take 30 days. Follow up if not removed." },
];

export default function DataBrokerOptOut() {
  const [completedBrokers, setCompletedBrokers] = useLocalStorage<string[]>("cd-optout-brokers", []);
  const [expandedBroker, setExpandedBroker] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const toast = useToast();

  useEffect(() => setMounted(true), []);

  const completed = new Set(completedBrokers);
  const progress = mounted ? (completed.size / brokers.length) * 100 : 0;
  const iceFeeds = brokers.filter((b) => b.iceFeed);
  const iceFeedCompleted = mounted ? iceFeeds.filter((b) => completed.has(b.name)).length : 0;

  const markComplete = (name: string) => {
    if (completed.has(name)) return;
    setCompletedBrokers((prev) => [...prev, name]);
    const remaining = brokers.length - completed.size - 1;
    toast.addToast(
      remaining > 0
        ? `Opted out of ${name}. ${remaining} broker${remaining > 1 ? "s" : ""} remaining.`
        : "All data brokers completed! +4 labor credits.",
      "success"
    );
  };

  return (
    <section className="py-[100px] px-10 max-w-[1200px] mx-auto" id="optout">
      <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
        Data Defense
      </div>
      <div className="font-heading text-[40px] max-md:text-[28px] font-black text-white leading-[1.15] mb-6">
        Data Broker Opt-Out Blitz
      </div>
      <div className="text-[18px] text-light max-w-[700px] leading-[1.8]">
        These 14 data brokers are confirmed to sell your personal information. {iceFeeds.length} of them feed directly into Palantir and ICE contractor networks.
        Opt out of all of them and earn 4 labor credits.
      </div>

      {/* Progress */}
      <div className="mt-8 bg-card border border-border p-6 flex items-center gap-8 max-md:flex-col">
        <div className="text-center min-w-[120px]">
          <div className="font-heading text-[36px] font-black text-white">
            {mounted ? completed.size : 0}/{brokers.length}
          </div>
          <div className="font-heading text-[10px] tracking-[2px] uppercase text-muted">Completed</div>
        </div>
        <div className="flex-1 w-full">
          <div className="h-2 bg-border w-full">
            <div
              className="h-full bg-red transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 font-heading text-[11px]">
            <span className="text-muted">{Math.round(progress)}% complete</span>
            <span className="text-red">{mounted ? iceFeedCompleted : 0}/{iceFeeds.length} ICE-connected brokers removed</span>
          </div>
        </div>
      </div>

      {/* Broker List */}
      <div className="mt-8 space-y-3">
        {brokers.map((broker) => {
          const isComplete = mounted && completed.has(broker.name);
          const isExpanded = expandedBroker === broker.name;

          return (
            <div
              key={broker.name}
              className={`bg-card border transition-all ${
                isComplete ? "border-green/30" : "border-border hover:border-red"
              }`}
            >
              <div className="p-5 px-7 flex items-center gap-5">
                <div
                  onClick={() => markComplete(broker.name)}
                  className={`w-6 h-6 border-2 flex items-center justify-center flex-shrink-0 cursor-pointer text-[12px] transition-all ${
                    isComplete
                      ? "border-green text-green bg-green/10"
                      : "border-border text-border hover:border-red"
                  }`}
                >
                  &#10003;
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className={`font-heading text-[15px] font-bold ${isComplete ? "text-muted line-through" : "text-white"}`}>
                      {broker.name}
                    </span>
                    {broker.iceFeed && (
                      <span className="font-heading text-[9px] tracking-[1px] uppercase py-0.5 px-2 bg-red/15 text-red">
                        ICE Feed
                      </span>
                    )}
                    <span className={`font-heading text-[9px] tracking-[1px] uppercase py-0.5 px-2 ${
                      broker.difficulty === "Easy" ? "bg-green/15 text-green" :
                      broker.difficulty === "Medium" ? "bg-yellow/15 text-yellow" :
                      "bg-red/15 text-red"
                    }`}>
                      {broker.difficulty}
                    </span>
                  </div>
                </div>

                <span className="font-heading text-[11px] text-muted">{broker.time}</span>

                <button
                  onClick={() => setExpandedBroker(isExpanded ? null : broker.name)}
                  className="font-heading text-[10px] tracking-[1px] uppercase py-1.5 px-3 bg-transparent border border-border text-muted cursor-pointer hover:border-red hover:text-white transition-all"
                >
                  {isExpanded ? "Less" : "How"}
                </button>

                {!isComplete && (
                  <a
                    href={broker.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading text-[10px] tracking-[1px] uppercase py-1.5 px-3 bg-red text-white no-underline hover:no-underline hover:bg-red-light transition-all"
                  >
                    Go &rarr;
                  </a>
                )}
              </div>

              {isExpanded && (
                <div className="px-7 pb-5 border-t border-border">
                  <div className="text-[13px] text-light leading-[1.8] mt-4 p-4 bg-black/30 border border-border">
                    <div className="font-heading text-[10px] tracking-[2px] uppercase text-red mb-2">Instructions</div>
                    {broker.instructions}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {mounted && completed.size === brokers.length && (
        <div className="mt-8 bg-green/10 border border-green/30 p-6 text-center">
          <div className="font-heading text-[18px] text-green font-bold">
            All data brokers opted out. +4 labor credits earned.
          </div>
          <p className="text-[14px] text-light mt-2">
            You&apos;re now harder to track than 99% of Americans. Re-check in 90 days — some brokers re-add data.
          </p>
        </div>
      )}
    </section>
  );
}
