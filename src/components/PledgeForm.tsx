"use client";

import { useState } from "react";

export default function PledgeForm() {
  const [name, setName] = useState("");
  const [signed, setSigned] = useState(false);
  const [signerName, setSignerName] = useState("");
  const [error, setError] = useState(false);

  const signPledge = () => {
    if (!name.trim() || name.trim().length < 3) {
      setError(true);
      return;
    }
    setError(false);
    setSignerName(name.trim());
    setSigned(true);
    setName("");
  };

  return (
    <div className="bg-dark border-t border-b border-border py-[100px] px-10" id="pledge">
      <div className="max-w-[800px] mx-auto text-center">
        <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
          Pillar III
        </div>
        <div className="font-heading text-[40px] max-md:text-[28px] font-black text-white leading-[1.15] mb-6">
          The Citizens United Pledge
        </div>

        <div
          className="text-[22px] max-md:text-[18px] italic text-text leading-[1.7] border-l-[3px] border-red py-6 px-8 text-left my-10"
          style={{ background: "rgba(197,48,48,0.15)" }}
        >
          I will only vote for a presidential candidate who commits to treating Citizens United v. FEC as illegitimate and actively pursues its legislative or constitutional reversal. Lincoln did not ask the Court&apos;s permission to overturn Dred Scott. Neither do I.
        </div>

        <p className="text-light text-[16px] mb-2">
          Your name. On the record. Publicly accountable.
        </p>

        <div className="flex gap-3 max-w-[500px] mx-auto mt-8 max-md:flex-col">
          <input
            type="text"
            value={name}
            onChange={(e) => { setName(e.target.value); setError(false); }}
            placeholder="Your full name"
            disabled={signed}
            className={`flex-1 py-3.5 px-5 bg-card border text-white font-heading text-[14px] outline-none transition-colors placeholder:text-muted ${
              error ? "border-red" : "border-border focus:border-red"
            }`}
            onKeyDown={(e) => { if (e.key === "Enter") signPledge(); }}
            aria-label="Your full name"
          />
          <button
            onClick={signPledge}
            disabled={signed}
            className="font-heading text-[13px] tracking-[2px] uppercase bg-red text-white px-10 py-4 border-none cursor-pointer font-bold hover:bg-red-light transition-all whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Sign the Pledge
          </button>
        </div>

        <div className={`font-heading text-[13px] mt-4 ${signed ? "text-green" : "text-muted"}`}>
          {signed ? (
            <>
              <span>&#10003;</span> <strong>{signerName}</strong> — your pledge is recorded. You are signer #24,838.
            </>
          ) : (
            "Join the signers. Every name is public. Every name matters."
          )}
        </div>
      </div>
    </div>
  );
}
