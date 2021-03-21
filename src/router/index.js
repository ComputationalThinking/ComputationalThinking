import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import news from '../views/message_content/information_detail.vue'

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
    component: () => import('../views/Home.vue')
  },
  {
    path: '/information_search',
    name: 'Information_search',
    component: () => import('../views/message_content/information_search.vue')
  },
  {
    path: '/information_foreign',
    name: 'Information_foreign',
    component: () => import('../views/message_content/information_foreign.vue')
  },
  {
    path: '/information_nation',
    name: 'Information_nation',
    component: () => import('../views/message_content/information_nation.vue')
  },
  {
    path: '/information_lab',
    name: 'Information_lab',
    component: () => import('../views/message_content/information_lab.vue')
  },
  {
    path: '/information_detail',
    name: 'Information_detail',
    component: () => import('../views/message_content/information_detail.vue')
  },
  {
    path: '/computerthought',
    name: 'ComputerThought',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ComputerThought.vue')
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
  },
  {
    path: '/result1',
    name: 'result1',
    component: () => import('../views/resultMore/result1.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: news
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
