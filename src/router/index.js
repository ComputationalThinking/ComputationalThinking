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
    path: '/icon',
    name: 'Icon',
    component: () => import('../views/Message.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
