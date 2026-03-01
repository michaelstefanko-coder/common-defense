import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

export const metadata = {
  title: "News & Sources — Common Defense",
  description: "Curated news articles, video evidence, documentaries, and primary sources documenting the crisis.",
};

const newsCategories = [
  {
    id: "minneapolis",
    label: "Minneapolis",
    title: "The Minneapolis Killings",
    description: "Federal agents killed two U.S. citizens and detained a five-year-old in January 2026. Every claim DHS made was contradicted by video evidence.",
    articles: [
      {
        title: "Analysing Footage of the Minneapolis CBP Shooting",
        source: "Bellingcat",
        url: "https://www.bellingcat.com/news/2026/01/25/alex-pretti-analysing-footage-of-minneapolis-cbp-shooting/",
        description: "Frame-by-frame forensic analysis proving Pretti's firearm was secured before agents opened fire.",
        date: "Jan 25, 2026",
        type: "investigation" as const,
      },
      {
        title: "Two CBP Agents Identified in Alex Pretti Shooting",
        source: "ProPublica",
        url: "https://www.propublica.org/article/alex-pretti-shooting-cbp-agents-identified-jesus-ochoa-raymundo-gutierrez",
        description: "Investigative identification of the agents involved in the killing.",
        date: "Jan 2026",
        type: "investigation" as const,
      },
      {
        title: "CNN Visual Analysis of Minneapolis ICE Shooting",
        source: "CNN",
        url: "https://edition.cnn.com/2026/01/25/us/video/minneapolis-ice-shooting-alex-pretti-visual-analysis-digvid",
        description: "Video reconstruction contradicting DHS claims about the sequence of events.",
        date: "Jan 25, 2026",
        type: "video" as const,
      },
      {
        title: "Videos Show Agent Secured Gun Before Fatal Shooting",
        source: "Washington Post",
        url: "https://www.washingtonpost.com/investigations/2026/01/25/minneapolis-shooting-video-gun/",
        description: "Analysis proving the handgun was in agents' hands before lethal force was used.",
        date: "Jan 25, 2026",
        type: "investigation" as const,
      },
      {
        title: "Alex Pretti Shooting Prompts DOJ Civil Rights Probe",
        source: "NPR",
        url: "https://www.npr.org/2026/01/30/nx-s1-5694313/alex-pretti-shooting-doj-civil-rights-investigation",
        description: "Department of Justice opens civil rights investigation into the killing.",
        date: "Jan 30, 2026",
        type: "news" as const,
      },
      {
        title: "A Second U.S. Citizen Was Killed by Federal Forces in Minneapolis",
        source: "PBS NewsHour",
        url: "https://www.pbs.org/newshour/nation/a-second-u-s-citizen-was-killed-by-federal-forces-in-minneapolis-heres-what-we-know",
        description: "Comprehensive reporting on the killing of Alex Pretti, the second death in weeks.",
        date: "Jan 2026",
        type: "news" as const,
      },
      {
        title: "ICE Shooting: County Medical Examiner Lists Pretti's Death as Homicide",
        source: "ABC News",
        url: "https://abc7.com/live-updates/minneapolis-ice-shooting-live-updates-county-medical-examiner-lists-alex-prettis-death-homicide/18528885/",
        description: "Medical examiner officially rules the shooting a homicide.",
        date: "Jan 2026",
        type: "news" as const,
      },
      {
        title: "Minute-by-Minute Timeline of the Fatal Shooting of Alex Pretti",
        source: "ABC News",
        url: "https://abcnews.com/Politics/minute-minute-timeline-fatal-shooting-alex-pretti-federal/story?id=129547199",
        description: "Detailed chronological reconstruction of the shooting.",
        date: "Jan 2026",
        type: "news" as const,
      },
      {
        title: "Moments Before the ICE Shooting in Minneapolis",
        source: "Washington Post",
        url: "https://www.washingtonpost.com/investigations/2026/01/09/moments-before-ice-shooting-minneapolis/",
        description: "Investigative reconstruction of the Renée Good shooting by ICE agent Jonathan Ross.",
        date: "Jan 9, 2026",
        type: "investigation" as const,
      },
      {
        title: "ICE Shooting: Minneapolis Vehicle Moving Away from Agent",
        source: "CNN",
        url: "https://www.cnn.com/2026/01/17/us/ice-shooting-minneapolis-renee-good",
        description: "Video analysis confirming Renée Good's vehicle was moving away when agent opened fire.",
        date: "Jan 17, 2026",
        type: "video" as const,
      },
      {
        title: "Renee Good, Alex Pretti Shootings Spark Minneapolis Protesters to Video ICE Confrontations",
        source: "NBC News",
        url: "https://www.nbcnews.com/news/us-news/renee-good-alex-pretti-shootings-spark-minneapolis-protesters-video-ic-rcna256350",
        description: "How bystander video pushed Operation Metro Surge to the center of national conversation.",
        date: "Jan 2026",
        type: "news" as const,
      },
      {
        title: "Unearthed Videos Show Pretti Scuffling with Federal Officers Days Before Death",
        source: "PBS NewsHour",
        url: "https://www.pbs.org/newshour/nation/unearthed-videos-show-alex-pretti-scuffling-with-federal-officers-in-minneapolis-days-before-his-death",
        description: "Earlier confrontation footage provides context for the events leading to the shooting.",
        date: "Jan 2026",
        type: "video" as const,
      },
      {
        title: "A Running Count of How Many People ICE Has Killed and Injured",
        source: "The American Prospect",
        url: "https://prospect.org/2026/01/29/ice-trump-killed-injured-list-dhs-cbp-border-patrol-renee-good-alex-pretti/",
        description: "Comprehensive tracker: at least 33 shootings, 9 deaths since January 2025. At least 5 of those shot were U.S. citizens.",
        date: "Jan 29, 2026",
        type: "investigation" as const,
      },
      {
        title: "How Many People ICE Has Shot, Killed During Trump Immigration Enforcement",
        source: "The Marshall Project",
        url: "https://www.themarshallproject.org/2026/01/07/ice-minneapolis-shooting-renee-good",
        description: "In-depth investigative data analysis tracking the pattern of ICE shootings.",
        date: "Jan 2026",
        type: "investigation" as const,
      },
      {
        title: "How Many People Have Been Shot in ICE Raids?",
        source: "The Trace",
        url: "https://www.thetrace.org/2025/12/immigration-ice-shootings-guns-tracker/",
        description: "Gun violence tracker for ICE operations. WSJ identified at least 13 instances of agents firing at or into vehicles.",
        date: "Dec 2025",
        type: "investigation" as const,
      },
      {
        title: "2025 Is the Deadliest Year to Be in ICE Custody in Decades",
        source: "NPR",
        url: "https://www.npr.org/2025/10/23/nx-s1-5538090/ice-detention-custody-immigration-arrest-enforcement-dhs-trump",
        description: "32 people died in ICE custody in 2025 — nearly 3x the deaths in 2024 and the most since 2004.",
        date: "Oct 23, 2025",
        type: "news" as const,
      },
      {
        title: "NBC News — List of ICE and Border Patrol Shootings",
        source: "NBC News",
        url: "https://www.nbcnews.com/news/us-news/ice-shootings-list-border-patrol-trump-immigration-operations-rcna254202",
        description: "Running list of at least 33 shootings by immigration agents since January 2025, resulting in 9 deaths.",
        date: "Updated 2026",
        type: "reference" as const,
      },
    ],
  },
  {
    id: "operation-metro-surge",
    label: "Operation Metro Surge",
    title: "Operation Metro Surge",
    description: "4,000 federal agents surged into Minnesota. 3,000+ arrests. Warrantless detentions. Federal indictments against church protesters.",
    articles: [
      {
        title: "Operation Metro Surge — Full Overview",
        source: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Operation_Metro_Surge",
        description: "Comprehensive documentation of ICE's December 2025 operation targeting Minneapolis-St. Paul, later expanded statewide.",
        date: "Ongoing",
        type: "reference" as const,
      },
      {
        title: "Top Border Patrol Official Expected to Leave Minneapolis as Trump Sends Homan",
        source: "CNN",
        url: "https://edition.cnn.com/us/live-news/minneapolis-shooting-ice-protests-01-26-26",
        description: "Live coverage of the escalating federal response and protests.",
        date: "Jan 26, 2026",
        type: "news" as const,
      },
      {
        title: "Minnesota BCA 'Committed' to Finding Way to Work with Feds on Pretti Probe",
        source: "CBS News",
        url: "https://www.cbsnews.com/minnesota/live-updates/minneapolis-anti-ice-protests-graduate-by-hilton-hotel-federal-officers-operation-metro-surge/",
        description: "State-level investigation and ongoing protests against federal presence.",
        date: "Jan 2026",
        type: "news" as const,
      },
      {
        title: "Attorney General Announces Indictment Against 30 More People Who Protested at a Minnesota Church",
        source: "Associated Press",
        url: "https://www.kulr8.com/news/national/attorney-general-announces-indictment-against-30-more-people-who-protested-at-a-minnesota-church/article_77a322a6-e8f4-5c27-8564-2e6eb41853cf.html",
        description: "39 total people face federal charges for protesting at a church whose pastor serves as an ICE official.",
        date: "Feb 2026",
        type: "news" as const,
      },
      {
        title: "ICE in MN: Alex Pretti Memorial Ride, Operation Metro Surge Allowed to Continue",
        source: "FOX 9",
        url: "https://www.fox9.com/news/ice-minnesota-updates-jan-31",
        description: "Federal judge denies injunction — Operation Metro Surge continues despite two killings.",
        date: "Jan 31, 2026",
        type: "news" as const,
      },
      {
        title: "A Timeline of Trump's Immigration Crackdown in Minnesota",
        source: "PBS NewsHour",
        url: "https://www.pbs.org/newshour/nation/a-timeline-of-trumps-immigration-crackdown-in-minnesota",
        description: "Detailed timeline from December 2025 announcement through February 2026 drawdown.",
        date: "Feb 2026",
        type: "reference" as const,
      },
      {
        title: "A Chronology of Operation Metro Surge",
        source: "Minnesota Reformer",
        url: "https://minnesotareformer.com/2026/02/20/a-chronology-of-operation-metro-surge/",
        description: "Day-by-day chronology of the entire operation, including the $203 million economic impact on Minneapolis.",
        date: "Feb 20, 2026",
        type: "investigation" as const,
      },
      {
        title: "ICE Expansion Has Outpaced Accountability: What Are the Remedies?",
        source: "Brookings Institution",
        url: "https://www.brookings.edu/articles/ice-expansion-has-outpaced-accountability-what-are-the-remedies/",
        description: "Analysis of ICE's doubling from 10,000 to 22,000+ officers and the accountability gap.",
        date: "2026",
        type: "investigation" as const,
      },
      {
        title: "AFGE Demands Resignation of Noem and Miller for Smearing Slain Member Alex Pretti",
        source: "AFGE (Federal Employees Union)",
        url: "https://www.afge.org/publication/afge-demands-resignation-or-termination-of-dhs-secretary-kristi-noem-and-deputy-white-house-chief-of-staff-stephen-miller-for-smearing-slain-afge-member-alex-pretti-as-domestic-terrorist/",
        description: "Federal employees union demands Noem and Miller resign after labeling slain VA nurse and AFGE member a 'domestic terrorist.'",
        date: "Jan 2026",
        type: "news" as const,
      },
    ],
  },
  {
    id: "detention",
    label: "Detention",
    title: "The Detention Machine",
    description: "$38.3 billion. 92,600 beds. Warehouses converted into mega detention centers. 'Like Amazon Prime, but with human beings.'",
    articles: [
      {
        title: "ICE Launches $38.3 Billion Detention Expansion for Deportations",
        source: "Fox News",
        url: "https://www.foxnews.com/us/ice-ramps-up-deportation-push-92600-new-beds-38-3b-expansion",
        description: "Internal ICE memo reveals plans for eight mega-centers housing up to 10,000 detainees each.",
        date: "Feb 2026",
        type: "news" as const,
      },
      {
        title: "ICE's Warehouse Purchases Herald New Model for Immigration Detention",
        source: "American Immigration Council",
        url: "https://www.americanimmigrationcouncil.org/blog/ice-buys-warehouses-immigration-detention/",
        description: "ICE has purchased seven warehouses exceeding 1 million sq ft each. The 'reengineered' detention system uses commercial warehouses retrofitted into a national network.",
        date: "2026",
        type: "investigation" as const,
      },
      {
        title: "Immigration Detention Costs in a Time of Mass Deportation",
        source: "National Immigration Forum",
        url: "https://forumtogether.org/article/immigration-detention-costs-in-a-time-of-mass-deportation/",
        description: "Analysis of the exploding costs of mass detention — from 39,000 detainees in Jan 2025 to a projected 107,000.",
        date: "2026",
        type: "investigation" as const,
      },
      {
        title: "Congressional Letter Opposing ICE Detention Center Expansion",
        source: "U.S. House (Rep. McCollum)",
        url: "https://mccollum.house.gov/sites/evo-subsites/mccollum.house.gov/files/evo-media-document/quill-letter-l27806-letter-opposing-the-expansion-of-ice-detention-version-3-07-02-2025-12-42-pm.pdf",
        description: "Congressional members formally oppose the expansion, citing abuse records of for-profit contractors.",
        date: "Jul 2025",
        type: "reference" as const,
      },
      {
        title: "Testimony of Acting ICE Director Todd M. Lyons",
        source: "ICE.gov",
        url: "https://www.ice.gov/doclib/news/library/speeches/260210lyons.pdf",
        description: "Official congressional testimony — Lyons states 1.6 million people have final deportation orders, 800,000 with criminal convictions.",
        date: "Feb 2026",
        type: "reference" as const,
      },
      {
        title: "Acting ICE Director Clashes with Democrats, Says Funding Assured Through 2026",
        source: "UPI",
        url: "https://www.upi.com/Top_News/US/2025/05/14/Immigratioms-Customs-Enforcement-director-agency-wont-run-out-money/5921747257301/",
        description: "Congress gave ICE $45 billion in a single appropriation — more than a decade of normal funding.",
        date: "May 2025",
        type: "news" as const,
      },
      {
        title: "ICE Inspections Plummeted as Detentions Soared in 2025",
        source: "POGO",
        url: "https://www.pogo.org/investigates/ice-inspections-plummeted-as-detentions-soared-in-2025",
        description: "Facility inspections dropped 36% in 2025 even as detention population broke records and deaths surged.",
        date: "2025",
        type: "investigation" as const,
      },
      {
        title: "ICE Detention Deaths in Texas — Six Deaths in Six Weeks",
        source: "Texas Tribune / ProPublica",
        url: "https://www.texastribune.org/2026/02/19/ice-detention-deaths-texas-east-montana-dilley-campos/",
        description: "Six deaths in six weeks at Texas facilities including Camp East Montana. One death ruled a homicide.",
        date: "Feb 19, 2026",
        type: "investigation" as const,
      },
      {
        title: "6 Deaths in ICE Custody and 2 Fatal Shootings: A Horrific Start to 2026",
        source: "American Immigration Council",
        url: "https://www.americanimmigrationcouncil.org/blog/ice-deaths-shootings-2026/",
        description: "Summary of January 2026 deaths across detention centers in Texas, Pennsylvania, Georgia, and California.",
        date: "Jan 2026",
        type: "news" as const,
      },
    ],
  },
  {
    id: "citizens-united",
    label: "Money in Politics",
    title: "Citizens United & Dark Money",
    description: "$750 million before the ruling. $9 billion+ after. Super PACs set a $2.7 billion record in 2024. The policy preferences of average Americans have near-zero effect on law.",
    articles: [
      {
        title: "Citizens United, Explained",
        source: "Brennan Center for Justice",
        url: "https://www.brennancenter.org/our-work/research-reports/citizens-united-explained",
        description: "Comprehensive explainer: Super PACs set a $2.7B record in 2024. Dark money rose from $5M in 2006 to $1B+ in 2024.",
        date: "Updated 2025",
        type: "reference" as const,
      },
      {
        title: "'The Dark Money Game': How Citizens United Ushered in 'Legalized Corruption'",
        source: "Democracy Now!",
        url: "https://www.democracynow.org/2025/4/15/alex_gibney_dark_money_game",
        description: "Interview with Alex Gibney on his HBO documentary about the corrosive effects of Citizens United.",
        date: "Apr 2025",
        type: "news" as const,
      },
      {
        title: "How Citizens United Changed U.S. Political Campaigns",
        source: "FRONTLINE / PBS",
        url: "https://www.pbs.org/wgbh/frontline/article/archives-citizens-united-campaign-spending-documentary/",
        description: "FRONTLINE's documentary investigation into the impact of the Citizens United decision on campaign finance.",
        date: "2024",
        type: "video" as const,
      },
      {
        title: "Dark Money — A Kimberly Reed Film",
        source: "PBS POV",
        url: "https://www.pbs.org/pov/films/darkmoney/",
        description: "Award-winning documentary examining untraceable corporate money in elections — called 'one of the greatest present threats to American democracy.'",
        date: "2018",
        type: "video" as const,
      },
      {
        title: "Fifteen Years Later, Citizens United Defined the 2024 Election",
        source: "Brennan Center for Justice",
        url: "https://www.brennancenter.org/our-work/research-reports/fifteen-years-later-citizens-united-defined-2024-election",
        description: "Dark money hit $1.9 billion in 2024. Super PACs spent $2.7 billion. Outside group spending was 13x what was spent in 2008.",
        date: "2025",
        type: "investigation" as const,
      },
      {
        title: "More Money, Less Transparency: A Decade Under Citizens United",
        source: "OpenSecrets",
        url: "https://www.opensecrets.org/news/reports/a-decade-under-citizens-united?category=Dark+Money&year=2024",
        description: "Comprehensive campaign finance data tracking the explosion from $5M in dark money (2006) to over $1 billion (2024).",
        date: "Updated 2024",
        type: "reference" as const,
      },
      {
        title: "How Does the Citizens United Decision Still Affect Us in 2026?",
        source: "Campaign Legal Center",
        url: "https://campaignlegal.org/update/how-does-citizens-united-decision-still-affect-us-2026",
        description: "Analysis of FEC independence threats, Montana dark money ruling, and enforcement challenges for 2026 midterms.",
        date: "2026",
        type: "investigation" as const,
      },
    ],
  },
  {
    id: "labor",
    label: "Labor Power",
    title: "The 2024 Port Strike & Labor Power",
    description: "47,000 dockworkers shut down 36 ports. $5 billion per day in economic impact. The first East Coast port strike since 1977. They won a 62% raise.",
    articles: [
      {
        title: "Massive Port Strike Begins Across America's East Coast",
        source: "CNN",
        url: "https://www.cnn.com/2024/10/01/business/us-port-workers-strike-tuesday/index.html",
        description: "47,000 ILA members walked off the job at 36 ports — the first East Coast port strike since 1977.",
        date: "Oct 1, 2024",
        type: "news" as const,
      },
      {
        title: "East and Gulf Coast Ports Strike, Stranding Billions in Trade",
        source: "CNBC",
        url: "https://www.cnbc.com/2024/10/01/east-coast-ports-strike-ila-union-work-stop-billions-in-trade.html",
        description: "The strike stranded billions in trade. ILA President Daggett: 'If we have to be out here a month or two months, this world will collapse.'",
        date: "Oct 1, 2024",
        type: "news" as const,
      },
      {
        title: "Dockworkers Strike Suspended — Tentative Agreement Includes 62% Pay Raise",
        source: "ABC News",
        url: "https://abcnews.go.com/US/dockworkers-strike-suspended-sources/story?id=114445386",
        description: "After three days, workers won a 62% raise over six years. Top hourly wage rises from $39 to $63.",
        date: "Oct 3, 2024",
        type: "news" as const,
      },
      {
        title: "7 Things to Know About the U.S. Dockworkers Strike",
        source: "PBS NewsHour",
        url: "https://www.pbs.org/newshour/economy/7-things-to-know-about-the-u-s-dockworkers-strike-and-its-effect-on-the-economy",
        description: "Explainer covering the strike's $5B/day impact, automation concerns, and historical significance.",
        date: "Oct 2024",
        type: "reference" as const,
      },
      {
        title: "Longshoremen Reach Final Deal, Averting Second Strike",
        source: "PBS NewsHour",
        url: "https://www.pbs.org/newshour/economy/longshoremen-reach-tentative-deal-with-ports-and-shippers-averting-potential-strike",
        description: "Final six-year contract ratified with 99% approval. Workers secured wage increases, healthcare, and automation protections.",
        date: "Jan 2025",
        type: "news" as const,
      },
      {
        title: "271,500 Workers Went on Strike in 2024",
        source: "Economic Policy Institute",
        url: "https://www.epi.org/publication/271500-workers-went-on-strike-in-2024-current-labor-law-doesnt-adequately-protect-workers-fundamental-right-to-strike/",
        description: "31 major work stoppages, 271,500 idled workers. Current labor law inadequately protects the right to strike.",
        date: "2024",
        type: "investigation" as const,
      },
      {
        title: "2024 in Review: Strikes and Organizing Score Gains",
        source: "Labor Notes",
        url: "https://labornotes.org/2024/12/2024-review-strikes-and-organizing-score-gains-storm-clouds-loom",
        description: "Boeing Machinists won 38% raise. AT&T: 17,000 on strike. VW Chattanooga: 73% voted UAW. Teamsters added 50,000 members.",
        date: "Dec 2024",
        type: "reference" as const,
      },
      {
        title: "Cornell ILR Labor Action Tracker",
        source: "Cornell University",
        url: "https://striketracker.ilr.cornell.edu/",
        description: "Live interactive tracker: 359 work stoppages in 2024 involving 293,500 workers and 5.32 million working days lost.",
        date: "Live",
        type: "reference" as const,
      },
    ],
  },
];

const knowledgeResources = [
  {
    title: "ACLU — Know Your Rights: Immigrants' Rights",
    url: "https://www.aclu.org/know-your-rights/immigrants-rights",
    description: "Comprehensive guide to constitutional rights during ICE encounters. Available in multiple languages.",
  },
  {
    title: "ACLU — 'We Have Rights' Video Series",
    url: "https://www.aclu.org/we-have-rights",
    description: "Video series narrated by Jesse Williams, Diane Guerrero, Kumail Nanjiani, and others in 7 languages. Covers what to do when ICE is at your door, in your home, or on the street.",
  },
  {
    title: "National Immigrant Justice Center — If You Encounter ICE",
    url: "https://immigrantjustice.org/for-immigrants/know-your-rights/ice-encounter/",
    description: "Step-by-step guide for ICE encounters with printable resources and legal referral information.",
  },
  {
    title: "Know Your Rights Resources — 2026 Update",
    url: "https://austinkocher.substack.com/p/know-your-rights-resources-for-ice",
    description: "Comprehensive compilation of rights resources including Red Cards (available in 56 languages — over 10 million distributed).",
  },
  {
    title: "Killing of Alex Pretti — Full Documentation",
    url: "https://en.wikipedia.org/wiki/Killing_of_Alex_Pretti",
    description: "Complete documentation of the shooting including timeline, video evidence summary, investigation status, and aftermath.",
  },
  {
    title: "Killing of Renée Good — Full Documentation",
    url: "https://en.wikipedia.org/wiki/Killing_of_Ren%C3%A9e_Good",
    description: "Complete documentation including video evidence, DHS claims vs. reality, and investigation status.",
  },
  {
    title: "Operation Metro Surge — Full Documentation",
    url: "https://en.wikipedia.org/wiki/Operation_Metro_Surge",
    description: "Full history of the operation: 4,000 federal agents, 3,000+ arrests, warrantless detentions, church protest indictments.",
  },
];

const documentaries = [
  {
    title: "Big Sky, Big Money",
    source: "FRONTLINE / PBS",
    youtubeId: "_xxiIejOmSo",
    description: "How the Citizens United decision transformed campaign finance. FRONTLINE investigates outside interest groups' influence on local campaigns in Montana — ground zero for dark money in American politics.",
  },
  {
    title: "The Dark Money Game — Official Trailer",
    source: "HBO / Alex Gibney",
    youtubeId: "dykZuyO7RUU",
    description: "Trailer for the Oscar-winning filmmaker's two-part HBO series examining dark money 15 years after Citizens United. Gibney: 'Citizens United is the single most damaging decision the Supreme Court has made in the last 15 years.'",
  },
  {
    title: "ACLU: Know Your Rights — When ICE Is at Your Door",
    source: "ACLU / Brooklyn Defender Services",
    youtubeId: "5ExgUmgEYf8",
    description: "What to do when ICE comes to your door. Narrated by Diane Guerrero. Based on true stories. Available in 7 languages. Part of the 'We Have Rights' campaign.",
  },
];

const typeColors: Record<string, string> = {
  investigation: "text-red",
  video: "text-blue",
  news: "text-green",
  reference: "text-yellow",
};

const typeLabels: Record<string, string> = {
  investigation: "Investigation",
  video: "Video / Visual",
  news: "News Report",
  reference: "Reference",
};

export default function NewsPage() {
  return (
    <div className="pt-[60px]">
      {/* HERO */}
      <section className="py-[80px] px-10 max-w-[1200px] mx-auto">
        <div className="font-heading text-[12px] text-muted mb-4">
          <Link href="/" className="text-muted no-underline hover:text-white hover:no-underline">Home</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-light">News &amp; Sources</span>
        </div>
        <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
          Primary Sources
        </div>
        <h1 className="font-heading text-[48px] max-md:text-[32px] font-black text-white leading-[1.1] mb-6 uppercase">
          News &amp; Sources
        </h1>
        <p className="text-[20px] text-light max-w-[700px] leading-[1.7]">
          Every claim on this site is sourced. Every video is from a credible outlet. Every document is linked to its origin. This page is the evidence room.
        </p>
        <p className="text-[14px] text-muted mt-4 font-heading tracking-[1px]">
          {newsCategories.reduce((sum, cat) => sum + cat.articles.length, 0)} sources across {newsCategories.length} categories &nbsp;|&nbsp; Updated March 2026
        </p>
      </section>

      {/* QUICK NAV */}
      <section className="px-10 max-w-[1200px] mx-auto pb-8">
        <div className="flex gap-3 flex-wrap">
          {newsCategories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="font-heading text-[11px] tracking-[1px] uppercase py-2 px-4 bg-card border border-border text-muted no-underline hover:border-red hover:text-white hover:no-underline transition-colors"
            >
              {cat.label} ({cat.articles.length})
            </a>
          ))}
          <a
            href="#documentaries"
            className="font-heading text-[11px] tracking-[1px] uppercase py-2 px-4 bg-card border border-border text-muted no-underline hover:border-red hover:text-white hover:no-underline transition-colors"
          >
            Documentaries
          </a>
          <a
            href="#resources"
            className="font-heading text-[11px] tracking-[1px] uppercase py-2 px-4 bg-card border border-border text-muted no-underline hover:border-red hover:text-white hover:no-underline transition-colors"
          >
            Resources
          </a>
        </div>
      </section>

      {/* NEWS CATEGORIES */}
      {newsCategories.map((category) => (
        <section key={category.id} id={category.id} className="py-[60px] px-10 max-w-[1200px] mx-auto border-t border-border">
          <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
            {category.label}
          </div>
          <h2 className="font-heading text-[36px] max-md:text-[24px] font-black text-white leading-[1.15] mb-4">
            {category.title}
          </h2>
          <p className="text-[16px] text-light max-w-[700px] leading-[1.7] mb-8">
            {category.description}
          </p>

          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
            {category.articles.map((article, i) => (
              <a
                key={i}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-border p-6 no-underline hover:border-red hover:no-underline transition-colors block group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`font-heading text-[9px] tracking-[1px] uppercase ${typeColors[article.type]}`}>
                    {typeLabels[article.type]}
                  </span>
                  <span className="font-heading text-[9px] text-muted tracking-[1px]">
                    {article.date}
                  </span>
                </div>
                <div className="font-heading text-[15px] font-bold text-white mb-2 group-hover:text-red transition-colors">
                  {article.title}
                </div>
                <div className="text-[13px] text-muted leading-relaxed mb-3">
                  {article.description}
                </div>
                <div className="font-heading text-[11px] text-light tracking-[1px]">
                  {article.source} &rarr;
                </div>
              </a>
            ))}
          </div>
        </section>
      ))}

      {/* DOCUMENTARIES */}
      <section id="documentaries" className="py-[60px] px-10 max-w-[1200px] mx-auto border-t border-border">
        <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
          Watch
        </div>
        <h2 className="font-heading text-[36px] max-md:text-[24px] font-black text-white leading-[1.15] mb-4">
          Documentaries
        </h2>
        <p className="text-[16px] text-light max-w-[700px] leading-[1.7] mb-8">
          Long-form investigations into the systems Common Defense was built to resist.
        </p>

        <div className="space-y-10">
          {documentaries.map((doc, i) => (
            <div key={i} className="bg-card border border-border p-8">
              <div className="font-heading text-[10px] tracking-[2px] uppercase text-muted mb-2">
                {doc.source}
              </div>
              <h3 className="font-heading text-[24px] font-black text-white mb-3">
                {doc.title}
              </h3>
              <p className="text-[15px] text-light leading-[1.7] mb-6 max-w-[700px]">
                {doc.description}
              </p>
              <VideoEmbed
                src={`https://www.youtube.com/embed/${doc.youtubeId}`}
                title={doc.title}
              />
            </div>
          ))}

          {/* Additional documentaries without embeds */}
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
            <a
              href="https://www.pbs.org/pov/films/darkmoney/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border p-6 no-underline hover:border-red hover:no-underline transition-colors block group"
            >
              <div className="font-heading text-[10px] tracking-[2px] uppercase text-muted mb-2">
                PBS / POV
              </div>
              <div className="font-heading text-[18px] font-bold text-white mb-2 group-hover:text-red transition-colors">
                Dark Money (2018)
              </div>
              <div className="text-[13px] text-muted leading-relaxed">
                Award-winning documentary by Kimberly Reed examining untraceable corporate money in elections. Premiered at Sundance. Called &ldquo;one of the greatest present threats to American democracy.&rdquo;
              </div>
            </a>
            <a
              href="https://www.democracynow.org/2025/4/15/alex_gibney_dark_money_game"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border p-6 no-underline hover:border-red hover:no-underline transition-colors block group"
            >
              <div className="font-heading text-[10px] tracking-[2px] uppercase text-muted mb-2">
                HBO / Max
              </div>
              <div className="font-heading text-[18px] font-bold text-white mb-2 group-hover:text-red transition-colors">
                The Dark Money Game (2025)
              </div>
              <div className="text-[13px] text-muted leading-relaxed">
                Four-hour series by Oscar-winning Alex Gibney investigating the corruption flowing from Citizens United. Gibney: &ldquo;Citizens United is the single most damaging decision the Supreme Court has made in the last 15 years.&rdquo;
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* PHOTO CREDITS */}
      <section className="py-[60px] px-10 max-w-[1200px] mx-auto border-t border-border">
        <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
          Photography
        </div>
        <h2 className="font-heading text-[36px] max-md:text-[24px] font-black text-white leading-[1.15] mb-4">
          Images on This Site
        </h2>
        <p className="text-[16px] text-light max-w-[700px] leading-[1.7] mb-8">
          All photographs used on Common Defense are freely licensed from <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="text-red hover:underline">Unsplash</a> under their open license. Free for commercial and personal use. No attribution required.
        </p>
        <div className="grid grid-cols-4 max-md:grid-cols-2 gap-4">
          <a href="https://unsplash.com/s/photos/protest" target="_blank" rel="noopener noreferrer" className="bg-card border border-border p-5 no-underline hover:border-red hover:no-underline transition-colors block">
            <div className="font-heading text-[13px] font-bold text-white mb-1">Protest Photography</div>
            <div className="text-[12px] text-muted">6,600+ free photos</div>
          </a>
          <a href="https://unsplash.com/s/photos/labor-union" target="_blank" rel="noopener noreferrer" className="bg-card border border-border p-5 no-underline hover:border-red hover:no-underline transition-colors block">
            <div className="font-heading text-[13px] font-bold text-white mb-1">Labor &amp; Union</div>
            <div className="text-[12px] text-muted">1,900+ free photos</div>
          </a>
          <a href="https://unsplash.com/s/photos/protest-march" target="_blank" rel="noopener noreferrer" className="bg-card border border-border p-5 no-underline hover:border-red hover:no-underline transition-colors block">
            <div className="font-heading text-[13px] font-bold text-white mb-1">March &amp; Rally</div>
            <div className="text-[12px] text-muted">2,600+ free photos</div>
          </a>
          <a href="https://unsplash.com/s/photos/political-protest" target="_blank" rel="noopener noreferrer" className="bg-card border border-border p-5 no-underline hover:border-red hover:no-underline transition-colors block">
            <div className="font-heading text-[13px] font-bold text-white mb-1">Political Protest</div>
            <div className="text-[12px] text-muted">100+ free photos</div>
          </a>
        </div>
      </section>

      {/* KNOW YOUR RIGHTS RESOURCES */}
      <section id="resources" className="py-[60px] px-10 max-w-[1200px] mx-auto border-t border-border">
        <div className="font-heading text-[11px] tracking-[3px] uppercase text-red mb-3">
          Resources
        </div>
        <h2 className="font-heading text-[36px] max-md:text-[24px] font-black text-white leading-[1.15] mb-4">
          Know Your Rights &amp; Reference
        </h2>
        <p className="text-[16px] text-light max-w-[700px] leading-[1.7] mb-8">
          Primary sources, legal guides, and reference documentation.
        </p>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
          {knowledgeResources.map((resource, i) => (
            <a
              key={i}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border p-6 no-underline hover:border-red hover:no-underline transition-colors block group"
            >
              <div className="font-heading text-[15px] font-bold text-white mb-2 group-hover:text-red transition-colors">
                {resource.title}
              </div>
              <div className="text-[13px] text-muted leading-relaxed">
                {resource.description}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* EDITORIAL NOTE */}
      <section className="py-[40px] px-10 max-w-[1200px] mx-auto border-t border-border">
        <div className="bg-card border border-border p-8 max-w-[700px]">
          <div className="font-heading text-[11px] tracking-[2px] uppercase text-muted mb-3">
            Editorial Standards
          </div>
          <div className="text-[14px] text-light leading-[1.8] space-y-3">
            <p>
              Common Defense links to sources. We do not republish copyrighted content. Every factual claim is traceable to a named source. When we embed video, we embed from the publisher&apos;s official channel.
            </p>
            <p>
              We include sources from across the political spectrum — Fox News, CNN, PBS, NPR, ProPublica, ABC, NBC, CBS, the Washington Post, the Associated Press, and Reuters. When government sources (ICE.gov, congressional testimony) are available, we link directly to those.
            </p>
            <p>
              If you find an error, broken link, or misrepresentation, contact us. We will correct it publicly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-dark border-t border-b border-border py-20 px-10 text-center">
        <h2 className="font-heading text-[32px] max-md:text-[24px] font-black text-white mb-4">
          The Evidence Is Public. The Question Is What We Do With It.
        </h2>
        <div className="flex gap-4 justify-center flex-wrap mt-6">
          <Link
            href="/#pledge"
            className="font-heading text-[13px] tracking-[2px] uppercase bg-red text-white px-10 py-4 border-none font-bold hover:bg-red-light transition-all no-underline hover:no-underline inline-block"
          >
            Sign the Pledge
          </Link>
          <Link
            href="/resist"
            className="font-heading text-[13px] tracking-[2px] uppercase bg-transparent text-white px-10 py-4 border border-white font-bold hover:bg-white/[0.08] transition-all no-underline hover:no-underline inline-block"
          >
            Join a Campaign
          </Link>
        </div>
      </div>
    </div>
  );
}
