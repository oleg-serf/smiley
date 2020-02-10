import axios from '@/axios-auth'

// initial state
const state = {
  news: [],
  featured_goals: [],
}

// getters
const getters = {}

// actions
const actions = {
  get_news({
    commit
  }) {
    axios.get('news/latest')
      .then(res => {
        commit('SET_NEWS', res.data.latest_news);
        commit('SET_GOALS', res.data.featured_goals);
      })
      .catch(error => console.error(error))
  },
}



// mutations
const mutations = {
  SET_NEWS(state, data) {
    state.news = data
  },
  SET_GOALS(state, data) {
    state.featured_goals = data
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}