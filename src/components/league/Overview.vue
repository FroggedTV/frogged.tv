<template>
  <ul class="division-list">
    <division-ranks v-for="division in divisions" :key="division.id" :division="division"></division-ranks>
  </ul>
</template>

<script>
import data from '@/data'
import DivisionRanks from '@/components/league/DivisionRanks'

export default {
  name: 'LeagueOverview',
  data () {
    return {
      divisions: data.league.divisions
    }
  },
  components: {
    divisionRanks: DivisionRanks
  },
  created () {
    this.$store.commit('setHeader', { title: 'FTV League', logo: null })
  }
}
</script>

<style lang="scss" scoped>
  ul {
    display: grid;
    padding: 0;
  }

  .button {
    margin-top: 1em;
  }
</style>
