'use client';
import React from 'react';
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Share2, Mail, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const AIStrategyImplementationGuidePage = () => {
  const post = {
    id: 'ai-strategy-implementation-guide',
    title: 'The Complete Guide to AI Strategy Implementation',
    excerpt: 'Learn how to successfully implement AI strategies in your organization with practical frameworks and real-world examples from scaling AI at Writesonic.',
    author: 'Aankit Roy',
    date: '2025-09-15',
    readTime: '8 min read',
    tags: ['AI Strategy', 'Implementation', 'Leadership'],
    featured: true
  };

  const shareUrl = `https://aankitroy.com/blog/ai-strategy-implementation-guide`;
  const shareText = `${post.title} by Aankit Roy`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
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

      {/* Back to Blog */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/blog" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      {/* Article */}
      <article className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
              {post.title}
            </h1>
            
            {/* Meta Information */}
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

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="flex items-center space-x-4 pb-8 border-b border-gray-200">
              <span className="text-gray-600 dark:text-gray-300 font-semibold">Share:</span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(shareUrl);
                }}
                className="flex items-center px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Copy Link
              </button>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <div className="text-gray-700 dark:text-gray-200 leading-relaxed">
              
              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">implementing AI in your organization isn't just about adopting the latest technology—it's about creating a strategic framework that delivers measurable business value.</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">after scaling AI systems at companies like Writesonic and Khabri, i've learned that successful AI implementation follows specific patterns. here's what actually works.</p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-gray-100">start with business problems, not technology</h2>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">the biggest mistake i see organizations make is starting with the technology rather than the problem. before considering any AI solution, ask yourself:</p>

              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700 dark:text-gray-200">what specific business problem are we trying to solve?</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">how do we currently solve this problem?</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">what would success look like?</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">how will we measure ROI?</li>
              </ul>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">at Writesonic, we didn't start by saying "let's use GPT." we started by identifying that our users needed faster, more accurate content generation. the AI was the solution, not the starting point.</p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-gray-100">build your AI foundation first</h2>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">before implementing any AI solution, you need the right foundation:</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">data infrastructure</h3>
              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700 dark:text-gray-200">clean, accessible data pipelines</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">proper data governance and quality controls</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">scalable storage solutions</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">real-time data processing capabilities</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">team capabilities</h3>
              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700 dark:text-gray-200">AI-literate leadership team</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">technical talent with ML/AI experience</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">cross-functional collaboration between business and tech teams</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">change management capabilities</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">technology stack</h3>
              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700 dark:text-gray-200">cloud infrastructure that can scale</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">MLOps pipelines for model deployment and monitoring</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">A/B testing frameworks</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">robust monitoring and alerting systems</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-gray-100">the four-phase implementation approach</h2>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">here's the framework i use for AI implementation:</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">phase 1: pilot (weeks 1-4)</h3>
              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700 dark:text-gray-200">select a small, well-defined use case</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">build a minimum viable AI solution</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">test with a limited user group</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">measure initial results and gather feedback</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">phase 2: validate (weeks 5-12)</h3>
              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700 dark:text-gray-200">expand to a broader user base</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">implement proper monitoring and feedback loops</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">refine the solution based on real usage patterns</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">establish clear success metrics</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">phase 3: scale (months 3-6)</h3>
              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700 dark:text-gray-200">roll out to full production</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">implement automated retraining pipelines</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">build comprehensive monitoring dashboards</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">establish operational procedures</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">phase 4: optimize (ongoing)</h3>
              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700 dark:text-gray-200">continuous model improvement</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">feature expansion based on user feedback</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">performance optimization</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">cost optimization</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-gray-100">common pitfalls and how to avoid them</h2>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">pitfall 1: overengineering from the start</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">start simple. a basic solution that works is better than a complex solution that doesn't ship.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">pitfall 2: ignoring data quality</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">AI is only as good as your data. invest in data quality from day one.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">pitfall 3: lack of human oversight</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">AI should augment human decision-making, not replace it entirely. always maintain human oversight.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">pitfall 4: not planning for scale</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">design your systems to handle 10x growth from the beginning. it's easier than rebuilding later.</p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-gray-100">measuring success</h2>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">successful AI implementation requires clear metrics across three categories:</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">business metrics</h3>
              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700 dark:text-gray-200">revenue impact</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">cost savings</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">user satisfaction scores</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">time to value</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">technical metrics</h3>
              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700 dark:text-gray-200">model accuracy and performance</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">system latency and uptime</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">data quality scores</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">model drift detection</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">operational metrics</h3>
              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700 dark:text-gray-200">time to deploy new models</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">incident response times</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">team productivity improvements</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">user adoption rates</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-gray-100">real-world example: scaling AI at Writesonic</h2>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">when i joined Writesonic, we were processing thousands of AI requests daily. by the time i left, we were handling millions. here's how we did it:</p>

              <ol className="mb-4 ml-4 list-decimal">
                <li className="mb-2 text-gray-700 dark:text-gray-200"><strong>started with user problems:</strong> we identified that users wanted faster content generation with better quality.</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200"><strong>built incrementally:</strong> we started with basic GPT integration and gradually added custom models, fine-tuning, and advanced features.</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200"><strong>invested in infrastructure:</strong> we built robust caching, load balancing, and monitoring systems that could handle massive scale.</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200"><strong>optimized continuously:</strong> we reduced infrastructure costs by 73% while improving performance through careful optimization and caching strategies.</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200"><strong>maintained quality:</strong> we implemented comprehensive quality assurance processes to ensure consistent output quality at scale.</li>
              </ol>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-gray-100">next steps for your organization</h2>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">ready to implement AI in your organization? here's what i recommend:</p>

              <ol className="mb-4 ml-4 list-decimal">
                <li className="mb-2 text-gray-700 dark:text-gray-200"><strong>assess your current state:</strong> evaluate your data, team, and technology readiness</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200"><strong>identify high-impact use cases:</strong> look for problems where AI can deliver clear ROI</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200"><strong>start small:</strong> begin with a pilot project to prove value</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200"><strong>build your foundation:</strong> invest in the infrastructure and capabilities you'll need to scale</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200"><strong>measure and iterate:</strong> continuously improve based on real-world results</li>
              </ol>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">remember, successful AI implementation is a marathon, not a sprint. focus on building sustainable, scalable solutions that deliver real business value.</p>

              <hr className="my-8 border-gray-300" />

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed"><strong>need help implementing AI in your organization?</strong></p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">i offer strategic consulting and hands-on implementation support to help organizations successfully deploy AI solutions that deliver measurable results.</p>

            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-16 p-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                AR
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Aankit Roy</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  AI Strategy & Engineering Leadership consultant with over a decade of experience scaling AI systems 
                  at companies like Writesonic and Khabri. Specialized in helping organizations implement AI strategies that deliver measurable business value.
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

          {/* CTA Section */}
          <div className="mt-16 text-center p-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Implement AI in Your Organization?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              I help organizations develop and execute AI strategies that deliver real business value. 
              Let's discuss how to implement AI solutions that scale with your business.
            </p>
            <a
              href="https://app.cal.com/aankit/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              Schedule an AI Strategy Session
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </article>

      {/* Footer */}
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

export default AIStrategyImplementationGuidePage;
