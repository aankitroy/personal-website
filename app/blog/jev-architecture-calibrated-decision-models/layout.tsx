import type { Metadata } from 'next';

const title = 'Jev and the Case for Models That Decide Instead of Talk';
const description =
  'A practical breakdown of the Jev decision model architecture: shared-context encoding, isolated question branches, direct probability readouts, RLCD calibration, and how to turn calibrated probabilities into production actions.';
const url = 'https://aankitroy.com/blog/jev-architecture-calibrated-decision-models';

export const metadata: Metadata = {
  title: `${title} | Aankit Roy`,
  description,
  keywords: [
    'jev',
    'typesafe jev',
    'rlcd',
    'reinforcement learning for calibrated decisions',
    'calibrated probabilities',
    'decision models',
    'llm classification',
    'expected calibration error',
    'temperature scaling',
    'prefix caching',
    'ai agents',
    'production ai',
  ],
  authors: [{ name: 'Aankit Roy' }],
  openGraph: {
    title,
    description,
    url,
    siteName: 'Aankit Roy',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-11-14T00:00:00.000Z',
    authors: ['Aankit Roy'],
    images: [{ url: 'https://aankitroy.com/og-cover.png', width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@AankitRoy',
    images: ['https://aankitroy.com/og-cover.png'],
  },
  alternates: { canonical: url },
};

export default function JevLayout({ children }: { children: React.ReactNode }) {
  return children;
}
