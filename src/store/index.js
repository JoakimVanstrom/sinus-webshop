import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/API'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: null,
    productsList: []
  },

  mutations: {
    saveAuthData(state, authData){
      state.email = authData.email
    },
    saveProducts(state, products){
      state.productsList = products
    },
  },

  actions: {
    async authenticate(context, credentials){
      const response = await API.login(credentials.email, credentials.password)
      API.saveToken(response.data.token)
      context.commit('saveAuthData', response.data)
    },
    async fetchProducts(context){
      const response = await API.getProducts()
      context.commit('saveProducts', response.data)
    }
  },

  modules: {
  }
})
