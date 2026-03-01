export default defineNuxtConfig({
  compatibilityDate: '2026-02-27',
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('nostr-')
    }
  },
  modules: [
	'nuxt-icon',
	'@nuxtjs/robots',
	"@nuxtjs/leaflet",
	"nuxt-gtag",
	"@nuxt/image",
	"@nuxtjs/sitemap",
  ],
})
