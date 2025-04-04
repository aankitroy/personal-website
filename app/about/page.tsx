'use client';
import React, { useState } from 'react';
import { 
  Code, 
  Brain, 
  Users, 
  Zap, 
  MessagesSquare,
  Briefcase, 
  GraduationCap, 
  Rocket, 
  Trophy,
  Building
} from 'lucide-react';

// Journey Timeline Component
const JourneyTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const journeyData = [
    {
      period: "2025 - Present",
      role: "Independent Consultant",
      focus: "AI Strategy & Implementation",
      description: "Advising organizations on AI transformation strategies and implementation roadmaps. Specializing in large language models, generative AI, and scalable AI infrastructure.",
      icon: Brain,
      metrics: ["AI Strategy Consulting", "Implementation Architecture", "Technical Leadership"],
      color: "text-purple-600"
    },
    {
      period: "2024 - Present",
      role: "Head of Engineering",
      company: "Pruoo Healthcare",
      tagline: "Building the future of parenting tech",
      description: "Spearheading the technical transformation of a million-user parenting platform. Rebuilt the technical team, slashed app launch time by 80%, and architected a modern backend with Python FastAPI and Terraform.",
      icon: Rocket,
      metrics: ["1M+ Users", "80% Faster Launch", "Team Transformation"],
      color: "text-blue-600"
    },
    {
      period: "2023",
      role: "Engineering Manager",
      company: "Writesonic",
      tagline: "Scaling AI for the masses",
      description: "Supercharged a Y Combinator-backed AI platform's performance from 1.5s to 400ms, serving 3M+ paid users. Grew the engineering team 3x while maintaining excellence. Orchestrated infrastructure optimizations that cut costs in half.",
      icon: Trophy,
      metrics: ["3M+ Users", "73% Cost Reduction", "3x Team Growth"],
      color: "text-green-600"
    },
    {
      period: "2017 - 2023",
      role: "CTO & Co-founder",
      company: "Khabri",
      tagline: "Voice to the vernacular",
      description: "Built an audio platform that democratized content across languages, scaling to 5M+ users. Maintained blazing-fast 14ms response times while leading a team of 20 engineers. Raised $3.2M from top-tier investors including Y Combinator.",
      icon: Users,
      metrics: ["5M+ Users", "14ms Response Time", "$3.2M Raised"],
      color: "text-yellow-600"
    },
    {
      period: "2015 - 2017",
      role: "Senior Software Engineer",
      company: "OnlineTyari",
      tagline: "Empowering millions of aspirations",
      description: "Core engineer of a test prep platform serving 3M+ users. Built real-time analytics and robust backend services handling 1.5M+ daily requests. Slashed system bugs by 70%.",
      icon: Briefcase,
      metrics: ["3M+ Users", "1.5M Daily Requests", "70% Bug Reduction"],
      color: "text-red-600"
    },
    {
      period: "2014 - 2015",
      role: "Associate Software Engineer",
      company: "Nucleus Software",
      tagline: "Banking on innovation",
      description: "Started my journey automating lending processes for major banks like HDFC and ICICI. Built efficient backend services that streamlined loan processing workflows.",
      icon: Building,
      metrics: ["Process Automation", "Banking Tech", "Workflow Optimization"],
      color: "text-indigo-600"
    },
    {
      period: "2010 - 2014",
      role: "Computer Science",
      company: "Birla Institute of Technology",
      tagline: "Where it all began",
      description: "Built strong computer science foundations through hands-on problem-solving and innovation.",
      icon: GraduationCap,
      metrics: ["Problem Solving", "Innovation", "Computer Science"],
      color: "text-gray-600"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-gray-800">Professional Journey</h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-gray-300 rounded-full" />
        
        {/* Journey items */}
        <div className="space-y-12">
          {journeyData.map((item, index) => {
            const Icon = item.icon;
            const isActive = index === activeIndex;
            
            return (
              <div
                key={index}
                className={`relative pl-20 transition-all duration-500 transform
                  ${isActive ? 'scale-102' : 'hover:scale-101'}`}
                onClick={() => setActiveIndex(index)}
              >
                {/* Timeline node */}
                <div className={`absolute left-4 w-10 h-10 rounded-full 
                  ${isActive ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-white'}
                  border-4 border-white shadow-lg
                  flex items-center justify-center transition-all duration-300
                  cursor-pointer hover:scale-110`}>
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : item.color}`} />
                </div>

                {/* Content card */}
                <div className={`bg-white p-8 rounded-xl shadow-sm border-l-4 
                  ${isActive ? 'border-l-purple-500' : 'border-l-gray-200'}
                  hover:shadow-md transition-all duration-300`}>
                  
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">
                        {item.role}
                        {item.company && <span className="text-gray-600"> @ {item.company}</span>}
                      </h3>
                      {item.tagline && (
                        <p className="text-md text-gray-600 italic">&quot;{item.tagline}&quot;</p>
                      )}
                    </div>
                    <span className="text-sm font-semibold px-4 py-2 rounded-full 
                      bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700">
                      {item.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-3">
                    {item.metrics.map((metric, idx) => (
                      <span key={idx} 
                        className="px-3 py-1 rounded-full text-sm font-medium
                        bg-gray-100 text-gray-700">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Main About Page Component
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Engineering Leadership & 
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {' '}AI Strategy
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Bridging the gap between cutting-edge technology and business value with 
                over a decade of experience scaling products to serve millions of users.
              </p>
              <div className="flex gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
                  Let&apos;s Connect
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition">
                  View Projects
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-1 rounded-lg">
                <img 
                  src="/api/placeholder/600/500"
                  alt="Aankit Roy"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Areas of Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8 text-purple-600" />,
                title: "AI Strategy",
                description: "Developing comprehensive AI adoption strategies and implementation roadmaps for businesses."
              },
              {
                icon: <Code className="w-8 h-8 text-blue-600" />,
                title: "System Architecture",
                description: "Designing scalable systems that handle millions of users with sub-300ms response times."
              },
              {
                icon: <Users className="w-8 h-8 text-purple-600" />,
                title: "Team Leadership",
                description: "Building and mentoring high-performing technical teams of 30+ engineers."
              }
            ].map((card, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition">
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Journey Timeline */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <JourneyTimeline />
        </div>
      </section>

      {/* Technical Philosophy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Technical Philosophy</h2>
              <div className="space-y-4">
                {[
                  "Pragmatic architecture decisions that balance innovation with reliability",
                  "Deep focus on performance optimization and scalability",
                  "Strong emphasis on building robust, maintainable AI systems",
                  "Data-driven decision making and measurable outcomes"
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-1 rounded-xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <img 
                    src="/api/placeholder/500/400"
                    alt="Technical Visualization"
                    className="w-full rounded-lg mb-4"
                  />
                  <p className="text-sm text-gray-500 text-center">
                    Visualization of system architecture and AI integration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Let&apos;s Transform Your Technical Challenges</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you&apos;re looking to implement AI solutions or optimize existing systems,
            I&apos;m here to help turn your challenges into opportunities.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition flex items-center gap-2">
              <MessagesSquare className="w-5 h-5" />
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;