<template>
  <div id="app">
    app组件
    <Avatar :size="200" src="https://cdn.pixabay.com/photo/2017/03/12/11/30/alishan-2136879_1280.jpg"></Avatar>
  </div>
</template>
<script>
import Avatar from '@/components/Avatar'
export default ({
  components: {
    Avatar
  }
})
</script>

<style lang="less">

</style>
