const siteUrl = 'https://blacklight365.com'; // замени на свой домен

export default {
  titleTemplate: '%s | Black Light',
  defaultTitle: 'Black Light',
  description: 'Сучасна студія друку та вишивки',
  canonical: siteUrl,
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    url: siteUrl,
    site_name: 'Black Light',
  },
  twitter: {
    handle: '@yourhandle',
    site: '@yourhandle',
    cardType: 'summary_large_image',
  },
};
