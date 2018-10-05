import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/user/Login'
import Register from '@/components/user/Register'
import EditUser from '@/components/user/UserEdit'
import Dashboard from '@/components/user/Dashboard'
import Calendar from '@/components/user/Calendar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/:id/dashboard',
      name: 'user_dashboard',
      component: Dashboard
    },
    {
      path: '/:id/edit',
      name: 'edit_user',
      component: EditUser
    },
    {
      path: '/:id/calendar',
      name: 'calendar',
      component: Calendar
    }
  ]
})
