import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios-auth'

import router from '../router'


Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {
    authUser (state, token){
      state.idToken = token;
    },
    clearToken (state){
      state.idToken = null;
      localStorage.removeItem('token');
    }
  },
  actions: {
    signup ({commit}, authData){
      axios.post('/register', authData)
          .then(res => {
            console.log(res);
            commit('authUser', res.data.token);
            // const now = new Date();
            // const expirationDate = now.getTime()
            localStorage.setItem('token', res.data.token);
            router.replace('/');
          })
          .catch(error => console.log(error))
    },
    login({commit}, authData){
      axios.post('/login', authData)
          .then(res => {
            console.log(res);
            commit('authUser', res.data.token);
            localStorage.setItem('token', res.data.token);
            router.replace('/');
          })
          .catch(error => console.log(error))
    },
    autoLogin({commit}){
      const token = localStorage.getItem('token');
      if(!token){
        return;
      }

      commit('authUser', token);
    },
    logout({commit}){
      commit('clearToken');
    }
  },
  getters: {
    isAuthenticated(state){
      return state.idToken !== null;
    }
  }
})
