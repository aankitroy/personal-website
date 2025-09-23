import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Strategy & Engineering Leadership Blog - Aankit Roy",
  description: "Expert insights on AI strategy, engineering leadership, scaling systems, and building technical teams. Practical advice from real-world experience at Y Combinator companies.",
  keywords: ["AI Strategy Blog", "Engineering Leadership", "AI Implementation", "Technical Leadership", "Scaling AI Systems", "Team Building", "AI Agents"],
  openGraph: {
    title: "AI Strategy & Engineering Leadership Blog - Aankit Roy",
    description: "Expert insights on AI strategy, engineering leadership, scaling systems, and building technical teams. Practical advice from real-world experience.",
    url: 'https://aankitroy.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Strategy & Engineering Leadership Blog - Aankit Roy",
    description: "Expert insights on AI strategy, engineering leadership, scaling systems, and building technical teams. Practical advice from real-world experience.",
  },
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
