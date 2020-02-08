import axios from '@/axios-auth'

// initial state
const state = {
  goals: [],
  currentCategory: ''
}

// getters
const getters = {
  getGoals(state) {
    return state.goals
  },
  getCurrentCategory(state) {
    return state.currentCategory
  },
}

// actions
const actions = {
  loadEventsData({
    commit
  }) {
    axios.get('/goals')
      .then(res => {
        console.log(res.data.data[0]);
        commit('saveGoals', res.data.data[0].goals);
        commit('saveCurrentCategory', res.data.data[0].name);
      })
      .catch(error => console.error(error))
  },
}



// mutations
const mutations = {
  saveGoals(state, data) {
    state.goals = data
  },
  saveCurrentCategory(state, data) {
    state.currentCategory = data
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}