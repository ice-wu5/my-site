<template>
  <div class="contact-container">
    <a :href="href" class="contact-a">
      <Icon :type="type"></Icon>
      <span class="contact-span">{{text}}</span>
      <div class="code">
        <img class="img" :src="src" alt="">
        <div class="tran"></div>
      </div>
    </a>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  name: 'ContactIndex',
  components: {
    Icon
  },
  props: {
    type: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    href: {
      type: String
    }
  }
}
</script>

<style lang="less" scoped>
.contact-container{
  width: 100%;
  height: 30px;
  background-color: #bbdd8f;
}
.contact-a{
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  padding: 0 10px;
  &:hover .code{
  transform: scaleY(1);
  opacity: 1;

  }
}
.contact-span{
  margin-left: 10px;
}
.img{
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.code{
  position: absolute;
  left:20px;
  top:-160px;
  width: 150px;
  height: 150px;
  padding: 10px;
  transform: scaleY(0);
  transform-origin: center 160px;
  opacity: 0;
  transition: 0.25s;
  background-color: #ffffff;
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8));
  .tran{
    position: absolute;
    left:50%;
    bottom:-9%;
    transform: translate(-50%,-50%) rotate(-45deg);
    width: 15px;
    height: 15px;
    background-color: #ffffff;
  }
}
</style>>
