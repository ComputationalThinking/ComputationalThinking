import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/HomeIcon',
  //   name: 'HomeIcon',
  //   component: () => import('../views/Home.vue')
  // },
  {
    path: '/HomeReturn',
    name: 'HomeReturn',
    component: () =>
      import('../views/Home.vue')
  },
  {
    path: '/information',
    name: 'Information',
    component: () =>
      import('../views/message_content/information.vue')
  },
  {
    path: '/information_detail',
    name: 'Information_detail',
    component: () =>
    import('../views/message_content/information_detail.vue')
  },
  {
    path: '/computerthought',
    name: 'ComputerThought',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/ComputerThought.vue')
  },
  {
    path: '/laboratory',
    name: 'Laboratory',
    component: () => import('../views/Laboratory.vue')
  },
  {
    path: '/member',
    name: 'Member',
    component: () => import('../views/skip/Member.vue')
  },
  {
    path: '/detailmes',
    name: 'DetailMes',
    component: () => import('../views/skip/DetailMes.vue')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('../views/Message.vue')
  },
  {
    path: '/resultintro',
    name: 'ResultIntro',
    component: () => import('../views/ResultIntro.vue')
  },
  {
    path: '/cs4c',
    name: 'Cs4c',
    component: () => import('../views/CS4C.vue')
  },
  {
    path: '/resultList',
    name: 'resultList',
    component: () => import('../views/resultMore/resultList.vue')
  },
  {
    path: '/appExample1',
    name: 'appExample1',
    component: () => import('../views/appExample/appExample1.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
