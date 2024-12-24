<template>
  <div>
    <div>首页</div>
    <h1>{{ res.data.msg }}</h1>
    <h2>{{ res.data.name }}</h2>
  </div>
</template>

<script setup lang="ts">
import { getAboutMessage } from "@/service/about"

useHead({
  title: "首页"
})

const res = await getAboutMessage()
</script>

<style scoped lang="scss"></style>
