import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: (resolve) => {
      console.log("resolve", resolve)
      require(['@/views/home'], resolve)
    }
  }]
})
