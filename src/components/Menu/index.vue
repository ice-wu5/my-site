<template>
  <div class="menu-container width-100p">
    <a
      :href="item.link"
      :class="{ isActive: isActive(item) }"
      class="flex menu-item align-items-c padding-10"
      v-for="item in menuList"
      :key="item.id"
    >
      <div class="icon">
        <Icon :type="item.icon"></Icon>
      </div>
      <span>{{ item.title }}</span>
    </a>

    <!-- <Contact href="/" type="home" text="home"></Contact>
    <Contact href="/blog" type="blog" text="blog"></Contact>
    <Contact href="/about" type="about" text="about"></Contact>
    <Contact href="/project" type="project" text="project"></Contact>
    <Contact href="/message" type="message" text="message"></Contact> -->
  </div>
</template>

<script>
// import Contact from '@/components/Contact'
import Icon from '@/components/Icon'
export default {
  name: 'MenuIndex',
  components: {
    // Contact,
    Icon
  },
  methods: {
    isActive (item) {
      const fullPath = location.pathname.toLowerCase()
      console.log(fullPath)
      if (item.isStartWith) {
        return fullPath.startsWith(item.link)
      } else {
        return item.link === fullPath
      }
    }
  },
  data () {
    return {
      menuList: [
        {
          id: 1,
          title: 'home',
          link: '/',
          icon: 'home'
        },
        {
          id: 2,
          title: 'blog',
          link: '/blog',
          icon: 'blog',
          isStartWith: true
        },
        {
          id: 3,
          title: 'about',
          link: '/about',
          icon: 'about'
        },
        {
          id: 4,
          title: 'project',
          link: '/project',
          icon: 'project'
        },
        {
          id: 5,
          title: 'message',
          link: '/message',
          icon: 'message'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.width-100p {
  width: 100%;
}
a {
  &:hover {
    color: #aba9a9;
  }
  &.isActive {
    background-color: #c4c2c2;
  }
}
.block {
  display: block;
}
.padding-10 {
  padding: 10px 50px;
}
.icon {
  margin-right: 10px;
}
</style>>
