import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import { routes } from '@/router/routes.js'
Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: () => import(/* webpackChunkName: "about" */ '@/views/Home/index.vue')
//   },
//   {
//     path: '/blog',
//     name: 'Blog',
//     component: () => import(/* webpackChunkName: "about" */ '@/views/Blog/index.vue')
//   },
//   {
//     path: '/about',
//     name: 'About',
//     component: () => import(/* webpackChunkName: "about" */ '@/views/About/index.vue')
//   },
//   {
//     path: '/project',
//     name: 'Project',
//     component: () => import(/* webpackChunkName: "about" */ '@/views/Project/index.vue')
//   },
//   {
//     path: '/message',
//     name: 'Message',
//     component: () => import(/* webpackChunkName: "about" */ '@/views/Project/index.vue')
//   }
// ]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

export default router
