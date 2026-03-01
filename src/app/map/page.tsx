"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function MapPage() {
  useEffect(() => {
    // Hide the main site nav and footer when on the map page
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
      {/* Back to site button */}
      <Link
        href="/"
        style={{
          position: "fixed",
          top: 10,
          right: 16,
          zIndex: 9999,
          background: "rgba(6,8,12,0.9)",
          border: "1px solid rgba(255,255,255,0.08)",
          color: "#bfc5d2",
          padding: "4px 12px",
          borderRadius: 4,
          fontSize: 10,
          fontFamily: "'DM Sans', system-ui, sans-serif",
          textDecoration: "none",
          letterSpacing: 1,
        }}
      >
        ← BACK TO SITE
      </Link>

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
