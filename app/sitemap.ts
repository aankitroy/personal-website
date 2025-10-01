import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aankitroy.com'
  
  // Blog posts
  const blogPosts = [
    'context-engineering-ai-agents-guide',
    'claude-agent-sdk-building-agents-that-work',
    'langgraph-state-management-memory-guide',
    'ai-agent-frameworks-comparison',
    'ai-agents-complete-guide',
    'ai-agents-future-of-business-automation',
    'ai-strategy-implementation-guide',
    'scaling-ai-systems-lessons-learned',
    'building-technical-teams-that-scale'
  ];
  
  const blogSitemapEntries = blogPosts.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date('2025-09-24'),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
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
