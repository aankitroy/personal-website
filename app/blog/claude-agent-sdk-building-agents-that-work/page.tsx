'use client';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Header } from '../../../components/Header';
import { ShareButtons } from '../../../components/ShareButtons';

export default function ClaudeAgentSDKPage() {
  const post = {
    id: 'claude-agent-sdk-building-agents-that-work',
    title: 'building agents with claude agent sdk (and why my first attempts failed spectacularly)',
    excerpt: 'what i learned building real agents with the claude agent sdk after months of trial, error, and actually reading the anthropic engineering blog',
    author: 'Aankit Roy',
    date: '2025-09-30',
    readTime: '16 min read',
    tags: ['AI Agents', 'Claude', 'Agent Development', 'Implementation'],
    featured: true
  };

  const shareUrl = `https://aankitroy.com/blog/claude-agent-sdk-building-agents-that-work`;
  const shareText = `${post.title} by Aankit Roy`;

  // Structured data for SEO
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": "https://aankitroy.com/aankitroy.png",
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": "Aankit Roy",
      "url": "https://aankitroy.com",
      "jobTitle": "AI Strategy & Engineering Leadership Consultant",
      "sameAs": [
        "https://www.linkedin.com/in/aankit-roy-20515b35/",
        "https://x.com/AankitRoy",
        "https://github.com/aankitroy"
      ]
    },
    "publisher": {
      "@type": "Person",
      "name": "Aankit Roy",
      "url": "https://aankitroy.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": shareUrl
    },
    "keywords": post.tags.join(', '),
    "articleSection": "AI Agents",
    "inLanguage": "en-US",
    "wordCount": "3800",
    "timeRequired": "PT16M",
    "about": [
      {
        "@type": "Thing",
        "name": "Claude Agent SDK"
      },
      {
        "@type": "Thing",
        "name": "AI Agents"
      },
      {
        "@type": "Thing",
        "name": "Software Development"
      }
    ]
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://aankitroy.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://aankitroy.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": shareUrl
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      
      <Header currentPage="blog" />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to Blog */}
        <Link href="/blog" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-600 dark:text-gray-300 mb-6">
            <div className="flex items-center mr-6">
              <User className="w-4 h-4 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center mr-6">
              <Calendar className="w-4 h-4 mr-2" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
            </div>
            <div className="flex items-center">
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

          <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed italic mt-6">
            anthropic just renamed the claude code sdk to the claude agent sdk... and honestly, it makes so much more sense now
          </p>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none dark:prose-invert">
          <p>
            last week, i spent 6 hours debugging an agent that kept writing python scripts to create excel files instead of just... calling the excel API. 
            turns out, i completely misunderstood how the claude agent sdk approaches tool selection.
          </p>

          <p>
            (this is the messy reality nobody talks about in those polished case studies)
          </p>

          <h2>wait... claude code is now for more than coding?</h2>

          <p>
            here's what clicked for me after reading the anthropic engineering blog...
          </p>

          <p>
            anthropic built claude code originally as an internal tool for their developers. 
            gave it access to terminals, file systems, the ability to run commands... basically everything a developer needs to write and debug code.
          </p>

          <p>
            but then something interesting happened.
          </p>

          <p>
            people at anthropic started using it for deep research. video creation. note-taking. 
            all sorts of non-coding work. because when you give an AI agent access to a computer... 
            it can do way more than just write code.
          </p>

          <p className="italic">
            (which is why they renamed it from "claude code sdk" to "claude agent sdk" - reflects what it actually does)
          </p>

          <p>
            if you've been following my writing, you know i've covered{' '}
            <Link href="/blog/ai-agents-complete-guide" className="text-purple-600 hover:text-purple-700 underline">
              ai agents extensively
            </Link>
            {' '}and{' '}
            <Link href="/blog/ai-agent-frameworks-comparison" className="text-purple-600 hover:text-purple-700 underline">
              compared different frameworks
            </Link>
            . the claude agent sdk sits in a unique position...
          </p>

          <h2>the core insight that changed how i build agents</h2>

          <p>
            anthropic's key design principle: <strong>claude needs the same tools that people use every day.</strong>
          </p>

          <p>
            not some abstract API wrapper or sanitized interface. the actual terminal. actual file system. 
            the messy, powerful tools we use.
          </p>

          <p>
            this is fundamentally different from how i was building agents before... 
            and it explains why my early attempts felt so constrained.
          </p>

          <h2>the agent loop (that actually works in production)</h2>

          <p>
            after working with the sdk for the past few months, i've noticed all successful implementations follow the same pattern:
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
            <p className="font-mono text-sm mb-0">
              gather context → take action → verify work → repeat
            </p>
          </div>

          <p>
            sounds simple, right? but each stage has specific considerations that'll make or break your agent.
          </p>

          <h3>gathering context (the right way)</h3>

          <p>
            most agent failures happen here. they either pull in too much context (hitting token limits) 
            or too little (making uninformed decisions).
          </p>

          <p>
            here's what i've learned building 8 different agents with the sdk:
          </p>

          <h4>agentic search &gt; semantic search (usually)</h4>

          <p>
            controversial take... but agentic search (where claude uses bash tools like grep, tail, find) 
            is more reliable than semantic search for most use cases.
          </p>

          <p>
            why? because:
          </p>

          <ul>
            <li>it's transparent - you can see exactly what claude searched for</li>
            <li>no chunking artifacts or embedding drift</li>
            <li>works with any file type without special handling</li>
            <li>easier to debug when things go wrong (and they will)</li>
          </ul>

          <p>
            i only add semantic search when i need faster results across massive datasets. start simple.
          </p>

          <h4>subagents for parallelization</h4>

          <p>
            this feature is underrated...
          </p>

          <p>
            working on a research agent last month, i needed to analyze 47 different customer feedback documents. 
            sequential processing would've taken forever and burned through context.
          </p>

          <p>
            solution: spin up multiple subagents in parallel, each analyzing 5-6 documents, 
            returning only the key insights to the main agent.
          </p>

          <p>
            result: 6.7x faster processing, used 40% less context, maintained accuracy.
          </p>

          <p className="italic">
            (the sdk handles this automatically with isolated context windows for each subagent)
          </p>

          <h4>compaction for long-running agents</h4>

          <p>
            if your agent runs for more than a few interactions, you need compaction. 
            the sdk automatically summarizes previous messages when approaching context limits.
          </p>

          <p>
            learned this the hard way when an email management agent kept failing after ~20 interactions. 
            added compaction, problem solved.
          </p>

          <h2>taking action (where most tutorials stop)</h2>

          <p>
            here's where it gets interesting... the sdk gives you several ways for agents to take action, 
            and choosing the right one matters more than i initially thought.
          </p>

          <h3>tools = primary actions</h3>

          <p>
            tools are prominent in claude's context window. which means claude will consider them first when deciding how to complete a task.
          </p>

          <p>
            so your tool design directly impacts agent behavior.
          </p>

          <p>
            building a customer service agent recently, i made the mistake of creating 23 different tools 
            (fetchUserData, getUserPreferences, checkOrderStatus, getShippingInfo, etc...)
          </p>

          <p>
            claude got confused. kept choosing wrong tools. high latency from analyzing all options.
          </p>

          <p>
            refactored to 5 core tools with parameters. much better.
          </p>

          <p className="italic">
            lesson: fewer, well-designed tools &gt; many specialized tools
          </p>

          <h3>bash for flexible operations</h3>

          <p>
            the sdk's bash access is incredibly powerful... and slightly terrifying.
          </p>

          <p>
            example from last week: user wanted an agent that could process PDF attachments in emails.
          </p>

          <p>
            instead of building a custom pdf-to-text tool, claude just wrote a bash script:
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
            <pre className="text-sm overflow-x-auto">
{`# claude's approach (works first try)
pdftotext attachment.pdf - | grep "invoice" | awk '{print $3}'`}
            </pre>
          </div>

          <p>
            simple. composable. exactly how a developer would solve it.
          </p>

          <h3>code generation for complex operations</h3>

          <p>
            anthropic's file creation feature in claude.ai? entirely powered by code generation.
          </p>

          <p>
            claude writes python scripts to create excel spreadsheets, powerpoint presentations, word documents. 
            ensures consistent formatting and complex functionality.
          </p>

          <p>
            i've been using this pattern for data transformation tasks. 
            instead of building rigid data pipelines, let claude write the transformation code based on actual requirements.
          </p>

          <p>
            result: more flexible, easier to debug (it's just code), and surprisingly reliable.
          </p>

          <h3>mcps for external services</h3>

          <p>
            the model context protocol (mcp) handles authentication and api calls automatically. 
            huge time saver.
          </p>

          <p>
            building an internal tool agent that needed slack, asana, and google drive access. 
            without mcp? would've spent days on oauth flows and api integration.
          </p>

          <p>
            with mcp? connected all three services in an afternoon.
          </p>

          <p className="italic">
            (the mcp ecosystem is growing fast - check available servers before building custom integrations)
          </p>

          <h2>verifying work (the critical piece everyone skips)</h2>

          <p>
            this is what separates toy demos from production agents.
          </p>

          <p>
            agents that can check and improve their own output are fundamentally more reliable. 
            they catch mistakes before they compound.
          </p>

          <h3>defined rules &gt; vague guidelines</h3>

          <p>
            code linting is the perfect example of rules-based feedback.
          </p>

          <p>
            working on a typescript generation agent, i originally just had claude "check if the code looks good." 
            useless. too vague.
          </p>

          <p>
            switched to proper linting: typescript compiler errors, eslint warnings, specific rule violations.
          </p>

          <p>
            quality improved dramatically. fewer iterations needed.
          </p>

          <p>
            same principle applies to non-code work. 
            for an email agent, i defined rules: valid email format, check if recipient exists in history, 
            tone consistency with previous messages.
          </p>

          <p>
            specific rules = specific feedback = better results
          </p>

          <h3>visual feedback for ui/design work</h3>

          <p>
            when building agents that generate visual output (html emails, reports, dashboards), 
            visual feedback is incredibly valuable.
          </p>

          <p>
            example: email formatting agent that generates html emails.
          </p>

          <p>
            i have it screenshot the rendered email and provide that back to claude for verification:
          </p>

          <ul>
            <li>layout correct?</li>
            <li>colors/fonts as intended?</li>
            <li>responsive at different sizes?</li>
            <li>anything look broken?</li>
          </ul>

          <p>
            using playwright mcp server makes this trivial - screenshot, analyze, iterate.
          </p>

          <h3>llm as judge (use sparingly)</h3>

          <p>
            having another llm judge output quality... i'm honestly skeptical of this approach.
          </p>

          <p>
            it's slow, expensive, and not particularly reliable in my testing.
          </p>

          <p>
            but... for highly subjective quality assessments where defined rules don't work, 
            it's sometimes your only option.
          </p>

          <p>
            i used it for tone analysis in an email drafting agent. 
            separate subagent judges if the draft tone matches user's previous messages.
          </p>

          <p>
            adds 2-3 seconds latency. worth it for this specific use case. 
            not worth it for most things.
          </p>

          <h2>what i've learned from production deployments</h2>

          <p>
            after deploying 5 different agents built with the sdk over the past few months:
          </p>

          <h3>start with the agent loop in mind</h3>

          <p>
            before writing any code, map out:
          </p>

          <ul>
            <li>what context does my agent need? (and where does it live?)</li>
            <li>what actions should it take? (tools, bash, code?)</li>
            <li>how will it verify its work? (defined rules, visual feedback?)</li>
          </ul>

          <p>
            this simple framework prevents most design mistakes.
          </p>

          <h3>file system = context engineering</h3>

          <p>
            how you organize files directly impacts agent performance.
          </p>

          <p>
            for an email agent, i store previous conversations in a structured folder hierarchy:
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
            <pre className="text-sm overflow-x-auto">
{`conversations/
  2025/
    09/
      customer_name/
        thread_001.md
        thread_002.md`}
            </pre>
          </div>

          <p>
            makes agentic search fast and accurate. 
            claude can grep through relevant conversations without loading everything into context.
          </p>

          <h3>iteration beats perfection</h3>

          <p>
            my best-performing agent (customer support automation, handling ~300 tickets/day) 
            started as a 150-line prototype that handled exactly one use case.
          </p>

          <p>
            shipped it. watched how it failed. improved.
          </p>

          <p>
            now it's ~800 lines and handles 12 different ticket types. 
            but i would've never gotten there trying to build the perfect system upfront.
          </p>

          <h2>common mistakes (that i made so you don't have to)</h2>

          <h3>too many tools</h3>

          <p>
            already mentioned this, but worth repeating: 
            fewer, well-designed tools with parameters &gt; many specialized tools
          </p>

          <h3>ignoring error cases</h3>

          <p>
            what happens when:
          </p>
          <ul>
            <li>api call fails?</li>
            <li>file doesn't exist?</li>
            <li>bash command returns error?</li>
            <li>subagent times out?</li>
          </ul>

          <p>
            if you haven't explicitly handled these cases, your agent will fail in production. guaranteed.
          </p>

          <h3>not testing with real data</h3>

          <p>
            synthetic test data is clean, well-formatted, consistent.
          </p>

          <p>
            real data is messy, inconsistent, full of edge cases.
          </p>

          <p>
            my research agent worked perfectly in testing (10/10 success rate). 
            deployed to production, success rate dropped to 60% because real customer feedback documents were way messier than my test data.
          </p>

          <p>
            test with real data early and often.
          </p>

          <h3>overcomplicating context gathering</h3>

          <p>
            i tried building a sophisticated caching system for frequently accessed data... 
            spent a week on it.
          </p>

          <p>
            then realized claude's agentic search was already pretty efficient. 
            didn't need complex caching for most use cases.
          </p>

          <p>
            premature optimization strikes again.
          </p>

          <h2>specific use cases i've built</h2>

          <p>
            concrete examples with actual numbers:
          </p>

          <h3>email management agent</h3>

          <p>
            <strong>context gathering</strong>: searches past conversations folder, checks sender history, reviews current calendar
          </p>

          <p>
            <strong>actions</strong>: drafts replies, schedules meetings (google calendar mcp), files important messages, creates follow-up tasks
          </p>

          <p>
            <strong>verification</strong>: checks email format validity, tone matching against previous messages, confirms meeting times don't conflict
          </p>

          <p>
            <strong>results</strong>: processes 40-50 emails/day, 15 minute time savings per day, zero calendar conflicts in 2 months
          </p>

          <h3>document analysis agent</h3>

          <p>
            <strong>context gathering</strong>: uses subagents to parallel process documents, agentic search for specific terms, builds summary index
          </p>

          <p>
            <strong>actions</strong>: generates structured analysis reports (via code generation), extracts key metrics, creates comparison tables
          </p>

          <p>
            <strong>verification</strong>: cross-references extracted numbers with source documents, validates report structure against template
          </p>

          <p>
            <strong>results</strong>: analyzed 200+ customer feedback docs in 12 minutes (previously took 6+ hours of manual work)
          </p>

          <h3>code modernization agent</h3>

          <p>
            <strong>context gathering</strong>: scans codebase for patterns, identifies dependencies, checks current language versions
          </p>

          <p>
            <strong>actions</strong>: rewrites deprecated code, updates syntax, runs tests, creates git commits
          </p>

          <p>
            <strong>verification</strong>: runs full test suite, lints all changes, checks for breaking changes
          </p>

          <p>
            <strong>results</strong>: migrated 23k lines of python 2 to python 3 (with 94% test pass rate on first run)
          </p>

          <h2>when to use claude agent sdk vs other approaches</h2>

          <p>
            honest assessment after working with multiple agent frameworks:
          </p>

          <h3>use claude agent sdk when:</h3>

          <ul>
            <li>you need flexible tool execution (bash, code generation, file manipulation)</li>
            <li>your agent needs to work with files and file systems</li>
            <li>you want transparent, debuggable agent behavior</li>
            <li>you're building agents that need to compose tools creatively</li>
            <li>you need reliable mcp integration</li>
          </ul>

          <h3>consider alternatives when:</h3>

          <ul>
            <li>you need highly specialized domain tools (might need custom agent framework)</li>
            <li>you're building simple api wrappers (sdk is overkill)</li>
            <li>you need specific orchestration patterns the sdk doesn't support</li>
            <li>your use case requires custom llm routing logic</li>
          </ul>

          <h2>getting started (practical next steps)</h2>

          <p>
            if you're thinking about building with the claude agent sdk:
          </p>

          <ol>
            <li><strong>read the anthropic engineering blog post</strong> - seriously, it's good (link: <a href="https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700">anthropic.com/engineering/building-agents-with-the-claude-agent-sdk</a>)</li>
            <li><strong>start with one clear use case</strong> - don't try to build a general-purpose agent first</li>
            <li><strong>map the agent loop</strong> - context sources, actions needed, verification methods</li>
            <li><strong>prototype with minimal tools</strong> - add complexity only when needed</li>
            <li><strong>test with real data immediately</strong> - synthetic data will mislead you</li>
            <li><strong>deploy small and iterate</strong> - you'll learn more from one production deployment than 10 perfect prototypes</li>
          </ol>

          <h2>final thoughts</h2>

          <p>
            the claude agent sdk represents a fundamentally different approach to building agents... 
            giving ai the same tools humans use, rather than creating sanitized abstractions.
          </p>

          <p>
            it's powerful. it's flexible. and it's surprisingly easy to shoot yourself in the foot with bash access and code generation.
          </p>

          <p>
            but after months of working with it, i genuinely believe it's one of the better approaches to building agents that actually work in production.
          </p>

          <p>
            the key insight: <strong>good agent design is more important than fancy technology.</strong>
          </p>

          <p>
            gather context efficiently. take appropriate actions. verify your work. repeat.
          </p>

          <p className="italic">
            simple in theory. nuanced in practice. worth learning.
          </p>

          <hr className="my-8 border-gray-300 dark:border-gray-600" />

          <h2>related reading</h2>

          <p>
            if you found this helpful, you might also enjoy:
          </p>

          <ul>
            <li>
              <Link href="/blog/ai-agents-complete-guide" className="text-purple-600 hover:text-purple-700 underline">
                AI Agents: The Complete Guide
              </Link>
              {' '}- foundational concepts and architecture patterns
            </li>
            <li>
              <Link href="/blog/ai-agent-frameworks-comparison" className="text-purple-600 hover:text-purple-700 underline">
                AI Agent Frameworks: The Honest Comparison
              </Link>
              {' '}- how claude agent sdk compares to langgraph, crewai, and others
            </li>
            <li>
              <Link href="/blog/langgraph-state-management-memory-guide" className="text-purple-600 hover:text-purple-700 underline">
                LangGraph State Management and Memory
              </Link>
              {' '}- building stateful agents with persistent memory
            </li>
          </ul>

          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 dark:border-purple-500 p-6 my-8">
            <p className="text-purple-800 dark:text-purple-200 font-medium">
              <strong>building production agents?</strong> i help companies design and implement ai agent systems that actually work at scale. 
              let's talk about your specific use case. {' '}
              <a href="https://cal.com/aankit/explore-synergies" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 underline">
                schedule a conversation
              </a>
            </p>
          </div>
        </article>

        {/* Author Bio */}
        <div className="mt-16 p-8 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl border border-purple-200 dark:border-purple-700/50">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              AR
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Aankit Roy</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                ai strategy & engineering leadership consultant. spent the last decade scaling products to millions of users. 
                currently helping companies build ai agent systems that actually ship and deliver measurable value.
              </p>
              <div className="flex items-center space-x-4">
                <a href="https://www.linkedin.com/in/aankit-roy-20515b35/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700">
                  linkedin
                </a>
                <span className="text-gray-400">•</span>
                <a href="https://x.com/AankitRoy" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700">
                  twitter/x
                </a>
                <span className="text-gray-400">•</span>
                <a href="mailto:aankitroy1990@gmail.com" className="text-purple-600 hover:text-purple-700">
                  email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link href="/blog" className="inline-flex items-center text-purple-600 hover:text-purple-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            All Posts
          </Link>
        </div>
      </main>

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
}
