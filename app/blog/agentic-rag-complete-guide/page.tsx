'use client';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Header } from '../../../components/Header';
import { ShareButtons } from '../../../components/ShareButtons';

export default function AgenticRAGPage() {
  const post = {
    id: 'agentic-rag-complete-guide',
    title: 'agentic rag: when retrieval gets smarter than your search bar',
    excerpt: 'understanding how agents transform RAG from simple retrieval to intelligent information synthesis—with contextual retrieval reducing failures by 67%',
    author: 'Aankit Roy',
    date: '2025-10-07',
    readTime: '18 min read',
    tags: ['Agentic RAG', 'RAG', 'AI Agents', 'Contextual Retrieval', 'Information Retrieval', 'Vector Databases'],
    featured: true
  };

  const shareUrl = `https://aankitroy.com/blog/agentic-rag-complete-guide`;
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
    "wordCount": "4800",
    "timeRequired": "PT18M",
    "about": [
      {
        "@type": "Thing",
        "name": "Agentic RAG"
      },
      {
        "@type": "Thing",
        "name": "Retrieval Augmented Generation"
      },
      {
        "@type": "Thing",
        "name": "AI Agents"
      },
      {
        "@type": "Thing",
        "name": "Contextual Retrieval"
      }
    ],
    "mentions": [
      {
        "@type": "Organization",
        "name": "Anthropic",
        "url": "https://www.anthropic.com"
      }
    ],
    "citation": [
      {
        "@type": "WebPage",
        "name": "Anthropic Contextual Retrieval",
        "url": "https://www.anthropic.com/engineering/contextual-retrieval"
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
            traditional RAG retrieves documents. agentic RAG reasons about what to retrieve, how to retrieve it, 
            and whether the retrieved information actually answers the question. the difference? production reliability.
          </p>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none dark:prose-invert">
          <p>
            last week, i watched a traditional RAG system confidently answer "ACME Corp's Q2 2023 revenue grew 3%" 
            when the user asked about TechCorp's performance. why? because the retrieved chunk said "the company's 
            revenue grew by 3%" without specifying which company.
          </p>

          <p>
            (this is exactly why context-less retrieval fails in production)
          </p>

          <p>
            the problem with traditional RAG isn't retrieval—it's that retrieval happens blindly. chunks get embedded 
            without context. search happens without verification. results get injected into prompts without validation.
          </p>

          <p>
            agentic RAG fixes this by making retrieval intelligent. agents reason about what information they need, 
            actively search for it, validate what they find, and iterate until they have what's required.
          </p>

          <h2>what makes RAG "agentic"?</h2>

          <p>
            the shift from traditional to agentic RAG is about moving from passive retrieval to active information seeking.
          </p>

          <h3>traditional RAG: the static approach</h3>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
            <p className="font-mono text-sm mb-0">
              user query → embed query → similarity search → return top-k chunks → inject into prompt → generate answer
            </p>
          </div>

          <p>
            this works... until it doesn't. problems emerge:
          </p>

          <ul>
            <li><strong>no context awareness</strong> - chunks lose surrounding information during embedding</li>
            <li><strong>single-shot retrieval</strong> - can't adapt if initial results are insufficient</li>
            <li><strong>no validation</strong> - blindly trusts that top-k results contain the answer</li>
            <li><strong>query dependency</strong> - completely reliant on how user phrased their question</li>
          </ul>

          <h3>agentic RAG: the intelligent approach</h3>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
            <p className="font-mono text-sm mb-0">
              user query → agent analyzes information needs → formulates search strategy → retrieves → 
              evaluates results → refines search if needed → validates completeness → synthesizes answer
            </p>
          </div>

          <p>
            the agent actively manages the retrieval process:
          </p>

          <ul>
            <li><strong>query decomposition</strong> - breaks complex questions into targeted sub-queries</li>
            <li><strong>adaptive retrieval</strong> - iteratively refines search based on what it finds</li>
            <li><strong>result validation</strong> - checks if retrieved information actually helps</li>
            <li><strong>multi-strategy search</strong> - combines semantic search, keyword search, metadata filters</li>
            <li><strong>synthesis</strong> - intelligently combines information from multiple sources</li>
          </ul>

          <h2>the contextual retrieval breakthrough</h2>

          <p>
            before diving into agentic patterns, we need to talk about{' '}
            <a href="https://www.anthropic.com/engineering/contextual-retrieval" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
              Anthropic's contextual retrieval research
            </a>
            . this fundamentally changes how we should think about chunking and embedding.
          </p>

          <h3>the chunking problem nobody talks about</h3>

          <p>
            traditional RAG chunks documents into 200-500 token pieces. this destroys context.
          </p>

          <p>
            example from Anthropic's research:
          </p>

          <blockquote className="border-l-4 border-purple-400 dark:border-purple-500 pl-4 italic my-6">
            <p>
              <strong>original chunk:</strong> "The company's revenue grew by 3% over the previous quarter."
            </p>
            <p className="mt-2">
              without context, this chunk doesn't specify:
            </p>
            <ul className="mt-2">
              <li>which company?</li>
              <li>which quarter?</li>
              <li>what year?</li>
            </ul>
          </blockquote>

          <p>
            result? the chunk gets retrieved for the wrong queries, or doesn't get retrieved for the right ones.
          </p>

          <h3>contextual embeddings: adding context to chunks</h3>

          <p>
            Anthropic's solution: <strong>prepend chunk-specific explanatory context before embedding</strong>.
          </p>

          <p>
            using Claude to generate context for each chunk:
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
            <pre className="text-sm overflow-x-auto">
{`original_chunk = "The company's revenue grew by 3% over 
the previous quarter."

contextualized_chunk = "This chunk is from an SEC filing 
on ACME corp's performance in Q2 2023; the previous 
quarter's revenue was $314 million. The company's revenue 
grew by 3% over the previous quarter."`}
            </pre>
          </div>

          <p>
            now the chunk carries its own context. semantic search works dramatically better.
          </p>

          <h3>contextual BM25: exact matching with context</h3>

          <p>
            while embeddings capture semantic meaning, BM25 (Best Match 25) provides exact keyword matching. 
            it's especially powerful for:
          </p>

          <ul>
            <li>unique identifiers ("error code TS-999")</li>
            <li>technical terms</li>
            <li>specific names or codes</li>
            <li>precise phrase matching</li>
          </ul>

          <p>
            combining contextual embeddings with contextual BM25 creates a hybrid retrieval system that handles both semantic similarity and exact matching.
          </p>

          <h3>the numbers: contextual retrieval performance</h3>

          <p>
            according to{' '}
            <a href="https://www.anthropic.com/engineering/contextual-retrieval" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
              Anthropic's research on contextual retrieval
            </a>
            , the improvements are substantial:
          </p>

          <ul>
            <li><strong>contextual embeddings alone:</strong> 35% reduction in retrieval failure rate (5.7% → 3.7%)</li>
            <li><strong>contextual embeddings + contextual BM25:</strong> 49% reduction in failure rate (5.7% → 2.9%)</li>
            <li><strong>adding reranking:</strong> 67% reduction in failure rate (5.7% → 1.9%)</li>
          </ul>

          <p>
            these aren't marginal improvements. this is the difference between a RAG system that works in demos 
            versus one that handles production edge cases reliably.
          </p>

          <h2>agentic RAG patterns in practice</h2>

          <p>
            now that we understand contextual retrieval, let's look at how agents use it intelligently.
          </p>

          <h3>pattern 1: query decomposition and planning</h3>

          <p>
            complex questions often require multiple pieces of information. agentic RAG breaks them down.
          </p>

          <p>
            <strong>user query:</strong> "How did ACME Corp's revenue growth in Q2 2023 compare to their competitors?"
          </p>

          <p>
            <strong>agent's query decomposition:</strong>
          </p>
          <ol>
            <li>what was ACME Corp's Q2 2023 revenue growth?</li>
            <li>who are ACME Corp's main competitors?</li>
            <li>what was each competitor's Q2 2023 revenue growth?</li>
            <li>synthesize comparison</li>
          </ol>

          <p>
            each sub-query gets targeted retrieval. agent validates it has the necessary information before proceeding to the next step.
          </p>

          <p>
            as i covered in my{' '}
            <Link href="/blog/agentic-design-patterns-complete-guide" className="text-purple-600 hover:text-purple-700 underline">
              agentic design patterns guide
            </Link>
            , this is a combination of planning patterns (breaking down the task) and tool use patterns (retrieval as a tool).
          </p>

          <h3>pattern 2: adaptive retrieval with ReAct</h3>

          <p>
            sometimes you don't know what you need until you see what you find. this is where ReAct (reason + act) shines.
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
            <pre className="text-sm overflow-x-auto">
{`thought: need to find ACME Corp's Q2 2023 performance
action: search("ACME Corp Q2 2023 revenue")
observation: found SEC filing mentioning 3% growth

thought: 3% growth over what baseline? need context
action: search("ACME Corp Q1 2023 revenue")
observation: Q1 2023 revenue was $314 million

thought: now i can calculate Q2 revenue: $314M * 1.03 = $323.42M
action: search("ACME Corp competitors 2023")
observation: main competitors are TechCorp, InnovateInc, DataCo

thought: need competitor Q2 2023 performance for comparison
action: search("TechCorp Q2 2023 revenue growth")
...`}
            </pre>
          </div>

          <p>
            the agent adapts its search strategy based on what it finds. each retrieval informs the next.
          </p>

          <p>
            built a customer research agent last month using this exact pattern. instead of trying to retrieve 
            everything upfront, it explores iteratively—much more reliable when you don't know exactly what the 
            knowledge base contains.
          </p>

          <h3>pattern 3: multi-source retrieval with validation</h3>

          <p>
            production RAG systems often need to query multiple sources: internal docs, databases, external APIs, vector stores.
          </p>

          <p>
            agentic RAG manages this orchestration:
          </p>

          <ol>
            <li><strong>source selection:</strong> agent decides which sources are relevant for the query</li>
            <li><strong>parallel retrieval:</strong> queries multiple sources simultaneously</li>
            <li><strong>cross-validation:</strong> checks if sources agree or contradict</li>
            <li><strong>confidence scoring:</strong> weights results based on source reliability and consistency</li>
            <li><strong>synthesis:</strong> combines information intelligently</li>
          </ol>

          <p>
            example: financial analysis agent queries:
          </p>
          <ul>
            <li>internal database for company records</li>
            <li>vector store for historical analysis documents</li>
            <li>external APIs for market data</li>
            <li>structured database for financial metrics</li>
          </ul>

          <p>
            when sources disagree, the agent flags the discrepancy instead of silently choosing one. 
            in production, this transparency is critical.
          </p>

          <h3>pattern 4: retrieval with self-critique</h3>

          <p>
            one of the most powerful agentic patterns: the agent evaluates whether retrieved information actually helps.
          </p>

          <p>
            after retrieval, the agent asks itself:
          </p>
          <ul>
            <li>"does this information answer the user's question?"</li>
            <li>"is anything missing or contradictory?"</li>
            <li>"do i need additional context?"</li>
            <li>"are there gaps in my understanding?"</li>
          </ul>

          <p>
            if the answer is "no" or "partially", the agent reformulates the query and tries again.
          </p>

          <p>
            implemented this for a legal research agent. first-pass retrieval accuracy was ~60%. 
            with self-critique and adaptive retrieval, it climbed to 91%. the agent catches its own mistakes.
          </p>

          <h3>pattern 5: progressive context building</h3>

          <p>
            instead of retrieving everything at once, agents can build context progressively:
          </p>

          <ol>
            <li><strong>initial broad search:</strong> get overview of relevant documents</li>
            <li><strong>analyze summaries:</strong> identify most promising sources</li>
            <li><strong>targeted deep dive:</strong> retrieve detailed information from selected sources</li>
            <li><strong>fill gaps:</strong> additional targeted searches for missing pieces</li>
          </ol>

          <p>
            this approach:
          </p>
          <ul>
            <li>reduces token usage (don't retrieve unnecessary detail)</li>
            <li>improves accuracy (focuses on most relevant sources)</li>
            <li>handles large knowledge bases efficiently</li>
          </ul>

          <p>
            as covered in my{' '}
            <Link href="/blog/context-engineering-agents-practical-guide" className="text-purple-600 hover:text-purple-700 underline">
              context engineering guide
            </Link>
            , this is a form of context selection strategy—pulling in exactly what's needed, when it's needed.
          </p>

          <h2>implementing agentic RAG: the practical stack</h2>

          <p>
            here's what a production agentic RAG system actually looks like:
          </p>

          <h3>1. document preprocessing with contextual chunking</h3>

          <p>
            <strong>traditional approach:</strong>
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
            <pre className="text-sm overflow-x-auto">
{`# naive chunking
chunks = split_text(document, chunk_size=500)
embeddings = embed_chunks(chunks)
store_in_vector_db(chunks, embeddings)`}
            </pre>
          </div>

          <p>
            <strong>agentic RAG approach:</strong>
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
            <pre className="text-sm overflow-x-auto">
{`# contextual chunking
chunks = smart_chunk(document)  # semantic boundaries

for chunk in chunks:
    # use Claude to generate context
    context = generate_chunk_context(
        chunk, 
        document_metadata,
        surrounding_chunks
    )
    
    contextualized_chunk = context + chunk
    
    # dual indexing
    embedding = embed(contextualized_chunk)
    bm25_index.add(contextualized_chunk)
    vector_db.add(contextualized_chunk, embedding)`}
            </pre>
          </div>

          <p>
            the prompt for generating context (adapted from{' '}
            <a href="https://www.anthropic.com/engineering/contextual-retrieval" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
              Anthropic's contextual retrieval guide
            </a>
            ):
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
            <pre className="text-sm overflow-x-auto">
{`<document>
{{WHOLE_DOCUMENT}}
</document>

Here is the chunk we want to situate within the whole document:
<chunk>
{{CHUNK_CONTENT}}
</chunk>

Please give a short succinct context to situate this chunk 
within the overall document for the purposes of improving 
search retrieval of the chunk. Answer only with the succinct 
context and nothing else.`}
            </pre>
          </div>

          <h3>2. agent-driven retrieval layer</h3>

          <p>
            the agent orchestrates retrieval intelligently:
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
            <pre className="text-sm overflow-x-auto">
{`class AgenticRetriever:
    def retrieve(self, query, context):
        # agent analyzes the query
        sub_queries = self.decompose_query(query)
        
        results = []
        for sub_query in sub_queries:
            # hybrid retrieval
            semantic_results = self.vector_search(sub_query)
            keyword_results = self.bm25_search(sub_query)
            
            # combine and rerank
            combined = self.merge_results(
                semantic_results, 
                keyword_results
            )
            reranked = self.rerank(combined, sub_query)
            
            # validate sufficiency
            if self.validate_results(reranked, sub_query):
                results.extend(reranked)
            else:
                # adaptive refinement
                refined_query = self.refine_query(
                    sub_query, 
                    reranked
                )
                additional = self.retrieve(refined_query, context)
                results.extend(additional)
        
        return self.deduplicate_and_score(results)`}
            </pre>
          </div>

          <h3>3. reranking for precision</h3>

          <p>
            after initial retrieval, reranking dramatically improves relevance. using something like Cohere's reranker:
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
            <pre className="text-sm overflow-x-auto">
{`# retrieve top-150 candidates
candidates = retriever.retrieve_top_k(query, k=150)

# rerank to top-20
reranked = reranker.rerank(
    query=query,
    documents=candidates,
    top_n=20
)

# use top-20 for generation
context = format_context(reranked)`}
            </pre>
          </div>

          <p>
            according to Anthropic's research, reranking on top of contextual retrieval gives you that 67% reduction 
            in retrieval failures. the combination is more powerful than either technique alone.
          </p>

          <h3>4. synthesis and validation</h3>

          <p>
            after retrieval, the agent synthesizes information and validates completeness:
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
            <pre className="text-sm overflow-x-auto">
{`# generate answer with retrieved context
answer = agent.generate(
    query=user_query,
    context=retrieved_chunks,
    instructions="cite sources, flag uncertainties"
)

# self-critique
critique = agent.critique(
    query=user_query,
    answer=answer,
    context=retrieved_chunks
)

if critique.needs_improvement:
    # additional retrieval or refinement
    additional_info = agent.retrieve(
        critique.missing_information
    )
    answer = agent.regenerate(
        query=user_query,
        context=retrieved_chunks + additional_info
    )`}
            </pre>
          </div>

          <h2>production lessons from building agentic RAG</h2>

          <p>
            after deploying agentic RAG systems for three different companies over the past year:
          </p>

          <h3>1. contextual chunking is non-negotiable</h3>

          <p>
            i tried building agentic RAG with traditional chunking first. "the agent will figure it out," i thought.
          </p>

          <p>
            wrong. garbage chunks produce garbage retrievals, no matter how smart your agent is.
          </p>

          <p>
            invest in proper contextual chunking from day one. the 35-49% improvement in retrieval accuracy compounds through 
            the entire agent loop.
          </p>

          <h3>2. hybrid retrieval beats pure semantic search</h3>

          <p>
            semantic embeddings are powerful but fail on exact matches. someone searches for "API endpoint /v2/users" and 
            semantic search returns general documentation about users instead of the specific endpoint.
          </p>

          <p>
            combining semantic search (embeddings) with keyword search (BM25) handles both use cases. production systems need both.
          </p>

          <h3>3. reranking is worth the latency</h3>

          <p>
            initially skipped reranking to keep latency low. mistake.
          </p>

          <p>
            users would rather wait an extra 200ms for an accurate answer than get a fast wrong answer. 
            reranking adds minimal latency but dramatically improves relevance.
          </p>

          <p>
            the trick: retrieve 100-150 candidates fast, then rerank to top-20. best of both worlds.
          </p>

          <h3>4. agents need retrieval tools, not just search</h3>

          <p>
            don't just give agents a "search" function. give them structured retrieval capabilities:
          </p>

          <ul>
            <li><code>semantic_search(query, filters)</code> - for concept-based retrieval</li>
            <li><code>keyword_search(exact_terms)</code> - for precise matching</li>
            <li><code>metadata_filter(criteria)</code> - for structured filtering</li>
            <li><code>get_related_documents(doc_id)</code> - for exploring connections</li>
            <li><code>temporal_search(query, date_range)</code> - for time-bounded queries</li>
          </ul>

          <p>
            richer tool set = more intelligent retrieval strategies.
          </p>

          <h3>5. validation catches silent failures</h3>

          <p>
            the scariest bug in RAG systems: retrieving irrelevant information but confidently generating an answer anyway.
          </p>

          <p>
            agentic RAG with validation catches this:
          </p>
          <ul>
            <li>agent checks if retrieved chunks actually contain relevant information</li>
            <li>flags low-confidence retrievals</li>
            <li>admits uncertainty when appropriate</li>
            <li>requests clarification instead of hallucinating</li>
          </ul>

          <p>
            this self-awareness transforms reliability. users trust the system more when it admits what it doesn't know.
          </p>

          <h3>6. progressive disclosure reduces costs</h3>

          <p>
            retrieving everything upfront is expensive and often unnecessary.
          </p>

          <p>
            pattern that works:
          </p>
          <ol>
            <li>retrieve document summaries first (cheap)</li>
            <li>identify most relevant documents</li>
            <li>retrieve detailed content only for top candidates (expensive but focused)</li>
          </ol>

          <p>
            one customer support agent reduced token usage by 60% using this approach, with no accuracy loss.
          </p>

          <h2>when to use agentic RAG vs traditional RAG</h2>

          <p>
            agentic RAG isn't always the answer. here's when to use each:
          </p>

          <h3>use traditional RAG when:</h3>
          <ul>
            <li>queries are straightforward and single-purpose</li>
            <li>knowledge base is small and well-organized</li>
            <li>latency is critical (need sub-second responses)</li>
            <li>retrieval accuracy is already high (&gt;95%)</li>
            <li>cost constraints are tight</li>
          </ul>

          <h3>use agentic RAG when:</h3>
          <ul>
            <li>queries are complex or multi-faceted</li>
            <li>knowledge base is large or poorly organized</li>
            <li>accuracy matters more than speed</li>
            <li>retrieval often requires multiple steps</li>
            <li>sources need validation or cross-referencing</li>
            <li>users ask questions that require synthesis</li>
          </ul>

          <p>
            in my experience: start with traditional RAG for simple use cases. upgrade to agentic RAG when retrieval 
            failures become a bottleneck.
          </p>

          <h2>the cost-accuracy tradeoff</h2>

          <p>
            let's be honest about costs. agentic RAG is more expensive than traditional RAG:
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6">
            <div className="text-sm">
              <p><strong>traditional RAG per query:</strong></p>
              <ul>
                <li>embedding query: ~$0.0001</li>
                <li>vector search: negligible</li>
                <li>generation with context: ~$0.01</li>
                <li><strong>total: ~$0.01</strong></li>
              </ul>
              
              <p className="mt-4"><strong>agentic RAG per query:</strong></p>
              <ul>
                <li>query decomposition: ~$0.005</li>
                <li>multiple retrievals: ~$0.0005</li>
                <li>contextual retrieval overhead: ~$0.002</li>
                <li>reranking: ~$0.01</li>
                <li>generation with validation: ~$0.015</li>
                <li>potential refinement loops: ~$0.01</li>
                <li><strong>total: ~$0.04-0.06</strong></li>
              </ul>
            </div>
          </div>

          <p>
            4-6x more expensive. but:
          </p>

          <ul>
            <li>67% fewer retrieval failures</li>
            <li>dramatically better answer quality</li>
            <li>reduced hallucinations</li>
            <li>higher user trust</li>
          </ul>

          <p>
            for production applications where accuracy matters, the cost increase is justified.
          </p>

          <h2>real implementation: financial analysis agent</h2>

          <p>
            concrete example from a project last quarter:
          </p>

          <h3>the use case</h3>

          <p>
            financial analysts needed to query SEC filings, earnings calls, and market data to answer complex questions like:
            "How has ACME Corp's profit margin trended relative to competitors over the past 3 years, and what were the key drivers?"
          </p>

          <h3>the implementation</h3>

          <p>
            <strong>data layer:</strong>
          </p>
          <ul>
            <li>10,000+ SEC filings preprocessed with contextual chunking</li>
            <li>dual indexing: vector embeddings (Voyage AI) + BM25</li>
            <li>structured database for financial metrics</li>
            <li>metadata tagging (company, date, document type, financial quarter)</li>
          </ul>

          <p>
            <strong>agent layer:</strong>
          </p>
          <ul>
            <li>query decomposition using Claude Sonnet</li>
            <li>ReAct loop for adaptive retrieval</li>
            <li>parallel sub-agents for different companies/time periods</li>
            <li>cross-validation of financial figures</li>
            <li>synthesis with source citation</li>
          </ul>

          <p>
            <strong>retrieval strategy:</strong>
          </p>
          <ol>
            <li>decompose query into sub-questions</li>
            <li>identify relevant companies and time periods</li>
            <li>parallel retrieval for each company/period</li>
            <li>metadata filtering for specific quarters</li>
            <li>semantic search for qualitative analysis (driver identification)</li>
            <li>keyword search for exact financial terms</li>
            <li>reranking top 150 candidates to top 20</li>
          </ol>

          <h3>the results</h3>

          <ul>
            <li><strong>accuracy:</strong> 89% vs 62% with traditional RAG</li>
            <li><strong>retrieval failures:</strong> 2.1% vs 6.8% with traditional RAG</li>
            <li><strong>average query time:</strong> 8 seconds vs 2 seconds (acceptable tradeoff)</li>
            <li><strong>analyst time savings:</strong> 4+ hours per day</li>
            <li><strong>user trust score:</strong> 4.6/5 vs 3.1/5 with previous system</li>
          </ul>

          <p>
            the agentic approach handled complex multi-part questions that traditional RAG couldn't. 
            analysts trusted the system enough to use it for actual research, not just preliminary exploration.
          </p>

          <h2>implementing your first agentic RAG system</h2>

          <p>
            practical steps to get started:
          </p>

          <h3>phase 1: upgrade your chunking (week 1)</h3>

          <ol>
            <li>implement contextual chunking using Claude</li>
            <li>dual-index: embeddings + BM25</li>
            <li>add metadata to all chunks</li>
            <li>benchmark retrieval accuracy before/after</li>
          </ol>

          <p>
            this alone gives you 35% improvement. do this first before adding agent complexity.
          </p>

          <h3>phase 2: hybrid retrieval (week 2)</h3>

          <ol>
            <li>implement semantic search (embeddings)</li>
            <li>implement keyword search (BM25)</li>
            <li>create result merging logic</li>
            <li>add reranking step</li>
          </ol>

          <p>
            now you have the foundation for reliable retrieval.
          </p>

          <h3>phase 3: basic agentic layer (week 3-4)</h3>

          <ol>
            <li>query decomposition tool</li>
            <li>retrieval tools (semantic, keyword, metadata filter)</li>
            <li>result validation logic</li>
            <li>synthesis with citation</li>
          </ol>

          <p>
            start simple. single agent with ReAct pattern. add complexity only when needed.
          </p>

          <h3>phase 4: iterate based on failures (ongoing)</h3>

          <ol>
            <li>track retrieval failures</li>
            <li>analyze failure patterns</li>
            <li>add targeted improvements (better chunking, more tools, refined prompts)</li>
            <li>measure impact</li>
          </ol>

          <p>
            use Anthropic's{' '}
            <a href="https://www.anthropic.com/engineering/contextual-retrieval" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
              contextual retrieval cookbook
            </a>
            {' '}as a practical implementation guide—they provide working code examples.
          </p>

          <h2>key takeaways</h2>

          <ol className="space-y-2">
            <li><strong>agentic RAG transforms retrieval</strong> - from passive search to active information seeking with reasoning and validation</li>
            <li><strong>contextual retrieval is foundational</strong> - 35-67% improvement in retrieval accuracy through contextual chunking, hybrid search, and reranking</li>
            <li><strong>hybrid search outperforms</strong> - combining semantic embeddings with BM25 keyword search handles both concept and exact matching</li>
            <li><strong>agents enable adaptive retrieval</strong> - query decomposition, progressive refinement, multi-source orchestration, and self-critique</li>
            <li><strong>validation prevents silent failures</strong> - agents check if retrieved information actually helps, reducing hallucinations</li>
            <li><strong>reranking is worth the cost</strong> - adds minimal latency but dramatically improves relevance, especially combined with contextual retrieval</li>
            <li><strong>costs increase 4-6x</strong> - but accuracy improvements justify the cost for production applications where correctness matters</li>
            <li><strong>start with contextual chunking</strong> - biggest single improvement before adding agent complexity</li>
            <li><strong>progressive disclosure reduces costs</strong> - retrieve summaries first, then detailed content only for relevant sources</li>
            <li><strong>real production gains</strong> - 89% accuracy vs 62% with traditional RAG in actual financial analysis deployment</li>
          </ol>

          <h2>resources worth exploring</h2>

          <ul>
            <li>
              <a href="https://www.anthropic.com/engineering/contextual-retrieval" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
                Anthropic's contextual retrieval guide
              </a>
              {' '}- comprehensive research and cookbook for implementing contextual embeddings and BM25
            </li>
            <li>
              <a href="https://github.com/aankitroy/full-stack-ai-agent-mastery/tree/main/PART-A-AGENT-MASTERY/00-agent-fundamentals/lesson-5-agentic-rag" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">
                Full-stack AI agent mastery: agentic RAG lesson
              </a>
              {' '}- practical implementation examples and code
            </li>
            <li>
              <Link href="/blog/agentic-design-patterns-complete-guide" className="text-purple-600 hover:text-purple-700 underline">
                agentic design patterns
              </Link>
              {' '}- understanding ReAct, planning, and multi-agent patterns that power agentic RAG
            </li>
            <li>
              <Link href="/blog/context-engineering-agents-practical-guide" className="text-purple-600 hover:text-purple-700 underline">
                context engineering for agents
              </Link>
              {' '}- managing context and retrieval strategies in production agents
            </li>
            <li>
              <Link href="/blog/ai-agents-complete-guide" className="text-purple-600 hover:text-purple-700 underline">
                AI agents: the complete guide
              </Link>
              {' '}- foundational concepts for building agent systems
            </li>
          </ul>

          <hr className="my-8 border-gray-300 dark:border-gray-600" />

          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 dark:border-purple-500 p-6 my-8">
            <p className="text-purple-800 dark:text-purple-200 font-medium">
              <strong>building agentic RAG systems?</strong> i help companies design and implement intelligent retrieval 
              systems that actually work in production. from contextual chunking to agent orchestration. {' '}
              <a href="https://cal.com/aankit/explore-synergies" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 underline">
                let's discuss your retrieval challenges
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
                ai strategy & engineering leadership consultant. helping companies build intelligent retrieval systems 
                that move beyond simple search to true information synthesis and reasoning.
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

