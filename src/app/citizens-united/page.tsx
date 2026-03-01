import Link from "next/link";
import CitizensUnitedChart from "@/components/CitizensUnitedChart";
import chartData from "@/data/citizens-united.json";

export const metadata = {
  title: "Citizens United: The Data — Common Defense",
  description: "How the 2010 ruling unleashed trillions in coordinated spending — and what it funded.",
};

export default function CitizensUnitedPage() {
  return (
    <div className="pt-[60px]">
      {/* HERO */}
      <section className="py-[80px] px-10 max-w-[1200px] mx-auto">
        <div className="font-heading text-[12px] text-muted mb-4">
          <Link href="/" className="text-muted no-underline hover:text-white hover:no-underline">Home</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-light">Citizens United</span>
        </div>
        <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
          Follow the Money
        </div>
        <h1 className="font-heading text-[48px] max-md:text-[32px] font-black text-white leading-[1.1] mb-6 uppercase">
          Citizens United: The Data
        </h1>
        <p className="text-[20px] text-light max-w-[700px] leading-[1.7]">
          How the 2010 ruling unleashed trillions in coordinated spending — and what it funded.
        </p>
      </section>

      {/* MAIN CHART */}
      <section className="py-[60px] px-10 max-w-[1200px] mx-auto">
        <CitizensUnitedChart />
      </section>

      {/* KEY STATS */}
      <section className="py-[60px] px-10 max-w-[1200px] mx-auto">
        <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-6">
          Key Statistics
        </div>
        <div className="grid grid-cols-4 max-md:grid-cols-2 gap-6">
          {chartData.keyStats.map((stat, i) => (
            <div key={i} className="bg-card border border-border p-6">
              <div
                className="font-heading text-[36px] font-black"
                style={{ color: stat.color || "#c53030" }}
              >
                {stat.value}
              </div>
              <div className="font-heading text-[13px] text-white font-bold mt-1">
                {stat.label}
              </div>
              <div className="text-[12px] text-muted mt-1">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-[60px] px-10 max-w-[1200px] mx-auto">
        <div className="bg-card border border-border p-10">
          <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
            Methodology
          </div>
          <h2 className="font-heading text-[24px] font-black text-white mb-6">
            {chartData.methodology.title}
          </h2>
          <div className="space-y-3">
            {chartData.methodology.lines.map((line, i) => (
              <p key={i} className="text-[15px] text-light leading-[1.7]">
                {i + 1}. {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* SOURCES */}
      <section className="py-[60px] px-10 max-w-[1200px] mx-auto">
        <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-6">
          Sources
        </div>
        <div className="space-y-2">
          {chartData.sources.map((source, i) => (
            <p key={i} className="text-[14px] text-muted leading-[1.6]">
              &#10003; {source}
            </p>
          ))}
        </div>
        <p className="text-[13px] text-muted mt-6 italic">
          This data is released under Creative Commons Attribution 4.0. Share and remix freely.
        </p>
      </section>

      {/* CTA */}
      <div className="bg-dark border-t border-b border-border py-20 px-10 text-center">
        <h2 className="font-heading text-[32px] max-md:text-[24px] font-black text-white mb-4">
          What Will You Do With This Data?
        </h2>
        <div className="flex gap-4 justify-center flex-wrap mt-6">
          <Link
            href="/resist"
            className="font-heading text-[13px] tracking-[2px] uppercase bg-red text-white px-10 py-4 border-none font-bold hover:bg-red-light transition-all no-underline hover:no-underline inline-block"
          >
            Join the Data Defense Campaign
          </Link>
          <Link
            href="/ice-operations"
            className="font-heading text-[13px] tracking-[2px] uppercase bg-transparent text-white px-10 py-4 border border-white font-bold hover:bg-white/[0.08] transition-all no-underline hover:no-underline inline-block"
          >
            Read ICE Operations Exposé
          </Link>
        </div>
      </div>
    </div>
  );
}
