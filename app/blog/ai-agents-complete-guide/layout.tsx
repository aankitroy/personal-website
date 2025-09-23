import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Agents: Complete Guide to Understanding & Implementing Intelligent Automation",
  description: "Comprehensive deep-dive into AI agents, their architecture, use cases, and practical implementation strategies based on real-world experience building agent systems at scale.",
  keywords: ["AI Agents", "Intelligent Automation", "AI Implementation", "Agent Architecture", "Business Automation", "AI Systems"],
  openGraph: {
    title: "AI Agents: Complete Guide to Understanding & Implementing Intelligent Automation",
    description: "Comprehensive deep-dive into AI agents, their architecture, use cases, and practical implementation strategies based on real-world experience.",
    url: 'https://aankitroy.com/blog/ai-agents-complete-guide',
    type: 'article',
    publishedTime: '2025-09-15',
    authors: ['Aankit Roy'],
    tags: ['AI Agents', 'Automation', 'System Architecture', 'Implementation Guide'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Agents: Complete Guide to Understanding & Implementing Intelligent Automation",
    description: "Comprehensive deep-dive into AI agents, their architecture, use cases, and practical implementation strategies based on real-world experience.",
  },
  alternates: {
    canonical: '/blog/ai-agents-complete-guide',
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
