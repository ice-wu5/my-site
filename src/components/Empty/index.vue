<template>
  <div class="empty-container">
    <img class="empty-img" src="https://img01.yzcdn.cn/vant/empty-image-default.png">
  </div>
</template>

<script>
export default {
  name: 'EmptyIndex'
}
</script>

<style lang="less" scoped>
.empty-container{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .empty-img{
    width: 50%;
    height: 50%;
    object-fit: cover;
  }
}
</style>>
