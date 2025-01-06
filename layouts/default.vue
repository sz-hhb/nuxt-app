<template>
  <div class="layout-page">
    <div class="content">
      <slot />
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="about" to="/about" icon="search">关于</van-tabbar-item>
      <van-tabbar-item name="profile" to="/profile" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const active = ref("home")
const pathInfo: { [key: string]: string } = {
  home: "/",
  about: "/about",
  profile: "/profile"
}

watch(
  () => route.path,
  (path) => {
    for (const key in pathInfo) {
      if (pathInfo[key] === path) {
        active.value = key
      }
    }
  },
  { immediate: true }
)
</script>

<style lang="scss" scoped>
.layout-page {
  width: 750px;
  padding-bottom: 120px;
  margin: 0 auto;
  overflow: hidden;

  .van-tabbar {
    width: 750px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
