<template>
  <div class="menu-container">
    <ul>
      <li
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
    isActive (item) {
      if (item.startWith) {
        return location.pathname.startsWith(item.link)
      }
      return location.pathname === item.link
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
  color: #d1cbcb;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    color: #ffffff;
  }
}
.isActive {
  background-color: rgba(0, 0, 0, 0.1);
}
.menu {
  display: flex;
  align-items: center;
  padding-left: 33%;
  line-height: 1.2;
}
span {
  margin-left: 10px;
}
</style>>
