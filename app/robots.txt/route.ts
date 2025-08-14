import { type NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const content = `
User-agent: *
Allow: /

Sitemap: https://blacklight365.com/sitemap.xml
  `.trim();

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
