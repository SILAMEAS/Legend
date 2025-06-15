export default defineNuxtConfig({
  css: ['@/assets/css/main.css'],
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
    '@pinia/nuxt',
    'nuxt-lucide-icons'
  ],
  // Optionally change the default prefix.
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.NUXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3000',
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  headlessui:{
    prefix:"HeadlessUi"
  },
  lucide:{
    namePrefix:"Lucide"
  }
})