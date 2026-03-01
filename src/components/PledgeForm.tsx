"use client";

import { useState, useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useToast } from "./Toast";

export default function PledgeForm() {
  const [name, setName] = useState("");
  const [pledgeData, setPledgeData] = useLocalStorage<{ signed: boolean; name: string } | null>("cd-pledge", null);
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);
  const toast = useToast();

  useEffect(() => setMounted(true), []);

  const signed = pledgeData?.signed ?? false;
  const signerName = pledgeData?.name ?? "";

  const signPledge = () => {
    if (!name.trim() || name.trim().length < 3) {
      setError(true);
      return;
    }
    setError(false);
    setPledgeData({ signed: true, name: name.trim() });
    setName("");
    toast.addToast(`Pledge signed. Welcome to the movement, ${name.trim()}.`, "success");
  };

  return (
    <div
      className="bg-black py-[100px] px-10 relative"
      id="pledge"
      style={{ borderTop: "2px solid #1a1a1a", borderBottom: "2px solid #1a1a1a" }}
    >
      {/* Left red bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-red" />

      <div className="max-w-[800px] mx-auto">
        <div className="font-mono text-[10px] tracking-[4px] uppercase text-red mb-4">
          {"// PILLAR III — THE PLEDGE"}
        </div>
        <div className="font-heading text-[44px] max-md:text-[28px] font-black text-white leading-[1.05] mb-6 uppercase">
          The Citizens United Pledge
        </div>

        <div
          className="font-heading text-[20px] max-md:text-[16px] italic text-white leading-[1.7] py-8 px-8 text-left my-10"
          style={{
            borderLeft: "3px solid #cc0000",
            background: "rgba(204,0,0,0.05)",
          }}
        >
          I will only vote for a presidential candidate who commits to treating Citizens United v. FEC as illegitimate and actively pursues its legislative or constitutional reversal. Lincoln did not ask the Court&apos;s permission to overturn Dred Scott. Neither do I.
        </div>

        <p className="font-mono text-[13px] text-muted mb-2 tracking-[1px] uppercase">
          Your name. On the record. Publicly accountable.
        </p>

        <div className="flex gap-3 max-w-[600px] mt-8 max-md:flex-col">
          <input
            type="text"
            value={name}
            onChange={(e) => { setName(e.target.value); setError(false); }}
            placeholder="ENTER YOUR FULL NAME"
            disabled={signed}
            className={`flex-1 py-3.5 px-5 bg-black text-white font-mono text-[13px] tracking-[1px] outline-none placeholder:text-muted ${
              error ? "border-2 border-red" : "border-2 border-border focus:border-red"
            }`}
            style={{ borderRadius: 0 }}
            onKeyDown={(e) => { if (e.key === "Enter") signPledge(); }}
            aria-label="Your full name"
          />
          <button
            onClick={signPledge}
            disabled={signed}
            className="glitch-hover font-stencil text-[13px] tracking-[2px] uppercase bg-red text-white px-10 py-4 border-2 border-red font-black whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ borderRadius: 0 }}
          >
            Sign the Pledge
          </button>
        </div>

        <div className={`font-mono text-[11px] tracking-[1px] mt-4 ${mounted && signed ? "text-green" : "text-muted"}`}>
          {mounted && signed ? (
            <>
              [CONFIRMED] <strong>{signerName}</strong> — PLEDGE RECORDED. SIGNER #24,838.
            </>
          ) : (
            "// JOIN THE SIGNERS. EVERY NAME IS PUBLIC. EVERY NAME MATTERS."
          )}
        </div>
      </div>
    </div>
  );
}
