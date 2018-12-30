<template>
  <div class="news-detail">
    {{ news.content }}
  </div>
</template>

<script>
import data from '@/data'

export default {
  name: 'news-detail',
  data () {
    return {
      news: {},
      newsList: data.news,
      id: this.$route.params.id
    }
  },
  created () {
    const newsId = this.id
    this.news = this.newsList.find((news) => {
      return news && news.id === newsId
    })

    if (this.news !== this.$store.getters.currentArticle) {
      this.$store.commit('setCurrentArticle', this.news)
    }

    this.$store.commit('setHeader', { title: this.news.title, logo: null })
  }
}
</script>

<style lang="scss">
  .news-detail {
    max-width: 35em;
    margin: 1em auto;
    line-height: 1.5em;
  }
</style>
