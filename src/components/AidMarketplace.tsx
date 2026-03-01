"use client";

import { useState, useEffect } from "react";
import aidData from "@/data/aid-listings.json";
import Modal from "./Modal";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useToast } from "./Toast";

type FilterType = "all" | "offer" | "need";
type Category = "All" | "Food" | "Housing" | "Medical" | "Transport" | "Legal";

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
}

interface NewListing {
  type: "offer" | "need";
  category: string;
  title: string;
  description: string;
  location: string;
  credits: string;
  contactName: string;
}

const emptyListing: NewListing = {
  type: "offer",
  category: "Food",
  title: "",
  description: "",
  location: "",
  credits: "1",
  contactName: "",
};

export default function AidMarketplace() {
  const [typeFilter, setTypeFilter] = useState<FilterType>("all");
  const [categoryFilter, setCategoryFilter] = useState<Category>("All");
  const [showPostModal, setShowPostModal] = useState(false);
  const [contactModal, setContactModal] = useState<string | null>(null);
  const [newListing, setNewListing] = useState<NewListing>(emptyListing);
  const [userListings, setUserListings] = useLocalStorage<AidListing[]>("cd-aid-listings", []);
  const [responded, setResponded] = useLocalStorage<string[]>("cd-aid-responded", []);
  const [mounted, setMounted] = useState(false);
  const toast = useToast();

  useEffect(() => setMounted(true), []);

  const allListings: AidListing[] = [...(aidData.listings as AidListing[]), ...(mounted ? userListings : [])];

  const listings = allListings.filter((item) => {
    const typeMatch = typeFilter === "all" || item.type === typeFilter;
    const catMatch = categoryFilter === "All" || item.category === categoryFilter;
    return typeMatch && catMatch;
  });

  const tabs: { label: string; value: FilterType }[] = [
    { label: "All", value: "all" },
    { label: "Offers", value: "offer" },
    { label: "Needs", value: "need" },
  ];

  const categories: Category[] = ["All", "Food", "Housing", "Medical", "Transport", "Legal"];

  const handlePost = () => {
    if (!newListing.title.trim() || !newListing.description.trim() || !newListing.contactName.trim()) return;
    const listing = {
      id: `user-${Date.now()}`,
      type: newListing.type,
      category: newListing.category,
      title: newListing.title.trim(),
      description: newListing.description.trim(),
      location: newListing.location.trim() || "Location not specified",
      credits: parseInt(newListing.credits) || 1,
      offeredBy: newListing.contactName.trim(),
      neededBy: newListing.contactName.trim(),
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
    toast.addToast("Response sent. The listing owner will be notified.", "success");
  };

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
            onClick={() => setTypeFilter(tab.value)}
            className={`font-heading text-[12px] tracking-[2px] uppercase py-3.5 px-7 bg-transparent border-none cursor-pointer border-b-2 transition-all ${
              typeFilter === tab.value
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
            className={`bg-card border border-border p-6 transition-colors flex flex-col ${
              item.type === "offer" ? "hover:border-green" : "hover:border-red"
            }`}
          >
            <span
              className={`font-heading text-[10px] tracking-[2px] uppercase py-1 px-2.5 inline-block mb-3 self-start ${
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
            <button
              onClick={() => setContactModal(item.id)}
              disabled={responded.includes(item.id)}
              className={`mt-4 font-heading text-[11px] tracking-[1px] uppercase py-2.5 px-5 border-none cursor-pointer font-bold transition-all w-full ${
                responded.includes(item.id)
                  ? "bg-green/20 text-green cursor-default"
                  : item.type === "offer"
                  ? "bg-green/10 text-green border border-green/30 hover:bg-green/20"
                  : "bg-red/10 text-red border border-red/30 hover:bg-red/20"
              }`}
            >
              {responded.includes(item.id) ? "\u2713 Response Sent" : item.type === "offer" ? "Accept Offer" : "I Can Help"}
            </button>
          </div>
        ))}
      </div>

      {listings.length === 0 && (
        <div className="text-center text-muted mt-10 font-heading text-[14px]">
          No listings match your filters.
        </div>
      )}

      <button
        onClick={() => setShowPostModal(true)}
        className="font-heading text-[13px] tracking-[2px] uppercase bg-red text-white px-10 py-4 border-none cursor-pointer font-bold hover:bg-red-light transition-all mt-6"
      >
        Post to Marketplace
      </button>

      {/* Post to Marketplace Modal */}
      <Modal
        isOpen={showPostModal}
        onClose={() => setShowPostModal(false)}
        label="Mutual Aid"
        title="Post a Listing"
      >
        <div className="space-y-5">
          <div>
            <label className="font-heading text-[11px] tracking-[2px] uppercase text-muted block mb-2">Type</label>
            <div className="flex gap-3">
              <button
                onClick={() => setNewListing({ ...newListing, type: "offer" })}
                className={`flex-1 py-3 font-heading text-[12px] tracking-[1px] uppercase border cursor-pointer transition-all ${
                  newListing.type === "offer" ? "bg-green/10 border-green text-green" : "bg-transparent border-border text-muted"
                }`}
              >
                I&apos;m Offering
              </button>
              <button
                onClick={() => setNewListing({ ...newListing, type: "need" })}
                className={`flex-1 py-3 font-heading text-[12px] tracking-[1px] uppercase border cursor-pointer transition-all ${
                  newListing.type === "need" ? "bg-red/10 border-red text-red" : "bg-transparent border-border text-muted"
                }`}
              >
                I Need
              </button>
            </div>
          </div>

          <div>
            <label className="font-heading text-[11px] tracking-[2px] uppercase text-muted block mb-2">Category</label>
            <div className="flex gap-2 flex-wrap">
              {["Food", "Housing", "Medical", "Transport", "Legal"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setNewListing({ ...newListing, category: cat })}
                  className={`py-2 px-4 font-heading text-[11px] tracking-[1px] uppercase border cursor-pointer transition-all ${
                    newListing.category === cat ? "bg-red border-red text-white" : "bg-transparent border-border text-muted"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="font-heading text-[11px] tracking-[2px] uppercase text-muted block mb-2">Your Name</label>
            <input
              type="text"
              value={newListing.contactName}
              onChange={(e) => setNewListing({ ...newListing, contactName: e.target.value })}
              placeholder="Your name or organization"
              className="w-full py-3 px-4 bg-card border border-border text-white font-heading text-[14px] outline-none focus:border-red placeholder:text-muted"
            />
          </div>

          <div>
            <label className="font-heading text-[11px] tracking-[2px] uppercase text-muted block mb-2">Title</label>
            <input
              type="text"
              value={newListing.title}
              onChange={(e) => setNewListing({ ...newListing, title: e.target.value })}
              placeholder="What are you offering or what do you need?"
              className="w-full py-3 px-4 bg-card border border-border text-white font-heading text-[14px] outline-none focus:border-red placeholder:text-muted"
            />
          </div>

          <div>
            <label className="font-heading text-[11px] tracking-[2px] uppercase text-muted block mb-2">Description</label>
            <textarea
              value={newListing.description}
              onChange={(e) => setNewListing({ ...newListing, description: e.target.value })}
              placeholder="Details, timing, availability..."
              rows={3}
              className="w-full py-3 px-4 bg-card border border-border text-white font-heading text-[14px] outline-none focus:border-red placeholder:text-muted resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-heading text-[11px] tracking-[2px] uppercase text-muted block mb-2">Location</label>
              <input
                type="text"
                value={newListing.location}
                onChange={(e) => setNewListing({ ...newListing, location: e.target.value })}
                placeholder="City, neighborhood"
                className="w-full py-3 px-4 bg-card border border-border text-white font-heading text-[14px] outline-none focus:border-red placeholder:text-muted"
              />
            </div>
            <div>
              <label className="font-heading text-[11px] tracking-[2px] uppercase text-muted block mb-2">Credits</label>
              <input
                type="number"
                min="0"
                max="20"
                value={newListing.credits}
                onChange={(e) => setNewListing({ ...newListing, credits: e.target.value })}
                className="w-full py-3 px-4 bg-card border border-border text-white font-heading text-[14px] outline-none focus:border-red"
              />
            </div>
          </div>

          <button
            onClick={handlePost}
            disabled={!newListing.title.trim() || !newListing.description.trim() || !newListing.contactName.trim()}
            className="font-heading text-[13px] tracking-[2px] uppercase bg-red text-white px-10 py-4 border-none cursor-pointer font-bold hover:bg-red-light transition-all w-full disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            Post Listing
          </button>
        </div>
      </Modal>

      {/* Respond to Listing Modal */}
      <Modal
        isOpen={!!contactModal}
        onClose={() => setContactModal(null)}
        label="Mutual Aid"
        title="Respond to Listing"
      >
        {contactModal && (() => {
          const listing = allListings.find((l) => l.id === contactModal);
          if (!listing) return null;
          return (
            <div className="space-y-4">
              <div className="bg-card border border-border p-4">
                <span className={`font-heading text-[10px] tracking-[2px] uppercase ${listing.type === "offer" ? "text-green" : "text-red"}`}>
                  {listing.type === "offer" ? "Offering" : "Needed"}
                </span>
                <div className="font-heading text-[15px] font-bold text-white mt-2">{listing.title}</div>
                <div className="text-[13px] text-muted mt-1">{listing.description}</div>
                <div className="text-[12px] text-muted mt-2">{listing.location}</div>
              </div>
              <p className="text-[14px] text-light">
                {listing.type === "offer"
                  ? "By accepting this offer, you agree to the mutual aid exchange. The contributor will earn the listed credits upon verified completion."
                  : "By responding to this need, you commit to providing the requested assistance. You will earn the listed credits upon verified completion."
                }
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => handleRespond(contactModal)}
                  className="flex-1 font-heading text-[12px] tracking-[2px] uppercase bg-green text-white py-3 border-none cursor-pointer font-bold hover:bg-green/80 transition-all"
                >
                  {listing.type === "offer" ? "Accept Offer" : "I Can Help"}
                </button>
                <button
                  onClick={() => setContactModal(null)}
                  className="flex-1 font-heading text-[12px] tracking-[2px] uppercase bg-transparent text-muted py-3 border border-border cursor-pointer hover:text-white hover:border-red transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          );
        })()}
      </Modal>
    </section>
  );
}
