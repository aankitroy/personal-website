'use client';
import React from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, MessagesSquare, Mail, Linkedin, Twitter, Github } from 'lucide-react';
import { Header } from '../components/Header';

const Website = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const testimonials = [
    {
      text: "I had the privilege of co-founding Khabri with Aankit, where we scaled to 6 million users and achieved $1.2 million ARR over 6+ years. Aankit is an exceptional tech leader with unparalleled technical competence and problem-solving skills. He consistently delivered tech solutions that exceeded industry benchmarks, even under the typical constraints of an early-stage startup.",
      author: "Pulkit Sharma",
      role: "Building Superscript, US Healthcare, Ex-founder, YC Alum"
    },
    {
      text: "Working with Aankit on our AI agent project was transformative. He didn't just build a chatbot - he created an intelligent system that understands context, learns from interactions, and provides genuinely helpful responses. The ROI was immediate and substantial.",
      author: "Michael Rodriguez",
      role: "Head of Digital Transformation, FinanceFirst"
    },
    {
      text: "Aankit's technical architecture decisions at Writesonic helped us scale from handling thousands to millions of AI requests daily. His optimization work reduced our infrastructure costs by 73% while improving performance dramatically.",
      author: "Samanyou Garg",
      role: "Founder & CEO, Writesonic"
    },
    {
      text: "Aankit has been an exceptional leader and mentor. His humility, grounded nature, and willingness to help others make him a truly remarkable individual. His leadership style is characterised by a unique ability to motivate and keep the enthusiasm of the entire team high.",
      author: "Pulkita Marwah",
      role: "Google Cloud Consultant at Searce"
    },
    {
      text: "I wholeheartedly endorse Aankit as our co-founder and CTO. His tech skills are unparalleled, and he is an innovative thinker. An empathetic leader, he places great value on team collaboration. His binary approach to decision-making is spot-on, and his insights are invaluable to our success at Khabri.",
      author: "Dushyant Kohli",
      role: "Cofounder & CEO, Mindfulness Coach, Speaker, Problem Solver, Startup Growth Specialist"
    },
    {
      text: "Very insightful guidance and mentorship. Aankit's ability to understand complex business challenges and provide strategic direction is exceptional. His experience shows in every conversation.",
      author: "Siddharth Khera",
      role: "Entrepreneur, Business Leader"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aankit Roy",
    "url": "https://aankitroy.com",
    "image": "https://aankitroy.com/aankitroy.png",
    "jobTitle": "AI Strategy & Engineering Leadership Consultant",
    "worksFor": {
      "@type": "Organization",
      "name": "Independent Consultant"
    },
    "alumniOf": [
      {
        "@type": "Organization",
        "name": "Y Combinator"
      },
      {
        "@type": "Organization", 
        "name": "Birla Institute of Technology"
      }
    ],
    "knowsAbout": [
      "AI Strategy",
      "Engineering Leadership",
      "System Architecture", 
      "AI Agents",
      "Machine Learning",
      "Technical Leadership",
      "Startup Management"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/aankit-roy-20515b35/",
      "https://x.com/AankitRoy",
      "https://github.com/aankitroy"
    ],
    "description": "Transforming businesses through strategic AI implementation and engineering leadership. Over a decade of experience scaling products to serve millions of users."
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header currentPage="home" />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Where 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> AI Strategy </span> 
            Meets 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Implementation</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">Transforming businesses through strategic AI solutions</p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">Strategic Clarity</h3>
              <p className="text-gray-600 dark:text-gray-300">Know exactly where and how to implement AI in your business</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">Clear ROI</h3>
              <p className="text-gray-600 dark:text-gray-300">Cut through the hype to focus on AI solutions with measurable impact</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">Future-Ready</h3>
              <p className="text-gray-600 dark:text-gray-300">Stay ahead with the latest advancements in AI technology</p>
            </div>
          </div>

          <div className="mt-12 flex justify-center gap-4">
            <button onClick={() => {
              window.location.href = 'https://app.cal.com/aankit/30min';
            }} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:opacity-90 inline-flex items-center">
              Schedule Free Consultation
              <ArrowRight className="ml-2" />
            </button>
            <button onClick={() => {
              window.location.href = '/services';
            }}  className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50">
              Explore Solutions
            </button>
          </div>
        </div>
      </section>

      {/* About Section with CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            With over a decade of engineering leadership experience at companies like Writesonic and Khabri, I combine deep technical expertise with strategic AI implementation. My journey spans from scaling systems for millions of users to architecting cutting-edge AI solutions. I specialize in helping businesses navigate the AI landscape while ensuring robust, scalable implementations that deliver measurable results.
          </p>
          <a href="/about" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold">
            Learn more about my journey
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Featured Testimonials Preview */}
      <section className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">What Industry Leaders Say</h2>
            <p className="text-gray-600 dark:text-gray-300">Insights from professionals I&apos;ve worked with</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">{testimonial.author}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a href="/testimonials" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold">
              View all testimonials
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Press Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Featured In</h2>
            <p className="text-gray-600 dark:text-gray-300">Our journey has been covered by major publications</p>
          </div>
          
          {/* Major Publications Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center">
              <img 
                src="https://logo.clearbit.com/techcrunch.com" 
                alt="TechCrunch" 
                className="h-8 object-contain hover:scale-110 transition-all duration-300" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                  if (nextElement) nextElement.style.display = 'block';
                }}
              />
              <div className="px-4 py-2 bg-green-100 rounded-lg hidden">
                <span className="text-green-800 font-bold text-sm">TechCrunch</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="https://logo.clearbit.com/forbes.com" 
                alt="Forbes" 
                className="h-8 object-contain hover:scale-110 transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                  if (nextElement) nextElement.style.display = 'block';
                }}
              />
              <div className="px-4 py-2 bg-blue-100 rounded-lg hidden">
                <span className="text-blue-800 font-bold text-sm">Forbes</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center hover:scale-110 transition-all duration-300">
                <span className="text-white font-bold text-xs">ET</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="https://logo.clearbit.com/ycombinator.com" 
                alt="Y Combinator" 
                className="h-8 object-contain hover:scale-110 transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                  if (nextElement) nextElement.style.display = 'block';
                }}
              />
              <div className="px-4 py-2 bg-orange-500 rounded-lg hidden">
                <span className="text-white font-bold text-sm">Y Combinator</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="https://logo.clearbit.com/yourstory.com" 
                alt="YourStory" 
                className="h-8 object-contain hover:scale-110 transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                  if (nextElement) nextElement.style.display = 'block';
                }}
              />
              <div className="px-4 py-2 bg-red-100 rounded-lg hidden">
                <span className="text-red-800 font-bold text-sm">YourStory</span>
              </div>
            </div>
          </div>

          {/* Featured Articles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
              <div className="flex items-center mb-4">
                <img 
                  src="https://logo.clearbit.com/techcrunch.com" 
                  alt="TechCrunch" 
                  className="h-6 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextElement) nextElement.style.display = 'block';
                  }}
                />
                <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-md hidden">
                  <span className="text-green-800 dark:text-green-300 font-bold text-xs">TC</span>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">YC S19 Demo Day Favorite</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Featured among TechCrunch&apos;s top 12 favorite startups from Y Combinator&apos;s Summer 2019 Demo Day.</p>
              <a href="https://techcrunch.com/2019/08/21/our-12-favorite-startups-from-y-combinators-s19-demo-day-2" target="_blank" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium inline-flex items-center transition-colors">
                Read Article <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">ET</span>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">ETCIO Interview</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Discussion on key roles as a technology leader and scaling tech platforms.</p>
              <a href="https://www.youtube.com/watch?v=pokPfUjnCek" target="_blank" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium inline-flex items-center transition-colors">
                Watch Interview <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
              <div className="flex items-center mb-4">
                <img 
                  src="https://logo.clearbit.com/forbes.com" 
                  alt="Forbes" 
                  className="h-6 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextElement) nextElement.style.display = 'block';
                  }}
                />
                <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-md hidden">
                  <span className="text-blue-800 dark:text-blue-300 font-bold text-xs">F</span>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">Forbes India Feature</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Featured in Forbes India&apos;s coverage of the rising regional podcast ecosystem.</p>
              <a href="https://www.forbesindia.com/article/take-one-big-story-of-the-day/regional-podcasts-find-their-voice/63743/1" target="_blank" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium inline-flex items-center transition-colors">
                Read Article <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Let&apos;s Transform Your Technical Challenges</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you&apos;re looking to implement AI solutions or optimize existing systems,
            I&apos;m here to help turn your challenges into opportunities.
          </p>
          <button onClick={() => {
            window.location.href = 'https://app.cal.com/aankit/30min';
          }} className="bg-white dark:bg-gray-900 text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition flex items-center gap-2 mx-auto">
            <MessagesSquare className="w-5 h-5" />
            Schedule a Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <span className="text-xl font-bold text-gray-900 dark:text-gray-100">Aankit Roy</span>
              <p className="mt-4 text-gray-600 dark:text-gray-300">Transforming businesses through strategic AI implementation.</p>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Services</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>Build AI Agents</li>
                <li>AI Strategy & Implementation</li>
                <li>System Architecture Design</li>
                <li>Technical Team Leadership</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Resources</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li><Link href="/blog" className="hover:text-purple-600">Blog</Link></li>
                <li><a href="/testimonials" className="hover:text-purple-600">Testimonials</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Connect</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li><a href="https://www.linkedin.com/in/aankit-roy-20515b35/" target="_blank" className="hover:text-purple-600">LinkedIn</a></li>
                <li><a href="https://x.com/AankitRoy" target="_blank" className="hover:text-purple-600">Twitter/X</a></li>
                <li><a href="https://github.com/aankitroy" target="_blank" className="hover:text-purple-600">GitHub</a></li>
                <li><a href="mailto:aankitroy1990@gmail.com" className="hover:text-purple-600">Email: aankitroy1990@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Website;