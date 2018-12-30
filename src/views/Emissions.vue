<template>
  <layout class="emissions">
    <main slot="body">
      <page-header :cover="cover"></page-header>
      <router-view></router-view>
    </main>
  </layout>
</template>

<script>
import Layout from '@/layouts/Layout'
import PageHeader from '@/components/partials/PageHeader'

export default {
  name: 'emissions',
  data () {
    return {
      'cover': 'img/backgrounds/bg2.jpeg'
    }
  },
  components: {
    layout: Layout,
    pageHeader: PageHeader
  },
  computed: {
    title () {
      if (this.$route.name === 'emissions') {
        return 'Emissions'
      } else {
        return this.$store.getters.currentEmission.logo || this.$store.getters.currentEmission.title
      }
    },
    type () {
      const logo = this.$store.getters.currentEmission.logo
      if (logo) {
        return 'logo'
      }
      return null
    }
  }
}
</script>

<style lang="scss">
  .page-header__cover {
    background-image: url('/static/img/bg3.jpeg');
  }

  $bg-color: 254, 329, 21, 52;

  @for $i from 1 through 4 {
    .emission-item:nth-child(#{$i}) {
      .card__cover {
        background-image: linear-gradient(to right, hsla(nth($bg-color, $i), 95%, 85%, 1), hsla(nth($bg-color, $i), 95%, 55%, 1));
      }
    }
  }
</style>
