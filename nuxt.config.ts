// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-swiper", "@nuxt/icon"],
  plugins: ["~/plugins/vue-final-modal"],
  app: {
    head: {
      title: "Movies App",
      link: [{ rel: "icon", type: "image/svg+xml", href: "/popcorn.svg" }],
    },
  },
  runtimeConfig: {
    public: {
      tmdbApiKey: process.env.TMDB_API_KEY,
    },
  },
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  css: ["vue-final-modal/style.css"],
});
