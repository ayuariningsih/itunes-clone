// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  // devtools: { enabled: true },
  components: true,
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap",
        },
      ],
    },
  },
  css: ["~/assets/scss/tailwind.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    plugins: [svgLoader()],
  },
  modules: ["@pinia/nuxt", "nuxt-headlessui"],
  pinia: { autoImports: ["defineStore", "storeToRefs"] },
  headlessui: {
    prefix: "Headless",
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    },
    app: {
      apiKey: process.env.API_KEY,
    },
  },
});
