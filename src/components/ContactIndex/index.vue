<template>
  <div class="contact-container">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <a>
          <Icon :type="item.icon" />
          <span>{{ item.contact }}</span>
        </a>
        <div class="qrcode" v-if="item.qrcode">
          <img :src="item.qrcode" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from '@/components/Icon/index.vue'
export default {
  components: {
    Icon
  },
  name: 'ContactIndex',
  props: {
    // [
    //   {
    //     icon:'',
    //     contact:'',
    //     qrcode:''
    //   }
    // ]
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.contact-container {
  width: 100%;
  padding-left: 33%;
}
li {
  position: relative;
  &:hover .qrcode {
    transform: scaleY(1);
    transition: 0.25s;
  }
}
.qrcode {
  position: absolute;
  z-index: 1;
  left: -15%;
  bottom: 110%;
  width: 170px;
  height: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scaleY(0);
  transform-origin: center bottom;
  background-color: #fff;
  border-radius: 3%;
  filter: drop-shadow(2vw);
  &::before {
    content: "";
    position: absolute;
    // left: 48%;
    bottom: -5px;
    width: 10px;
    height: 10px;
    background: #ffffff;
    transform: rotate(45deg);
  }
  img {
    display: block;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
}

a {
  display: flex;
  align-items: center;
  color: #d7d2d2;
  font-size: 12px;
  line-height: 1.2;
}
span {
  margin-left: 10px;
}
.contact {
  display: flex;
}
</style>>
