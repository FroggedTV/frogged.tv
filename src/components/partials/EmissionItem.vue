<template>
  <router-link class="emission-item card" :to="{ name: emission.component, params: { id: emission.id }}">
    <div class="card__cover">
      <img :src="getImagePath(emission.cover)" />
    </div>
    <div class="emission-item__info">
      <h3 class="emission-item__title">
        <img :src="getImagePath(emission.logo)" :alt="emission.name" />
      </h3>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'emission-item',
  props: ['emission'],
  methods: {
    getImagePath (image) {
      return image ? require(`@/assets/${image}`) : ''
    }
  }
}
</script>

<style lang="scss">
  .card__cover img {
    opacity: 0.2;
  }

  .emission-item__info {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    padding: 1em;
    display: flex;
    align-items: center;
  }

  .emission-item__title {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .emission-item__title img {
    max-width: 80%;
  }

  .emission-item__description {
    bottom: 1em;
    position: absolute;
    font-size: 0.875em;
  }

  @media (min-width: 800px) {
  }
</style>
