import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@nuxt/image', 'nuxt-icon', '@formkit/nuxt', '@nuxtjs/fontaine', 'nuxt-gtag'],

  runtimeConfig: {
    mailHost: process.env.MAIL_HOST,
    mailPort: process.env.MAIL_PORT,
    mailUser: process.env.MAIL_USER,
    mailPassword: process.env.MAIL_PASSWORD,
    mailFrom: process.env.MAIL_FROM,
    mailTo: process.env.MAIL_TO,
  },

  app: {
    head: {
      charset: 'utf-16',
      meta: [
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://www.akkrue.com/og-image.jpg'
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  gtag: {
    id: process.env.GTAG || 'G-HW8E740GKC'
  },

  css: [
    '@unocss/reset/tailwind-compat.css',
    '@/assets/css/main.css',
  ],

  formkit: {
    configFile: './formkit.config.ts',
  },

  postcss: {
    plugins: {
      'postcss-nested': {},
    },
  },

  // colorMode: {
  //   classSuffix: ''
  // },

  // image: {
  //   provider: 'ipx',
  //   ipx: {
  //     modifiers: {
  //       format: 'webp'
  //     }
  //   }
  // },
})
