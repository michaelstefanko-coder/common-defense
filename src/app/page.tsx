"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    // Hide the main site nav and footer on the map landing page
    const nav = document.querySelector("nav");
    const footer = document.querySelector("footer");
    if (nav) nav.style.display = "none";
    if (footer) footer.style.display = "none";

    return () => {
      if (nav) nav.style.display = "";
      if (footer) footer.style.display = "";
    };
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 200, background: "#050709" }}>
      {/* Navigation overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
          padding: "10px 24px",
          display: "flex",
          alignItems: "center",
          gap: 16,
          background: "rgba(6,8,12,0.94)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
          <span
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: 14,
              fontWeight: 900,
              letterSpacing: 4,
              textTransform: "uppercase" as const,
              color: "#fff",
            }}
          >
            Common Defense
          </span>
          <span
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: 10,
              color: "#4e5666",
              letterSpacing: 0.5,
            }}
          >
            Strategic Infrastructure &amp; Economic Leverage
          </span>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" as const }}>
          <Link
            href="/mission"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase" as const,
              color: "#ef4444",
              textDecoration: "none",
              border: "1px solid rgba(239,68,68,0.3)",
              padding: "5px 14px",
              borderRadius: 4,
            }}
          >
            The Mission
          </Link>
          <Link
            href="/news"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase" as const,
              color: "#bfc5d2",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "5px 14px",
              borderRadius: 4,
            }}
          >
            News
          </Link>
          <Link
            href="/ice-operations"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase" as const,
              color: "#bfc5d2",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "5px 14px",
              borderRadius: 4,
            }}
          >
            ICE Exposé
          </Link>
          <Link
            href="/citizens-united"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase" as const,
              color: "#bfc5d2",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "5px 14px",
              borderRadius: 4,
            }}
          >
            Citizens United
          </Link>
          <Link
            href="/resist"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase" as const,
              color: "#bfc5d2",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "5px 14px",
              borderRadius: 4,
            }}
          >
            Resist
          </Link>
          <Link
            href="/know-your-rights"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase" as const,
              color: "#bfc5d2",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "5px 14px",
              borderRadius: 4,
            }}
          >
            Know Your Rights
          </Link>
        </div>
      </div>

      <iframe
        src="/infrastructure-map.html"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        title="Common Defense Strategic Infrastructure Map"
      />
    </div>
  );
}
