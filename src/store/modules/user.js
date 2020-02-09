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
  // attendedEvents(state) {
  //   return state.attendingEvents;
  // }
}
// actions
const actions = {
  // Register User
  signUp({
    commit
  }, credentials) {
    axios.post('/register', credentials)
      .then(res => {
        console.log(res);
        commit('authUser', res.data.token);
        // const now = new Date();
        // const expirationDate = now.getTime()
        router.replace('/');
      })
      .catch(error => console.log(error))
  },
  // Login
  login({
    commit
  }, credentials) {
    return axios.post('/login', credentials)
      .then(res => {
        console.log(res);
        console.log(res.status);
        commit('SET_USERDATA', res.data.token);
        commit('SET_USER_ATTENDING_EVENTS', res.data.data.attending);
        router.replace('/');
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
    localStorage.removeItem('token');
  },
  SET_USER_ATTENDING_EVENTS(state, data) {
    state.attendingEvents = data;
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