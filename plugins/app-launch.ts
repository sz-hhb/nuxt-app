export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:beforeMount", () => {
    // 在应用程序挂载之前调用，仅在客户端端调用。
    console.log("app:beforeMount")
  })
  nuxtApp.hook("app:mounted", () => {
    // 在 Vue 应用程序初始化并在浏览器中挂载时调用。仅在客户端端调用。
    console.log("app:mounted")
  })
})
