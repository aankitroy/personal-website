'use client';
import React from 'react';
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Mail, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Header } from '../../../components/Header';
import { ShareButtons } from '../../../components/ShareButtons';

const AIAgentsFutureAutomationPage = () => {
  const post = {
    id: 'ai-agents-future-of-business-automation',
    title: 'AI Agents: The Future of Business Automation',
    excerpt: 'Explore how AI agents are transforming business processes and why they represent the next evolution in automation technology.',
    author: 'Aankit Roy',
    date: '2025-09-15',
    readTime: '14 min read',
    tags: ['AI Agents', 'Business Automation', 'Digital Transformation', 'Future of Work'],
    featured: false
  };

  const shareUrl = `https://aankitroy.com/blog/ai-agents-future-of-business-automation`;
  const shareText = `${post.title} by Aankit Roy`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <Header currentPage="blog" />

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
                <span key={tag} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* Share Buttons */}
            <ShareButtons shareUrl={shareUrl} shareText={shareText} />
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <div className="text-gray-700 dark:text-gray-200 leading-relaxed">
              
              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed italic">remember when "automation" meant replacing humans with robots on assembly lines?</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">those days are over. we're now in the era of AI agents - and they're nothing like the automation your grandfather knew.</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">after building AI agent systems for companies ranging from 50-person startups to Fortune 500 enterprises, i've seen firsthand how these systems are reshaping entire industries. but here's what nobody's talking about: this isn't just about efficiency gains anymore.</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">it's about creating entirely new ways of working.</p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-gray-100">why traditional automation is hitting a wall</h2>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">let me tell you about a client i worked with last year. they'd spent $2M building a traditional automation system for their customer service. worked great... until customers started asking questions the system wasn't programmed to handle.</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">sound familiar?</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">traditional automation is like a player piano - it can only play the songs it was programmed with. beautiful execution, but zero creativity or adaptation.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">the limitations are real</h3>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed"><strong>traditional automation:</strong></p>
              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700 dark:text-gray-200">follows pre-written rules and scripts</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">breaks when encountering unexpected scenarios</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">requires manual updates for every new situation</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">can't learn from experience or adapt over time</li>
              </ul>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">the result? companies end up with automation that works perfectly... 80% of the time. and that other 20%? it creates more work than it saves.</p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-gray-100">enter AI agents: automation that thinks</h2>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">AI agents are fundamentally different. they're like jazz musicians - they can improvise, adapt to the situation, and create something new while still following the overall structure.</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">here's what makes them special:</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">contextual understanding</h3>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">instead of following rigid if-then rules, AI agents understand context and nuance.</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">example: a traditional system might see "cancel my order" and always follow the same cancellation flow. an AI agent can understand that "cancel my order, but keep the warranty" requires a different approach entirely.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">dynamic decision making</h3>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">AI agents can weigh multiple factors and make decisions in real-time.</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">i watched one agent handle a customer complaint by:</p>
              <ol className="mb-4 ml-4 list-decimal">
                <li className="mb-2 text-gray-700 dark:text-gray-200">analyzing the customer's purchase history</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">checking their support interaction patterns</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">evaluating the severity of the issue</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">deciding on the appropriate compensation level</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">executing the solution automatically</li>
              </ol>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">all in under 30 seconds. no human intervention needed.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">continuous learning</h3>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">this is where it gets really interesting. AI agents improve over time based on interactions and feedback.</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">one client's agent started with 60% accuracy in handling support tickets. six months later? 94% accuracy. it learned from every interaction, every mistake, every success.</p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-gray-100">real-world transformation stories</h2>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">let me share some examples of what's happening right now:</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">financial services: beyond rule-based compliance</h3>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">worked with a mid-size bank that was drowning in loan application processing. traditional automation could handle straightforward applications, but anything with complexity required human review.</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed"><strong>the challenge:</strong> 40% of applications required manual review, creating bottlenecks and delays</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed"><strong>the AI agent solution:</strong></p>
              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700 dark:text-gray-200">analyzes financial documents using computer vision</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">cross-references data across multiple sources</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">identifies potential risks and inconsistencies</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">makes approval recommendations with confidence scores</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">learns from loan performance data to improve future decisions</li>
              </ul>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed"><strong>results after 8 months:</strong></p>
              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700 dark:text-gray-200">manual review rate dropped to 12%</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">average processing time: 2.3 days (down from 12 days)</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">loan default rate improved by 18% (better risk assessment)</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">customer satisfaction up 34%</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">healthcare: intelligent patient coordination</h3>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">healthcare is notoriously complex - every patient is different, every case has nuances. perfect for AI agents.</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">built a system for a regional hospital network that coordinates patient care across multiple departments.</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed"><strong>what the agent does:</strong></p>
              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700 dark:text-gray-200">monitors patient conditions and test results in real-time</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">identifies when care coordination is needed</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">automatically schedules follow-up appointments</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">ensures all relevant departments have necessary information</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">flags potential complications before they become critical</li>
              </ul>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed"><strong>the impact:</strong> 28% reduction in readmission rates, 40% improvement in care coordination efficiency</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">manufacturing: predictive maintenance revolution</h3>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">traditional maintenance is either reactive (fix when broken) or scheduled (replace at intervals). both approaches waste money.</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">AI agents are changing this completely.</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed"><strong>how it works:</strong></p>
              <ul className="mb-4 ml-4">
                <li className="mb-2 text-gray-700 dark:text-gray-200">continuously monitors equipment sensor data</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">learns normal vs. abnormal operating patterns</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">predicts failures weeks or months in advance</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">automatically orders replacement parts</li>
                <li className="mb-2 text-gray-700 dark:text-gray-200">schedules maintenance during optimal downtime windows</li>
              </ul>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed"><strong>client results:</strong> 67% reduction in unplanned downtime, $2.3M annual savings in maintenance costs</p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-gray-100">the business transformation patterns i'm seeing</h2>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">after implementing AI agents across dozens of organizations, certain patterns emerge:</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">from cost centers to profit drivers</h3>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">traditional automation was about cost reduction. AI agents are becoming revenue generators.</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">example: a retail client's AI agent doesn't just handle returns - it identifies upsell opportunities, suggests complementary products, and personalizes offers based on customer behavior. what used to be a cost center now generates $400k+ monthly revenue.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">from reactive to proactive operations</h3>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">instead of waiting for problems to occur, AI agents anticipate and prevent them.</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">one client's agent monitors customer behavior patterns and proactively reaches out when it detects signs of potential churn. result: 45% reduction in customer churn rate.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">from standardized to personalized experiences</h3>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">AI agents can deliver personalized experiences at scale - something impossible with traditional automation.</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">every customer interaction is tailored based on their history, preferences, and current context. it's like having a personal assistant for every customer.</p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-gray-100">the challenges nobody talks about</h2>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">but let's be honest... it's not all smooth sailing. here are the real challenges i've encountered:</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">the "black box" problem</h3>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">traditional automation is transparent - you can see exactly why it made a decision. AI agents are more opaque.</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">this creates challenges in regulated industries where you need to explain every decision. we've had to build extensive logging and explanation systems to address this.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">data quality dependencies</h3>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">AI agents are only as good as the data they're trained on. poor data quality leads to poor decisions.</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">spent 3 months with one client just cleaning and organizing their data before we could even start building the agent. not glamorous, but absolutely necessary.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">change management complexity</h3>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">employees are often skeptical of AI agents. unlike traditional automation that clearly replaces manual tasks, AI agents work alongside humans in more subtle ways.</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">successful implementations require extensive training and gradual rollouts to build trust.</p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-gray-100">what's coming next</h2>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">based on what i'm seeing in early-stage implementations:</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">multi-modal agents</h3>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">agents that can work with text, voice, images, and video seamlessly. imagine a customer service agent that can watch a video of a product problem and immediately understand the issue.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">agent-to-agent collaboration</h3>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">systems where multiple specialized agents work together automatically. one agent handles initial customer contact, another processes the request, a third follows up - all without human coordination.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">industry-specific intelligence</h3>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">agents with deep domain expertise in specific industries. a healthcare agent that understands medical terminology and regulations, a financial agent that knows banking compliance requirements.</p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-gray-100">how to start thinking about AI agents</h2>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">if you're considering AI agents for your business, here's my advice:</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">start with high-frequency, variable tasks</h3>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">look for processes that happen often but require different approaches each time. customer service, content creation, data analysis - these are perfect for AI agents.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">focus on augmentation, not replacement</h3>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">the most successful implementations use AI agents to enhance human capabilities, not replace them entirely. humans handle complex decisions and edge cases, agents handle routine but variable work.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">invest in data infrastructure first</h3>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">you can't have intelligent agents without good data. spend time organizing, cleaning, and structuring your data before building agents.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900 dark:text-gray-100">plan for continuous improvement</h3>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">unlike traditional automation that's "set and forget," AI agents require ongoing monitoring, training, and refinement. budget for this from the beginning.</p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-gray-100">the bigger picture</h2>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">here's what i think is really happening: we're moving from an era of digital tools to an era of digital colleagues.</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">AI agents aren't just automating tasks - they're becoming team members that can think, learn, and adapt. they're not replacing human intelligence; they're augmenting it.</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">the companies that understand this distinction - that see AI agents as intelligent collaborators rather than fancy automation - are the ones that will thrive in the next decade.</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">the future of business automation isn't about replacing humans with machines. it's about creating human-AI teams that are more capable, more creative, and more effective than either could be alone.</p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">and honestly? that future is already here. the question is whether you're ready to embrace it.</p>

              <hr className="my-8 border-gray-300" />

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed"><strong>thinking about AI agents for your business?</strong></p>

              <p className="mb-4 text-gray-700 dark:text-gray-200 leading-relaxed">i'd love to hear what challenges you're facing and how you're thinking about automation in your industry. every business is different, and the best AI agent implementations are the ones tailored to specific needs and contexts.</p>

            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-16 p-8 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl border border-purple-200 dark:border-purple-700/50">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                AR
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Aankit Roy</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  AI Strategy & Engineering Leadership consultant who has implemented AI agent systems across industries from healthcare to finance. 
                  Specialized in helping organizations transition from traditional automation to intelligent agent-based workflows.
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
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business with AI Agents?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              I help organizations design and implement AI agent systems that deliver real business value. 
              Let's discuss how intelligent automation can transform your specific workflows and processes.
            </p>
            <a
              href="https://cal.com/aankit/explore-synergies"
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
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-20">
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

export default AIAgentsFutureAutomationPage;
