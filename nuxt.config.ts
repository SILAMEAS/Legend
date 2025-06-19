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
    "@vee-validate/nuxt"
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
    resolve: {
      alias: {
        '.prisma/client/index-browser': './node_modules/.prisma/client/index-browser.js',
      },
    },
  },
  i18n: {
    lazy:true,
    defaultLocale: 'en',
    strategy: 'prefix', // ✅ or 'prefix_except_default'
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'kh', name: 'Khmer', file: 'kh.json' }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: 'en'
    }
  },
  experimental: {
    componentIslands: false, // Disable Nitro islands if used
  }
})