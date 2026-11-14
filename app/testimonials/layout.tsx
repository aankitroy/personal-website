import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Testimonials | Aankit Roy",
  description: "What co-founders, CEOs, engineers and mentees say about working with Aankit Roy, from Khabri and Writesonic to AI advisory and mentorship.",
  keywords: ["Aankit Roy testimonials", "Aankit Roy recommendations", "AI mentorship", "engineering leadership"],
  openGraph: {
    title: "Testimonials | Aankit Roy",
    description: "What co-founders, CEOs, engineers and mentees say about working with Aankit Roy, from Khabri and Writesonic to AI advisory and mentorship.",
    url: "https://aankitroy.com/testimonials",
    siteName: "Aankit Roy",
    type: "website",
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Aankit Roy, AI strategy and production AI systems' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Testimonials | Aankit Roy",
    description: "What co-founders, CEOs, engineers and mentees say about working with Aankit Roy, from Khabri and Writesonic to AI advisory and mentorship.",
    creator: "@AankitRoy",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
