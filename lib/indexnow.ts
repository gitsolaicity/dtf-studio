// lib/indexnow.ts
export async function pingIndexNow(urls: string[]) {
  const key = 'eb286fb041ad4347b6a799765a0837ce';
  const host = 'blacklight365.com';
  const keyLocation = `https://${host}/eb286fb041ad4347b6a799765a0837ce.txt`;

  await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      host,
      key,
      keyLocation,
      urlList: urls,
    }),
  });
}
