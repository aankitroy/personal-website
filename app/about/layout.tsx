import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Aankit Roy - AI Strategy & Engineering Leadership Expert",
  description: "Learn about Aankit Roy's journey from engineering to AI strategy leadership. Over a decade of experience scaling technical teams and implementing AI solutions at Y Combinator companies.",
  keywords: ["Aankit Roy", "AI Strategy Expert", "Engineering Leadership", "CTO", "Y Combinator", "Writesonic", "Khabri", "Technical Leadership"],
  openGraph: {
    title: "About Aankit Roy - AI Strategy & Engineering Leadership Expert",
    description: "Learn about Aankit Roy's journey from engineering to AI strategy leadership. Over a decade of experience scaling technical teams and implementing AI solutions.",
    url: 'https://aankitroy.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Aankit Roy - AI Strategy & Engineering Leadership Expert",
    description: "Learn about Aankit Roy's journey from engineering to AI strategy leadership. Over a decade of experience scaling technical teams and implementing AI solutions.",
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
