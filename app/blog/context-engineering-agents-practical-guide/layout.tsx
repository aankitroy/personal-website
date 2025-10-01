import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Context Engineering for Agents: The Practical Guide Nobody Writes | Aankit Roy",
  description: "Understanding context engineering's four strategies—write, select, compress, and isolate—through real examples from Claude Code, ChatGPT, Cursor, Windsurf, and research systems. Analysis of production implementations and the 15x token multiplier in multi-agent systems.",
  keywords: [
    "Context Engineering",
    "AI Agents",
    "Agent Memory",
    "Context Window Management",
    "Multi-Agent Systems",
    "Agent State Management",
    "LangGraph Context",
    "Agent Architecture",
    "Production AI Agents",
    "Context Compression",
    "Agent Scratchpads",
    "Context Isolation",
    "Agent Performance",
    "Token Optimization",
    "Agent Cost Optimization",
    "Claude Code",
    "ChatGPT Memory",
    "Cursor AI",
    "Windsurf AI",
    "Anthropic Research"
  ],
  authors: [{ name: 'Aankit Roy', url: 'https://aankitroy.com' }],
  creator: 'Aankit Roy',
  publisher: 'Aankit Roy',
  category: 'Technology',
  openGraph: {
    title: "Context Engineering for Agents: The Practical Guide Nobody Writes",
    description: "Understanding context engineering through real production examples. How Claude Code, ChatGPT, Cursor, and others implement write, select, compress, and isolate strategies.",
    url: 'https://aankitroy.com/blog/context-engineering-agents-practical-guide',
    siteName: 'Aankit Roy - AI Strategy & Engineering Leadership',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-10-02T00:00:00.000Z',
    modifiedTime: '2025-10-02T00:00:00.000Z',
    authors: ['Aankit Roy'],
    section: 'AI Agents',
    tags: [
      'Context Engineering',
      'AI Agents',
      'Production AI',
      'Token Optimization',
      'Agent Architecture',
      'Context Management',
      'LLM Engineering',
      'Multi-Agent Systems',
      'Agent Memory',
      'LangGraph'
    ],
    images: [
      {
        url: 'https://aankitroy.com/aankitroy.png',
        width: 1200,
        height: 630,
        alt: 'Context Engineering for Agents by Aankit Roy',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Context Engineering for Agents: The Practical Guide Nobody Writes",
    description: "Context engineering through production examples: Claude Code's auto-compaction, multi-agent's 15x token cost, and real memory systems.",
    creator: '@AankitRoy',
    site: '@AankitRoy',
    images: ['https://aankitroy.com/aankitroy.png'],
  },
  alternates: {
    canonical: 'https://aankitroy.com/blog/context-engineering-agents-practical-guide',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'article:section': 'AI Agents',
    'article:tag': 'Context Engineering, AI Agents, Multi-Agent Systems, LangGraph',
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
