<template>
  <div class="container vingtkmmr">
    <filter-tabs :filters="filters"></filter-tabs>
    <h2>Défis proposés</h2>
    <ul class="submission-list grid-container">
      <submission v-for="submission in vingtkmmr" v-bind:key="submission.id" :submission="submission">
        <div class="vingtkmmr__heroes">
          <img v-for="hero in submission.heroes" v-bind:key="hero.id" :src="getImagePath(hero.portrait)" :alt="hero.name" />
        </div>
      </submission>
    </ul>
  </div>
</template>

<script>
import data from '@/data'
import Submission from '@/components/partials/Submission'
import Filter from '@/components/partials/FilterTab'
import Emissions from '@/mixins/Emissions'

export default {
  extends: Emissions,
  name: 'vingtkmmr',
  data () {
    return {
      'title': '20k MMR sous les mers',
      'vingtkmmr': data.vingtkmmr,
      'properties': data.emissions.find(e => e.component === 'vingtkmmr'),
      'filters': [{
        'name': 'Défis',
        'route': 'new'
      }, {
        'name': 'Défis passés',
        'route': 'passed'
      }, {
        'name': 'Anciens patches',
        'route': 'old'
      }]
    }
  },
  components: {
    submission: Submission,
    filterTabs: Filter
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/styles/app.scss';

  .submission-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1em;
  }

  .card {
    height: auto;
    padding: 1em;
  }

  .vingtkmmr__heroes {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .vingtkmmr__heroes img {
    width: 100%;
  }

  .vingtkmmr__heroes img + img {
    margin-left: 0.5em;
  }
</style>
