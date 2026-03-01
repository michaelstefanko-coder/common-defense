"use client";

import Link from "next/link";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative pt-[60px]">
      {/* Map iframe behind everything */}
      <div className="relative w-full h-[85vh] max-md:h-[70vh] overflow-hidden">
        <iframe
          src="/infrastructure-map.html"
          className="absolute inset-0 w-full h-full border-none"
          title="Common Defense Strategic Infrastructure Map"
          loading="eager"
        />

        {/* Dark overlay for readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(
              to bottom,
              rgba(10,10,10,0.6) 0%,
              rgba(10,10,10,0.45) 30%,
              rgba(10,10,10,0.5) 60%,
              rgba(10,10,10,0.9) 100%
            )`,
          }}
        />

        {/* Text content overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
          <div className="max-w-[900px]">
            <h1 className="font-heading text-[56px] max-lg:text-[40px] max-md:text-[28px] font-black leading-[1.1] text-white mb-6 uppercase">
              Do you think ICE is Trump&apos;s tool<br className="max-md:hidden" /> to destroy America?
            </h1>
            <h2 className="font-heading text-[36px] max-lg:text-[26px] max-md:text-[20px] font-black leading-[1.2] text-white mb-3">
              Do you think Trump won&apos;t leave office?
            </h2>
            <p className="text-[22px] max-md:text-[16px] text-red font-heading font-bold tracking-[1px] mb-8">
              We have a plan, and it requires you.
            </p>
            <div className="flex gap-4 justify-center flex-wrap pointer-events-auto">
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
    </div>
  );
}
