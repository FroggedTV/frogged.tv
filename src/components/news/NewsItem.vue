<template>
  <li class="news-item card">
    <router-link :to="{ name: 'newsDetail', params: { id: news.id }}">
      <div class="card__cover">
        <img :src="getImagePath(news.cover)" />
      </div>
      <div class="news-item__info">
        <h3 class="news-item__title">{{ news.title }}</h3>
        <div class="news-item__category">{{ news.category }}</div>
        <div class="news-item__meta">Par <a>{{ news.author }}</a> le <time>{{ news.date }}</time></div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'news-item',
  props: ['news'],
  methods: {
    getImagePath (image) {
      return image ? require(`@/assets/${image}`) : ''
    }
  }
}
</script>

<style lang="scss">
  @import '@/styles/app.scss';

  .news-item__info {
    position: absolute;
    top: 0;
    bottom: 0;
    color: $text-color;
    padding: 1em;
    width: 100%;
  }

  .news-item__title {
    margin: 0;
  }

  .news-item__meta {
    bottom: 1em;
    position: absolute;
    font-size: 0.875em;
  }
</style>
