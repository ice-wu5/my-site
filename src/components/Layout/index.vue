<template>
  <div class="layout-container">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex'
}
</script>

<style lang="less" scoped>
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
}
.left {
  height: 100%;

  flex: 0 0 auto;
  overflow: hidden;
}
.main {
  flex: 1 1 auto;
  overflow: hidden;
}
.right {
  overflow: hidden;

  flex: 0 0 auto;
}
</style>>
