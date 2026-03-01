import resistOps from "@/data/resistance-ops.json";

export default function ResistanceToolkit() {
  return (
    <section className="py-[100px] px-10 max-w-[1200px] mx-auto" id="resist">
      <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
        Pillar IV
      </div>
      <div className="font-heading text-[40px] max-md:text-[28px] font-black text-white leading-[1.15] mb-6">
        Resistance Operations
      </div>
      <div className="text-[18px] text-light max-w-[700px] leading-[1.8]">
        Creative, nonviolent tactics that impose real economic and political costs. Every operation is coordinated through the platform with legal observers, unified messaging, and verified impact tracking.
      </div>

      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5 mt-10">
        {resistOps.campaigns.slice(0, 4).map((op) => (
          <div
            key={op.id}
            className="bg-card border border-border p-7 transition-all hover:border-red relative overflow-hidden"
          >
            <div className={`font-heading text-[10px] tracking-[2px] uppercase mb-3 ${
              op.status === "ACTIVE" ? "text-green" : "text-yellow"
            }`}>
              &#9679; {op.status === "ACTIVE" ? "Active Campaign" : "Planning Phase"}
            </div>
            <div className="font-heading text-[16px] font-bold text-white mb-2">
              {op.name}
            </div>
            <div className="text-[14px] text-muted leading-relaxed">
              {op.description}
            </div>
            <div className="mt-4">
              <div className="font-heading text-[10px] tracking-[2px] uppercase text-muted mb-1.5">
                Campaign Progress
              </div>
              <div className="h-1 bg-border w-full">
                <div
                  className="h-full bg-red transition-all duration-1000"
                  style={{ width: `${op.impact}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
