"use client";

import { useEffect } from "react";

export default function MapPage() {
  useEffect(() => {
    // Hide the main site nav and footer on the full-screen map
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
      {/* Slim back-to-site bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          padding: "8px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(6,8,12,0.94)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          &larr; Common Defense
        </a>
        <span
          style={{
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontSize: 10,
            color: "#4e5666",
            letterSpacing: 0.5,
          }}
        >
          Strategic Infrastructure &amp; Economic Leverage Map
        </span>
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
