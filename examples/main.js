// import './source/styles/index.styl'
import Vue from 'vue'
import App from './App'
import router from './router'
import XUI from '../packages/index'
import DemoBlock from './components/demo-block.vue'
import promise from 'es6-promise'
promise.polyfill()
Vue.config.productionTip = false
Vue.component("demo-block", DemoBlock);

Vue.use(XUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
