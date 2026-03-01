import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-[60px] px-10 pb-10 border-t border-border bg-black text-center">
      <div className="font-heading text-[14px] font-black tracking-[4px] text-white uppercase">
        Common Defense
      </div>
      <div className="text-[14px] italic text-muted mt-2">
        Provide for the common defence.
      </div>

      <div className="mt-6 flex justify-center gap-6 flex-wrap">
        <Link href="/#pledge" className="font-heading text-[11px] tracking-[2px] uppercase text-muted no-underline hover:text-white hover:no-underline">
          Pledge
        </Link>
        <Link href="/#aid" className="font-heading text-[11px] tracking-[2px] uppercase text-muted no-underline hover:text-white hover:no-underline">
          Mutual Aid
        </Link>
        <Link href="/#vote" className="font-heading text-[11px] tracking-[2px] uppercase text-muted no-underline hover:text-white hover:no-underline">
          Organizers
        </Link>
        <Link href="/resist" className="font-heading text-[11px] tracking-[2px] uppercase text-muted no-underline hover:text-white hover:no-underline">
          Resistance
        </Link>
        <Link href="/citizens-united" className="font-heading text-[11px] tracking-[2px] uppercase text-muted no-underline hover:text-white hover:no-underline">
          Citizens United
        </Link>
        <Link href="/ice-operations" className="font-heading text-[11px] tracking-[2px] uppercase text-muted no-underline hover:text-white hover:no-underline">
          ICE Operations
        </Link>
        <Link href="/know-your-rights" className="font-heading text-[11px] tracking-[2px] uppercase text-muted no-underline hover:text-white hover:no-underline">
          Know Your Rights
        </Link>
        <Link href="/#foia" className="font-heading text-[11px] tracking-[2px] uppercase text-muted no-underline hover:text-white hover:no-underline">
          FOIA Tool
        </Link>
        <Link href="/#optout" className="font-heading text-[11px] tracking-[2px] uppercase text-muted no-underline hover:text-white hover:no-underline">
          Data Opt-Out
        </Link>
      </div>

      <div className="mt-10 pt-6 border-t border-border font-heading text-[12px] tracking-[3px] uppercase text-muted">
        <span className="inline-block w-2 h-2 bg-red rounded-full mr-2 animate-pulse" />
        Live from Minneapolis
      </div>
      <div className="text-[12px] text-[#333] mt-4">
        &copy; 2026 Common Defense. Open source. No copyright on resistance.
      </div>
    </footer>
  );
}
