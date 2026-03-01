interface QuoteBreakProps {
  quote: string;
  attribution: string;
  boldAttribution?: boolean;
}

export default function QuoteBreak({ quote, attribution, boldAttribution }: QuoteBreakProps) {
  return (
    <div
      className="py-20 px-10 bg-black relative"
      style={{ borderTop: "2px solid #1a1a1a", borderBottom: "2px solid #1a1a1a" }}
    >
      {/* Red left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-red" />

      <div className="max-w-[800px] mx-auto">
        <div className="font-heading text-[28px] max-md:text-[20px] italic text-white leading-[1.5] uppercase">
          &ldquo;{quote}&rdquo;
        </div>
        <div
          className={`font-mono text-[11px] tracking-[3px] uppercase mt-6 ${
            boldAttribution ? "text-red font-bold" : "text-muted"
          }`}
        >
          — {attribution}
        </div>
      </div>
    </div>
  );
}
