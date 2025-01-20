<template>
  <div>
    <div>首页</div>
    <div>{{ t("public") }}</div>
    <h1>{{ res.data.msg }}</h1>
    <h2>{{ res.data.name }}</h2>
    <van-button class="btn" type="primary" @click="btnClick">主要按钮</van-button>
    <loading v-if="false" />
    <van-cell is-link title="基础用法" @click="show = true" />
    <van-action-sheet
      v-model:show="show"
      cancel-text="取消"
      close-on-click-action
      :actions="actions"
      @select="onSelect"
    />
    <van-uploader v-model="fileList" :after-read="afterRead" />
  </div>
</template>

<script setup lang="ts">
import { getAboutMessage } from "@/service/about"
import { showToast, showSuccessToast } from "vant"
import type { UploaderAfterRead } from "vant"

useHead({
  title: "首页"
})

const { t } = useI18n()
const res = await getAboutMessage()

const btnClick = () => {
  showSuccessToast("Success")
}

const show = ref(false)
const actions = [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }]
const onSelect = (item: { name: string }) => {
  showToast(item.name)
}

const fileList = ref([])
const afterRead: UploaderAfterRead = (file) => {
  console.log(file)
  console.log(fileList.value)
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
