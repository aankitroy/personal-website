'use client';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Header } from '../../../components/Header';
import { ShareButtons } from '../../../components/ShareButtons';

export default function AgenticDesignPatternsPage() {
  const post = {
    id: 'agentic-design-patterns-complete-guide',
    title: 'agentic design patterns: the complete guide to building agents that actually work',
    excerpt: 'understanding reflection, planning, tool use, and multi-agent orchestration patterns through real implementations. includes orchestration design framework and pattern selection framework.',
    author: 'Aankit Roy',
    date: '2025-10-06',
    readTime: '25 min read',
    tags: ['Agentic Design Patterns', 'AI Agents', 'Agent Architecture', 'ReAct', 'Multi-Agent Systems', 'Agent Memory'],
    featured: true
  };

  const shareUrl = `https://aankitroy.com/blog/agentic-design-patterns-complete-guide`;
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
    "wordCount": "6500",
    "timeRequired": "PT25M",
    "about": [
      {
        "@type": "Thing",
        "name": "Agentic Design Patterns"
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
        "name": "ReAct Pattern"
      }
    ],
    "mentions": [
      {
        "@type": "Organization",
        "name": "Anthropic",
        "url": "https://www.anthropic.com"
      },
      {
        "@type": "Person",
        "name": "Andrew Ng"
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
            after building agents for two years, i've learned that success isn't about picking the right framework—it's about 
            understanding the core design patterns and knowing when to use each one.
          </p>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none dark:prose-invert">
          <p>
            last month, i watched a team spend three weeks building an agent that could have been built in three days. 
            why? they kept throwing tools at the problem instead of stepping back to understand the underlying design pattern they actually needed.
          </p>

          <p>
            (i've made this exact mistake. multiple times.)
          </p>

          <p>
            this post breaks down the core agentic design patterns that show up in every successful agent system i've worked on: 
            <strong> reflection, planning, tool use, multi-agent coordination, and memory-augmented systems</strong>. these aren't academic concepts—they're 
            practical frameworks that determine whether your agent works in production or fails spectacularly.
          </p>

          <h2>why design patterns matter (more than you think)</h2>

          <p>
            here's the thing about building agents: you can get a demo working in an afternoon. 
            but getting that same agent to handle 1,000 real user requests without falling apart? that requires understanding design patterns.
          </p>

          <p>
            as the research from{' '}
            <a href="https://hypermode.com/blog/agentic-design-patterns-ai-agents" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
              Hypermode on agentic design patterns
            </a>
            {' '}points out, these patterns provide <strong>repeatable solutions to common challenges</strong> in agent development. 
            they define clear interfaces between agents, tools, models, and data sources.
          </p>

          <p>
            more importantly, they give you:
          </p>

          <ul>
            <li><strong>scalability</strong> - reusable structures that don't become unmaintainable as complexity grows</li>
            <li><strong>reliability</strong> - standardized interactions lead to predictable behavior</li>
            <li><strong>modularity</strong> - clear interfaces let you expand functionality without technical debt</li>
            <li><strong>team communication</strong> - shared vocabulary for discussing complex agent behaviors</li>
          </ul>

          <h2>pattern 1: reflection (the agent that critiques itself)</h2>

          <p>
            reflection is the pattern where your agent evaluates and improves its own output before finalizing an answer.
          </p>

          <p>
            sounds simple. changes everything.
          </p>

          <h3>how reflection actually works</h3>

          <p>
            the basic flow:
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
            <p className="font-mono text-sm mb-0">
              generate initial output → critique that output → improve based on critique → repeat until satisfied
            </p>
          </div>

          <p>
            according to{' '}
            <a href="https://www.dataknobs.com/agent-ai/design-patterns/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
              DataKnobs' guide on agent design patterns
            </a>
            , this self-refinement mechanism significantly enhances output quality without requiring human intervention.
          </p>

          <h3>when i use reflection</h3>

          <p>
            building a code generation agent last quarter, initial outputs were... rough. syntax errors, missing imports, 
            incomplete logic. classic first-draft problems.
          </p>

          <p>
            added a reflection step:
          </p>

          <ol>
            <li>agent generates code</li>
            <li>agent runs linter and tests</li>
            <li>agent reviews errors and warnings</li>
            <li>agent fixes issues</li>
            <li>repeat until tests pass</li>
          </ol>

          <p>
            <strong>results:</strong> code quality improved 3x. more importantly, the agent caught its own mistakes before users saw them.
          </p>

          <h3>reflection patterns in practice</h3>

          <p>
            i've seen reflection work well in:
          </p>

          <ul>
            <li><strong>content generation</strong> - draft, review tone and clarity, revise</li>
            <li><strong>code writing</strong> - generate, lint, test, fix</li>
            <li><strong>data analysis</strong> - produce results, validate calculations, correct errors</li>
            <li><strong>research synthesis</strong> - summarize findings, check for contradictions, refine conclusions</li>
          </ul>

          <h3>the reflection pitfall (i learned the hard way)</h3>

          <p>
            reflection isn't free. each iteration costs tokens and time.
          </p>

          <p>
            early version of my code agent got stuck in reflection loops—making minor tweaks 10-15 times before deciding it was "good enough." 
            users waited 2+ minutes for simple tasks.
          </p>

          <p>
            solution: <strong>set clear stopping criteria</strong>. either the output meets specific quality thresholds (tests pass, no linter errors) 
            or you hit a maximum iteration count. don't let agents philosophize endlessly about perfection.
          </p>

          <h2>pattern 2: planning (think before you act)</h2>

          <p>
            planning patterns make agents create a strategy before executing actions.
          </p>

          <p>
            the alternative? agents that jump straight to execution and then backtrack when they realize they're solving the wrong problem.
          </p>

          <h3>two approaches to planning</h3>

          <h4>1. plan-and-execute</h4>

          <p>
            as{' '}
            <a href="https://www.dataknobs.com/agent-ai/design-patterns/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
              described in agent design pattern research
            </a>
            , this approach has the agent create a full plan before execution, often using sub-agents or task chains.
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
            <p className="font-mono text-sm mb-0">
              analyze task → break into steps → create detailed plan → execute plan sequentially
            </p>
          </div>

          <p>
            <strong>when to use:</strong> complex, multi-step tasks where order matters
          </p>

          <p>
            example from last month: built an agent to migrate a codebase from javascript to typescript. 
            without planning, it started converting files randomly, breaking imports everywhere.
          </p>

          <p>
            with plan-and-execute:
          </p>

          <ol>
            <li>agent analyzed dependency graph</li>
            <li>created conversion order (leaf dependencies first)</li>
            <li>planned type definitions for shared utilities</li>
            <li>executed conversions in correct sequence</li>
          </ol>

          <p>
            <strong>result:</strong> zero broken imports. migration completed in 2 hours instead of 2 days of manual debugging.
          </p>

          <h4>2. ReAct (reason + act)</h4>

          <p>
            ReAct combines reasoning and action in a step-by-step loop. instead of planning everything upfront, 
            the agent reasons about the current state, takes one action, observes the result, then reasons again.
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
            <p className="font-mono text-sm mb-0">
              thought: what do i need to know? → action: search database → observation: found X → thought: now i should... → repeat
            </p>
          </div>

          <p>
            <strong>when to use:</strong> tasks where you need to adapt based on intermediate results
          </p>

          <p>
            built a customer support agent using ReAct:
          </p>

          <ol>
            <li><em>thought:</em> i need to look up this customer's order history</li>
            <li><em>action:</em> query orders database</li>
            <li><em>observation:</em> customer has 3 orders, most recent was delivered yesterday</li>
            <li><em>thought:</em> they're asking about a missing item, should check the specific order details</li>
            <li><em>action:</em> get order line items</li>
            <li><em>observation:</em> order contains the item they're asking about</li>
            <li><em>thought:</em> delivery was successful, this might be a packaging issue...</li>
          </ol>

          <p>
            ReAct shines when you can't predict what information you'll need until you see intermediate results.
          </p>

          <h3>planning vs. ReAct: which pattern when?</h3>

          <p>
            after building both types extensively:
          </p>

          <ul>
            <li>
              <strong>use plan-and-execute when:</strong>
              <ul>
                <li>task structure is clear upfront</li>
                <li>order of operations matters</li>
                <li>you can't afford trial-and-error</li>
                <li>example: code refactoring, data migrations, multi-step workflows</li>
              </ul>
            </li>
            <li>
              <strong>use ReAct when:</strong>
              <ul>
                <li>you need to adapt based on what you find</li>
                <li>information gathering is exploratory</li>
                <li>optimal path depends on intermediate results</li>
                <li>example: research tasks, customer support, debugging</li>
              </ul>
            </li>
          </ul>

          <h2>pattern 3: tool use (giving agents capabilities)</h2>

          <p>
            tool use patterns determine how agents interact with external systems, APIs, and functions.
          </p>

          <p>
            this sounds basic until you realize: <strong>tool design directly impacts agent reliability</strong>.
          </p>

          <h3>the tool selection problem</h3>

          <p>
            building a productivity agent last year, i made 23 different tools (createTask, updateTask, completeTask, deleteTask, etc.).
          </p>

          <p>
            agent got confused. kept choosing wrong tools. high latency from analyzing all options.
          </p>

          <p>
            refactored to 5 core tools with parameters. problem solved.
          </p>

          <h3>two approaches to tool use</h3>

          <h4>1. explicit tool calling</h4>

          <p>
            agent explicitly decides which tool to call and when. most common pattern. works well for:
          </p>

          <ul>
            <li>well-defined APIs</li>
            <li>operations with clear inputs/outputs</li>
            <li>scenarios where you need audit trails</li>
          </ul>

          <p>
            example: email agent with tools like <code>send_email(to, subject, body)</code>, <code>search_inbox(query)</code>, 
            <code>schedule_meeting(attendees, time)</code>
          </p>

          <h4>2. toolformer pattern</h4>

          <p>
            as{' '}
            <a href="https://www.dataknobs.com/agent-ai/design-patterns/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
              research on toolformer patterns
            </a>
            {' '}shows, this trains the model to decide when and which tool to call during its reasoning process.
          </p>

          <p>
            the agent learns:
          </p>
          <ul>
            <li>when it needs external information</li>
            <li>which tool will provide that information</li>
            <li>how to interpret tool results</li>
          </ul>

          <p>
            more flexible but requires more sophisticated training/prompting.
          </p>

          <h3>practical tool design principles</h3>

          <p>
            after building dozens of agents with different tool architectures:
          </p>

          <ol>
            <li>
              <strong>fewer tools, richer parameters</strong>
              <p>
                instead of: <code>getUserById</code>, <code>getUserByEmail</code>, <code>getUserByName</code>
              </p>
              <p>
                use: <code>getUser(id?, email?, name?)</code>
              </p>
            </li>
            <li>
              <strong>clear, descriptive tool names</strong>
              <p>
                bad: <code>fetch_data()</code>
              </p>
              <p>
                good: <code>search_customer_orders(customer_id, date_range)</code>
              </p>
            </li>
            <li>
              <strong>include examples in tool descriptions</strong>
              <p>
                agents perform significantly better when tool descriptions include usage examples. 
                show the agent exactly how to call each tool.
              </p>
            </li>
            <li>
              <strong>return structured, parseable results</strong>
              <p>
                returning clean JSON beats returning formatted strings. makes it easier for agents to extract specific fields.
              </p>
            </li>
          </ol>

          <h3>the tool use mistake that cost me a week</h3>

          <p>
            built an agent with a <code>search_documents</code> tool that could return hundreds of results.
          </p>

          <p>
            agent would call it, get 200 documents back, hit context limits, crash.
          </p>

          <p>
            solution: tools should <strong>return summaries, not everything</strong>. give the agent just enough information to decide 
            if it needs to drill deeper. then provide a <code>get_document_details</code> tool for specific documents.
          </p>

          <p>
            progressive disclosure. works for users, works for agents.
          </p>

          <h2>pattern 4: multi-agent orchestration (when one agent isn't enough)</h2>

          <p>
            multi-agent patterns split tasks across specialized agents that coordinate to solve complex problems.
          </p>

          <p>
            powerful. also expensive and complex.
          </p>

          <h3>when to actually use multi-agent</h3>

          <p>
            i see people jumping to multi-agent way too early. you don't need multiple agents just because your task has multiple steps.
          </p>

          <p>
            use multi-agent when:
          </p>
          <ul>
            <li>different parts of the task require genuinely different capabilities</li>
            <li>you benefit from parallel processing</li>
            <li>context separation improves quality</li>
            <li>specialized expertise matters</li>
          </ul>

          <h2>the orchestration design framework</h2>

          <p>
            according to{' '}
            <a href="https://www.leapfrogger.ai/blog/agentic-design-patterns" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
              research on agentic orchestration patterns
            </a>
            , there are four fundamental ways to coordinate multiple agents. choosing the right orchestration pattern 
            determines whether your multi-agent system is elegant or a tangled mess.
          </p>

          <h3>1. sequential orchestration</h3>

          <p>
            agents process tasks in a linear sequence, each building on the previous agent's output.
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
            <p className="font-mono text-sm mb-0">
              agent A → agent B → agent C → final output
            </p>
          </div>

          <p>
            <strong>when to use:</strong> workflows with natural progression where each step depends on the previous one
          </p>

          <p>
            example: content creation pipeline
          </p>
          <ul>
            <li>research agent: gathers information and sources</li>
            <li>writing agent: creates draft based on research</li>
            <li>editing agent: refines tone and clarity</li>
            <li>fact-checking agent: validates all claims</li>
          </ul>

          <p>
            <strong>pros:</strong> simple to understand and debug, clear dependencies, easy error isolation
          </p>
          <p>
            <strong>cons:</strong> can be slow (no parallelism), bottleneck if one agent is slow
          </p>

          <h3>2. parallel orchestration</h3>

          <p>
            multiple agents work simultaneously on different aspects of a problem, results combined at the end.
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
            <p className="font-mono text-sm mb-0">
              agent A ┐<br />
              agent B ├→ aggregator → final output<br />
              agent C ┘
            </p>
          </div>

          <p>
            <strong>when to use:</strong> tasks decomposable into independent sub-tasks
          </p>

          <p>
            example: comprehensive market analysis
          </p>
          <ul>
            <li>agent 1: analyzes competitor pricing</li>
            <li>agent 2: reviews customer sentiment</li>
            <li>agent 3: examines market trends</li>
            <li>aggregator: synthesizes all findings into unified report</li>
          </ul>

          <p>
            built exactly this last quarter. processing time dropped from 45 minutes (sequential) to 8 minutes (parallel).
          </p>

          <p>
            <strong>pros:</strong> fast execution, scales horizontally, efficient use of resources
          </p>
          <p>
            <strong>cons:</strong> coordination complexity, potential for inconsistent outputs, harder to debug
          </p>

          <h3>3. hierarchical orchestration (supervisor-worker)</h3>

          <p>
            higher-level supervisor agent coordinates and directs lower-level worker agents in a tree structure.
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
            <pre className="text-sm overflow-x-auto">
{`supervisor
  ├── research agent
  ├── writing agent
  ├── editing agent
  └── fact-checking agent`}
            </pre>
          </div>

          <p>
            <strong>when to use:</strong> complex problems requiring both strategic planning and detailed execution
          </p>

          <p>
            built a content creation system using this pattern:
          </p>

          <ul>
            <li>supervisor analyzes topic and creates execution plan</li>
            <li>assigns research to specialized research agent</li>
            <li>passes research to writing agent with specific requirements</li>
            <li>delegates editing to editing agent</li>
            <li>coordinates fact-checking in parallel</li>
            <li>synthesizes all outputs into final content</li>
          </ul>

          <p>
            the supervisor makes high-level decisions (what needs to be done, in what order, with what constraints) 
            while workers focus on execution.
          </p>

          <p>
            <strong>result:</strong> output quality improved 2.5x compared to single-agent approach
          </p>

          <p>
            <strong>pros:</strong> clear responsibilities, easy to add specialized agents, supervisor optimizes workflow
          </p>
          <p>
            <strong>cons:</strong> supervisor becomes bottleneck, added coordination overhead, can be overkill for simple tasks
          </p>

          <h3>4. network-based orchestration</h3>

          <p>
            agents communicate in flexible, dynamic networks where the interaction structure adapts to the task.
          </p>

          <p>
            as{' '}
            <a href="https://www.leapfrogger.ai/blog/agentic-design-patterns" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
              research on orchestration patterns shows
            </a>
            , this is the most flexible pattern—agents dynamically determine who to collaborate with based on the problem.
          </p>

          <p>
            <strong>when to use:</strong> complex, unpredictable problems where optimal collaboration can't be predetermined
          </p>

          <p>
            example: multi-agent research system
          </p>
          <ul>
            <li>research agents explore different information sources</li>
            <li>when agent A finds relevant info, it shares with agents B and C</li>
            <li>agents dynamically form sub-groups around emerging insights</li>
            <li>collaboration patterns evolve as understanding deepens</li>
          </ul>

          <p>
            this is powerful but complex. only use when the problem genuinely benefits from dynamic collaboration.
          </p>

          <p>
            <strong>pros:</strong> highly adaptive, can handle complex/unknown problems, emergent intelligence
          </p>
          <p>
            <strong>cons:</strong> hardest to design and debug, unpredictable behavior, requires sophisticated coordination
          </p>

          <h3>choosing the right orchestration pattern</h3>

          <p>
            quick decision guide:
          </p>

          <ul>
            <li><strong>sequential:</strong> clear step-by-step workflow, each step depends on previous</li>
            <li><strong>parallel:</strong> independent sub-tasks that can run simultaneously</li>
            <li><strong>hierarchical:</strong> need central planning and specialized workers</li>
            <li><strong>network:</strong> complex problems where best collaboration emerges dynamically</li>
          </ul>

          <p>
            in my experience: 70% of multi-agent systems use sequential or parallel orchestration. 
            only use hierarchical or network when you have clear evidence simpler patterns won't work.
          </p>

          <h3>the multi-agent cost problem</h3>

          <p>
            here's what nobody tells you: multi-agent is expensive.
          </p>

          <p>
            as i mentioned in my{' '}
            <Link href="/blog/context-engineering-agents-practical-guide" className="text-purple-600 hover:text-purple-700 underline">
              context engineering guide
            </Link>
            , Anthropic reported that their multi-agent researcher used <strong>up to 15× more tokens</strong> than single-agent approaches.
          </p>

          <p>
            my experience mirrors this. expect 10-15x token usage and 3-5x latency.
          </p>

          <p>
            multi-agent is worth it when:
          </p>
          <ul>
            <li>quality improvements justify the cost</li>
            <li>parallel processing provides meaningful speedup</li>
            <li>specialization actually matters</li>
          </ul>

          <p>
            but start with a single agent. add more agents only when you have clear evidence it'll help.
          </p>

          <h2>pattern 5: memory-augmented agents (learning from the past)</h2>

          <p>
            memory-augmented patterns give agents persistent context across sessions, enabling personalization and learning over time.
          </p>

          <p>
            this is the difference between an agent that forgets everything after each conversation 
            and one that actually remembers you, your preferences, and past interactions.
          </p>

          <h3>why memory matters for agents</h3>

          <p>
            most agents are stateless—they start fresh every time. this works for simple tasks but fails for:
          </p>

          <ul>
            <li>personalized assistance that adapts to user preferences</li>
            <li>long-running projects that span multiple sessions</li>
            <li>learning from past successes and failures</li>
            <li>building context about recurring tasks</li>
          </ul>

          <p>
            as covered in my{' '}
            <Link href="/blog/langgraph-state-management-memory-guide" className="text-purple-600 hover:text-purple-700 underline">
              LangGraph memory guide
            </Link>
            , there are three types of memory that matter:
          </p>

          <h3>three types of agent memory</h3>

          <h4>1. episodic memory (remembering what happened)</h4>

          <p>
            stores specific past interactions and experiences.
          </p>

          <p>
            example: customer support agent that remembers:
          </p>
          <ul>
            <li>"this customer had a shipping issue last month"</li>
            <li>"we already tried solution A, it didn't work"</li>
            <li>"user prefers email over phone contact"</li>
          </ul>

          <p>
            <strong>implementation:</strong> store conversation summaries, key events, and outcomes in a vector database. 
            retrieve relevant episodes when similar situations arise.
          </p>

          <h4>2. semantic memory (remembering facts and knowledge)</h4>

          <p>
            stores general knowledge and facts learned over time.
          </p>

          <p>
            example: coding agent that remembers:
          </p>
          <ul>
            <li>"this project uses React 18 with TypeScript"</li>
            <li>"team prefers functional components over class components"</li>
            <li>"API endpoints are documented in /docs/api.md"</li>
          </ul>

          <p>
            <strong>implementation:</strong> maintain a knowledge base of project facts, conventions, and learned information. 
            update as new information is discovered.
          </p>

          <h4>3. procedural memory (remembering how to do things)</h4>

          <p>
            stores learned procedures, workflows, and successful patterns.
          </p>

          <p>
            example: writing agent that remembers:
          </p>
          <ul>
            <li>"user always wants headlines in sentence case"</li>
            <li>"blog posts need 3 examples minimum"</li>
            <li>"avoid jargon, explain technical terms"</li>
          </ul>

          <p>
            <strong>implementation:</strong> extract successful patterns from past interactions. 
            codify user preferences and proven workflows into reusable procedures.
          </p>

          <h3>memory retrieval strategies</h3>

          <p>
            storing memory is easy. retrieving the right memories at the right time is the hard part.
          </p>

          <h4>recency-based retrieval</h4>

          <p>
            prioritize recent memories. simple but effective for most use cases.
          </p>

          <p>
            "what did we discuss in the last 3 conversations?"
          </p>

          <h4>relevance-based retrieval</h4>

          <p>
            use semantic search to find memories similar to current context.
          </p>

          <p>
            "find past conversations about shipping issues"
          </p>

          <h4>importance-based retrieval</h4>

          <p>
            score and prioritize memories by importance. surface critical information first.
          </p>

          <p>
            "user explicitly stated this is a hard requirement" → high importance
          </p>

          <h4>hybrid retrieval</h4>

          <p>
            combine multiple strategies. most production systems use this approach.
          </p>

          <p>
            example retrieval logic:
          </p>
          <ol>
            <li>always include last 2 conversations (recency)</li>
            <li>search for semantically similar past interactions (relevance)</li>
            <li>surface any high-importance facts or preferences (importance)</li>
            <li>combine and rank by composite score</li>
          </ol>

          <h3>real example: personalized email agent</h3>

          <p>
            built an email drafting agent with memory last quarter. here's what it remembers:
          </p>

          <p>
            <strong>episodic memory:</strong>
          </p>
          <ul>
            <li>past email threads with each contact</li>
            <li>previous meeting notes and outcomes</li>
            <li>follow-up commitments and deadlines</li>
          </ul>

          <p>
            <strong>semantic memory:</strong>
          </p>
          <ul>
            <li>relationship context (client, colleague, vendor)</li>
            <li>project details and current status</li>
            <li>organizational knowledge (team structure, processes)</li>
          </ul>

          <p>
            <strong>procedural memory:</strong>
          </p>
          <ul>
            <li>user's writing style and tone preferences</li>
            <li>email structure preferences (greeting, sign-off)</li>
            <li>which types of emails need which level of formality</li>
          </ul>

          <p>
            <strong>result:</strong> drafts now match my writing style 90%+ of the time. 
            agent remembers context from months ago without me having to explain it.
          </p>

          <h3>memory management challenges</h3>

          <p>
            building memory-augmented agents isn't just about storing everything. you need to manage:
          </p>

          <h4>memory decay</h4>

          <p>
            old information becomes stale. should an agent remember a preference from 2 years ago?
          </p>

          <p>
            <strong>solution:</strong> implement decay scores. recent memories have higher weight. 
            periodically archive or forget low-relevance old memories.
          </p>

          <h4>memory conflicts</h4>

          <p>
            what if stored memories contradict each other or current information?
          </p>

          <p>
            <strong>solution:</strong> timestamp all memories. when conflicts arise, prefer recent information. 
            flag contradictions for user clarification.
          </p>

          <h4>privacy and security</h4>

          <p>
            storing user data creates privacy obligations and security risks.
          </p>

          <p>
            <strong>solution:</strong> implement proper data governance:
          </p>
          <ul>
            <li>clear retention policies</li>
            <li>user controls for viewing/deleting memories</li>
            <li>encryption for sensitive information</li>
            <li>compliance with data protection regulations</li>
          </ul>

          <h4>memory retrieval cost</h4>

          <p>
            searching large memory stores adds latency and token costs.
          </p>

          <p>
            <strong>solution:</strong> implement efficient indexing (vector databases), limit retrieval to top-k most relevant memories, 
            cache frequently accessed memories.
          </p>

          <h3>when to use memory-augmented patterns</h3>

          <p>
            add persistent memory when:
          </p>

          <ul>
            <li><strong>personalization matters</strong> - agent needs to adapt to individual users</li>
            <li><strong>long-term context is valuable</strong> - tasks span multiple sessions</li>
            <li><strong>learning improves performance</strong> - agent gets better from past experience</li>
            <li><strong>consistency is important</strong> - need to maintain coherent behavior over time</li>
          </ul>

          <p>
            skip memory when:
          </p>

          <ul>
            <li>tasks are completely independent</li>
            <li>privacy concerns outweigh benefits</li>
            <li>single-session context is sufficient</li>
            <li>added complexity isn't justified by use case</li>
          </ul>

          <p>
            in my experience: <strong>memory transforms good agents into great ones</strong>—but only when the use case actually benefits from persistent context.
          </p>

          <h2>combining patterns (where it gets interesting)</h2>

          <p>
            the real magic happens when you combine these patterns.
          </p>

          <h3>example: production research agent</h3>

          <p>
            built a research agent that combines multiple patterns:
          </p>

          <ul>
            <li><strong>planning (ReAct):</strong> adapts research strategy based on findings</li>
            <li><strong>tool use:</strong> searches databases, web, internal docs</li>
            <li><strong>multi-agent:</strong> parallel research across different sources</li>
            <li><strong>reflection:</strong> validates findings and checks for contradictions</li>
            <li><strong>memory:</strong> remembers previous research topics and key findings to avoid redundant work</li>
          </ul>

          <p>
            the flow:
          </p>

          <ol>
            <li>receives research question</li>
            <li>uses ReAct to explore information sources</li>
            <li>spins up parallel agents for deep dives into promising areas</li>
            <li>each agent uses tools to gather specific information</li>
            <li>supervisor synthesizes findings</li>
            <li>reflection step validates conclusions and checks sources</li>
            <li>final report generation</li>
          </ol>

          <p>
            <strong>results:</strong> produces research reports in 15 minutes that previously took analysts 4-6 hours
          </p>

          <h3>example: customer support automation</h3>

          <p>
            different pattern combination:
          </p>

          <ul>
            <li><strong>planning (ReAct):</strong> dynamically gathers customer context</li>
            <li><strong>tool use:</strong> accesses CRM, order systems, knowledge base</li>
            <li><strong>reflection:</strong> reviews responses for tone and accuracy</li>
            <li><strong>memory:</strong> remembers customer history and previous interactions</li>
            <li><strong>single agent:</strong> no multi-agent overhead needed</li>
          </ul>

          <p>
            kept it simple. handles 300+ tickets daily with 85% resolution rate without human intervention. 
            memory of past interactions reduces repeated questions and improves personalization.
          </p>

          <h2>the pattern selection framework</h2>

          <p>
            according to{' '}
            <a href="https://www.analyticsvidhya.com/blog/2025/06/agentic-design-pattern-for-your-task/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
              research on pattern selection frameworks
            </a>
            , choosing the right agentic design pattern depends on understanding your task characteristics. 
            here's the structured approach i use:
          </p>

          <h3>step 1: analyze task characteristics</h3>

          <p>
            before choosing a pattern, answer these questions:
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
            <ol className="text-sm space-y-2">
              <li><strong>complexity:</strong> simple → single-step vs complex → multi-step?</li>
              <li><strong>predictability:</strong> deterministic path vs exploratory discovery?</li>
              <li><strong>dependencies:</strong> sequential steps vs independent sub-tasks?</li>
              <li><strong>expertise:</strong> single domain vs multiple specialized domains?</li>
              <li><strong>quality needs:</strong> first-pass acceptable vs iteration required?</li>
              <li><strong>time constraints:</strong> can wait for sequential vs need parallel processing?</li>
            </ol>
          </div>

          <h3>step 2: match task to pattern</h3>

          <p>
            based on your answers, here's the decision tree:
          </p>

          <h4>for single-step or simple tasks:</h4>
          <ul>
            <li><strong>direct tool use</strong> - if it's just calling an API or executing a function</li>
            <li><strong>ReAct + reflection</strong> - if you need some reasoning and quality checking</li>
          </ul>

          <h4>for sequential decision-making tasks:</h4>
          <ul>
            <li><strong>ReAct pattern</strong> - when you need to adapt based on intermediate results</li>
            <li><strong>example:</strong> research, debugging, customer support, data exploration</li>
          </ul>

          <h4>for structured, multi-step tasks:</h4>
          <ul>
            <li><strong>plan-and-execute</strong> - when you can map out steps upfront</li>
            <li><strong>sequential orchestration</strong> - if steps depend on each other</li>
            <li><strong>example:</strong> code migrations, data pipelines, content workflows</li>
          </ul>

          <h4>for complex, multi-domain tasks:</h4>
          <ul>
            <li><strong>parallel orchestration</strong> - if sub-tasks are independent</li>
            <li><strong>hierarchical orchestration</strong> - if you need central coordination</li>
            <li><strong>example:</strong> market analysis, comprehensive reports, system audits</li>
          </ul>

          <h4>for unpredictable, evolving tasks:</h4>
          <ul>
            <li><strong>network orchestration</strong> - when collaboration patterns need to emerge</li>
            <li><strong>example:</strong> open-ended research, creative problem-solving</li>
          </ul>

          <h4>for personalized, long-running tasks:</h4>
          <ul>
            <li><strong>memory-augmented agents</strong> - when agents need to learn and adapt over time</li>
            <li><strong>example:</strong> personal assistants, custom support, ongoing projects</li>
          </ul>

          <h3>step 3: add reflection when quality matters</h3>

          <p>
            reflection improves output quality across all patterns. add it when:
          </p>

          <ul>
            <li>first-pass outputs often need refinement</li>
            <li>you have clear quality criteria to check against</li>
            <li>the cost of iteration is less than cost of poor output</li>
          </ul>

          <h3>practical decision framework</h3>

          <p>
            after two years of building agents, here's my simplified approach:
          </p>

          <h4>start here: single agent with ReAct + reflection</h4>

          <p>
            this handles 70% of use cases. seriously.
          </p>

          <ul>
            <li>ReAct for dynamic information gathering</li>
            <li>basic tool use for necessary capabilities</li>
            <li>reflection for quality improvement</li>
          </ul>

          <p>
            build this first. only add complexity if you have specific evidence it'll help.
          </p>

          <h4>add memory when:</h4>

          <ul>
            <li>personalization improves user experience</li>
            <li>agents need to learn from past interactions</li>
            <li>tasks span multiple sessions</li>
            <li>consistency over time matters</li>
          </ul>

          <h4>upgrade to plan-and-execute when:</h4>

          <ul>
            <li>tasks have clear multi-step structure</li>
            <li>order of operations matters</li>
            <li>you need to coordinate multiple actions upfront</li>
          </ul>

          <h4>upgrade to multi-agent orchestration when:</h4>

          <ul>
            <li>parallel processing provides measurable speedup</li>
            <li>specialized expertise significantly improves quality</li>
            <li>context separation is necessary for performance</li>
            <li>cost increase (10-15x) is justified by results</li>
          </ul>

          <h3>anti-patterns to avoid</h3>

          <p>
            patterns i see people get wrong:
          </p>

          <ul>
            <li><strong>using plan-and-execute for exploratory tasks</strong> - makes agents rigid when they need flexibility</li>
            <li><strong>multi-agent for simple linear workflows</strong> - adds complexity without benefit</li>
            <li><strong>reflection without clear quality criteria</strong> - endless loops without improvement</li>
            <li><strong>network orchestration for predictable problems</strong> - complexity that provides no value</li>
          </ul>

          <p>
            match the pattern to the problem. not the other way around.
          </p>

          <h2>common mistakes (that i definitely didn't make... multiple times)</h2>

          <h3>1. overengineering from the start</h3>

          <p>
            my first production agent had:
          </p>
          <ul>
            <li>sophisticated planning system</li>
            <li>five specialized sub-agents</li>
            <li>complex memory architecture</li>
            <li>elaborate reflection loops</li>
          </ul>

          <p>
            it was slow, expensive, and constantly broke in weird ways.
          </p>

          <p>
            rewrote it as a simple ReAct agent with reflection. worked better, cost 1/10th as much.
          </p>

          <p className="italic">
            start simple. add complexity only when you have evidence it'll help.
          </p>

          <h3>2. wrong pattern for the task</h3>

          <p>
            used plan-and-execute for a customer support agent. made it rigid and slow.
          </p>

          <p>
            customer questions are dynamic. you can't predict what information you'll need upfront. 
            ReAct was the obvious better choice.
          </p>

          <p className="italic">
            match the pattern to task characteristics, not to what sounds impressive.
          </p>

          <h3>3. not measuring pattern effectiveness</h3>

          <p>
            added reflection to an agent. assumed it helped. never measured.
          </p>

          <p>
            turns out: for that specific use case, reflection added latency but didn't improve quality. 
            the first-pass outputs were already good enough.
          </p>

          <p className="italic">
            measure everything. patterns should be justified by data, not intuition.
          </p>

          <h2>practical implementation advice</h2>

          <h3>1. prototype with minimal patterns</h3>

          <p>
            start with the simplest possible implementation:
          </p>
          <ul>
            <li>single agent</li>
            <li>basic ReAct loop</li>
            <li>2-3 essential tools</li>
            <li>no reflection initially</li>
          </ul>

          <p>
            get this working first. then add patterns based on where it fails.
          </p>

          <h3>2. measure pattern impact</h3>

          <p>
            track:
          </p>
          <ul>
            <li>task success rate</li>
            <li>output quality scores</li>
            <li>token usage</li>
            <li>latency</li>
            <li>cost per task</li>
          </ul>

          <p>
            add patterns incrementally. measure impact each time.
          </p>

          <h3>3. build pattern libraries</h3>

          <p>
            create reusable implementations of each pattern. makes it faster to try different combinations.
          </p>

          <p>
            my current setup has modular components for:
          </p>
          <ul>
            <li>ReAct loop implementation</li>
            <li>reflection wrapper</li>
            <li>planning system</li>
            <li>multi-agent coordination</li>
          </ul>

          <p>
            can compose these into new agents quickly.
          </p>

          <h3>4. test with real data</h3>

          <p>
            synthetic test data lies. it's too clean, too well-formatted.
          </p>

          <p>
            patterns that work perfectly in testing often fail on real data. 
            test with actual production data as early as possible.
          </p>

          <h2>key takeaways</h2>

          <ol className="space-y-2">
            <li><strong>patterns beat frameworks</strong> - understanding core patterns matters more than picking the "right" framework</li>
            <li><strong>five core patterns</strong> - reflection, planning (ReAct vs plan-and-execute), tool use, multi-agent orchestration, and memory-augmented agents</li>
            <li><strong>orchestration design framework</strong> - sequential, parallel, hierarchical, and network patterns for multi-agent coordination</li>
            <li><strong>pattern selection framework</strong> - analyze task characteristics (complexity, predictability, dependencies) to match the right pattern</li>
            <li><strong>start simple</strong> - 70% of use cases need just ReAct + reflection. add complexity only when justified by data</li>
            <li><strong>reflection improves quality</strong> - agents that critique their own work are fundamentally more reliable</li>
            <li><strong>planning depends on task type</strong> - use plan-and-execute for structured tasks, ReAct for dynamic exploration</li>
            <li><strong>tool design matters</strong> - fewer, well-designed tools beat many specialized tools</li>
            <li><strong>memory transforms agents</strong> - persistent context enables personalization and learning, but adds complexity</li>
            <li><strong>hierarchical orchestration</strong> - layered abstraction helps manage complexity at scale through supervisor-worker patterns</li>
            <li><strong>multi-agent is expensive</strong> - expect 10-15x cost increase. only use when parallel processing or specialization justifies it</li>
            <li><strong>orchestration patterns scale differently</strong> - sequential is simplest, network is most complex. choose based on need</li>
            <li><strong>combine patterns thoughtfully</strong> - the real power comes from combining patterns appropriately for your task</li>
            <li><strong>measure everything</strong> - patterns should be justified by data, not intuition or what sounds impressive</li>
          </ol>

          <h2>resources worth reading</h2>

          <ul>
            <li>
              <a href="https://www.leapfrogger.ai/blog/agentic-design-patterns" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
                Leapfrogger's orchestration design patterns
              </a>
              {' '}- detailed guide to sequential, parallel, hierarchical, and network orchestration
            </li>
            <li>
              <a href="https://www.analyticsvidhya.com/blog/2025/06/agentic-design-pattern-for-your-task/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
                Analytics Vidhya's pattern selection framework
              </a>
              {' '}- task-based approach to choosing agentic patterns
            </li>
            <li>
              <a href="https://hypermode.com/blog/agentic-design-patterns-ai-agents" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
                Hypermode's guide to agentic design patterns
              </a>
              {' '}- comprehensive overview of core patterns and implementation
            </li>
            <li>
              <a href="https://www.dataknobs.com/agent-ai/design-patterns/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
                DataKnobs agent AI design patterns
              </a>
              {' '}- detailed breakdown of ReAct, planning, and tool use patterns
            </li>
            <li>
              <a href="https://agentic-design.ai/patterns/multi-agent" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
                Multi-agent coordination patterns
              </a>
              {' '}- practical guide to multi-agent architectures
            </li>
            <li>
              <Link href="/blog/ai-agents-complete-guide" className="text-purple-600 hover:text-purple-700 underline">
                AI agents: the complete guide
              </Link>
              {' '}- foundational concepts and architecture
            </li>
            <li>
              <Link href="/blog/context-engineering-agents-practical-guide" className="text-purple-600 hover:text-purple-700 underline">
                context engineering for agents
              </Link>
              {' '}- managing context in production agents
            </li>
            <li>
              <Link href="/blog/claude-agent-sdk-building-agents-that-work" className="text-purple-600 hover:text-purple-700 underline">
                building agents with claude agent SDK
              </Link>
              {' '}- practical implementation with a specific framework
            </li>
          </ul>

          <hr className="my-8 border-gray-300 dark:border-gray-600" />

          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 dark:border-purple-500 p-6 my-8">
            <p className="text-purple-800 dark:text-purple-200 font-medium">
              <strong>struggling with agent architecture decisions?</strong> i help companies choose and implement the right 
              agentic design patterns for their specific use cases. {' '}
              <a href="https://cal.com/aankit/explore-synergies" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 underline">
                let's discuss your agent system
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
                ai strategy & engineering leadership consultant. helping companies design and implement agent systems 
                using proven design patterns that balance performance, reliability, and cost.
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
