import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PAI Dashboard - Personal AI Infrastructure",
  description: "Multi-stage deployment pipeline for full-stack applications across web and native platforms",
  keywords: ["PAI", "Personal AI Infrastructure", "Development Pipeline", "Vercel", "Next.js"],
  authors: [{ name: "Wayne Bridges", url: "https://freebeer.ai" }],
  creator: "Free Beer Studio",
  publisher: "Free Beer Studio",
  robots: "index, follow",
  openGraph: {
    title: "PAI Dashboard",
    description: "Personal AI Infrastructure - Multi-stage development pipeline",
    url: "https://app.freebeer.ai",
    siteName: "PAI Dashboard",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
