import React from 'react';
import { Header } from '../../components/Header';
import { SiteFooter } from '../../components/SiteFooter';
import { BOOKING_URL } from '../../components/site';

const journey = [
  {
    period: 'Sep 2026 – now',
    role: 'Co-founder',
    org: 'Stealth AI startup',
    description: 'Building an autonomous AI engine.',
  },
  {
    period: 'Oct 2025 – Aug 2026',
    role: 'VP, AI Engineering',
    org: 'GeoIQ',
    description:
      'Built the AI engineering team from scratch and shipped agentic systems handling 10,000 sessions a day in production. Reduced agent cost by 75% and presented the work at the Ai4 conference.',
  },
  {
    period: 'Jan – Jul 2025',
    role: 'Engineering Leader',
    org: 'Isha Foundation',
    description: 'Led engineering on the Miracle of Mind project.',
  },
  {
    period: '2024',
    role: 'Head of Engineering',
    org: 'Pruoo Healthcare',
    description:
      'Led the technical transformation of a million-user parenting platform. Rebuilt the engineering team, cut app launch time by 80%, and moved the backend to Python FastAPI and Terraform.',
  },
  {
    period: '2023',
    role: 'Engineering Manager',
    org: 'Writesonic',
    description:
      'Took a Y Combinator-backed AI platform from 1.5s to 400ms response times for 3M+ paying users. Grew the engineering team 3x and halved infrastructure cost.',
  },
  {
    period: '2017 – 2023',
    role: 'Co-founder & CTO',
    org: 'Khabri',
    description:
      'Built an audio platform that brought content to people in their own languages, scaling to 5M+ users at 14ms response times. Led a team of 20 engineers and raised $3.2M from investors including Y Combinator.',
  },
  {
    period: '2015 – 2017',
    role: 'Senior Software Engineer',
    org: 'OnlineTyari',
    description:
      'Core engineer on a test-prep platform for 3M+ users. Built real-time analytics and backend services handling 1.5M+ daily requests, and cut production bugs by 70%.',
  },
  {
    period: '2014 – 2015',
    role: 'Associate Software Engineer',
    org: 'Nucleus Software',
    description: 'Automated lending workflows for banks including HDFC and ICICI.',
  },
  {
    period: '2010 – 2014',
    role: 'Computer Science',
    org: 'Birla Institute of Technology',
    description: 'Where it started.',
  },
];

const principles = [
  {
    title: 'Start from the business, not the model',
    body: 'Every engagement begins with where value is created or lost today. The technology choice comes after.',
  },
  {
    title: 'Prove it small, then scale it',
    body: 'A working system in front of real users in weeks beats a perfect plan in quarters.',
  },
  {
    title: 'Reliability is the product',
    body: 'Demos are easy. I design for the thousandth request and the bad day, because that is what your customers remember.',
  },
  {
    title: 'Measure what moved',
    body: 'Latency, cost, accuracy, revenue. If we cannot measure the outcome, we have not finished the work.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <Header currentPage="about" />

      <section className="mx-auto grid max-w-6xl gap-14 px-6 pb-24 pt-16 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pt-24">
        <div className="lg:col-span-7">
          <h1 className="hero-rise font-serif text-[2.75rem] leading-[1.02] tracking-[-0.02em] sm:text-display-lg lg:text-display-xl">
            Engineer first. Advisor second.
          </h1>
          <div className="mt-10 max-w-[36rem] space-y-6 text-lg leading-[1.65] text-gray-700 dark:text-gray-300">
            <p>
              I have spent twelve years building software that millions of people use every day, first as an engineer, then as a co-founder and
              CTO, and later leading engineering at AI companies.
            </p>
            <p>
              Today I work with founders, CEOs and boards who know AI matters to their business but want a straight answer on where, how, and
              what it will take. I help them choose the right bets, then stay close enough to the build that the strategy survives contact with
              production.
            </p>
          </div>
          <a
            href={BOOKING_URL}
            className="mt-10 inline-block rounded-full bg-evergreen-800 px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-evergreen-700 dark:bg-brass-300 dark:text-evergreen-950 dark:hover:bg-brass-200"
          >
            Book a conversation
          </a>
        </div>
        <figure className="mx-auto w-full max-w-[20rem] lg:col-span-5 lg:mr-0">
          <div className="relative">
            <div className="absolute -inset-3 rounded-t-full border border-brass-400/50" aria-hidden />
            <img
              src="/aankitroy-portrait.jpg"
              alt="Portrait of Aankit Roy"
              width={960}
              height={1280}
              className="relative aspect-[3/4] w-full rounded-t-full object-cover object-top"
            />
          </div>
        </figure>
      </section>

      <section className="border-y border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
          <h2 className="font-serif text-display-sm sm:text-display-md">The path here</h2>
          <ol className="mt-14">
            {journey.map((j) => (
              <li
                key={j.org + j.period}
                className="grid gap-2 border-t border-gray-200 py-8 sm:grid-cols-[10.5rem_1fr] sm:gap-10 lg:grid-cols-[10.5rem_20rem_1fr] dark:border-gray-800"
              >
                <span className="pt-1 text-sm tabular-nums text-gray-500">{j.period}</span>
                <p className="font-serif text-2xl leading-tight">
                  {j.org}
                  <span className="block text-lg text-gray-500">{j.role}</span>
                </p>
                <p className="max-w-xl leading-relaxed text-gray-600 sm:col-start-2 lg:col-start-auto dark:text-gray-400">{j.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
        <h2 className="max-w-2xl font-serif text-display-sm sm:text-display-md">How I think about the work</h2>
        <div className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {principles.map((p) => (
            <div key={p.title} className="border-l border-brass-400 pl-6">
              <h3 className="font-serif text-2xl leading-snug">{p.title}</h3>
              <p className="mt-3 max-w-md leading-relaxed text-gray-600 dark:text-gray-400">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
