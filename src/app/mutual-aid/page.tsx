"use client";

import { useState, useEffect, useMemo } from "react";
import aidData from "@/data/aid-listings.json";
import Modal from "@/components/Modal";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useToast } from "@/components/Toast";
import Link from "next/link";

type FilterType = "all" | "offer" | "need";
type SortOption = "newest" | "urgency" | "credits-high" | "credits-low";

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

interface NewListing {
  type: "offer" | "need";
  category: string;
  title: string;
  description: string;
  location: string;
  credits: string;
  contactName: string;
  urgency: string;
}

const emptyListing: NewListing = {
  type: "offer",
  category: "Food",
  title: "",
  description: "",
  location: "",
  credits: "1",
  contactName: "",
  urgency: "normal",
};

const ALL_CATEGORIES = [
  "All",
  "Food",
  "Housing",
  "Medical",
  "Legal",
  "Transport",
  "Childcare",
  "Skills",
] as const;

type Category = (typeof ALL_CATEGORIES)[number];

const CATEGORY_ICONS: Record<string, string> = {
  Food: "\u{1F35E}",
  Housing: "\u{1F3E0}",
  Medical: "\u2695\uFE0F",
  Legal: "\u2696\uFE0F",
  Transport: "\u{1F698}",
  Childcare: "\u{1F9F8}",
  Skills: "\u{1F527}",
};

const URGENCY_ORDER: Record<string, number> = {
  critical: 0,
  urgent: 1,
  normal: 2,
};

function timeAgo(dateStr: string): string {
  const now = new Date("2026-03-02");
  const posted = new Date(dateStr);
  const days = Math.floor(
    (now.getTime() - posted.getTime()) / (1000 * 60 * 60 * 24)
  );
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days}d ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  return `${Math.floor(days / 30)}mo ago`;
}

export default function MutualAidPage() {
  const [typeFilter, setTypeFilter] = useState<FilterType>("all");
  const [categoryFilter, setCategoryFilter] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [showPostModal, setShowPostModal] = useState(false);
  const [contactModal, setContactModal] = useState<string | null>(null);
  const [newListing, setNewListing] = useState<NewListing>(emptyListing);
  const [userListings, setUserListings] = useLocalStorage<AidListing[]>(
    "cd-aid-listings",
    []
  );
  const [responded, setResponded] = useLocalStorage<string[]>(
    "cd-aid-responded",
    []
  );
  const [mounted, setMounted] = useState(false);
  const toast = useToast();

  useEffect(() => setMounted(true), []);

  const allListings: AidListing[] = [
    ...(aidData.listings as AidListing[]),
    ...(mounted ? userListings : []),
  ];

  const listings = useMemo(() => {
    const filtered = allListings.filter((item) => {
      const typeMatch = typeFilter === "all" || item.type === typeFilter;
      const catMatch =
        categoryFilter === "All" || item.category === categoryFilter;
      const searchMatch =
        !searchQuery ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.offeredBy || "")
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        (item.neededBy || "")
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      return typeMatch && catMatch && searchMatch;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return (
            new Date(b.posted || "2026-01-01").getTime() -
            new Date(a.posted || "2026-01-01").getTime()
          );
        case "urgency":
          return (
            (URGENCY_ORDER[a.urgency || "normal"] ?? 2) -
            (URGENCY_ORDER[b.urgency || "normal"] ?? 2)
          );
        case "credits-high":
          return b.credits - a.credits;
        case "credits-low":
          return a.credits - b.credits;
        default:
          return 0;
      }
    });

    return filtered;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeFilter, categoryFilter, searchQuery, sortBy, mounted]);

  const stats = useMemo(() => {
    const total = allListings.length;
    const offers = allListings.filter((l) => l.type === "offer").length;
    const needs = allListings.filter((l) => l.type === "need").length;
    const urgent = allListings.filter(
      (l) => l.urgency === "urgent" || l.urgency === "critical"
    ).length;
    return { total, offers, needs, urgent };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const listing of allListings) {
      counts[listing.category] = (counts[listing.category] || 0) + 1;
    }
    return counts;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  const handlePost = () => {
    if (
      !newListing.title.trim() ||
      !newListing.description.trim() ||
      !newListing.contactName.trim()
    )
      return;
    const listing: AidListing = {
      id: `user-${Date.now()}`,
      type: newListing.type,
      category: newListing.category,
      title: newListing.title.trim(),
      description: newListing.description.trim(),
      location: newListing.location.trim() || "Location not specified",
      credits: parseInt(newListing.credits) || 0,
      offeredBy:
        newListing.type === "offer" ? newListing.contactName.trim() : undefined,
      neededBy:
        newListing.type === "need" ? newListing.contactName.trim() : undefined,
      urgency: newListing.urgency,
      posted: "2026-03-02",
    };
    setUserListings((prev) => [...prev, listing]);
    setNewListing(emptyListing);
    setShowPostModal(false);
    toast.addToast("Listing posted to the marketplace.", "success");
  };

  const handleRespond = (id: string) => {
    if (responded.includes(id)) return;
    setResponded((prev) => [...prev, id]);
    setContactModal(null);
    toast.addToast(
      "Response sent. The listing owner will be notified.",
      "success"
    );
  };

  return (
    <div className="pt-[60px] min-h-screen bg-black">
      {/* HERO */}
      <section className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-10 max-md:px-5 py-16 max-md:py-10">
          <div className="flex items-start justify-between max-md:flex-col max-md:gap-6">
            <div>
              <div className="font-mono text-[10px] tracking-[4px] uppercase text-red mb-4">
                Pillar II — Mutual Aid Network
              </div>
              <h1 className="font-heading text-[48px] max-md:text-[32px] font-black text-white leading-[1.05] uppercase">
                The Marketplace
              </h1>
              <p className="text-[17px] text-light max-w-[550px] leading-[1.7] mt-4">
                Post what you have. Post what you need. No middlemen, no fees,
                no data harvested. A strike only works if people can survive it.
              </p>
            </div>
            <button
              onClick={() => setShowPostModal(true)}
              className="font-heading text-[13px] tracking-[2px] uppercase bg-red text-white px-8 py-4 border-2 border-red font-bold hover:bg-red-light transition-colors shrink-0"
              style={{ borderRadius: 0 }}
            >
              + Post a Listing
            </button>
          </div>

          {/* STATS */}
          <div className="flex gap-8 max-md:gap-4 mt-8 flex-wrap">
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-[28px] max-md:text-[22px] font-black text-white">
                {stats.total}
              </span>
              <span className="font-mono text-[10px] tracking-[2px] uppercase text-muted">
                Active
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-[28px] max-md:text-[22px] font-black text-green">
                {stats.offers}
              </span>
              <span className="font-mono text-[10px] tracking-[2px] uppercase text-muted">
                Offers
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-[28px] max-md:text-[22px] font-black text-red">
                {stats.needs}
              </span>
              <span className="font-mono text-[10px] tracking-[2px] uppercase text-muted">
                Needs
              </span>
            </div>
            {stats.urgent > 0 && (
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-[28px] max-md:text-[22px] font-black text-yellow">
                  {stats.urgent}
                </span>
                <span className="font-mono text-[10px] tracking-[2px] uppercase text-muted">
                  Urgent
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-[1200px] mx-auto px-10 max-md:px-5 py-10">
        <div className="flex gap-10 max-md:flex-col">
          {/* SIDEBAR */}
          <aside className="w-[220px] max-md:w-full shrink-0">
            {/* Search */}
            <div className="mb-6">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search listings..."
                className="w-full py-3 px-4 bg-card border border-border text-white font-mono text-[13px] outline-none focus:border-red placeholder:text-muted"
                style={{ borderRadius: 0 }}
              />
            </div>

            {/* Type filter */}
            <div className="mb-6">
              <div className="font-mono text-[10px] tracking-[3px] uppercase text-muted mb-3">
                Type
              </div>
              {(
                [
                  { label: "All Listings", value: "all" },
                  { label: "Offers", value: "offer" },
                  { label: "Needs", value: "need" },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setTypeFilter(tab.value)}
                  className={`block w-full text-left font-mono text-[12px] tracking-[1px] py-2.5 px-3 border-none transition-colors mb-0.5 ${
                    typeFilter === tab.value
                      ? "bg-red/10 text-red font-bold"
                      : "bg-transparent text-muted hover:text-light hover:bg-card"
                  }`}
                  style={{ borderRadius: 0 }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Categories */}
            <div className="mb-6">
              <div className="font-mono text-[10px] tracking-[3px] uppercase text-muted mb-3">
                Category
              </div>
              {ALL_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`flex items-center justify-between w-full text-left font-mono text-[12px] tracking-[1px] py-2.5 px-3 border-none transition-colors mb-0.5 ${
                    categoryFilter === cat
                      ? "bg-red/10 text-red font-bold"
                      : "bg-transparent text-muted hover:text-light hover:bg-card"
                  }`}
                  style={{ borderRadius: 0 }}
                >
                  <span>
                    {cat !== "All" && (
                      <span className="mr-2">{CATEGORY_ICONS[cat]}</span>
                    )}
                    {cat}
                  </span>
                  {cat !== "All" && categoryCounts[cat] && (
                    <span className="text-[10px] text-muted">
                      {categoryCounts[cat]}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="mb-6">
              <div className="font-mono text-[10px] tracking-[3px] uppercase text-muted mb-3">
                Sort By
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="w-full py-2.5 px-3 bg-card border border-border text-light font-mono text-[12px] outline-none focus:border-red"
                style={{ borderRadius: 0 }}
              >
                <option value="newest">Newest First</option>
                <option value="urgency">Most Urgent</option>
                <option value="credits-high">Credits: High to Low</option>
                <option value="credits-low">Credits: Low to High</option>
              </select>
            </div>

            {/* CTA */}
            <div className="border border-border bg-card p-5 max-md:hidden">
              <div className="font-heading text-[14px] font-bold text-white mb-2">
                Need something not listed?
              </div>
              <p className="text-[12px] text-muted leading-[1.6] mb-4">
                Post your own listing. It takes 30 seconds and costs nothing.
              </p>
              <button
                onClick={() => setShowPostModal(true)}
                className="font-mono text-[11px] tracking-[1px] uppercase bg-transparent text-red border border-red py-2.5 px-4 w-full hover:bg-red/10 transition-colors font-bold"
                style={{ borderRadius: 0 }}
              >
                Post a Listing
              </button>
            </div>
          </aside>

          {/* LISTINGS GRID */}
          <main className="flex-1 min-w-0">
            {/* Results count */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <div className="font-mono text-[12px] text-muted">
                {listings.length} listing{listings.length !== 1 ? "s" : ""}
                {categoryFilter !== "All" && (
                  <span>
                    {" "}
                    in{" "}
                    <span className="text-white font-bold">
                      {categoryFilter}
                    </span>
                  </span>
                )}
                {typeFilter !== "all" && (
                  <span>
                    {" "}
                    &middot;{" "}
                    <span className="text-white">
                      {typeFilter === "offer" ? "Offers" : "Needs"}
                    </span>
                  </span>
                )}
              </div>
              {(searchQuery ||
                categoryFilter !== "All" ||
                typeFilter !== "all") && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setCategoryFilter("All");
                    setTypeFilter("all");
                  }}
                  className="font-mono text-[11px] text-red hover:text-red-light bg-transparent border-none underline"
                >
                  Clear filters
                </button>
              )}
            </div>

            {/* Urgent banner */}
            {sortBy !== "urgency" &&
              listings.some(
                (l) => l.urgency === "critical" || l.urgency === "urgent"
              ) && (
                <button
                  onClick={() => setSortBy("urgency")}
                  className="w-full bg-red/8 border border-red/20 text-red font-mono text-[12px] tracking-[1px] py-3 px-4 mb-6 text-left hover:bg-red/15 transition-colors"
                  style={{ borderRadius: 0 }}
                >
                  <span className="font-bold uppercase">
                    {
                      listings.filter(
                        (l) =>
                          l.urgency === "critical" || l.urgency === "urgent"
                      ).length
                    }{" "}
                    urgent{" "}
                    {listings.filter(
                      (l) => l.urgency === "critical" || l.urgency === "urgent"
                    ).length === 1
                      ? "request"
                      : "requests"}
                  </span>{" "}
                  need help now &mdash; click to sort by urgency
                </button>
              )}

            {/* Listing cards */}
            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-4">
              {listings.map((item) => (
                <div
                  key={item.id}
                  className={`bg-card border p-5 flex flex-col transition-colors ${
                    item.urgency === "critical"
                      ? "border-red/60 bg-red/5"
                      : item.urgency === "urgent"
                      ? "border-yellow/40"
                      : "border-border"
                  } ${
                    item.type === "offer"
                      ? "hover:border-green/60"
                      : "hover:border-red/60"
                  }`}
                  style={{ borderRadius: 0 }}
                >
                  {/* Top row: badges */}
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span
                      className={`font-mono text-[10px] tracking-[2px] uppercase py-1 px-2.5 font-bold ${
                        item.type === "offer"
                          ? "bg-green/15 text-green"
                          : "bg-red/15 text-red"
                      }`}
                    >
                      {item.type === "offer" ? "Offering" : "Needed"}
                    </span>
                    <span className="font-mono text-[10px] tracking-[1px] uppercase py-1 px-2 bg-white/5 text-muted">
                      {CATEGORY_ICONS[item.category] || ""} {item.category}
                    </span>
                    {(item.urgency === "critical" ||
                      item.urgency === "urgent") && (
                      <span
                        className={`font-mono text-[10px] tracking-[2px] uppercase py-1 px-2.5 font-bold ${
                          item.urgency === "critical"
                            ? "bg-red/20 text-red animate-pulse"
                            : "bg-yellow/15 text-yellow"
                        }`}
                      >
                        {item.urgency === "critical"
                          ? "CRITICAL"
                          : "URGENT"}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-[16px] font-bold text-white mb-2 leading-[1.3]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] text-light leading-[1.6] mb-3 flex-1">
                    {item.description}
                  </p>

                  {/* Meta row */}
                  <div className="flex items-center justify-between text-[11px] text-muted font-mono mb-3 flex-wrap gap-1">
                    <span>{item.location}</span>
                    <span>{item.posted ? timeAgo(item.posted) : ""}</span>
                  </div>

                  {/* Posted by */}
                  <div className="text-[11px] text-muted font-mono mb-3">
                    {item.type === "offer" ? "by " : "from "}
                    <span className="text-light">
                      {item.offeredBy || item.neededBy}
                    </span>
                    {item.credits > 0 && (
                      <span className="ml-2">
                        &middot;{" "}
                        <span
                          className={
                            item.type === "offer" ? "text-green" : "text-red"
                          }
                        >
                          {item.type === "offer"
                            ? `+${item.credits}`
                            : item.credits}{" "}
                          credits
                        </span>
                      </span>
                    )}
                  </div>

                  {/* Action button */}
                  <button
                    onClick={() => setContactModal(item.id)}
                    disabled={responded.includes(item.id)}
                    className={`font-mono text-[11px] tracking-[1px] uppercase py-2.5 px-5 border font-bold transition-colors w-full ${
                      responded.includes(item.id)
                        ? "bg-green/15 text-green border-green/30 cursor-default"
                        : item.type === "offer"
                        ? "bg-transparent text-green border-green/30 hover:bg-green/10"
                        : "bg-transparent text-red border-red/30 hover:bg-red/10"
                    }`}
                    style={{ borderRadius: 0 }}
                  >
                    {responded.includes(item.id)
                      ? "\u2713 Response Sent"
                      : item.type === "offer"
                      ? "Accept This Offer"
                      : "I Can Help"}
                  </button>
                </div>
              ))}
            </div>

            {listings.length === 0 && (
              <div className="text-center py-20">
                <div className="font-heading text-[20px] text-muted mb-3">
                  No listings match your filters.
                </div>
                <p className="text-[14px] text-muted mb-6">
                  Try broadening your search or post what you need.
                </p>
                <button
                  onClick={() => setShowPostModal(true)}
                  className="font-mono text-[12px] tracking-[2px] uppercase bg-red text-white px-8 py-3 border-none font-bold hover:bg-red-light transition-colors"
                  style={{ borderRadius: 0 }}
                >
                  Post a Listing
                </button>
              </div>
            )}

            {/* Bottom CTA */}
            <div className="mt-10 border-t border-border pt-8 flex items-center justify-between max-md:flex-col max-md:gap-4">
              <p className="text-[14px] text-muted max-w-[500px]">
                This marketplace runs on trust and mutual commitment.
                Contributions earn{" "}
                <Link
                  href="/#credits"
                  className="text-red hover:underline no-underline"
                >
                  labor credits
                </Link>{" "}
                that can be exchanged for aid.
              </p>
              <button
                onClick={() => setShowPostModal(true)}
                className="font-heading text-[12px] tracking-[2px] uppercase bg-red text-white px-8 py-3 border-2 border-red font-bold hover:bg-red-light transition-colors shrink-0"
                style={{ borderRadius: 0 }}
              >
                + Post a Listing
              </button>
            </div>
          </main>
        </div>
      </div>

      {/* POST MODAL */}
      <Modal
        isOpen={showPostModal}
        onClose={() => setShowPostModal(false)}
        label="Mutual Aid"
        title="Post a Listing"
      >
        <div className="space-y-5">
          <div>
            <label className="font-mono text-[11px] tracking-[2px] uppercase text-muted block mb-2">
              Type
            </label>
            <div className="flex gap-3">
              <button
                onClick={() =>
                  setNewListing({ ...newListing, type: "offer" })
                }
                className={`flex-1 py-3 font-mono text-[12px] tracking-[1px] uppercase border transition-colors ${
                  newListing.type === "offer"
                    ? "bg-green/10 border-green text-green"
                    : "bg-transparent border-border text-muted"
                }`}
                style={{ borderRadius: 0 }}
              >
                I&apos;m Offering
              </button>
              <button
                onClick={() =>
                  setNewListing({ ...newListing, type: "need" })
                }
                className={`flex-1 py-3 font-mono text-[12px] tracking-[1px] uppercase border transition-colors ${
                  newListing.type === "need"
                    ? "bg-red/10 border-red text-red"
                    : "bg-transparent border-border text-muted"
                }`}
                style={{ borderRadius: 0 }}
              >
                I Need
              </button>
            </div>
          </div>

          <div>
            <label className="font-mono text-[11px] tracking-[2px] uppercase text-muted block mb-2">
              Category
            </label>
            <div className="flex gap-2 flex-wrap">
              {ALL_CATEGORIES.filter((c) => c !== "All").map((cat) => (
                <button
                  key={cat}
                  onClick={() =>
                    setNewListing({ ...newListing, category: cat })
                  }
                  className={`py-2 px-3 font-mono text-[11px] tracking-[1px] uppercase border transition-colors ${
                    newListing.category === cat
                      ? "bg-red border-red text-white"
                      : "bg-transparent border-border text-muted hover:border-light"
                  }`}
                  style={{ borderRadius: 0 }}
                >
                  {CATEGORY_ICONS[cat]} {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="font-mono text-[11px] tracking-[2px] uppercase text-muted block mb-2">
              Urgency
            </label>
            <div className="flex gap-2">
              {(["normal", "urgent", "critical"] as const).map((urg) => (
                <button
                  key={urg}
                  onClick={() =>
                    setNewListing({ ...newListing, urgency: urg })
                  }
                  className={`flex-1 py-2 font-mono text-[11px] tracking-[1px] uppercase border transition-colors ${
                    newListing.urgency === urg
                      ? urg === "critical"
                        ? "bg-red/15 border-red text-red"
                        : urg === "urgent"
                        ? "bg-yellow/15 border-yellow text-yellow"
                        : "bg-green/10 border-green text-green"
                      : "bg-transparent border-border text-muted"
                  }`}
                  style={{ borderRadius: 0 }}
                >
                  {urg}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="font-mono text-[11px] tracking-[2px] uppercase text-muted block mb-2">
              Your Name or Organization
            </label>
            <input
              type="text"
              value={newListing.contactName}
              onChange={(e) =>
                setNewListing({ ...newListing, contactName: e.target.value })
              }
              placeholder="Who is posting this?"
              className="w-full py-3 px-4 bg-card border border-border text-white font-mono text-[13px] outline-none focus:border-red placeholder:text-muted"
              style={{ borderRadius: 0 }}
            />
          </div>

          <div>
            <label className="font-mono text-[11px] tracking-[2px] uppercase text-muted block mb-2">
              Title
            </label>
            <input
              type="text"
              value={newListing.title}
              onChange={(e) =>
                setNewListing({ ...newListing, title: e.target.value })
              }
              placeholder="What are you offering or what do you need?"
              className="w-full py-3 px-4 bg-card border border-border text-white font-mono text-[13px] outline-none focus:border-red placeholder:text-muted"
              style={{ borderRadius: 0 }}
            />
          </div>

          <div>
            <label className="font-mono text-[11px] tracking-[2px] uppercase text-muted block mb-2">
              Description
            </label>
            <textarea
              value={newListing.description}
              onChange={(e) =>
                setNewListing({ ...newListing, description: e.target.value })
              }
              placeholder="Details, timing, availability, requirements..."
              rows={3}
              className="w-full py-3 px-4 bg-card border border-border text-white font-mono text-[13px] outline-none focus:border-red placeholder:text-muted resize-none"
              style={{ borderRadius: 0 }}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-mono text-[11px] tracking-[2px] uppercase text-muted block mb-2">
                Location
              </label>
              <input
                type="text"
                value={newListing.location}
                onChange={(e) =>
                  setNewListing({ ...newListing, location: e.target.value })
                }
                placeholder="City, neighborhood"
                className="w-full py-3 px-4 bg-card border border-border text-white font-mono text-[13px] outline-none focus:border-red placeholder:text-muted"
                style={{ borderRadius: 0 }}
              />
            </div>
            <div>
              <label className="font-mono text-[11px] tracking-[2px] uppercase text-muted block mb-2">
                Credits
              </label>
              <input
                type="number"
                min="0"
                max="20"
                value={newListing.credits}
                onChange={(e) =>
                  setNewListing({ ...newListing, credits: e.target.value })
                }
                className="w-full py-3 px-4 bg-card border border-border text-white font-mono text-[13px] outline-none focus:border-red"
                style={{ borderRadius: 0 }}
              />
            </div>
          </div>

          <button
            onClick={handlePost}
            disabled={
              !newListing.title.trim() ||
              !newListing.description.trim() ||
              !newListing.contactName.trim()
            }
            className="font-heading text-[13px] tracking-[2px] uppercase bg-red text-white px-10 py-4 border-none font-bold hover:bg-red-light transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            style={{ borderRadius: 0 }}
          >
            Post Listing
          </button>
        </div>
      </Modal>

      {/* RESPOND MODAL */}
      <Modal
        isOpen={!!contactModal}
        onClose={() => setContactModal(null)}
        label="Mutual Aid"
        title="Respond to Listing"
      >
        {contactModal &&
          (() => {
            const listing = allListings.find((l) => l.id === contactModal);
            if (!listing) return null;
            return (
              <div className="space-y-4">
                <div className="bg-card border border-border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`font-mono text-[10px] tracking-[2px] uppercase font-bold ${
                        listing.type === "offer" ? "text-green" : "text-red"
                      }`}
                    >
                      {listing.type === "offer" ? "Offering" : "Needed"}
                    </span>
                    {(listing.urgency === "critical" ||
                      listing.urgency === "urgent") && (
                      <span className="font-mono text-[10px] tracking-[1px] uppercase text-yellow font-bold">
                        &middot; {listing.urgency}
                      </span>
                    )}
                  </div>
                  <div className="font-heading text-[16px] font-bold text-white mt-1">
                    {listing.title}
                  </div>
                  <div className="text-[13px] text-light mt-2 leading-[1.6]">
                    {listing.description}
                  </div>
                  <div className="text-[12px] text-muted mt-2 font-mono">
                    {listing.location}
                  </div>
                </div>
                <p className="text-[14px] text-light leading-[1.7]">
                  {listing.type === "offer"
                    ? "By accepting this offer, you agree to the mutual aid exchange. The contributor will earn the listed credits upon verified completion."
                    : "By responding to this need, you commit to providing the requested assistance. You will earn the listed credits upon verified completion."}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleRespond(contactModal)}
                    className="flex-1 font-mono text-[12px] tracking-[2px] uppercase bg-green text-white py-3 border-none font-bold hover:bg-green/80 transition-colors"
                    style={{ borderRadius: 0 }}
                  >
                    {listing.type === "offer" ? "Accept Offer" : "I Can Help"}
                  </button>
                  <button
                    onClick={() => setContactModal(null)}
                    className="flex-1 font-mono text-[12px] tracking-[2px] uppercase bg-transparent text-muted py-3 border border-border hover:text-white hover:border-red transition-colors"
                    style={{ borderRadius: 0 }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            );
          })()}
      </Modal>
    </div>
  );
}
