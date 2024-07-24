<template>
  <div class="menu-container">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <a>
          <Icon :type="item.icon" />
          <span>{{ item.menu }}</span>
        </a>
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
  name: 'MenuIndex',
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
.menu-container {
  display: flex;
  justify-content: center;
}
a {
  display: flex;
  align-items: center;
  color: #fff;
  line-height: 1.2;
}
span {
  margin-left: 10px;
}
</style>>
