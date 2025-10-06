'use client';
import React from 'react';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import Link from 'next/link';
import { Header } from '../../components/Header';

const BlogPage = () => {
  // Sample blog posts data - in a real app, this would come from a CMS or API
  const blogPosts = [
    {
      id: 'agentic-design-patterns-complete-guide',
      title: 'agentic design patterns: the complete guide to building agents that actually work',
      excerpt: 'understanding reflection, planning, tool use, multi-agent orchestration, and memory-augmented patterns through real implementations. includes orchestration design framework and pattern selection framework.',
      content: `# agentic design patterns: the complete guide to building agents that actually work

*after building agents for two years, i've learned that success isn't about picking the right framework—it's about understanding the core design patterns and knowing when to use each one*

last month, i watched a team spend three weeks building an agent that could have been built in three days. why? they kept throwing tools at the problem instead of stepping back to understand the underlying design pattern they actually needed.

this post breaks down the five core agentic design patterns: reflection, planning, tool use, multi-agent coordination, and memory-augmented systems. includes comprehensive orchestration design framework (sequential, parallel, hierarchical, network) and pattern selection framework for choosing the right pattern based on task characteristics.

covers ReAct vs plan-and-execute, when to use multi-agent orchestration (and when not to), tool design principles, memory types and retrieval strategies, and how to combine patterns effectively for production systems.

*This is a 25-minute deep-dive into agentic design patterns based on building dozens of production agent systems.*

---

*Need help choosing the right patterns for your agent system? [Schedule a consultation](https://cal.com/aankit/explore-synergies) to discuss your architecture decisions.*`,
      author: 'Aankit Roy',
      date: '2025-10-06',
      readTime: '25 min read',
      tags: ['Agentic Design Patterns', 'AI Agents', 'Agent Architecture', 'ReAct', 'Multi-Agent Systems', 'Agent Memory'],
      featured: true
    },
    {
      id: 'context-engineering-agents-practical-guide',
      title: 'context engineering for agents: the practical guide nobody writes',
      excerpt: 'understanding the four strategies—write, select, compress, and isolate—through real examples from Claude Code, ChatGPT, Cursor, and production research systems',
      content: `# context engineering for agents: the practical guide nobody writes

the LangChain blog on context engineering lays out four core strategies: write, select, compress, and isolate. these are the right categories. but understanding the nuances of when and how to apply them makes the difference between agents that work and agents that don't scale.

this post digs deeper into the practical implications of each strategy, based on what we can learn from production systems like Claude Code, ChatGPT, Cursor, and Windsurf, as well as research from Anthropic, Cognition, and others building at the frontier.

key insights include the 15x token multiplier in multi-agent systems, how Claude Code implements auto-compaction, what Windsurf learned about RAG for code agents, and practical approaches to memory systems across ChatGPT, Cursor, and other production agents.

*This is a 16-minute deep-dive into context engineering based on real production systems and research.*

---

*Working on production agent systems? I help companies design agent architectures. [Schedule a consultation](https://cal.com/aankit/explore-synergies) to discuss your challenges.*`,
      author: 'Aankit Roy',
      date: '2025-10-02',
      readTime: '16 min read',
      tags: ['Context Engineering', 'AI Agents', 'Production AI', 'Agent Memory', 'Multi-Agent Systems'],
      featured: true
    },
    {
      id: 'context-engineering-ai-agents-guide',
      title: 'context engineering for ai agents (or: why your agent keeps forgetting things)',
      excerpt: 'after debugging hundreds of "why did my agent do that?" moments, i realized most failures come down to bad context management... here\'s what actually works in production',
      content: `# context engineering for ai agents

*last month, a client's agent kept hallucinating customer information. same question, different answers every time. the model was fine... the context was a mess*

here's something nobody tells you when you start building ai agents: getting the model to *work* is easy. getting it to work *reliably* is where most projects die.

and in my experience (building agents for 8+ clients over the past two years), the difference between "works in demo" and "works in production" usually comes down to one thing: how you manage context.

*This is the beginning of an 18-minute deep-dive into context engineering, covering token budgets, context rot, compaction strategies, agentic search vs RAG, and practical implementation from production systems.*

---

*Need help with context management in your AI agents? I offer strategic consulting and hands-on implementation support. [Schedule a consultation](https://cal.com/aankit/explore-synergies) to discuss your challenges.*`,
      author: 'Aankit Roy',
      date: '2025-10-01',
      readTime: '18 min read',
      tags: ['Context Engineering', 'AI Agents', 'Production AI', 'Agent Architecture', 'Token Optimization'],
      featured: true
    },
    {
      id: 'claude-agent-sdk-building-agents-that-work',
      title: 'building agents with claude agent sdk (and why my first attempts failed spectacularly)',
      excerpt: 'what i learned building real agents with the claude agent sdk after months of trial, error, and actually reading the anthropic engineering blog... the messy reality of agent development.',
      content: `# building agents with claude agent sdk (and why my first attempts failed spectacularly)

*anthropic just renamed the claude code sdk to the claude agent sdk... and honestly, it makes so much more sense now*

last week, i spent 6 hours debugging an agent that kept writing python scripts to create excel files instead of just... calling the excel API. 
turns out, i completely misunderstood how the claude agent sdk approaches tool selection.

(this is the messy reality nobody talks about in those polished case studies)

*This is the beginning of a 16-minute deep-dive into building production agents with the claude agent sdk, covering the agent loop (gather context → take action → verify work), tool design, subagents, and real deployment lessons from building 8 different agents.*

---

*Need help building production AI agents? I offer strategic consulting and hands-on implementation support. [Schedule a consultation](https://cal.com/aankit/explore-synergies) to discuss your specific use case.*`,
      author: 'Aankit Roy',
      date: '2025-09-30',
      readTime: '16 min read',
      tags: ['AI Agents', 'Claude', 'Agent Development', 'Implementation', 'Claude Agent SDK'],
      featured: true
    },
    {
      id: 'langgraph-state-management-memory-guide',
      title: 'LangGraph State Management and Memory for Advanced AI Agents',
      excerpt: 'Deep dive into building stateful AI agents with persistent memory... because honestly, most "AI agents" out there are just glorified chatbots with no memory whatsoever.',
      content: `# LangGraph State Management and Memory for Advanced AI Agents

*deep dive into building stateful AI agents with persistent memory... because honestly, most "AI agents" out there are just glorified chatbots with no memory whatsoever*

after working with dozens of AI implementations over the past year, i've noticed something frustrating... 
everyone talks about "AI agents" but most are just stateless functions that forget everything between calls.

real agents need memory. they need to remember what happened, learn from interactions, and maintain context across sessions. 
that's where LangGraph comes in (and why i've been using it for client projects lately).

*This is the beginning of a 15-minute deep-dive into state management patterns, memory types, and production deployment strategies for building real AI systems with persistent memory.*

---

*Need help implementing stateful AI agents? I offer strategic consulting and hands-on implementation support. [Schedule a consultation](https://cal.com/aankit/explore-synergies) to discuss your specific requirements.*`,
      author: 'Aankit Roy',
      date: '2025-09-24',
      readTime: '15 min read',
      tags: ['LangGraph', 'AI Agents', 'State Management', 'Memory Systems', 'AI Architecture'],
      featured: true
    },
    {
      id: 'ai-agent-frameworks-comparison',
      title: 'AI Agent Frameworks: The Honest Comparison Nobody Talks About',
      excerpt: 'After building production systems with 8+ frameworks, here\'s what actually works (and what doesn\'t) when choosing between LangChain, LangGraph, CrewAI, AutoGen, and others.',
      content: `# AI Agent Frameworks: The Honest Comparison Nobody Talks About

*so you're trying to pick an AI agent framework... and everyone's telling you something different.*

here's the thing nobody wants to admit: most framework comparisons are either marketing fluff or academic theory. after building production systems with 8+ different frameworks over the past 18 months, i've learned what actually matters.

spoiler alert: it's not what the documentation claims.

## the framework landscape is... messy

let me paint you a picture of what choosing an AI framework feels like right now:

you've got LangChain claiming to be the "everything framework" with 700+ integrations. LangGraph promising "production-ready orchestration." CrewAI talking about "business efficiency." AutoGen showing off "multi-agent conversations." and a dozen others all claiming to be the best.

meanwhile, you're sitting there thinking: *"i just want to build something that works."*

*This is the beginning of a 16-minute deep-dive into the real story behind AI agent frameworks, with specific client examples, cost breakdowns, and honest recommendations based on actual production experience.*

---

*Need help choosing the right framework for your specific use case? I offer strategic consulting and hands-on framework evaluation. [Schedule a consultation](https://cal.com/aankit/explore-synergies) to discuss your requirements.*`,
      author: 'Aankit Roy',
      date: '2025-09-15',
      readTime: '16 min read',
      tags: ['AI Frameworks', 'LangChain', 'LangGraph', 'CrewAI', 'Production Systems'],
      featured: true
    },
    {
      id: 'ai-agents-complete-guide',
      title: 'AI Agents: The Complete Guide to Understanding and Implementing Intelligent Automation',
      excerpt: 'A comprehensive deep-dive into AI agents, their architecture, use cases, and practical implementation strategies based on real-world experience building agent systems at scale.',
      content: `# AI Agents: The Complete Guide to Understanding and Implementing Intelligent Automation

*wait, what exactly are AI agents anyway?*

if you're building with AI right now, you've probably heard the term "AI agents" thrown around everywhere. but here's the thing... most explanations either sound like academic papers or marketing fluff.

after spending the last two years building agent systems that handle millions of interactions (and watching a lot of them fail spectacularly), i want to share what actually works. and more importantly, what doesn't.

## what makes something an "agent" vs just... AI?

let me start with a story that'll make this click.

last month, i was helping a client automate their customer support. their first instinct? "let's just throw ChatGPT at it and call it a day."

here's what happened:
- customer asks: "i need to cancel my subscription and get a refund for last month"
- regular AI: "i can help you understand the cancellation process..."
- AI agent: *actually cancels the subscription, processes the refund, sends confirmation email, updates the customer database, and follows up with a satisfaction survey*

see the difference? 

**traditional AI = conversation**  
**AI agents = conversation + action**

*This is just the beginning of an 18-minute deep-dive into agent architecture, implementation strategies, and real-world results from building systems that handle millions of interactions.*

---

*Need help implementing AI agents in your organization? I offer strategic consulting and hands-on implementation support. [Schedule a consultation](https://cal.com/aankit/explore-synergies) to discuss your specific needs.*`,
      author: 'Aankit Roy',
      date: '2025-09-15',
      readTime: '18 min read',
      tags: ['AI Agents', 'Automation', 'System Architecture', 'Implementation Guide'],
      featured: true
    },
    {
      id: 'ai-strategy-implementation-guide',
      title: 'The Complete Guide to AI Strategy Implementation',
      excerpt: 'Learn how to successfully implement AI strategies in your organization with practical frameworks and real-world examples from scaling AI at Writesonic.',
      content: `# The Complete Guide to AI Strategy Implementation

Implementing AI in your organization isn't just about adopting the latest technology—it's about creating a strategic framework that delivers measurable business value. After scaling AI systems at companies like Writesonic and Khabri, I've learned that successful AI implementation follows specific patterns.

## 1. Start with Business Problems, Not Technology

The biggest mistake I see organizations make is starting with the technology rather than the problem. Before considering any AI solution, ask yourself:

- What specific business problem are we trying to solve?
- How do we currently solve this problem?
- What would success look like?
- How will we measure ROI?

At Writesonic, we didn't start by saying "let's use GPT." We started by identifying that our users needed faster, more accurate content generation. The AI was the solution, not the starting point.

## 2. Build Your AI Foundation

Before implementing any AI solution, you need the right foundation:

### Data Infrastructure
- Clean, accessible data pipelines
- Proper data governance and quality controls
- Scalable storage solutions
- Real-time data processing capabilities

### Team Capabilities
- AI-literate leadership team
- Technical talent with ML/AI experience
- Cross-functional collaboration between business and tech teams
- Change management capabilities

### Technology Stack
- Cloud infrastructure that can scale
- MLOps pipelines for model deployment and monitoring
- A/B testing frameworks
- Robust monitoring and alerting systems

## 3. The Implementation Framework

I use a four-phase approach for AI implementation:

### Phase 1: Pilot (Weeks 1-4)
- Select a small, well-defined use case
- Build a minimum viable AI solution
- Test with a limited user group
- Measure initial results and gather feedback

### Phase 2: Validate (Weeks 5-12)
- Expand to a broader user base
- Implement proper monitoring and feedback loops
- Refine the solution based on real usage patterns
- Establish clear success metrics

### Phase 3: Scale (Months 3-6)
- Roll out to full production
- Implement automated retraining pipelines
- Build comprehensive monitoring dashboards
- Establish operational procedures

### Phase 4: Optimize (Ongoing)
- Continuous model improvement
- Feature expansion based on user feedback
- Performance optimization
- Cost optimization

## 4. Common Pitfalls and How to Avoid Them

### Pitfall 1: Overengineering from the Start
Start simple. A basic solution that works is better than a complex solution that doesn't ship.

### Pitfall 2: Ignoring Data Quality
AI is only as good as your data. Invest in data quality from day one.

### Pitfall 3: Lack of Human Oversight
AI should augment human decision-making, not replace it entirely. Always maintain human oversight.

### Pitfall 4: Not Planning for Scale
Design your systems to handle 10x growth from the beginning. It's easier than rebuilding later.

## 5. Measuring Success

Successful AI implementation requires clear metrics:

### Business Metrics
- Revenue impact
- Cost savings
- User satisfaction scores
- Time to value

### Technical Metrics
- Model accuracy and performance
- System latency and uptime
- Data quality scores
- Model drift detection

### Operational Metrics
- Time to deploy new models
- Incident response times
- Team productivity improvements
- User adoption rates

## Real-World Example: Scaling AI at Writesonic

When I joined Writesonic, we were processing thousands of AI requests daily. By the time I left, we were handling millions. Here's how we did it:

1. **Started with User Problems**: We identified that users wanted faster content generation with better quality.

2. **Built Incrementally**: We started with basic GPT integration and gradually added custom models, fine-tuning, and advanced features.

3. **Invested in Infrastructure**: We built robust caching, load balancing, and monitoring systems that could handle massive scale.

4. **Optimized Continuously**: We reduced infrastructure costs by 73% while improving performance through careful optimization and caching strategies.

5. **Maintained Quality**: We implemented comprehensive quality assurance processes to ensure consistent output quality at scale.

## Next Steps

Ready to implement AI in your organization? Here's what I recommend:

1. **Assess Your Current State**: Evaluate your data, team, and technology readiness
2. **Identify High-Impact Use Cases**: Look for problems where AI can deliver clear ROI
3. **Start Small**: Begin with a pilot project to prove value
4. **Build Your Foundation**: Invest in the infrastructure and capabilities you'll need to scale
5. **Measure and Iterate**: Continuously improve based on real-world results

Remember, successful AI implementation is a marathon, not a sprint. Focus on building sustainable, scalable solutions that deliver real business value.

---

*Need help implementing AI in your organization? I offer strategic consulting and hands-on implementation support. [Schedule a consultation](https://cal.com/aankit/explore-synergies) to discuss your specific needs.*`,
      author: 'Aankit Roy',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['AI Strategy', 'Implementation', 'Leadership'],
      featured: true
    },
    {
      id: 'scaling-ai-systems-lessons-learned',
      title: 'Scaling AI Systems: Lessons from Processing Millions of Requests',
      excerpt: 'Key insights and practical strategies for scaling AI systems from thousands to millions of requests daily, with real examples from Writesonic and cost optimization techniques.',
      content: `# Scaling AI Systems: Lessons from Processing Millions of Requests

Scaling AI systems from handling thousands to millions of requests daily taught me invaluable lessons about performance, reliability, and cost optimization. Here are the key insights from my experience at Writesonic.

## The Challenge of Scale

When AI systems grow, everything changes:
- Response times become critical
- Infrastructure costs can spiral out of control
- Model performance may degrade
- System reliability becomes paramount

## Key Strategies for Scaling

### 1. Intelligent Caching
Implement multi-layer caching strategies to reduce AI model calls and improve response times.

### 2. Load Balancing
Distribute requests across multiple model instances to handle peak loads effectively.

### 3. Model Optimization
Fine-tune models for your specific use cases to improve both performance and cost efficiency.

### 4. Infrastructure Monitoring
Implement comprehensive monitoring to catch issues before they impact users.

## Results

Through careful optimization:
- Reduced infrastructure costs by 73%
- Improved average response time by 60%
- Achieved 99.9% uptime
- Scaled from thousands to millions of daily requests

*Want to learn more about scaling AI systems? [Get in touch](mailto:aankitroy1990@gmail.com) for detailed insights and implementation strategies.*`,
      author: 'Aankit Roy',
      date: '2024-01-10',
      readTime: '6 min read',
      tags: ['Scaling', 'Performance', 'Infrastructure'],
      featured: false
    },
    {
      id: 'ai-agents-future-of-business-automation',
      title: 'AI Agents: The Future of Business Automation',
      excerpt: 'Explore how AI agents are transforming business processes and why they represent the next evolution in automation technology.',
      content: `# AI Agents: The Future of Business Automation

AI agents represent a paradigm shift in how we think about business automation. Unlike traditional automation that follows pre-programmed rules, AI agents can reason, adapt, and make decisions in complex scenarios.

## What Makes AI Agents Different

Traditional automation is like a player piano—it can only play the songs it was programmed with. AI agents are like jazz musicians—they can improvise, adapt to the situation, and create something new while still following the overall structure.

## Key Capabilities of Modern AI Agents

### 1. Contextual Understanding
AI agents can understand context and nuance in ways that traditional automation cannot.

### 2. Dynamic Decision Making
They can make decisions based on changing conditions and multiple variables.

### 3. Learning and Adaptation
AI agents improve over time based on interactions and feedback.

### 4. Multi-modal Interaction
They can work with text, images, voice, and other data types seamlessly.

## Real-World Applications

I've helped organizations implement AI agents for:
- Customer service automation
- Content generation and management
- Data analysis and reporting
- Process optimization
- Decision support systems

## The ROI of AI Agents

Organizations implementing AI agents typically see:
- 40-60% reduction in manual tasks
- Improved response times
- Better consistency in outputs
- Enhanced customer satisfaction
- Significant cost savings

*Ready to explore AI agents for your business? [Schedule a consultation](https://cal.com/aankit/explore-synergies) to discuss your specific use cases.*`,
      author: 'Aankit Roy',
      date: '2025-09-15',
      readTime: '14 min read',
      tags: ['AI Agents', 'Business Automation', 'Digital Transformation', 'Future of Work'],
      featured: false
    },
    {
      id: 'building-technical-teams-that-scale',
      title: 'Building Technical Teams That Scale',
      excerpt: 'Essential strategies for building and leading technical teams that can grow with your business, based on experience scaling teams at multiple startups from 3 to 50+ engineers.',
      content: `# Building Technical Teams That Scale

Building a technical team that can scale with your business is one of the most critical challenges for any growing company. Having led engineering teams through multiple scaling phases, here are the key principles I've learned.

## The Foundation: Hiring for Growth

### Look Beyond Current Skills
Hire people who can grow into roles, not just fill current gaps. Look for:
- Learning agility
- Problem-solving mindset
- Cultural fit
- Growth potential

### Build Diverse Teams
Diverse teams make better decisions and build better products. Prioritize:
- Technical diversity (different backgrounds and experiences)
- Cognitive diversity (different thinking styles)
- Demographic diversity

## Creating Scalable Processes

### Documentation First
Everything should be documented:
- Technical decisions and rationale
- Process workflows
- System architectures
- Team procedures

### Automated Testing and Deployment
Invest in automation early:
- Comprehensive test suites
- CI/CD pipelines
- Infrastructure as code
- Monitoring and alerting

## Leadership Principles for Scale

### 1. Delegate Effectively
As teams grow, you must shift from doing to enabling others to do.

### 2. Maintain Technical Excellence
Never compromise on code quality or technical standards.

### 3. Foster Innovation
Create space for experimentation and learning.

### 4. Communicate Vision
Keep everyone aligned on goals and priorities.

## Common Scaling Challenges

### Challenge 1: Maintaining Culture
Solution: Be intentional about culture from day one.

### Challenge 2: Knowledge Silos
Solution: Implement knowledge sharing practices and cross-training.

### Challenge 3: Technical Debt
Solution: Allocate time for refactoring and improvements.

### Challenge 4: Communication Overhead
Solution: Implement clear communication protocols and tools.

## Measuring Team Success

Track both technical and human metrics:
- Code quality metrics
- Deployment frequency
- Time to recovery
- Team satisfaction
- Learning and development

*Looking to scale your technical team? [Let's discuss](mailto:aankitroy1990@gmail.com) strategies specific to your situation.*`,
      author: 'Aankit Roy',
      date: '2023-12-28',
      readTime: '7 min read',
      tags: ['Leadership', 'Team Building', 'Scaling'],
      featured: false
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header currentPage="blog" />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Insights on 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> AI Strategy </span> 
            & 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Engineering Leadership</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Practical insights from scaling AI systems, building technical teams, and leading engineering organizations
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">Featured Posts</h2>
          <div className="max-w-4xl mx-auto">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 mb-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Recent Posts Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">Recent Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {recentPosts.map((post) => (
            <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="mr-4">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                <Clock className="w-4 h-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <Link 
                href={`/blog/${post.id}`}
                className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold text-sm transition-colors"
              >
                Read More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get the latest insights on AI strategy, engineering leadership, and technical innovation delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <a 
              href="https://aankitroy30.substack.com/subscribe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition inline-flex items-center gap-2"
            >
              📧 Subscribe to Newsletter
            </a>
            <p className="text-purple-100 text-sm mt-3">
              Powered by <span className="font-semibold">Substack</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
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

export default BlogPage;
