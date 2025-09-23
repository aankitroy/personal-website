import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Client Testimonials - Aankit Roy AI Strategy & Engineering Leadership",
  description: "Read testimonials from clients and colleagues about Aankit Roy's AI strategy consulting, engineering leadership, and technical expertise. Real feedback from successful projects.",
  keywords: ["Client Testimonials", "AI Strategy Reviews", "Engineering Leadership Feedback", "Technical Consulting Reviews", "Aankit Roy Recommendations"],
  openGraph: {
    title: "Client Testimonials - Aankit Roy AI Strategy & Engineering Leadership",
    description: "Read testimonials from clients and colleagues about Aankit Roy's AI strategy consulting, engineering leadership, and technical expertise.",
    url: 'https://aankitroy.com/testimonials',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Client Testimonials - Aankit Roy AI Strategy & Engineering Leadership",
    description: "Read testimonials from clients and colleagues about Aankit Roy's AI strategy consulting, engineering leadership, and technical expertise.",
  },
  alternates: {
    canonical: '/testimonials',
  },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
