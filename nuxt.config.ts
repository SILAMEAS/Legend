import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
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
    '@vee-validate/nuxt'
  ],
  runtimeConfig: {
    uploadthingSecret: process.env.UPLOADTHING_SECRET,
    public: {
      uploadthingAppId: process.env.UPLOADTHING_APP_ID,
      API_BASE_URL: process.env.NUXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3000',
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  lucide: {
    namePrefix: ''
  },

  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts'
  },

  colorMode: {
    preference: 'dark',
    classSuffix: '',
    storageKey: 'theme'
  },

  i18n: {
    lazy: true,
    defaultLocale: 'en',
    strategy: 'prefix',
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
    componentIslands: false,
  },
  nitro: {
    externals: {
      external: ['formidable', '@prisma/client'],
    },
    plugins: [],
    devProxy: {},
    preset: 'node-server',
  },

  build: {
    transpile: ['@prisma/client'],
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '.prisma/client/index-browser': './node_modules/_prisma/client/index-browser.js',
      },
    },
  }
})
