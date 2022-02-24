import Vue from "vue";
import Vuex from "vuex";
import * as API from "@/API";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    email: null,
    productsList: [],
    cart: [],
    products: {},
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
      for (let product of products) {
        state.productsList.push(product);
        Vue.set(state.products, product.id, product);
      }
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
      const inCart = state.cart.find((cartItem) => cartItem.id === product.id);
      if (inCart) {
        inCart.amount++;
      } else {
        state.cart.push({
          id: product.id,
          amount: 1,
        });
      }
    },
    updateCartItem(state, { id, amount }) {
      const inCart = state.cart.find((cartItem) => cartItem.id == id);
      inCart.amount = amount;
    },
    incrementBtn(state, product) {
      state.cart[state.cart.indexOf(product)].amount++;
    },
    decrementBtn(state, product) {
      state.cart[state.cart.indexOf(product)].amount--;
    },
    removeFromCart(state, product) {
      state.cart.splice(state.cart.indexOf(product), 1);
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
    addToCart({ commit }, product) {
      commit("addToCart", product);
    },
    updateCartItem({ commit }, { id, amount }) {
      commit("updateCartItem", {
        id,
        amount,
      });
    },
    decrementBtn(context, product) {
      context.commit("decrementBtn", product);
    },
    incrementBtn(context, product) {
      context.commit("incrementBtn", product);
    },
    removeFromCart({ commit }, product) {
      commit("removeFromCart", product);
    }
  },

  getters: {
    cart(state) {
      return state.cart.map((product) => ({
        id: product.id,
        category: state.products[product.id].category,
        title: state.products[product.id].title,
        imgFile: state.products[product.id].imgFile,
        price: state.products[product.id].price,
        amount: product.amount,
      }));
    },
    totalPrice(state) {
      return state.cart.reduce((total, product) => {
        return total + product.amount * state.products[product.id].price;
      }, 0);
    },
  },
  modules: {},
});
