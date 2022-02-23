import Vue from "vue";
import Vuex from "vuex";
import * as API from "@/API";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    email: null,
    productsList: [],
    overlay: false,
    favoriteProducts: [],
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
  },

  modules: {},
});
