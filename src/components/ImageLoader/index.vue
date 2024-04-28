<template>
  <div class="imageloader-container">
    <!-- 占位图片 -->
    <img
      v-if="isLoaded === false"
      class="img-placeholder"
      :src="placeholder"
      alt=""
    />
    <!-- 实际图片 -->
    <img
      @load="handleLoad"
      class="img-origin"
      :class="{ isShow: isShow, isHidden: !isShow }"
      :src="src"
      alt=""
    />
  </div>
</template>

<script>
import SmallImg from '@/assets/small.jpg'
export default {
  name: 'ImageLoader',
  data () {
    return {
      isLoaded: false,
      isShow: false
    }
  },
  props: {
    duration: {
      type: Number,
      default: 6
    },
    src: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: SmallImg
    }
  },

  methods: {
    handleLoad (e) {
      this.$emit('load', e)
      let timer = setTimeout(() => {
        this.isLoaded = true
        this.isShow = true
        console.log('定时器关闭了')
      }, this.duration * 1000)
      this.$once('hook:beforeDestroy', () => {
        clearInterval(timer)
        timer = null
      }
      )
    }
  }
}
</script>

<style lang="less" scoped>
.imageloader-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}
.isShow {
  opacity: 1;
}
.isHidden {
  opacity: 0;
}
.img-origin {
  z-index: 1;
  transition: 0.5s;
}
.img-placeholder {
  filter: blur(2vw);
  z-index: 2;
}
</style>>
