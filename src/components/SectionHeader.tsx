interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <div>
      <div className="font-mono text-[10px] tracking-[4px] uppercase text-red mb-4">
        {"// "}{label}
      </div>
      <div
        className="font-heading text-[40px] max-md:text-[28px] font-black text-white leading-[1.1] mb-6 uppercase"
        style={{ letterSpacing: "-0.5px" }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <div className="font-mono text-[15px] text-light max-w-[700px] leading-[1.8]">
          {subtitle}
        </div>
      )}
    </div>
  );
}
