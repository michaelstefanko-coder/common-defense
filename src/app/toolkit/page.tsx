"use client";

import { useState } from "react";
import FoiaGenerator from "@/components/FoiaGenerator";
import DataBrokerOptOut from "@/components/DataBrokerOptOut";
import PrivacyWizard from "@/components/PrivacyWizard";
import CreditsDashboard from "@/components/CreditsDashboard";
import OrganizerElection from "@/components/OrganizerElection";

const tabs = [
  {
    id: "foia",
    label: "FOIA Generator",
    shortLabel: "FOIA",
    description: "File transparency requests against government agencies",
    icon: "\u{1F4C4}",
  },
  {
    id: "optout",
    label: "Data Broker Opt-Out",
    shortLabel: "Opt-Out",
    description: "Remove yourself from 14 surveillance data brokers",
    icon: "\u{1F6E1}\uFE0F",
  },
  {
    id: "privacy",
    label: "Privacy Wizard",
    shortLabel: "Privacy",
    description: "Step-by-step security hardening for your devices",
    icon: "\u{1F512}",
  },
  {
    id: "credits",
    label: "Credits Dashboard",
    shortLabel: "Credits",
    description: "Track your labor credits and log volunteer work",
    icon: "\u{1F4B1}",
  },
  {
    id: "election",
    label: "Organizer Election",
    shortLabel: "Vote",
    description: "Cast your vote for chapter organizer",
    icon: "\u{1F5F3}\uFE0F",
  },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function ToolkitPage() {
  const [activeTab, setActiveTab] = useState<TabId>("foia");

  return (
    <div className="pt-[60px] min-h-screen bg-black">
      {/* HERO */}
      <section className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-10 max-md:px-5 py-16 max-md:py-10">
          <div className="font-mono text-[10px] tracking-[4px] uppercase text-red mb-4">
            {"// "}Action Infrastructure
          </div>
          <h1 className="font-heading text-[48px] max-md:text-[32px] font-black text-white leading-[1.05] uppercase">
            Toolkit
          </h1>
          <p className="text-[17px] text-light max-w-[600px] leading-[1.7] mt-4">
            Five tools built for direct action. File FOIA requests, scrub your
            data from surveillance brokers, harden your privacy, track your
            labor credits, and vote for chapter leadership.
          </p>
        </div>
      </section>

      {/* TAB NAVIGATION */}
      <div className="border-b border-border sticky top-[60px] bg-black z-20">
        <div className="max-w-[1200px] mx-auto px-10 max-md:px-3">
          <div className="flex gap-0 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap font-mono text-[11px] max-md:text-[10px] tracking-[1px] uppercase py-4 px-5 max-md:px-3 bg-transparent border-none border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "text-white border-b-red"
                    : "text-muted border-b-transparent hover:text-light"
                }`}
              >
                <span className="mr-1.5 max-md:hidden">{tab.icon}</span>
                <span className="hidden max-md:inline">{tab.shortLabel}</span>
                <span className="max-md:hidden">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* TOOL CONTENT */}
      <div>
        {activeTab === "foia" && <FoiaGenerator />}
        {activeTab === "optout" && <DataBrokerOptOut />}
        {activeTab === "privacy" && <PrivacyWizard />}
        {activeTab === "credits" && <CreditsDashboard />}
        {activeTab === "election" && <OrganizerElection />}
      </div>
    </div>
  );
}
