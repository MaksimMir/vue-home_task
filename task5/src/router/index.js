import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName:'Home' */'../views/Home.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName:'Home' */'../views/Home.vue')
  },
  {
    path: '/home/:page',
    component: () => import(/* webpackChunkName:'Home' */'../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName:'About' */'../views/About.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName:'404' */'../views/404.vue')
  },   
  {
    path: '*',
    component: () => import(/* webpackChunkName:'404' */'../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
