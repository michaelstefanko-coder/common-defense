import resistOps from "@/data/resistance-ops.json";
import Link from "next/link";

export default function ResistanceToolkit() {
  return (
    <section className="py-[100px] px-10 max-md:px-5 max-w-[1200px] mx-auto" id="resist">
      <div className="font-mono text-[10px] tracking-[4px] uppercase text-red mb-4">
        {"// "}Pillar IV
      </div>
      <div className="font-heading text-[40px] max-md:text-[28px] font-black text-white leading-[1.15] mb-6 uppercase">
        Resistance Operations
      </div>
      <div className="text-[17px] text-light max-w-[700px] leading-[1.7]">
        Creative, nonviolent tactics that impose real economic and political costs. Every operation is coordinated through the platform with legal observers, unified messaging, and verified impact tracking.
      </div>

      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5 mt-10">
        {resistOps.campaigns.slice(0, 4).map((op) => (
          <div
            key={op.id}
            className="bg-card border border-border p-7 transition-colors hover:border-red"
          >
            <div className={`font-mono text-[10px] tracking-[2px] uppercase mb-3 ${
              op.status === "ACTIVE" ? "text-green" : "text-yellow"
            }`}>
              &#9679; {op.status === "ACTIVE" ? "Active Campaign" : "Planning Phase"}
            </div>
            <div className="font-heading text-[16px] font-bold text-white mb-2">
              {op.name}
            </div>
            <div className="text-[14px] text-muted leading-[1.6]">
              {op.description}
            </div>
            <div className="flex gap-4 mt-4 font-mono text-[12px] text-light">
              <span><strong className="text-white">{op.participants.toLocaleString()}</strong> participants</span>
              <span><strong className="text-white">{op.impact}%</strong> impact</span>
            </div>
            <div className="mt-4">
              <div className="h-1 bg-border w-full">
                <div
                  className={`h-full transition-all duration-1000 ${
                    op.status === "ACTIVE" ? "bg-green" : "bg-yellow"
                  }`}
                  style={{ width: `${op.impact}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/resist"
          className="font-heading text-[13px] tracking-[2px] uppercase bg-red text-white px-10 py-4 border-2 border-red font-bold hover:bg-red-light transition-colors no-underline hover:no-underline inline-block"
          style={{ borderRadius: 0 }}
        >
          View All {resistOps.campaigns.length} Campaigns
        </Link>
      </div>
    </section>
  );
}
