import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

//Modules import
import user from './modules/user'
import signin from './modules/signin'
import interns from './modules/interns'

//Global store
export default createStore({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    signin,
    interns,
  }
})
