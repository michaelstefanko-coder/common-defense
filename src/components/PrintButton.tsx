"use client";

export default function PrintButton({ className }: { className?: string }) {
  return (
    <button
      onClick={() => window.print()}
      className={className || "font-heading text-[13px] tracking-[2px] uppercase bg-red text-white px-10 py-4 border-none cursor-pointer font-bold hover:bg-red-light transition-all"}
    >
      Print This Page
    </button>
  );
}
