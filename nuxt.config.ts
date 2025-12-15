// nuxt.config.ts
export default defineNuxtConfig({
  /* -------------------------------------------------------------------------- */
  /* 🌐  MÉTA GLOBALES                                                          */
  /* -------------------------------------------------------------------------- */
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr',
      },
      title: 'Template Fashion – Nuxt 4',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'description',
          content:
            'Template e-commerce fashion élégant et responsive, conçu avec Nuxt 4, Vue 3 et CSS moderne.',
        },
      ],
    },
  },

  /* -------------------------------------------------------------------------- */
  /* 🎨  STYLES GLOBAUX                                                         */
  /* -------------------------------------------------------------------------- */
  css: [
    '~/assets/css/variables.css', // design tokens
    '~/assets/css/layout.css',    // grilles & layout
    '~/assets/css/main.css',      // styles globaux
  ],

  /* -------------------------------------------------------------------------- */
  /* ⚙️  CONFIG DEV                                                            */
  /* -------------------------------------------------------------------------- */
  devtools: {
    enabled: true,
  },

  /* -------------------------------------------------------------------------- */
  /* 🚀  PERFORMANCES / BUILD                                                   */
  /* -------------------------------------------------------------------------- */
  nitro: {
    compressPublicAssets: true,
  },

  /* -------------------------------------------------------------------------- */
  /* 🧱  CONVENTIONS PROJET                                                     */
  /* -------------------------------------------------------------------------- */
  typescript: {
    strict: true,
    shim: false,
  },

  /* -------------------------------------------------------------------------- */
  /* 🗂️  ALIASES (lisibilité senior)                                            */
  /* -------------------------------------------------------------------------- */
  alias: {
    '@assets': '/assets',
    '@components': '/components',
    '@ui': '/components/ui',
    '@product': '/components/product',
  },
})
