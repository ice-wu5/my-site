<template>
  <div class="empty-container">
    <img src="../../assets/empty.png" />
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
}
img{
  display: block;
  width: 30%;
  height: 30%;
  object-fit: cover;
}
</style>
