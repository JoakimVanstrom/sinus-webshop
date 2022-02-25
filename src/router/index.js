import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SingleProductView from "../views/SingleProductView.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";
import OrderConfirm from "../views/OrderConfirm.vue";
import LoginView from "../views/LoginView.vue"
import Library from "../views/Library.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/SingleProductView/:id",
    name: "SingleProductView",
    component: SingleProductView,
  },
  {
    path: "/Cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/Checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/OrderConfirm",
    name: "OrderConfirm",
    component: OrderConfirm,
  },
 
  {

    path: "/login",
    name: "Login",
    component: LoginView},

    {path: "/Library",
    name: "Library",
    component: Library,

  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
