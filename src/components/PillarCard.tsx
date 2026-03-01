"use client";

import { useState } from "react";
import Modal from "./Modal";

interface PillarData {
  num: string;
  label: string;
  title: string;
  description: string;
  modalContent: React.ReactNode;
  span2?: boolean;
}

const pillars: PillarData[] = [
  {
    num: "01",
    label: "Pillar I",
    title: "National Strike Apparatus",
    description: "Pre-planned, pre-funded general strike infrastructure. Shared doctrine, centralized resources, distributed local execution. Activated if the 2028 presidential transition is subverted.",
    modalContent: (
      <>
        <p>A pre-planned, pre-funded, nationally coordinated general strike to be activated if the 2028 presidential transition is subverted — whether through refusal to leave office, illegitimate transfer of power, or any unconstitutional circumvention of election results.</p>
        <p><strong className="text-text">Strike Fund:</strong> A transparent mutual aid fund that workers pay into before the crisis. During a strike, it distributes based on documented need — rent, food, medicine, utilities.</p>
        <p><strong className="text-text">Local Coordinators:</strong> Recruited, vetted, and trained organizers in every major metro and congressional district, running a shared playbook with clear chains of communication.</p>
        <p><strong className="text-text">Escalation Protocol:</strong> Pre-planned phases from economic slowdown to full general strike, with specific constitutional violations as triggers and specific off-ramps tied to restoration of constitutional order.</p>
      </>
    ),
  },
  {
    num: "02",
    label: "Pillar II",
    title: "Mutual Aid Network",
    description: "Real-time needs-and-skills matching. Post what you have, post what you need. Runs year-round for community resilience. Scales to full mobilization.",
    modalContent: (
      <>
        <p>A strike only works if people can survive it. Minneapolis proved this: what sustained tens of thousands of people in the streets was not ideology but logistics — the food, the first aid, the childcare, the housing.</p>
        <p>The marketplace matches needs with offers locally. Contributions earn labor credits — one hour of work equals one credit. Credits are non-speculative, non-transferable outside the network, and verified on-chain.</p>
        <p>In normal times, this builds community resilience. During mobilization, it keeps a national strike fed, housed, and alive.</p>
      </>
    ),
  },
  {
    num: "03",
    label: "Pillar III",
    title: "Citizens United Pledge",
    description: "A public, name-on-it commitment to only vote for candidates who reject Citizens United. Candidate scorecards. Social accountability. Lincoln's model.",
    modalContent: (
      <>
        <p>When the Supreme Court ruled in Dred Scott that Black Americans could never be citizens, Lincoln did not accept it as settled law. He organized. He ran. He won. And the decision was overturned.</p>
        <p>Citizens United is our Dred Scott. The pledge is a public, enforceable commitment: I will only vote for a presidential candidate who commits to ignoring Citizens United and actively pursuing its reversal.</p>
        <p>Every signer&apos;s name is public. Candidate scorecards track positions. Automated reminders before every election. Social accountability, not anonymous petitioning.</p>
      </>
    ),
  },
  {
    num: "04",
    label: "Pillar IV",
    title: "Resistance Toolkit",
    description: "Creative, nonviolent tactics. ICE recruitment disruption. Ad-cost inflation. Verified data opt-outs. Automated boycott infrastructure.",
    modalContent: (
      <>
        <p><strong className="text-text">ICE Job Fair Disruption:</strong> Coordinated, high-visibility protests at recruitment events with legal observers and media strategy.</p>
        <p><strong className="text-text">Ad-Cost Inflation:</strong> Train your algorithm to surface DHS/ICE recruitment ads, then click every one. Drain their digital budget through their own systems.</p>
        <p><strong className="text-text">Data Opt-Out Blitz:</strong> Verified opt-outs from brokers confirmed to feed Palantir and ICE. Not aspirational — verified against ACLU and EFF findings.</p>
        <p><strong className="text-text">Contractor Boycott:</strong> Map every company contracting with unconstitutional enforcement. Provide alternatives. Coordinate consumer shifts at scale.</p>
      </>
    ),
  },
  {
    num: "05",
    label: "Pillar V",
    title: "Resilient Communications",
    description: "End-to-end encrypted coordination via Signal. Mesh networking readiness. Privacy hardening. Dead man's switch publishing. No single point of failure.",
    span2: true,
    modalContent: (
      <>
        <p><strong className="text-text">Signal Integration:</strong> End-to-end encrypted coordination. Separate channels for local chapters, regional coordinators, and national leadership.</p>
        <p><strong className="text-text">Mesh Networking:</strong> Briar, Meshtastic, goTenna — distributed and practiced now so that if cell networks are disrupted during a 2028 mobilization, organizers do not go dark.</p>
        <p><strong className="text-text">Privacy Hardening:</strong> Interactive tool walking every participant through securing their devices against government surveillance.</p>
        <p><strong className="text-text">Dead Man&apos;s Switch:</strong> If key organizers are arrested or silenced, pre-written communications and action plans automatically distribute. No single point of failure.</p>
      </>
    ),
  },
];

export default function PillarCards() {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 mt-12">
        {pillars.map((pillar, i) => (
          <div
            key={i}
            onClick={() => setActiveModal(i)}
            className={`bg-card border border-border p-9 cursor-pointer relative overflow-hidden transition-all hover:border-red hover:translate-y-[-2px] group ${
              pillar.span2 ? "col-span-2 max-md:col-span-1" : ""
            }`}
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-red opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="font-heading text-[48px] font-black text-border absolute top-4 right-6">
              {pillar.num}
            </div>
            <div className="font-heading text-[18px] font-bold text-white mb-3 uppercase tracking-[1px]">
              {pillar.title}
            </div>
            <div className="text-[15px] text-light leading-[1.7]">
              {pillar.description}
            </div>
          </div>
        ))}
      </div>

      {pillars.map((pillar, i) => (
        <Modal
          key={i}
          isOpen={activeModal === i}
          onClose={() => setActiveModal(null)}
          label={pillar.label}
          title={pillar.title}
        >
          {pillar.modalContent}
        </Modal>
      ))}
    </>
  );
}
