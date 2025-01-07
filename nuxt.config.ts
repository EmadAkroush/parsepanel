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
        '@mdi/font/css/materialdesignicons.min.css'
      ],
    primevue: {
        options: {
            theme: {
                preset: Aura,
            },
            ripple: true,
        },
        autoImport: true,
    },
    


});
