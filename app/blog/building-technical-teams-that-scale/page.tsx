'use client';
import React from 'react';
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Share2, Mail, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const BuildingTechnicalTeamsPage = () => {
  const post = {
    id: 'building-technical-teams-that-scale',
    title: 'Building Technical Teams That Scale',
    excerpt: 'Essential strategies for building and leading technical teams that can grow with your business, based on experience scaling teams at multiple startups from 3 to 50+ engineers.',
    author: 'Aankit Roy',
    date: '2025-09-15',
    readTime: '15 min read',
    tags: ['Leadership', 'Team Building', 'Scaling', 'Engineering Management'],
    featured: false
  };

  const shareUrl = `https://aankitroy.com/blog/building-technical-teams-that-scale`;
  const shareText = `${post.title} by Aankit Roy`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-gray-100">Aankit Roy</Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:text-gray-100">About</Link>
              <Link href="/services" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:text-gray-100">Services</Link>
              <Link href="/blog" className="text-purple-600 font-semibold">Blog</Link>
              <Link href="/testimonials" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:text-gray-100">Testimonials</Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Link href="/blog" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      <article className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-300 mb-6">
              <div className="flex items-center mr-6 mb-2">
                <User className="w-4 h-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center mr-6 mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center mr-6 mb-2">
                <Clock className="w-4 h-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center space-x-4 pb-8 border-b border-gray-200">
              <span className="text-gray-600 dark:text-gray-300 font-semibold">Share:</span>
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
              <button onClick={() => navigator.clipboard.writeText(shareUrl)} className="flex items-center px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition">
                <Share2 className="w-4 h-4 mr-2" />
                Copy Link
              </button>
            </div>
          </header>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <div className="text-gray-700 dark:text-gray-200 leading-relaxed">
              
              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed italic">building a technical team that scales... everyone talks about it, few actually do it well.</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">over the past decade, i've scaled engineering teams from 3 to 50+ people at multiple startups. i've made every mistake possible (some expensive ones), learned what actually works, and watched teams either thrive or collapse under growth pressure.</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">here's what i wish someone had told me before my first scaling experience...</p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-gray-100">the foundation: hiring for growth, not just gaps</h2>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">biggest mistake i see? hiring for today's problems instead of tomorrow's challenges.</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">at Khabri, we made this mistake early. hired 5 engineers who were perfect for our current codebase. six months later, when we needed to rebuild for scale, none of them could adapt to the new architecture.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">what to actually look for</h3>

              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700 dark:text-gray-200"><strong>learning velocity:</strong> how fast can they pick up new technologies?</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200"><strong>problem-solving approach:</strong> do they break down complex problems systematically?</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200"><strong>communication skills:</strong> can they explain technical concepts clearly?</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200"><strong>ownership mindset:</strong> do they take responsibility for outcomes, not just tasks?</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-gray-100">managing technical debt while shipping features</h2>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">this is the eternal struggle: business wants features, engineering wants clean code. both are right.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">the 15% rule</h3>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">allocate 15% of every sprint to technical debt paydown. not negotiable. not "when we have time." every single sprint.</p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-gray-100">the delegation framework that actually works</h2>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">as teams grow, your role shifts from doing to enabling others to do.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">the 5-level delegation model</h3>

              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700 dark:text-gray-200"><strong>level 1:</strong> "do exactly this" (for new team members)</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200"><strong>level 2:</strong> "do this, but use your judgment on details"</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200"><strong>level 3:</strong> "achieve this outcome, you decide how"</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200"><strong>level 4:</strong> "here's the problem space, you define the solution"</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200"><strong>level 5:</strong> "you're responsible for this area, keep me informed"</li>
              </ul>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">most people try to jump from level 1 to level 5. that's how you get chaos.</p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-gray-100">the scaling mistakes that kill teams</h2>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">mistake 1: hiring too fast</h3>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">doubled our team size in 3 months once. seemed like a good idea... until productivity actually decreased.</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed"><strong>lesson:</strong> hire in waves, not floods. give new hires time to integrate before adding more.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">mistake 2: promoting the best engineer to manager</h3>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">being great at code doesn't make someone great at managing people.</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed"><strong>lesson:</strong> management is a different skill. provide training or hire experienced managers.</p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-gray-100">the bottom line</h2>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">scaling technical teams is part art, part science. the science is about processes, metrics, and systems. the art is about people, culture, and leadership.</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">the teams that scale successfully do both: they build robust systems AND maintain human connections.</p>

              <hr className="my-8 border-gray-300" />

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed"><strong>scaling your technical team?</strong></p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">i'd love to hear about your challenges. every team is different, and the best scaling strategies are the ones adapted to your specific context and culture.</p>

            </div>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                AR
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Aankit Roy</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  AI Strategy & Engineering Leadership consultant with over a decade of experience scaling technical teams 
                  from early-stage startups to enterprise organizations. Former CTO at Y Combinator companies.
                </p>
                <div className="flex items-center space-x-4">
                  <a href="https://www.linkedin.com/in/aankit-roy-20515b35/" target="_blank" className="text-purple-600 hover:text-purple-700">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://x.com/AankitRoy" target="_blank" className="text-purple-600 hover:text-purple-700">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="mailto:aankitroy1990@gmail.com" className="text-purple-600 hover:text-purple-700">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center p-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4">Need Help Building Your Technical Team?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              I help organizations build engineering teams that scale efficiently while maintaining culture and innovation. 
              Let's discuss your specific team building and leadership challenges.
            </p>
            <a
              href="https://app.cal.com/aankit/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              Schedule a Leadership Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </article>

      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="text-xl font-bold text-gray-900 dark:text-gray-100">Aankit Roy</Link>
              <p className="mt-4 text-gray-600 dark:text-gray-300">AI Strategy & Engineering Leadership</p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Navigation</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li><Link href="/about" className="hover:text-purple-600">About</Link></li>
                <li><Link href="/services" className="hover:text-purple-600">Services</Link></li>
                <li><Link href="/blog" className="hover:text-purple-600">Blog</Link></li>
                <li><Link href="/testimonials" className="hover:text-purple-600">Testimonials</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Services</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>AI Strategy & Implementation</li>
                <li>Engineering Leadership</li>
                <li>System Architecture</li>
                <li>Technical Consulting</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Connect</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li><a href="https://www.linkedin.com/in/aankit-roy-20515b35/" target="_blank" className="hover:text-purple-600">LinkedIn</a></li>
                <li><a href="https://x.com/AankitRoy" target="_blank" className="hover:text-purple-600">Twitter/X</a></li>
                <li><a href="https://github.com/aankitroy" target="_blank" className="hover:text-purple-600">GitHub</a></li>
                <li><a href="mailto:aankitroy1990@gmail.com" className="hover:text-purple-600">Email</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BuildingTechnicalTeamsPage;
