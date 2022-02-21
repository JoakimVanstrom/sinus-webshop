import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Product from '../views/SingleProductView.vue'
import Checkout from '../views/Checkout.vue'



Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/Checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/Product',
    name: 'Product',
    component: Product
  },
  ]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router