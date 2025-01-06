<template>
  <div>
    <div>首页</div>
    <div>{{ t("public") }}</div>
    <h1>{{ res.data.msg }}</h1>
    <h2>{{ res.data.name }}</h2>
    <van-button class="btn" type="primary" @click="btnClick">主要按钮</van-button>
    <loading v-if="false" />
  </div>
</template>

<script setup lang="ts">
import { getAboutMessage } from "@/service/about"
import { showSuccessToast } from "vant"

useHead({
  title: "首页"
})

const { t } = useI18n()
const res = await getAboutMessage()

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
