import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agentic Design Patterns: The Complete Guide to Building Agents That Actually Work | Aankit Roy',
  description: 'Understanding reflection, planning, tool use, and multi-agent patterns through real implementations and learning from what works (and what definitely doesn\'t)',
  keywords: 'agentic design patterns, AI agents, ReAct pattern, agent architecture, multi-agent systems, reflection pattern, planning patterns, tool use patterns, AI agent development',
  authors: [{ name: 'Aankit Roy' }],
  openGraph: {
    title: 'Agentic Design Patterns: The Complete Guide to Building Agents That Actually Work',
    description: 'Understanding reflection, planning, tool use, and multi-agent patterns through real implementations and learning from what works (and what definitely doesn\'t)',
    url: 'https://aankitroy.com/blog/agentic-design-patterns-complete-guide',
    siteName: 'Aankit Roy',
    images: [
      {
        url: 'https://aankitroy.com/aankitroy.png',
        width: 1200,
        height: 630,
        alt: 'Aankit Roy - AI Strategy & Engineering Leadership',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic Design Patterns: The Complete Guide to Building Agents That Actually Work',
    description: 'Understanding reflection, planning, tool use, and multi-agent patterns through real implementations',
    images: ['https://aankitroy.com/aankitroy.png'],
    creator: '@AankitRoy',
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

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
