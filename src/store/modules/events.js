import axios from '@/axios-auth'

// initial state
const state = {
  goals: []
}

// getters
const getters = {
  getGoals(state) {
    return state.goals
  }
}

// actions
const actions = {
  loadGoals({
    commit
  }) {
    axios.get('/goals')
      .then(res => {
        console.log(res.data.data);
        commit('saveGoals', res.data.data[0].goals);
      })
      .catch(error => console.error(error))
  },
}



// mutations
const mutations = {
  saveGoals(state, data) {
    state.goals = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}