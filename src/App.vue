<template>
  <div id="app">

    <div class="imageloader-container">
      <ImageLoader @load="handleLoad" :src="'http://www.daxiaamu.com/wp-content/uploads/2014/11/4_ingoscholtes_uk.jpg'"  :duration="duration"></ImageLoader>
    </div>
    <div class="app-container">
      <Empty></Empty>
    </div>
    <div class="contact-box">
      <Contact :href="href" :src="src" type="tel" text="15207136163"></Contact>
      <Contact href="mailto:2019402980@qq.com" :src="src" type="tel" text="15207136163"></Contact>
    </div>
    <Avatar :size="200" src="https://cdn.pixabay.com/photo/2017/03/12/11/30/alishan-2136879_1280.jpg"></Avatar>
    <Icon type="wechat"></Icon>
    <Pager @pageChange="pageChange" :current="current" :total="3" :pageNumber="10" :visibleNum="5"></Pager>
  </div>
</template>
<script>
import Avatar from '@/components/Avatar'
import Icon from '@/components/Icon'
import Pager from '@/components/Pager'
import Empty from '@/components/Empty'
import ImageLoader from '@/components/ImageLoader'
import Contact from '@/components/Contact'
import CodeImg from '@/assets/code.png'

export default ({
  components: {
    Avatar,
    Icon,
    Pager,
    Empty,
    ImageLoader,
    Contact
  },
  data () {
    return {
      current: 6,
      duration: 5,
      src: CodeImg,
      href: 'tencent://message/?Menu=yes&uin=2019402980&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45'
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
.contact-box{
  width: 200px;
}
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
}
</style>
