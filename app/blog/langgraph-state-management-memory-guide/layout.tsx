import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LangGraph State Management and Memory for Advanced AI Agents | Aankit Roy',
  description: 'Deep dive into building stateful AI agents with persistent memory using LangGraph. Learn state management patterns, memory types, and production deployment strategies for real AI systems.',
  keywords: [
    'LangGraph',
    'AI agents',
    'state management',
    'memory systems',
    'stateful AI',
    'agent frameworks',
    'AI architecture',
    'production AI',
    'persistent memory',
    'agent coordination'
  ],
  authors: [{ name: 'Aankit Roy' }],
  openGraph: {
    title: 'LangGraph State Management and Memory for Advanced AI Agents',
    description: 'Deep dive into building stateful AI agents with persistent memory using LangGraph. Learn state management patterns, memory types, and production deployment strategies.',
    type: 'article',
    publishedTime: '2025-09-24',
    authors: ['Aankit Roy'],
    tags: ['LangGraph', 'AI Agents', 'State Management', 'Memory Systems', 'AI Architecture']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LangGraph State Management and Memory for Advanced AI Agents',
    description: 'Deep dive into building stateful AI agents with persistent memory using LangGraph. Production patterns and real-world implementation strategies.',
    creator: '@aankitroy'
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
