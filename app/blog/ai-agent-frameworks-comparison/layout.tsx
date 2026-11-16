import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Agent Frameworks: The Honest Comparison Nobody Talks About | Aankit Roy",
  description: "After building production systems with 8+ frameworks, here's what actually works when choosing between LangChain, LangGraph, CrewAI, AutoGen, and others. Real experience, honest insights.",
  keywords: ["AI Agent Frameworks", "LangChain", "LangGraph", "CrewAI", "AutoGen", "AI Framework Comparison", "Production AI Systems"],
  openGraph: {
    title: "AI Agent Frameworks: The Honest Comparison Nobody Talks About",
    description: "After building production systems with 8+ frameworks, here's what actually works when choosing between LangChain, LangGraph, CrewAI, AutoGen, and others.",
    url: 'https://aankitroy.com/blog/ai-agent-frameworks-comparison',
    type: 'article',
    images: [{ url: 'https://aankitroy.com/og-image.png', width: 1200, height: 630, alt: 'Aankit Roy, AI strategy and production AI systems' }],
    publishedTime: '2025-09-15',
    authors: ['Aankit Roy'],
    tags: ['AI Frameworks', 'LangChain', 'LangGraph', 'CrewAI', 'Production Systems'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://aankitroy.com/og-image.png'],
    title: "AI Agent Frameworks: The Honest Comparison Nobody Talks About",
    description: "After building production systems with 8+ frameworks, here's what actually works when choosing between LangChain, LangGraph, CrewAI, AutoGen, and others.",
  },
  alternates: {
    canonical: '/blog/ai-agent-frameworks-comparison',
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
