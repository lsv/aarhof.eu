import Theme from '@primeuix/themes/aura'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
  ],
  devtools: { enabled: true },
  css: ['~/assets/app.scss'],
  compatibilityDate: '2024-11-01',
  vite: {
    server: {
      allowedHosts: ['.localdev'],
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  primevue: {
    options: {
      theme: {
        preset: Theme,
      },
    },
  },
})
