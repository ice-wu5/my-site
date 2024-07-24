<template>
  <div id="app">
    <div class="contact-box">
      <ContactIndex :list="contactList" />
    </div>
    <!-- <div class="aside-box">
      <SideAside></SideAside>
    </div> -->
    <div class="pager">
      <!-- <PagerOri :current="6" :total="55" :visibleNum="5" :pageNumber="10"></PagerOri> -->
    </div>
    <!-- <div class="empty">
      <Empty></Empty>
    </div> -->
    <!-- <div class="image-loader">
      <ImageLoader @load="handleLoad" :placeholder="placeholder" :src="src" />
    </div> -->
    <!-- <Pager @pageChange="handlePageChange" :current="current" :total="5" :visibleNum="5" :pageSize="10"></Pager> -->
    <!-- <div class="menu-box">
      <Menu></Menu>
    </div>
    <div class="empty-box">
      <Empty></Empty>
    </div>
    <div class="img-box">
      <ImageLoader :src="src"></ImageLoader>
    </div> -->
  </div>
</template>
<script>
// import Pager from '@/components/PagerIndex/index.vue'
// import ImageLoader from '@/components/ImageLoaderIndex/index.vue'
import ContactIndex from '@/components/ContactIndex/index.vue'
// import Empty from '@/components/EmptyIndex/index.vue'
// import PagerOri from '@/components/Pager/index.vue'
// import SideAside from '@/components/SiteAside'
// import Empty from '@/components/Empty'
// import ImageLoader from '@/components/ImageLoader'
import BigImg from '@/assets/big.jpg'
import Placeholder from '@/assets/bigpic.jpg'
import QRCode from '@/assets/code.png'
// import Menu from '@/components/Menu'

export default {
  components: {
    ContactIndex
    // ImageLoader
    // PagerOri,
    // Pager,
    // Empty
    // SideAside
    //   Empty,
    //   ImageLoader,
    //   Menu
  },
  methods: {
    handlePageChange (num) {
      // console.log(num)
      this.current = num
    },
    handleLoad () {
      console.log('原图load')
    }
  },
  data () {
    return {
      contactList: [
        {
          icon: 'home',
          contact: 'http://www.icewu.com',
          qrcode: QRCode
        },
        {
          icon: 'qq',
          contact: '2019402980',
          qrcode: QRCode
        }, {
          icon: 'wechat',
          contact: '1234567',
          qrcode: QRCode
        }
      ],
      src: BigImg,
      placeholder: Placeholder,
      current: 5,
      total: 40
    }
  }
}
</script>

<style lang="less">
.image-loader {
  width: 500px;
  height: 300px;
  background: #e8b4b4;
  margin: 10px auto;
  border: 2px dashed #000;
}
.empty {
  width: 200px;
  height: 300px;
  background: #e8b4b4;
  margin: 10px auto;
}
.img-box {
  width: 400px;
  height: 300px;
}
.aside-box {
  width: 250px;
  height: 100vh;
}
.contact-box {
  width: 500px;
  height: 300px;
  padding-top: 200px;
  background: #cd9a9a;
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
