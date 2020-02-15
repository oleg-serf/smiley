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
        router.replace('/');
      })
      .catch(error => console.log(error))
  },
  // Login
  login({
    commit
  }, credentials) {
    return axios.post('/auth/login', credentials)
      .then(res => {
        commit('SET_USERDATA', res.data.token);
        commit('SET_USER_ATTENDING_EVENTS', res.data.attending);
        router.replace('/');
      })
      .catch(error => {
        return JSON.parse(error.request.response).message
      })
  },
  loginFacebook({
    commit
  }, credentials) {
    return axios.post('/auth/login/facebook', credentials)
      .then(res => {
        console.log('facebook logged in', credentials);
        commit('SET_USERDATA', res.data.token);
        commit('SET_USER_ATTENDING_EVENTS', res.data.attending);
        return "success login";
        // router.replace('/');
      })
      .catch(error => {
        return JSON.parse(error.request.response).message
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

    // console.log(state.attendingEvents);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}