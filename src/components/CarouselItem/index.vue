<template>
  <div class="carousel-item-container">
    <ImageLoader :src="carousel.bigImg" :placeholder="carousel.midImg" />
  </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoaderIndex/index.vue'
export default {
  name: 'CarouselItem',
  components: {
    ImageLoader
  },
  props: {
    carousel: {
      type: Object,
      required: true
    }
    // list: {
    //   type: Array,
    //   required: true
    // }
  }
}
</script>

<style lang="less" scoped>
.carousel-item-container {
  width: 100%;
  height: 100%;
}
img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>>
