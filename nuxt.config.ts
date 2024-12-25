// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["@/assets/css/reset.scss", "animate.css", "vant/lib/index.css"],
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
      // script: [
      //   {
      //     src: "/js/flexible.js",
      //     type: "text/javascript"
      //   }
      // ],
      charset: "utf-8",
      viewport: "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0"
    }
  },
  i18n: {
    vueI18n: "./i18n/i18n.config.ts"
  },
  postcss: {
    plugins: {
      // "postcss-pxtorem": {
      //   rootValue({ file }: any) {
      //     return file.indexOf("vant") !== -1 ? 37.5 : 75
      //   },
      //   propList: ["*"]
      // }
      "postcss-px-to-viewport-8-plugin": {
        unitToConvert: "px", // 要转化的单位
        unitPrecision: 6, // 转换后的精度，即小数点位数
        propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
        viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
        fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
        selectorBlackList: ["ignore-"], // 指定不转换为视窗单位的类名，
        minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
        mediaQuery: false, // 是否在媒体查询的css代码中也进行转换，默认false
        replace: true, // 是否转换后直接更换属性值
        exclude: [], // 设置忽略文件，用正则做目录名匹配
        include: [],
        landscape: false, // 是否处理横屏情况
        viewportWidth: (file: any) => (file.indexOf("van") !== -1 ? 375 : 750) // UI设计稿的宽度
      }
    }
  }
})
