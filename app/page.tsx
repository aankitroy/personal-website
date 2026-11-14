import React from 'react';
import Link from 'next/link';
import { Header } from '../components/Header';
import { SiteFooter } from '../components/SiteFooter';
import { BOOKING_URL } from '../components/site';

const record = [
  {
    years: '2026 – now',
    org: 'Stealth AI startup',
    role: 'Co-founder',
    outcome: 'Building an autonomous AI engine.',
  },
  {
    years: '2025 – 2026',
    org: 'GeoIQ',
    role: 'VP, AI Engineering',
    outcome: 'Built the AI engineering team from scratch and shipped agentic systems handling 10,000 sessions a day in production, while cutting agent cost by 75%. Presented the work at the Ai4 conference.',
  },
  {
    years: '2025',
    org: 'Isha Foundation',
    role: 'Engineering Leader',
    outcome: 'Led engineering on the Miracle of Mind project.',
  },
  {
    years: '2024',
    org: 'Pruoo Healthcare',
    role: 'Head of Engineering',
    outcome: 'Rebuilt the engineering team behind a million-user parenting platform and cut app launch time by 80%.',
  },
  {
    years: '2023',
    org: 'Writesonic',
    role: 'Engineering Manager',
    outcome: 'Took response times from 1.5s to 400ms for 3M+ paying users, halved infrastructure cost and tripled the team.',
  },
  {
    years: '2017 – 2023',
    org: 'Khabri, Y Combinator S19',
    role: 'Co-founder & CTO',
    outcome: 'Built a vernacular audio platform to 5M+ users with 14ms response times. Raised $3.2M.',
  },
];

const featuredQuote = {
  text: 'Aankit’s technical architecture decisions at Writesonic helped us scale from handling thousands to millions of AI requests daily. His optimization work reduced our infrastructure costs by 73% while improving performance dramatically.',
  author: 'Samanyou Garg',
  role: 'Founder & CEO, Writesonic',
};

const quotes = [
  {
    text: 'We scaled to 6 million users and achieved $1.2 million ARR over 6+ years… He consistently delivered tech solutions that exceeded industry benchmarks, even under the typical constraints of an early-stage startup.',
    author: 'Pulkit Sharma',
    role: 'Co-founder of Khabri, YC alum',
  },
  {
    text: 'His tech skills are unparalleled, and he is an innovative thinker. His binary approach to decision-making is spot-on.',
    author: 'Dushyant Kohli',
    role: 'Co-founder & CEO, Khabri',
  },
  {
    text: 'His leadership style is characterised by a unique ability to motivate and keep the enthusiasm of the entire team high.',
    author: 'Pulkita Marwah',
    role: 'Google Cloud Consultant, Searce',
  },
];

const coverage = [
  {
    outlet: 'TechCrunch',
    title: 'Named one of 12 favourite startups at Y Combinator’s S19 Demo Day',
    href: 'https://techcrunch.com/2019/08/21/our-12-favorite-startups-from-y-combinators-s19-demo-day-2',
    action: 'Read the article',
  },
  {
    outlet: 'Forbes India',
    title: 'Khabri in the story of regional podcasts finding their voice',
    href: 'https://www.forbesindia.com/article/take-one-big-story-of-the-day/regional-podcasts-find-their-voice/63743/1',
    action: 'Read the article',
  },
  {
    outlet: 'ETCIO',
    title: 'On the role of a technology leader and scaling platforms',
    href: 'https://www.youtube.com/watch?v=pokPfUjnCek',
    action: 'Watch the interview',
  },
];

const essays = [
  {
    slug: 'jev-architecture-calibrated-decision-models',
    title: 'Jev and the case for models that decide instead of talk',
    date: 'November 2026',
    read: '14 min',
  },
  {
    slug: 'agentic-rag-complete-guide',
    title: 'Agentic RAG: when retrieval gets smarter than your search bar',
    date: 'October 2025',
    read: '18 min',
  },
  {
    slug: 'agentic-design-patterns-complete-guide',
    title: 'Agentic design patterns: building agents that actually work',
    date: 'October 2025',
    read: '25 min',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Aankit Roy',
  url: 'https://aankitroy.com',
  image: 'https://aankitroy.com/aankitroy.png',
  jobTitle: 'AI Strategy & Engineering Leadership Advisor',
  alumniOf: [
    { '@type': 'Organization', name: 'Y Combinator' },
    { '@type': 'Organization', name: 'Birla Institute of Technology' },
  ],
  knowsAbout: ['AI Strategy', 'Engineering Leadership', 'System Architecture', 'AI Agents', 'Technical Leadership'],
  sameAs: [
    'https://www.linkedin.com/in/aankit-roy-20515b35/',
    'https://x.com/AankitRoy',
    'https://github.com/aankitroy',
  ],
  description:
    'Advisor to founders and leadership teams on AI strategy and engineering leadership. Over a decade of building products used by millions.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header currentPage="home" tone="dark" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-evergreen-900 text-evergreen-50">
        <div className="mx-auto grid max-w-6xl items-end gap-14 px-6 pb-20 pt-14 lg:grid-cols-12 lg:items-center lg:gap-10 lg:px-10 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-7">
            <h1 className="hero-rise font-serif text-[2.75rem] font-normal leading-[1.02] tracking-[-0.02em] text-white sm:text-display-lg lg:text-[4.25rem] xl:text-display-xl [text-wrap:balance]">
              AI strategy from someone who has built it, at scale.
            </h1>
            <div className="hero-rule mt-10 h-px w-40 bg-brass-300" aria-hidden />
            <p className="hero-rise hero-rise-2 mt-8 max-w-[34rem] text-lg leading-relaxed text-evergreen-100/85 sm:text-[21px] sm:leading-[1.55]">
              I advise founders, CEOs and boards on where AI creates real value, then help their teams build it.
              Twelve years of engineering leadership, from a Y Combinator startup I co-founded to platforms serving millions.
            </p>
            <div className="hero-rise hero-rise-3 mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={BOOKING_URL}
                className="rounded-full bg-brass-300 px-7 py-3.5 text-[15px] font-medium text-evergreen-950 transition-colors hover:bg-brass-200"
              >
                Book a conversation
              </a>
              <Link href="/about" className="text-[15px] text-evergreen-100/85 underline decoration-brass-300/50 underline-offset-[6px] hover:text-white">
                Read my background
              </Link>
            </div>
          </div>

          <figure className="hero-rise hero-rise-2 mx-auto w-full max-w-[20rem] lg:col-span-5 lg:mr-0">
            <div className="relative">
              <div className="absolute -inset-3 rounded-t-full border border-brass-300/40" aria-hidden />
              <img
                src="/aankitroy-portrait.jpg"
                alt="Portrait of Aankit Roy"
                width={960}
                height={1280}
                className="relative aspect-[3/4] w-full rounded-t-full object-cover object-top"
              />
            </div>
          </figure>
        </div>
      </section>

      {/* Record */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-display-sm sm:text-display-md">Built for millions, before advising anyone.</h2>
            <p className="mt-6 max-w-sm leading-relaxed text-gray-600 dark:text-gray-400">
              The advice I give comes from systems I have shipped and teams I have led, not from slides.
            </p>
          </div>
          <ol className="lg:col-span-8">
            {record.map((r) => (
              <li
                key={r.org}
                className="grid gap-2 border-t border-gray-200 py-7 first:border-t-0 first:pt-0 sm:grid-cols-[8.5rem_1fr] sm:gap-8 dark:border-gray-800"
              >
                <span className="pt-1 text-sm tabular-nums text-gray-500">{r.years}</span>
                <div>
                  <p className="font-serif text-2xl leading-tight">
                    {r.org}
                    <span className="text-gray-500"> / {r.role}</span>
                  </p>
                  <p className="mt-2 max-w-xl leading-relaxed text-gray-600 dark:text-gray-400">{r.outcome}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimony */}
      <section className="border-y border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
          <blockquote className="max-w-4xl">
            <p className="font-serif text-[1.9rem] italic leading-[1.25] text-evergreen-900 sm:text-[2.6rem] dark:text-evergreen-100">
              “{featuredQuote.text}”
            </p>
            <footer className="mt-8 text-[15px]">
              <span className="font-medium">{featuredQuote.author}</span>
              <span className="text-gray-500">, {featuredQuote.role}</span>
            </footer>
          </blockquote>

          <div className="mt-20 grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-gray-200 dark:md:divide-gray-800">
            {quotes.map((q) => (
              <figure key={q.author} className="md:px-8 md:first:pl-0 md:last:pr-0">
                <blockquote className="leading-relaxed text-gray-700 dark:text-gray-300">“{q.text}”</blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-medium text-gray-900 dark:text-gray-100">{q.author}</span>
                  <br />
                  <span className="text-gray-500">{q.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <Link
            href="/testimonials"
            className="mt-14 inline-block text-[15px] text-evergreen-700 underline decoration-brass-400/60 underline-offset-[6px] hover:text-evergreen-900 dark:text-evergreen-300 dark:hover:text-white"
          >
            Read all testimonials
          </Link>
        </div>
      </section>

      {/* Coverage */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
        <h2 className="font-serif text-display-sm sm:text-display-md">In the press</h2>
        <ul className="mt-12">
          {coverage.map((c) => (
            <li key={c.outlet} className="border-t border-gray-200 dark:border-gray-800">
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-2 py-8 sm:grid-cols-[14rem_1fr_auto] sm:items-baseline sm:gap-8"
              >
                <span className="font-serif text-3xl">{c.outlet}</span>
                <span className="leading-relaxed text-gray-600 dark:text-gray-400">{c.title}</span>
                <span className="text-sm text-evergreen-700 underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-brass-400 dark:text-evergreen-300">
                  {c.action}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Writing */}
      <section className="bg-evergreen-50 dark:bg-evergreen-950/60">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-xl font-serif text-display-sm sm:text-display-md">Notes from building AI agents in production</h2>
            <Link
              href="/blog"
              className="text-[15px] text-evergreen-700 underline decoration-brass-400/60 underline-offset-[6px] hover:text-evergreen-900 dark:text-evergreen-300 dark:hover:text-white"
            >
              All writing
            </Link>
          </div>
          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
            {essays.map((e) => (
              <Link key={e.slug} href={`/blog/${e.slug}`} className="group block border-t border-evergreen-200 pt-6 dark:border-evergreen-800">
                <p className="text-sm text-gray-500">
                  {e.date}, {e.read} read
                </p>
                <h3 className="mt-4 font-serif text-[1.65rem] leading-[1.2] decoration-brass-400 underline-offset-4 group-hover:underline">
                  {e.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
