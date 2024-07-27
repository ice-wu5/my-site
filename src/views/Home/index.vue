<template>
  <div class="home-container" ref="home">
    <button ref="button" @click="openDialog()">open dialog</button>
    <Dialog
      :isVisible="isVisible"
      :showModel="false"
      @clickOutside="closeDialog()"
      ref="dialog"
    >
      <Clock></Clock>
      <button @click="closeDialog()">close dialog</button>
    </Dialog>
  </div>
</template>

<script>
import Dialog from '@/components/Dialog/index.vue'
import { getBanners } from '@/api/banner'
import Clock from '@/components/Clock'
export default {
  name: 'HomeIndex',
  components: {
    Clock,
    Dialog
  },
  data () {
    return {
      banners: [],
      isVisible: false
    }
  },
  watch: {
    isVisible (res) {
      console.log('父isVisible', res)
    }
  },
  mounted () {
    this.getBanners()
  },
  beforeDestroy () {
    document.removeEventListener('click', this.handleDocumentClick)
  },
  methods: {
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
.home-container {
  width: 100%;
  height: 100%;
}
</style>
