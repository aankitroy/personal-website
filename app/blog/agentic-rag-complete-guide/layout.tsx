import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agentic RAG: When Retrieval Gets Smarter Than Your Search Bar | Aankit Roy',
  description: 'Understanding how agents transform RAG from simple retrieval to intelligent information synthesis—with contextual retrieval reducing failures by 67%. Complete guide to building agentic RAG systems.',
  keywords: [
    'agentic rag',
    'rag systems',
    'retrieval augmented generation',
    'contextual retrieval',
    'ai agents',
    'vector databases',
    'semantic search',
    'bm25',
    'reranking',
    'intelligent retrieval',
    'agentic design patterns',
    'agent tools',
    'information synthesis'
  ],
  authors: [{ name: 'Aankit Roy' }],
  openGraph: {
    title: 'Agentic RAG: When Retrieval Gets Smarter Than Your Search Bar',
    description: 'Understanding how agents transform RAG from simple retrieval to intelligent information synthesis—with contextual retrieval reducing failures by 67%',
    url: 'https://aankitroy.com/blog/agentic-rag-complete-guide',
    siteName: 'Aankit Roy',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-10-07T00:00:00.000Z',
    authors: ['Aankit Roy'],
    images: [
      {
        url: 'https://aankitroy.com/aankitroy.png',
        width: 1200,
        height: 630,
        alt: 'Agentic RAG: When Retrieval Gets Smarter Than Your Search Bar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic RAG: When Retrieval Gets Smarter Than Your Search Bar',
    description: 'Understanding how agents transform RAG from simple retrieval to intelligent information synthesis—with contextual retrieval reducing failures by 67%',
    creator: '@AankitRoy',
    images: ['https://aankitroy.com/aankitroy.png'],
  },
  alternates: {
    canonical: 'https://aankitroy.com/blog/agentic-rag-complete-guide',
  },
};

export default function AgenticRAGLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

