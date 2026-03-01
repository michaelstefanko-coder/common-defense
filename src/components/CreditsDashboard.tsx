"use client";

import { useState, useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useToast } from "./Toast";

interface Transaction {
  desc: string;
  amount: string;
  type: "plus" | "minus";
}

const defaultTransactions: Transaction[] = [
  { desc: "Cooked meals — Chapter meeting (Feb 22)", amount: "+3", type: "plus" },
  { desc: "Drove 3 members to action (Feb 20)", amount: "+2", type: "plus" },
  { desc: "Received legal consult (Feb 18)", amount: "-5", type: "minus" },
  { desc: "Distributed flyers — 4 hours (Feb 15)", amount: "+4", type: "plus" },
  { desc: "Grocery delivery for 2 families (Feb 12)", amount: "+4", type: "plus" },
];

const workCategories = [
  { label: "Cooked meals for chapter event", credits: 3 },
  { label: "Drove members to action", credits: 2 },
  { label: "Distributed flyers / canvassed", credits: 4 },
  { label: "Served as legal observer", credits: 5 },
  { label: "Street medic at action", credits: 5 },
  { label: "Helped with grocery delivery", credits: 4 },
  { label: "Hosted planning meeting", credits: 3 },
  { label: "Completed privacy hardening for a member", credits: 2 },
  { label: "Trained new members", credits: 4 },
  { label: "Submitted FOIA request", credits: 2 },
  { label: "Completed data broker opt-outs", credits: 4 },
  { label: "ICE Watch observer shift (4 hrs)", credits: 4 },
];

export default function CreditsDashboard() {
  const [userTransactions, setUserTransactions] = useLocalStorage<Transaction[]>("cd-transactions", []);
  const [showLogForm, setShowLogForm] = useState(false);
  const [selectedWork, setSelectedWork] = useState(0);
  const [customDesc, setCustomDesc] = useState("");
  const [mounted, setMounted] = useState(false);
  const toast = useToast();

  useEffect(() => setMounted(true), []);

  const allTransactions = [...(mounted ? userTransactions : []).slice().reverse(), ...defaultTransactions];
  const userCredits = mounted
    ? userTransactions.reduce((sum, tx) => sum + parseInt(tx.amount), 0)
    : 0;
  const totalCredits = 47 + userCredits;

  const logWork = () => {
    const category = workCategories[selectedWork];
    const today = new Date();
    const dateStr = today.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    const desc = customDesc.trim()
      ? `${customDesc.trim()} (${dateStr})`
      : `${category.label} (${dateStr})`;

    const newTx: Transaction = {
      desc,
      amount: `+${category.credits}`,
      type: "plus",
    };

    setUserTransactions((prev) => [...prev, newTx]);
    setShowLogForm(false);
    setCustomDesc("");
    toast.addToast(`+${category.credits} credits logged. Total: ${totalCredits + category.credits}`, "success");
  };

  return (
    <section className="py-[100px] px-10 max-w-[1200px] mx-auto">
      <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
        Labor Credits
      </div>
      <div className="font-heading text-[40px] max-md:text-[28px] font-black text-white leading-[1.15] mb-6">
        The currency is the work.
      </div>
      <div className="text-[18px] text-light max-w-[700px] leading-[1.8]">
        One hour of labor for the movement = one credit. No speculation. No trading. No buying your way in. The only way to earn credits is to show up and do the work. Every transaction verified on-chain, every identity protected by zero-knowledge proofs.
      </div>

      <div className="flex items-center gap-10 bg-card border border-border p-8 mt-10 max-md:flex-col">
        <div className="text-center min-w-[160px]">
          <div className="font-heading text-[48px] font-black text-green">{totalCredits}</div>
          <div className="font-heading text-[11px] tracking-[2px] uppercase text-muted">
            Your Credits
          </div>
          {mounted && userCredits > 0 && (
            <div className="font-heading text-[10px] text-green mt-1">
              +{userCredits} earned this session
            </div>
          )}
        </div>
        <div className="flex-1 w-full">
          {allTransactions.slice(0, 8).map((tx, i) => (
            <div
              key={i}
              className={`flex justify-between py-2.5 text-[14px] ${
                i < Math.min(allTransactions.length, 8) - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="text-light">{tx.desc}</span>
              <span className={`font-heading font-bold ${tx.type === "plus" ? "text-green" : "text-red"}`}>
                {tx.amount}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Log Work Form */}
      {showLogForm ? (
        <div className="bg-card border border-red p-8 mt-4 space-y-5">
          <div className="font-heading text-[14px] text-white font-bold">Log Your Work</div>

          <div>
            <label className="font-heading text-[10px] tracking-[2px] uppercase text-muted block mb-2">Type of Work</label>
            <div className="grid grid-cols-3 max-md:grid-cols-1 gap-2">
              {workCategories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedWork(i)}
                  className={`text-left py-3 px-4 border cursor-pointer transition-all font-heading text-[12px] ${
                    selectedWork === i
                      ? "bg-red/10 border-red text-white"
                      : "bg-transparent border-border text-muted hover:border-light"
                  }`}
                >
                  <div>{cat.label}</div>
                  <div className="text-green text-[11px] mt-1">+{cat.credits} credits</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="font-heading text-[10px] tracking-[2px] uppercase text-muted block mb-2">Custom Description (optional)</label>
            <input
              type="text"
              value={customDesc}
              onChange={(e) => setCustomDesc(e.target.value)}
              placeholder="e.g., Cooked for 30 people at Nicollet action"
              className="w-full py-3 px-4 bg-black border border-border text-white font-heading text-[14px] outline-none focus:border-red placeholder:text-muted"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={logWork}
              className="font-heading text-[13px] tracking-[2px] uppercase bg-green text-white px-10 py-3 border-none cursor-pointer font-bold hover:bg-green/80 transition-all"
            >
              Log +{workCategories[selectedWork].credits} Credits
            </button>
            <button
              onClick={() => setShowLogForm(false)}
              className="font-heading text-[13px] tracking-[2px] uppercase bg-transparent text-muted px-10 py-3 border border-border cursor-pointer hover:text-white hover:border-red transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShowLogForm(true)}
          className="font-heading text-[13px] tracking-[2px] uppercase bg-red text-white px-10 py-4 border-none cursor-pointer font-bold hover:bg-red-light transition-all mt-4"
        >
          Log Work
        </button>
      )}

      <div
        className="font-mono text-[11px] text-muted border border-border p-3 px-4 mt-4 break-all"
        style={{ background: "rgba(255,255,255,0.03)" }}
      >
        <strong className="text-light">Ledger:</strong> 0x7f2c...a3b1 &nbsp;|&nbsp;{" "}
        <strong className="text-light">Network:</strong> Polygon &nbsp;|&nbsp;{" "}
        <strong className="text-light">Last verified:</strong> Block #51,204,887 &nbsp;|&nbsp;{" "}
        <strong className="text-light">Status:</strong>{" "}
        <span className="text-green">&#9679;</span> Synced
      </div>
    </section>
  );
}
