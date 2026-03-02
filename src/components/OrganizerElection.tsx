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
  const [showResults, setShowResults] = useState(false);
  const toast = useToast();

  useEffect(() => setMounted(true), []);

  const castVote = (candidateId: string) => {
    if (votedFor) return;
    setVotedFor(candidateId);
    const candidate = candidates.find((c) => c.id === candidateId);
    toast.addToast(`Vote cast for ${candidate?.name}. Your ballot has been recorded.`, "success");
  };

  return (
    <div className="bg-dark border-t border-b border-border" id="vote">
      <section className="py-[100px] px-10 max-w-[1200px] mx-auto">
        <div className="font-mono text-[10px] tracking-[4px] uppercase text-red mb-4">
          {"// "}Democratic Structure
        </div>
        <div className="font-heading text-[40px] max-md:text-[28px] font-black text-white leading-[1.15] mb-6 uppercase">
          Elect Your Organizers
        </div>
        <div className="text-[17px] text-light max-w-[700px] leading-[1.7]">
          Every organizer is elected by their local chapter. One person, one vote, anonymous ballot. The movement belongs to the people who do the work.
        </div>

        <div className="mt-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] tracking-[2px] uppercase text-muted">Active Election</span>
            <span className="font-mono text-[11px] tracking-[2px] uppercase text-green">&#9679; Open</span>
          </div>
          <div className="font-heading text-[16px] text-white font-bold mt-2">
            Minneapolis Chapter — Local Organizer
          </div>
        </div>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 mt-10">
          {candidates.map((cand) => {
            const isVoted = mounted && votedFor === cand.id;
            const hasVoted = mounted && !!votedFor;

            return (
              <div
                key={cand.id}
                className={`bg-card border p-7 transition-colors ${
                  isVoted
                    ? "border-green bg-green/5"
                    : hasVoted
                    ? "border-border opacity-60"
                    : "border-border hover:border-blue"
                }`}
              >
                <div className="font-heading text-[20px] font-bold text-white">{cand.name}</div>
                <div className="font-mono text-[11px] tracking-[2px] uppercase text-muted mt-0.5">
                  Candidate for Local Organizer
                </div>
                <div className="flex gap-5 mt-4 flex-wrap">
                  <div className="font-mono text-[12px] text-light">
                    <strong className="text-white">{cand.credits}</strong> credits earned
                  </div>
                  <div className="font-mono text-[12px] text-light">
                    <strong className="text-white">{cand.months}</strong> months active
                  </div>
                  <div className="font-mono text-[12px] text-light">
                    <strong className="text-white">{cand.endorsements}</strong> endorsements
                  </div>
                </div>
                <div className="text-[14px] text-light mt-3 leading-[1.7]">{cand.bio}</div>
                <button
                  onClick={() => castVote(cand.id)}
                  disabled={hasVoted}
                  className={`mt-5 font-mono text-[12px] tracking-[2px] uppercase py-3 px-7 border-none font-bold transition-colors w-full ${
                    isVoted
                      ? "bg-green text-white"
                      : hasVoted
                      ? "bg-blue/30 text-white/30 cursor-not-allowed"
                      : "bg-blue text-white hover:bg-blue/80"
                  }`}
                  style={{ borderRadius: 0 }}
                >
                  {isVoted ? "\u2713 Your Vote" : "Cast Vote"}
                </button>
              </div>
            );
          })}
        </div>

        {/* Election info */}
        <div className="mt-6 flex items-center justify-between flex-wrap gap-3">
          <p className="font-mono text-[11px] text-muted leading-[1.6]">
            Your vote is anonymous and stored locally. One vote per device.
          </p>
          {mounted && votedFor && (
            <button
              onClick={() => setShowResults(!showResults)}
              className="font-mono text-[11px] tracking-[1px] uppercase text-red hover:underline bg-transparent border-none"
            >
              {showResults ? "Hide" : "View"} your ballot
            </button>
          )}
        </div>

        {showResults && mounted && votedFor && (
          <div className="mt-4 bg-card border border-border p-5 font-mono text-[12px]">
            <div className="text-muted mb-2">Your recorded ballot:</div>
            <div className="text-white">
              <strong>Vote:</strong> {candidates.find((c) => c.id === votedFor)?.name}
            </div>
            <div className="text-muted mt-1">
              <strong className="text-light">Recorded:</strong> {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
