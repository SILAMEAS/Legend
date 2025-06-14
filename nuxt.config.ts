// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  vue: {
    devtools: true,
  },
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
})