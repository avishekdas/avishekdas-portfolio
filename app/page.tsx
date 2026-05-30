export default function Home() {
  return (
    <main className="min-h-screen bg-base text-text font-sans">
      <div className="max-w-3xl mx-auto px-6 py-20 space-y-24">

        {/* ── HEADER ─────────────────────────────────────────────── */}
        <section>
          <h1 className="text-4xl font-semibold tracking-tight text-text mb-2">
            Avishek Das
          </h1>
          <p className="text-lg text-muted mb-6">
            Enterprise Architect · Associate Director ·{" "}
            <a
              href="https://www.cognizant.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-accent transition-colors"
            >
              Cognizant
            </a>
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-muted">
            <span>Belle Mead, NJ</span>
            <span className="text-border">·</span>
            <a
              href="https://linkedin.com/in/avishekdas"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-border">·</span>
            <a
              href="https://github.com/avishekdas"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <span className="text-border">·</span>
            <a
              href="mailto:avishekdas.cool@gmail.com"
              className="hover:text-accent transition-colors"
            >
              avishekdas.cool@gmail.com
            </a>
          </div>
        </section>

        {/* ── ABOUT ──────────────────────────────────────────────── */}
        <section>
          <p className="section-label">About</p>
          <p className="text-lg text-muted leading-relaxed">
            I build the architecture that moves AI from proof-of-concept to production.
            21 years, 90-person teams, regulated banking. Currently at Cognizant driving
            AI-native operations for a North American digital bank on AWS — shipping RAG
            pipelines, LLM agents, and RPA automation at scale.
          </p>
        </section>

        {/* ── WHAT I DO ──────────────────────────────────────────── */}
        <section>
          <p className="section-label">What I Do</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                title: "AI Transformation",
                desc: "Moving organisations from AI experimentation to AI-native operations. RAG pipelines, LLM agents, MCP servers, and RPA automation — in production, not in pilots.",
              },
              {
                title: "Architecture Leadership",
                desc: "Enterprise and solution architecture for cloud-native, serverless systems. AWS at scale. Microservices, event-driven design, DDD, and NFR definition in regulated environments.",
              },
              {
                title: "Engineering at Scale",
                desc: "Leading cross-functional teams of 90+ engineers across architecture, delivery, and cloud engineering. Hiring, mentoring, and building the culture that ships.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-surface rounded-lg p-5 border border-border"
              >
                <h3 className="text-sm font-semibold text-text mb-2">{card.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SELECTED WORK ──────────────────────────────────────── */}
        <section>
          <p className="section-label">Selected Work</p>
          <div className="space-y-8">
            {[
              {
                title: "Conversational Banking Agent",
                tags: ["Amazon Lex", "Bedrock (Claude 3)", "RAG", "OpenSearch", "MCP Server"],
                desc: "End-to-end AI chatbot for a North American digital bank. Auto-detects Spanish/English, orchestrates core banking operations via a custom MCP server built on the bank's OpenAPI spec. Deflects 45% of tier-1 customer queries without human intervention.",
              },
              {
                title: "LLM-Powered KYC Pipeline",
                tags: ["AWS Bedrock", "RAG", "Lambda", "DynamoDB"],
                desc: "RAG-based document processing pipeline for compliance automation. Replaced manual KYC document review with an LLM-powered extraction and validation workflow — cutting review time by 65% in a regulated banking environment.",
              },
              {
                title: "Loan Processing Automation",
                tags: ["n8n", "RPA", "AWS"],
                desc: "Orchestrated n8n and RPA workflows automating loan processing and compliance steps across a multi-system banking stack. Reduced cycle time 40–60% and established the enterprise AI orchestration playbook used across the programme.",
              },
            ].map((work) => (
              <div key={work.title} className="border-l-2 border-border pl-6">
                <h3 className="text-base font-semibold text-text mb-1">{work.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-accent bg-accent/10 rounded px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted leading-relaxed">{work.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CAREER ─────────────────────────────────────────────── */}
        <section>
          <p className="section-label">Career</p>
          <div className="space-y-5">
            {[
              {
                role: "Enterprise Architect (Associate Director)",
                company: "Cognizant Technology Solutions",
                period: "Dec 2021 – Present",
                note: "Belle Mead, NJ",
              },
              {
                role: "Chief Technology Officer",
                company: "RICE Smart",
                period: "May 2021 – Dec 2021",
                note: "Kolkata, India",
              },
              {
                role: "Head of Technology",
                company: "ABP eVentures",
                period: "Jul 2018 – May 2021",
                note: "Kolkata, India",
              },
              {
                role: "Application Architect",
                company: "IBM",
                period: "Jul 2015 – Jul 2018",
                note: "Kolkata, India",
              },
              {
                role: "Principal Software Engineer",
                company: "CA Technologies",
                period: "May 2014 – Jul 2015",
                note: "Hyderabad, India",
              },
              {
                role: "Technical Manager → Senior Consultant → Team Lead",
                company: "HCL · Deloitte · Cognizant",
                period: "2004 – 2014",
                note: "",
              },
            ].map((job) => (
              <div key={job.company + job.period} className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-text">{job.role}</p>
                  <p className="text-sm text-muted">{job.company}{job.note ? ` · ${job.note}` : ""}</p>
                </div>
                <p className="text-sm text-muted whitespace-nowrap">{job.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CREDENTIALS ────────────────────────────────────────── */}
        <section>
          <p className="section-label">Credentials</p>
          <div className="flex flex-wrap gap-2">
            {[
              "AWS Certified Solutions Architect – Associate",
              "AWS Cloud Practitioner",
              "SAFe Agilist",
              "IBM Certified Application Developer – Cloud V2",
              "IBM Blockchain Essentials",
              "B.Eng. Computer Science · University of North Bengal",
            ].map((cert) => (
              <span
                key={cert}
                className="text-sm text-muted bg-surface border border-border rounded px-3 py-1.5"
              >
                {cert}
              </span>
            ))}
          </div>
        </section>

        {/* ── CONTACT ────────────────────────────────────────────── */}
        <section>
          <p className="section-label">Contact</p>
          <p className="text-muted text-sm mb-6">
            Open to architecture advisory, AI transformation engagements, and senior leadership roles.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:avishekdas.cool@gmail.com"
              className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-accent/90 transition-colors"
            >
              Send an email
            </a>
            <a
              href="https://linkedin.com/in/avishekdas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-surface border border-border text-text text-sm font-medium px-5 py-2.5 rounded-lg hover:border-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* ── FOOTER ─────────────────────────────────────────────── */}
        <footer className="pt-8 border-t border-border">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Avishek Das
          </p>
        </footer>

      </div>
    </main>
  );
}
