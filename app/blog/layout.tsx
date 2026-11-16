import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Field Notes on Production AI Systems | Aankit Roy",
  description: "Essays on AI agents, retrieval, calibration and the engineering teams behind them. Written from systems that shipped, by Aankit Roy.",
  keywords: ["AI agents", "agentic AI", "agentic RAG", "context engineering", "calibrated AI decisions", "engineering leadership", "Aankit Roy blog"],
  openGraph: {
    title: "Field Notes on Production AI Systems | Aankit Roy",
    description: "Essays on AI agents, retrieval, calibration and the engineering teams behind them. Written from systems that shipped, by Aankit Roy.",
    url: "https://aankitroy.com/blog",
    siteName: "Aankit Roy",
    type: "website",
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Aankit Roy, AI strategy and production AI systems' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Field Notes on Production AI Systems | Aankit Roy",
    description: "Essays on AI agents, retrieval, calibration and the engineering teams behind them. Written from systems that shipped, by Aankit Roy.",
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
