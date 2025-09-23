'use client';
import React from 'react';
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Share2, Mail, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const ScalingAISystemsPage = () => {
  const post = {
    id: 'scaling-ai-systems-lessons-learned',
    title: 'Scaling AI Systems: Lessons from Processing Millions of Requests',
    excerpt: 'Key insights and practical strategies for scaling AI systems from thousands to millions of requests daily, with real examples from Writesonic and cost optimization techniques.',
    author: 'Aankit Roy',
    date: '2025-09-15',
    readTime: '16 min read',
    tags: ['Scaling', 'Performance', 'Infrastructure', 'AI Systems'],
    featured: false
  };

  const shareUrl = `https://aankitroy.com/blog/scaling-ai-systems-lessons-learned`;
  const shareText = `${post.title} by Aankit Roy`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-900">Aankit Roy</Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link href="/services" className="text-gray-600 hover:text-gray-900">Services</Link>
              <Link href="/blog" className="text-purple-600 font-semibold">Blog</Link>
              <Link href="/testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</Link>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              {post.title}
            </h1>
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center text-gray-600 mb-6">
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
              <span className="text-gray-600 font-semibold">Share:</span>
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
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed">
              
              <p className="mb-4 text-gray-700 leading-relaxed italic">scaling AI from thousands to millions of requests... sounds simple, right?</p>

              <p className="mb-4 text-gray-700 leading-relaxed">wrong. it's one of the most complex technical challenges i've tackled. when i joined Writesonic, we were processing about 15k AI requests daily. by the time i left, we were handling over 2 million requests per day.</p>

              <p className="mb-4 text-gray-700 leading-relaxed">here's what nobody tells you about scaling AI systems: it's not just about adding more servers.</p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900">the brutal reality of AI scaling</h2>

              <p className="mb-4 text-gray-700 leading-relaxed">let me start with a story that'll save you months of pain...</p>

              <p className="mb-4 text-gray-700 leading-relaxed">three months into scaling Writesonic, our AWS bill hit $47k for a single month. our CEO called an emergency meeting. "either fix this or we're shutting down the AI features."</p>

              <p className="mb-4 text-gray-700 leading-relaxed">that's when i learned that scaling AI isn't just about performance - it's about making the economics work.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">the three scaling killers</h3>

              <p className="mb-4 text-gray-700 leading-relaxed">after working with dozens of AI systems, i've identified three things that kill scaling efforts:</p>

              <ol className="mb-4 ml-4 list-decimal">
                <li className="mb-2 text-gray-700"><strong>naive API usage:</strong> treating every request as independent</li>
                <li className="mb-2 text-gray-700"><strong>infrastructure sprawl:</strong> adding resources without optimization</li>
                <li className="mb-2 text-gray-700"><strong>monitoring blindness:</strong> not knowing where your bottlenecks actually are</li>
              </ol>

              <p className="mb-4 text-gray-700 leading-relaxed">fix these three, and you're 80% of the way there.</p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900">the caching strategy that changed everything</h2>

              <p className="mb-4 text-gray-700 leading-relaxed">here's the single most impactful optimization we made at Writesonic:</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">semantic caching (not just response caching)</h3>

              <p className="mb-4 text-gray-700 leading-relaxed">traditional caching looks for exact matches. but AI requests are rarely identical. users ask the same questions in different ways:</p>

              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700">"write a blog post about AI"</li>
                <li className="mb-2 text-gray-700">"create an article on artificial intelligence"</li>
                <li className="mb-2 text-gray-700">"help me write content about AI technology"</li>
              </ul>

              <p className="mb-4 text-gray-700 leading-relaxed">same intent, different words. semantic caching uses embeddings to identify similar requests and serve cached responses.</p>

              <p className="mb-4 text-gray-700 leading-relaxed"><strong>result:</strong> 67% cache hit rate, $23k monthly savings in API costs</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">the three-layer caching architecture</h3>

              <p className="mb-4 text-gray-700 leading-relaxed">we implemented caching at three levels:</p>

              <ol className="mb-4 ml-4 list-decimal">
                <li className="mb-2 text-gray-700"><strong>CDN layer:</strong> static responses and common queries (99.9% hit rate)</li>
                <li className="mb-2 text-gray-700"><strong>application layer:</strong> semantic caching with Redis (67% hit rate)</li>
                <li className="mb-2 text-gray-700"><strong>model layer:</strong> GPU memory caching for model weights (eliminated cold starts)</li>
              </ol>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900">load balancing that actually works for AI</h2>

              <p className="mb-4 text-gray-700 leading-relaxed">traditional load balancing doesn't work well for AI workloads. here's why:</p>

              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700">AI requests have wildly different processing times (100ms to 30s)</li>
                <li className="mb-2 text-gray-700">model loading creates significant cold start delays</li>
                <li className="mb-2 text-gray-700">GPU memory usage varies dramatically by request type</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">intelligent request routing</h3>

              <p className="mb-4 text-gray-700 leading-relaxed">we built a routing system that considers:</p>

              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700"><strong>request complexity:</strong> simple requests go to lightweight instances</li>
                <li className="mb-2 text-gray-700"><strong>model affinity:</strong> route to instances with the right model already loaded</li>
                <li className="mb-2 text-gray-700"><strong>queue depth:</strong> avoid overloading any single instance</li>
                <li className="mb-2 text-gray-700"><strong>geographic proximity:</strong> reduce latency for global users</li>
              </ul>

              <p className="mb-4 text-gray-700 leading-relaxed"><strong>impact:</strong> average response time dropped from 3.2s to 1.1s</p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900">the cost optimization playbook</h2>

              <p className="mb-4 text-gray-700 leading-relaxed">reducing our AWS bill from $47k to $16k per month while increasing capacity 10x required a systematic approach:</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">1. right-size your infrastructure</h3>

              <p className="mb-4 text-gray-700 leading-relaxed">we were running GPU instances 24/7 because "what if we need them?" turned out, we only needed full capacity 4 hours per day.</p>

              <p className="mb-4 text-gray-700 leading-relaxed"><strong>solution:</strong> auto-scaling based on queue depth and response time targets</p>
              <p className="mb-4 text-gray-700 leading-relaxed"><strong>savings:</strong> $18k/month</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">2. optimize model serving</h3>

              <p className="mb-4 text-gray-700 leading-relaxed">running separate instances for each model was killing us on costs.</p>

              <p className="mb-4 text-gray-700 leading-relaxed"><strong>solution:</strong> multi-model serving with dynamic loading</p>
              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700">load models on-demand based on request patterns</li>
                <li className="mb-2 text-gray-700">share GPU memory across multiple models</li>
                <li className="mb-2 text-gray-700">implement model quantization for smaller memory footprint</li>
              </ul>
              <p className="mb-4 text-gray-700 leading-relaxed"><strong>savings:</strong> $8k/month</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">3. smart batching</h3>

              <p className="mb-4 text-gray-700 leading-relaxed">processing requests one by one is incredibly inefficient for AI workloads.</p>

              <p className="mb-4 text-gray-700 leading-relaxed"><strong>implementation:</strong></p>
              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700">group similar requests into batches</li>
                <li className="mb-2 text-gray-700">dynamic batch sizing based on GPU memory and latency targets</li>
                <li className="mb-2 text-gray-700">timeout mechanisms to prevent batch delays</li>
              </ul>
              <p className="mb-4 text-gray-700 leading-relaxed"><strong>result:</strong> 4x throughput increase with same hardware</p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900">the mistakes that cost us $30k</h2>

              <p className="mb-4 text-gray-700 leading-relaxed">let me share the expensive lessons so you don't repeat them:</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">mistake 1: over-provisioning for peak load</h3>

              <p className="mb-4 text-gray-700 leading-relaxed">we sized our infrastructure for Black Friday traffic... every single day. turns out, our peak was 10x our average, but only lasted 2 hours.</p>

              <p className="mb-4 text-gray-700 leading-relaxed"><strong>lesson:</strong> build for average load with burst capacity, not constant peak capacity</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">mistake 2: ignoring request patterns</h3>

              <p className="mb-4 text-gray-700 leading-relaxed">we treated all requests equally. but analysis showed:</p>
              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700">40% of requests were variations of the same 100 prompts</li>
                <li className="mb-2 text-gray-700">20% of users generated 60% of requests</li>
                <li className="mb-2 text-gray-700">request complexity followed a power law distribution</li>
              </ul>

              <p className="mb-4 text-gray-700 leading-relaxed"><strong>lesson:</strong> optimize for your actual usage patterns, not theoretical uniform distribution</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">mistake 3: premature optimization</h3>

              <p className="mb-4 text-gray-700 leading-relaxed">spent 3 weeks optimizing model inference speed... only to discover that network latency was our real bottleneck.</p>

              <p className="mb-4 text-gray-700 leading-relaxed"><strong>lesson:</strong> measure first, optimize second. always.</p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900">monitoring that actually helps</h2>

              <p className="mb-4 text-gray-700 leading-relaxed">standard application monitoring doesn't work for AI systems. you need different metrics:</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">AI-specific metrics that matter</h3>

              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700"><strong>token throughput:</strong> tokens processed per second (not just requests)</li>
                <li className="mb-2 text-gray-700"><strong>GPU utilization:</strong> actual compute usage vs idle time</li>
                <li className="mb-2 text-gray-700"><strong>cache hit rates:</strong> by request type and user segment</li>
                <li className="mb-2 text-gray-700"><strong>model drift:</strong> output quality degradation over time</li>
                <li className="mb-2 text-gray-700"><strong>cost per request:</strong> real-time cost tracking</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">the alerting system that saved us</h3>

              <p className="mb-4 text-gray-700 leading-relaxed">we built alerts for:</p>
              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700">queue depth exceeding 100 requests (scale up trigger)</li>
                <li className="mb-2 text-gray-700">response time 95th percentile above 5s (performance degradation)</li>
                <li className="mb-2 text-gray-700">cost per request increasing 20% week-over-week (cost anomaly)</li>
                <li className="mb-2 text-gray-700">cache hit rate dropping below 60% (cache effectiveness)</li>
              </ul>

              <p className="mb-4 text-gray-700 leading-relaxed">these alerts caught issues before they became customer-facing problems.</p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900">the architecture evolution</h2>

              <p className="mb-4 text-gray-700 leading-relaxed">our architecture evolved through three distinct phases:</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">phase 1: monolithic (0-50k requests/day)</h3>

              <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm font-mono">
                user request → single API server → OpenAI API → response
              </div>

              <p className="mb-4 text-gray-700 leading-relaxed">simple, but hit limits quickly. response times became unpredictable, and costs were linear with usage.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">phase 2: microservices (50k-500k requests/day)</h3>

              <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm font-mono">
                load balancer → request router → model service → cache layer → response
              </div>

              <p className="mb-4 text-gray-700 leading-relaxed">better, but still treating each request independently. we were missing optimization opportunities.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">phase 3: intelligent orchestration (500k+ requests/day)</h3>

              <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm font-mono">
                intelligent router → batch processor → multi-model server → semantic cache → response
              </div>

              <p className="mb-4 text-gray-700 leading-relaxed">this is where the magic happened. requests are analyzed, batched, and routed intelligently.</p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900">the final results</h2>

              <p className="mb-4 text-gray-700 leading-relaxed">after 18 months of optimization, here's what we achieved:</p>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Improvements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Scale:</strong> 15k → 2M+ requests/day (133x increase)</li>
                  <li><strong>Response Time:</strong> 3.2s → 1.1s average (65% improvement)</li>
                  <li><strong>Uptime:</strong> 97.8% → 99.9% (significant reliability improvement)</li>
                  <li><strong>Cache Hit Rate:</strong> 0% → 67% (major efficiency gain)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cost Optimization</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Infrastructure Costs:</strong> 73% reduction while scaling 133x</li>
                  <li><strong>Cost per Request:</strong> $0.12 → $0.03 (75% reduction)</li>
                  <li><strong>Monthly Savings:</strong> $31k/month at peak</li>
                  <li><strong>ROI:</strong> 340% return on optimization investment</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900">practical implementation roadmap</h2>

              <p className="mb-4 text-gray-700 leading-relaxed">if you're scaling an AI system, here's the order i recommend:</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">weeks 1-2: measurement foundation</h3>
              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700">implement comprehensive monitoring</li>
                <li className="mb-2 text-gray-700">establish baseline performance metrics</li>
                <li className="mb-2 text-gray-700">analyze request patterns and user behavior</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">weeks 3-4: quick wins</h3>
              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700">implement basic response caching</li>
                <li className="mb-2 text-gray-700">add request deduplication</li>
                <li className="mb-2 text-gray-700">optimize instance sizes and types</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">weeks 5-8: intelligent optimization</h3>
              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700">implement semantic caching</li>
                <li className="mb-2 text-gray-700">build smart request routing</li>
                <li className="mb-2 text-gray-700">add batch processing capabilities</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">weeks 9-12: advanced scaling</h3>
              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700">implement multi-model serving</li>
                <li className="mb-2 text-gray-700">add predictive auto-scaling</li>
                <li className="mb-2 text-gray-700">optimize for geographic distribution</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900">the bottom line</h2>

              <p className="mb-4 text-gray-700 leading-relaxed">scaling AI systems is fundamentally different from scaling traditional web applications. the techniques that work for REST APIs don't necessarily work for AI workloads.</p>

              <p className="mb-4 text-gray-700 leading-relaxed">but here's the thing: once you get it right, AI systems can scale more efficiently than traditional systems. the key is understanding the unique characteristics of AI workloads and optimizing specifically for them.</p>

              <p className="mb-4 text-gray-700 leading-relaxed">start with measurement, focus on the biggest bottlenecks first, and don't be afraid to rethink fundamental assumptions about how systems should work.</p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900">when to call for help</h2>

              <p className="mb-4 text-gray-700 leading-relaxed">honestly? scaling AI systems is hard. really hard. consider getting expert help if:</p>

              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700">your infrastructure costs are growing faster than your user base</li>
                <li className="mb-2 text-gray-700">response times are becoming unpredictable</li>
                <li className="mb-2 text-gray-700">you're spending more time on infrastructure than product features</li>
                <li className="mb-2 text-gray-700">your team lacks experience with high-scale distributed systems</li>
              </ul>

              <p className="mb-4 text-gray-700 leading-relaxed">the cost of getting scaling wrong far exceeds the cost of getting expert help.</p>

              <hr className="my-8 border-gray-300" />

              <p className="mb-4 text-gray-700 leading-relaxed"><strong>scaling AI systems in your organization?</strong></p>

              <p className="mb-4 text-gray-700 leading-relaxed">i'd love to hear about your challenges and what techniques you've found effective. every system is different, and there's always more to learn from other practitioners.</p>

            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-16 p-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                AR
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Aankit Roy</h3>
                <p className="text-gray-600 mb-4">
                  AI Strategy & Engineering Leadership consultant with hands-on experience scaling AI systems 
                  from thousands to millions of requests. Former engineering leader at Writesonic and other high-growth AI companies.
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
            <h3 className="text-2xl font-bold mb-4">Need Help Scaling Your AI Systems?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              I help organizations optimize AI infrastructure, reduce costs, and scale systems efficiently. 
              Let's discuss your specific scaling challenges and performance optimization needs.
            </p>
            <a
              href="https://app.cal.com/aankit/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Schedule a Scaling Consultation
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
              <Link href="/" className="text-xl font-bold text-gray-900">Aankit Roy</Link>
              <p className="mt-4 text-gray-600">AI Strategy & Engineering Leadership</p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-gray-900">Navigation</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/about" className="hover:text-purple-600">About</Link></li>
                <li><Link href="/services" className="hover:text-purple-600">Services</Link></li>
                <li><Link href="/blog" className="hover:text-purple-600">Blog</Link></li>
                <li><Link href="/testimonials" className="hover:text-purple-600">Testimonials</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-gray-900">Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>AI Strategy & Implementation</li>
                <li>Engineering Leadership</li>
                <li>System Architecture</li>
                <li>Technical Consulting</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-gray-900">Connect</h3>
              <ul className="space-y-2 text-gray-600">
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

export default ScalingAISystemsPage;
