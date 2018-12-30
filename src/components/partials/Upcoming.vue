<template>
  <div class="upcoming">
    <div class="upcoming__slot" :class="{ live:isLive(slot.start, slot.end) }" v-for="slot in schedule" :key="slot.name">
      <div class="upcoming__time">{{ slot.start | moment("HH:mm") }}</div>
      <img class="upcoming__title" :src="getImagePath(slot.logo)" v-if="slot.logo" />
      <div class="upcoming__title" v-else>
        {{ slot.name }}
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../data'

export default {
  name: 'upcoming',
  data () {
    return {
      schedule: data.schedule,
      calendar: null
    }
  },
  async created () {
    this.calendar = this.$store.getters.getCalendar
    if (!this.calendar) {
      await this.$store.dispatch('getCalendar')
      this.calendar = this.$store.getters.getCalendar
    }
  },
  methods: {
    getImagePath (image) {
      return image ? require(`@/assets/${image}`) : ''
    },
    isLive (start, end) {
      const now = new Date()
      return now > start && now < end
    }
  }
}
</script>

<style lang="scss">
  @import '~@/styles/app.scss';

  .upcoming__slot {
    padding: 0.5em;
    background: $background-color;
    color: $text-color;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    flex-basis: 0;
    text-align: center;
  }

  .upcoming__slot:hover {
    @include highlight();
  }

  .upcoming__slot.live {
    @include highlight();
    color: $sky;
  }

  .upcoming__slot + .upcoming__slot {
    margin-top: 0.5em;
  }

  .upcoming__time,
  .upcoming__title {
    flex-grow: 1;
    flex-basis: 0;
  }

  .upcoming__slot img {
    max-height: 50px;
  }

  @media (min-width: 400px) {
    .upcoming {
      display: flex;
      flex-direction: row;
    }

    .upcoming__slot {
      flex-direction: column;
    }

    .upcoming__slot + .upcoming__slot {
      margin-top: 0;
      margin-left: 0.5em;
    }

    .upcoming__time,
    .upcoming__title {
      flex-grow: 1;
      flex-basis: auto;
    }
  }
</style>
