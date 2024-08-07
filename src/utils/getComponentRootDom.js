// 获取组件渲染的根dom
import Vue from 'vue'
export default function (comp, props) {
  const vm = new Vue({
    render: h => h(comp, { props })
  })
  vm.$mount()
  return vm.$el
}
