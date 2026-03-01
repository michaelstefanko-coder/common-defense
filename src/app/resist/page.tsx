"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import resistOps from "@/data/resistance-ops.json";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useToast } from "@/components/Toast";

const campaignDetails: Record<string, { howItWorks: string; risks: string; howToJoin: string }> = {
  "op-001": {
    howItWorks: "Scouts attend job fair in advance. Protesters arrive in coordinated shifts: Q&A disruption, know-your-rights card distribution, banner drops. Coordinated exit within 20 minutes with social media amplification.",
    risks: "Arrest possible (trespassing charges). Police presence expected. Know your local laws before attending.",
    howToJoin: "Signal group: 'ICE Job Fair Network'. Next event: Austin TX, Feb 2026. Training session available.",
  },
  "op-002": {
    howItWorks: "Google/Meta ads from DHS and ICE are identified via ad libraries. Participants receive click instructions via encrypted channel. Coordinated clicking in shifts forces DHS to raise bid prices, depleting budget faster.",
    risks: "Minimal — ad clicking is protected activity. Use VPN. Don't post about it on public social media.",
    howToJoin: "Download VPN app (recommended: Proton VPN). Join encrypted group for daily click schedules. 5 minutes per day.",
  },
  "op-003": {
    howItWorks: "Mass opt-out from 14 data brokers (Clearview AI, Pipl, FastPeople, Spokeo, BeenVerified, and more) that feed Palantir and ICE. Campaign provides links + instructions. Estimated time: 45 minutes total.",
    risks: "None — opting out of data brokers is completely legal.",
    howToJoin: "Free, open resource. Download checklist. Post completion screenshot. Get your labor credit (4 points per person).",
  },
  "op-004": {
    howItWorks: "Map ICE contractors (GEO Group $750M, CoreCivic $620M, Palantir $1.2B). Shareholder campaigns, board member targeting, customer pressure, supply chain pressure.",
    risks: "Medium — contractors hire security. Training provided. Insurance available for authorized protests.",
    howToJoin: "Coordinator, shareholder, researcher, or pressure crew roles available. Monthly coordination calls.",
  },
  "op-005": {
    howItWorks: "Phase 1: Public awareness (billboards, #AmazonIce). Phase 2: Consumer pressure (Prime cancellations, Whole Foods boycott). Phase 3: Direct action (warehouse protests, employee organizing).",
    risks: "None for consumer action. Direct action at warehouses requires training.",
    howToJoin: "Cancel Prime, boycott Whole Foods, divest if shareholder. Launch: Feb 15, 2026.",
  },
  "op-006": {
    howItWorks: "Volunteers trained (3-hour course). Observer network organized by neighborhood with 24/7 coverage. When ICE spotted: alert sent within 60 seconds giving residents 5-10 minute warning.",
    risks: "Low — observation is protected activity. Legal team backs all observers.",
    howToJoin: "Complete training (3 hours, online). Get assigned to neighborhood. Active observers earn 12 labor credits/month.",
  },
  "op-007": {
    howItWorks: "Workplace slowdown (work-to-rule), service refusal (delivery drivers, security guards), consumer withdrawal, compliance refusal. Building toward May Day national general strike.",
    risks: "High — government retaliation likely. Legal support and strike fund available. Income protection for participants.",
    howToJoin: "Coordinator, organizer, participant, or support roles. Pledge to strike (type varies by person).",
  },
  "op-008": {
    howItWorks: "Municipal ordinances that prohibit city employees/contractors from partnering with ICE, allowing ICE access to city facilities, sharing records, or enforcing immigration detainers.",
    risks: "Low — working within the legal system. City council votes and public comment periods.",
    howToJoin: "In cities with ordinances: monitor enforcement. Without: lead campaign for passage (4-8 months typical).",
  },
  "op-009": {
    howItWorks: "Residents sign up in neighborhood groups (20-50 people). When ICE spotted: report to group WhatsApp. Automated bot relays to legal team, media, observers. Response time: <2 minutes.",
    risks: "Low — messaging is protected. Encrypted channels are legally privileged.",
    howToJoin: "Download Signal or WhatsApp. Complete legal training (1 hour). Get assigned to group.",
  },
  "op-010": {
    howItWorks: "Identify banks financing ICE contractors (CoreCivic, GEO Group) and surveillance companies (Palantir, Clearview AI). Coordinate mass account closures on Move-Your-Money Day. Direct transfers to credit unions and community banks. Modeled on 2011 Bank Transfer Day (650K+ accounts moved).",
    risks: "None — banks cannot penalize account closure. Completely legal consumer activity.",
    howToJoin: "Research your bank's ICE connections. Open credit union account. Close bank account on Move-Your-Money Day (Mar 2026). Share verification.",
  },
  "op-011": {
    howItWorks: "Platform auto-generates specific FOIA requests targeting ICE operations, surveillance contracts, and enforcement actions. Users review, sign, and submit. Responses tracked, published, and analyzed. Non-compliance documented for legal challenges (agencies must respond within 20 business days per 5 U.S.C. § 552).",
    risks: "None — FOIA requests are a fundamental legal right. Citizens have unlimited right to request documents.",
    howToJoin: "Select agency and topic. Platform generates your request (10-15 minutes). Submit and track. Earn 2 labor credits per submission.",
  },
  "op-012": {
    howItWorks: "Meet with institutional leadership (judges, hospital administrators, superintendents). Build internal coalitions. Develop model sanctuary policies prohibiting ICE enforcement on institutional property. Push for formal adoption through administrative proceedings and public pressure.",
    risks: "None for advocacy. Adopted policies may face legal challenges but have strong precedent (San Francisco, Oakland, Los Angeles, Austin, Cook County).",
    howToJoin: "Identify your target institution. Download template sanctuary policy. Build coalition with staff and community. Present to leadership.",
  },
  "op-013": {
    howItWorks: "Multi-channel distribution: door-to-door canvassing with trained volunteers, QR codes linking to video guides in 10+ languages, wallet-sized rights cards, posters for businesses and community centers. Visual designs for low-literacy accessibility. Audio guides for oral cultures.",
    risks: "None — know-your-rights education is fully protected speech.",
    howToJoin: "Download and print materials in your community's languages. Canvass your neighborhood. Place posters in willing businesses. Earn 3 labor credits per canvassing shift.",
  },
  "op-014": {
    howItWorks: "Weekly constitutional knowledge drops (2-3 minute reads/videos). Five modules: Constitutional Fundamentals, Immigration & Constitutional Authority, Historical Parallels (Dred Scott, Japanese Internment, COINTELPRO), Real-Time Violation Recognition, and 2028 Crisis Scenarios. Interactive quizzes and expert interviews.",
    risks: "None — civic education is fully protected.",
    howToJoin: "Enroll on platform. Complete weekly modules (5-15 min/week). Take quizzes. Join discussion forums. Certificate of completion available.",
  },
  "op-015": {
    howItWorks: "Five training modules: Poll Observation (rights by state, documentation standards), Vote Count Observation (physical vs. machine counting, chain of custody), Certification Process Monitoring (county and state procedures), Chain of Custody Documentation, and Rapid Legal Response. State-specific legal guides provided.",
    risks: "Low — poll observation is legal in all states (rules vary). Follow protocols and maintain nonpartisan stance.",
    howToJoin: "Complete online training (4-8 hours). Get certified. Register as observer in your jurisdiction. Deploy for 2026 midterms.",
  },
};

type StatusFilter = "all" | "ACTIVE" | "PLANNING";
type TacticFilter = string;

const allTactics = Array.from(
  new Set(resistOps.campaigns.flatMap((op) => op.tactics))
).sort();

export default function ResistPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [joined, setJoined] = useLocalStorage<string[]>("cd-joined-campaigns", []);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [tacticFilter, setTacticFilter] = useState<TacticFilter>("all");
  const [sortBy, setSortBy] = useState<"default" | "participants" | "impact">("default");
  const [mounted, setMounted] = useState(false);
  const toast = useToast();

  useEffect(() => setMounted(true), []);

  const handleJoin = (id: string) => {
    if (joined.includes(id)) return;
    setJoined((prev) => [...prev, id]);
    const campaign = resistOps.campaigns.find((c) => c.id === id);
    toast.addToast(`Joined: ${campaign?.name}. Welcome aboard.`, "success");
  };

  const filteredCampaigns = useMemo(() => {
    let campaigns = [...resistOps.campaigns];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      campaigns = campaigns.filter(
        (op) =>
          op.name.toLowerCase().includes(q) ||
          op.description.toLowerCase().includes(q)
      );
    }

    if (statusFilter !== "all") {
      campaigns = campaigns.filter((op) => op.status === statusFilter);
    }

    if (tacticFilter !== "all") {
      campaigns = campaigns.filter((op) => op.tactics.includes(tacticFilter));
    }

    if (sortBy === "participants") {
      campaigns.sort((a, b) => b.participants - a.participants);
    } else if (sortBy === "impact") {
      campaigns.sort((a, b) => b.impact - a.impact);
    }

    return campaigns;
  }, [searchQuery, statusFilter, tacticFilter, sortBy]);

  return (
    <div className="pt-[60px]">
      {/* HERO */}
      <section className="py-[80px] px-10 max-w-[1200px] mx-auto">
        <div className="font-heading text-[12px] text-muted mb-4">
          <Link href="/" className="text-muted no-underline hover:text-white hover:no-underline">Home</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-light">Resistance Toolkit</span>
        </div>
        <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
          Pillar IV
        </div>
        <h1 className="font-heading text-[48px] max-md:text-[32px] font-black text-white leading-[1.1] mb-6 uppercase">
          Resistance Toolkit
        </h1>
        <p className="text-[20px] text-light max-w-[700px] leading-[1.7]">
          Fifteen campaigns. Thousands of participants. Real impact. Pick a tactic. Join the fight.
        </p>
      </section>

      {/* SEARCH + FILTERS */}
      <section className="px-10 max-w-[1200px] mx-auto pb-4">
        <div className="flex gap-4 flex-wrap items-end">
          <div className="flex-1 min-w-[250px]">
            <label className="font-heading text-[10px] tracking-[2px] uppercase text-muted block mb-2">Search</label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search campaigns..."
              className="w-full py-3 px-4 bg-card border border-border text-white font-heading text-[14px] outline-none focus:border-red placeholder:text-muted transition-colors"
            />
          </div>
          <div>
            <label className="font-heading text-[10px] tracking-[2px] uppercase text-muted block mb-2">Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
              className="py-3 px-4 bg-card border border-border text-white font-heading text-[13px] outline-none focus:border-red cursor-pointer"
            >
              <option value="all">All Status</option>
              <option value="ACTIVE">Active</option>
              <option value="PLANNING">Planning</option>
            </select>
          </div>
          <div>
            <label className="font-heading text-[10px] tracking-[2px] uppercase text-muted block mb-2">Tactic</label>
            <select
              value={tacticFilter}
              onChange={(e) => setTacticFilter(e.target.value)}
              className="py-3 px-4 bg-card border border-border text-white font-heading text-[13px] outline-none focus:border-red cursor-pointer"
            >
              <option value="all">All Tactics</option>
              {allTactics.map((t) => (
                <option key={t} value={t}>{t.replace(/-/g, " ")}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="font-heading text-[10px] tracking-[2px] uppercase text-muted block mb-2">Sort</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="py-3 px-4 bg-card border border-border text-white font-heading text-[13px] outline-none focus:border-red cursor-pointer"
            >
              <option value="default">Default</option>
              <option value="participants">Most Participants</option>
              <option value="impact">Highest Impact</option>
            </select>
          </div>
        </div>
        <div className="font-heading text-[12px] text-muted mt-3">
          {filteredCampaigns.length} of {resistOps.campaigns.length} campaigns
          {mounted && joined.length > 0 && (
            <span className="text-green ml-3">You&apos;ve joined {joined.length}</span>
          )}
        </div>
      </section>

      {/* CAMPAIGN GRID */}
      <section className="py-[40px] px-10 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5">
          {filteredCampaigns.map((op) => {
            const details = campaignDetails[op.id];
            const isExpanded = expandedId === op.id;
            const isJoined = mounted && joined.includes(op.id);

            return (
              <div
                key={op.id}
                className="bg-card border border-border p-7 transition-all hover:border-red flex flex-col"
              >
                <div className={`font-heading text-[10px] tracking-[2px] uppercase mb-3 ${
                  op.status === "ACTIVE" ? "text-green" : "text-yellow"
                }`}>
                  &#9679; {op.status === "ACTIVE" ? "Active Campaign" : "Planning Phase"}
                </div>
                <div className="font-heading text-[16px] font-bold text-white mb-2">
                  {op.name}
                </div>
                <div className="text-[14px] text-muted leading-relaxed mb-4">
                  {op.description}
                </div>

                <div className="flex gap-4 font-heading text-[12px] text-light mb-3">
                  <span><strong className="text-white">{op.participants.toLocaleString()}</strong> participants</span>
                  <span><strong className="text-white">{op.impact}%</strong> impact</span>
                </div>

                <div className="flex gap-1.5 flex-wrap mb-4">
                  {op.tactics.map((tactic) => (
                    <span
                      key={tactic}
                      className="font-heading text-[9px] tracking-[1px] uppercase py-1 px-2 bg-border/50 text-muted"
                    >
                      {tactic.replace(/-/g, " ")}
                    </span>
                  ))}
                </div>

                <div className="mb-4">
                  <div className="h-1 bg-border w-full">
                    <div
                      className={`h-full transition-all duration-1000 ${
                        op.status === "ACTIVE" ? "bg-green" : "bg-yellow"
                      }`}
                      style={{ width: `${op.impact}%` }}
                    />
                  </div>
                </div>

                {isExpanded && details && (
                  <div className="border-t border-border pt-4 mt-2 space-y-3 text-[13px] text-light leading-relaxed">
                    <div>
                      <div className="font-heading text-[10px] tracking-[1px] uppercase text-red mb-1">How it works</div>
                      <p>{details.howItWorks}</p>
                    </div>
                    <div>
                      <div className="font-heading text-[10px] tracking-[1px] uppercase text-yellow mb-1">Risks</div>
                      <p>{details.risks}</p>
                    </div>
                    <div>
                      <div className="font-heading text-[10px] tracking-[1px] uppercase text-green mb-1">How to join</div>
                      <p>{details.howToJoin}</p>
                    </div>
                    <div className="font-heading text-[10px] tracking-[1px] uppercase text-muted mt-2">
                      Next: {op.nextEvent}
                    </div>
                  </div>
                )}

                <div className="mt-auto pt-4 flex gap-2">
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : op.id)}
                    className="font-heading text-[11px] tracking-[1px] uppercase py-2.5 px-5 bg-transparent border border-border text-light cursor-pointer hover:border-red hover:text-white transition-all flex-1"
                  >
                    {isExpanded ? "Less" : "Learn More"}
                  </button>
                  <button
                    onClick={() => handleJoin(op.id)}
                    disabled={isJoined}
                    className={`font-heading text-[11px] tracking-[1px] uppercase py-2.5 px-5 border-none cursor-pointer font-bold transition-all flex-1 ${
                      isJoined
                        ? "bg-green text-white"
                        : "bg-red text-white hover:bg-red-light"
                    }`}
                  >
                    {isJoined ? "\u2713 You're In" : "Join"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCampaigns.length === 0 && (
          <div className="text-center text-muted mt-10 font-heading text-[14px] py-20">
            No campaigns match your search. Try different filters.
          </div>
        )}
      </section>

      {/* CAMPAIGN TABLE */}
      <section className="py-[60px] px-10 max-w-[1200px] mx-auto">
        <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-6">
          Campaign Overview
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left font-heading text-[11px] tracking-[2px] uppercase text-muted py-3 px-4">Campaign</th>
                <th className="text-left font-heading text-[11px] tracking-[2px] uppercase text-muted py-3 px-4">Status</th>
                <th className="text-right font-heading text-[11px] tracking-[2px] uppercase text-muted py-3 px-4">Participants</th>
                <th className="text-right font-heading text-[11px] tracking-[2px] uppercase text-muted py-3 px-4">Impact</th>
                <th className="text-center font-heading text-[11px] tracking-[2px] uppercase text-muted py-3 px-4">Joined</th>
              </tr>
            </thead>
            <tbody>
              {resistOps.campaigns.map((op) => (
                <tr key={op.id} className="border-b border-border hover:bg-card/50">
                  <td className="font-heading text-[13px] text-white py-3 px-4 font-bold">{op.name}</td>
                  <td className={`font-heading text-[11px] tracking-[1px] uppercase py-3 px-4 ${
                    op.status === "ACTIVE" ? "text-green" : "text-yellow"
                  }`}>
                    {op.status}
                  </td>
                  <td className="font-heading text-[13px] text-light py-3 px-4 text-right">{op.participants.toLocaleString()}</td>
                  <td className="font-heading text-[13px] text-light py-3 px-4 text-right">{op.impact}%</td>
                  <td className="text-center py-3 px-4">
                    {mounted && joined.includes(op.id) && <span className="text-green">&#10003;</span>}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-red">
                <td className="font-heading text-[13px] text-white py-3 px-4 font-bold">Total</td>
                <td className="py-3 px-4"></td>
                <td className="font-heading text-[13px] text-white py-3 px-4 text-right font-bold">
                  {resistOps.campaigns.reduce((sum, op) => sum + op.participants, 0).toLocaleString()}
                </td>
                <td className="font-heading text-[13px] text-white py-3 px-4 text-right font-bold">
                  {Math.round(resistOps.campaigns.reduce((sum, op) => sum + op.impact, 0) / resistOps.campaigns.length)}% avg
                </td>
                <td className="text-center py-3 px-4">
                  <span className="font-heading text-[11px] text-green">{mounted ? joined.length : 0}</span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* EDUCATIONAL SIDEBARS */}
      <section className="py-[60px] px-10 max-w-[1200px] mx-auto border-t border-border">
        <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-6">
          Learn More
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5">
          {[
            { title: "What is Direct Action?", desc: "Coordinated protest, disruption, or civil disobedience to achieve political goals. Examples: Job fair disruption, ad inflation. Mostly protected, some risks.", legal: "Mostly protected" },
            { title: "What is Data Defense?", desc: "Privacy hardening, data minimization, opt-outs. Examples: Broker opt-outs, algorithm feedback loops. 100% legal.", legal: "100% legal" },
            { title: "What is Mutual Aid?", desc: "Reciprocal support networks (not charity). Examples: Contractor alternatives, supply chain networks. 100% legal.", legal: "100% legal" },
            { title: "What is Non-Cooperation?", desc: "Withdrawal of labor, services, compliance. Examples: Workplace slowdowns, service refusal, strike funds. Protected by law.", legal: "Protected by law" },
            { title: "What is Economic Pressure?", desc: "Consumer boycotts, bank divestment, shareholder campaigns. Examples: Prime cancellation, account closures, bond market pressure. Fully protected.", legal: "Fully protected" },
            { title: "What is Democratic Defense?", desc: "Constitutional literacy, election monitoring, continuity of government planning. Examples: Observer training, FOIA requests, crisis scenario preparation. 100% legal.", legal: "100% legal" },
          ].map((item, i) => (
            <div key={i} className="bg-card border border-border p-7">
              <div className="font-heading text-[16px] font-bold text-white mb-3">{item.title}</div>
              <p className="text-[14px] text-muted leading-relaxed mb-3">{item.desc}</p>
              <span className="font-heading text-[10px] tracking-[1px] uppercase text-green">
                Legal status: {item.legal}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* JOIN CTA */}
      <div className="bg-dark border-t border-b border-border py-20 px-10 text-center">
        <h2 className="font-heading text-[32px] max-md:text-[24px] font-black text-white mb-4">
          Pick Your Campaign
        </h2>
        <p className="text-[16px] text-light max-w-[600px] mx-auto mb-8">
          All campaigns are volunteer-run, open to everyone, and legally protected. Choose your level of involvement.
        </p>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5 max-w-[900px] mx-auto">
          <div className="bg-card border border-border p-6 text-center">
            <div className="font-heading text-[14px] font-bold text-white mb-2">I want to learn more</div>
            <p className="text-[13px] text-muted mb-4">Email signup for campaign newsletter. 1 email per week. No commitment.</p>
            <button
              onClick={() => {
                const el = document.getElementById("newsletter");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-heading text-[11px] tracking-[1px] uppercase py-2.5 px-5 bg-transparent border border-border text-light cursor-pointer hover:border-red hover:text-white transition-all w-full"
            >
              Subscribe
            </button>
          </div>
          <div className="bg-card border border-red p-6 text-center">
            <div className="font-heading text-[14px] font-bold text-white mb-2">I&apos;m ready to join</div>
            <p className="text-[13px] text-muted mb-4">Campaign selection, onboarding group, assigned to team.</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-heading text-[11px] tracking-[1px] uppercase py-2.5 px-5 bg-red text-white border-none cursor-pointer font-bold hover:bg-red-light transition-all w-full"
            >
              I&apos;m In
            </button>
          </div>
          <div className="bg-card border border-border p-6 text-center">
            <div className="font-heading text-[14px] font-bold text-white mb-2">I want to lead</div>
            <p className="text-[13px] text-muted mb-4">Coordinator application, leadership training, launch team in your region.</p>
            <Link
              href="/mission#pledge"
              className="font-heading text-[11px] tracking-[1px] uppercase py-2.5 px-5 bg-transparent border border-border text-light cursor-pointer hover:border-red hover:text-white transition-all w-full block no-underline hover:no-underline text-center"
            >
              Apply
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
