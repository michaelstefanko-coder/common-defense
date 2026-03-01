"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 left-6 z-[200] w-11 h-11 bg-card border border-border text-light hover:text-white hover:border-red cursor-pointer transition-all flex items-center justify-center text-[18px] max-md:bottom-4 max-md:left-4"
      aria-label="Back to top"
    >
      &uarr;
    </button>
  );
}
