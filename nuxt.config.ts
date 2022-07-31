import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    "primevue/resources/themes/saga-blue/theme.css", //theme
    "primevue/resources/primevue.min.css", //core css
    "primeicons/primeicons.css",
    "~/assets/css/global.css"
  ],
  publicRuntimeConfig:{
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  },
  privateRuntimeConfig: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  }
});
