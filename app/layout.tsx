import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avishek Das — Enterprise Architect & AI Leader",
  description:
    "Enterprise Architect with 21 years building at scale. Currently leading AI-native transformation for a North American digital bank at Cognizant — RAG pipelines, LLM agents, and production systems on AWS.",
  openGraph: {
    title: "Avishek Das — Enterprise Architect & AI Leader",
    description:
      "Enterprise Architect leading AI-native transformation for a North American digital bank. 21 years across regulated banking, startups, government consulting, and cloud migration.",
    url: "https://avishekdas.dev",
    siteName: "Avishek Das",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
