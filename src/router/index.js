import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import InfoLectures from '@/components/lecture/InfoLectures'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/lectures/info',
      name: 'infolectures',
      component: InfoLectures
    }
  ]
})
