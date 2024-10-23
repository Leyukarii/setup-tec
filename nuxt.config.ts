// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  plugins: ['~/plugins/mirage.js'],
  modules: ['@pinia/nuxt'],
  css:['./index.css'],
  postcss: {
    plugins:{
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
