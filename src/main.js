import Vue from 'vue'
import App from './App'
import router from './router'
import XUI from './source/index'
Vue.config.productionTip = false
Vue.use(XUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
