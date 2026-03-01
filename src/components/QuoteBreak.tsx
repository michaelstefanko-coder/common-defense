interface QuoteBreakProps {
  quote: string;
  attribution: string;
  boldAttribution?: boolean;
}

export default function QuoteBreak({ quote, attribution, boldAttribution }: QuoteBreakProps) {
  return (
    <div className="py-20 px-10 text-center bg-black" style={{ borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a" }}>
      <div className="text-[24px] max-md:text-[18px] italic text-text max-w-[700px] mx-auto leading-relaxed">
        &ldquo;{quote}&rdquo;
      </div>
      <div
        className={`font-heading text-[12px] tracking-[2px] uppercase mt-4 ${
          boldAttribution ? "text-white font-bold text-[14px] mt-5" : "text-muted"
        }`}
      >
        {attribution}
      </div>
    </div>
  );
}
