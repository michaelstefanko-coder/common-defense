"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useScrollBorder } from "@/hooks/useScrollBorder";

const navLinks = [
  { href: "/", label: "The Map", highlight: true },
  { href: "/mission", label: "The Mission" },
  { href: "/news", label: "News" },
  { href: "/ice-operations", label: "ICE Exposé" },
  { href: "/citizens-united", label: "Citizens United" },
  { href: "/resist", label: "Resist" },
  { href: "/know-your-rights", label: "Know Your Rights" },
];

export default function NavBar() {
  const scrolled = useScrollBorder(100);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const goToPledge = () => {
    setMobileOpen(false);
    window.location.href = "/mission#pledge";
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-10 max-md:px-5 h-[60px] transition-[border-color] duration-300"
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-heading text-[12px] tracking-[2px] uppercase no-underline hover:text-white hover:no-underline transition-colors ${
                link.highlight ? "text-red-light font-bold" : "text-light"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={goToPledge}
            className="font-heading text-[12px] tracking-[2px] uppercase bg-red text-white px-6 py-2.5 border-none cursor-pointer font-bold hover:bg-red-dim transition-colors max-md:hidden"
          >
            Sign the Pledge
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden bg-transparent border-none cursor-pointer p-2 flex flex-col gap-[5px]"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-[99] bg-black/95 pt-[60px] flex flex-col md:hidden"
          onClick={(e) => { if (e.target === e.currentTarget) setMobileOpen(false); }}
        >
          <div className="flex flex-col gap-1 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-heading text-[16px] tracking-[3px] uppercase no-underline hover:no-underline py-4 border-b border-border transition-colors ${
                  link.highlight ? "text-red-light font-bold" : "text-light hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="p-6 mt-auto">
            <button
              onClick={goToPledge}
              className="font-heading text-[13px] tracking-[2px] uppercase bg-red text-white px-10 py-4 border-none cursor-pointer font-bold hover:bg-red-light transition-all w-full"
            >
              Sign the Pledge
            </button>
          </div>
        </div>
      )}
    </>
  );
}
