<template>
  <div id="app">
    <div class="app-container">
      <Empty></Empty>
    </div>
    <Avatar :size="200" src="https://cdn.pixabay.com/photo/2017/03/12/11/30/alishan-2136879_1280.jpg"></Avatar>
    <Icon type="icon-telephone"></Icon>
    <Pager @pageChange="pageChange" :current="current" :total="3" :pageNumber="10" :visibleNum="5"></Pager>
  </div>
</template>
<script>
import Avatar from '@/components/Avatar'
import Icon from '@/components/Icon'
import Pager from '@/components/Pager'
import Empty from '@/components/Empty'
export default ({
  components: {
    Avatar,
    Icon,
    Pager,
    Empty
  },
  data () {
    return {
      current: 6
    }
  },
  methods: {
    pageChange (num) {
      console.log(num)
      this.current = num
    }
  }

})
</script>

<style lang="less">
.app-container{
  width: 500px;
  height: 400px;
  background-color: #e8b4b4;
}
.icon-container{
  font-size: 30px;
  color: aquamarine;
}
</style>
