<template>
  <div class="home-container" ref="home">
    <ul
      class="carousel-container"
      :style="{
        transform: `translateY(-${translateY}px)`,
      }"
    >
      <li
        :style="{
          width: carouselWidth + 'px',
          height: carouselHeight + 'px',
        }"
        class="li"
        v-for="(item, index) in banners"
        :key="index"
      >
        <CarouselItem :carousel="item"></CarouselItem>
      </li>
    </ul>
    <div @click="moveTo(activeIndex - 1)" class="arrow-up">
      <Icon type="arrowUp" v-show="activeIndex > 0"></Icon>
    </div>
    <div @click="moveTo(activeIndex + 1)" class="arrow-down">
      <Icon type="arrowDown" v-show="activeIndex < banners.length - 1"></Icon>
    </div>
    <div class="indicator">
      <div class="indicator-content">
        <div
          @click="moveTo(index)"
          v-for="(item, index) in banners"
          :key="index"
          class="indicator-item"
          :class="{
            active: index === activeIndex,
          }"
        ></div>
      </div>
    </div>
    <!-- <button ref="button" @click="openDialog()">open dialog</button> -->
    <!-- <Dialog -->
    <!-- :isVisible="isVisible" :showModel="true" @clickOutside="closeDialog()"
    ref="dialog" > -->
    <!-- <Clock></Clock> -->
    <!-- <button @click="closeDialog()">close dialog</button> -->
    <!-- </Dialog> -->
  </div>
</template>

<script>
import { debounce } from 'lodash'
import CarouselItem from '@/components/CarouselItem/index.vue'
import Icon from '@/components/Icon/index.vue'
// import Dialog from '@/components/Dialog/index.vue'
import { getBanners } from '@/api/banner'
// import Clock from '@/components/Clock'
export default {
  name: 'HomeIndex',
  components: {
    // Clock,
    // Dialog,
    Icon,
    CarouselItem
  },
  data () {
    return {
      activeIndex: 0, // 当前展示的轮播图
      // translateY: 0, // 轮播图外层容器垂直方向上偏移量
      carouselWidth: 0, // 单个轮播图的宽度
      carouselHeight: 0, // 单个轮播图的高度
      carouselList: [],
      banners: [],
      isVisible: false
    }
  },
  computed: {
    translateY () {
      return this.activeIndex * this.carouselHeight
    }
  },
  watch: {
    isVisible (res) {
      console.log('父isVisible', res)
    }
  },

  mounted () {
    this.getBanners()
    this.setCarouselWidthHeight()
    window.addEventListener('resize', debounce(this.setCarouselWidthHeight, 50))
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.setCarouselWidthHeight)

    document.removeEventListener('click', this.handleDocumentClick)
  },
  methods: {
    moveTo (index) {
      if (index < 0) {
        index = 0
      }
      if (index > this.banners.length - 1) {
        index = this.banners.length - 1
      }
      this.activeIndex = index
    },
    setCarouselWidthHeight () {
      if (this.$refs.home) {
        this.carouselWidth = this.$refs.home.clientWidth
        this.carouselHeight = this.$refs.home.clientHeight
      }
      console.log('resize触发了')
      console.log('carouselWidth', this.carouselWidth)
      console.log('carouselHeight', this.carouselHeight)
    },
    handleDocumentClick (e) {
      console.log('handleDocumentClick')
      if (this.isVisible && !this.$refs.button.contains(e.target)) {
        this.closeDialog()
      }
      console.log('123')
      // this.$nextTick(() => {
      //   this.closeDialog()
      // })
    },
    openDialog () {
      this.isVisible = true
      this.$nextTick(() => {
        document.addEventListener('click', this.handleDocumentClick)
      })
    },
    closeDialog () {
      this.isVisible = false
      this.$nextTick(() => {
        document.removeEventListener('click', this.handleDocumentClick)
      })
    },
    // handleClickOutside () {
    //   this.closeDialog()
    // },
    // handleClick () {
    // },
    async getBanners () {
      try {
        this.banners = await getBanners()
        console.log('banners', this.banners)
      } catch (error) {
        this.$showMessage({
          content: '获取banner数据失败',
          type: 'danger',
          duration: 2000,
          container: this.$refs.home
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.indicator {
  position: absolute;
  right: 25px;
  width: fit-content;
  top: 0;
  bottom: 0;
  height: 100%;
  .indicator-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .indicator-item {
      width: 10px;
      height: 10px;
      margin: 10px 0;
      background: #ffffff;
      border-radius: 50%;
      position: relative;
      cursor: pointer;
      // display: flex;
      // justify-content: center;
      // align-items: center;
    }
    .indicator-item::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 6px;
      height: 6px;
      background: #000000;
      border-radius: 50%;
      display: block;
    }
    .indicator-item.active::before {
      display: none;
    }
  }
  // transform: translateY(-50%);
  // ul {
  //   height: 100%;

  // }
}
.home-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-container {
  transition: 0.2s;
  // width: 100%;
  // height: 100%;
}
// .li {
//   width: 100%;
//   height: 100%;
// }
.arrow-up {
  position: absolute;
  left: 50%;
  top: 5%;
  color: aliceblue;
  animation: jumpUp 2s infinite;
  font-size: 20px;
  cursor: pointer;
}
.arrow-down {
  position: absolute;
  left: 50%;
  bottom: 5%;
  color: aliceblue;
  animation: jumpDown 2s ease infinite;
  font-size: 20px;
  cursor: pointer;
}
@keyframes jumpUp {
  0% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(10px);
  }
}
@keyframes jumpDown {
  0% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-10px);
  }
}
</style>
