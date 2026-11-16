import React from 'react';
import { Header } from '../../components/Header';
import { SiteFooter } from '../../components/SiteFooter';
import { BOOKING_URL } from '../../components/site';
import { Reveal } from '../../components/Reveal';
import { DecisionField } from '../../components/home/DecisionField';
import s from '../home.module.css';

const d = (ms: number) => ({ '--d': `${ms}ms` }) as React.CSSProperties;

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
      <Header currentPage="about" tone="dark" />

      {/* Hero */}
      <section className={s.pageHero}>
        <DecisionField className={s.field} threshold={false} intensity={1} />
        <div className={s.pageHeroShade} aria-hidden />
        <div className={s.pageHeroGrid}>
          <div>
            <p className={`${s.kicker} ${s.rise}`} style={d(100)}>About</p>
            <h1 className={`${s.display} ${s.pageTitle} ${s.rise}`} style={d(250)}>
              Engineer first.
              <br />
              <em>Advisor second.</em>
            </h1>
            <span className={s.rule} aria-hidden />
            <p className={`${s.pageLede} ${s.rise}`} style={d(450)}>
              I have spent twelve years building software that millions of people use every day, first as an engineer, then as a co-founder and
              CTO, and later leading engineering at AI companies.
            </p>
            <p className={`${s.pageLede} ${s.rise}`} style={d(550)}>
              Today I work with founders, CEOs and boards who know AI matters to their business but want a straight answer on where, how, and
              what it will take. I help them choose the right bets, then stay close enough to the build that the strategy survives contact with
              production.
            </p>
            <div className={`${s.heroActions} ${s.rise}`} style={d(700)}>
              <a href={BOOKING_URL} className={s.btnBrass}>Book a conversation</a>
              <a href="#path" className={s.linkLight}>The path here</a>
            </div>
          </div>
          <figure className={`${s.heroPortrait} ${s.rise}`} style={d(400)}>
            <div className={s.practiceFrame}>
              <img src="/aankitroy-portrait.jpg" alt="Portrait of Aankit Roy" width={960} height={1280} />
            </div>
          </figure>
        </div>
      </section>

      {/* The path here */}
      <section id="path" className={s.section}>
        <div className={s.split}>
          <header className={s.sticky} data-reveal>
            <p className={s.eyebrow}>The path here</p>
            <h2 className={s.h2}>
              Twelve years,
              <br />
              <em>millions of users.</em>
            </h2>
            <p className={s.lede}>From automating lending workflows for banks to co-founding a Y Combinator company and leading AI engineering.</p>
          </header>
          <ol className={s.ledger}>
            {journey.map((j, i) => (
              <li key={j.org + j.period} data-reveal style={d(i * 50)}>
                <span className={s.ledgerYears}>{j.period}</span>
                <div>
                  <h3 className={s.ledgerOrg}>
                    {j.org}
                    <span className={s.ledgerRole}>{j.role}</span>
                  </h3>
                  <p className={s.ledgerOutcome}>{j.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Principles */}
      <section className={`${s.section} ${s.dark}`}>
        <div className={s.inner}>
          <header className={s.measuresHead} data-reveal>
            <p className={s.kicker}>Principles</p>
            <h2 className={s.h2Light}>
              How I think
              <br />
              <em>about the work.</em>
            </h2>
          </header>
          <div className={s.principlesGrid}>
            {principles.map((p, i) => (
              <div key={p.title} className={s.principleItem} data-reveal style={d((i % 2) * 120)}>
                <h3 className={s.principleTitle}>{p.title}</h3>
                <p className={s.principleBody}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
