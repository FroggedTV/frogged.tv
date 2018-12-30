<template>
  <layout class="news">
    <main slot="body">
      <page-header :cover="cover"></page-header>
      <div class="container">
        <router-view></router-view>
      </div>
    </main>
  </layout>
</template>

<script>
import Layout from '@/layouts/Layout'
import PageHeader from '@/components/partials/PageHeader'

export default {
  name: 'News',
  data () {
    return {
      'cover': 'img/backgrounds/bg2.jpeg'
    }
  },
  components: {
    layout: Layout,
    pageHeader: PageHeader
  }
}
</script>

<style scoped>
  .button {
    margin-top: 1em;
  }
</style>
