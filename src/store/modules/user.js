import axios from '@/axios-auth'
import router from '@/router'

// initial state
const state = {
  token: (localStorage.getItem('token')) || null,
  organisation: {
    admin: (localStorage.getItem('organisation-user')) || null,
    slug: (localStorage.getItem('organisation-slug')) || null,
  },
  attendingEvents: (localStorage.getItem('attendingEvents')) || []
}

// getters
const getters = {
  isAuthenticated(state) {
    return state.token !== null;
  },
  organisationSlug(state) {
    return state.organisation.slug;
  }
}

// TODO: Rewrite whats left to promises
// actions
const actions = {
  // Register User
  signUp({
    commit
  }, credentials) {
    return new Promise((resolve, reject) => {
      axios.post('/auth/register', credentials)
        .then(res => {
          commit('SET_USERDATA', res.data);
          commit('SET_USER_ATTENDING_EVENTS', res.data.attending);
          commit('SET_ORGANISATION_DATA', res.data.organisation);
          router.push({
            name: 'home'
          });
          resolve('success');
        })
        .catch(error => {
          let content = JSON.parse(error.request.response).errors;
          let errorsList = content;
          let errors = Object.keys(content);
          let errorString = '';
          console.log('Promise Fail', errors);
          errors.forEach(error => {
            errorString += errorsList[error][0];
          });
          reject(errorString);
        })
    });
  },
  // Login
  login({
    commit
  }, credentials) {
    return new Promise((resolve, reject) => {
      axios.post('/auth/login', credentials)
        .then((res) => {
          console.log('Promise Success', res);
          commit('SET_USERDATA', res.data);
          commit('SET_USER_ATTENDING_EVENTS', res.data.attending);
          commit('SET_ORGANISATION_DATA', res.data.organisation);
          router.push({
            name: 'home'
          });
          resolve('success');
        }).catch((error) => {
          let content = JSON.parse(error.request.response);
          console.log('Promise Fail', content);
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
          commit('SET_ORGANISATION_DATA', res.data.organisation);
          router.push({
            name: 'home'
          });
          resolve('success');
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
          commit('SET_ORGANISATION_DATA', res.data.organisation);
          router.push({
            name: 'home'
          });
          resolve('success');
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
      name: 'home'
    });
  }
}

// mutations
const mutations = {
  SET_USERDATA(state, data) {
    // TODO: Check data upon login
    state.token = data.token;
    localStorage.setItem('token', data.token);
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
    let attendeesList = data.map(item => item.event_id);
    state.attendingEvents = attendeesList;
    localStorage.setItem('attendingEvents', JSON.stringify(attendeesList));
  },
  SET_ORGANISATION_DATA(state, data) {
    console.log('Setting org data', data);
    if (data !== null) {
      state.organisation.admin = data.user_id;
      state.organisation.slug = data.slug;
      localStorage.setItem('organisation-user', data.user_id);
      localStorage.setItem('organisation-slug', data.slug);
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}