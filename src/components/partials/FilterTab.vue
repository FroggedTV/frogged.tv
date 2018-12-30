<template>
  <ul class="filter">
    <li v-for="filter in filters" v-bind:key="filter.name">
      <router-link :to="filter.route">{{ filter.name }}</router-link>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'filterTab',
  props: ['filters']
}
</script>

<style lang="scss" scoped>
  @import '~@/styles/app.scss';

  .filter {
    margin: 0;
    padding: 0;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .filter li {
    list-style-type: none;
    flex-grow: 1;
    text-align: center;
    border-left: 1px solid $border-color;

    &:first-child {
      border: 0;
    }
  }

  .filter li a {
    padding: 0.5em;
    display: block;
    width: 100%;
    color: $text-color;
    border: 1px solid transparent;

    &:hover {
      @include highlight();
    }
  }
</style>
