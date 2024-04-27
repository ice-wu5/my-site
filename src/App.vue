<template>
  <div id="app">
    <!-- <div class="aside-box">
      <SideAside></SideAside>
    </div> -->
    <!-- <div class="empty-box">
      <Empty></Empty>
    </div> -->
    <div class="img-box">
      <ImageLoader :src="src"></ImageLoader>
    </div>
  </div>
</template>
<script>
// import SideAside from '@/components/SiteAside'
// import Empty from '@/components/Empty'
import ImageLoader from '@/components/ImageLoader'
import BigImg from '@/assets/big.jpg'

export default ({
  components: {
    // SideAside,
    // Empty,
    ImageLoader
  },
  data () {
    return {
      src: BigImg
    }
  }

})
</script>

<style lang="less">
.img-box {
  width: 400px;
  height: 300px;
}
.aside-box {
  width: 250px;
  height: 100vh;
}
.contact-box {
  width: 200px;
}
.imageloader-container {
  width: 300px;
  height: 200px;
}
.app-container {
  width: 500px;
  height: 400px;
  background-color: #e8b4b4;
}
.icon-container {
  font-size: 30px;
}
</style>
