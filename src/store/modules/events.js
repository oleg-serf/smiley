import axios from '@/axios-auth'

// initial state
const state = {
  currentCategory: '',
  goals: [],
}

// getters
const getters = {}

// actions
const actions = {
  loadEventsData({
    commit
  }) {
    axios.get('/goals')
      .then(res => {
        commit('saveInfo', res.data.goal_categories[0]);

        return res.data.goal_categories[0];
      })
      .catch(error => console.error(error))
  },
  registerUserForEvent({
    commit
  }, item) {
    console.log(item);
    axios.post('/events/' + item.id + '/attend', item)
      .then(res => {
        console.log(res)
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
  saveInfo(state, data) {
    state.goals = data.goals;
    state.currentCategory = data.name
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}