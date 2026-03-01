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
      style={{ borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a" }}
    >
      <div className="text-center py-8 px-5" style={{ borderRight: "1px solid #1a1a1a" }}>
        <div className="font-heading text-[36px] font-black text-white">
          {pledges.toLocaleString()}
        </div>
        <div className="font-heading text-[11px] tracking-[2px] uppercase text-muted mt-1">
          Pledges Signed
        </div>
      </div>
      <div className="text-center py-8 px-5 max-md:!border-r-0" style={{ borderRight: "1px solid #1a1a1a" }}>
        <div className="font-heading text-[36px] font-black text-white">
          {chapters.toLocaleString()}
        </div>
        <div className="font-heading text-[11px] tracking-[2px] uppercase text-muted mt-1">
          Local Chapters
        </div>
      </div>
      <div className="text-center py-8 px-5" style={{ borderRight: "1px solid #1a1a1a" }}>
        <div className="font-heading text-[36px] font-black text-red">
          ${fund.toLocaleString()}
        </div>
        <div className="font-heading text-[11px] tracking-[2px] uppercase text-muted mt-1">
          Strike Fund
        </div>
      </div>
      <div className="text-center py-8 px-5">
        <div className="font-heading text-[36px] font-black text-white">
          {aid.toLocaleString()}
        </div>
        <div className="font-heading text-[11px] tracking-[2px] uppercase text-muted mt-1">
          Mutual Aid Matches
        </div>
      </div>
    </div>
  );
}
