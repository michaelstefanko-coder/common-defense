export default function CreditsDashboard() {
  const transactions = [
    { desc: "Cooked meals — Chapter meeting (Feb 22)", amount: "+3", type: "plus" },
    { desc: "Drove 3 members to action (Feb 20)", amount: "+2", type: "plus" },
    { desc: "Received legal consult (Feb 18)", amount: "-5", type: "minus" },
    { desc: "Distributed flyers — 4 hours (Feb 15)", amount: "+4", type: "plus" },
    { desc: "Grocery delivery for 2 families (Feb 12)", amount: "+4", type: "plus" },
  ];

  return (
    <section className="py-[100px] px-10 max-w-[1200px] mx-auto">
      <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
        Labor Credits
      </div>
      <div className="font-heading text-[40px] max-md:text-[28px] font-black text-white leading-[1.15] mb-6">
        The currency is the work.
      </div>
      <div className="text-[18px] text-light max-w-[700px] leading-[1.8]">
        One hour of labor for the movement = one credit. No speculation. No trading. No buying your way in. The only way to earn credits is to show up and do the work. Every transaction verified on-chain, every identity protected by zero-knowledge proofs.
      </div>

      <div className="flex items-center gap-10 bg-card border border-border p-8 mt-10 max-md:flex-col">
        <div className="text-center min-w-[160px]">
          <div className="font-heading text-[48px] font-black text-green">47</div>
          <div className="font-heading text-[11px] tracking-[2px] uppercase text-muted">
            Your Credits
          </div>
        </div>
        <div className="flex-1 w-full">
          {transactions.map((tx, i) => (
            <div
              key={i}
              className={`flex justify-between py-2.5 text-[14px] ${
                i < transactions.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="text-light">{tx.desc}</span>
              <span className={`font-heading font-bold ${tx.type === "plus" ? "text-green" : "text-red"}`}>
                {tx.amount}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="font-mono text-[11px] text-muted border border-border p-3 px-4 mt-0 break-all"
        style={{ background: "rgba(255,255,255,0.03)" }}
      >
        <strong className="text-light">Ledger:</strong> 0x7f2c...a3b1 &nbsp;|&nbsp;{" "}
        <strong className="text-light">Network:</strong> Polygon &nbsp;|&nbsp;{" "}
        <strong className="text-light">Last verified:</strong> Block #51,204,887 &nbsp;|&nbsp;{" "}
        <strong className="text-light">Status:</strong>{" "}
        <span className="text-green">&#9679;</span> Synced
      </div>
    </section>
  );
}
