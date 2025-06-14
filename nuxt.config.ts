export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  // note can open it when vue tool in browser not work
  // vue: {
  //   devtools: true,
  // },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@nuxt/icon',
    'nuxt-swiper',
    '@pinia/nuxt'
  ],
  // Optionally change the default prefix.
  headlessui: {
    prefix: 'Headless'
  },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.NUXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3000',
    }
  }
})