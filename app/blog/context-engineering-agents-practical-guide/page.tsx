'use client';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Header } from '../../../components/Header';
import { ShareButtons } from '../../../components/ShareButtons';

export default function ContextEngineeringPracticalPage() {
  const post = {
    id: 'context-engineering-agents-practical-guide',
    title: 'context engineering for agents: the practical guide nobody writes',
    excerpt: 'understanding the four strategies—write, select, compress, and isolate—through real examples from Claude Code, ChatGPT, Cursor, and production research systems',
    author: 'Aankit Roy',
    date: '2025-10-02',
    readTime: '16 min read',
    tags: ['Context Engineering', 'AI Agents', 'Production AI', 'Agent Memory', 'Multi-Agent Systems'],
    featured: true
  };

  const shareUrl = `https://aankitroy.com/blog/context-engineering-agents-practical-guide`;
  const shareText = `${post.title} by Aankit Roy`;

  // Structured data for SEO
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": {
      "@type": "ImageObject",
      "url": "https://aankitroy.com/aankitroy.png",
      "width": "1200",
      "height": "630"
    },
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
      "url": "https://aankitroy.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aankitroy.com/aankitroy.png",
        "width": "400",
        "height": "400"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": shareUrl
    },
    "keywords": post.tags.join(', '),
    "articleSection": "AI Agents",
    "inLanguage": "en-US",
    "wordCount": "4200",
    "timeRequired": "PT16M",
    "about": [
      {
        "@type": "Thing",
        "name": "Context Engineering"
      },
      {
        "@type": "Thing",
        "name": "AI Agents"
      },
      {
        "@type": "Thing",
        "name": "Multi-Agent Systems"
      },
      {
        "@type": "Thing",
        "name": "LangGraph"
      }
    ],
    "mentions": [
      {
        "@type": "SoftwareApplication",
        "name": "Claude Code",
        "applicationCategory": "AI Agent"
      },
      {
        "@type": "SoftwareApplication",
        "name": "ChatGPT",
        "applicationCategory": "AI Assistant"
      },
      {
        "@type": "SoftwareApplication",
        "name": "LangGraph",
        "applicationCategory": "Agent Framework"
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
            context engineering isn't just about fitting more into a context window. it's about understanding 
            what to include, what to exclude, and how to structure information so your agent actually works in production.
          </p>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none dark:prose-invert">
          <p>
            the{' '}
            <a href="https://blog.langchain.com/context-engineering-for-agents/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
              LangChain blog on context engineering
            </a>{' '}
            lays out four core strategies: <strong>write, select, compress, and isolate</strong>. these are the right categories. 
            but understanding the nuances of when and how to apply them makes the difference between agents that work and agents that don't scale.
          </p>

          <p>
            this post digs deeper into the practical implications of each strategy, based on what we can learn from 
            production systems like Claude Code, ChatGPT, Cursor, and Windsurf, as well as research from Anthropic, 
            Cognition, and others building at the frontier.
          </p>

          <h2>why context engineering matters</h2>

          <p>
            as the LangChain article points out, Andrej Karpathy's analogy is perfect: think of the LLM as a CPU and the context window as RAM. 
            context engineering is about managing that limited working memory.
          </p>

          <p>
            here's what makes this critical for agents specifically: agents accumulate context rapidly. 
            every tool call adds feedback. every turn adds messages. long-running tasks can easily hit hundreds of thousands of tokens.
          </p>

          <p>
            Drew Breunig identified four specific failure modes that longer context causes:
          </p>

          <ul>
            <li><strong>context poisoning:</strong> when a hallucination makes it into context and compounds</li>
            <li><strong>context distraction:</strong> when the context overwhelms the model's training</li>
            <li><strong>context confusion:</strong> when superfluous context influences the response</li>
            <li><strong>context clash:</strong> when parts of the context disagree with each other</li>
          </ul>

          <p>
            both Anthropic and Cognition have called out context engineering as the "#1 job of engineers building AI agents." 
            poor context management is often the primary bottleneck in agent reliability.
          </p>

          <h2>strategy 1: writing context (scratchpads and memories)</h2>

          <p>
            the first strategy is about <strong>writing context</strong>—saving it outside the context window for later use.
          </p>

          <h3>scratchpads: how anthropic's multi-agent researcher uses them</h3>

          <p>
            according to the LangChain article, Anthropic's multi-agent researcher provides a clear example. 
            the LeadResearcher agent "begins by thinking through the approach and saving its plan to Memory to persist the context, 
            since if the context window exceeds 200,000 tokens it will be truncated and it is important to retain the plan."
          </p>

          <p>
            this reveals something important: even with 200k token windows, you can't rely on keeping everything in context. 
            critical information needs to be explicitly saved.
          </p>

          <p>
            scratchpads can be implemented as:
          </p>

          <ul>
            <li>tool calls that write to files</li>
            <li>fields in a runtime state object that persists during the session</li>
            <li>external databases or storage systems</li>
          </ul>

          <h3>memory systems: what production systems teach us</h3>

          <p>
            several production agents now have memory capabilities:
          </p>

          <ul>
            <li><strong>ChatGPT:</strong> stores user-specific memories across sessions</li>
            <li><strong>Cursor and Windsurf:</strong> use rules files for procedural memories</li>
            <li><strong>Claude Code:</strong> uses CLAUDE.md for project-specific context</li>
          </ul>

          <p>
            these systems distinguish between different memory types:
          </p>

          <ul>
            <li><strong>episodic memories:</strong> examples of desired behavior (few-shot examples)</li>
            <li><strong>procedural memories:</strong> instructions and rules to steer behavior</li>
            <li><strong>semantic memories:</strong> facts relevant to the task</li>
          </ul>

          <p>
            the research cited in the LangChain article includes concepts from <strong>Reflexion</strong> (self-generated memories after each turn) 
            and <strong>Generative Agents</strong> (synthesizing memories periodically from collections of past feedback).
          </p>

          <p>
            memory selection becomes critical when you have large collections. 
            Simon Willison shared an example at the AIEngineer World's Fair: ChatGPT fetched his location from memories 
            and unexpectedly injected it into a requested image. this type of unexpected retrieval can make users feel like 
            the context window "no longer belongs to them."
          </p>

          <h2>strategy 2: selecting context</h2>

          <p>
            selecting context means <strong>pulling it into the context window</strong> to help an agent perform a task.
          </p>

          <h3>tool selection: the RAG for tools approach</h3>

          <p>
            agents can become overloaded if provided with too many tools. tool descriptions often overlap, 
            causing model confusion about which tool to use.
          </p>

          <p>
            the LangChain article cites research showing that applying RAG (retrieval augmented generation) to tool descriptions—fetching 
            only the most relevant tools for a task—can improve tool selection accuracy by 3-fold.
          </p>

          <p>
            LangGraph's Bigtool library implements this approach: use semantic search over tool descriptions to select 
            the most relevant subset for each task.
          </p>

          <h3>knowledge retrieval: what windsurf learned about code agents</h3>

          <p>
            Varun from Windsurf captured some key challenges with RAG for code agents:
          </p>

          <blockquote className="border-l-4 border-purple-400 dark:border-purple-500 pl-4 italic my-6">
            <p>
              "Indexing code ≠ context retrieval ... [We are doing indexing & embedding search ... [with] AST parsing code 
              and chunking along semantically meaningful boundaries ... embedding search becomes unreliable as a retrieval heuristic 
              as the size of the codebase grows ... we must rely on a combination of techniques like grep/file search, 
              knowledge graph based retrieval, and ... a re-ranking step where [context] is ranked in order of relevance."
            </p>
          </blockquote>

          <p>
            this highlights that simple embedding search often isn't enough. production systems combine:
          </p>

          <ul>
            <li>embedding-based semantic search</li>
            <li>keyword search (grep/file search)</li>
            <li>knowledge graph retrieval</li>
            <li>re-ranking steps</li>
          </ul>

          <h2>strategy 3: compressing context</h2>

          <p>
            compressing context involves <strong>retaining only the tokens required</strong> to perform a task.
          </p>

          <h3>context summarization: how claude code does it</h3>

          <p>
            if you've used Claude Code, you've seen this in action. according to the LangChain article, 
            Claude Code runs "auto-compact" after you exceed 95% of the context window and summarizes 
            the full trajectory of user-agent interactions.
          </p>

          <p>
            summarization can be applied at different points:
          </p>

          <ul>
            <li><strong>trajectory-level:</strong> compress entire conversation histories</li>
            <li><strong>tool-level:</strong> post-process token-heavy tool calls</li>
            <li><strong>agent-to-agent:</strong> summarize at handoff boundaries in multi-agent systems</li>
          </ul>

          <p>
            Cognition mentioned using a fine-tuned model for summarization to ensure specific events 
            and decisions are captured accurately.
          </p>

          <h3>context trimming: the simpler alternative</h3>

          <p>
            as Drew Breunig points out, trimming can often filter or "prune" context without needing an LLM. 
            this can use hard-coded heuristics like removing older messages from a list.
          </p>

          <p>
            there's also research on trained context pruners like Provence (for Question-Answering) that can learn 
            what to remove while maintaining performance.
          </p>

          <h2>strategy 4: isolating context</h2>

          <p>
            isolating context involves <strong>splitting it up</strong> to help an agent perform a task.
          </p>

          <h3>multi-agent: the 15x token multiplier</h3>

          <p>
            one of the most popular ways to isolate context is to split it across sub-agents. 
            OpenAI's Swarm library was motivated by separation of concerns, where a team of agents handle specific sub-tasks.
          </p>

          <p>
            Anthropic's multi-agent researcher reported that many agents with isolated contexts outperformed single-agent 
            approaches because each subagent context window can be allocated to a more narrow sub-task.
          </p>

          <p>
            however, there's a significant cost: Anthropic reported <strong>up to 15× more tokens</strong> than single-agent approaches.
          </p>

          <p>
            challenges with multi-agent include:
          </p>

          <ul>
            <li>token usage (that 15x multiplier)</li>
            <li>need for careful prompt engineering to plan sub-agent work</li>
            <li>coordination complexity</li>
          </ul>

          <h3>context isolation with environments</h3>

          <p>
            HuggingFace's deep researcher shows another approach. most agents use tool calling APIs that return JSON objects. 
            HuggingFace uses a CodeAgent, which outputs code that runs in a sandbox.
          </p>

          <p>
            as they noted, this allows for "better handling of state ... Need to store this image / audio / other for later use? 
            No problem, just assign it as a variable in your state and you [use it later]."
          </p>

          <p>
            this lets you isolate token-heavy objects in the environment, outside the LLM's context window.
          </p>

          <h3>state-based isolation</h3>

          <p>
            an agent's runtime state object can serve a similar purpose. a state object can be designed with a schema that has fields 
            where context can be written. one field (like <code>messages</code>) can be exposed to the LLM at each turn, 
            while the schema isolates information in other fields for more selective use.
          </p>

          <p>
            this provides the benefits of context isolation without the coordination overhead of multi-agent architectures.
          </p>

          <h2>how LangGraph supports these strategies</h2>

          <p>
            LangGraph was designed to support all four context engineering strategies:
          </p>

          <h3>write context</h3>

          <ul>
            <li><strong>checkpointing:</strong> persists agent state across all steps (short-term memory)</li>
            <li><strong>long-term memory:</strong> persist context across many sessions</li>
            <li><strong>LangMem:</strong> abstractions for memory management</li>
          </ul>

          <h3>select context</h3>

          <ul>
            <li><strong>state access:</strong> fetch state within each node for fine-grained control</li>
            <li><strong>memory retrieval:</strong> embedding-based retrieval on memory collections</li>
            <li><strong>Bigtool library:</strong> semantic search over tool descriptions</li>
          </ul>

          <h3>compress context</h3>

          <ul>
            <li><strong>message utilities:</strong> built-in utilities for summarization and trimming</li>
            <li><strong>custom nodes:</strong> add summarization at specific points in your agent</li>
            <li><strong>tool-specific compression:</strong> post-process specific tool calls</li>
          </ul>

          <h3>isolate context</h3>

          <ul>
            <li><strong>state schemas:</strong> isolate context in different state fields</li>
            <li><strong>sandbox support:</strong> E2B sandbox and Pyodide for context isolation</li>
            <li><strong>multi-agent libraries:</strong> supervisor and swarm patterns</li>
          </ul>

          <h2>practical principles</h2>

          <p>
            whether you use LangGraph or build from scratch, these principles apply:
          </p>

          <ol>
            <li>
              <strong>measure before optimizing</strong>
              <p>use tools like LangSmith to track token usage and understand where context is going</p>
            </li>
            <li>
              <strong>context poisoning is real</strong>
              <p>hallucinations that make it into context compound. design systems to detect and remove them.</p>
            </li>
            <li>
              <strong>multi-agent has real costs</strong>
              <p>15x token multiplier isn't hyperbole. use multi-agent when parallelism and specialization justify the cost.</p>
            </li>
            <li>
              <strong>consider state isolation first</strong>
              <p>before jumping to multi-agent, try isolating context in state fields</p>
            </li>
            <li>
              <strong>summarization requires care</strong>
              <p>Cognition uses fine-tuned models. critical information can't be lost in compression.</p>
            </li>
            <li>
              <strong>retrieval is harder than it looks</strong>
              <p>as Windsurf shows, production RAG combines multiple techniques and re-ranking</p>
            </li>
          </ol>

          <h2>key takeaways</h2>

          <ol className="space-y-2">
            <li><strong>context engineering is foundational</strong> - both Anthropic and Cognition call it the #1 job for agent builders</li>
            <li><strong>four strategies matter</strong> - write, select, compress, and isolate provide a complete mental model</li>
            <li><strong>production systems teach us</strong> - Claude Code, ChatGPT, Cursor, and Windsurf show these strategies in action</li>
            <li><strong>costs compound</strong> - multi-agent's 15x multiplier, poor retrieval, and lack of compression create expensive systems</li>
            <li><strong>frameworks help</strong> - LangGraph provides primitives for all four strategies, but you still need to design carefully</li>
            <li><strong>measure everything</strong> - LangSmith and similar observability tools are essential for understanding context usage</li>
          </ol>

          <h2>resources worth reading</h2>

          <ul>
            <li>
              <a href="https://blog.langchain.com/context-engineering-for-agents/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
                LangChain's context engineering guide
              </a>
              {' '}- the foundational overview this post builds on
            </li>
            <li>
              <Link href="/blog/context-engineering-ai-agents-guide" className="text-purple-600 hover:text-purple-700 underline">
                my earlier context engineering post
              </Link>
              {' '}- focused on context rot and token budgets from a different angle
            </li>
            <li>
              <Link href="/blog/ai-agent-frameworks-comparison" className="text-purple-600 hover:text-purple-700 underline">
                ai agent frameworks comparison
              </Link>
              {' '}- how different frameworks handle context management
            </li>
          </ul>

          <hr className="my-8 border-gray-300 dark:border-gray-600" />

          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 dark:border-purple-500 p-6 my-8">
            <p className="text-purple-800 dark:text-purple-200 font-medium">
              <strong>working on production agent systems?</strong> i help companies design agent architectures that balance 
              context management with performance and cost. {' '}
              <a href="https://cal.com/aankit/explore-synergies" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 underline">
                let's discuss your specific challenges
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
                ai strategy & engineering leadership consultant. helping companies build production agents that balance 
                performance, reliability, and cost through thoughtful context engineering.
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
