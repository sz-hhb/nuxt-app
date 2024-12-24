// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["@/assets/css/main.scss", "animate.css"],
  modules: ["@pinia/nuxt", "@vant/nuxt", "@nuxtjs/i18n", "@nuxt/eslint"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/_colors.scss" as *;',
          api: "modern-compiler"
        }
      }
    }
  },
  app: {
    head: {
      meta: [
        { name: "description", content: "我的神奇网站" },
        { name: "keywords", content: "Nuxt3, vue3, vite, vant4" }
      ],
      script: [
        {
          src: "/js/flexible.js",
          type: "text/javascript"
        }
      ],
      charset: "utf-8",
      viewport: "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0"
    }
  },
  i18n: {
    vueI18n: "./i18n/i18n.config.ts"
  },
  postcss: {
    plugins: {
      "postcss-pxtorem": {
        rootValue({ file }: { file: any }) {
          return file.indexOf("vant") !== -1 ? 37.5 : 75
        },
        propList: ["*"]
      }
    }
  }
})
