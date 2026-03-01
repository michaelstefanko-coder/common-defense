"use client";

import Link from "next/link";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="relative min-h-screen flex items-end px-10 pb-20"
      style={{
        background: `linear-gradient(to bottom, rgba(10,10,10,0) 0%, rgba(10,10,10,0.4) 40%, rgba(10,10,10,0.85) 75%, rgba(10,10,10,1) 100%),
                     url('https://images.unsplash.com/photo-1591848516844-ae4b2e25b0c0?w=1920&q=80') center center / cover no-repeat`,
      }}
    >
      <div className="max-w-[800px]">
        <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-4">
          Minneapolis, January 24, 2026
        </div>
        <h1 className="font-heading text-[72px] max-md:text-[42px] font-black leading-none text-white mb-5 uppercase">
          Common<br /><span className="text-red">Defense</span>
        </h1>
        <p className="text-[20px] text-light max-w-[600px] mb-8 leading-[1.6] italic">
          We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.
        </p>
        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() => scrollTo("pledge")}
            className="font-heading text-[13px] tracking-[2px] uppercase bg-red text-white px-10 py-4 border-none cursor-pointer font-bold hover:bg-red-light hover:translate-y-[-1px] transition-all"
          >
            Sign the Pledge
          </button>
          <Link
            href="/"
            className="font-heading text-[13px] tracking-[2px] uppercase bg-transparent text-white px-10 py-4 border border-white font-bold hover:bg-white/[0.08] transition-all no-underline hover:no-underline inline-flex items-center"
          >
            View the Map
          </Link>
        </div>
      </div>
    </div>
  );
}
