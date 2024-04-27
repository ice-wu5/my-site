<template>
  <div class="menu-container">
    <Contact href="/" type="home" text="home"></Contact>
    <Contact href="/blog" type="blog" text="blog"></Contact>
    <Contact href="/about" type="about" text="about"></Contact>
    <Contact href="/project" type="project" text="project"></Contact>
    <Contact href="/message" type="message" text="message"></Contact>
  </div>
</template>

<script>
import Contact from '@/components/Contact'
export default {
  name: 'MenuIndex',
  components: {
    Contact
  }
}
</script>

<style lang="less" scoped>

</style>>
