import Theme from '@primeuix/themes/material'
import { definePreset } from '@primeuix/themes'

const colorName = 'purple'
const Noir = definePreset(Theme, {
  semantic: {
    primary: {
      50: `{${colorName}.50}`,
      100: `{${colorName}.100}`,
      200: `{${colorName}.200}`,
      300: `{${colorName}.300}`,
      400: `{${colorName}.400}`,
      500: `{${colorName}.500}`,
      600: `{${colorName}.600}`,
      700: `{${colorName}.700}`,
      800: `{${colorName}.800}`,
      900: `{${colorName}.900}`,
      950: `{${colorName}.950}`,
    },
    colorScheme: {
      light: {
        primary: {
          color: `{${colorName}.950}`,
          inverseColor: '#ffffff',
          hoverColor: `{${colorName}.900}`,
          activeColor: `{${colorName}.800}`,
        },
        highlight: {
          background: `{${colorName}.950}`,
          focusBackground: `{${colorName}.700}`,
          color: '#ffffff',
          focusColor: '#ffffff',
        },
      },
      dark: {
        primary: {
          color: `{${colorName}.50}`,
          inverseColor: `{${colorName}.950}`,
          hoverColor: `{${colorName}.100}`,
          activeColor: `{${colorName}.200}`,
        },
        highlight: {
          background: `{${colorName}.950}`,
          focusBackground: `{${colorName}.700}`,
          color: '#ffffff',
          focusColor: '#ffffff',
        },
      },
    },
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
  ],
  devtools: { enabled: true },
  css: ['~/assets/app.css'],
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
        preset: Noir,
        cssLayer: {
          name: 'primevue',
          order: 'theme, base, primevue',
        },
      },
    },
  },
})
