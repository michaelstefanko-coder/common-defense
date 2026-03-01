"use client";

import Link from "next/link";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative pt-[60px] min-h-[90vh] max-md:min-h-0 flex items-center overflow-hidden bg-dark">
      {/* Map — right side, absolutely positioned on desktop */}
      <div className="absolute top-0 right-0 w-[55%] h-full max-md:hidden pointer-events-none">
        <iframe
          src="/hero-map.html"
          className="w-full h-full border-none"
          title="Strategic infrastructure — plan targets"
          loading="eager"
          tabIndex={-1}
        />
        {/* Fade edge into text side */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.7) 15%, rgba(10,10,10,0) 40%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[120px] pointer-events-none"
          style={{
            background: "linear-gradient(to top, #0a0a0a 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Mobile: map as background behind text */}
      <div className="hidden max-md:block absolute inset-0 pointer-events-none">
        <iframe
          src="/hero-map.html"
          className="w-full h-full border-none"
          title="Strategic infrastructure — plan targets"
          loading="eager"
          tabIndex={-1}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(10,10,10,0.75)",
          }}
        />
      </div>

      {/* Text — left side */}
      <div className="relative z-10 max-w-[1200px] mx-auto w-full px-10 max-md:px-6 py-20 max-md:py-16">
        <div className="max-w-[520px]">
          <h1 className="font-heading text-[48px] max-lg:text-[38px] max-md:text-[30px] font-black leading-[1.1] text-white mb-6">
            Do you think ICE is Trump&apos;s tool to destroy America?
          </h1>
          <h2 className="font-heading text-[32px] max-lg:text-[26px] max-md:text-[22px] font-black leading-[1.15] text-white mb-6">
            Do you think Trump won&apos;t leave office?
          </h2>
          <p className="text-[22px] max-md:text-[18px] text-red font-heading font-bold tracking-[0.5px] mb-10 leading-[1.3]">
            We have a plan, and it requires you.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => scrollTo("pledge")}
              className="font-heading text-[13px] tracking-[2px] uppercase bg-red text-white px-10 py-4 border-none cursor-pointer font-bold hover:bg-red-light hover:translate-y-[-1px] transition-all"
            >
              Sign the Pledge
            </button>
            <Link
              href="/map"
              className="font-heading text-[13px] tracking-[2px] uppercase bg-transparent text-white px-10 py-4 border border-white font-bold hover:bg-white/[0.08] transition-all no-underline hover:no-underline inline-flex items-center"
            >
              Explore the Map
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
