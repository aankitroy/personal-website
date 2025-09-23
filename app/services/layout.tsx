import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Strategy & Engineering Services - Aankit Roy",
  description: "Expert AI strategy consulting, system architecture design, technical team leadership, and AI agent development services. Transform your business with proven AI implementation strategies.",
  keywords: ["AI Strategy Consulting", "AI Implementation Services", "System Architecture", "Technical Leadership", "AI Agents Development", "Engineering Consulting"],
  openGraph: {
    title: "AI Strategy & Engineering Services - Aankit Roy",
    description: "Expert AI strategy consulting, system architecture design, technical team leadership, and AI agent development services.",
    url: 'https://aankitroy.com/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Strategy & Engineering Services - Aankit Roy",
    description: "Expert AI strategy consulting, system architecture design, technical team leadership, and AI agent development services.",
  },
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
