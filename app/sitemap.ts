import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aankitroy.com'
  
  // Blog posts with individual dates
  const blogPosts = [
    {
      slug: 'agentic-design-patterns-complete-guide',
      lastModified: '2025-10-06',
      priority: 0.9, // Higher priority for newest post
    },
    {
      slug: 'context-engineering-agents-practical-guide',
      lastModified: '2025-10-02',
      priority: 0.8,
    },
    {
      slug: 'context-engineering-ai-agents-guide',
      lastModified: '2025-10-01',
      priority: 0.7,
    },
    {
      slug: 'claude-agent-sdk-building-agents-that-work',
      lastModified: '2025-09-30',
      priority: 0.7,
    },
    {
      slug: 'langgraph-state-management-memory-guide',
      lastModified: '2025-09-24',
      priority: 0.7,
    },
    {
      slug: 'ai-agent-frameworks-comparison',
      lastModified: '2025-09-15',
      priority: 0.7,
    },
    {
      slug: 'ai-agents-complete-guide',
      lastModified: '2025-09-15',
      priority: 0.7,
    },
    {
      slug: 'ai-agents-future-of-business-automation',
      lastModified: '2025-09-15',
      priority: 0.6,
    },
    {
      slug: 'ai-strategy-implementation-guide',
      lastModified: '2024-01-15',
      priority: 0.6,
    },
    {
      slug: 'scaling-ai-systems-lessons-learned',
      lastModified: '2024-01-10',
      priority: 0.6,
    },
    {
      slug: 'building-technical-teams-that-scale',
      lastModified: '2023-12-28',
      priority: 0.6,
    }
  ];
  
  const blogSitemapEntries = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.lastModified),
    changeFrequency: 'monthly' as const,
    priority: post.priority,
  }));
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...blogSitemapEntries,
  ]
}
