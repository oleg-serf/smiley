import axios from '@/axios-auth'

// initial state
const state = {
  currentCategory: '',
  goals: [],
  pastEvents: [],
  events: []
}

// getters
const getters = {}

// actions
const actions = {
  get_events_data({
    commit
  }) {
    axios.get('/goals')
      .then(res => {
        commit('SET_USERDATA', res.data.goal_categories[0]);

        return res.data.goal_categories[0];
      })
      .catch(error => console.error(error))
  },
  get_events({
    commit
  }) {
    let url = (this.getters['user/isAuthenticated']) ? '/events/auth' : '/events';

    axios.get(url)
      .then(res => {
        console.log(res.data);
        
        commit('SET_EVENTS', res.data.events)


        if (this.getters['user/isAuthenticated']) {
          commit('user/SET_USER_ATTENDING_EVENTS', res.data.attending, {
            root: true
          })
        }
      })
      .catch(error => console.error(error))
  },
  get_past_events({
    commit
  }) {
    axios.get('/events/past')
      .then(res => {
        commit('SET_PAST_EVENTS', res.data.events)
      })
      .catch(error => console.error(error))
  },
  send_filter_params({
    commit
  }, params) {
    axios.get('/events/filters', { params: params })
      .then(res => {
        console.log(res);
        if (res.data.events.length === 0) {
          alert('Sorry, no event\'ts found.');
        } else {
          commit('SET_EVENTS', res.data.events);
        }
      })
      .catch(error => console.error(error))
  },
  registerUserForEvent({
    commit
  }, item) {
    axios.post('/events/' + item.id + '/attend', item)
      .then(res => {
        let result = res.data.attending;
        commit('user/SET_USER_ATTENDING_EVENTS', result, {
          root: true
        })
      })
      .catch(error => console.error(error))
  },
}



// mutations
const mutations = {
  SET_USERDATA(state, data) {
    state.goals = data.goals;
    state.currentCategory = data.name
  },
  SET_PAST_EVENTS(state, data) {
    state.pastEvents = data
  },
  SET_EVENTS(state, data) {
    state.events = data
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}