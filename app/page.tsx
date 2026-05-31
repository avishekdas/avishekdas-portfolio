export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-20">

        {/* ── HEADER ─────────────────────────────────────────────── */}
        <section>
          <h1 className="font-head font-bold text-4xl sm:text-5xl tracking-tight leading-tight text-black mb-3">
            Avishek Das
          </h1>
          <p className="text-lg text-black mb-1">
            Enterprise Architect · Associate Director ·{" "}
            <a
              href="https://www.cognizant.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b-2 border-accent hover:text-accent transition-colors"
            >
              Cognizant
            </a>
          </p>
          <p className="text-sm text-neutral-400 mb-6">Belle Mead, NJ · 21 years in enterprise technology</p>
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
                className="font-mono text-xs font-medium tracking-widest uppercase text-black border-b-2 border-accent pb-0.5 hover:text-accent transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </section>

        {/* ── ABOUT ──────────────────────────────────────────────── */}
        <section>
          <div className="border-b-2 border-black pb-2 mb-6">
            <p className="font-mono text-xs font-medium tracking-widest uppercase text-accent">About</p>
          </div>
          <p className="text-base text-black leading-relaxed">
            I build the architecture that moves AI from proof-of-concept to production.
            21 years, 90-person teams, regulated banking. Currently at Cognizant driving
            AI-native operations for a North American digital bank on AWS — shipping RAG
            pipelines, LLM agents, and RPA automation at scale.
          </p>
        </section>

        {/* ── WHAT I DO ──────────────────────────────────────────── */}
        <section>
          <div className="border-b-2 border-black pb-2 mb-6">
            <p className="font-mono text-xs font-medium tracking-widest uppercase text-accent">What I Do</p>
          </div>
          <div className="grid sm:grid-cols-3 border-2 border-black">
            {[
              {
                title: "AI Transformation",
                desc: "RAG pipelines, LLM agents, MCP servers, and RPA automation — in production, not in pilots.",
              },
              {
                title: "Architecture Leadership",
                desc: "Cloud-native, serverless systems on AWS. Microservices, event-driven design, and DDD in regulated environments.",
              },
              {
                title: "Engineering at Scale",
                desc: "Cross-functional teams of 90+. Hiring, mentoring, and building the culture that ships.",
              },
            ].map((card, i) => (
              <div
                key={card.title}
                className={`p-5 ${i < 2 ? "border-b-2 sm:border-b-0 sm:border-r-2 border-black" : ""}`}
              >
                <h3 className="font-head font-bold text-xs uppercase tracking-widest text-black mb-2">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SELECTED WORK ──────────────────────────────────────── */}
        <section>
          <div className="border-b-2 border-black pb-2 mb-6">
            <p className="font-mono text-xs font-medium tracking-widest uppercase text-accent">Selected Work</p>
          </div>
          <div className="space-y-4">
            {[
              {
                title: "Conversational Banking Agent",
                tags: ["Amazon Lex", "Bedrock (Claude 3)", "RAG", "OpenSearch", "MCP Server"],
                desc: "End-to-end AI chatbot for a North American digital bank. Auto-detects Spanish/English, orchestrates core banking operations via a custom MCP server. Deflects 45% of tier-1 customer queries without human intervention.",
              },
              {
                title: "LLM-Powered KYC Pipeline",
                tags: ["AWS Bedrock", "RAG", "Lambda", "DynamoDB"],
                desc: "RAG-based document processing for compliance automation. Replaced manual KYC document review with LLM-powered extraction — cutting review time 65% in a regulated banking environment.",
              },
              {
                title: "Loan Processing Automation",
                tags: ["n8n", "RPA", "AWS"],
                desc: "Orchestrated n8n and RPA workflows automating loan processing and compliance steps. Reduced cycle time 40–60% and established the enterprise AI orchestration playbook.",
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

        {/* ── CAREER ─────────────────────────────────────────────── */}
        <section>
          <div className="border-b-2 border-black pb-2 mb-6">
            <p className="font-mono text-xs font-medium tracking-widest uppercase text-accent">Career</p>
          </div>
          <div className="space-y-6">
            {[
              { role: "Enterprise Architect (Associate Director)", company: "Cognizant Technology Solutions", location: "Belle Mead, NJ",  period: "Dec 2021 – Present" },
              { role: "Chief Technology Officer",                  company: "RICE Smart",                    location: "Kolkata, India",  period: "May – Dec 2021" },
              { role: "Head of Technology",                        company: "ABP eVentures",                 location: "Kolkata, India",  period: "2018 – 2021" },
              { role: "Application Architect",                     company: "IBM",                           location: "Kolkata, India",  period: "2015 – 2018" },
              { role: "Principal Software Engineer",               company: "CA Technologies",               location: "Hyderabad, India", period: "2014 – 2015" },
              { role: "Technical Manager → Senior Consultant → Team Lead", company: "HCL · Deloitte · Cognizant", location: "", period: "2004 – 2014" },
            ].map((job) => (
              <div key={job.company + job.period} className="pl-4 border-l-4 border-black relative">
                <span className="absolute -left-[5px] top-0 w-2 h-2 bg-accent rotate-45 block" />
                <p className="font-head font-bold text-xs uppercase tracking-widest text-black">{job.role}</p>
                <p className="text-sm text-neutral-500">
                  {job.company}{job.location ? ` · ${job.location}` : ""}
                </p>
                <p className="font-mono text-xs text-neutral-400 mt-0.5">{job.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CREDENTIALS ────────────────────────────────────────── */}
        <section>
          <div className="border-b-2 border-black pb-2 mb-6">
            <p className="font-mono text-xs font-medium tracking-widest uppercase text-accent">Credentials</p>
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
              <span key={cert} className="font-mono text-xs text-black bg-neutral-100 border border-neutral-300 px-3 py-1.5">
                {cert}
              </span>
            ))}
          </div>
        </section>

        {/* ── CONTACT ────────────────────────────────────────────── */}
        <section className="bg-neutral-100 border-2 border-black p-8 relative">
          <span className="absolute -top-2 -left-2 -right-2 -bottom-2 border border-accent pointer-events-none" />
          <p className="font-mono text-xs font-medium tracking-widest uppercase text-accent mb-2">Contact</p>
          <h2 className="font-head font-bold text-2xl uppercase tracking-tight text-black mb-2">
            Let&apos;s work together
          </h2>
          <p className="text-sm text-neutral-500 mb-6">
            Open to architecture advisory, AI transformation engagements, and senior leadership roles.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:avishekdas.cool@gmail.com"
              className="font-head font-semibold text-xs uppercase tracking-widest px-6 py-3 bg-black text-white border-2 border-black hover:bg-accent hover:border-accent transition-colors"
            >
              Send an email
            </a>
            <a
              href="https://linkedin.com/in/avishekdas"
              target="_blank"
              rel="noopener noreferrer"
              className="font-head font-semibold text-xs uppercase tracking-widest px-6 py-3 bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* ── FOOTER ─────────────────────────────────────────────── */}
        <footer className="border-t-2 border-neutral-200 pt-4">
          <p className="font-mono text-xs text-neutral-400">
            © {new Date().getFullYear()} Avishek Das
          </p>
        </footer>

      </div>
    </main>
  );
}
