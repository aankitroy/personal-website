import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react';
import { Header } from '../components/Header';
import { SiteFooter } from '../components/SiteFooter';
import { Reveal } from '../components/Reveal';
import { DecisionField } from '../components/home/DecisionField';
import { CalibrationFigure, DecisionArchitectureFigure, Film, Measures } from '../components/home/Figures';
import { ContactBlock } from '../components/home/ContactBlock';
import { ArchPortrait } from '../components/home/ArchPortrait';
import { ToneArt, type ToneArtKind } from '../components/home/ToneArt';
import { BOOKING_URL } from '../components/site';
import { NotionAvatar } from '../components/NotionAvatar';
import s from './home.module.css';

const rise = (i: number) => ({ '--i': i }) as React.CSSProperties;
const d = (ms: number) => ({ '--d': `${ms}ms` }) as React.CSSProperties;

type Record = {
  years: string;
  org: string;
  role: string;
  outcome: string;
  metric?: { value: string; label: string };
  logo?: string;
  tone: string;
  art: ToneArtKind;
  span: 'span5' | 'span7';
};

const record: Record[] = [
  {
    years: '2026 – now',
    org: 'Stealth AI startup',
    role: 'Co-founder',
    outcome: 'Building an autonomous AI engine.',
    metric: { value: 'Now', label: 'building in stealth' },
    tone: s.workInk,
    art: 'pulse',
    span: 'span5',
  },
  {
    years: '2025 – 2026',
    org: 'GeoIQ',
    role: 'VP, AI Engineering',
    outcome:
      'Built the AI engineering team from scratch and shipped agentic systems in production, while cutting agent cost by 75%. Presented the work at the Ai4 conference.',
    metric: { value: '10k', label: 'agent sessions a day, in production' },
    logo: '/companies/geoiq.png',
    tone: s.toneSky,
    art: 'bars',
    span: 'span7',
  },
  {
    years: '2023',
    org: 'Writesonic',
    role: 'Engineering Manager',
    outcome: 'Took response times from 1.5s to 400ms for 3M+ paying users and halved infrastructure cost.',
    metric: { value: '3×', label: 'the engineering team, tripled' },
    logo: '/companies/writesonic.svg',
    tone: s.toneRose,
    art: 'wave',
    span: 'span7',
  },
  {
    years: '2024',
    org: 'Pruoo Healthcare (iMumz)',
    role: 'Head of Engineering',
    outcome: 'Rebuilt the engineering team behind a million-user parenting platform.',
    metric: { value: '−80%', label: 'app launch time' },
    logo: '/companies/imumz.png',
    tone: s.tonePeach,
    art: 'rise',
    span: 'span5',
  },
  {
    years: '2025',
    org: 'Isha Foundation',
    role: 'Engineering Leader',
    outcome: 'Led engineering on the Miracle of Mind project.',
    logo: '/companies/isha.svg',
    tone: s.toneSage,
    art: 'rings',
    span: 'span5',
  },
  {
    years: '2017 – 2023',
    org: 'Khabri, Y Combinator S19',
    role: 'Co-founder & CTO',
    outcome: 'Built a vernacular audio platform to 5M+ users with 14ms response times.',
    metric: { value: '$3.2M', label: 'raised, including from Y Combinator' },
    logo: '/companies/khabri.png',
    tone: s.toneButter,
    art: 'orbit',
    span: 'span7',
  },
];

// Logos are drawn as ink silhouettes. Brands that only publish a mark get their name set beside it.
const companies: { name: string; logo: string; size: string; showName: boolean }[] = [
  { name: 'GeoIQ', logo: '/companies/geoiq.png', size: s.logoH11, showName: false },
  { name: 'Isha Foundation', logo: '/companies/isha.svg', size: s.logoH11, showName: false },
  { name: 'Writesonic', logo: '/companies/writesonic.svg', size: s.logoH5, showName: true },
  { name: 'iMumz by Pruoo Healthcare', logo: '/companies/imumz.png', size: s.logoH12, showName: false },
  { name: 'Khabri', logo: '/companies/khabri.png', size: s.logoH9, showName: false },
  { name: 'Y Combinator', logo: '/companies/ycombinator.svg', size: s.logoH6, showName: true },
];

// Distinct from the hero's proof points, so no number is repeated on the page.
const facts = [
  { value: '12', label: 'years building software people use daily' },
  { value: '4', label: 'million-user platforms built or led' },
  { value: '20', label: 'engineers led as CTO of Khabri' },
  { value: 'Ai4', label: 'conference talk on agents in production' },
];

const featuredQuote = {
  text: 'Aankit’s technical architecture decisions at Writesonic helped us scale from handling thousands to millions of AI requests daily.',
  accent: 'His optimization work reduced our infrastructure costs by 73% while improving performance dramatically.',
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

const press = [
  {
    outlet: 'TechCrunch',
    logo: '/press/techcrunch.svg',
    date: 'August 2019',
    quote: 'could fill a sizable void in the country where a dedicated heavyweight has failed to emerge.',
    context: 'Khabri, picked as one of TechCrunch’s 12 favorite startups from Y Combinator’s S19 Demo Day.',
    href: 'https://techcrunch.com/2019/08/21/our-12-favorite-startups-from-y-combinators-s19-demo-day-2',
    action: 'Read on TechCrunch',
  },
  {
    outlet: 'Forbes India',
    logo: '/press/forbes-india.svg',
    date: 'October 2020',
    headline: 'Regional podcasts find their voice',
    context: 'On Khabri’s 350% month-on-month growth through the 2020 lockdown, and the creator economy behind it.',
    href: 'https://www.forbesindia.com/article/take-one-big-story-of-the-day/regional-podcasts-find-their-voice/63743/1',
    action: 'Read on Forbes India',
  },
];

const essays = [
  {
    slug: 'jev-architecture-calibrated-decision-models',
    title: 'Jev and the case for models that decide instead of talk',
    date: 'November 2026',
    read: '14 min read',
    tag: 'Calibration',
  },
  {
    slug: 'agentic-rag-complete-guide',
    title: 'Agentic RAG: when retrieval gets smarter than your search bar',
    date: 'October 2025',
    read: '18 min read',
    tag: 'Retrieval',
  },
  {
    slug: 'agentic-design-patterns-complete-guide',
    title: 'Agentic design patterns: building agents that actually work',
    date: 'October 2025',
    read: '25 min read',
    tag: 'Agents',
  },
];


const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Aankit Roy',
  url: 'https://aankitroy.com',
  image: 'https://aankitroy.com/aankitroy-portrait.jpg',
  jobTitle: 'AI Engineering Leader and Founder',
  worksFor: { '@type': 'Organization', name: 'Stealth AI startup' },
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
    'Co-founder of a stealth AI startup, former VP of AI Engineering at GeoIQ and co-founder & CTO of Khabri (Y Combinator S19). Twelve years building products used by millions.',
};

export default function Home() {
  return (
    <div className={s.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Reveal />
      <Header currentPage="home" />

      <main>
        {/* ───────── Hero: a centred statement over a live confidence surface ───────── */}
        <section id="top" className={s.hero}>
          <DecisionField className={s.heroField} threshold={false} intensity={0.8} />
          <div className={`${s.container} ${s.heroGrid}`}>
            <div>
              <p className={`${s.eyebrow} ${s.in}`} style={rise(0)}>
                AI strategy and production systems
              </p>
              <h1 className={`${s.heroTitle} ${s.in}`} style={rise(1)}>
                AI strategy from someone <em className={s.heroAccent}>who has built it at scale.</em>
              </h1>
              <p className={`${s.heroLead} ${s.in}`} style={rise(2)}>
                I advise founders, CEOs and boards on where AI creates real value, then help their teams build it. Twelve years of
                engineering leadership, from a Y Combinator startup I co-founded to platforms serving millions.
              </p>
              <div className={`${s.heroActions} ${s.in}`} style={rise(3)}>
                <a href={BOOKING_URL} className={`${s.btn} ${s.btnPrimary}`}>
                  Book a conversation
                  <ChevronRight size={16} strokeWidth={2} aria-hidden />
                </a>
                <a href="#record" className={s.link}>
                  See the track record <span aria-hidden>→</span>
                </a>
              </div>
              <ul className={`${s.proof} ${s.in}`} style={rise(4)}>
                <li>
                  <strong>5M+</strong>
                  <span>users on Khabri</span>
                </li>
                <li>
                  <strong>YC S19</strong>
                  <span>co-founder &amp; CTO</span>
                </li>
                <li>
                  <strong>3M+</strong>
                  <span>paying users at Writesonic</span>
                </li>
              </ul>
            </div>
            <ArchPortrait className={s.in} style={rise(2)} />
          </div>
        </section>

        <section className={s.trust} aria-label="Companies">
          <div className={`${s.container} ${s.trustInner}`}>
            <p className={s.trustLabel}>Where I&rsquo;ve built</p>
            <ul className={s.logos}>
              {companies.map((c) => (
                <li key={c.name}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.logo}
                    alt={c.showName ? '' : c.name}
                    aria-hidden={c.showName ? true : undefined}
                    className={`${s.logoInk} ${c.size}`}
                  />
                  {c.showName && <span>{c.name}</span>}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ───────── Measured in production ───────── */}
        <section className={s.section}>
          <div className={s.container}>
            <header className={s.headSplit} data-reveal>
              <div>
                <p className={s.eyebrow}>Results</p>
                <h2 className={s.h2}>
                  Measured in production, <span className={s.accent}>not in a demo.</span>
                </h2>
              </div>
              <p className={s.lead}>
                Three numbers from systems I led, each one taken from real traffic: latency people felt, cost the business stopped
                paying, and scale that held.
              </p>
            </header>
            <Measures />
          </div>
        </section>

        {/* ───────── Track record: tinted bento ───────── */}
        <section id="record" className={`${s.section} ${s.subtle}`}>
          <div className={s.container}>
            <header className={s.head} data-reveal>
              <p className={s.eyebrow}>Track record</p>
              <h2 className={s.h2}>
                Built for millions, <span className={s.accent}>before advising anyone.</span>
              </h2>
            </header>
            <div className={s.bento}>
              {record.map((r, i) => (
                <article key={r.org} className={`${s.work} ${r.tone} ${s[r.span]}`} data-reveal style={d((i % 2) * 120)}>
                  <div className={s.workArt}>
                    <ToneArt kind={r.art} />
                  </div>
                  <p className={s.workTop}>
                    <span className={s.mono}>{r.years}</span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    {r.logo && <img src={r.logo} alt="" aria-hidden className={s.workLogo} />}
                  </p>
                  <h3 className={s.workOrg}>{r.org}</h3>
                  <p className={s.workRole}>{r.role}</p>
                  <p className={s.workOutcome}>{r.outcome}</p>
                  {r.metric && (
                    <p className={s.workMetric}>
                      <strong>{r.metric.value}</strong>
                      <span>{r.metric.label}</span>
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── Statement: the short version, set large ───────── */}
        <section className={s.section}>
          <div className={s.container}>
            <div className={s.statement} data-reveal>
              <p className={s.eyebrow}>About</p>
              <p className={s.statementText}>
                Engineer first, advisor second. The advice I give comes from systems I have shipped and teams I have led,{' '}
                <em>not from slides.</em>
              </p>
              <div className={s.statementRow}>
                <p className={s.statementNote}>
                  I started out automating lending workflows for banks, co-founded Khabri through Y Combinator, managed engineering at
                  Writesonic and led AI engineering at GeoIQ. Today I help leadership teams choose the right AI bets, then stay close
                  enough to the build that the strategy survives contact with production.
                </p>
                <Link href="/about" className={`${s.btn} ${s.btnSecondary}`}>
                  The full story
                  <ArrowRight size={15} strokeWidth={1.75} aria-hidden />
                </Link>
              </div>
            </div>
            <dl className={s.facts} data-reveal>
              {facts.map((f) => (
                <div key={f.label} className={s.fact}>
                  <dt>{f.value}</dt>
                  <dd>{f.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ───────── Current thinking: research figures ───────── */}
        <section id="thinking" className={`${s.section} ${s.subtle}`}>
          <div className={s.container}>
            <header className={s.headSplit} data-reveal>
              <div>
                <p className={s.eyebrow}>Current thinking</p>
                <h2 className={s.h2}>
                  Decisions you can put <span className={s.accent}>a threshold on.</span>
                </h2>
              </div>
              <div>
                <p className={s.lead}>
                  Most of what an AI agent does all day is small decisions: route this, flag that, escalate or don&rsquo;t. I design
                  systems where every decision comes back with an honest probability, so the business chooses what runs on its own and
                  what a person sees.
                </p>
                <Link href="/blog/jev-architecture-calibrated-decision-models" className={s.link} style={{ marginTop: 18 }}>
                  Read the essay on Jev <span aria-hidden>→</span>
                </Link>
              </div>
            </header>
            <div className={s.plates}>
              <div className={s.plate} data-reveal>
                <DecisionArchitectureFigure />
              </div>
              <div className={s.plate} data-reveal style={d(120)}>
                <CalibrationFigure />
              </div>
            </div>
          </div>
        </section>

        {/* ───────── Film ───────── */}
        <section className={s.section}>
          <div className={s.container}>
            <div className={s.studio} data-reveal>
              <div className={s.studioNotes}>
                <p className={s.eyebrow}>In conversation · ETCIO</p>
                <h2 className={s.studioTitle}>
                  On leading technology <em>for millions of listeners.</em>
                </h2>
                <p className={s.studioLead}>
                  A video interview with ETCIO on the role of a technology leader, and what it took to scale Khabri&rsquo;s platform.
                </p>
                <ol className={s.studioTopics}>
                  <li>
                    The role of a technology leader
                  </li>
                  <li>
                    Scaling Khabri&rsquo;s platform to millions
                  </li>
                </ol>
                <p className={s.studioFoot}>Press play to watch</p>
              </div>
              <div className={s.studioScreen}>
                <Film id="pokPfUjnCek" title="Your tech mantra for success" source="ETCIO video interview" />
              </div>
            </div>
          </div>
        </section>

        {/* ───────── Testimony ───────── */}
        <section className={`${s.section} ${s.subtle}`}>
          <div className={s.container}>
            <figure className={s.pull} data-reveal>
              <p className={s.eyebrow}>Testimonials</p>
              <span className={s.pullMark} aria-hidden>
                &ldquo;
              </span>
              <blockquote className={s.pullText}>
                {featuredQuote.text} <em>{featuredQuote.accent}</em>
              </blockquote>
              <figcaption className={s.cite}>
                <span className={s.avatar} aria-hidden>
                    <NotionAvatar name={featuredQuote.author} />
                  </span>
                <span>
                  <strong>{featuredQuote.author}</strong>
                  <span>{featuredQuote.role}</span>
                </span>
              </figcaption>
            </figure>
            <div className={s.voices}>
              {quotes.map((q, i) => (
                <figure key={q.author} className={s.voice} data-reveal style={d(i * 100)}>
                  <blockquote className={s.voiceText}>&ldquo;{q.text}&rdquo;</blockquote>
                  <figcaption className={s.cite}>
                    <span className={s.avatar} aria-hidden>
                    <NotionAvatar name={q.author} />
                  </span>
                    <span>
                      <strong>{q.author}</strong>
                      <span>{q.role}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className={s.center} data-reveal>
              <Link href="/testimonials" className={`${s.btn} ${s.btnSecondary}`}>
                Read all testimonials
                <ArrowRight size={15} strokeWidth={1.75} aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        {/* ───────── Press ───────── */}
        <section className={s.section}>
          <div className={s.container}>
            <header className={s.head} data-reveal>
              <p className={s.eyebrow}>In the press</p>
              <h2 className={s.h2}>
                What the press <span className={s.accent}>saw early.</span>
              </h2>
            </header>
            <ul className={s.index}>
              {press.map((p, i) => (
                <li key={p.outlet} data-reveal style={d(i * 120)}>
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className={s.indexRow} aria-label={`${p.action}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.logo} alt={p.outlet} className={s.logoInk} />
                    <div>
                      {p.quote ? (
                        <blockquote className={s.indexTitle}>
                          Khabri <em>&ldquo;{p.quote}&rdquo;</em>
                        </blockquote>
                      ) : (
                        <p className={s.indexTitle}>{p.headline}</p>
                      )}
                      <p className={s.indexNote}>{p.context}</p>
                    </div>
                    <span className={s.mono}>{p.date}</span>
                    <span className={s.indexGo} aria-hidden>
                      <ArrowUpRight size={16} strokeWidth={1.75} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ───────── Writing ───────── */}
        <section className={`${s.section} ${s.subtle}`}>
          <div className={s.container}>
            <div className={s.headRow} data-reveal>
              <div>
                <p className={s.eyebrow}>Writing</p>
                <h2 className={s.h2}>
                  Notes from building <span className={s.accent}>AI agents in production.</span>
                </h2>
              </div>
              <Link href="/blog" className={s.link}>
                All writing <span aria-hidden>→</span>
              </Link>
            </div>
            <div className={s.essayGrid}>
              {essays.map((e, i) => (
                <Link key={e.slug} href={`/blog/${e.slug}`} className={s.essay} data-reveal style={d(i * 100)}>
                  <p className={s.essayTop}>
                    <span className={s.mono}>{e.tag}</span>
                    <span className={s.essayGo} aria-hidden>
                      →
                    </span>
                  </p>
                  <h3 className={s.essayTitle}>{e.title}</h3>
                  <p className={s.essayFoot}>
                    {e.date} · {e.read}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContactBlock />
      </main>

      <SiteFooter />
    </div>
  );
}
