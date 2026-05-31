const FOCUS = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff0000]";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* ── Header + About: tight 48px gap ──────────────────────── */}
        <div className="space-y-12">

          {/* HEADER */}
          <section className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
            {/* Red ring → white gap → photo */}
            <div className="flex-shrink-0 mt-1 rounded-full p-[3px] bg-[#ff0000]">
              <div className="rounded-full p-[2px] bg-white">
                <img
                  src="/avishek_das_profile.png"
                  alt="Avishek Das"
                  className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover object-center block"
                />
              </div>
            </div>
            <div>
              <h1 className="font-head font-bold text-3xl sm:text-5xl tracking-tight leading-none text-black mb-3">
                Avishek Das
              </h1>
              <p className="text-lg text-black mb-1">
                Enterprise Architect · Associate Director ·{" "}
                <a
                  href="https://www.cognizant.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`border-b-2 border-[#ff0000] hover:text-[#ff0000] transition-colors ${FOCUS}`}
                >
                  Cognizant
                </a>
              </p>
              <p className="text-sm text-neutral-400 mb-6">
                Belle Mead, NJ · 21 years in enterprise technology
              </p>
              <div className="flex flex-wrap gap-5">
                {[
                  { label: "LinkedIn", href: "https://linkedin.com/in/avishekdas" },
                  { label: "GitHub",   href: "https://github.com/avishekdas" },
                  { label: "Email",    href: "mailto:avishekdas.cool@gmail.com" },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`font-mono text-xs font-medium tracking-widest uppercase text-black border-b-2 border-[#ff0000] pb-0.5 hover:text-[#ff0000] transition-colors ${FOCUS}`}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className="scroll-mt-8">
            <div className="border-b-2 border-black pb-2 mb-6">
              <p className="font-mono text-xs font-medium tracking-widest uppercase text-[#ff0000]">About</p>
            </div>
            <p className="text-base text-black font-semibold leading-relaxed mb-4 max-w-2xl">
              I build the architecture that moves AI from proof-of-concept to production.
            </p>
            <p className="text-base text-black leading-relaxed mb-4 max-w-2xl">
              Twenty-one years across open-source cloud platforms, government consulting, startups,
              and regulated banking. The through-line has never changed: turning complex technical
              problems into systems that run reliably in the real world.
            </p>
            <p className="text-base text-black leading-relaxed mb-4 max-w-2xl">
              The range matters. At CA Technologies I led cloud-agnostic platform migrations at the
              architecture level. At Deloitte I delivered an e-governance platform for the Government
              of Sri Lanka — AWS-hosted, 1.7 million beneficiaries. At IBM I drove microservices and
              cloud migration for three years, recognised as Best Techie of the Year each time. In
              between, I co-founded an EdTech startup and took it from zero to production in eight
              months with 50 engineers.
            </p>
            <p className="text-base text-black leading-relaxed max-w-2xl">
              Today I lead AI transformation at Cognizant — shipping RAG pipelines, LLM agents,
              custom MCP servers, and RPA automation to production for a North American digital bank.
              90-person team. 130K daily authentication events. The mission is always the same: get
              the architecture right before it costs everything.
            </p>
          </section>

        </div>{/* end tight group */}

        {/* ── Remaining sections: 80px gaps ───────────────────────── */}
        <div className="space-y-20 mt-20">

          {/* WHAT I DO */}
          <section id="what-i-do" className="scroll-mt-8">
            <div className="border-b-2 border-black pb-2 mb-6">
              <p className="font-mono text-xs font-medium tracking-widest uppercase text-[#ff0000]">What I Do</p>
            </div>
            <div className="grid sm:grid-cols-3 border-2 border-black">
              {[
                {
                  title: "AI Transformation",
                  desc: "RAG pipelines, LLM agents, MCP servers, and RPA automation — in production, not in pilots.",
                },
                {
                  title: "Architecture Leadership",
                  desc: "AWS-native systems built for regulated environments. Event-driven microservices, DDD, and the hard decisions nobody documents.",
                },
                {
                  title: "Engineering at Scale",
                  desc: "Ninety-person teams. The kind of leadership that sets technical direction, raises the bar on hiring, and ships without heroics.",
                },
              ].map((card, i) => (
                <div
                  key={card.title}
                  className={`p-5 ${i < 2 ? "border-b sm:border-b-0 sm:border-r-2 border-black" : ""}`}
                >
                  <h3 className="font-head font-bold text-xs uppercase tracking-widest text-black mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-500">{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SELECTED WORK */}
          <section id="work" className="scroll-mt-8">
            <div className="border-b-2 border-black pb-2 mb-6">
              <p className="font-mono text-xs font-medium tracking-widest uppercase text-[#ff0000]">Selected Work</p>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "Conversational Banking Agent",
                  tags: ["Amazon Lex", "Bedrock (Claude 3)", "RAG", "OpenSearch", "MCP Server"],
                  desc: "A North American digital bank needed to deflect tier-1 support volume without degrading service. Built end-to-end: Amazon Lex front-end, Bedrock (Claude 3) reasoning layer, RAG over OpenSearch, and a custom MCP server orchestrating live core banking operations. Auto-detects Spanish and English. Deflects 45% of tier-1 customer queries without human intervention.",
                },
                {
                  title: "LLM-Powered KYC Pipeline",
                  tags: ["AWS Bedrock", "RAG", "Lambda", "DynamoDB"],
                  desc: "KYC compliance review in regulated banking is document-heavy and slow by design. Replaced manual document review with a RAG-based extraction pipeline on AWS Bedrock — Lambda-triggered, DynamoDB-backed, fully auditable. Cut review time by 65% without touching compliance posture.",
                },
                {
                  title: "Loan Processing Automation",
                  tags: ["n8n", "RPA", "AWS"],
                  desc: "Loan processing cycles were measured in days. Designed and shipped an orchestration layer using n8n and RPA to automate processing and compliance steps end-to-end on AWS. Reduced cycle time 40–60% and produced the enterprise playbook for AI-driven workflow automation.",
                },
              ].map((work) => (
                <div key={work.title} className="border-2 border-black p-5">
                  <h3 className="font-head font-bold text-sm uppercase tracking-wide text-black mb-2">
                    {work.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {work.tags.map((tag) => (
                      <span key={tag} className="font-mono text-xs text-black border border-neutral-300 px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-500">{work.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CAREER */}
          <section id="career" className="scroll-mt-8">
            <div className="border-b-2 border-black pb-2 mb-6">
              <p className="font-mono text-xs font-medium tracking-widest uppercase text-[#ff0000]">Career</p>
            </div>
            <div className="space-y-6">
              {[
                { role: "Enterprise Architect (Associate Director)", company: "Cognizant Technology Solutions", location: "Belle Mead, NJ",   period: "Dec 2021 – Present" },
                { role: "Chief Technology Officer",                  company: "RICE Smart",                    location: "Kolkata, India",   period: "May – Dec 2021" },
                { role: "Head of Technology",                        company: "ABP eVentures",                 location: "Kolkata, India",   period: "2018 – 2021" },
                { role: "Application Architect",                     company: "IBM",                           location: "Kolkata, India",   period: "2015 – 2018" },
                { role: "Principal Software Engineer",               company: "CA Technologies",               location: "Hyderabad, India", period: "2014 – 2015" },
                { role: "Technical Manager",                         company: "HCL Technologies",              location: "",                 period: "2012 – 2014" },
                { role: "Senior Consultant",                         company: "Deloitte",                      location: "",                 period: "2011 – 2012" },
                { role: "Team Lead",                                 company: "Cognizant Technology Solutions", location: "",                period: "2004 – 2011" },
              ].map((job) => (
                <div key={job.company + job.period} className="pl-4 border-l-4 border-black relative">
                  <span className="absolute -left-[5px] top-[3px] w-2 h-2 bg-[#ff0000] rotate-45 block" />
                  <p className="font-head font-bold text-xs uppercase tracking-widest text-black">{job.role}</p>
                  <p className="text-sm text-neutral-500">
                    {job.company}{job.location ? ` · ${job.location}` : ""}
                  </p>
                  <p className="font-mono text-xs text-neutral-400 mt-0.5">{job.period}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CREDENTIALS */}
          <section id="credentials" className="scroll-mt-8">
            <div className="border-b-2 border-black pb-2 mb-6">
              <p className="font-mono text-xs font-medium tracking-widest uppercase text-[#ff0000]">Credentials</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "AWS Certified Solutions Architect – Associate",
                "AWS Cloud Practitioner",
                "SAFe Agilist",
                "IBM Certified Application Developer – Cloud V2",
                "IBM Blockchain Essentials",
                "B.Eng. Computer Science · University of North Bengal",
              ].map((cert) => (
                <span key={cert} className="font-mono text-xs text-black bg-white border border-black px-3 py-1.5">
                  {cert}
                </span>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="scroll-mt-8 bg-neutral-100 border-2 border-black p-8 relative">
            <span className="absolute -top-2 -left-2 -right-2 -bottom-2 border border-[#ff0000] pointer-events-none" />
            <p className="font-mono text-xs font-medium tracking-widest uppercase text-[#ff0000] mb-2">Contact</p>
            <h2 className="font-head font-bold text-2xl uppercase tracking-tight text-black mb-2">
              The architecture conversation starts here.
            </h2>
            <p className="text-sm text-neutral-500 mb-6 max-w-xl">
              Available for AI transformation engagements, architecture advisory, and senior leadership
              roles. If you are building something that needs to run in production — not just in a demo
              — reach out.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:avishekdas.cool@gmail.com"
                className={`font-head font-semibold text-xs uppercase tracking-widest px-6 py-3 bg-black text-white border-2 border-black hover:bg-[#ff0000] hover:border-[#ff0000] transition-colors ${FOCUS}`}
              >
                Send an email
              </a>
              <a
                href="https://linkedin.com/in/avishekdas"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-head font-semibold text-xs uppercase tracking-widest px-6 py-3 bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-colors ${FOCUS}`}
              >
                LinkedIn
              </a>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="border-t border-neutral-300 pt-4">
            <p className="font-mono text-xs text-neutral-400">
              © {new Date().getFullYear()} Avishek Das
            </p>
          </footer>

        </div>{/* end main sections */}
      </div>
    </main>
  );
}
