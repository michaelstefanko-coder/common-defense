import Link from "next/link";
import PrintButton from "@/components/PrintButton";
import VideoEmbed from "@/components/VideoEmbed";

export const metadata = {
  title: "Know Your Rights — Common Defense",
  description: "Your constitutional rights during encounters with ICE, CBP, and law enforcement. Printable in 10+ languages.",
};

const rights = [
  {
    title: "You Have the Right to Remain Silent",
    detail: "You do not have to answer questions about where you were born, whether you are a U.S. citizen, or how you entered the country. Say: 'I am exercising my right to remain silent.'",
    amendment: "5th Amendment",
  },
  {
    title: "You Have the Right to Refuse Consent to a Search",
    detail: "ICE and police cannot search you, your home, or your belongings without a warrant signed by a judge. Say: 'I do not consent to a search.'",
    amendment: "4th Amendment",
  },
  {
    title: "You Do Not Have to Open Your Door",
    detail: "ICE cannot enter your home without a judicial warrant (not an ICE administrative warrant — Form I-200). Ask them to slide the warrant under the door. A valid warrant must be signed by a judge and have the correct address.",
    amendment: "4th Amendment",
  },
  {
    title: "You Have the Right to a Lawyer",
    detail: "If you are detained, you have the right to call a lawyer. You have the right to a hearing before an immigration judge. You have the right to contest your deportation.",
    amendment: "6th Amendment",
  },
  {
    title: "You Have the Right to Record",
    detail: "You have the right to film and photograph law enforcement officers in public spaces. This is protected by the First Amendment. Do not interfere with officers, but you may record from a safe distance.",
    amendment: "1st Amendment",
  },
  {
    title: "ICE Cannot Arrest You Based on Race or Ethnicity",
    detail: "ICE and CBP cannot stop, detain, or arrest you based solely on your race, ethnicity, or appearance. If they do, document everything and report to a lawyer.",
    amendment: "14th Amendment",
  },
  {
    title: "You Have the Right to Due Process",
    detail: "Even non-citizens in the United States have due process rights. The government cannot deport you without following legal procedures, including a hearing before a judge.",
    amendment: "5th & 14th Amendments",
  },
  {
    title: "You Have the Right to Contact Your Consulate",
    detail: "If you are a foreign national detained by ICE or police, you have the right to contact your country's consulate. Law enforcement is required to inform you of this right.",
    amendment: "Vienna Convention",
  },
];

const emergencyNumbers = [
  { name: "National Immigration Legal Services", number: "1-800-354-0365" },
  { name: "ACLU Immigrants' Rights", number: "aclu.org/issues/immigrants-rights" },
  { name: "United We Dream Hotline", number: "1-844-363-1423" },
  { name: "National Immigrant Women's Advocacy Project", number: "1-202-274-4457" },
];

export default function KnowYourRightsPage() {
  return (
    <div className="pt-[60px]">
      {/* HERO */}
      <section className="py-[80px] px-10 max-w-[1000px] mx-auto">
        <div className="font-heading text-[12px] text-muted mb-4">
          <Link href="/" className="text-muted no-underline hover:text-white hover:no-underline">Home</Link>
          <span className="mx-2">&gt;</span>
          <Link href="/resist" className="text-muted no-underline hover:text-white hover:no-underline">Resist</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-light">Know Your Rights</span>
        </div>
        <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
          Constitutional Rights
        </div>
        <h1 className="font-heading text-[48px] max-md:text-[32px] font-black text-white leading-[1.1] mb-6 uppercase">
          Know Your Rights
        </h1>
        <p className="text-[20px] text-light max-w-[700px] leading-[1.7]">
          Your rights during encounters with ICE, CBP, and law enforcement. Memorize these. Share them. Print them.
        </p>
        <div className="mt-6 flex gap-3 flex-wrap">
          <PrintButton />
          <Link
            href="/resist"
            className="font-heading text-[13px] tracking-[2px] uppercase bg-transparent text-white px-10 py-4 border border-white font-bold hover:bg-white/[0.08] transition-all no-underline hover:no-underline inline-block"
          >
            Back to Resistance Toolkit
          </Link>
        </div>
      </section>

      {/* RIGHTS CARDS */}
      <section className="py-[60px] px-10 max-w-[1000px] mx-auto">
        <div className="space-y-6">
          {rights.map((right, i) => (
            <div key={i} className="bg-card border border-border p-8 print:border-black print:bg-white">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="font-heading text-[10px] tracking-[2px] uppercase text-red mb-2 print:text-black">
                    {right.amendment}
                  </div>
                  <h3 className="font-heading text-[20px] font-bold text-white mb-4 print:text-black">
                    {right.title}
                  </h3>
                  <p className="text-[16px] text-light leading-[1.8] print:text-black">
                    {right.detail}
                  </p>
                </div>
                <div className="font-heading text-[36px] font-black text-border print:text-gray-300">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT TO DO IF DETAINED */}
      <section className="py-[60px] px-10 max-w-[1000px] mx-auto border-t border-border">
        <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
          If You Are Detained
        </div>
        <h2 className="font-heading text-[36px] max-md:text-[24px] font-black text-white leading-[1.15] mb-8">
          Step-by-Step Protocol
        </h2>
        <div className="space-y-6">
          {[
            { step: "1", title: "Stay calm. Do not run.", desc: "Running gives agents justification for pursuit and escalation. Stay where you are. Keep your hands visible." },
            { step: "2", title: "Say: 'I am exercising my right to remain silent.'", desc: "Do not answer questions about your immigration status, country of birth, or how you entered the US. Anything you say can be used against you." },
            { step: "3", title: "Say: 'I do not consent to a search.'", desc: "If they search you anyway, do not physically resist. State clearly and repeatedly that you do not consent. This preserves your legal rights." },
            { step: "4", title: "Ask: 'Am I free to go?'", desc: "If they say yes, walk away calmly. If they say no, you are being detained. Continue exercising your right to remain silent." },
            { step: "5", title: "Ask: 'I want to speak to a lawyer.'", desc: "You have the right to legal representation. If you cannot afford a lawyer, ask for a list of free legal service providers." },
            { step: "6", title: "Memorize this number: 1-800-354-0365", desc: "National Immigration Legal Services hotline. Call as soon as possible after any ICE encounter." },
            { step: "7", title: "Do NOT sign anything.", desc: "Do not sign any documents without a lawyer present. Signing a voluntary departure order waives your right to a hearing." },
            { step: "8", title: "Document everything.", desc: "Remember badge numbers, agency names, vehicle descriptions, time, and location. Write it down as soon as possible." },
          ].map((item) => (
            <div key={item.step} className="flex gap-6 items-start">
              <div className="font-heading text-[28px] font-black text-red min-w-[40px] text-center">
                {item.step}
              </div>
              <div>
                <div className="font-heading text-[16px] font-bold text-white mb-1">
                  {item.title}
                </div>
                <div className="text-[15px] text-light leading-[1.7]">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EMERGENCY NUMBERS */}
      <section className="py-[60px] px-10 max-w-[1000px] mx-auto border-t border-border">
        <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-6">
          Emergency Resources
        </div>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
          {emergencyNumbers.map((item, i) => (
            <div key={i} className="bg-card border border-border p-6">
              <div className="font-heading text-[14px] font-bold text-white">{item.name}</div>
              <div className="font-heading text-[18px] text-red mt-2">{item.number}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ACLU KNOW YOUR RIGHTS VIDEOS */}
      <section className="py-[60px] px-10 max-w-[1000px] mx-auto border-t border-border print:hidden">
        <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
          Watch
        </div>
        <h2 className="font-heading text-[36px] max-md:text-[24px] font-black text-white leading-[1.15] mb-4">
          ACLU &ldquo;We Have Rights&rdquo; Videos
        </h2>
        <p className="text-[16px] text-light max-w-[700px] leading-[1.7] mb-8">
          Created by the ACLU and Brooklyn Defender Services. Based on true stories. Narrated by Diane Guerrero, Kumail Nanjiani, Linda Sarsour, and others. Available in 7 languages.
        </p>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
          <div>
            <div className="font-heading text-[13px] font-bold text-white mb-3">
              When ICE Is at Your Door
            </div>
            <VideoEmbed
              src="https://www.youtube.com/embed/5ExgUmgEYf8"
              title="ACLU: When ICE Is at Your Door (Spanish)"
            />
            <p className="text-[12px] text-muted mt-2">Spanish — Narrated by Diane Guerrero</p>
          </div>
          <div>
            <div className="font-heading text-[13px] font-bold text-white mb-3">
              When ICE Is Inside Your Home
            </div>
            <VideoEmbed
              src="https://www.youtube.com/embed/qZhKv93wOfs"
              title="ACLU: When ICE Is Inside Your Home (Spanish)"
            />
            <p className="text-[12px] text-muted mt-2">Spanish — Rights during search &amp; seizure</p>
          </div>
          <div>
            <div className="font-heading text-[13px] font-bold text-white mb-3">
              When ICE Stops You in the Community
            </div>
            <VideoEmbed
              src="https://www.youtube.com/embed/jNBBJs0ZLs0"
              title="ACLU: ICE in Our Communities (Spanish)"
            />
            <p className="text-[12px] text-muted mt-2">Spanish — In the street, at work, in court</p>
          </div>
          <div>
            <div className="font-heading text-[13px] font-bold text-white mb-3">
              If ICE Arrests You
            </div>
            <VideoEmbed
              src="https://www.youtube.com/embed/tmgHjwZyX5A"
              title="ACLU: If ICE Arrests Us (Spanish)"
            />
            <p className="text-[12px] text-muted mt-2">Spanish — What to do if arrested by ICE</p>
          </div>
        </div>

        <div className="mt-8 bg-card border border-border p-6">
          <div className="font-heading text-[12px] text-muted tracking-[1px] mb-2">
            AVAILABLE IN 7 LANGUAGES
          </div>
          <p className="text-[14px] text-light leading-[1.7]">
            All videos are available in English, Spanish, French, Urdu, Arabic, Haitian Creole, Russian, and Mandarin.
            Visit <a href="https://www.aclu.org/we-have-rights" target="_blank" rel="noopener noreferrer" className="text-red hover:underline">aclu.org/we-have-rights</a> for the full series.
          </p>
        </div>
      </section>

      {/* WALLET CARD */}
      <section className="py-[60px] px-10 max-w-[1000px] mx-auto border-t border-border">
        <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-6">
          Printable Wallet Card
        </div>
        <div className="bg-card border-2 border-red p-8 max-w-[500px] print:border-black">
          <div className="font-heading text-[16px] font-bold text-white text-center mb-4 print:text-black">
            KNOW YOUR RIGHTS — WALLET CARD
          </div>
          <div className="text-[12px] text-light leading-[1.8] space-y-2 print:text-black">
            <p>&#8226; I have the right to remain silent.</p>
            <p>&#8226; I do not consent to a search.</p>
            <p>&#8226; I want to speak to a lawyer.</p>
            <p>&#8226; I will not sign anything without legal counsel.</p>
            <p>&#8226; Am I free to go?</p>
          </div>
          <div className="text-[11px] text-red mt-4 text-center font-heading font-bold print:text-black">
            Emergency: 1-800-354-0365
          </div>
        </div>
        <p className="text-[13px] text-muted mt-4">
          Cut along the border. Keep in your wallet. Share with your community.
        </p>
      </section>

      {/* CTA */}
      <div className="bg-dark border-t border-b border-border py-20 px-10 text-center print:hidden">
        <div className="flex gap-4 justify-center flex-wrap">
          <PrintButton />
          <Link
            href="/resist"
            className="font-heading text-[13px] tracking-[2px] uppercase bg-transparent text-white px-10 py-4 border border-white font-bold hover:bg-white/[0.08] transition-all no-underline hover:no-underline inline-block"
          >
            Join Know-Your-Rights Campaign
          </Link>
        </div>
      </div>
    </div>
  );
}
