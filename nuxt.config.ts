// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  components: true,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap',
        },
      ],
    }
  },
  css: [
    '~/assets/scss/tailwind.scss',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@pinia/nuxt'],
  pinia: { autoImports: ['defineStore', 'storeToRefs'] },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    },
    app: {
      apiKey: process.env.API_KEY
    }
  },
})
