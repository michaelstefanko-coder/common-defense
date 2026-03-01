"use client";

import { useState, useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useToast } from "./Toast";

interface FoiaTemplate {
  id: string;
  agency: string;
  topic: string;
  description: string;
  template: string;
}

const foiaTemplates: FoiaTemplate[] = [
  {
    id: "foia-ice-local",
    agency: "ICE / ERO",
    topic: "Local ICE Operations",
    description: "Request records of ICE enforcement actions in your city/county, including arrests, detentions, and cooperation with local law enforcement.",
    template: `Dear FOIA Officer,

Pursuant to the Freedom of Information Act, 5 U.S.C. § 552, I request access to and copies of the following records from U.S. Immigration and Customs Enforcement (ICE), Enforcement and Removal Operations (ERO):

1. All records of ICE enforcement actions conducted in [CITY/COUNTY], [STATE] between January 1, 2025 and the date of this request, including but not limited to:
   a. Arrest reports and operational summaries
   b. Detainer requests (Form I-247) issued to local law enforcement
   c. Records of cooperation between ICE and local police departments

2. Any memoranda of understanding (MOUs) or 287(g) agreements between ICE and local law enforcement agencies in [CITY/COUNTY], [STATE].

3. Records of complaints filed against ICE agents operating in [CITY/COUNTY], [STATE] during this period.

I request a waiver of all fees associated with this request, as the disclosure of the requested information is in the public interest and is not primarily in my commercial interest. This information will contribute to public understanding of ICE operations in our community.

If my request is denied in whole or in part, I ask that you justify all deletions or refusals by reference to specific exemptions of the Act.

I expect a response within 20 business days as required by law.

Sincerely,
[YOUR_NAME]
[YOUR_ADDRESS]
[YOUR_EMAIL]
[DATE]`,
  },
  {
    id: "foia-surveillance",
    agency: "DHS / ICE",
    topic: "Surveillance Technology Contracts",
    description: "Request records of contracts between ICE/DHS and surveillance technology companies including Palantir, Clearview AI, and others.",
    template: `Dear FOIA Officer,

Pursuant to the Freedom of Information Act, 5 U.S.C. § 552, I request access to and copies of the following records:

1. All contracts, purchase orders, task orders, and modifications between the Department of Homeland Security (including ICE, CBP, and component agencies) and the following companies, executed between January 1, 2020 and the date of this request:
   a. Palantir Technologies
   b. Clearview AI
   c. Babel Street
   d. Pen-Link
   e. Thomson Reuters / CLEAR
   f. LexisNexis Risk Solutions

2. All privacy impact assessments (PIAs) and data use agreements related to the above contracts.

3. All internal communications regarding the deployment of facial recognition technology in immigration enforcement operations.

I request a waiver of all fees associated with this request. The requested information will contribute significantly to public understanding of government surveillance practices.

I expect a response within 20 business days as required by law.

Sincerely,
[YOUR_NAME]
[YOUR_ADDRESS]
[YOUR_EMAIL]
[DATE]`,
  },
  {
    id: "foia-detention",
    agency: "ICE / DHS",
    topic: "Detention Facility Conditions",
    description: "Request inspection reports, death records, and conditions documentation for ICE detention facilities.",
    template: `Dear FOIA Officer,

Pursuant to the Freedom of Information Act, 5 U.S.C. § 552, I request access to and copies of the following records:

1. All inspection reports for ICE detention facilities in [STATE] conducted between January 1, 2024 and the date of this request, including:
   a. DHS Office of Inspector General reports
   b. ICE Enforcement and Removal Operations inspection reports
   c. Independent contractor inspection reports

2. Records of all deaths in ICE custody at facilities in [STATE] during this period, including:
   a. Death reports and investigations
   b. Medical records leading up to each death (with personal identifiers redacted)
   c. Corrective action plans implemented after each death

3. Records of the planned warehouse detention network announced by Acting ICE Director Todd Lyons, including:
   a. Facility plans for Stafford VA, Hutchins TX, and Hammond IN
   b. Budget documents and cost projections
   c. Contracts with GEO Group and CoreCivic for facility operations

I request a fee waiver as this information serves the public interest.

I expect a response within 20 business days as required by law.

Sincerely,
[YOUR_NAME]
[YOUR_ADDRESS]
[YOUR_EMAIL]
[DATE]`,
  },
  {
    id: "foia-use-of-force",
    agency: "CBP / ICE",
    topic: "Use of Force Incidents",
    description: "Request records of use-of-force incidents by CBP and ICE agents, including the Minneapolis shootings.",
    template: `Dear FOIA Officer,

Pursuant to the Freedom of Information Act, 5 U.S.C. § 552, I request access to and copies of the following records:

1. All use-of-force incident reports filed by Customs and Border Protection (CBP) and Immigration and Customs Enforcement (ICE) agents in [STATE] between January 1, 2025 and the date of this request.

2. Use-of-force policies and training materials currently in effect for CBP and ICE agents.

3. Records of all internal investigations and disciplinary actions related to use-of-force incidents during this period.

4. Body-worn camera footage policies and any records of compliance/non-compliance with body camera requirements.

I request a waiver of all fees. The release of this information serves a significant public interest given recent events in Minneapolis.

I expect a response within 20 business days as required by law.

Sincerely,
[YOUR_NAME]
[YOUR_ADDRESS]
[YOUR_EMAIL]
[DATE]`,
  },
  {
    id: "foia-deportation-flights",
    agency: "ICE Air Operations",
    topic: "Deportation Flights",
    description: "Request records of deportation flight operations, routes, contractors, and conditions.",
    template: `Dear FOIA Officer,

Pursuant to the Freedom of Information Act, 5 U.S.C. § 552, I request access to and copies of the following records:

1. All deportation flight manifests and operational records for ICE Air Operations between January 1, 2025 and the date of this request, including:
   a. Flight routes and destinations
   b. Number of deportees per flight
   c. Contractor information (airlines and charter companies used)

2. Contracts between ICE and air charter companies providing deportation flight services.

3. Records of any medical incidents, deaths, or complaints during deportation flights.

4. Records of deportation flights involving minors under 18 years of age.

I request a fee waiver as this information serves the public interest.

I expect a response within 20 business days as required by law.

Sincerely,
[YOUR_NAME]
[YOUR_ADDRESS]
[YOUR_EMAIL]
[DATE]`,
  },
];

export default function FoiaGenerator() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    city: "",
    state: "",
  });
  const [generated, setGenerated] = useState<string | null>(null);
  const [submissions, setSubmissions] = useLocalStorage<string[]>("cd-foia-submitted", []);
  const [mounted, setMounted] = useState(false);
  const toast = useToast();

  useEffect(() => setMounted(true), []);

  const template = foiaTemplates.find((t) => t.id === selectedTemplate);

  const generateRequest = () => {
    if (!template || !formData.name.trim() || !formData.email.trim()) return;

    const today = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    const text = template.template
      .replace(/\[YOUR_NAME\]/g, formData.name.trim())
      .replace(/\[YOUR_ADDRESS\]/g, formData.address.trim() || "Address on file")
      .replace(/\[YOUR_EMAIL\]/g, formData.email.trim())
      .replace(/\[DATE\]/g, today)
      .replace(/\[CITY\/COUNTY\]/g, formData.city.trim() || "[Your City/County]")
      .replace(/\[STATE\]/g, formData.state.trim() || "[Your State]");

    setGenerated(text);
  };

  const markSubmitted = () => {
    if (!selectedTemplate) return;
    setSubmissions((prev) => [...prev, selectedTemplate]);
    toast.addToast("FOIA request marked as submitted. +2 labor credits.", "success");
    setGenerated(null);
    setSelectedTemplate(null);
  };

  const copyToClipboard = () => {
    if (!generated) return;
    navigator.clipboard.writeText(generated).then(() => {
      toast.addToast("FOIA request copied to clipboard.", "info");
    });
  };

  return (
    <section className="py-[100px] px-10 max-w-[1200px] mx-auto" id="foia">
      <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
        Transparency Tool
      </div>
      <div className="font-heading text-[40px] max-md:text-[28px] font-black text-white leading-[1.15] mb-6">
        FOIA Request Generator
      </div>
      <div className="text-[18px] text-light max-w-[700px] leading-[1.8]">
        The Freedom of Information Act gives every citizen the right to request government records.
        Agencies must respond within 20 business days. Select a template, fill in your details, and submit.
        Every request forces the government to account for its actions.
      </div>

      {mounted && submissions.length > 0 && (
        <div className="mt-6 bg-green/10 border border-green/30 p-4 font-heading text-[13px] text-green">
          &#10003; You&apos;ve submitted {submissions.length} FOIA request{submissions.length > 1 ? "s" : ""}. +{submissions.length * 2} labor credits earned.
        </div>
      )}

      {!selectedTemplate ? (
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5 mt-10">
          {foiaTemplates.map((t) => {
            const isSubmitted = mounted && submissions.includes(t.id);
            return (
              <div
                key={t.id}
                onClick={() => !isSubmitted && setSelectedTemplate(t.id)}
                className={`bg-card border p-7 transition-all flex flex-col ${
                  isSubmitted
                    ? "border-green/30 opacity-70"
                    : "border-border hover:border-red cursor-pointer"
                }`}
              >
                <div className="font-heading text-[10px] tracking-[2px] uppercase text-muted mb-2">
                  {t.agency}
                </div>
                <div className="font-heading text-[16px] font-bold text-white mb-2">
                  {t.topic}
                  {isSubmitted && <span className="text-green ml-2 text-[12px]">&#10003; Submitted</span>}
                </div>
                <div className="text-[14px] text-muted leading-relaxed">
                  {t.description}
                </div>
                {!isSubmitted && (
                  <div className="mt-auto pt-4 font-heading text-[11px] text-red tracking-[1px]">
                    Generate Request &rarr;
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : generated ? (
        <div className="mt-10 space-y-6">
          <div className="flex items-center justify-between">
            <div className="font-heading text-[14px] text-white font-bold">
              Your FOIA Request — {template?.topic}
            </div>
            <button
              onClick={() => { setGenerated(null); setSelectedTemplate(null); }}
              className="font-heading text-[11px] tracking-[1px] uppercase text-muted hover:text-white cursor-pointer bg-transparent border-none"
            >
              &larr; Back
            </button>
          </div>
          <pre className="bg-card border border-border p-6 text-[13px] text-light leading-[1.8] whitespace-pre-wrap overflow-x-auto font-body">
            {generated}
          </pre>
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={copyToClipboard}
              className="font-heading text-[12px] tracking-[2px] uppercase bg-blue text-white px-8 py-3 border-none cursor-pointer font-bold hover:bg-blue/80 transition-all"
            >
              Copy to Clipboard
            </button>
            <button
              onClick={markSubmitted}
              className="font-heading text-[12px] tracking-[2px] uppercase bg-green text-white px-8 py-3 border-none cursor-pointer font-bold hover:bg-green/80 transition-all"
            >
              Mark as Submitted (+2 Credits)
            </button>
            <button
              onClick={() => { setGenerated(null); setSelectedTemplate(null); }}
              className="font-heading text-[12px] tracking-[2px] uppercase bg-transparent text-muted px-8 py-3 border border-border cursor-pointer hover:text-white hover:border-red transition-all"
            >
              Cancel
            </button>
          </div>
          <p className="text-[12px] text-muted">
            Submit this request to the agency&apos;s FOIA office by email or mail. They must respond within 20 business days per 5 U.S.C. &sect; 552.
          </p>
        </div>
      ) : (
        <div className="mt-10 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-heading text-[10px] tracking-[2px] uppercase text-muted">{template?.agency}</div>
              <div className="font-heading text-[18px] font-bold text-white mt-1">{template?.topic}</div>
            </div>
            <button
              onClick={() => setSelectedTemplate(null)}
              className="font-heading text-[11px] tracking-[1px] uppercase text-muted hover:text-white cursor-pointer bg-transparent border-none"
            >
              &larr; Back
            </button>
          </div>

          <div className="bg-card border border-border p-8 space-y-5">
            <div className="font-heading text-[14px] text-white font-bold mb-4">Your Information</div>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
              <div>
                <label className="font-heading text-[10px] tracking-[2px] uppercase text-muted block mb-2">Full Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your legal name"
                  className="w-full py-3 px-4 bg-black border border-border text-white font-heading text-[14px] outline-none focus:border-red placeholder:text-muted"
                />
              </div>
              <div>
                <label className="font-heading text-[10px] tracking-[2px] uppercase text-muted block mb-2">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full py-3 px-4 bg-black border border-border text-white font-heading text-[14px] outline-none focus:border-red placeholder:text-muted"
                />
              </div>
              <div>
                <label className="font-heading text-[10px] tracking-[2px] uppercase text-muted block mb-2">Mailing Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Street address"
                  className="w-full py-3 px-4 bg-black border border-border text-white font-heading text-[14px] outline-none focus:border-red placeholder:text-muted"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-heading text-[10px] tracking-[2px] uppercase text-muted block mb-2">City / County</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Minneapolis"
                    className="w-full py-3 px-4 bg-black border border-border text-white font-heading text-[14px] outline-none focus:border-red placeholder:text-muted"
                  />
                </div>
                <div>
                  <label className="font-heading text-[10px] tracking-[2px] uppercase text-muted block mb-2">State</label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    placeholder="MN"
                    className="w-full py-3 px-4 bg-black border border-border text-white font-heading text-[14px] outline-none focus:border-red placeholder:text-muted"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={generateRequest}
              disabled={!formData.name.trim() || !formData.email.trim()}
              className="font-heading text-[13px] tracking-[2px] uppercase bg-red text-white px-10 py-4 border-none cursor-pointer font-bold hover:bg-red-light transition-all mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Generate FOIA Request
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
