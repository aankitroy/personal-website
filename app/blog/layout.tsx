import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Writing on AI Agents and Engineering Leadership | Aankit Roy",
  description: "Field notes on building production AI agents, retrieval, calibration and engineering teams, from twelve years of shipping software at scale.",
  keywords: ["AI agents", "agentic AI", "agentic RAG", "context engineering", "calibrated AI decisions", "engineering leadership", "Aankit Roy blog"],
  openGraph: {
    title: "Writing on AI Agents and Engineering Leadership | Aankit Roy",
    description: "Field notes on building production AI agents, retrieval, calibration and engineering teams, from twelve years of shipping software at scale.",
    url: "https://aankitroy.com/blog",
    siteName: "Aankit Roy",
    type: "website",
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Aankit Roy, AI strategy and production AI systems' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Writing on AI Agents and Engineering Leadership | Aankit Roy",
    description: "Field notes on building production AI agents, retrieval, calibration and engineering teams, from twelve years of shipping software at scale.",
    creator: "@AankitRoy",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/blog" },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
