<template>
  <div class="pager-index-container" v-if="maxNum>1">
    <a @click="handleClick(1)" :class="{ disabled: current === 1 }">|&lt;&lt;</a>
    <a @click="handleClick(current-1)" :class="{ disabled: current === 1 }"> &lt;&lt;</a>
    <a
    @click="handleClick(item)"
      :class="{ active: item === current }"
      v-for="(item, index) in pageNumArray"
      :key="index"
      >{{ item }}</a
    >
    <a @click="handleClick(current+1)" :class="{ disabled: current === maxNum }">&gt;&gt;</a>
    <a @click="handleClick(maxNum)" :class="{ disabled: current === maxNum }">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
  name: 'PagerIndex',
  props: {
    // total data number
    total: {
      type: Number,
      required: true
    },
    // current page num
    current: {
      type: Number,
      required: true
    },
    // num data pre page
    pageSize: {
      type: Number,
      required: true,
      default: 10
    },
    // visible page number
    visibleNum: {
      type: Number,
      required: true,
      default: 5
    }
  },
  methods: {
    handleClick (num) {
      // console.log('child', num)
      if (num === this.current) {
        return
      }
      if (num < 1) {
        num = 1
      }
      if (num > this.maxNum) {
        num = this.maxNum
      }
      this.$emit('pageChange', num)
    }
  },
  mounted () {
    // console.log(this.pageNumArray)
    // console.log(this.minVisibleNum)
    // console.log(this.maxVisibleNum)
  },
  computed: {
    // max page number
    maxNum () {
      return Math.ceil(this.total / this.pageSize)
    },
    // page number Array
    pageNumArray () {
      const pageNumArray = []
      for (let num = this.minVisibleNum; num <= this.maxVisibleNum; num++) {
        pageNumArray.push(num)
      }
      return pageNumArray
    },
    // min visible page number
    minVisibleNum () {
      let minVisibleNum = this.current - Math.floor(this.visibleNum / 2)
      if (minVisibleNum < 1) {
        minVisibleNum = 1
      }
      return minVisibleNum
    },
    // max visible page number
    maxVisibleNum () {
      let maxVisibleNum = this.minVisibleNum + this.visibleNum - 1
      if (maxVisibleNum > this.maxNum) {
        maxVisibleNum = this.maxNum
      }
      return maxVisibleNum
    }
  }
}
</script>

<style lang="less" scoped>
.pager-index-container {
  display: flex;
  justify-content: center;
}

a {
  display: block;
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;

  &.active,
  &:hover {
    font-weight: 700;
    background: lightblue;
    color: #fff;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
>
