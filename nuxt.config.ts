// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['nuxt-icon', '@nuxtjs/robots', "nuxt3-leaflet", "nuxt-gtag", "@nuxt/image", "@nuxtjs/sitemap"],
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
          '/calendari',
          '/chisiamo',
          '/comunita',
          '/contattaci',
          '/documentazione',
          '/dove',
          '/eventi',
          '/formazione',
          '/hwallet',
          '/impara',
          '/libriamazon',
          '/meetups',
          '/podcast',
          '/prezzi',
          '/shop',
          '/wallet',
        ],
      },
      index: [
        { sitemap: 'https://bitcoinitalianetwork.com/sitemap_osn.xml' }
      ]
    }
  },
});
