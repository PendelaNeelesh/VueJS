import { createStore } from 'vuex'
import user from './modules/user'
import signin from './modules/signin'
import interns from './modules/interns'
export default createStore({
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
