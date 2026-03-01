import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import SectionHeader from "@/components/SectionHeader";
import QuoteBreak from "@/components/QuoteBreak";
import PillarCards from "@/components/PillarCard";
import PledgeForm from "@/components/PledgeForm";
import AidMarketplace from "@/components/AidMarketplace";
import CreditsDashboard from "@/components/CreditsDashboard";
import OrganizerElection from "@/components/OrganizerElection";
import ResistanceToolkit from "@/components/ResistanceOpCard";
import PrivacyWizard from "@/components/PrivacyWizard";
import CommsGrid from "@/components/CommsCard";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />

      {/* THE SITUATION */}
      <section className="py-[100px] px-10 max-w-[1200px] mx-auto" id="about">
        <SectionHeader
          label="The Situation"
          title="This is not a warning.<br/>This is a description."
        />
        <div className="text-[18px] text-light max-w-[700px] leading-[1.8] space-y-6 mt-6">
          <p>
            In January 2026, a Customs and Border Protection officer in Minneapolis shot and killed <Link href="/ice-operations" className="text-red hover:underline">Alex Pretti</Link>, a VA nurse, for standing between the officer and a woman who had been thrown to the ground. Weeks earlier, <Link href="/ice-operations" className="text-red hover:underline">Renée Good</Link> was killed by an ICE agent in the same city. Thousands gathered for vigils the same night. Tens of thousands came the next day.
          </p>
          <p>
            Representatives Ro Khanna and Thomas Massie — a Democrat and a Republican — announced that after reviewing unredacted Epstein files, they had identified at least six powerful men being actively protected by government redactions. The Department of Justice is defying its own transparency statute to keep these names hidden. Khanna and Massie may have to read the names on the House floor under the Constitution&apos;s Speech and Debate clause — the only place in America where telling the truth about the powerful is legally protected.
          </p>
          <p>
            The Supreme Court&apos;s 2010 decision in <Link href="/citizens-united" className="text-red hover:underline">Citizens United v. FEC</Link> legalized the unlimited purchase of American elections by corporations and the ultra-wealthy. In the sixteen years since, the cost of federal elections has more than tripled. The policy preferences of average Americans have a near-zero statistical effect on what becomes law. The policy preferences of economic elites and organized interest groups are the near-perfect predictors.
          </p>
          <p>
            Acting ICE Director Todd Lyons has outlined plans for an <Link href="/ice-operations" className="text-red hover:underline">80,000-bed warehouse detention network</Link> — &ldquo;like Amazon Prime, but with human beings.&rdquo; A $38 billion budget. The conversion of warehouses into mega detention centers in Stafford VA, Hutchins TX, and Hammond IN.
          </p>
          <p>
            <strong className="text-text">
              Federal agents are killing civilians in American cities. The government is shielding the powerful from accountability. The Court has sold the political system to the highest bidder. And in 2028, we face the real possibility that a presidential transition will be subverted. These are not warnings about what could happen. These are descriptions of what has already happened and what is already underway.
            </strong>
          </p>
        </div>
      </section>

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
            When the Supreme Court ruled in <em>Dred Scott v. Sandford</em> that Black Americans could never be citizens and that Congress had no power to restrict slavery in the territories, the political establishment accepted it as settled. Abraham Lincoln did not.
          </p>
          <p>
            Lincoln argued that while the specific parties to the case were bound by the ruling, the Court&apos;s broader political rule was not binding on the American people. He held that a democratic people had the right — and the obligation — to challenge and overturn a corrupt judicial decision through political action. He refused to treat the Court&apos;s word as final. He organized. He ran. He won. And the decision was overturned.
          </p>
          <p>
            <strong className="text-text">
              Citizens United is our generation&apos;s Dred Scott. It is the ruling that formalized the sale of democratic governance to private wealth. And like Dred Scott, it will not be overturned by waiting. It will be overturned by a people who refuse to accept it.
            </strong>
          </p>
        </div>
      </section>

      {/* WHY NOW */}
      <div className="bg-dark border-t border-b border-border">
        <section className="py-[100px] px-10 max-w-[1200px] mx-auto">
          <SectionHeader
            label="Urgency"
            title="Why Now"
          />
          <div className="text-[18px] text-light max-w-[700px] leading-[1.8] space-y-6 mt-6">
            <p>
              Every successful resistance movement in history built its infrastructure <strong className="text-text">before</strong> the crisis, not during it. The Montgomery Bus Boycott worked because the Women&apos;s Political Council had spent years building the carpool network before Rosa Parks sat down. Solidarity in Poland worked because the underground printing presses and communication networks were already in place when martial law was declared. The Danish rescue of Jews in 1943 worked because the social networks for hiding people already existed.
            </p>
            <p>
              The movements that failed — that turned into chaos, that were crushed, that burned bright and disappeared — were the ones that tried to build the plane while flying it.
            </p>
            <p>
              <strong className="text-text">
                We have less than two years before the 2028 presidential election. If the transfer of power is subverted, the window for building organized resistance will have closed. The strike fund must already exist. The local coordinators must already be trained. The mutual aid network must already be running. The mesh communications must already be practiced. The pledges must already be signed.
              </strong>
            </p>
            <p>
              The time to build this was ten years ago. The next best time is right now.
            </p>
          </div>
        </section>
      </div>

      {/* FIVE PILLARS */}
      <section className="py-[100px] px-10 max-w-[1200px] mx-auto" id="strike">
        <SectionHeader
          label="The Platform"
          title="Five pillars. One infrastructure.<br/>Built before the crisis."
        />
        <PillarCards />
      </section>

      <PledgeForm />
      <AidMarketplace />
      <CreditsDashboard />
      <OrganizerElection />
      <ResistanceToolkit />
      <PrivacyWizard />
      <CommsGrid />

      <QuoteBreak
        quote="More than half the people are right. They know what is happening. They know it is wrong. What they do not have — yet — is the organized means to act on what they know."
        attribution="Common Defense is the organized means."
        boldAttribution
      />
    </>
  );
}
