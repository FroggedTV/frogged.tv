<template>
  <div class="page-header__cover">
    <img :src="getImagePath(cover)" />
    <div class="page-header">
      <template v-if="logo">
        <img :src="getImagePath(logo)" />
      </template>
      <template v-else>
        <h1 v-if="title">{{ title }}</h1>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-header',
  props: ['cover'],
  methods: {
    getImagePath (image) {
      console.log(image)
      return image ? require(`@/assets/${image}`) : ''
    }
  },
  computed: {
    logo () {
      return this.$store.getters.headerLogo
    },
    title () {
      return this.$store.getters.headerTitle
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-header {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .page-header__cover {
    height: 35vh;
    position: relative;
    background-size: cover;
    overflow: hidden;
    display: flex;
  }

  .page-header__cover img {
    width: 100%;
    object-fit: cover;
  }

  .page-header h1 {
    height: auto;
  }

  @media (max-width: 499px) {
    .page-header {
      margin-top: 64px;
    }
  }
</style>
