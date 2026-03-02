"use client";

import { useState, useEffect } from "react";
import aidData from "@/data/aid-listings.json";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Link from "next/link";

interface AidListing {
  id: string;
  type: string;
  category: string;
  title: string;
  description: string;
  location: string;
  credits: number;
  offeredBy?: string;
  neededBy?: string;
  urgency?: string;
  posted?: string;
}

const CATEGORY_ICONS: Record<string, string> = {
  Food: "\u{1F35E}",
  Housing: "\u{1F3E0}",
  Medical: "\u2695\uFE0F",
  Legal: "\u2696\uFE0F",
  Transport: "\u{1F698}",
  Childcare: "\u{1F9F8}",
  Skills: "\u{1F527}",
};

export default function AidMarketplace() {
  const [userListings] = useLocalStorage<AidListing[]>("cd-aid-listings", []);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const allListings: AidListing[] = [
    ...(aidData.listings as AidListing[]),
    ...(mounted ? userListings : []),
  ];

  // Show urgent items first, then newest — limited to 6 for the preview
  const preview = [...allListings]
    .sort((a, b) => {
      const urgOrder: Record<string, number> = { critical: 0, urgent: 1, normal: 2 };
      const urgA = urgOrder[a.urgency || "normal"] ?? 2;
      const urgB = urgOrder[b.urgency || "normal"] ?? 2;
      if (urgA !== urgB) return urgA - urgB;
      return new Date(b.posted || "2026-01-01").getTime() - new Date(a.posted || "2026-01-01").getTime();
    })
    .slice(0, 6);

  const stats = {
    total: allListings.length,
    offers: allListings.filter((l) => l.type === "offer").length,
    needs: allListings.filter((l) => l.type === "need").length,
    urgent: allListings.filter((l) => l.urgency === "urgent" || l.urgency === "critical").length,
  };

  return (
    <section className="py-[100px] px-10 max-md:px-5 max-w-[1200px] mx-auto" id="aid">
      <div className="font-mono text-[10px] tracking-[4px] uppercase text-red mb-4">
        {"// "}Pillar II — Mutual Aid
      </div>
      <div className="font-heading text-[40px] max-md:text-[28px] font-black text-white leading-[1.15] mb-4 uppercase">
        The Marketplace
      </div>
      <div className="flex items-end justify-between max-md:flex-col max-md:items-start max-md:gap-4 mb-8">
        <div className="text-[17px] text-light max-w-[600px] leading-[1.7]">
          Post what you have. Post what you need. No middlemen, no fees. A strike only works if people can survive it.
        </div>
        <div className="flex gap-6">
          <div className="text-center">
            <div className="font-heading text-[24px] font-black text-green">{stats.offers}</div>
            <div className="font-mono text-[10px] tracking-[2px] uppercase text-muted">Offers</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-[24px] font-black text-red">{stats.needs}</div>
            <div className="font-mono text-[10px] tracking-[2px] uppercase text-muted">Needs</div>
          </div>
          {stats.urgent > 0 && (
            <div className="text-center">
              <div className="font-heading text-[24px] font-black text-yellow">{stats.urgent}</div>
              <div className="font-mono text-[10px] tracking-[2px] uppercase text-muted">Urgent</div>
            </div>
          )}
        </div>
      </div>

      {/* Preview cards */}
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
        {preview.map((item) => (
          <div
            key={item.id}
            className={`bg-card border p-5 flex flex-col transition-colors ${
              item.urgency === "critical" ? "border-red/60 bg-red/5" :
              item.urgency === "urgent" ? "border-yellow/40" : "border-border"
            } ${item.type === "offer" ? "hover:border-green/60" : "hover:border-red/60"}`}
          >
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className={`font-mono text-[10px] tracking-[2px] uppercase py-1 px-2 font-bold ${
                item.type === "offer" ? "bg-green/15 text-green" : "bg-red/15 text-red"
              }`}>
                {item.type === "offer" ? "Offering" : "Needed"}
              </span>
              <span className="font-mono text-[10px] tracking-[1px] text-muted">
                {CATEGORY_ICONS[item.category]} {item.category}
              </span>
              {(item.urgency === "critical" || item.urgency === "urgent") && (
                <span className={`font-mono text-[10px] tracking-[1px] uppercase font-bold ${
                  item.urgency === "critical" ? "text-red animate-pulse" : "text-yellow"
                }`}>
                  {item.urgency}
                </span>
              )}
            </div>
            <h3 className="font-heading text-[15px] font-bold text-white mb-1.5 leading-[1.3]">
              {item.title}
            </h3>
            <p className="text-[12px] text-muted leading-[1.5] mb-2 flex-1 line-clamp-2">
              {item.description}
            </p>
            <div className="text-[11px] text-muted font-mono flex items-center justify-between">
              <span>{item.location}</span>
              {item.credits > 0 && (
                <span className={item.type === "offer" ? "text-green" : "text-red"}>
                  {item.type === "offer" ? `+${item.credits}` : item.credits} cr
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-8 flex gap-4 flex-wrap">
        <Link
          href="/mutual-aid"
          className="font-heading text-[13px] tracking-[2px] uppercase bg-red text-white px-10 py-4 border-2 border-red font-bold hover:bg-red-light transition-colors no-underline hover:no-underline inline-block"
          style={{ borderRadius: 0 }}
        >
          Browse All {stats.total} Listings
        </Link>
        <Link
          href="/mutual-aid"
          className="font-mono text-[12px] tracking-[2px] uppercase bg-transparent text-muted px-8 py-4 border border-border hover:text-white hover:border-red transition-colors no-underline hover:no-underline inline-block"
          style={{ borderRadius: 0 }}
        >
          + Post a Listing
        </Link>
      </div>
    </section>
  );
}
