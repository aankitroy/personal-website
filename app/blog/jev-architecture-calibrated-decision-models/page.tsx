'use client';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Header } from '../../../components/Header';
import { SiteFooter } from '../../../components/SiteFooter';
import { ShareButtons } from '../../../components/ShareButtons';

const codeBox = 'bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6 not-prose overflow-x-auto';
const codeText = 'text-sm font-mono leading-relaxed text-gray-800 dark:text-gray-200';

export default function JevArchitecturePage() {
  const post = {
    id: 'jev-architecture-calibrated-decision-models',
    title: 'jev and the case for models that decide instead of talk',
    excerpt:
      'what the jev architecture tells us about the next layer of production ai: encode context once, answer typed questions in parallel, and return probabilities you can actually put a threshold on.',
    author: 'Aankit Roy',
    date: '2026-11-14',
    readTime: '14 min read',
    tags: ['Jev', 'RLCD', 'Calibration', 'Decision Models', 'AI Agents', 'Production AI'],
  };

  const shareUrl = `https://aankitroy.com/blog/${post.id}`;
  const shareText = `${post.title} by Aankit Roy`;

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: { '@type': 'ImageObject', url: 'https://aankitroy.com/og-image.png', width: '1200', height: '630' },
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Aankit Roy',
      url: 'https://aankitroy.com',
      sameAs: ['https://www.linkedin.com/in/aankit-roy-20515b35/', 'https://x.com/AankitRoy', 'https://github.com/aankitroy'],
    },
    publisher: { '@type': 'Person', name: 'Aankit Roy', url: 'https://aankitroy.com' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': shareUrl },
    keywords: post.tags.join(', '),
    articleSection: 'AI Agents',
    inLanguage: 'en-US',
    timeRequired: 'PT14M',
    citation: [
      {
        '@type': 'WebPage',
        name: 'Inside Jev, Architecture of a Decision Model (Bijit Ghosh)',
        url: 'https://medium.com/@bijit211987/inside-jev-architecture-of-a-decision-model-a7b0fc659b74',
      },
    ],
  };

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aankitroy.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://aankitroy.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: shareUrl },
    ],
  };

  return (
    <div className="article-page min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <Header currentPage="blog" />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/blog" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-y-2 text-gray-600 dark:text-gray-300 mb-6">
            <div className="flex items-center mr-6">
              <User className="w-4 h-4 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center mr-6">
              <Calendar className="w-4 h-4 mr-2" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>

          <ShareButtons shareUrl={shareUrl} shareText={shareText} />

          <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed italic mt-6">
            most of what we call &quot;ai agents&quot; spend their day making small decisions: route this, flag that, escalate
            or don&apos;t. we keep asking chat models to make those decisions by writing paragraphs. jev is a bet that the
            decision itself, with an honest probability attached, should be the output.
          </p>
        </header>

        <article className="prose prose-lg max-w-none dark:prose-invert">
          <p>
            if you have built anything with llms in production, you have probably written a prompt that ends with something
            like <em>&quot;respond in json with a label and a confidence score between 0 and 1.&quot;</em> and you have
            probably shipped it, watched the confidence field hover around 0.9 for almost everything, and quietly stopped
            looking at it.
          </p>

          <p>
            that number was never a probability. it was text the model generated because the prompt asked for a number. the
            model is very good at producing plausible-looking numbers. it is not, by default, any good at producing numbers
            that match how often it is actually right.
          </p>

          <p>
            this is the problem jev, a decision model from typesafe, is built around. i spent some time with{' '}
            <a
              href="https://medium.com/@bijit211987/inside-jev-architecture-of-a-decision-model-a7b0fc659b74"
              target="_blank"
              rel="noopener noreferrer"
            >
              bijit ghosh&apos;s architectural teardown of jev
            </a>{' '}
            and the public material around its training method, rlcd. this post is my attempt to explain the architecture
            from first principles, separate what is known from what is inferred, and, most importantly, show how you would
            actually use calibrated decisions in a production system.
          </p>

          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 dark:border-purple-500 p-6 my-8 not-prose">
            <p className="text-purple-900 dark:text-purple-100 mb-0 leading-relaxed">
              <strong>a note on certainty:</strong> typesafe has not published a paper or technical report on jev&apos;s
              internals or the rlcd training recipe. the architecture below is a reconstruction from public descriptions and
              black-box testing. i&apos;ll flag every place where we are inferring rather than reading a spec.
            </p>
          </div>

          <h2>what jev actually is</h2>

          <p>here is the publicly described part, stripped of marketing:</p>

          <ul>
            <li>
              <strong>it is built to be called by software, not chatted with.</strong> you give it context and a set of
              typed questions. it returns structured decisions.
            </li>
            <li>
              <strong>every answer comes with a probability distribution</strong> over the allowed options, not a sentence
              explaining its reasoning.
            </li>
            <li>
              <strong>multiple questions are evaluated in parallel</strong> against the same context.
            </li>
            <li>
              <strong>it is trained with rlcd</strong> (reinforcement learning for calibrated decisions), where the stated
              goal is that a decision returned at 0.8 is correct about 80% of the time.
            </li>
          </ul>

          <p>
            in other words, it behaves less like a chatbot and more like a very well-read classifier that can take arbitrary
            questions at runtime. some people have started calling this category &quot;system one&quot; models: fast,
            intuitive judgments rather than slow, step-by-step reasoning.
          </p>

          <h2>why &quot;confidence: 0.91&quot; in text is not a probability</h2>

          <p>
            it is worth being precise here, because this is the entire reason the architecture looks the way it does.
          </p>

          <p>
            when a chat model writes <code>&quot;confidence&quot;: 0.91</code>, what happened mechanically is that it picked
            the token <code>0</code>, then <code>.</code>, then <code>9</code>, then <code>1</code>, each because it was a
            likely continuation of the text so far. the model has a real probability distribution inside it, but that
            distribution is over <em>tokens</em>, and the number it typed is just another token sequence. nothing in
            standard training ties the digits it writes to its actual hit rate.
          </p>

          <p>
            on top of that, instruction tuning and rlhf reward answers that humans prefer, and humans tend to prefer
            confident answers. so the stated confidence drifts upward. you end up with a model that says 0.9 for things it
            gets right 70% of the time and things it gets right 99% of the time, and you have no way to tell those apart.
          </p>

          <p>
            for a chat ui, that is fine. for a system that automatically refunds money, closes tickets, or flags fraud, it
            means you cannot set a threshold. and a decision you cannot put a threshold on is a decision you cannot safely
            automate.
          </p>

          <h2>the architecture, layer by layer</h2>

          <p>
            the reconstruction that best fits the public behaviour has four parts. a pretrained causal transformer supplies
            the knowledge. what changes is how context goes in and how answers come out.
          </p>

          <div className={codeBox}>
            <pre className={codeText}>{`┌────────────────────────── shared context ──────────────────────────┐
│  "merchant reports 3 failed payouts in 24h, account age 2 years,   │
│   last payout succeeded on monday, error code PSP_TIMEOUT ..."     │
└──────────────────────────────┬─────────────────────────────────────┘
                               │  encoded once per layer (keys/values cached)
          ┌────────────────────┼────────────────────┐
          ▼                    ▼                    ▼
   ┌─────────────┐      ┌─────────────┐      ┌─────────────┐
   │ q1: queue?  │      │ q2: urgent? │      │ q3: human   │
   │ [payments,  │      │ [yes, no]   │      │   review?   │
   │  risk, ops] │      │             │      │ [yes, no]   │
   └──────┬──────┘      └──────┬──────┘      └──────┬──────┘
          │  attention mask: branches see context + themselves only
          ▼                    ▼                    ▼
   readout over options  readout over options  readout over options
          │                    │                    │
          ▼                    ▼                    ▼
 {payments: .81,        {yes: .64, no: .36}   {yes: .22, no: .78}
  risk: .15, ops: .04}`}</pre>
          </div>

          <h3>1. encode the shared context once</h3>

          <p>
            in a normal llm call, if you ask three questions about the same document in three separate calls, the model
            reads the document three times. the expensive part of reading is computing the attention keys and values for
            every token at every layer.
          </p>

          <p>
            the jev-style approach computes those keys and values for the shared context once, then lets every question
            reuse them. this is the same idea as prefix caching in inference servers like vllm, but designed into the
            product rather than bolted on as an optimisation.
          </p>

          <p>the savings are easy to estimate. take a 2,000-token context and five questions of about 30 tokens each:</p>

          <ul>
            <li>
              <strong>five separate calls:</strong> 5 × (2,000 + 30) = 10,150 tokens of prefill
            </li>
            <li>
              <strong>shared prefix:</strong> 2,000 + (5 × 30) = 2,150 tokens of prefill
            </li>
          </ul>

          <p>
            that is roughly 4.7x less prefill work, and the gap widens as you add questions. it is not free: each question
            still has to <em>attend</em> to all 2,000 context tokens, so attention cost per question remains. but you stop
            paying to re-encode the same evidence over and over.
          </p>

          <h3>2. isolate the questions from each other</h3>

          <p>
            here is a subtle problem. if you put five questions after the same context in one sequence, question four can
            see questions one to three. now the answer to &quot;is this urgent?&quot; might be influenced by the fact that
            you just asked &quot;should a human review this?&quot;, which leaks your own intent into the model&apos;s
            judgement.
          </p>

          <p>
            the fix is an attention mask. each question branch is allowed to see the shared context and its own tokens,
            and nothing else. conceptually:
          </p>

          <div className={codeBox}>
            <pre className={codeText}>{`              context   q1   q2   q3
  context        ✓      ✗    ✗    ✗
  q1             ✓      ✓    ✗    ✗
  q2             ✓      ✗    ✓    ✗
  q3             ✓      ✗    ✗    ✓`}</pre>
          </div>

          <p>
            every branch gets an independent answer, and because the branches do not depend on each other, they can all
            run in the same forward pass.
          </p>

          <p>
            <em>
              inferred, not confirmed: black-box tests show answers do not influence each other, but the same behaviour
              would appear if typesafe simply ran separate calls with a shared cache. the mask is the most plausible
              explanation, not a documented one.
            </em>
          </p>

          <h3>3. read the answer directly, skip generation</h3>

          <p>
            this is the part that makes the whole thing fast. a chat model produces answers token by token, and each new
            token has to wait for the previous one. that sequential decoding loop is where most of your latency goes.
          </p>

          <p>
            a decision model does not need to write anything. once the question branch has been processed, the model
            already has everything it needs to score each allowed option. it reads a probability for{' '}
            <code>payments</code>, <code>risk</code> and <code>ops</code> directly from its internal representation,
            normalises them, and stops. one forward pass, no decoding.
          </p>

          <p>
            your application code then turns that into whatever shape it needs: a typed enum, a json object, a database
            write.
          </p>

          <h3>4. what we genuinely do not know</h3>

          <ul>
            <li>
              <strong>model size and type.</strong> some have speculated jev is a mixture-of-experts model because it is
              fast. speed alone cannot tell you that; batching, hardware and caching all affect latency.
            </li>
            <li>
              <strong>the exact readout mechanism.</strong> it could be the language-model head scoring option tokens, or a
              separately trained head. the outputs would look similar from outside.
            </li>
            <li>
              <strong>the rlcd algorithm.</strong> only its goal is public.
            </li>
          </ul>

          <h2>calibration, explained properly</h2>

          <p>
            a model is <strong>calibrated</strong> if, across all the times it says 80%, it is right about 80% of the
            time. across all the times it says 30%, it is right about 30% of the time. that is all calibration means.
          </p>

          <p>
            it is different from accuracy. a model can be very accurate and badly calibrated (always says 99%, right 90% of
            the time), or mediocre and perfectly calibrated (honestly tells you when it is guessing). for automation, the
            second is often more useful, because you know exactly which decisions to trust.
          </p>

          <h3>how you measure it</h3>

          <p>
            the standard metric is <strong>expected calibration error (ece)</strong>. you sort predictions into confidence
            buckets (0 to 10%, 10 to 20%, and so on), compare average confidence to actual accuracy in each bucket, and take
            a weighted average of the gaps.
          </p>

          <p>
            a reported ece of 0.031 on mmlu, which has been cited for jev, means the average gap between stated confidence
            and actual accuracy was about 3 percentage points. that is good. but read the caveat: if most predictions sit in
            the 95%+ bucket, the score tells you very little about how the model behaves at 60%, which is exactly the zone
            where your human-review threshold will live.
          </p>

          <h3>how you train for it</h3>

          <p>
            you reward the model with a <strong>proper scoring rule</strong>: a loss that is minimised only when the
            predicted probability matches the true likelihood. two classic ones:
          </p>

          <ul>
            <li>
              <strong>log loss</strong>, <code>−log p(correct answer)</code>. saying 99% and being wrong is punished
              enormously, so overconfidence becomes expensive.
            </li>
            <li>
              <strong>brier score</strong>, the squared difference between the predicted probabilities and what actually
              happened (1 for the true option, 0 for the rest). gentler on confident mistakes, but still rewards honesty.
            </li>
          </ul>

          <p>
            the difference between rlcd and rlhf, as described publicly, is what the reward is tied to. rlhf rewards
            outputs that human raters prefer. rlcd reportedly rewards probabilities that agree with observed outcomes.
            typesafe has not said which scoring rule it uses, so treat any specific loss as an educated guess.
          </p>

          <p>
            there is also a cheap post-hoc trick worth knowing: <strong>temperature scaling</strong>. you divide the
            model&apos;s raw scores by a single learned number before the softmax. it makes probabilities sharper or softer
            without changing which answer ranks first. it is often enough to fix most of the overconfidence in an
            off-the-shelf model, and you can fit it on a few hundred labelled examples.
          </p>

          <h2>from probability to action: the part that actually matters</h2>

          <p>
            calibrated probabilities are only useful if you turn them into decisions with clear economics. this is where
            most teams stop too early: they pick 0.8 as a threshold because it feels safe.
          </p>

          <p>
            the right threshold comes from the cost of each kind of mistake. say you are deciding whether to flag a
            transaction for fraud review:
          </p>

          <ul>
            <li>a false alarm costs about ₹50 of analyst time</li>
            <li>a missed fraud costs about ₹2,000 on average</li>
          </ul>

          <p>
            if the model says the probability of fraud is <code>p</code>, flagging costs <code>(1 − p) × 50</code> in
            expectation, and not flagging costs <code>p × 2,000</code>. you should flag whenever the first is smaller,
            which works out to:
          </p>

          <div className={codeBox}>
            <pre className={codeText}>{`flag when  p  >  cost_false_alarm / (cost_false_alarm + cost_miss)
                =  50 / (50 + 2000)
                ≈  0.024`}</pre>
          </div>

          <p>
            you should flag anything above about 2.4%. that is wildly different from the 80% most teams would have guessed,
            and it is only a sensible rule if the probabilities are calibrated. with an overconfident model, a &quot;2%&quot;
            might really be 15%, and the maths falls apart.
          </p>

          <p>
            in practice i like a three-zone policy: automate confidently in both tails, and send the uncertain middle to a
            human. the zones should be set from the cost maths above and then adjusted based on how much review capacity
            you actually have.
          </p>

          <h2>you can build a version of this today</h2>

          <p>
            you do not need jev to start working this way. here is a minimal toolkit using open models and standard python.
          </p>

          <h3>score fixed options instead of generating text</h3>

          <div className={codeBox}>
            <pre className={codeText}>{`import torch
from transformers import AutoModelForCausalLM, AutoTokenizer

tok = AutoTokenizer.from_pretrained(MODEL_NAME)
model = AutoModelForCausalLM.from_pretrained(MODEL_NAME).eval()

@torch.no_grad()
def option_probs(context: str, question: str, options: list[str]) -> dict[str, float]:
    prefix = tok(f"{context}\\n\\nQuestion: {question}\\nAnswer:", return_tensors="pt").input_ids
    scores = []
    for option in options:
        opt = tok(" " + option, add_special_tokens=False, return_tensors="pt").input_ids
        ids = torch.cat([prefix, opt], dim=1)
        logp = torch.log_softmax(model(ids).logits[0, :-1], dim=-1)
        n = opt.shape[1]
        # log-probability of each option token, given everything before it
        scores.append(logp[-n:].gather(1, ids[0, -n:, None]).sum())
    probs = torch.softmax(torch.stack(scores), dim=0)
    return dict(zip(options, probs.tolist()))`}</pre>
          </div>

          <p>
            two caveats. this re-reads the context for every option, so in production run it behind an inference server
            with prefix caching enabled. and multi-token options get penalised for length, so keep option labels short
            and similar in length (single tokens are ideal).
          </p>

          <h3>measure calibration on your own data</h3>

          <div className={codeBox}>
            <pre className={codeText}>{`import numpy as np

def expected_calibration_error(confidence, correct, n_bins=10):
    confidence = np.asarray(confidence)
    correct = np.asarray(correct, dtype=float)
    edges = np.linspace(0, 1, n_bins + 1)
    ece = 0.0
    for lo, hi in zip(edges[:-1], edges[1:]):
        in_bin = (confidence > lo) & (confidence <= hi)
        if in_bin.any():
            gap = abs(correct[in_bin].mean() - confidence[in_bin].mean())
            ece += in_bin.mean() * gap
    return ece`}</pre>
          </div>

          <h3>fix overconfidence with temperature scaling</h3>

          <div className={codeBox}>
            <pre className={codeText}>{`from scipy.optimize import minimize_scalar

def fit_temperature(logits, labels):
    logits, labels = np.asarray(logits), np.asarray(labels)

    def nll(t):
        z = logits / t
        z = z - z.max(axis=1, keepdims=True)
        log_probs = z - np.log(np.exp(z).sum(axis=1, keepdims=True))
        return -log_probs[np.arange(len(labels)), labels].mean()

    return minimize_scalar(nll, bounds=(0.05, 10.0), method="bounded").x`}</pre>
          </div>

          <h3>turn probabilities into actions</h3>

          <div className={codeBox}>
            <pre className={codeText}>{`def act_threshold(cost_false_alarm: float, cost_miss: float) -> float:
    return cost_false_alarm / (cost_false_alarm + cost_miss)

def route(p: float, act_above: float, ignore_below: float) -> str:
    if p >= act_above:
        return "act"
    if p < ignore_below:
        return "ignore"
    return "human_review"`}</pre>
          </div>

          <h2>what i would test before trusting any decision model</h2>

          <p>whether it is jev or something you built, i would not put it on an automated path without these checks:</p>

          <ol>
            <li>
              <strong>calibration on your data, not a benchmark.</strong> collect a few hundred labelled examples from real
              traffic and plot accuracy against confidence. pay most attention to the band around your threshold.
            </li>
            <li>
              <strong>option sensitivity.</strong> reorder the options, rename them, add a near-duplicate. if the decision
              flips, your labels are doing more work than your context.
            </li>
            <li>
              <strong>errors above the automation line.</strong> count the mistakes the system would have made without a
              human. that number, not overall accuracy, is your real risk.
            </li>
            <li>
              <strong>drift.</strong> log every prediction alongside the eventual outcome. calibration that holds in march
              can quietly degrade by june when your traffic mix changes.
            </li>
          </ol>

          <h2>where this fits, and where it doesn&apos;t</h2>

          <p>
            decision models are a great fit for the high-volume, bounded judgments that sit inside agent workflows:
            routing, triage, eligibility checks, &quot;does this need a human?&quot;, &quot;did this tool call
            succeed?&quot;. these are exactly the calls where chat models are slow, expensive and overconfident.
          </p>

          <p>
            they are not a replacement for reasoning models. if the task needs a plan, a multi-step investigation, or an
            explanation a person will read, you still want a model that thinks out loud.
          </p>

          <p>
            the interesting architecture, to me, is the combination: a reasoning agent that plans and acts, calling a fast
            calibrated decision model at every fork where it would otherwise guess. the agent gets cheaper and faster, and
            for the first time you get a principled answer to the question every ops leader eventually asks:{' '}
            <em>&quot;how do we know when to let it run on its own?&quot;</em>
          </p>

          <p>
            my plan for adopting any of this is boring on purpose: pick one bounded routing workflow, run the model in
            shadow mode, log predictions next to outcomes for a few weeks, and only then let it act above a threshold
            derived from real costs. expand only when the evidence says so.
          </p>

          <h2>sources and further reading</h2>

          <ul>
            <li>
              <a
                href="https://medium.com/@bijit211987/inside-jev-architecture-of-a-decision-model-a7b0fc659b74"
                target="_blank"
                rel="noopener noreferrer"
              >
                inside jev, architecture of a decision model
              </a>{' '}
              by bijit ghosh, the architectural reconstruction this post builds on
            </li>
            <li>
              <a href="https://www.mindstudio.ai/blog/typesafe-jev-rlcd-vs-rlhf" target="_blank" rel="noopener noreferrer">
                typesafe jev: rlcd vs rlhf
              </a>{' '}
              (mindstudio)
            </li>
            <li>
              <a
                href="https://pub.towardsai.net/rlcd-reinforcement-learning-for-calibrated-decisions-e528daf3591d"
                target="_blank"
                rel="noopener noreferrer"
              >
                rlcd: reinforcement learning for calibrated decisions
              </a>{' '}
              (towards ai)
            </li>
            <li>
              <Link href="/blog/agentic-design-patterns-complete-guide">agentic design patterns</Link>, for where decision
              calls sit inside larger agent systems
            </li>
          </ul>

          <hr className="my-8 border-gray-300 dark:border-gray-600" />

          <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 dark:border-purple-500 p-6 my-8 not-prose">
            <p className="text-purple-800 dark:text-purple-200 font-medium mb-0">
              <strong>automating decisions inside your agents?</strong> i help teams design the thresholds, evaluation and
              rollout plans that let ai act on its own safely.{' '}
              <a
                href="https://cal.com/aankit/explore-synergies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-300 underline"
              >
                let&apos;s talk about your workflow
              </a>
              .
            </p>
          </div>
        </article>

        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link href="/blog" className="inline-flex items-center text-purple-600 hover:text-purple-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            All Posts
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
