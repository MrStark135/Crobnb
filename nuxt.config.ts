import { defineNuxtConfig } from "nuxt/config";
import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: {
    cors: {
      origin: '*'
    }
  },
  image: {
    directus: {
      // This URL needs to include the final `assets/` directory
      baseURL: 'http://localhost:8055/assets'
    }
  },
  build: {
    transpile: ['@vuepic/vue-datepicker']
  },
  runtimeConfig: {
    public: {
      DIRECTUS_API: process.env.NUXT_PUBLIC_DIRECTUS_API
    },
  },
  modules: ['@nuxt/image', '@nuxt/ui'],
  vite: {
    plugins: tailwindcss()
  },
  css: ['./app/assets/global.css']
});