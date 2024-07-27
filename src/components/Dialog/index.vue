<template>
  <div class="dialog-container">
    <!-- <div class="overlay" v-if="isVisible" @click="handleOverlayClick"></div> -->
    <dialog class="dialog" ref="dialog" @click="handleClick">
      <div :class="{ center: !showModel }" class="content" @click.stop>
        <slot></slot>
      </div>
    </dialog>
  </div>
</template>

<script>
export default {
  name: 'DialogIndex',
  props: {
    showModel: {
      type: Boolean,
      default: false
    },
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('clickOutside')
    },
    handleOverlayClick () {
      console.log('handleOverlayClick')

      this.$refs.dialog.close()

      // this.$emit('update:isVisible', false);
    },
    handleCancel () {
      console.log('handleCancel')
      this.$refs.dialog.close()
    },
    handleDocumentClick (e) {
      console.log('handleDocumentClick')
      if (this.isVisible && !this.$refs.dialog.contains(e.target)) {
        // this.closeDialog()
        this.$emit('clickOutside')
      }
      console.log('123')
      // this.$nextTick(() => {
      //   this.closeDialog()
      // })
    }

  },
  watch: {
    isVisible (res) {
      if (res) {
        if (this.showModel) {
          this.$refs.dialog.showModal()
        } else {
          this.$refs.dialog.show()
          // this.$nextTick(() => {
          //   document.addEventListener('click', this.handleDocumentClick)
          // })
          // console.log('show')
        }
      } else {
        this.$refs.dialog.close()
        // this.$nextTick(() => {
        //   document.removeEventListener('click', this.handleDocumentClick)
        // })
      }
    }
  }
}
</script>

<style lang="less" scoped>
// .dialog-container {
//   // position: fixed;
//   // top: 0;
//   // left: 0;
//   // width: 100%;
//   // height: 100%;
//   // display: flex;
//   // justify-content: center;
//   // align-items: center;
// }
// .overlay {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(79, 73, 73, 0.8);
//   backdrop-filter: blur(10px);
// }
.center {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
}
.dialog {
  position: relative;
  // position: relative;
  border: none;
  margin: auto;
  border-radius: 5px;
}
.dialog::backdrop {
  background: rgba(110, 108, 135, 0.8);
  backdrop-filter: blur(10px);
}
.content {
  padding: 60px;
  // background: white;
  border-radius: 8px;
  background: pink;
}
</style>>
