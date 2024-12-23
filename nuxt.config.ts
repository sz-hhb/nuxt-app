// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-12-21",
    devtools: { enabled: true },
    css: ["animate.css"],
    modules: ["@pinia/nuxt", "@nuxtjs/i18n"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/css/_colors.scss" as *;'
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
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1"
        }
    },
    i18n: {
        vueI18n: "./i18n/i18n.config.ts"
    }
})
