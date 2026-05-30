import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avishek Das — Enterprise Architect & AI Leader",
  description:
    "Enterprise Architect and Associate Director driving AI-native transformation in regulated banking on AWS. 21 years across banking, fintech, edtech, and telecom.",
  openGraph: {
    title: "Avishek Das — Enterprise Architect & AI Leader",
    description:
      "Enterprise Architect driving AI-native transformation in regulated banking on AWS.",
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
