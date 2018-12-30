<template>
  <ul>
    <news-item v-for="news in news" :key="news.id" :news="news"></news-item>
  </ul>
</template>

<script>
import data from '@/data'
import NewsItem from '@/components/news/NewsItem'

export default {
  name: 'NewsList',
  data () {
    return {
      news: data.news
    }
  },
  components: {
    newsItem: NewsItem
  },
  created () {
    this.$store.commit('setHeader', { title: 'News', logo: null })
  }
}
</script>

<style lang="scss" scoped>
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .button {
    margin-top: 1em;
  }
</style>
