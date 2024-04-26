<template>
  <div id="app">
    <div class="imageloader-container">
      <ImageLoader @load="handleLoad" :src="'http://www.daxiaamu.com/wp-content/uploads/2014/11/4_ingoscholtes_uk.jpg'"  :duration="duration"></ImageLoader>
    </div>
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
import ImageLoader from '@/components/ImageLoader'
export default ({
  components: {
    Avatar,
    Icon,
    Pager,
    Empty,
    ImageLoader
  },
  data () {
    return {
      current: 6,
      duration: 5
    }
  },
  methods: {
    pageChange (num) {
      console.log(num)
      this.current = num
    },
    handleLoad (num) {
      console.log('原始图片加载完成了', num)
    }
  }

})
</script>

<style lang="less">
.imageloader-container{
  width: 300px;
  height: 200px;
}
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
