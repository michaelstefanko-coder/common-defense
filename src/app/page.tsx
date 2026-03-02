import Hero from "@/components/Hero";
import NewsTicker from "@/components/NewsTicker";
import StatsBar from "@/components/StatsBar";
import SectionHeader from "@/components/SectionHeader";
import QuoteBreak from "@/components/QuoteBreak";
import DystopianImage from "@/components/DystopianImage";
import PillarCards from "@/components/PillarCard";
import PledgeForm from "@/components/PledgeForm";
import AidMarketplace from "@/components/AidMarketplace";
import ResistanceToolkit from "@/components/ResistanceOpCard";
import CommsGrid from "@/components/CommsCard";
import CountdownTimer from "@/components/CountdownTimer";
import NewsletterSignup from "@/components/NewsletterSignup";
import ShareButtons from "@/components/ShareButtons";
import Link from "next/link";

export const metadata = {
  title: "Common Defense — Provide for the Common Defence",
  description: "Civic resistance platform against democratic capture. Built to inform, organize, and mobilize citizens.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <NewsTicker />
      <StatsBar />

      {/* THE SITUATION */}
      <section className="py-[100px] px-10 max-w-[1200px] mx-auto" id="about">
        <SectionHeader
          label="The Situation"
          title="Federal agents are killing civilians.<br/>The government is shielding the powerful.<br/>The courts have been captured."
        />
        <div className="text-[18px] text-light max-w-[700px] leading-[1.8] space-y-6 mt-6">
          <p>
            On January 24, 2026, Customs and Border Protection officers in Minneapolis shot and killed <Link href="/ice-operations" className="text-red hover:underline">Alex Pretti</Link>, a 37-year-old VA nurse. Pretti had stepped between agents and a woman they had thrown to the ground. Video from five independent sources — <a href="https://www.bellingcat.com/news/2026/01/25/alex-pretti-analysing-footage-of-minneapolis-cbp-shooting/" target="_blank" rel="noopener noreferrer" className="text-red hover:underline">Bellingcat</a>, <a href="https://edition.cnn.com/2026/01/25/us/video/minneapolis-ice-shooting-alex-pretti-visual-analysis-digvid" target="_blank" rel="noopener noreferrer" className="text-red hover:underline">CNN</a>, <a href="https://www.washingtonpost.com/video/national/what-videos-show-of-the-fatal-minneapolis-shooting/2026/01/25/" target="_blank" rel="noopener noreferrer" className="text-red hover:underline">Washington Post</a>, <a href="https://www.npr.org/2026/01/25/nx-s1-5687384/minneapolis-minnesota-shooting-video-dhs" target="_blank" rel="noopener noreferrer" className="text-red hover:underline">NPR</a>, and <a href="https://abcnews.com/Politics/minute-minute-timeline-fatal-shooting-alex-pretti-federal/story?id=129547199" target="_blank" rel="noopener noreferrer" className="text-red hover:underline">ABC News</a> — proves his firearm was already in agents&apos; hands before they opened fire. Ten shots in under five seconds. No agent has been charged.
          </p>
          <p>
            Three weeks earlier, <Link href="/ice-operations" className="text-red hover:underline">Renée Good</Link> was killed by ICE agent Jonathan Ross in the same city. The video shows her car moving <em>away</em> from the agent. DHS called her vehicle a weapon. Minneapolis Mayor Jacob Frey, after viewing the footage: &ldquo;To ICE, get the fuck out of Minneapolis.&rdquo;
          </p>
          <p>
            Five-year-old <Link href="/ice-operations" className="text-red hover:underline">Liam Ramos</Link> was seized on a suburban driveway while walking home from school, transported 1,300 miles to a Texas detention facility. His family had entered the country legally. Their asylum claim was pending. No deportation order existed. A federal judge ordered his release. DHS responded with retaliatory expedited deportation proceedings.
          </p>
          <p>
            Representatives Ro Khanna and Thomas Massie — a Democrat and a Republican — announced that after reviewing unredacted Epstein files, they identified at least six powerful men being actively protected by government redactions. The Department of Justice is defying its own transparency statute to keep these names hidden.
          </p>
          <p>
            The Supreme Court&apos;s 2010 decision in <Link href="/citizens-united" className="text-red hover:underline">Citizens United v. FEC</Link> legalized the unlimited purchase of American elections. In the sixteen years since, the cost of federal elections has more than tripled — from $750 million to over $9 billion. The policy preferences of average Americans now have a near-zero statistical effect on what becomes law. The preferences of economic elites are the near-perfect predictor.
          </p>
          <p>
            Acting ICE Director Todd Lyons has outlined plans for an <Link href="/ice-operations" className="text-red hover:underline">80,000-bed warehouse detention network</Link> — an <a href="https://www.americanimmigrationcouncil.org/blog/ice-buys-warehouses-immigration-detention/" target="_blank" rel="noopener noreferrer" className="text-red hover:underline">$38.3 billion system</a> he described as &ldquo;like Amazon Prime, but with human beings.&rdquo; Congress gave ICE $45 billion in a single appropriation — more than a decade of normal funding in one pot. ICE has quietly purchased at least seven warehouses exceeding one million square feet each, across Arizona, Georgia, Maryland, Pennsylvania, and Texas.
          </p>
          <p>
            <strong className="text-text">
              This is not a description of a future we must prevent. This is a description of the country we already live in.
            </strong>
          </p>
        </div>
      </section>

      {/* ICE ARREST — child watching from driveway */}
      <DystopianImage
        src="/images/ice-arrest-suburb.jpg"
        alt="ICE agents detaining a man on a suburban driveway while a child watches"
        caption="Suburban driveway. Backpack on the sidewalk. The child watched the entire thing."
        classification="DHS FIELD OPS"
        timestamp="LOCATION REDACTED"
        overlay="dark"
      />

      <QuoteBreak
        quote="Democracy is the recurrent suspicion that more than half of the people are right more than half of the time."
        attribution="E.B. White, 1943"
      />

      {/* WHAT LINCOLN UNDERSTOOD */}
      <section className="py-[100px] px-10 max-w-[1200px] mx-auto">
        <SectionHeader
          label="The Precedent"
          title="What Lincoln Understood"
        />
        <div className="text-[18px] text-light max-w-[700px] leading-[1.8] space-y-6 mt-6">
          <p>
            In 1857, the Supreme Court ruled in <em>Dred Scott v. Sandford</em> that Black Americans could never be citizens and that Congress had no power to restrict slavery in the territories. The political establishment — north and south — accepted it as settled law. Abraham Lincoln did not.
          </p>
          <p>
            Lincoln argued that while the specific parties to the case were bound by the ruling, the Court&apos;s broader political rule was not binding on the American people. He refused to treat a corrupt judicial decision as permanent. He organized. He built a coalition that did not yet exist. He ran for an office he was not expected to win. He won. And the decision was overturned — not by the Court correcting itself, but by a people who refused to accept it.
          </p>
          <p>
            <strong className="text-text">
              Citizens United is our generation&apos;s Dred Scott. It is the ruling that formalized the sale of democratic governance to private wealth. Like Dred Scott, it will not be overturned by waiting. It will be overturned by a people who organize against it.
            </strong>
          </p>
        </div>
      </section>

      {/* EAGLE AT ICE FACILITY — corrupted Americana */}
      <DystopianImage
        src="/images/eagle-ice-facility.jpg"
        alt="Dead bald eagle in the mud outside a DHS-ICE logistics facility"
        caption="Bald eagle. DHS-ICE Facility 07. Logistics access road. No further details available."
        classification="EVIDENCE — DO NOT DISTRIBUTE"
        timestamp="PHOTO ID: REDACTED"
        overlay="blood"
      />

      {/* WHY NOW */}
      <div className="bg-dark border-t border-b border-border">
        <section className="py-[100px] px-10 max-w-[1200px] mx-auto">
          <SectionHeader
            label="Urgency"
            title="Why Now"
          />
          <div className="text-[18px] text-light max-w-[700px] leading-[1.8] space-y-6 mt-6">
            <p>
              Every successful resistance movement in history built its infrastructure <strong className="text-text">before</strong> the crisis, not during it.
            </p>
            <p>
              The Montgomery Bus Boycott worked because the Women&apos;s Political Council had spent years building the carpool network before Rosa Parks sat down. Solidarity in Poland survived martial law because the underground printing presses and communication networks were already in place when the tanks rolled in. The Danish rescue of 7,220 Jews in 1943 succeeded because the social networks for hiding families already existed before the order came.
            </p>
            <p>
              The movements that failed — that turned into chaos, that were crushed, that burned bright and vanished — were the ones that tried to build the plane while flying it.
            </p>
            <p>
              <strong className="text-text">
                We have less than two years before the 2028 presidential election. If the transfer of power is subverted, the window for building organized resistance will have closed. The strike fund must already exist. The local coordinators must already be trained. The mutual aid network must already be running. The mesh communications must already be tested. The pledges must already be signed.
              </strong>
            </p>
            <p>
              The time to build this was ten years ago. The next best time is right now.
            </p>
          </div>
        </section>
      </div>

      {/* FULFILLMENT CENTER — detention infrastructure */}
      <DystopianImage
        src="/images/fulfillment-center.jpg"
        alt="People being led through razor wire into a DHS Regional Intake Fulfillment Center"
        caption="DHS Regional Intake — Expansion Preparedness 2028. &quot;Like Amazon Prime, but with human beings.&quot;"
        classification="INTAKE SURVEILLANCE"
        timestamp="TUE, NOV 14, 2028 — 15:42"
        overlay="dark"
      />

      <CountdownTimer />

      {/* FIVE PILLARS */}
      <section className="py-[100px] px-10 max-w-[1200px] mx-auto" id="strike">
        <SectionHeader
          label="The Platform"
          title="Five pillars. One infrastructure.<br/>Built before the crisis."
        />
        <PillarCards />
      </section>

      {/* I VOTED GRENADE — corrupted democracy */}
      <DystopianImage
        src="/images/i-voted-grenade.jpg"
        alt="Grenade with I Voted sticker on cracked earth"
        caption="This is what they made of your vote."
        classification="EXHIBIT A"
        overlay="blood"
      />

      <PledgeForm />
      <AidMarketplace />

      {/* ACTION TOOLKIT PREVIEW */}
      <section className="py-[100px] px-10 max-md:px-5 max-w-[1200px] mx-auto" id="toolkit">
        <div className="font-mono text-[10px] tracking-[4px] uppercase text-red mb-4">
          {"// "}Action Infrastructure
        </div>
        <div className="font-heading text-[40px] max-md:text-[28px] font-black text-white leading-[1.15] mb-4 uppercase">
          The Toolkit
        </div>
        <div className="text-[17px] text-light max-w-[600px] leading-[1.7] mb-10">
          Five tools built for direct action. Each one works right now, in your browser, with no sign-up required.
        </div>

        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
          <Link href="/toolkit" className="bg-card border border-border p-6 transition-colors hover:border-red no-underline hover:no-underline group">
            <div className="text-[24px] mb-3">{"\u{1F4C4}"}</div>
            <div className="font-heading text-[16px] font-bold text-white mb-2 group-hover:text-red transition-colors">FOIA Request Generator</div>
            <p className="text-[13px] text-muted leading-[1.6]">5 pre-built templates to demand government records. Auto-fills your info. Copy, send, hold them accountable.</p>
          </Link>
          <Link href="/toolkit" className="bg-card border border-border p-6 transition-colors hover:border-red no-underline hover:no-underline group">
            <div className="text-[24px] mb-3">{"\u{1F6E1}\uFE0F"}</div>
            <div className="font-heading text-[16px] font-bold text-white mb-2 group-hover:text-red transition-colors">Data Broker Opt-Out</div>
            <p className="text-[13px] text-muted leading-[1.6]">14 brokers tracked. 9 confirmed ICE feeds. Step-by-step removal guides with progress tracking.</p>
          </Link>
          <Link href="/toolkit" className="bg-card border border-border p-6 transition-colors hover:border-red no-underline hover:no-underline group">
            <div className="text-[24px] mb-3">{"\u{1F512}"}</div>
            <div className="font-heading text-[16px] font-bold text-white mb-2 group-hover:text-red transition-colors">Privacy Hardening</div>
            <p className="text-[13px] text-muted leading-[1.6]">6-step checklist: Signal, VPN, browser config, phone hardening, mesh comms. ~70 minutes total.</p>
          </Link>
          <Link href="/toolkit" className="bg-card border border-border p-6 transition-colors hover:border-red no-underline hover:no-underline group">
            <div className="text-[24px] mb-3">{"\u{1F4B1}"}</div>
            <div className="font-heading text-[16px] font-bold text-white mb-2 group-hover:text-red transition-colors">Labor Credits</div>
            <p className="text-[13px] text-muted leading-[1.6]">Log volunteer work, earn credits, exchange for mutual aid. 12 categories of trackable contributions.</p>
          </Link>
          <Link href="/toolkit" className="bg-card border border-border p-6 transition-colors hover:border-red no-underline hover:no-underline group">
            <div className="text-[24px] mb-3">{"\u{1F5F3}\uFE0F"}</div>
            <div className="font-heading text-[16px] font-bold text-white mb-2 group-hover:text-red transition-colors">Organizer Election</div>
            <p className="text-[13px] text-muted leading-[1.6]">Vote for chapter leadership. One vote per person, anonymous ballot, transparent count.</p>
          </Link>
          <Link href="/toolkit" className="bg-card border border-red/30 p-6 transition-colors hover:border-red no-underline hover:no-underline flex items-center justify-center">
            <div className="text-center">
              <div className="font-heading text-[16px] font-bold text-red mb-1">Open the Toolkit</div>
              <div className="font-mono text-[11px] text-muted tracking-[1px]">All 5 tools &rarr;</div>
            </div>
          </Link>
        </div>
      </section>

      <ResistanceToolkit />
      <CommsGrid />
      <NewsletterSignup />

      {/* SHARE + FINAL QUOTE */}
      <section className="py-12 px-10 max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="font-heading text-[11px] tracking-[3px] uppercase text-muted">
            Share Common Defense
          </div>
          <ShareButtons />
        </div>
      </section>

      <QuoteBreak
        quote="More than half the people are right. They know what is happening. They know it is wrong. What they do not have — yet — is the organized means to act on what they know."
        attribution="Common Defense is the organized means."
        boldAttribution
      />
    </>
  );
}
