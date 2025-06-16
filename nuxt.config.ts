import tailwindcss from '@tailwindcss/vite'


export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@nuxt/icon',
    'nuxt-swiper',
    '@pinia/nuxt',
    'nuxt-lucide-icons',
    'shadcn-nuxt'
  ],
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.NUXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3000',
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  headlessui:{
    prefix:"HUI"
  },
  lucide:{
    namePrefix:"Lucide"
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: 'CN',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})