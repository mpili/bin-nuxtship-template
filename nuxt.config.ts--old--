// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-02-27',
  site: {
    url: 'https://bitcoinitalianetwork.com/',
    name: 'Bitcoin Italia Network',
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // Dice a Vue di non trattare i tag "nostr-*" come componenti Vue
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('nostr-')
    }
  },
  modules: ['nuxt-icon', '@nuxtjs/robots', "@nuxtjs/leaflet", "nuxt-gtag", "@nuxt/image", "@nuxtjs/sitemap"],
  robots: {
    configPath: 'config/robots.js',
  },
  gtag: {
    id: 'GTM-NJXDPR5Z',
  },
  sitemap: {
    sitemaps: {
      pages: {
        path: '/sitemap.xml',
        urls: [
          '/altremappe',
          '/calendari',
          '/categorie',
          '/chisiamo',
          '/comunita',
          '/contattaci',
          '/documentazione',
          '/eventi',
          '/formazione',
          '/hwallet',
          '/impara',
          '/libriamazon',
          '/meetups',
          '/podcast',
          '/podcastarchivio',
          '/psp',
          '/regioni',
          '/shop',
          '/wallet',
        ],
      },
      index: [
        { sitemap: 'https://bitcoinitalianetwork.com/sitemap_osn.xml' },
        { sitemap: 'https://bitcoinitalianetwork.com/sitemap_ost.xml' },
        { sitemap: 'https://bitcoinitalianetwork.com/sitemap_l.xml' },
        { sitemap: 'https://bitcoinitalianetwork.com/sitemap_c.xml' },
      ]
    }
  },
});
