"use client";

import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

function useAnimatedCounter(target: number, isVisible: boolean, duration = 2000) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const startTime = performance.now();
    let raf: number;

    function update(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(target * eased));
      if (progress < 1) raf = requestAnimationFrame(update);
    }

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [isVisible, target, duration]);

  return value;
}

export default function StatsBar() {
  const { ref, isVisible } = useIntersectionObserver(0.3);

  const pledges = useAnimatedCounter(24837, isVisible, 2000);
  const chapters = useAnimatedCounter(142, isVisible, 1800);
  const fund = useAnimatedCounter(2847000, isVisible, 2200);
  const aid = useAnimatedCounter(8491, isVisible, 2000);

  return (
    <div
      ref={ref}
      className="bg-black grid grid-cols-4 max-md:grid-cols-2"
      style={{ borderTop: "2px solid #1a1a1a", borderBottom: "2px solid #1a1a1a" }}
    >
      <div className="py-6 px-6" style={{ borderRight: "1px solid #1a1a1a" }}>
        <div className="font-mono text-[9px] tracking-[2px] uppercase text-muted mb-2">
          {"// SIGNATORIES"}
        </div>
        <div className="font-mono text-[32px] font-bold text-white leading-none">
          {pledges.toLocaleString()}
        </div>
        <div className="font-mono text-[10px] text-muted mt-1 tracking-[1px]">
          PLEDGES SIGNED
        </div>
      </div>
      <div className="py-6 px-6 max-md:!border-r-0" style={{ borderRight: "1px solid #1a1a1a" }}>
        <div className="font-mono text-[9px] tracking-[2px] uppercase text-muted mb-2">
          {"// CELLS ACTIVE"}
        </div>
        <div className="font-mono text-[32px] font-bold text-white leading-none">
          {chapters.toLocaleString()}
        </div>
        <div className="font-mono text-[10px] text-muted mt-1 tracking-[1px]">
          LOCAL CHAPTERS
        </div>
      </div>
      <div className="py-6 px-6" style={{ borderRight: "1px solid #1a1a1a" }}>
        <div className="font-mono text-[9px] tracking-[2px] uppercase text-red mb-2">
          {"// FUND STATUS"}
        </div>
        <div className="font-mono text-[32px] font-bold text-red leading-none">
          ${fund.toLocaleString()}
        </div>
        <div className="font-mono text-[10px] text-muted mt-1 tracking-[1px]">
          STRIKE FUND
        </div>
      </div>
      <div className="py-6 px-6">
        <div className="font-mono text-[9px] tracking-[2px] uppercase text-muted mb-2">
          {"// MUTUAL AID"}
        </div>
        <div className="font-mono text-[32px] font-bold text-white leading-none">
          {aid.toLocaleString()}
        </div>
        <div className="font-mono text-[10px] text-muted mt-1 tracking-[1px]">
          AID MATCHES
        </div>
      </div>
    </div>
  );
}
