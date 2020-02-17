import axios from '@/axios-auth'
import router from '@/router'

// initial state
const state = {
  token: (localStorage.getItem('token')) || null,
  attendingEvents: (localStorage.getItem('attendingEvents')) || []
}

// getters
const getters = {
  isAuthenticated(state) {
    return state.token !== null;
  },
}

// TODO: Rewrite whats left to promises
// actions
const actions = {
  // Register User
  signUp({
    commit
  }, credentials) {
    axios.post('/auth/register', credentials)
      .then(res => {
        commit('SET_USERDATA', res.data.token);
        // const now = new Date();
        // const expirationDate = now.getTime()
        router.push({
          name: 'home'
        });
      })
      .catch(error => console.log(error))
  },
  // Login
  login({
    commit
  }, credentials) {
    return new Promise((resolve, reject) => {
      axios.post('/auth/login', credentials)
        .then((res) => {
          commit('SET_USERDATA', res.data.token);
          commit('SET_USER_ATTENDING_EVENTS', res.data.attending);
          router.push({
            name: 'home'
          });
          resolve(res);
        })
        .catch((error) => {
          let content = JSON.parse(error.request.response);
          reject(content.message);
        })
    })
  },
  loginFacebook({
    commit
  }, credentials) {
    return new Promise((resolve, reject) => {
      axios.post('/auth/login/facebook', {
          accessToken: credentials
        })
        .then((res) => {
          commit('SET_USERDATA', res.data.token);
          commit('SET_USER_ATTENDING_EVENTS', res.data.attending);
          router.push({
            name: 'home'
          });
          resolve(res);
        })
        .catch((error) => {
          let content = JSON.parse(error.request.response);
          reject(content.message);
        })
    })
  },
  loginGoogle({
    commit
  }, credentials) {
    return new Promise((resolve, reject) => {
      axios.post('/auth/login/google', {
          token: credentials
        })
        .then((res) => {
          commit('SET_USERDATA', res.data.token);
          commit('SET_USER_ATTENDING_EVENTS', res.data.attending);
          router.push({
            name: 'home'
          });
          resolve(res);
        })
        .catch((error) => {
          let content = JSON.parse(error.request.response);
          reject(content.message);
        })
    })
  },
  forgot({
    commit
  }, email) {
    return axios.post('/auth/reset', {
        email: email
      })
      .then(res => {
        return res;
      })
      .catch(error => {
        return JSON.parse(error.request.response).message
      })
  },
  reset({
    commit
  }, data) {
    return axios.post('/auth/reset/password', data)
      .then(res => {

        return res;
      })
      .catch(error => {
        return JSON.parse(error.request.response).message
      })
  },
  // logout 
  logout({
    commit
  }) {
    commit('REMOVE_USERDATA');
    router.push({
      path: 'home'
    });
  }
}

// mutations
const mutations = {
  SET_USERDATA(state, token) {
    state.token = token;
    localStorage.setItem('token', token);
  },
  REMOVE_USERDATA(state) {
    state.token = null;
    state.attendingEvents = null;
    localStorage.removeItem('token');
    localStorage.setItem('attendingEvents', []);
    router.push({
      path: 'home'
    });
  },
  SET_USER_ATTENDING_EVENTS(state, data) {
    state.attendingEvents = Array.from(data);
    localStorage.setItem('attendingEvents', data);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}