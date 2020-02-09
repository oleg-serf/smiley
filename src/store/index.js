import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import events from './modules/events'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    events
  }
})