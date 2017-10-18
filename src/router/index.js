import Vue from 'vue'
import Router from 'vue-router'
import demo01 from '@/components/demoPages/demo01'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/demo01',
      name: 'demo01',
      component: demo01
    }
  ]
})
