"use client";

import Link from "next/link";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative pt-[60px] min-h-screen max-md:min-h-0 overflow-hidden bg-black">
      {/* Map — right side, bleeding off edge, positioned higher */}
      <div className="absolute top-0 right-0 w-[60%] h-full max-md:hidden pointer-events-none">
        <iframe
          src="/hero-map.html"
          className="w-full h-full border-none"
          title="Strategic infrastructure — plan targets"
          loading="eager"
          tabIndex={-1}
        />
        {/* Hard left edge fade */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #000000 0%, rgba(0,0,0,0.85) 10%, rgba(0,0,0,0.3) 35%, rgba(0,0,0,0) 50%)",
          }}
        />
        {/* Bottom hard fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none"
          style={{
            background: "linear-gradient(to top, #000000 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Mobile: map behind */}
      <div className="hidden max-md:block absolute inset-0 pointer-events-none">
        <iframe
          src="/hero-map.html"
          className="w-full h-full border-none"
          title="Strategic infrastructure"
          loading="eager"
          tabIndex={-1}
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.85)" }} />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 min-h-[calc(100vh-60px)] flex flex-col justify-center px-10 max-md:px-5">

        {/* Top timestamp — leaked transmission header */}
        <div className="absolute top-6 left-10 max-md:left-5 font-mono text-[10px] tracking-[3px] text-muted uppercase">
          <span className="inline-block w-2 h-2 bg-red rounded-full mr-2 animate-pulse" />
          Signal Intercepted — March 2026 — Minneapolis / Continental US
        </div>

        {/* Main text block — propagandistic, massive, breaking the grid */}
        <div className="max-w-[650px]">
          {/* Small label — monospace, classified */}
          <div
            className="font-mono text-[11px] tracking-[4px] uppercase mb-6"
            style={{ color: "#cc0000" }}
          >
            {"// TRANSMISSION BEGINS"}
          </div>

          {/* Primary headline — massive, heavy serif, screen-filling */}
          <h1
            className="font-heading text-[72px] max-lg:text-[56px] max-md:text-[38px] font-black leading-[0.95] text-white mb-4 uppercase"
            style={{ letterSpacing: "-1px" }}
          >
            Do you think
            <br />
            <span style={{ color: "#cc0000" }}>ICE</span> is Trump&apos;s
            <br />
            tool to destroy
            <br />
            America?
          </h1>

          {/* Secondary — slightly offset, overlapping feel */}
          <div className="ml-1 max-md:ml-0">
            <h2
              className="font-heading text-[42px] max-lg:text-[32px] max-md:text-[24px] font-black leading-[1.0] text-white mb-2 uppercase"
              style={{ letterSpacing: "-0.5px" }}
            >
              Do you think he
              <br />
              won&apos;t <span style={{ color: "#ff0000", textShadow: "0 0 20px rgba(255,0,0,0.4)" }}>leave office</span>?
            </h2>
          </div>

          {/* The hook — crimson, different weight */}
          <div className="mt-8 mb-10">
            <div
              className="font-mono text-[20px] max-md:text-[16px] uppercase tracking-[3px] font-bold leading-[1.5]"
              style={{ color: "#cc0000" }}
            >
              We have a plan,
              <br />
              and it requires you.
            </div>
          </div>

          {/* CTAs — sharp, brutal */}
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => scrollTo("pledge")}
              className="glitch-hover font-stencil text-[14px] tracking-[3px] uppercase bg-red text-white px-10 py-4 border-2 border-red font-black"
              style={{ borderRadius: 0 }}
            >
              Sign the Pledge
            </button>
            <Link
              href="/map"
              className="btn-ghost font-mono text-[12px] tracking-[2px] uppercase bg-transparent text-white px-10 py-4 border border-muted font-bold no-underline hover:no-underline inline-flex items-center"
              style={{ borderRadius: 0 }}
            >
              [ EXPLORE THE MAP ]
            </Link>
          </div>
        </div>

        {/* Overlapping data readout — bottom right, monospace, partially behind map */}
        <div className="absolute bottom-10 right-10 max-md:hidden text-right font-mono text-[10px] tracking-[1px] text-muted uppercase leading-[2]">
          <div>38 TARGETS MAPPED</div>
          <div>5 UNIONS COORDINATED</div>
          <div>3 NATIONS IMPLICATED</div>
          <div className="text-red mt-1">$14.7B / DAY HALTED</div>
        </div>
      </div>

      {/* Hard bottom border — 2px red */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-red" />
    </div>
  );
}
