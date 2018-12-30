import axios from 'axios'

const state = {
  calendar: null,
  title: null
}

const getters = {
  getCalendar (state) {
    return state.calendar
  }
}

const mutations = {
  setCalendar (state, data) {
    state.calendar = data.calendar
    state.title = data.title
  }
}

const actions = {
  getCalendar ({ commit }) {
    axios.get('/api/calendar/get')
      .then(res => commit('setCalendar', res.data))
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
