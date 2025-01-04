<template>
  <div>
    <div>首页</div>
    <div>{{ t("public") }}</div>
    <h1>{{ res.data.msg }}</h1>
    <h2>{{ res.data.name }}</h2>
    <van-button class="btn" type="primary" @click="btnClick">主要按钮</van-button>
  </div>
</template>

<script setup lang="ts">
import { getAboutMessage } from "@/service/about"
import { showSuccessToast } from "vant"

const { t } = useI18n()

useHead({
  title: "首页"
})

const res = await getAboutMessage()

const showBottom = ref(false)

const btnClick = () => {
  showSuccessToast("Success")
}
</script>

<style scoped lang="scss">
.btn {
  width: 750px;
}

.bottom-popup {
  height: 600px;
  padding: 30px;
}
</style>
