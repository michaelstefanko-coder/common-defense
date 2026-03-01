"use client";

import { useState, useEffect } from "react";

const ELECTION_DATE = new Date("2028-11-03T00:00:00-05:00");

function calcTimeLeft() {
  const now = new Date();
  const diff = ELECTION_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownTimer() {
  const [time, setTime] = useState(calcTimeLeft);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => setTime(calcTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <section className="py-16 px-10 bg-dark border-t border-b border-border">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
            2028 Presidential Election
          </div>
          <div className="font-heading text-[24px] text-white font-black">Loading...</div>
        </div>
      </section>
    );
  }

  const blocks = [
    { value: time.days, label: "Days" },
    { value: time.hours, label: "Hours" },
    { value: time.minutes, label: "Minutes" },
    { value: time.seconds, label: "Seconds" },
  ];

  return (
    <section className="py-16 px-10 bg-dark border-t border-b border-border">
      <div className="max-w-[1200px] mx-auto text-center">
        <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
          Time Remaining
        </div>
        <div className="font-heading text-[20px] max-md:text-[16px] text-white font-black mb-8">
          Build the infrastructure before the 2028 election.
        </div>
        <div className="flex justify-center gap-6 max-md:gap-3">
          {blocks.map((block) => (
            <div key={block.label} className="text-center">
              <div className="font-heading text-[56px] max-md:text-[32px] font-black text-white leading-none tabular-nums">
                {String(block.value).padStart(block.label === "Days" ? 3 : 2, "0")}
              </div>
              <div className="font-heading text-[10px] tracking-[2px] uppercase text-muted mt-2">
                {block.label}
              </div>
            </div>
          ))}
        </div>
        <p className="text-[14px] text-muted mt-8 max-w-[500px] mx-auto">
          The time to build this was ten years ago. The next best time is right now.
        </p>
      </div>
    </section>
  );
}
