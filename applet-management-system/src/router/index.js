import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Login/Login'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Home
  },
  {
    path: '/index',
    name: 'idnex',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/Index/index'),
    children:[
      {
        path: '/',
        component: () => import('../pages/Index/accountNumber/accountNumber')
      },
      {
        path: '/index/set',
        component: () => import('../pages/Index/set/set')
      },
    ]
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../pages/Register/register')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
