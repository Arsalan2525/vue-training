import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../../src/App.vue'
import ShowCategories from '../../src/components/ShowCategories.vue'
import ShowProducts from '../../src/components/ShowProducts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home
  },
  {
    path: '/:name/:id',
    // name: 'MenWear',
    // component: ShowCategories
  },
  {
    path: '/:name/:id/:cat_name/:cat_id',
    name: 'test',
    component: ShowProducts
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../../src/App.vue')
    component: ShowCategories
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
