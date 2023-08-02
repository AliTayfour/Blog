import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: "",
    isAuthenticated: localStorage.getItem("Token") || false,
    Authentication: localStorage.getItem("Token") || null
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
    Authentication(state) {
      return state.Authentication;
    }
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem("Token")) {
        state.token = localStorage.getItem("Token");
        state.isAuthenticated = true;
      } else {
        state.token = "";
        state.isAuthenticated = false;
      }
    },
    setToken(state, token) {
      state.token = token;
      state.Authentication = token;
      state.isAuthenticated = true;
    },
    removeToken(state) {
      state.token = "";
      state.isAuthenticated = false;
    }
  },
  actions: {

  },
  modules: {}
})
