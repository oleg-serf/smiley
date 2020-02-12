import axios from '@/axios-auth'

// initial state
const state = {
  organisation_name: '',
  organisation_location: '',
  display_name: '',
  location: '',
  job_title: '',
  organisation: '',
  goals: [],
}

// getters
const getters = {}

// actions
const actions = {
  get_news_latest({
    commit
  }) {
    axios.get('/news/latest')
      .then(res => {
        commit('SET_NEWS_LATEST', res.data.latest_news);
        commit('SET_CATEGORIES_FEATURED', res.data.featured_goals);
      })
      .catch(error => console.error(error))
  },

}



// mutations
const mutations = {
  SAVE_PARAMS(state, data) {
    state[data.name] = data.value
    console.log('Change param ' + data.name + ' with value ' + data.value);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}