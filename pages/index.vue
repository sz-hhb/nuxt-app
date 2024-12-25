<template>
  <div>
    <div>首页</div>
    <h1>{{ res.data.msg }}</h1>
    <h2>{{ res.data.name }}</h2>
    <van-button class="btn" type="primary" @click="btnClick">主要按钮</van-button>
  </div>
</template>

<script setup lang="ts">
import { getAboutMessage } from "@/service/about"
import { showSuccessToast } from "vant"

useHead({
  title: "首页"
})

const res = await getAboutMessage()

const btnClick = () => {
  showSuccessToast("Success")
}
</script>

<style scoped lang="scss">
.btn {
  width: 750px;
}
</style>
