<template>
  <div class="icon-container">
    <i class="iconfont" :class="fontClass"></i>
  </div>
</template>

<script>
const classNameMap = {
  home: 'icon-home',
  success: 'icon-success',
  info: 'icon-info',
  error: 'icon-error',
  danger: 'icon-Danger',
  qq: 'icon-QQ',
  wechat: 'icon-wechat',
  tel: 'icon-telephone',
  blog: 'icon-article',
  about: 'icon-about',
  project: 'icon-code',
  message: 'icon-email',
  empty: 'icon-empty'
}
export default {
  name: 'IconIndex',
  props: {
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    fontClass () {
      return classNameMap[this.type]
    }
  }
}
</script>

<style scoped lang="less">
@import url("//at.alicdn.com/t/c/font_4523054_yij98wvbcgr.css");

.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>
