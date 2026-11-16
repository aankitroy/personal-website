import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Header } from '../../components/Header';
import { SiteFooter } from '../../components/SiteFooter';
import { BOOKING_URL } from '../../components/site';
import { Reveal } from '../../components/Reveal';
import { DecisionField } from '../../components/home/DecisionField';
import { ContactBlock } from '../../components/home/ContactBlock';
import { ArchPortrait } from '../../components/home/ArchPortrait';
import s from '../home.module.css';

const d = (ms: number) => ({ '--d': `${ms}ms` }) as React.CSSProperties;
const rise = (i: number) => ({ '--i': i }) as React.CSSProperties;
const ROMAN = ['I', 'II', 'III', 'IV'];

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
    org: 'Pruoo Healthcare (iMumz)',
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
    <div className={s.page}>
      <Reveal />
      <Header currentPage="about" />

      <main>
        {/* Hero */}
        <section className={s.pageHero}>
          <DecisionField className={s.pageHeroField} threshold={false} intensity={0.8} />
          <div className={`${s.container} ${s.heroGrid}`}>
            <div>
              <p className={`${s.eyebrow} ${s.in}`} style={rise(0)}>
                About Aankit
              </p>
              <h1 className={`${s.pageTitle} ${s.in}`} style={rise(1)}>
                Engineer first. <em className={s.heroAccent}>Advisor second.</em>
              </h1>
              <p className={`${s.pageLead} ${s.in}`} style={rise(2)}>
                I have spent twelve years building software that millions of people use every day, first as an engineer, then as a
                co-founder and CTO, and later leading engineering at AI companies.
              </p>
              <p className={`${s.pageLead} ${s.in}`} style={rise(2)}>
                Today I work with founders, CEOs and boards who know AI matters to their business but want a straight answer on where,
                how, and what it will take. I help them choose the right bets, then stay close enough to the build that the strategy
                survives contact with production.
              </p>
              <div className={`${s.pageActions} ${s.in}`} style={rise(3)}>
                <a href={BOOKING_URL} className={`${s.btn} ${s.btnPrimary}`}>
                  Book a conversation
                  <ChevronRight size={16} strokeWidth={2} aria-hidden />
                </a>
                <a href="#path" className={s.link}>
                  The path here <span aria-hidden>→</span>
                </a>
              </div>
            </div>
            <ArchPortrait className={s.in} style={rise(2)} />
          </div>
        </section>

        {/* The path here */}
        <section id="path" className={`${s.section} ${s.subtle}`}>
          <div className={s.container}>
            <header className={s.headSplit} data-reveal>
              <div>
                <p className={s.eyebrow}>The path here</p>
                <h2 className={s.h2}>
                  Twelve years, <span className={s.accent}>millions of users.</span>
                </h2>
              </div>
              <p className={s.lead}>
                From automating lending workflows for banks to co-founding a Y Combinator company and leading AI engineering.
              </p>
            </header>
            <ol className={s.timeline} data-reveal>
              {journey.map((j) => (
                <li key={j.org + j.period}>
                  <span className={`${s.mono} ${s.timelineWhen}`}>{j.period}</span>
                  <div>
                    <h3 className={s.timelineOrg}>
                      {j.org}
                      <span className={s.timelineRole}>{j.role}</span>
                    </h3>
                    <p className={s.timelineText}>{j.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Principles */}
        <section className={s.section}>
          <div className={s.container}>
            <header className={s.head} data-reveal>
              <p className={s.eyebrow}>Principles</p>
              <h2 className={s.h2}>
                How I think <span className={s.accent}>about the work.</span>
              </h2>
            </header>
            <div className={s.principles}>
              {principles.map((p, i) => (
                <article key={p.title} className={s.principle} data-reveal style={d((i % 2) * 120)}>
                  <div className={s.principleTop}>
                    <span className={s.numeral} aria-hidden>
                      {ROMAN[i]}
                    </span>
                    <span className={s.mono}>
                      {String(i + 1).padStart(2, '0')} / {String(principles.length).padStart(2, '0')}
                    </span>
                  </div>
                  <div className={s.principleBody}>
                    <h3 className={s.principleTitle}>{p.title}</h3>
                    <p className={s.principleText}>{p.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className={s.subtle}>
          <ContactBlock />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
