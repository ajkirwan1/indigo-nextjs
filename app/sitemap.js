export default function sitemap() {
    return [
      {
        url: 'https://indigo-consulting.gr',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://indigo-consulting.gr/case-studies',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://indigo-consulting.gr/contact',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
      },
      {
        url: 'https://indigo-consulting.gr/news',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://indigo-consulting.gr/privacy',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
      },
      {
        url: 'https://indigo-consulting.gr/services',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
      },
      {
        url: 'https://indigo-consulting.gr/who-we-are',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
      },
    ]
  }