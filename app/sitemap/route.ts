import { type NextRequest } from 'next/server';

export const runtime = 'edge'; // можно убрать, если не используешь edge

export async function GET(req: NextRequest) {
  const baseUrl = 'https://blacklight365.com';

  const staticPages = [
    '',
    'about',
    'services',
    'services/dtf',
    'services/embroidery',
    'services/silkscreen',
    'contact',
    'privacy-policy',
    'terms-of-use',
    'public-offer',
  ];

  const lastmod = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map((page) => {
      const loc = page ? `${baseUrl}/${page}` : baseUrl;
      const priority = page.startsWith('services') ? '0.9' : '0.7';

      return `
    <url>
      <loc>${loc}</loc>
      <lastmod>${lastmod}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>${priority}</priority>
    </url>`;
    })
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
