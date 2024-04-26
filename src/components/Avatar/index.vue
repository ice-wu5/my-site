<template>
<div class="avatar-container">
  <img :src="src" class="avatar-img" :style="{
    width:size+'px',
    height:size+'px'
  }">
</div>
</template>

<script>
export default {
  name: 'AvatarIndex',
  props: {
    src: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 120
    }
  }
}
</script>

<style lang="less" scoped>
.avatar-img{
  display: block;
  border-radius: 50%;
  object-fit: cover;
}
</style>>
