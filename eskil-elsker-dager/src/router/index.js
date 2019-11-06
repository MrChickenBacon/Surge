import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import BjarnesCorner from '@/components/BjarnesCorner'
import BjarnesOtherCorner from '@/components/BjarnesOtherCorner'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/bjarne',
      name: 'BjarnesCorner',
      component: BjarnesCorner
    },
    {
      path: '/bjarne2',
      name: 'BjarnesOtherCorner',
      component: BjarnesOtherCorner
    }
  ]
})
