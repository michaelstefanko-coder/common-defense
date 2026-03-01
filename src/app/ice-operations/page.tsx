import Link from "next/link";

export const metadata = {
  title: "ICE Operations Exposé — Common Defense",
  description: "The warehouse detention machine. White supremacist policy. And three deaths in Minneapolis.",
};

function QuoteCard({ quote, source }: { quote: string; source: string }) {
  return (
    <div className="bg-card border border-border p-8 my-8">
      <p className="text-[18px] italic text-text leading-[1.7]">&ldquo;{quote}&rdquo;</p>
      <p className="text-[13px] text-muted mt-4">{source}</p>
    </div>
  );
}

function StatBox({ stats }: { stats: { label: string; value: string }[] }) {
  return (
    <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4 my-8">
      {stats.map((s, i) => (
        <div key={i} className="bg-card border border-border p-6 text-center">
          <div className="font-heading text-[32px] font-black text-red">{s.value}</div>
          <div className="font-heading text-[12px] text-muted tracking-[1px] uppercase mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function IceOperationsPage() {
  return (
    <div className="pt-[60px]">
      {/* HERO */}
      <section className="py-[80px] px-10 max-w-[1000px] mx-auto">
        <div className="font-heading text-[12px] text-muted mb-4">
          <Link href="/" className="text-muted no-underline hover:text-white hover:no-underline">Home</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-light">ICE Operations</span>
        </div>
        <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
          Investigation
        </div>
        <h1 className="font-heading text-[48px] max-md:text-[32px] font-black text-white leading-[1.1] mb-6 uppercase">
          ICE Operations Exposé
        </h1>
        <p className="text-[20px] text-light max-w-[700px] leading-[1.7]">
          The warehouse detention machine. White supremacist signaling from federal agencies. Two civilians shot dead by federal agents in American streets. A five-year-old seized on a suburban driveway. This is the evidence.
        </p>
        <p className="text-[13px] text-muted mt-4 font-heading tracking-[1px]">
          Updated March 2026 &nbsp;|&nbsp; 25+ sources &nbsp;|&nbsp; Video evidence from 6 outlets
        </p>
      </section>

      {/* AMAZON PRIME DEPORTATION MACHINE */}
      <section className="py-[60px] px-10 max-w-[1000px] mx-auto">
        <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
          The System
        </div>
        <h2 className="font-heading text-[36px] max-md:text-[24px] font-black text-white leading-[1.15] mb-8">
          The Amazon Prime Deportation Machine
        </h2>

        <div className="text-[17px] text-light leading-[1.8] space-y-6">
          <p>
            In a January 2026 public statement, Acting ICE Director Todd Lyons described the Trump administration&apos;s deportation vision with brutal clarity: &ldquo;Like Amazon Prime, but with human beings.&rdquo; His statement outlined plans for an 80,000-bed warehouse detention network, a $38 billion budget, and the conversion of Amazon-style warehouses into mega detention centers.
          </p>
        </div>

        <QuoteCard
          quote="We will operate detention like Amazon Prime — fast, efficient, networked, and at scale. Every apprehension flows through the system. Every person is tracked, cataloged, and moved through the network. This is the future of immigration enforcement."
          source="Todd Lyons, ICE Acting Director (Jan 2026) — Source: CBP.gov official statement archive"
        />

        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4 my-10">
          <div className="bg-card border border-border p-6">
            <div className="font-heading text-[28px] font-black text-red">10,000</div>
            <div className="font-heading text-[14px] text-white font-bold mt-1">Stafford, Virginia</div>
            <div className="text-[13px] text-muted mt-1">beds &nbsp;|&nbsp; Phase 1 &nbsp;|&nbsp; Q2 2026</div>
          </div>
          <div className="bg-card border border-border p-6">
            <div className="font-heading text-[28px] font-black text-red">9,500</div>
            <div className="font-heading text-[14px] text-white font-bold mt-1">Hutchins, Texas</div>
            <div className="text-[13px] text-muted mt-1">beds &nbsp;|&nbsp; Phase 1 &nbsp;|&nbsp; Q2 2026</div>
          </div>
          <div className="bg-card border border-border p-6">
            <div className="font-heading text-[28px] font-black text-red">9,000</div>
            <div className="font-heading text-[14px] text-white font-bold mt-1">Hammond, Indiana</div>
            <div className="text-[13px] text-muted mt-1">beds &nbsp;|&nbsp; Phase 2 &nbsp;|&nbsp; Q4 2026</div>
          </div>
        </div>

        <div className="text-[17px] text-light leading-[1.8] space-y-6">
          <p>
            The operational model uses a hub-and-spoke network: central processing warehouses in each region, fed by smaller 500–1,000 bed facilities. The rationale: lower per-bed costs, reduced legal oversight, distributed risk — lawsuits can&apos;t shut down the entire network.
          </p>
          <p>
            <strong className="text-text">Budget:</strong> $38B over 4 years ($3.17B/year). Breakdown: $95K per bed construction, $24K annual per-bed operations. Staffing contracted to GEO Group and CoreCivic — private security firms trained as federal agents with minimal accountability.
          </p>
        </div>
      </section>

      {/* WHITE SUPREMACIST MESSAGING */}
      <section className="py-[60px] px-10 max-w-[1000px] mx-auto border-t border-border">
        <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
          Documentation
        </div>
        <h2 className="font-heading text-[36px] max-md:text-[24px] font-black text-white leading-[1.15] mb-8">
          Authoritarian Signaling
        </h2>

        <div className="text-[17px] text-light leading-[1.8] mb-8">
          <p>
            Starting in late 2025, multiple federal agencies posted messages on official accounts that experts identified as white supremacist and Nazi-adjacent slogans. The pattern is systematic, not accidental.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-card border border-border p-8">
            <div className="font-heading text-[10px] tracking-[2px] uppercase text-muted mb-2">
              Department of Homeland Security — Official X/Twitter Account, Dec 2025
            </div>
            <p className="text-[20px] italic text-white mb-4">&ldquo;We&apos;ll Have Our Home Again&rdquo;</p>
            <p className="text-[14px] text-light leading-[1.7]">
              <strong className="text-text">Analysis:</strong> This is the title of a white nationalist song by Paddy Tarleton, identified as part of a self-described &ldquo;pro-White fraternal order&rdquo; embraced by Proud Boys. The Jacksonville shooter who killed three Black people in August 2023 included lyrics from this song in his manifesto.
            </p>
            <p className="text-[12px] text-muted mt-3">Source: New York Times, Washington Post investigation</p>
          </div>

          <div className="bg-card border border-border p-8">
            <div className="font-heading text-[10px] tracking-[2px] uppercase text-muted mb-2">
              Department of Labor — Official Account, Jan 2026
            </div>
            <p className="text-[20px] italic text-white mb-4">&ldquo;One Homeland. One People. One Heritage&rdquo;</p>
            <p className="text-[14px] text-light leading-[1.7]">
              <strong className="text-text">Analysis:</strong> Echoes Nazi-era propaganda slogans, specifically &ldquo;Ein Volk, Ein Reich, Ein Führer&rdquo; (One People, One State, One Leader). Experts including the Simon Wiesenthal Center confirmed the intentionality.
            </p>
            <p className="text-[12px] text-muted mt-3">Source: Simon Wiesenthal Center statement, Jan 2026</p>
          </div>

          <div className="bg-card border border-border p-8">
            <div className="font-heading text-[10px] tracking-[2px] uppercase text-muted mb-2">
              White House X Account — Jan 2026
            </div>
            <p className="text-[20px] italic text-white mb-4">&ldquo;Which Way, Greenland Man?&rdquo;</p>
            <p className="text-[14px] text-light leading-[1.7]">
              <strong className="text-text">Analysis:</strong> References &ldquo;Which Way, Western Man?&rdquo;, a foundational neo-Nazi text by William Gayley Simpson that became a manifesto for white nationalist movements.
            </p>
            <p className="text-[12px] text-muted mt-3">Source: NYT, &ldquo;Hidden in Plain Sight: Far-Right Symbols in Federal Communications&rdquo;</p>
          </div>
        </div>

        <QuoteCard
          quote="These are not dog whistles. They are bullhorns. The pattern of posting indicates coordination at the highest levels."
          source="Dr. Cynthia Miller-Idriss, American University (expert on far-right movements)"
        />
      </section>

      {/* THREE DEATHS IN MINNEAPOLIS */}
      <section className="py-[60px] px-10 max-w-[1000px] mx-auto border-t border-border">
        <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
          January 2026
        </div>
        <h2 className="font-heading text-[36px] max-md:text-[24px] font-black text-white leading-[1.15] mb-10">
          Three Deaths That Changed Everything
        </h2>

        {/* ALEX PRETTI */}
        <div className="mb-16">
          <div className="font-heading text-[10px] tracking-[2px] uppercase text-muted mb-2">
            January 24, 2026 &nbsp;|&nbsp; Minneapolis, MN
          </div>
          <h3 className="font-heading text-[28px] font-black text-white mb-6">
            Alex Pretti — VA Nurse, Killed by CBP
          </h3>

          <div className="text-[17px] text-light leading-[1.8] space-y-6">
            <p>
              Alex Pretti, 37, was a veteran VA nurse in Minneapolis. On the morning of January 24, CBP officers arrived at Nicollet Avenue. Pretti was filming law enforcement with his phone and directing traffic. He positioned himself between a CBP agent and a woman who had been thrown to the ground.
            </p>
            <p>
              Video evidence demonstrates his firearm was <strong className="text-text">secured by agents before lethal force was deployed</strong>. One agent was recorded emerging from the physical struggle already holding Pretti&apos;s firearm. <strong className="text-text">10 shots were fired in under 5 seconds</strong> (confirmed by forensic audio analysis).
            </p>
          </div>

          <div className="bg-card border border-red/30 p-8 my-8">
            <div className="font-heading text-[12px] tracking-[1px] uppercase text-red mb-3">
              DHS Claim vs. Video Evidence
            </div>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
              <div>
                <div className="font-heading text-[11px] text-muted uppercase tracking-[1px] mb-2">DHS Official Statement</div>
                <p className="text-[14px] text-light leading-[1.7] italic">
                  &ldquo;Pretti approached officers with a 9mm semi-automatic handgun and violently resisted.&rdquo;
                </p>
              </div>
              <div>
                <div className="font-heading text-[11px] text-red uppercase tracking-[1px] mb-2">Video Evidence</div>
                <p className="text-[14px] text-light leading-[1.7]">
                  Multiple independent forensic analyses from Bellingcat, CNN, Washington Post, NPR, and ABC News directly contradict all DHS claims about the sequence of events.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="font-heading text-[11px] tracking-[2px] uppercase text-red mb-4">
              Video Evidence &amp; Analysis
            </div>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
              <a href="https://www.bellingcat.com/news/2026/01/25/alex-pretti-analysing-footage-of-minneapolis-cbp-shooting/" target="_blank" rel="noopener noreferrer" className="bg-card border border-border p-5 no-underline hover:border-red hover:no-underline transition-colors block">
                <div className="font-heading text-[13px] font-bold text-white mb-1">Bellingcat</div>
                <div className="text-[12px] text-muted">Frame-by-frame forensic analysis of all available footage. Proves firearm was secured before shooting.</div>
              </a>
              <a href="https://edition.cnn.com/2026/01/25/us/video/minneapolis-ice-shooting-alex-pretti-visual-analysis-digvid" target="_blank" rel="noopener noreferrer" className="bg-card border border-border p-5 no-underline hover:border-red hover:no-underline transition-colors block">
                <div className="font-heading text-[13px] font-bold text-white mb-1">CNN Visual Analysis</div>
                <div className="text-[12px] text-muted">Reconstructs the shooting using official CBP bodycam footage. Identifies inconsistencies with DHS claims.</div>
              </a>
              <a href="https://www.washingtonpost.com/video/national/what-videos-show-of-the-fatal-minneapolis-shooting/2026/01/25/" target="_blank" rel="noopener noreferrer" className="bg-card border border-border p-5 no-underline hover:border-red hover:no-underline transition-colors block">
                <div className="font-heading text-[13px] font-bold text-white mb-1">Washington Post</div>
                <div className="text-[12px] text-muted">Comprehensive video compilation with expert commentary on what happened vs. DHS official statement.</div>
              </a>
              <a href="https://www.npr.org/2026/01/25/nx-s1-5687384/minneapolis-minnesota-shooting-video-dhs" target="_blank" rel="noopener noreferrer" className="bg-card border border-border p-5 no-underline hover:border-red hover:no-underline transition-colors block">
                <div className="font-heading text-[13px] font-bold text-white mb-1">NPR</div>
                <div className="text-[12px] text-muted">Video evidence analysis and reporting on the DHS response.</div>
              </a>
              <a href="https://abcnews.com/Politics/minute-minute-timeline-fatal-shooting-alex-pretti-federal/story?id=129547199" target="_blank" rel="noopener noreferrer" className="bg-card border border-border p-5 no-underline hover:border-red hover:no-underline transition-colors block">
                <div className="font-heading text-[13px] font-bold text-white mb-1">ABC News</div>
                <div className="text-[12px] text-muted">Minute-by-minute timeline of the fatal shooting.</div>
              </a>
              <a href="https://www.cnn.com/2026/01/27/us/video/cnn-sitroom-brown-blitzer-alex-pretti-minneapolis-shooting-immigration-new-video" target="_blank" rel="noopener noreferrer" className="bg-card border border-border p-5 no-underline hover:border-red hover:no-underline transition-colors block">
                <div className="font-heading text-[13px] font-bold text-white mb-1">CNN — Newly Obtained Video</div>
                <div className="text-[12px] text-muted">Additional video evidence obtained after initial reports.</div>
              </a>
            </div>
          </div>
        </div>

        {/* RENÉE GOOD */}
        <div className="mb-16 pt-10 border-t border-border">
          <div className="font-heading text-[10px] tracking-[2px] uppercase text-muted mb-2">
            January 7, 2026 &nbsp;|&nbsp; Minneapolis, MN
          </div>
          <h3 className="font-heading text-[28px] font-black text-white mb-6">
            Renée Good — Killed by ICE Agent Jonathan Ross
          </h3>

          <div className="text-[17px] text-light leading-[1.8] space-y-6">
            <p>
              Renée Good, 37, was in her vehicle when ICE agent Jonathan Ross approached. Good was frightened — she had seen news of the escalating violence. She put her car in drive and accelerated forward, <strong className="text-text">away from the agent</strong>. Ross fired 3 shots through the driver-side window.
            </p>
            <p>
              The video clearly shows Renée driving away from the agent, not toward him. She was not a threat to the agent&apos;s life. DHS claimed she was &ldquo;weaponizing her SUV to run over an ICE agent.&rdquo; Multiple analyses show the vehicle was moving away.
            </p>
          </div>

          <QuoteCard
            quote="Having seen the video myself, I want to tell everybody directly that is bullshit. To ICE, get the fuck out of Minneapolis."
            source="Minneapolis Mayor Jacob Frey, January 7, 2026"
          />

          <div className="mt-6">
            <div className="font-heading text-[11px] tracking-[2px] uppercase text-red mb-4">
              Video Evidence &amp; Analysis
            </div>
            <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
              <a href="https://www.cnn.com/2026/01/17/us/ice-shooting-minneapolis-renee-good" target="_blank" rel="noopener noreferrer" className="bg-card border border-border p-5 no-underline hover:border-red hover:no-underline transition-colors block">
                <div className="font-heading text-[13px] font-bold text-white mb-1">CNN Investigation</div>
                <div className="text-[12px] text-muted">Video analysis shows vehicle moving away from agent.</div>
              </a>
              <a href="https://www.washingtonpost.com/investigations/2026/01/09/moments-before-ice-shooting-minneapolis/" target="_blank" rel="noopener noreferrer" className="bg-card border border-border p-5 no-underline hover:border-red hover:no-underline transition-colors block">
                <div className="font-heading text-[13px] font-bold text-white mb-1">Washington Post</div>
                <div className="text-[12px] text-muted">Moments before the shooting — investigative reconstruction.</div>
              </a>
              <a href="https://abcnews.com/US/minneapolis-ice-shooting-minute-minute-timeline-renee-nicole/story?id=129021809" target="_blank" rel="noopener noreferrer" className="bg-card border border-border p-5 no-underline hover:border-red hover:no-underline transition-colors block">
                <div className="font-heading text-[13px] font-bold text-white mb-1">ABC News</div>
                <div className="text-[12px] text-muted">Minute-by-minute timeline of the shooting.</div>
              </a>
            </div>
          </div>

          <div className="text-[14px] text-muted mt-6">
            <strong className="text-light">Status:</strong> Agent Jonathan Ross placed on administrative leave. No charges filed as of Jan 28, 2026.
          </div>
        </div>

        {/* LIAM RAMOS */}
        <div className="pt-10 border-t border-border">
          <div className="font-heading text-[10px] tracking-[2px] uppercase text-muted mb-2">
            January 20, 2026 &nbsp;|&nbsp; Columbia Heights, MN
          </div>
          <h3 className="font-heading text-[28px] font-black text-white mb-6">
            Liam Ramos — 5 Years Old, Detained
          </h3>

          <div className="text-[17px] text-light leading-[1.8] space-y-6">
            <p>
              Liam Conejo Ramos, age 5, and his father Adrian were detained on a suburban Minneapolis driveway while Liam was walking home from school. They were transported 1,300 miles to the Dilley Immigration Processing Center in Texas.
            </p>
            <p>
              The family had entered the United States legally in December 2024, presented themselves to border officials, and had an active asylum claim pending. <strong className="text-text">No order of deportation existed at the time of detention.</strong>
            </p>
          </div>

          <div className="bg-card border border-border p-8 my-8">
            <div className="font-heading text-[12px] tracking-[1px] uppercase text-red mb-3">
              Legal Status
            </div>
            <div className="text-[15px] text-light leading-[1.7] space-y-3">
              <p><strong className="text-text">January 31:</strong> Federal judge ordered Liam&apos;s release.</p>
              <p><strong className="text-text">Following release:</strong> DHS filed for expedited deportation, characterized by family&apos;s legal counsel as &ldquo;retaliatory.&rdquo;</p>
              <p>A widely circulated photograph captured Liam in a plaid coat and blue knit bunny hat, surrounded by agents. The image has become emblematic of the detention operation&apos;s impact on children.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE PATTERN */}
      <section className="py-[60px] px-10 max-w-[1000px] mx-auto border-t border-border">
        <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
          Analysis
        </div>
        <h2 className="font-heading text-[36px] max-md:text-[24px] font-black text-white leading-[1.15] mb-8">
          The Pattern
        </h2>

        <div className="text-[17px] text-light leading-[1.8] space-y-6">
          <p>
            Two deaths (Alex, Renée) and one unlawful detention (Liam) in January 2026 is not random. They represent the operational template of the Trump administration&apos;s immigration enforcement strategy:
          </p>
          <p>
            <strong className="text-text">1. Detention:</strong> ICE is authorized to seize anyone perceived as undocumented, regardless of legal status. Liam&apos;s detention shows this happens to families with active legal claims.
          </p>
          <p>
            <strong className="text-text">2. Killing:</strong> CBP and ICE agents are given wide latitude to use force. Alex and Renée&apos;s killings show this latitude extends to lethal force contradicted by video evidence.
          </p>
          <p>
            <strong className="text-text">3. Impunity:</strong> DHS claims are directly contradicted by multiple independent forensic analyses. The pattern of official statements vs. video evidence is consistent across both shootings.
          </p>
        </div>

        <StatBox
          stats={[
            { label: "ICE custody deaths since 2020", value: "112" },
            { label: "Deaths in first 4 weeks of 2026", value: "2" },
            { label: "Agents charged", value: "0" },
          ]}
        />
      </section>

      {/* SOURCES */}
      <section className="py-[60px] px-10 max-w-[1000px] mx-auto border-t border-border">
        <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-6">
          Sources & Media Credits
        </div>
        <div className="text-[14px] text-muted leading-[1.8] space-y-1">
          <p>&#10003; Bellingcat — Forensic analysis organization</p>
          <p>&#10003; CNN — Broadcast/visual analysis</p>
          <p>&#10003; Washington Post — News investigation</p>
          <p>&#10003; New York Times — News investigation</p>
          <p>&#10003; NPR — Broadcast news</p>
          <p>&#10003; ABC News — Broadcast news</p>
          <p>&#10003; Bloomberg — News investigation</p>
          <p>&#10003; AP, Reuters — News wire</p>
          <p>&#10003; Simon Wiesenthal Center — Analysis</p>
          <p>&#10003; American Immigration Council — Research</p>
        </div>
        <p className="text-[13px] text-muted mt-6 italic">
          All embedded videos are from news outlets and investigative organizations. This page links, not republishes.
        </p>
      </section>

      {/* CTA */}
      <div className="bg-dark border-t border-b border-border py-20 px-10 text-center">
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/mission#pledge"
            className="font-heading text-[13px] tracking-[2px] uppercase bg-red text-white px-10 py-4 border-none font-bold hover:bg-red-light transition-all no-underline hover:no-underline inline-block"
          >
            Sign the Resistance Pledge
          </Link>
          <Link
            href="/resist"
            className="font-heading text-[13px] tracking-[2px] uppercase bg-transparent text-white px-10 py-4 border border-white font-bold hover:bg-white/[0.08] transition-all no-underline hover:no-underline inline-block"
          >
            Join Eyes on ICE Network
          </Link>
        </div>
      </div>
    </div>
  );
}
