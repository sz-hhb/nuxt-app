<template>
  <div>
    <h1>发生了错误：{{ error.message }}</h1>
    <button @click="handleError">回到首页</button>
  </div>
</template>

<script setup lang="ts">
interface IError {
  url: string
  statusCode: number
  statusMessage: string
  message: string
  description: string
  data: any
}

const props = defineProps<{
  error: IError
}>()

const handleError = () => clearError({ redirect: "/" })
</script>
