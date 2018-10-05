import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import InfoLectures from '@/components/lecture/InfoLectures'
import Login from '@/components/user/Login'
import Register from '@/components/user/Register'
import CreateLecture from '@/components/lecture/CreateLecture'
import Submission from '@/components/Submissions/Submission'
import Reminder from '@/components/Reminder/Reminder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/subject/:sid/lecture/:id',
      name: 'infolectures',
      component: InfoLectures
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
      path: '/lecture/create',
      name: 'createlecture',
      component: CreateLecture
    },
    {
      path: '/submissions',
      name: 'submission',
      component: Submission
    },
    {
      path: '/reminders',
      name: 'reminder',
      component: Reminder
    }
  ]
})
