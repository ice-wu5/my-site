<template>
  <div class="icon-container">
    <i class="iconfont" :class="fontClass"></i>

  </div>
</template>

<script>
const classNameMap = {
  home: '',
  qq: 'icon-QQ',
  wechat: 'icon-wechat',
  tel: 'icon-telephone'
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
@import url("//at.alicdn.com/t/c/font_4523054_8xopx2xvjfh.css");

.iconfont{
  color:inherit;
  font-size: inherit;
}
</style>
