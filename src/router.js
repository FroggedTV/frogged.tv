import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'

import News from '@/views/News'
import NewsList from '@/components/news/NewsList'
import NewsDetail from '@/components/news/NewsDetail'

import Emissions from '@/views/Emissions'
import EmissionsList from '@/components/emissions/EmissionsList'
import AZZA from '@/components/emissions/AZZA'
import Taymapute from '@/components/emissions/Taymapute'
import Vingtkmmr from '@/components/emissions/Vingtkmmr'

import League from '@/views/League'
import LeagueOverview from '@/components/league/Overview'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/news',
    component: News,
    children: [{
      path: '/',
      name: 'news',
      component: NewsList
    }, {
      path: ':id',
      name: 'newsDetail',
      component: NewsDetail
    }]
  }, {
    path: '/emissions',
    component: Emissions,
    children: [{
      path: '/',
      name: 'emissions',
      component: EmissionsList
    }, {
      path: 'azza',
      name: 'azza',
      component: AZZA
    }, {
      path: 'taymapute',
      name: 'taymapute',
      component: Taymapute
    }, {
      path: '20kmmr',
      name: 'vingtkmmr',
      component: Vingtkmmr
    }]
  }, {
    path: '/league',
    component: League,
    children: [{
      path: '/',
      name: 'league',
      component: LeagueOverview
    }]
  }]
})
