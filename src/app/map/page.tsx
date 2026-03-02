"use client";

export default function MapPage() {
  return (
    <div className="fixed inset-0 z-[200]" style={{ background: "#050709" }}>
      {/* Slim back-to-site bar */}
      <div
        className="fixed top-0 left-0 right-0 z-[9999] flex items-center justify-between px-6 py-2"
        style={{
          background: "rgba(6,8,12,0.94)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <a
          href="/"
          className="font-heading text-[12px] font-bold tracking-[2px] uppercase text-white no-underline hover:text-red transition-colors"
        >
          &larr; Common Defense
        </a>
        <span className="font-mono text-[10px] text-muted tracking-[0.5px] max-md:hidden">
          Strategic Infrastructure &amp; Economic Leverage Map
        </span>
      </div>

      <iframe
        src="/infrastructure-map.html"
        className="w-full h-full border-none"
        title="Common Defense Strategic Infrastructure Map"
      />
    </div>
  );
}
