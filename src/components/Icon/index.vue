<template>
  <div class="icon-container">
    <i class="iconfont" :class="type"></i>

  </div>
</template>

<script>
export default {
  name: 'IconIndex',
  props: {
    type: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="less">
@import url("//at.alicdn.com/t/c/font_4523054_8xopx2xvjfh.css");

.iconfont{
  color:inherit;
  font-size: inherit;
}
</style>
