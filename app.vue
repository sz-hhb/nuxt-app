<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  // 标题模板
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 我的网站` : "我的网站"
  }
})
</script>

<style></style>
