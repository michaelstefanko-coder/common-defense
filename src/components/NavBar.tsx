"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useScrollBorder } from "@/hooks/useScrollBorder";

const navLinks = [
  { href: "/map", label: "The Map", highlight: true },
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
    window.location.href = "/#pledge";
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-10 max-md:px-5 h-[60px]"
        style={{
          background: "rgba(0,0,0,0.97)",
          backdropFilter: "blur(8px)",
          borderBottom: `2px solid ${scrolled ? "#cc0000" : "#1a1a1a"}`,
        }}
      >
        <Link href="/" className="glitch-text font-heading font-black text-[16px] tracking-[4px] text-white uppercase no-underline hover:no-underline">
          Common Defense
        </Link>

        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link-dystopian font-mono text-[10px] tracking-[2px] uppercase no-underline hover:no-underline ${
                link.highlight ? "text-red font-bold" : "text-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={goToPledge}
            className="glitch-hover font-stencil text-[11px] tracking-[2px] uppercase bg-red text-white px-5 py-2 border-2 border-red font-black max-md:hidden"
            style={{ borderRadius: 0 }}
          >
            Sign the Pledge
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden bg-transparent border-none p-2 flex flex-col gap-[5px]"
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
          className="fixed inset-0 z-[99] bg-black pt-[60px] flex flex-col md:hidden"
          onClick={(e) => { if (e.target === e.currentTarget) setMobileOpen(false); }}
        >
          <div className="flex flex-col gap-1 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`nav-link-dystopian font-mono text-[14px] tracking-[3px] uppercase no-underline hover:no-underline py-4 ${
                  link.highlight ? "text-red font-bold" : "text-muted"
                }`}
                style={{ borderBottom: "1px solid #1a1a1a" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="p-6 mt-auto">
            <button
              onClick={goToPledge}
              className="glitch-hover font-stencil text-[13px] tracking-[2px] uppercase bg-red text-white px-10 py-4 border-2 border-red font-black w-full"
              style={{ borderRadius: 0 }}
            >
              Sign the Pledge
            </button>
          </div>
        </div>
      )}
    </>
  );
}
