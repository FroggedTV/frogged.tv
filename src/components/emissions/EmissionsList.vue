<template>
  <div class="container">
    <emission-item v-for="emission in emissions" :key="emission.id" :emission="emission"></emission-item>
  </div>
</template>

<script>
import data from '@/data'
import EmissionItem from '@/components/partials/EmissionItem'

export default {
  name: 'emissions-list',
  data () {
    return {
      'emissions': data.emissions
    }
  },
  components: {
    emissionItem: EmissionItem
  },
  mounted () {
    if (this.$route.name === 'emissions') {
      this.$store.commit('setHeader', { title: 'Émissions', logo: null })
    }
  }
}
</script>

<style>
</style>
