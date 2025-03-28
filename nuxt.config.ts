// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module"],

  plugins: [
      '~/plugins/axios.js',
    ],

  runtimeConfig: {
      public: {
          apiBase: 'https://parseback.liara.run'
      }
      
  },

  css: [
      '@mdi/font/css/materialdesignicons.min.css',
      '@vuepic/vue-datepicker/dist/main.css' // وارد کردن استایل مستقیما در پیکربندی Nuxt
    ],

  build: {
    transpile: ['@vuepic/vue-datepicker']
},

  primevue: {
      options: {
          theme: {
              preset: Aura,
          },
          ripple: true,
      },
      autoImport: true,
  },

  compatibilityDate: '2025-03-08',
});