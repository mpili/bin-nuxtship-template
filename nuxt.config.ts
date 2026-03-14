export default defineNuxtConfig({
  compatibilityDate: '2026-02-27',
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('nostr-')
    }
  },
  vite: {
    optimizeDeps: {
      exclude: ['nostr-components']
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'nostr': ['nostr-components']
          }
        }
      }
    }
  },
  modules: [
    'nuxt-icon',
    '@nuxtjs/robots',
    "@nuxtjs/leaflet",
    "nuxt-gtag",
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
  ],
  image: {
    format: ['avif', 'webp', 'png', 'jpg'],
    quality: 80,
  },
  gtag: {
    id: process.env.GA_MEASUREMENT_ID || process.env.GTAG_ID || '',
    debug: process.env.NODE_ENV !== 'production',
    config: {
      anonymize_ip: true,
      send_page_view: true,
    },
    disableAutoPageTrack: false,
  },
  colorMode: {
    preference: 'system',
    dataValue: 'theme', // setup for daisyui
    classSuffix: '',
  },
})
