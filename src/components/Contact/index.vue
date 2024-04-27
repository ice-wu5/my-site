<template>
  <div class="contact-container">
    <a :href="href" class="contact-a">
      <Icon :type="type"></Icon>
      <span class="contact-span">{{ text }}</span>
      <div class="code" v-if="src">
        <img class="img" :src="src" alt="" />
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
      required: false
    },
    href: {
      type: String
    }
  }
}
</script>

<style lang="less" scoped>
.contact-container {
  width: 100%;
  color: rgb(185, 187, 190);
}
.contact-a {
  display: flex;
  justify-content: flex-start;
  position: relative;
  align-items: center;
  min-width: 170px;
  text-align: left;
  padding: 5px 0 5px 10px;
  color: inherit;
  &:hover {
    color: #efeaea;
  }
  &:hover .code {
    transform: scaleY(1);
    opacity: 1;
  }
}
.contact-span {
  margin-left: 20px;
}
.img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.code {
  position: absolute;
  left: 20px;
  top: -152px;
  width: 150px;
  height: 150px;
  padding: 10px;
  transform: scaleY(0);
  transform-origin: center 160px;
  opacity: 0;
  transition: 0.25s;
  background-color: #fff;
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8));
  .tran {
    position: absolute;
    left: 50%;
    bottom: -9%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 15px;
    height: 15px;
    background-color: #fff;
  }
}
</style>>
