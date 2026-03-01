const comms = [
  {
    icon: "\u{1F510}",
    title: "Encrypted Messaging",
    desc: "Signal protocol integration. Separate channels for local, regional, and national coordination. Zero platform dependency.",
  },
  {
    icon: "\u{1F4E1}",
    title: "Mesh Networking",
    desc: "Briar, Meshtastic, goTenna. Practiced monthly. If cell networks go dark during mobilization, we don't go dark with them.",
  },
  {
    icon: "\u{1F6A8}",
    title: "Dead Man's Switch",
    desc: "If key organizers go silent, pre-written action plans auto-distribute to the network. No single point of failure. No leader is irreplaceable.",
  },
];

export default function CommsGrid() {
  return (
    <section className="py-[100px] px-10 max-w-[1200px] mx-auto">
      <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
        Communications
      </div>
      <div className="font-heading text-[40px] max-md:text-[28px] font-black text-white leading-[1.15] mb-6">
        Resilient by design.
      </div>

      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5 mt-10">
        {comms.map((card, i) => (
          <div
            key={i}
            className="bg-card border border-border p-7 text-center transition-colors hover:border-red"
          >
            <div className="text-[32px] mb-4">{card.icon}</div>
            <div className="font-heading text-[14px] font-bold text-white uppercase tracking-[1px] mb-2">
              {card.title}
            </div>
            <div className="text-[13px] text-muted leading-normal">
              {card.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
