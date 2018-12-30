const state = {
  article: {}
}

const getters = {
  currentArticle (state) {
    return state.article
  }
}

const mutations = {
  setCurrentArticle (state, article) {
    state.article = article
  }
}

export default {
  state,
  getters,
  mutations
}
