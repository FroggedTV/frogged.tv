import Vue from 'vue'
import Vuex from 'vuex'
// import auth from './auth'
import header from '@/store/header'
import news from '@/store/news'
import calendar from '@/store/calendar'
import emissions from '@/store/emissions'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    // auth,
    header,
    news,
    calendar,
    emissions
  }
})
