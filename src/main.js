import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/global.less'
import './styles/mixin.less'
import { showMessage } from './utils'
Vue.config.productionTip = false
Vue.prototype.$showMessage = showMessage
// showMessage()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
