<template>
  <div>
    <slot />
    <van-tabbar v-model="active">
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/about" icon="search">关于</van-tabbar-item>
      <van-tabbar-item to="/profile" icon="friends-o">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

const active = ref(0)

const route = useRoute()
const ROUTE_LIST = ["/", "/about", "profile"]

watch(
  () => route.path,
  (newVal) => {
    ROUTE_LIST.forEach((item, index) => {
      if (item === newVal) {
        active.value = index
      }
    })
  },
  { immediate: true }
)
</script>

<style lang="scss" scoped></style>
