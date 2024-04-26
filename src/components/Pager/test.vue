<template>
  <div id="app">
    app组件
    <Pager></Pager>
  </div>
</template>
<script>
import Pager from '@/components/Pager'
export default ({
  name: 'TestIndex',
  components: {
    Pager

  }
})
</script>

<style lang="less">
.icon-container{
  font-size: 30px;
  color: aquamarine;
}
</style>
