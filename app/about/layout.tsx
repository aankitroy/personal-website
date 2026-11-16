import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Aankit Roy | Engineer First, Advisor Second",
  description: "Twelve years building software millions use, from co-founding Khabri (YC S19) to leading AI engineering at GeoIQ. Now helping founders and boards turn AI strategy into production.",
  keywords: ["Aankit Roy", "AI engineering leader", "VP AI Engineering", "GeoIQ", "Khabri", "Y Combinator", "startup CTO", "Writesonic"],
  openGraph: {
    title: "About Aankit Roy | Engineer First, Advisor Second",
    description: "Twelve years building software millions use, from co-founding Khabri (YC S19) to leading AI engineering at GeoIQ. Now helping founders and boards turn AI strategy into production.",
    url: "https://aankitroy.com/about",
    siteName: "Aankit Roy",
    type: "website",
    images: [{ url: '/og-cover.png', width: 1200, height: 630, alt: 'Aankit Roy, AI strategy and production AI systems' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Aankit Roy | Engineer First, Advisor Second",
    description: "Twelve years building software millions use, from co-founding Khabri (YC S19) to leading AI engineering at GeoIQ. Now helping founders and boards turn AI strategy into production.",
    creator: "@AankitRoy",
    images: ["/og-cover.png"],
  },
  alternates: { canonical: "/about" },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
