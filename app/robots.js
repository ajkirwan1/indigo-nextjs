export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/admin/',
        disallow: '/auth/',
        disallow: '/api/',
        disallow: '/_next/',
      },
      sitemap: 'https://indigo-consulting.gr//sitemap.xml',
    }
  }