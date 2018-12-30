const state = {
  emission: {}
}

const getters = {
  currentEmission (state) {
    return state.emission
  }
}

const mutations = {
  setCurrentEmission (state, emission) {
    state.emission = emission
  }
}

export default {
  state,
  getters,
  mutations
}
