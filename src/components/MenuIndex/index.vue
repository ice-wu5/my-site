<template>
  <div class="menu-container">
    <ul>
      <li
        @click="handleClick(item)"
        :class="{ isActive: isActive(item) }"
        v-for="(item, index) in list"
        :key="index"
      >
        <div class="menu">
          <Icon :type="item.icon" />
          <span>{{ item.menu }}</span>
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
  },
  methods: {
    handleClick (item) {
      this.$emit('changeMenu', item)
    },
    isActive (item) {
      const curRoutePath = this.$route.path
      console.log('curRoutePath', curRoutePath)
      if (item.startWith) {
        return curRoutePath.startsWith(item.link)
      }
      return curRoutePath === item.link
    }
  }
}
</script>

<style lang="less" scoped>
.menu-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
ul {
  width: 100%;
}
li {
  width: 100%;
  color: #b8b5b5;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    color: #ffffff;
  }
}
.isActive {
  background-color: rgba(0, 0, 0, 0.1);
  color: #ffffff;
}
.menu {
  display: flex;
  align-items: center;
  padding-left: 33%;
  line-height: 1.8;
  font-size: 16px;
}
span {
  margin-left: 10px;
}
.icon-container {
  font-size: 20px;
}
</style>>
