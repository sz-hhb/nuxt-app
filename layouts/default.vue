<template>
  <div class="layout-page ignore-max-width">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.layout-page {
  width: 750px;
  padding-bottom: 120px;
  margin: 0 auto;
  overflow: hidden;
}

.ignore-max-width {
  max-width: 768px;
}
</style>
