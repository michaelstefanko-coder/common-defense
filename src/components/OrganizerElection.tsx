"use client";

import { useState, useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useToast } from "./Toast";

interface Candidate {
  id: string;
  name: string;
  credits: number;
  months: number;
  endorsements: number;
  bio: string;
}

const candidates: Candidate[] = [
  {
    id: "cand1",
    name: "Maria Santos",
    credits: 142,
    months: 8,
    endorsements: 3,
    bio: "Organizer with SEIU Local 26. Led food distribution during January actions. Fluent in Spanish and English. Proposed expanding mutual aid to include emergency housing network.",
  },
  {
    id: "cand2",
    name: "James Adler",
    credits: 98,
    months: 6,
    endorsements: 5,
    bio: "Former teacher, current legal observer coordinator. Built the chapter's mesh networking capability. Running on platform of communications security and rapid-response legal defense.",
  },
];

export default function OrganizerElection() {
  const [votedFor, setVotedFor] = useLocalStorage<string | null>("cd-vote", null);
  const [mounted, setMounted] = useState(false);
  const toast = useToast();

  useEffect(() => setMounted(true), []);

  const castVote = (candidateId: string) => {
    if (votedFor) return;
    setVotedFor(candidateId);
    const candidate = candidates.find((c) => c.id === candidateId);
    toast.addToast(`Vote cast for ${candidate?.name}. zk-proof generated.`, "success");
  };

  return (
    <div className="bg-dark border-t border-b border-border" id="vote">
      <section className="py-[100px] px-10 max-w-[1200px] mx-auto">
        <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
          Democratic Structure
        </div>
        <div className="font-heading text-[40px] max-md:text-[28px] font-black text-white leading-[1.15] mb-6">
          Elect Your Organizers.<br />Verify the Math.
        </div>
        <div className="text-[18px] text-light max-w-[700px] leading-[1.8]">
          Every organizer is elected by their local chapter through cryptographically verified, publicly auditable, privately cast votes. No phony electors. No backroom deals. The math proves the result.
        </div>

        <div className="mt-8 font-heading">
          <span className="text-[11px] tracking-[2px] uppercase text-muted">Active Election</span>
          <span className="text-[11px] tracking-[2px] uppercase text-green ml-3">&#9679; Open — 3 days remaining</span>
        </div>
        <div className="font-heading text-[16px] text-white font-bold mt-2">
          Minneapolis Chapter — Local Organizer
          <span className="inline-block bg-green/15 text-green font-heading text-[10px] tracking-[1px] py-0.5 px-2 uppercase ml-2 align-middle">
            zk-verified
          </span>
        </div>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10 mt-10">
          {candidates.map((cand) => {
            const isVoted = mounted && votedFor === cand.id;
            const hasVoted = mounted && !!votedFor;

            return (
              <div
                key={cand.id}
                className={`bg-card border p-7 relative transition-all ${
                  isVoted
                    ? "border-green bg-green/5"
                    : hasVoted
                    ? "border-border opacity-60"
                    : "border-border hover:border-blue cursor-pointer"
                }`}
              >
                <div className="font-heading text-[20px] font-bold text-white">{cand.name}</div>
                <div className="font-heading text-[11px] tracking-[2px] uppercase text-muted mt-0.5">
                  Candidate for Local Organizer
                </div>
                <div className="flex gap-5 mt-4">
                  <div className="font-heading text-[12px] text-light">
                    <strong className="text-white">{cand.credits}</strong> credits earned
                  </div>
                  <div className="font-heading text-[12px] text-light">
                    <strong className="text-white">{cand.months}</strong> months active
                  </div>
                  <div className="font-heading text-[12px] text-light">
                    <strong className="text-white">{cand.endorsements}</strong> endorsements
                  </div>
                </div>
                <div className="text-[14px] text-light mt-3 leading-relaxed">{cand.bio}</div>
                <button
                  onClick={() => castVote(cand.id)}
                  disabled={hasVoted}
                  className={`mt-4 font-heading text-[12px] tracking-[2px] uppercase py-3 px-7 border-none cursor-pointer font-bold transition-all w-full ${
                    isVoted
                      ? "bg-green text-white"
                      : hasVoted
                      ? "bg-blue/30 text-white/30 cursor-not-allowed"
                      : "bg-blue text-white hover:bg-blue/80"
                  }`}
                >
                  {isVoted ? "\u2713 Vote Cast — zk-proof generated" : "Cast Vote"}
                </button>
              </div>
            );
          })}
        </div>

        <div
          className="font-mono text-[11px] text-muted border border-border p-3 px-4 mt-6 break-all"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <strong className="text-light">Election Contract:</strong> 0x4e2d...f891 &nbsp;|&nbsp;{" "}
          <strong className="text-light">Protocol:</strong> Vocdoni zk-SNARK &nbsp;|&nbsp;{" "}
          <strong className="text-light">Eligible voters:</strong> 247 verified members &nbsp;|&nbsp;{" "}
          <strong className="text-light">Votes cast:</strong> {mounted && votedFor ? "164" : "163"} &nbsp;|&nbsp;{" "}
          <strong className="text-light">Quorum:</strong>{" "}
          <span className="text-green">Met (66%)</span>
        </div>
        <p className="text-[13px] text-muted mt-3">
          Your vote is cryptographically private. The tally is publicly verifiable.{" "}
          <a href="#" className="text-red hover:underline">Audit this election &rarr;</a>
        </p>
      </section>
    </div>
  );
}
