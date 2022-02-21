import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: null,
  },
  mutations: {
    saveAuthData(state, authData){
      state.email = authData.email
    }
  },
  actions: {
    async authenticate(context, credentials){
      const response = await API.login(credentials.email, credentials.password)
      API.saveToken(response.data.token)
      context.commit('saveAuthData', response.data)
    },
    
  },
  modules: {
  }
})
