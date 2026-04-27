// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@nuxt/fonts', '@vueuse/nuxt'],
  css: ['~/assets/css/main.css'],
  ssr: false,
  vite: {
    server: {
      allowedHosts: true
    }
  }
})