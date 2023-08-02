import Vue from 'vue'
import VueRouter from 'vue-router'
import pageBlog from '../views/pageBlog.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'pageBlog',

    component: pageBlog
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
