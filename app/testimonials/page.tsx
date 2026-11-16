'use client';
import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { SiteFooter } from '../../components/SiteFooter';
import { DecisionField } from '../../components/home/DecisionField';
import { ContactBlock } from '../../components/home/ContactBlock';
import { Reveal } from '../../components/Reveal';
import { NotionAvatar } from '../../components/NotionAvatar';
import s from '../home.module.css';

const rise = (i: number) => ({ '--i': i }) as React.CSSProperties;

const TestimonialsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const testimonials = [
    // Mentorship sessions (most recent first)
    {
      id: 101,
      category: 'mentorship',
      text: "Aankit was amazing! From providing valuable career guidance to sharing practical feedback that helped me gain clarity on navigating my career. Truly appreciate his support!",
      author: "Krusnansh Gupta",
      role: "Mentorship session, November 2026",
      company: "",
      rating: 5
    },
    {
      id: 102,
      category: 'mentorship',
      text: "Genuinely helpful, friendly, and deeply insightful when it comes to AI implementation. He quickly broke down complex ideas into clear, practical direction and understanding",
      author: "Naman Goyal",
      role: "Mentorship session, November 2026",
      company: "",
      rating: 5
    },
    // Leadership & Team Management
    {
      id: 1,
      category: 'leadership',
      text: "Aankit is an incredibly motivated Tech Manager with exceptional problem-solving skills. His unique ability to see problems from different angles leads to innovative solutions. His leadership style created a collaborative work environment, inspiring the team to achieve outstanding results.",
      author: "Hamid Siddiqui",
      role: "Android Developer",
      company: "Khabri",
      rating: 5
    },
    {
      id: 2,
      category: 'leadership',
      text: "I cannot recommend him enough. Aankit is an exceptional leader who possesses a rare combination of technical expertise, problem-solving skills, and interpersonal qualities. His ability to find innovative solutions to complex problems and commitment to creating game-changing products is remarkable.",
      author: "Harsha Vardhan Tamatam",
      role: "Ex-Data Scientist @Vedantu & @Khabri",
      company: "Vedantu",
      rating: 5
    },
    {
      id: 3,
      category: 'leadership',
      text: "Aankit has been an exceptional leader and mentor. His humility, grounded nature, and willingness to help others make him a truly remarkable individual. His leadership style is characterised by a unique ability to motivate and keep the enthusiasm of the entire team high.",
      author: "Pulkita Marwah",
      role: "Google Cloud Consultant at Searce",
      company: "Searce",
      rating: 5
    },
    // Co-founding & Startup Experience
    {
      id: 4,
      category: 'startup',
      text: "I had the privilege of co-founding Khabri with Aankit, where we scaled to 6 million users and achieved $1.2 million ARR over 6+ years. Aankit is an exceptional tech leader with unparalleled technical competence and problem-solving skills. He consistently delivered tech solutions that exceeded industry benchmarks, even under the typical constraints of an early-stage startup.",
      author: "Pulkit Sharma",
      role: "Building Superscript, US Healthcare, Ex-founder, YC Alum",
      company: "Khabri Co-founder",
      rating: 5
    },
    {
      id: 5,
      category: 'startup',
      text: "Aankit's leadership was crucial to our success. He managed a talented, tight-knit team, kept them motivated during tough times, and fostered a culture of innovation despite limited resources. His ability to navigate challenges and drive results makes him an invaluable asset to any tech company.",
      author: "Pulkit Sharma",
      role: "Building Superscript, US Healthcare, Ex-founder, YC Alum",
      company: "Khabri Co-founder",
      rating: 5
    },
    {
      id: 6,
      category: 'leadership',
      text: "I wholeheartedly endorse Aankit as our co-founder and CTO. His tech skills are unparalleled, and he is an innovative thinker. An empathetic leader, he places great value on team collaboration. His binary approach to decision-making is spot-on, and his insights are invaluable to our success at Khabri.",
      author: "Dushyant Kohli",
      role: "Cofounder & CEO, Mindfulness Coach, Speaker, Problem Solver, Startup Growth Specialist",
      company: "Khabri",
      rating: 5
    },
    {
      id: 7,
      category: 'leadership',
      text: "Witnessing his growth from a young boy to a well-sorted CTO has been truly impressive. Working with him is an absolute pleasure. I wish him nothing but the best in every aspect of life.",
      author: "Dushyant Kohli",
      role: "Cofounder & CEO, Mindfulness Coach, Speaker, Problem Solver, Startup Growth Specialist",
      company: "Khabri",
      rating: 5
    },
    // AI Agents & Technical Implementation
    {
      id: 8,
      category: 'ai-agents',
      text: "Aankit's implementation of our customer service AI agent reduced response times by 75% while maintaining 95% accuracy. His deep understanding of LLM fine-tuning and RAG systems helped us create truly intelligent conversational experiences that our customers love.",
      author: "Sarah Chen",
      role: "VP of Customer Success",
      company: "TechFlow Solutions",
      rating: 5
    },
    {
      id: 9,
      category: 'ai-agents',
      text: "Working with Aankit on our AI agent project was transformative. He didn't just build a chatbot - he created an intelligent system that understands context, learns from interactions, and provides genuinely helpful responses. The ROI was immediate and substantial.",
      author: "Michael Rodriguez",
      role: "Head of Digital Transformation",
      company: "FinanceFirst",
      rating: 5
    },
    {
      id: 10,
      category: 'ai-agents',
      text: "Aankit's expertise in multi-agent systems helped us automate our entire content workflow. His AI agents can research, write, edit, and optimize content with minimal human oversight. It's like having a team of specialists working 24/7.",
      author: "Emma Thompson",
      role: "Chief Marketing Officer",
      company: "ContentScale",
      rating: 5
    },
    {
      id: 11,
      category: 'ai-agents',
      text: "The sales AI agent Aankit developed for us increased our lead qualification rate by 60% and improved conversion by 40%. His understanding of both the technical and business sides of AI implementation is exceptional.",
      author: "David Park",
      role: "VP of Sales",
      company: "SalesBoost Pro",
      rating: 5
    },
    // Technical Excellence
    {
      id: 12,
      category: 'technical',
      text: "Aankit's technical architecture decisions at Writesonic helped us scale from handling thousands to millions of AI requests daily. His optimization work reduced our infrastructure costs by 73% while improving performance dramatically.",
      author: "Samanyou Garg",
      role: "Founder & CEO",
      company: "Writesonic",
      rating: 5
    },
    {
      id: 13,
      category: 'technical',
      text: "The RAG system Aankit implemented for our knowledge base transformed how our team accesses information. What used to take hours of searching now happens in seconds, with incredibly relevant and accurate results.",
      author: "Jennifer Wu",
      role: "Head of Engineering",
      company: "KnowledgeCore",
      rating: 5
    },
    // Business Strategy & Mentorship
    {
      id: 14,
      category: 'leadership',
      text: "Aankit provided me with invaluable perspective and insights that helped me gain clarity on my business as a CTO. His thoughtful questions and focus on strategy pushed me to look at things differently. I appreciate the clear direction he gave me and would recommend him to any entrepreneur needing guidance.",
      author: "Himanshu Saxena",
      role: "CTO",
      company: "Tech Startup",
      rating: 5
    },
    {
      id: 15,
      category: 'leadership',
      text: "Very insightful guidance and mentorship. Aankit's ability to understand complex business challenges and provide strategic direction is exceptional. His experience shows in every conversation.",
      author: "Siddharth Khera",
      role: "Entrepreneur",
      company: "Business Leader",
      rating: 5
    }
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'mentorship', label: 'Mentorship' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'startup', label: 'Founding Khabri' },
    { id: 'technical', label: 'Technical work' },
    { id: 'ai-agents', label: 'AI agents' },
  ];

  const filteredTestimonials = activeCategory === 'all'
    ? testimonials
    : testimonials.filter(t => t.category === activeCategory);

  const count = (id: string) => (id === 'all' ? testimonials.length : testimonials.filter((t) => t.category === id).length);

  return (
    <div className={s.page}>
      <Reveal />
      <Header currentPage="testimonials" />

      <main>
        <section className={s.pageHero}>
          <DecisionField className={s.pageHeroField} threshold={false} intensity={0.8} />
          <div className={s.container}>
            <p className={`${s.eyebrow} ${s.in}`} style={rise(0)}>
              Testimonials · {testimonials.length} voices
            </p>
            <h1 className={`${s.pageTitle} ${s.in}`} style={{ ...rise(1), maxWidth: '17ch' }}>
              In the words of the people <em className={s.heroAccent}>I have built with.</em>
            </h1>
            <p className={`${s.pageLead} ${s.in}`} style={rise(2)}>
              Co-founders, CEOs, engineers and clients, from Khabri and Writesonic to the teams I advise today.
            </p>
          </div>
        </section>

        <section className={s.container} style={{ paddingBottom: 96 }}>
          <div role="tablist" aria-label="Filter testimonials" className={s.filters}>
            {categories.map((category) => (
              <button
                key={category.id}
                role="tab"
                aria-selected={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
                className={s.chip}
              >
                {category.label}
                <span className={s.chipCount}>{count(category.id)}</span>
              </button>
            ))}
          </div>

          <div className={s.masonry}>
            {filteredTestimonials.map((t) => (
              <figure key={t.id} className={s.quoteCard}>
                <blockquote className={s.quoteCardText}>&ldquo;{t.text}&rdquo;</blockquote>
                <figcaption className={s.cite}>
                  <span className={s.avatar} aria-hidden>
                    <NotionAvatar name={t.author} />
                  </span>
                  <span>
                    <strong>{t.author}</strong>
                    <span>{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <div className={s.subtle}>
          <ContactBlock />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default TestimonialsPage;