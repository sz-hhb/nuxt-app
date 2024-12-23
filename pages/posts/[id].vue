<template>
  <div>{{ postId }}</div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router"

definePageMeta({
  validate: async (route) => {
    // 检查id是否由数字组成
    return /^\d+$/.test(route.params.id as string)
  }
})

const route = useRoute()
const postId = route.params.id
</script>

<style></style>
