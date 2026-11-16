import React from 'react';
import Link from 'next/link';
import { Header } from '../components/Header';
import { SiteFooter } from '../components/SiteFooter';
import { Reveal } from '../components/Reveal';
import { DecisionField } from '../components/home/DecisionField';
import { CalibrationFigure, DecisionArchitectureFigure, Film, Measures } from '../components/home/Figures';
import { BOOKING_URL, EMAIL } from '../components/site';
import s from './home.module.css';

const d = (ms: number) => ({ '--d': `${ms}ms` }) as React.CSSProperties;

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
    org: 'Pruoo Healthcare (iMumz)',
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

// Logos are rendered in white on the hero band. Brands that only publish a mark get their name set beside it.
const companies: { name: string; logo?: string; logoClass?: string; showName: boolean }[] = [
  { name: 'GeoIQ', logo: '/companies/geoiq.png', logoClass: 'h-11', showName: false },
  { name: 'Isha Foundation', logo: '/companies/isha.svg', logoClass: 'h-11', showName: false },
  { name: 'Writesonic', logo: '/companies/writesonic.svg', logoClass: 'h-5', showName: true },
  { name: 'iMumz by Pruoo Healthcare', logo: '/companies/imumz.png', logoClass: 'h-12', showName: false },
  { name: 'Khabri', logo: '/companies/khabri.png', logoClass: 'h-9', showName: false },
  { name: 'Y Combinator', logo: '/companies/ycombinator.svg', logoClass: 'h-6', showName: true },
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

const pressFeature = {
  outlet: 'TechCrunch',
  logo: '/press/techcrunch.svg',
  date: 'August 2019',
  quote: 'could fill a sizable void in the country where a dedicated heavyweight has failed to emerge.',
  context: 'Khabri, picked as one of TechCrunch’s 12 favorite startups from Y Combinator’s S19 Demo Day.',
  href: 'https://techcrunch.com/2019/08/21/our-12-favorite-startups-from-y-combinators-s19-demo-day-2',
};

const pressMore = [
  {
    outlet: 'Forbes India',
    logo: '/press/forbes-india.svg',
    logoClass: 'h-7',
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
      <Header currentPage="home" tone="dark" />

      {/* ───────── Hero: live confidence surface ───────── */}
      <section className={s.hero}>
        <DecisionField className={s.field} />
        <div className={s.heroShade} aria-hidden />
        <div className={s.heroGrid}>
          <div className={s.heroCopy}>
            <p className={`${s.kicker} ${s.rise}`} style={d(100)}>AI strategy and production systems</p>
            <h1 className={`${s.display} ${s.rise}`} style={d(250)}>
              AI strategy from someone
              <br />
              <em>who has built it at scale.</em>
            </h1>
            <span className={s.rule} aria-hidden />
            <p className={`${s.heroLede} ${s.rise}`} style={d(450)}>
              I advise founders, CEOs and boards on where AI creates real value, then help their teams build it.
              Twelve years of engineering leadership, from a Y Combinator startup I co-founded to platforms serving millions.
            </p>
            <div className={`${s.heroActions} ${s.rise}`} style={d(650)}>
              <a href={BOOKING_URL} className={s.btnBrass}>Book a conversation</a>
              <a href="#thinking" className={s.linkLight}>See the thinking</a>
            </div>
          </div>
          <p className={`${s.heroFig} ${s.rise}`} style={d(1100)}>
            <span>Fig. 0</span> A confidence surface, drawn live. The bright line is the 0.80 threshold: above it a decision runs on
            its own, below it a person decides. Move your cursor to disturb it.
          </p>
        </div>

        <div className={s.heroFoot}>
          <div className={s.heroFootInner}>
            <p className={s.heroFootLabel}>Where I&rsquo;ve built</p>
            <ul className={s.logos}>
              {companies.map((c) => (
                <li key={c.name}>
                  {c.logo && (
                    <img
                      src={c.logo}
                      alt={c.showName ? '' : c.name}
                      aria-hidden={c.showName ? true : undefined}
                      className={c.logoClass}
                    />
                  )}
                  {c.showName && <span>{c.name}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────── Current thinking: research figures ───────── */}
      <section id="thinking" className={`${s.section} ${s.paper}`}>
        <div className={s.inner}>
          <header className={s.thinkingHead} data-reveal>
            <div>
              <p className={s.eyebrow}>Current thinking</p>
              <h2 className={s.h2}>
                Decisions you can put
                <br />
                <em>a threshold on.</em>
              </h2>
            </div>
            <div>
              <p className={s.lede} style={{ marginTop: 0 }}>
                Most of what an AI agent does all day is small decisions: route this, flag that, escalate or don&rsquo;t. I design
                systems where every decision comes back with an honest probability, so the business chooses what runs on its own and
                what a person sees.
              </p>
              <Link href="/blog/jev-architecture-calibrated-decision-models" className={s.btnLine} style={{ marginTop: 32 }}>
                Read the essay on Jev
              </Link>
            </div>
          </header>
          <div className={s.figures}>
            <div data-reveal>
              <DecisionArchitectureFigure />
            </div>
            <div data-reveal style={d(150)}>
              <CalibrationFigure />
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Measured in production ───────── */}
      <section className={`${s.section} ${s.dark}`}>
        <div className={s.inner}>
          <header className={s.measuresHead} data-reveal>
            <p className={s.kicker}>Results</p>
            <h2 className={s.h2Light}>
              Measured in production,
              <br />
              <em>not in a demo.</em>
            </h2>
          </header>
          <Measures />
        </div>
      </section>

      {/* ───────── Practice: portrait + record ───────── */}
      <section className={s.section}>
        <div className={s.split}>
          <div>
            <figure className={s.practicePortrait} data-reveal>
              <div className={s.practiceFrame}>
                <img src="/aankitroy-portrait.jpg" alt="Portrait of Aankit Roy" width={960} height={1280} />
              </div>
            </figure>
            <header data-reveal>
              <h2 className={s.h2}>
                Built for millions,
                <br />
                <em>before advising anyone.</em>
              </h2>
              <p className={s.lede}>The advice I give comes from systems I have shipped and teams I have led, not from slides.</p>
            </header>
          </div>
          <ol className={s.ledger}>
            {record.map((r, i) => (
              <li key={r.org} data-reveal style={d(i * 60)}>
                <span className={s.ledgerYears}>{r.years}</span>
                <div>
                  <h3 className={s.ledgerOrg}>
                    {r.org}
                    <span className={s.ledgerRole}>{r.role}</span>
                  </h3>
                  <p className={s.ledgerOutcome}>{r.outcome}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── Film ───────── */}
      <section className={`${s.section} ${s.dark}`}>
        <div className={s.inner}>
          <header className={s.filmHead} data-reveal>
            <div>
              <p className={s.kicker}>In conversation</p>
              <h2 className={s.h2Light}>
                On leading technology
                <br />
                <em>for millions of listeners.</em>
              </h2>
            </div>
            <p className={s.filmLede}>
              A video interview with ETCIO on the role of a technology leader, and what it took to scale Khabri&rsquo;s platform.
            </p>
          </header>
          <div data-reveal style={d(150)}>
            <Film id="pokPfUjnCek" title="Your tech mantra for success" source="ETCIO video interview" />
          </div>
        </div>
      </section>

      {/* ───────── Testimony plate ───────── */}
      <section className={s.plate}>
        <DecisionField className={s.plateField} threshold={false} intensity={0.45} />
        <figure className={s.plateBody} data-reveal>
          <span className={s.plateMark} aria-hidden>&ldquo;</span>
          <blockquote className={s.plateQuote}>{featuredQuote.text}</blockquote>
          <figcaption className={s.plateCite}>
            <strong>{featuredQuote.author}</strong>
            <span>{featuredQuote.role}</span>
          </figcaption>
        </figure>
      </section>

      {/* ───────── Supporting testimony ───────── */}
      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.quotes}>
            {quotes.map((q, i) => (
              <figure key={q.author} className={s.quote} data-reveal style={d(i * 120)}>
                <blockquote className={s.quoteText}>&ldquo;{q.text}&rdquo;</blockquote>
                <figcaption>
                  <strong>{q.author}</strong>
                  {q.role}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className={s.more} data-reveal>
            <Link href="/testimonials" className={s.btnLine}>Read all testimonials</Link>
          </div>
        </div>
      </section>

      {/* ───────── Press ───────── */}
      <section className={`${s.section} ${s.tint}`}>
        <div className={s.inner}>
          <header data-reveal style={{ marginBottom: 'clamp(48px, 6vw, 80px)' }}>
            <p className={s.eyebrow}>In the press</p>
            <h2 className={s.h2}>
              What the press
              <br />
              <em>saw early.</em>
            </h2>
          </header>
          <div className={s.pressGrid}>
            <figure className={s.pressFeature} data-reveal>
              <div className={s.pressMeta}>
                <img src={pressFeature.logo} alt={pressFeature.outlet} className={s.logoInk} />
                <span>{pressFeature.date}</span>
              </div>
              <blockquote className={s.pressQuote}>
                Khabri <em>&ldquo;{pressFeature.quote}&rdquo;</em>
              </blockquote>
              <figcaption className={s.pressContext}>{pressFeature.context}</figcaption>
              <a href={pressFeature.href} target="_blank" rel="noopener noreferrer" className={s.btnLine}>
                Read on TechCrunch
              </a>
            </figure>

            <ul className={s.pressList}>
              {pressMore.map((item, i) => (
                <li key={item.outlet} data-reveal style={d(150 + i * 120)}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <div className={s.pressMeta}>
                      <img src={item.logo} alt={item.outlet} className={s.logoInk} />
                      <span>{item.date}</span>
                    </div>
                    <p className={s.pressHeadline}>{item.headline}</p>
                    <p>{item.context}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────── Writing ───────── */}
      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.writingHead} data-reveal>
            <div>
              <p className={s.eyebrow}>Writing</p>
              <h2 className={s.h2}>
                Notes from building
                <br />
                <em>AI agents in production.</em>
              </h2>
            </div>
            <Link href="/blog" className={s.btnLine}>All writing</Link>
          </div>
          <div className={s.essays}>
            {essays.map((e, i) => (
              <Link key={e.slug} href={`/blog/${e.slug}`} className={s.essay} data-reveal style={d(i * 120)}>
                <p className={s.essayMeta}>
                  {e.date}, {e.read} read
                </p>
                <h3 className={s.essayTitle}>{e.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Closing ───────── */}
      <section className={s.closing}>
        <DecisionField className={s.plateField} threshold={false} intensity={0.55} />
        <div className={s.closingBody} data-reveal>
          <p className={s.kicker}>For founders, CEOs and boards</p>
          <h2 className={s.closingTitle}>
            If AI is on your board&rsquo;s agenda,
            <br />
            <em>let&rsquo;s talk before the roadmap is set.</em>
          </h2>
          <p className={s.closingLede}>
            A focused first conversation about where AI can create value in your business, and what it would take to build it.
          </p>
          <div className={s.closingActions}>
            <a href={BOOKING_URL} className={s.btnBrass}>Book a conversation</a>
            <a href={`mailto:${EMAIL}`} className={s.btnGhost}>Write to me</a>
          </div>
        </div>
      </section>

      <SiteFooter compact />
    </div>
  );
}
