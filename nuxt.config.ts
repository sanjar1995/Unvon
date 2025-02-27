// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["~/assets/styles/main.scss", "swiper/swiper-bundle.css"],
  modules: ["@nuxt/image", "@nuxtjs/google-fonts", "@nuxt/ui", "@nuxtjs/i18n", '@pinia/nuxt'],
  googleFonts: {
    families: {
      // Добавьте сюда нужные шрифты
      "Inter": [400, 500, 600], // Название шрифта и веса
      "Open+Sans": [300, 400, 600],
      "Montserrat": [400, 500, 700],
      Lora: true, // Если нужен только стандартный вес 400
    },
    display: "swap", // Опционально: настройка `font-display`
    prefetch: true, // Опционально: предварительная загрузка
    preconnect: true, // Ускорение загрузки
    preload: true, // Загрузка шрифтов как критических
  },
  i18n: {
    strategy: "no_prefix",
    locales: [
      {
        code: "en",
        language: "en-US",
        name: "English",
        file: "en.ts",
        dir: "ltr",
      }, // Английский
      {
        code: "ru",
        language: "ru-RU",
        name: "Русский",
        file: "ru.ts",
        dir: "ltr",
      }, // Русский
      {
        code: "uz",
        language: "uz-UZ",
        name: "O'zbekcha",
        file: "uz.ts",
        dir: "ltr",
      }, // Узбекский
    ],
    defaultLocale: "ru",
    detectBrowserLanguage: false,
    langDir: "locales",
    vueI18n: "./i18n.config.ts",
  },
  runtimeConfig: {
    public: {
      telegramBotToken: process.env.VITE_BOT_TOKEN, // Доступно и на клиенте
    },
    telegramBotChatId: process.env.VITE_BOT_ID, // Доступно только на сервере
  }
});
