const state = {
  logo: null,
  title: null
}

const getters = {
  header () {
    return state
  },
  headerLogo () {
    return state.logo
  },
  headerTitle () {
    return state.title
  }
}

const mutations = {
  setHeader (state, header) {
    state.logo = header.logo
    state.title = header.title
  }
}

export default {
  state,
  getters,
  mutations
}
