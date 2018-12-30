<template>
  <layout class="home">
    <main slot="body">
      <!--stream></stream-->
      <div class="container">
        <h2>Aujourd'hui</h2>
        <upcoming></upcoming>
        <h2>News</h2>
        <news-list />
        <router-link class="button" :to="{ name: 'news' }">Voir plus de news</router-link>
      </div>
    </main>
  </layout>
</template>

<script>
import Layout from '@/layouts/Layout'
// import Stream from '@/components/partials/Stream'
import Upcoming from '@/components/partials/Upcoming'
import NewsList from '@/components/news/NewsList'

// @ is an alias to /src
export default {
  name: 'home',
  components: {
    layout: Layout,
    // stream: Stream,
    upcoming: Upcoming,
    newsList: NewsList
  }
}
</script>

<style lang="scss" scoped>
  @media (max-width: 499px) {
    .home {
      padding-top: 4em;
    }
  }

  .button {
    margin-top: 1em;
  }
</style>
