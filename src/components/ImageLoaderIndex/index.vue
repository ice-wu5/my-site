<template>
  <div class="image-loader-container">
    <div class="image-content">
      <img class="origin-img" :src="placeholder" v-if="!isAllDone" />
      <img
        class="img"
        @load="handleLoad"
        @transitionend="handleTransitionend"
        :src="src"
        :style="{
          opacity: isImgLoaded ? '1' : '0',
          transition: `${duration}ms`,
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageLoader',
  props: {
    // placeholder img src
    placeholder: {
      type: String,
      required: true
    },
    // img src
    src: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: false,
      default: 5000
    }
  },
  data () {
    return {
      // is src img loladed
      isImgLoaded: false,
      isAllDone: false
    }
  },
  methods: {
    handleLoad () {
      this.isImgLoaded = true
    },
    handleTransitionend () {
      this.isAllDone = true
      this.$emit('load')
    }
  }
}
</script>
<style lang="less" scoped>
.image-loader-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-content {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
}
img {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.origin-img {
  filter: blur(2vw);
}
</style>
