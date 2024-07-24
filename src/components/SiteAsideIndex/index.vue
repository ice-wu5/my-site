<template>
  <div class="site-aside-container">
    <Avatar :src="avatar" :size="100"></Avatar>
    <div class="title">icewu</div>
    <MenuIndex :list="menuList"></MenuIndex>
    <ContactIndex :list="contactList"></ContactIndex>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar/index.vue'
import MenuIndex from '@/components/MenuIndex/index.vue'
import ContactIndex from '@/components/ContactIndex/index.vue'
import avatar from '@/assets/2.jpeg'
import QRCode from '@/assets/code.png'
export default {
  name: 'SiteAside',
  components: {
    Avatar,
    MenuIndex,
    ContactIndex
  },
  data () {
    return {
      avatar: avatar,
      menuList: [
        {
          icon: 'home',
          link: '/',
          menu: '首页',
          isActive: false
        },
        {
          icon: 'blog',
          link: '/blog',
          menu: '文章',
          isActive: false,
          startWith: true
        },
        {
          icon: 'about',
          menu: '关于我',
          link: '/about',
          isActive: false
        },
        {
          icon: 'project',
          menu: '项目',
          link: '/project',
          isActive: false

        },
        {
          icon: 'message',
          link: '/message',
          menu: '留言板',
          isActive: true

        }
      ],
      contactList: [
        {
          icon: 'home',
          contact: 'icewu',
          qrcode: QRCode
        },
        {
          icon: 'qq',
          contact: '2019402980',
          qrcode: QRCode
        },
        {
          icon: 'wechat',
          contact: '1234567',
          qrcode: QRCode
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  color: #d1cbcb;
}
.site-aside-container {
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: rgb(112, 108, 109);
  padding: 50px 0;
}
</style>>
