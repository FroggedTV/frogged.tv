<template>
  <div class="container taymapute">
    <filter-tabs :filters="filters"></filter-tabs>
    <h2>Défis proposés</h2>
    <ul class="submission-list grid-container">
      <submission v-for="submission in taymapute" v-bind:key="submission.id" :submission="submission">
        <div class="taymapute__images">
          <div class="taymapute__hero">
            <img :src="getImagePath(submission.hero.portrait)" :alt="submission.hero.name" />
          </div>
          <div class="taymapute__items">
            <div class="taymapute__item" v-for="item in submission.items" v-bind:key="item.id">
              <img :src="getImagePath(item.image)" :alt="item.name" />
            </div>
          </div>
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
  name: 'taymapute',
  data () {
    return {
      'title': 'Taymapute',
      'taymapute': data.taymapute,
      'properties': data.emissions.find(e => e.title === 'Taymapute'),
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

  .taymapute__hero img,
  .taymapute__item img {
    width: 100%;
  }

  .taymapute__images {
    display: flex;
    flex-direction: column;
  }

  .taymapute__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0 0.5em;
  }
</style>
