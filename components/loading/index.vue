<template>
  <div class="loading-box">
    <div class="loading">
      <van-loading color="#1989fa" vertical>加载中...</van-loading>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.loading-box {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;

  .loading {
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
}
</style>
