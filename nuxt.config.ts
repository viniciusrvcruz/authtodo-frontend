import tailwindcss from "@tailwindcss/vite";
import Aura from '@primeuix/themes/aura';
import { getApiBaseUrl } from './app/utils/getApiBaseUrl'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      apiBaseUrl: getApiBaseUrl(),
    }
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxt/icon',
    'nuxt-auth-sanctum',
    '@primevue/nuxt-module',
    '@pinia/nuxt',
  ],

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'cookie', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode',
    disableTransition: false,
  },

  i18n: {
    defaultLocale: 'pt-br',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'pt-br', name: 'Português (Brasil)', file: 'pt-br.json' }
    ]
  },

  icon: {
    componentName: 'NuxtIcon'
  },

  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    },
    importTheme: { from: '~/assets/theme/primevue.ts' },
  },

  sanctum: {
    baseUrl: getApiBaseUrl(),
    redirectIfAuthenticated: true,
    redirectIfUnauthenticated: true,
    redirect: {
      onAuthOnly: '/login',
      onGuestOnly: '/home',
      onLogout: '/login',
    },
    globalMiddleware: {
      enabled: true
    },
    endpoints: {
      logout: '/api/auth/logout'
    },
  }
})