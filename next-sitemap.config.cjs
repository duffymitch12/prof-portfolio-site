/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://mitch-duffy.vercel.app',
    generateRobotsTxt: true, // Also generates a robots.txt
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: [],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
      additionalSitemaps: [
        'https://mitch-duffy.vercel.app/sitemap.xml',
        'https://mitch-duffy.vercel.app/sitemap-0.xml',
      ],
  }
  };