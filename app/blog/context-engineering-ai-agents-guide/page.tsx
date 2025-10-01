'use client';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Header } from '../../../components/Header';
import { ShareButtons } from '../../../components/ShareButtons';

export default function ContextEngineeringPage() {
  const post = {
    id: 'context-engineering-ai-agents-guide',
    title: 'context engineering for ai agents (or: why your agent keeps forgetting things)',
    excerpt: 'after debugging hundreds of "why did my agent do that?" moments, i realized most failures come down to bad context management... here\'s what actually works',
    author: 'Aankit Roy',
    date: '2025-10-01',
    readTime: '18 min read',
    tags: ['Context Engineering', 'AI Agents', 'Production AI', 'Agent Architecture'],
    featured: true
  };

  const shareUrl = `https://aankitroy.com/blog/context-engineering-ai-agents-guide`;
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
    "wordCount": "4200",
    "timeRequired": "PT18M",
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
        "name": "Machine Learning"
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
            last month, a client's agent kept hallucinating customer information. same question, different answers every time. 
            the model was fine... the context was a mess
          </p>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none dark:prose-invert">
          <p>
            here's something nobody tells you when you start building ai agents: 
            getting the model to <em>work</em> is easy. getting it to work <em>reliably</em> is where most projects die.
          </p>

          <p>
            and in my experience (building agents for 8+ clients over the past two years), 
            the difference between "works in demo" and "works in production" usually comes down to one thing:
          </p>

          <p className="font-semibold">
            how you manage context.
          </p>

          <h2>wait, what even is context engineering?</h2>

          <p>
            if you've been following ai development, you've heard about prompt engineering... 
            crafting the perfect instructions to get llms to do what you want.
          </p>

          <p>
            context engineering is different. it's about managing the <em>entire information landscape</em> your agent operates in.
          </p>

          <p>
            think of it this way:
          </p>

          <ul>
            <li><strong>prompt engineering</strong> = writing good instructions</li>
            <li><strong>context engineering</strong> = deciding what information your agent sees, when it sees it, and how much of it survives to the next interaction</li>
          </ul>

          <p>
            according to <a href="https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">anthropic's recent engineering post</a>, 
            context engineering is about "optimizing the utility of tokens against the inherent constraints of llms."
          </p>

          <p className="italic">
            (which is a fancy way of saying: you have limited space, use it wisely)
          </p>

          <h2>the problem nobody talks about: context rot</h2>

          <p>
            here's what i wish someone had told me two years ago...
          </p>

          <p>
            llms don't just "run out of space" when you hit the context limit. 
            they start getting confused <em>way before</em> that.
          </p>

          <p>
            this is called <strong>context rot</strong> (or sometimes "lost in the middle" problem).
          </p>

          <h3>the technical reality</h3>

          <p>
            based on research from anthropic and others, here's what happens:
          </p>

          <ul>
            <li>llms use transformer architecture where every token "attends to" every other token</li>
            <li>this creates n² pairwise relationships for n tokens</li>
            <li>as context grows, the model's "attention budget" gets stretched thin</li>
            <li>performance degrades gradually, not suddenly</li>
          </ul>

          <p>
            working on a customer service agent last quarter, i noticed something weird... 
            accuracy was great at 20k tokens. still good at 40k. but at 60k? 
            started making mistakes on basic facts that were in the conversation history.
          </p>

          <p>
            the context window was 200k tokens. we weren't even close to the limit. 
            but the agent was already losing track.
          </p>

          <p className="italic">
            this is context rot in action
          </p>

          <h2>the fundamental principle (that changed how i build)</h2>

          <p>
            after a year of debugging context issues, i've internalized one core principle from anthropic's work:
          </p>

          <p className="font-semibold text-lg">
            find the smallest possible set of high-signal tokens that maximize the likelihood of your desired outcome
          </p>

          <p>
            sounds simple. incredibly hard to implement.
          </p>

          <p>
            let me show you what this means in practice...
          </p>

          <h2>context engineering in practice: what actually works</h2>

          <h3>1. system prompts at the "right altitude"</h3>

          <p>
            this one took me forever to figure out.
          </p>

          <p>
            your system prompt needs to be specific enough to guide behavior, 
            but general enough to let the model reason flexibly.
          </p>

          <p>
            <strong>too low altitude</strong> (overly specific):
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
            <pre className="text-sm overflow-x-auto whitespace-pre-wrap">
{`if user asks about refunds and order date > 30 days ago, say "outside refund window"
if user asks about refunds and order date < 30 days, check order status
if order status is "delivered" and < 7 days, process refund
if order status is "delivered" and >= 7 days, escalate to manager...`}
            </pre>
          </div>

          <p>
            this breaks constantly. every edge case needs a new rule.
          </p>

          <p>
            <strong>too high altitude</strong> (too vague):
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
            <pre className="text-sm overflow-x-auto whitespace-pre-wrap">
{`you are a helpful customer service agent. help customers with their requests.`}
            </pre>
          </div>

          <p>
            this is useless. no guidance on policies, escalation, or handling edge cases.
          </p>

          <p>
            <strong>right altitude</strong> (goldilocks zone):
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
            <pre className="text-sm overflow-x-auto whitespace-pre-wrap">
{`you handle customer support with access to order data and refund tools.

## refund policy
- standard window: 30 days from order date
- condition: product must be delivered
- if eligible: process immediately
- if edge case: escalate with context

## your approach
1. gather relevant order information
2. check policy eligibility  
3. take appropriate action
4. explain decision clearly

use tools to check actual dates and status rather than relying on customer statements.`}
            </pre>
          </div>

          <p>
            this gives clear guidance while letting the agent reason about specific situations.
          </p>

          <p>
            result: 40% fewer hallucinations, 60% fewer unnecessary escalations.
          </p>

          <h3>2. tool design for context efficiency</h3>

          <p>
            here's a mistake i made that cost me a week of debugging...
          </p>

          <p>
            i built a research agent with these tools:
          </p>

          <ul>
            <li><code>search_documents(query)</code> - returned full document text (avg 8k tokens)</li>
            <li><code>get_document_by_id(id)</code> - also returned full text</li>
            <li><code>list_documents()</code> - returned all 200 documents with metadata</li>
          </ul>

          <p>
            agent would search once... boom, 8k tokens gone. 
            search again... another 8k. three searches and we're at 24k tokens of mostly duplicate information.
          </p>

          <p>
            <strong>better approach</strong> (what i should've done):
          </p>

          <ul>
            <li><code>search_documents(query, max_results=3)</code> - returns only titles and summaries (200 tokens avg)</li>
            <li><code>get_document_sections(id, sections)</code> - fetch specific sections, not entire doc</li>
            <li><code>search_within_document(id, query)</code> - targeted search within known doc</li>
          </ul>

          <p>
            same functionality. 90% less context pollution.
          </p>

          <p className="italic">
            every tool call is a context tax. design tools that return minimal, high-value information.
          </p>

          <h3>3. the rag vs agentic search debate</h3>

          <p>
            this is where context engineering gets interesting...
          </p>

          <p>
            traditional approach (rag - retrieval augmented generation):
          </p>
          <ul>
            <li>pre-compute embeddings for all your data</li>
            <li>when query comes in, find semantically similar chunks</li>
            <li>stuff relevant chunks into context</li>
            <li>hope you grabbed the right information</li>
          </ul>

          <p>
            <strong>agentic search</strong> (what i'm using more lately):
          </p>
          <ul>
            <li>give agent tools to explore information space</li>
            <li>let it decide what to retrieve based on what it's learned</li>
            <li>iterative refinement - can go deeper if needed</li>
            <li>only loads what's actually needed</li>
          </ul>

          <p>
            example from last month... building a legal document analyzer.
          </p>

          <p>
            <strong>rag approach:</strong>
          </p>
          <p>
            user asks: "what are the termination clauses?"<br/>
            rag retrieves 5 chunks about "termination"<br/>
            includes termination of employees, termination of services, termination of agreement...<br/>
            context filled with 80% irrelevant info
          </p>

          <p>
            <strong>agentic search approach:</strong>
          </p>
          <p>
            user asks: "what are the termination clauses?"<br/>
            agent uses <code>search_sections({"{"}"type": "termination_clause"{"}"}, contract_type="employment")</code><br/>
            gets targeted results<br/>
            if ambiguous, can follow up with <code>get_related_clauses()</code><br/>
            builds context incrementally
          </p>

          <p>
            agentic search is slower (multiple llm calls) but way more accurate for complex queries.
          </p>

          <p>
            my current rule: use rag for speed on simple queries, agentic search for accuracy on complex ones.
          </p>

          <h3>4. context compaction for long-running agents</h3>

          <p>
            this is critical for any agent that runs longer than 10-15 interactions...
          </p>

          <p>
            basic idea: when approaching context limits, summarize the conversation and start fresh.
          </p>

          <p>
            sounds simple. execution is nuanced.
          </p>

          <p>
            <strong>naive compaction</strong> (what i did first):
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
            <pre className="text-sm overflow-x-auto whitespace-pre-wrap">
{`"summarize the conversation so far in 500 tokens"`}
            </pre>
          </div>

          <p>
            result: lost critical details. agent forgot important context from early conversations.
          </p>

          <p>
            <strong>better compaction</strong> (learned from anthropic's approach):
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
            <pre className="text-sm overflow-x-auto whitespace-pre-wrap">
{`create a structured summary preserving:
- key decisions made
- open questions/blockers  
- important facts established
- relevant file/data references
- user preferences revealed

keep the most recent 5 messages in full (recent context matters most)
compress everything before that into the structured summary`}
            </pre>
          </div>

          <p>
            working on a code migration agent, implemented this compaction strategy. 
            agent maintained coherence across 4-hour sessions spanning 100+ file modifications.
          </p>

          <p>
            anthropic's claude code uses a similar approach - they preserve recent messages and architectural decisions while compressing tool outputs.
          </p>

          <h3>5. structured note-taking (agentic memory)</h3>

          <p>
            this technique is underused but incredibly powerful...
          </p>

          <p>
            instead of keeping everything in context, let the agent write persistent notes.
          </p>

          <p>
            example from a customer onboarding agent i built:
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
            <pre className="text-sm overflow-x-auto whitespace-pre-wrap">
{`# customer_profile.md

## company context
- industry: fintech (specifically crypto trading)
- team size: 47 engineers
- current pain point: api latency during high volume

## technical environment  
- stack: python/fastapi + react
- cloud: aws (considering gcp migration)
- database: postgresql + redis

## decision makers
- cto (technical decisions): prefers pragmatic solutions over cutting-edge
- vp eng (budget): cost-conscious, needs clear roi

## preferences discovered
- likes: specific metrics, code examples, direct communication
- dislikes: buzzwords, vague timelines
- communication style: technical depth over high-level pitches`}
            </pre>
          </div>

          <p>
            this lives outside the context window. agent reads it at start of each session, 
            updates it as it learns new information.
          </p>

          <p>
            result: continuity across sessions without burning context tokens on repeated information.
          </p>

          <p>
            anthropic recently launched a memory tool in their api that makes this pattern even easier to implement.
          </p>

          <h3>6. multi-agent architectures for context isolation</h3>

          <p>
            when tasks get complex enough, single-agent context management becomes untenable.
          </p>

          <p>
            solution: specialized sub-agents with isolated contexts.
          </p>

          <p>
            built a market research system last month:
          </p>

          <p>
            <strong>orchestrator agent</strong>: maintains high-level plan and coordinates subagents<br/>
            <strong>search agent</strong>: explores information sources, returns summaries<br/>
            <strong>analysis agent</strong>: deep dives on specific data points<br/>
            <strong>synthesis agent</strong>: combines findings into final report
          </p>

          <p>
            each subagent might use 50k+ tokens during its work. 
            but it only returns 1-2k tokens of distilled insights to the orchestrator.
          </p>

          <p>
            this is what anthropic calls "context isolation" - 
            detailed work happens in subagent contexts, orchestrator maintains only high-level state.
          </p>

          <p>
            analyzed 200+ research papers in one session. 
            single agent would've choked at ~30 papers.
          </p>

          <h2>common mistakes (that i've made, multiple times)</h2>

          <h3>mistake 1: stuffing everything into system prompt</h3>

          <p>
            saw a 12k token system prompt last week. included:
          </p>

          <ul>
            <li>complete product documentation</li>
            <li>all company policies</li>
            <li>50+ example conversations</li>
            <li>detailed api specifications</li>
          </ul>

          <p>
            agent was slow, confused, and expensive.
          </p>

          <p>
            better: minimal system prompt + tools to retrieve specific information when needed.
          </p>

          <h3>mistake 2: not clearing old tool results</h3>

          <p>
            agent searches database, gets 200 rows back (5k tokens).<br/>
            analyzes them.<br/>
            those rows stay in context forever.
          </p>

          <p>
            five searches later: 25k tokens of stale database results.
          </p>

          <p>
            anthropic just launched "tool result clearing" - 
            automatically removes old tool outputs while keeping the fact that tool was called.
          </p>

          <p>
            implement this pattern. your context will thank you.
          </p>

          <h3>mistake 3: ignoring recency bias</h3>

          <p>
            fun fact: llms pay more attention to information at the start and end of context.
          </p>

          <p>
            middle? gets lost.
          </p>

          <p>
            structure your context strategically:
          </p>

          <ul>
            <li><strong>start</strong>: system instructions, critical constraints</li>
            <li><strong>middle</strong>: reference information, examples (can be lossy)</li>
            <li><strong>end</strong>: current task, recent messages, immediate context</li>
          </ul>

          <p>
            made this change to a document analysis agent - accuracy improved 23% on long documents.
          </p>

          <h3>mistake 4: premature optimization</h3>

          <p>
            spent two weeks building a sophisticated caching system for frequently-accessed context...
          </p>

          <p>
            then realized 90% of queries were unique. cache hit rate: 12%.
          </p>

          <p className="italic">
            measure before you optimize. most context engineering is about good defaults, not clever tricks.
          </p>

          <h2>practical implementation: a context engineering checklist</h2>

          <p>
            when i start a new agent project, i now run through this checklist:
          </p>

          <h3>phase 1: design (before writing code)</h3>

          <ol className="space-y-3">
            <li>
              <strong>define context budget</strong>
              <ul className="ml-4 mt-2">
                <li>how much context do i have? (model's limit)</li>
                <li>how much do i actually want to use? (aim for 60-70% max)</li>
                <li>what's my average interaction length?</li>
              </ul>
            </li>
            <li>
              <strong>map information sources</strong>
              <ul className="ml-4 mt-2">
                <li>what data does agent need access to?</li>
                <li>what's static vs dynamic?</li>
                <li>what can be retrieved just-in-time vs preloaded?</li>
              </ul>
            </li>
            <li>
              <strong>design tool returns</strong>
              <ul className="ml-4 mt-2">
                <li>each tool should return minimal, structured info</li>
                <li>avoid returning full documents/datasets</li>
                <li>include pagination for large results</li>
              </ul>
            </li>
          </ol>

          <h3>phase 2: implementation</h3>

          <ol className="space-y-3" start={4}>
            <li>
              <strong>write minimal system prompt</strong>
              <ul className="ml-4 mt-2">
                <li>test with bare minimum first</li>
                <li>add specificity only where agent fails</li>
                <li>use structured sections (xml tags or markdown headers)</li>
              </ul>
            </li>
            <li>
              <strong>implement context monitoring</strong>
              <ul className="ml-4 mt-2">
                <li>track tokens used per interaction</li>
                <li>alert when approaching limits</li>
                <li>log context at each agent decision point</li>
              </ul>
            </li>
            <li>
              <strong>add compaction strategy</strong>
              <ul className="ml-4 mt-2">
                <li>trigger at 70-80% of context limit</li>
                <li>preserve recent messages + structured summary</li>
                <li>test that agent maintains coherence post-compaction</li>
              </ul>
            </li>
          </ol>

          <h3>phase 3: optimization (after initial deployment)</h3>

          <ol className="space-y-3" start={7}>
            <li>
              <strong>analyze context usage patterns</strong>
              <ul className="ml-4 mt-2">
                <li>which tools return most tokens?</li>
                <li>where does context get wasted?</li>
                <li>what information is rarely used?</li>
              </ul>
            </li>
            <li>
              <strong>refine based on failure modes</strong>
              <ul className="ml-4 mt-2">
                <li>when agent hallucinates, what context was it missing?</li>
                <li>when agent gets confused, what context was noisy?</li>
                <li>iterate on information density</li>
              </ul>
            </li>
          </ol>

          <h2>measuring success: metrics that matter</h2>

          <p>
            you can't improve what you don't measure. here's what i track:
          </p>

          <h3>context efficiency metrics</h3>

          <ul>
            <li><strong>average tokens per interaction</strong> - should stay well below limit</li>
            <li><strong>context utilization rate</strong> - percentage of context containing relevant info</li>
            <li><strong>token cost per successful outcome</strong> - measures efficiency of achieving goals</li>
          </ul>

          <h3>quality metrics</h3>

          <ul>
            <li><strong>hallucination rate</strong> - often correlates with context pollution</li>
            <li><strong>task completion rate</strong> - are you providing enough context?</li>
            <li><strong>coherence across compactions</strong> - does agent maintain state after summarization?</li>
          </ul>

          <h3>real numbers from production</h3>

          <p>
            customer service agent before context optimization:
          </p>
          <ul>
            <li>avg tokens: 85k per session</li>
            <li>hallucination rate: 12%</li>
            <li>cost per interaction: $0.34</li>
          </ul>

          <p>
            after optimization:
          </p>
          <ul>
            <li>avg tokens: 32k per session (62% reduction)</li>
            <li>hallucination rate: 4% (67% improvement)</li>
            <li>cost per interaction: $0.11 (68% reduction)</li>
          </ul>

          <p>
            same functionality. better performance. way cheaper.
          </p>

          <h2>the future of context engineering</h2>

          <p>
            context windows are getting bigger. claude 3.5 has 200k. gemini 1.5 has 1 million. 
            gpt-4 has 128k.
          </p>

          <p>
            does this make context engineering obsolete?
          </p>

          <p className="font-semibold">
            no. actually makes it more important.
          </p>

          <p>
            larger windows mean more opportunities to pollute context. 
            context rot still happens - just at higher token counts.
          </p>

          <p>
            based on anthropic's research and my own testing, models still perform best with focused, 
            well-curated context regardless of window size.
          </p>

          <p>
            the future isn't about stuffing more into context. 
            it's about smarter context management at any scale.
          </p>

          <h2>key takeaways (if you remember nothing else)</h2>

          <ol className="space-y-2">
            <li><strong>context is finite</strong> - treat it like a precious resource, even with large windows</li>
            <li><strong>less is more</strong> - smallest possible set of high-signal tokens wins</li>
            <li><strong>design for context efficiency</strong> - tools should return minimal, structured info</li>
            <li><strong>implement compaction early</strong> - don't wait until you hit limits</li>
            <li><strong>measure everything</strong> - track tokens, costs, quality metrics</li>
            <li><strong>agentic search &gt; rag</strong> - for complex queries where accuracy matters</li>
            <li><strong>use structured memory</strong> - persistent notes outside context window</li>
            <li><strong>consider multi-agent</strong> - for complex tasks requiring deep exploration</li>
          </ol>

          <h2>resources for going deeper</h2>

          <p>
            if you want to dive deeper into context engineering:
          </p>

          <ul>
            <li>
              <a href="https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
                anthropic's context engineering guide
              </a>
              {' '}- comprehensive technical deep-dive
            </li>
            <li>
              <a href="https://microsoft.github.io/ai-agents-for-beginners/12-context-engineering/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
                microsoft's context engineering course
              </a>
              {' '}- practical implementation strategies
            </li>
            <li>
              <Link href="/blog/claude-agent-sdk-building-agents-that-work" className="text-purple-600 hover:text-purple-700 underline">
                my claude agent sdk guide
              </Link>
              {' '}- related agent development patterns
            </li>
          </ul>

          <hr className="my-8 border-gray-300 dark:border-gray-600" />

          <h2>related reading</h2>

          <p>
            if you found this helpful, you might also enjoy:
          </p>

          <ul>
            <li>
              <Link href="/blog/claude-agent-sdk-building-agents-that-work" className="text-purple-600 hover:text-purple-700 underline">
                Building Agents with Claude Agent SDK
              </Link>
              {' '}- practical agent development with the agent loop
            </li>
            <li>
              <Link href="/blog/ai-agents-complete-guide" className="text-purple-600 hover:text-purple-700 underline">
                AI Agents: The Complete Guide
              </Link>
              {' '}- foundational concepts and architecture
            </li>
            <li>
              <Link href="/blog/langgraph-state-management-memory-guide" className="text-purple-600 hover:text-purple-700 underline">
                LangGraph State Management
              </Link>
              {' '}- building stateful agents with memory
            </li>
          </ul>

          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 dark:border-purple-500 p-6 my-8">
            <p className="text-purple-800 dark:text-purple-200 font-medium">
              <strong>struggling with context management in your ai agents?</strong> i help companies design and implement production-grade context engineering strategies. 
              let's talk about your specific challenges. {' '}
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
                ai strategy & engineering leadership consultant. building production ai systems for over a decade. 
                currently helping companies implement reliable ai agents that actually work at scale.
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
