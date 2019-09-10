import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Strategy from '@/components/Strategy'
import Information from '@/components/Information'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/strategy',
      name: 'Strategy',
      component: Strategy
    },
    {
      path: '/information',
      name: 'Information',
      component: Information
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
  ]
})
