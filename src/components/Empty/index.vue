<template>
  <div class="empty-container">
    <Icon type="empty"></Icon>
    <p class="text">{{ text }}</p>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  name: 'EmptyIndex',
  components: {
    Icon
  },
  props: {
    text: {
      type: String,
      default: '暂无数据'
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.empty-container {
  .self-center(absolute);
  text-align: center;
  color: @words;
}
</style>>
