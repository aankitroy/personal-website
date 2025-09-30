import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Building Agents with Claude Agent SDK - Real Implementation Guide | Aankit Roy",
  description: "Learn to build production AI agents with Claude Agent SDK. Real implementation lessons, agent loop patterns, tool design, and deployment strategies from building 8+ agents. Includes code examples and specific metrics.",
  keywords: [
    "Claude Agent SDK",
    "AI Agents",
    "Anthropic Claude",
    "Agent Development",
    "Claude Code SDK",
    "AI Agent Implementation",
    "Production AI Agents",
    "Agent Loop Pattern",
    "Tool Design",
    "MCP Integration",
    "Agentic Search",
    "Subagents",
    "AI Agent Architecture",
    "Claude API",
    "Agent Verification"
  ],
  authors: [{ name: 'Aankit Roy', url: 'https://aankitroy.com' }],
  openGraph: {
    title: "Building Agents with Claude Agent SDK - Real Implementation Guide",
    description: "Learn to build production AI agents with Claude Agent SDK. Real implementation lessons covering agent loop, tool design, subagents, and deployment from building 8+ production agents.",
    url: 'https://aankitroy.com/blog/claude-agent-sdk-building-agents-that-work',
    siteName: 'Aankit Roy - AI Strategy & Engineering Leadership',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-09-30T00:00:00.000Z',
    modifiedTime: '2025-09-30T00:00:00.000Z',
    authors: ['Aankit Roy'],
    tags: [
      'AI Agents',
      'Claude',
      'Agent Development',
      'Implementation',
      'Claude Agent SDK',
      'Anthropic',
      'Production AI',
      'Tool Design',
      'Agent Architecture'
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Building Agents with Claude Agent SDK - Real Implementation Guide",
    description: "Learn to build production AI agents with Claude Agent SDK. Real lessons from building 8+ agents with code examples and metrics.",
    creator: '@AankitRoy',
    site: '@AankitRoy',
  },
  alternates: {
    canonical: 'https://aankitroy.com/blog/claude-agent-sdk-building-agents-that-work',
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
