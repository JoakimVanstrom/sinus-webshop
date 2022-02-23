import Vue from "vue";
import Vuex from "vuex";
import * as API from "@/API";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    email: null,
    productsList: [],
    cart: [],
    overlay: false,
    favoriteProducts: [
      {
        id: 1337,
        title: "Fire",
        specialEdition: false,
        price: 599,
        category: "hoodie",
        shortDesc: "unisex",
        longDesc: "Coffin rip grip vert snake casper slide Paul Rodriguez.",
        imgFile: "sinus-hoodie-fire.png",
        createdAt: "2022-02-21T13:04:44.289Z",
        updatedAt: "2022-02-21T13:04:44.289Z",
      },
    ],
    showLogin: false,
  },

  mutations: {
    saveAuthData(state, authData) {
      state.email = authData.email;
    },
    saveProducts(state, products) {
      state.productsList = products;
    },
    addFavoriteProduct(state, product) {
      state.favoriteProducts.push(product);
    },
    toggleOverlay(state) {
      state.overlay = !state.overlay;
    },
    toggleLoginPage(state) {
      state.showLogin = !state.showLogin;
    },
    addToCart(state, product) {
      state.cart.push(product);
    },

  },

  actions: {
    async authenticate(context, credentials) {
      const response = await API.login(credentials.email, credentials.password);
      API.saveToken(response.data.token);
      context.commit("saveAuthData", response.data);
    },
    async fetchProducts(context) {
      const response = await API.getProducts();
      context.commit("saveProducts", response.data);
    },
    addFavoriteProduct(context, product) {
      context.commit("addFavoriteProduct", product);
    },
    toggleOverlay(context) {
      context.commit("toggleOverlay");
    },
    toggleLoginPage(context) {
      context.commit("toggleLoginPage");
    },
    addToCart(context, product) {
      context.commit("addToCart", product);
    },
  },

  modules: {},
});
