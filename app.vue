<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// const appConfig = useAppConfig()
// console.log(appConfig.title, appConfig.theme)

useHead({
  titleTemplate: "%s - nuxt app",
  meta: [{ name: "description", content: "nuxt app" }]
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
