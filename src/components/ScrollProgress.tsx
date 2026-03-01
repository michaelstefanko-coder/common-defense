"use client";

import { useState, useEffect } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (progress < 1) return null;

  return (
    <div className="fixed top-[60px] left-0 right-0 z-[99] h-[2px] bg-transparent">
      <div
        className="h-full bg-red transition-[width] duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
