import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Context Engineering for AI Agents: What Actually Works in Production | Aankit Roy",
  description: "Learn practical context engineering strategies for building reliable AI agents. From managing token budgets to avoiding context rot, with real examples from production systems handling millions of requests.",
  keywords: [
    "Context Engineering",
    "AI Agents",
    "Context Window Optimization",
    "Token Budget Management",
    "Context Rot",
    "Agent Memory",
    "Agentic Search",
    "RAG vs Agentic Search",
    "Context Compaction",
    "Multi-Agent Systems",
    "LLM Context Management",
    "Agent Architecture",
    "Production AI Systems",
    "Context Pipelines",
    "Agent State Management"
  ],
  authors: [{ name: 'Aankit Roy', url: 'https://aankitroy.com' }],
  openGraph: {
    title: "Context Engineering for AI Agents: What Actually Works in Production",
    description: "Practical context engineering strategies for building reliable AI agents. Real examples from production systems, token budget optimization, and techniques to avoid context rot.",
    url: 'https://aankitroy.com/blog/context-engineering-ai-agents-guide',
    siteName: 'Aankit Roy - AI Strategy & Engineering Leadership',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-10-01T00:00:00.000Z',
    modifiedTime: '2025-10-01T00:00:00.000Z',
    authors: ['Aankit Roy'],
    tags: [
      'Context Engineering',
      'AI Agents',
      'Production AI',
      'Token Optimization',
      'Agent Architecture',
      'Context Management',
      'LLM Engineering'
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Context Engineering for AI Agents: What Actually Works in Production",
    description: "Practical context engineering strategies from production systems. Token budgets, context rot, and real implementation examples.",
    creator: '@AankitRoy',
    site: '@AankitRoy',
  },
  alternates: {
    canonical: 'https://aankitroy.com/blog/context-engineering-ai-agents-guide',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
