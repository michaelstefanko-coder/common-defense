"use client";

import { useState } from "react";
import aidData from "@/data/aid-listings.json";

type FilterType = "all" | "offer" | "need";
type Category = "All" | "Food" | "Housing" | "Medical" | "Transport" | "Legal";

export default function AidMarketplace() {
  const [typeFilter, setTypeFilter] = useState<FilterType>("all");
  const [categoryFilter, setCategoryFilter] = useState<Category>("All");

  const listings = aidData.listings.filter((item) => {
    const typeMatch = typeFilter === "all" || item.type === typeFilter;
    const catMatch = categoryFilter === "All" || item.category === categoryFilter;
    return typeMatch && catMatch;
  });

  const tabs: { label: string; value: FilterType | Category }[] = [
    { label: "All", value: "all" },
    { label: "Offers", value: "offer" },
    { label: "Needs", value: "need" },
  ];

  const categories: Category[] = ["All", "Food", "Housing", "Medical", "Transport", "Legal"];

  const activeTab = typeFilter;

  return (
    <section className="py-[100px] px-10 max-w-[1200px] mx-auto" id="aid">
      <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
        Pillar II — Mutual Aid
      </div>
      <div className="font-heading text-[40px] max-md:text-[28px] font-black text-white leading-[1.15] mb-6">
        The Marketplace
      </div>
      <div className="text-[18px] text-light max-w-[700px] leading-[1.8]">
        Post what you have. Post what you need. The system matches locally. Contributions earn credits. A strike only works if people can survive it.
      </div>

      <div className="flex gap-0 mt-10 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setTypeFilter(tab.value as FilterType)}
            className={`font-heading text-[12px] tracking-[2px] uppercase py-3.5 px-7 bg-transparent border-none cursor-pointer border-b-2 transition-all ${
              activeTab === tab.value
                ? "text-white border-b-red"
                : "text-muted border-b-transparent hover:text-light"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex gap-2 mt-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={`font-heading text-[11px] tracking-[1px] uppercase py-2 px-4 border cursor-pointer transition-all ${
              categoryFilter === cat
                ? "bg-red border-red text-white"
                : "bg-transparent border-border text-muted hover:text-light hover:border-light"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5 mt-10">
        {listings.map((item) => (
          <div
            key={item.id}
            className={`bg-card border border-border p-6 transition-colors ${
              item.type === "offer" ? "hover:border-green" : "hover:border-red"
            }`}
          >
            <span
              className={`font-heading text-[10px] tracking-[2px] uppercase py-1 px-2.5 inline-block mb-3 ${
                item.type === "offer"
                  ? "bg-green/15 text-green"
                  : "bg-red/15 text-red"
              }`}
            >
              {item.type === "offer" ? "Offering" : "Needed"}
            </span>
            <div className="font-heading text-[15px] font-bold text-white mb-2">
              {item.title}
            </div>
            <div className="text-[13px] text-muted">
              {item.description}
            </div>
            <div className="font-heading text-[14px] font-bold text-white mt-3">
              <span className={item.type === "offer" ? "text-green" : "text-red"}>
                {item.type === "offer" ? `+${item.credits}` : item.credits}
              </span>{" "}
              credits
            </div>
            <div className="text-[12px] text-muted mt-1">
              {item.location}
            </div>
          </div>
        ))}
      </div>

      {listings.length === 0 && (
        <div className="text-center text-muted mt-10 font-heading text-[14px]">
          No listings match your filters.
        </div>
      )}

      <button className="font-heading text-[13px] tracking-[2px] uppercase bg-red text-white px-10 py-4 border-none cursor-pointer font-bold hover:bg-red-light transition-all mt-6">
        Post to Marketplace
      </button>
    </section>
  );
}
