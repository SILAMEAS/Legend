import tailwindcss from '@tailwindcss/vite'


export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    'nuxt-swiper',
    '@pinia/nuxt',
    'nuxt-lucide-icons',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
  ],
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.NUXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3000',
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  lucide:{
    namePrefix:""
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts'
  },
  colorMode: {
    preference: 'dark', // Default to dark mode
    classSuffix: '',
    storageKey: 'theme'
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  i18n: {
    lazy:true,
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'kh', name: 'Khmer', file: 'kh.json' }
    ]
  }
})