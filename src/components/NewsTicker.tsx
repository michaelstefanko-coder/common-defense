"use client";

const tickerItems = [
  "MINNEAPOLIS — CBP AGENTS KILL ALEX PRETTI, VA NURSE, 37 — TEN SHOTS — NO CHARGES FILED",
  "ICE PURCHASES 7 WAREHOUSES EXCEEDING 1M SQ FT EACH — $38.3B DETENTION EXPANSION",
  "OPERATION METRO SURGE: 4,000 FEDERAL AGENTS — 3,000+ ARRESTS — WARRANTLESS DETENTIONS",
  "RENÉE GOOD KILLED BY ICE AGENT JONATHAN ROSS — VIDEO SHOWS CAR MOVING AWAY",
  "39 CHURCH PROTESTERS FACE FEDERAL INDICTMENT — ATTORNEY GENERAL ANNOUNCES CHARGES",
  "32 DEATHS IN ICE CUSTODY IN 2025 — DEADLIEST YEAR SINCE 2004",
  "CONGRESS APPROPRIATES $45B TO ICE IN SINGLE VOTE — MORE THAN A DECADE OF NORMAL FUNDING",
  "CITIZENS UNITED: ELECTION SPENDING $750M → $9B+ — POLICY PREFERENCES OF AVERAGE AMERICANS: NEAR-ZERO EFFECT",
  "ILA PORT STRIKE: 47,000 WORKERS SHUT 36 PORTS — $5B/DAY IMPACT — WON 62% RAISE",
  "5-YEAR-OLD LIAM RAMOS SEIZED ON SUBURBAN DRIVEWAY — TRANSPORTED 1,300 MI TO TEXAS FACILITY",
];

export default function NewsTicker() {
  const doubled = [...tickerItems, ...tickerItems];

  return (
    <div
      className="overflow-hidden bg-black relative"
      style={{
        borderTop: "2px solid #cc0000",
        borderBottom: "2px solid #cc0000",
      }}
    >
      {/* Label */}
      <div
        className="absolute left-0 top-0 bottom-0 z-10 flex items-center px-4"
        style={{ background: "#cc0000" }}
      >
        <span className="font-stencil text-[10px] tracking-[2px] text-white font-black uppercase whitespace-nowrap">
          BULLETIN
        </span>
      </div>

      {/* Scrolling track */}
      <div className="pl-[90px] py-2 overflow-hidden">
        <div className="ticker-track">
          {doubled.map((item, i) => (
            <span key={i} className="inline-flex items-center">
              <span className="font-mono text-[11px] tracking-[1px] text-text uppercase">
                {item}
              </span>
              <span className="mx-6 text-red text-[8px]">&#9670;</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
