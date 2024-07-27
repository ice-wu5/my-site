<template>
  <div ref="messageContainer" class="message-container">message</div>
</template>

<script>
export default {
  name: 'MessageIndex',
  mounted () {
    // this.$showMessage({
    //   content: '注册成功',
    //   type: 'success',
    //   duration: 5000,
    //   container: this.$refs.messageContainer,
    //   callback: () => {
    //     console.log('callback执行了')
    //   }
    // })
  }
}
</script>

<style lang="less" scoped>
.message-container {
  width: 100%;
  height: 100%;
}
</style>
