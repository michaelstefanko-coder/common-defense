interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <div>
      <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
        {label}
      </div>
      <div
        className="font-heading text-[40px] max-md:text-[28px] font-black text-white leading-[1.15] mb-6"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <div className="text-[18px] text-light max-w-[700px] leading-[1.8]">
          {subtitle}
        </div>
      )}
    </div>
  );
}
