<template>
  <div class="clock-container">
    <h1>当前时间：{{ current }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ClockIndex',
  data () {
    return {
      timer: null,
      current: this.getCurrent()
    }
  },
  created () {
    this.timer = setInterval(() => {
      this.current = this.getCurrent()
      // console.log('this.current', this.current)
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  methods: {
    getCurrent () {
      return new Date().toLocaleTimeString()
    }
  }
}
</script>

<style lang="less" scoped>
</style>>
