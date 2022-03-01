import Vue from "vue";
import Vuex from "vuex";
import * as API from "@/API";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    email: null,
    showLogin: false,
    productsList: [],
    cart: [],
    products: {},
    overlay: false,
    favoriteProducts: [],
    orderHistory: [],
    userRole: null,
    address: {},
  },

  mutations: {
    saveAuthData(state, authData) {
      state.email = authData.email;
      state.userRole = authData.role;
      state.address = authData.address;
    },
    
    saveProducts(state, products) {
      for (let product of products) {
        state.productsList.push(product);
        Vue.set(state.products, product.id, product);
      }
    },

    saveProductsPage(state, products) {
      for (let product of products) {
        state.productsList.push(product);
        Vue.set(state.products, product.id, product);
      }
    },

    addFavoriteProduct(state, product) {
      if (!state.favoriteProducts.includes(product)) {
        state.favoriteProducts.push(product);
      }
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

    updateCartItem(state, {
      id,
      amount
    }) {
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

    addToOrderHistory(state, cart) {
      state.orderHistory.push(cart);
    }

  },

  actions: {
    async authenticate(context, credentials) {
      const response = await API.login(credentials.email, credentials.password);
      API.saveToken(response.data.token);
      const myData = await API.getMyInfo();
      console.log(myData);
      console.log(response.data);
      context.commit("saveAuthData", myData.data);
    },
    sendOrder(_, payload) {
      payload.items = payload.items.map(item => item.id)
      console.log(payload);
      API.createOrder(payload).then(response => {
        console.log(response.data);
      })
    },

    async fetchProducts(context) {
      const response = await API.getProducts();
      context.commit("saveProducts", response.data);
    },

    async fetchProductsPage(context) {
      const response = await API.getProductsPage();
      // console.log(response.data);
      context.commit("saveProductsPage", response.data);
    },

    async fetchProductsPage3(context) {
      const response = await API.getProductsPage3();
      // console.log(response.data);
      context.commit("saveProductsPage", response.data);
    },

    async fetchProductsPage4(context) {
      const response = await API.getProductsPage4();
      // console.log(response.data);
      context.commit("saveProductsPage", response.data);
    },

    async fetchProductsPage5(context) {
      const response = await API.getProductsPage5();
      // console.log(response.data);
      context.commit("saveProductsPage", response.data);
    },

    addFavoriteProduct({
      commit
    }, product) {
      commit("addFavoriteProduct", product);
    },

    toggleOverlay(context) {
      context.commit("toggleOverlay");
    },

    toggleLoginPage(context) {
      context.commit("toggleLoginPage");
    },

    addToCart({
      commit
    }, product) {
      commit("addToCart", product);
    },

    updateCartItem({
      commit
    }, {
      id,
      amount
    }) {
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

    removeFromCart({
      commit
    }, product) {
      commit("removeFromCart", product);
    },

    emptyCart({
      commit
    }) {
      commit("emptyCart");
    },

    addToOrderHistory({
      commit
    }, cart) {
      commit("addToOrderHistory", cart);
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
    getProductsByCategory: (state) => (category) =>
      state.productsList.filter((product) => product.category == category),
  },
  modules: {},
});