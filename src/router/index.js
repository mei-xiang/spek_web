import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('views/home/Home')
  },
  {
    path: '/enterpriseImage',
    component: () => import('views/enterpriseImage/EnterpriseImage')
  },
  {
    path: '/deviceTopology',
    component: () => import('views/deviceTopology/DeviceTopology')
  },
  {
    path: '/enterpriseOrder',
    component: () => import('views/enterpriseOrder/EnterpriseOrder')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
