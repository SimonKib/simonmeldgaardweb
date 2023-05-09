import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? ['vueuc', '@css-render/vue3-ssr', '@juggle/resize-observer']
        : ['@juggle/resize-observer']
  },
  vite: {
    plugins: [
      eslintPlugin({
        failOnError: false
      })
    ],
    optimizeDeps: {
      exclude: ['fsevents'],
      include:
        process.env.NODE_ENV === 'development'
          ? ['vueuc', 'date-fns-tz/esm/formatInTimeZone']
          : []
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  modules: [
    '@nuxt/image-edge',
    '@storyblok/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  routeRules: {
    '/': { redirect: '/da' }
  },
  storyblok: {
    accessToken: process.env.STORYBLOK_TOKEN
  },
  image: {
    storyblok: {
      baseURL: 'https://a.storyblok.com'
    }
  },
  runtimeConfig: {
    // Private config that is only available on the server
    public: {
      // Config within public will be also exposed to the client
      storyblokVersion: process.env.STORYBLOK_VERSION,
      environment: process.env.ENVIRONMENT,
      startNestedRoutesFrom: ['/settings']
    }
  },
  app: {
    head: {
      meta: [
        {
          name: 'format-detection',
          content: 'telephone=no'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  experimental: {
    payloadExtraction: false
  },
  ssr: true,
  generate: {
    routes: ['/da']
  }
})
