'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Quote, Star, Briefcase, Users, Brain, Zap } from 'lucide-react';

const TestimonialsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const testimonials = [
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
    { id: 'all', label: 'All Testimonials', icon: Users },
    { id: 'leadership', label: 'Leadership', icon: Briefcase },
    { id: 'ai-agents', label: 'AI Agents', icon: Brain },
    { id: 'startup', label: 'Startup Experience', icon: Zap },
    { id: 'technical', label: 'Technical Excellence', icon: Star }
  ];

  const filteredTestimonials = activeCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeCategory);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-700">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              <span className="text-xl font-bold text-gray-900">Testimonials</span>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">What People Say</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Hear from colleagues, co-founders, and clients about their experiences working with me
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-purple-50 hover:text-purple-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-6">
                  <Quote className="w-8 h-8 text-purple-600 opacity-60" />
                  <div className="flex gap-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  {testimonial.company && (
                    <p className="text-sm text-purple-600">{testimonial.company}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-purple-100">
            Let&apos;s discuss how I can help transform your technical challenges into opportunities
          </p>
          <button 
            onClick={() => window.location.href = 'https://app.cal.com/aankit/30min'}
            className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold"
          >
            Schedule a Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-gray-600">
            © 2025 Aankit Roy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TestimonialsPage;
