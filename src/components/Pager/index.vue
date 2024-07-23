<template>
  <div class="pager-container" v-if="totalPage>1">
    <!-- 什么时候禁用 -->
    <a @click="handlePageChange(1)" :class="{disabled:current===1}">|&lt;&lt;</a>
    <!-- 禁用：minNum===current -->
    <a @click="handlePageChange(current-1)" :class="{disabled:current===1}">&lt;&lt;</a>
    <a @click="handlePageChange(n)" :class="{active:current===n}" v-for="n in pageNumList" :key="n">{{n}}</a>
    <a @click="handlePageChange(current+1)" :class="{disabled:current===maxNum}">&gt;&gt;</a>
    <a @click="handlePageChange(totalPage)" :class="{disabled:current===totalPage}">&gt;&gt;|</a>
    <div class="test" >{{pageNumList}}</div>
  </div>
</template>

<script>
export default {
  name: 'PagerIndex',
  props: {
    // 当前显示第几页
    current: {
      type: Number,
      default: 1
    },
    // 数据总条数
    total: {
      type: Number
    },
    // 每页显示几条
    pageNumber: {
      type: Number
    },
    // 显示页码数量
    visibleNum: {
      type: Number,
      default: 5
    }
  },
  mounted () {
    console.log(this.totalPage)
  },
  methods: {
    // 向父组件抛出事件，传递需要显示的当前页码
    handlePageChange (num) {
      if (num === this.current) {
        return
      }
      if (num < 1) {
        num = 1
      }
      if (num > this.totalPage) {
        num = this.totalPage
      }
      this.$emit('pageChange', num)
    }
  },
  computed: {
    // 显示的最小页码数
    minNum () {
      let min = this.current - Math.floor(this.visibleNum / 2)
      if (min < 1) {
        min = 1
      }
      return min
    },
    // 总页数
    totalPage () {
      return Math.ceil(this.total / this.pageNumber)
    },
    // 显示的最大页码数
    maxNum () {
      let max = this.minNum + this.visibleNum - 1
      if (max > this.totalPage) {
        max = this.totalPage
      }
      return max
    },
    // 展示的页码数，数组
    pageNumList () {
      const arr = []
      for (let i = this.minNum; i < this.maxNum + 1; i++) {
        arr.push(i)
      }
      return arr
    }
  }
}
</script>

<style lang="less" scoped>
.pager-container{
  display: flex;
}
.pager-container a{
  display: block;
  width: 50px;
  height: 50px;
  margin: 0 10px;
  background-color: #dcb2b2;
  text-align: center;
  line-height: 50px;
  &:hover{
    color: #fff;
    background-color: #83b6ea;
  }
  &.active{
    font-weight: 700;
    font-size: 20px;
  }
  &.disabled{
    background-color: #dcb2b2;
    opacity: 0.5;
    cursor: not-allowed;
    color: inherit;
  }
}
</style>>
