<template>
  <div class="siteaside-container">
    <div class="avatar">
      <Avatar
        :size="150"
        src="https://cdn.pixabay.com/photo/2017/03/12/11/30/alishan-2136879_1280.jpg"
      ></Avatar>
    </div>
    <div class="slogan">think more, do more</div>
    <div class="menu">
      <Menu></Menu>
    </div>
    <div class="contact">
      <Contact :href="href" :src="src" type="tel" text="15207136163"></Contact>
      <Contact :href="href" :src="src" type="tel" text="15207136163"></Contact>
      <Contact
        href="mailto:2019402980@qq.com"
        :src="src"
        type="tel"
        text="15207136163"
      ></Contact>
    </div>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar'
// import Icon from '@/components/Icon'
// import Pager from '@/components/Pager'
// import Empty from '@/components/Empty'
// import ImageLoader from '@/components/ImageLoader'
import Contact from '@/components/Contact'
import Menu from '@/components/Menu'
import CodeImg from '@/assets/code.png'
export default {
  name: 'SiteAside',
  components: {
    Avatar,
    Contact,
    Menu
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
}
</script>

<style lang="less" scoped>
.menu {
  width: 100%;
}
.siteaside-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: #464444;
  color: rgb(185, 187, 190);
}
</style>>
