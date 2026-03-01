"use client";

import Link from "next/link";
import { useScrollBorder } from "@/hooks/useScrollBorder";

export default function NavBar() {
  const scrolled = useScrollBorder(100);

  const scrollToPledge = () => {
    const el = document.getElementById("pledge");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-10 h-[60px] transition-[border-color] duration-300"
      style={{
        background: "rgba(10,10,10,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${scrolled ? "#c53030" : "#2a2a2a"}`,
      }}
    >
      <Link href="/" className="font-heading font-black text-[16px] tracking-[3px] text-white uppercase no-underline hover:no-underline">
        Common Defense
      </Link>

      <div className="hidden md:flex gap-7">
        <Link href="/#about" className="font-heading text-[12px] tracking-[2px] uppercase text-light no-underline hover:text-white hover:no-underline transition-colors">
          The Situation
        </Link>
        <Link href="/citizens-united" className="font-heading text-[12px] tracking-[2px] uppercase text-light no-underline hover:text-white hover:no-underline transition-colors">
          Citizens United
        </Link>
        <Link href="/map" className="font-heading text-[12px] tracking-[2px] uppercase text-red-light no-underline hover:text-white hover:no-underline transition-colors font-bold">
          The Map
        </Link>
        <Link href="/#strike" className="font-heading text-[12px] tracking-[2px] uppercase text-light no-underline hover:text-white hover:no-underline transition-colors">
          Organize
        </Link>
        <Link href="/resist" className="font-heading text-[12px] tracking-[2px] uppercase text-light no-underline hover:text-white hover:no-underline transition-colors">
          Resist
        </Link>
        <Link href="/#aid" className="font-heading text-[12px] tracking-[2px] uppercase text-light no-underline hover:text-white hover:no-underline transition-colors">
          Mutual Aid
        </Link>
      </div>

      <button
        onClick={scrollToPledge}
        className="font-heading text-[12px] tracking-[2px] uppercase bg-red text-white px-6 py-2.5 border-none cursor-pointer font-bold hover:bg-red-dim transition-colors"
      >
        Sign the Pledge
      </button>
    </nav>
  );
}
