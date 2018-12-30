<template>
  <li class="submission__submission card">
    <div class="submission__meta">
      Par <router-link to="/" class="submission__author">{{ submission.author }}</router-link> le <time>{{ submission.date }}</time>
      <div class="submission__version">{{ submission.version }}</div>
    </div>
    <slot></slot>
    <div class="submission__description">{{ submission.description }}</div>
    <div class="submission__actions">
      <button class="submission__upvote"><img src="@/assets/img/icons/solid/angle-up.svg" /> {{ submission.votes.up }}</button>
      <button class="submission__downvote"><img src="@/assets/img/icons/solid/angle-down.svg" /> {{ submission.votes.down }}</button>
      <button class="submission__fav">❤︎</button>
      <button class="submission__done">✔︎</button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'submission',
  props: ['submission']
}
</script>

<style lang="scss" scoped>
  @import '~@/styles/app.scss';

  .submission__description {
    margin-top: 1em;
  }

  .submission__actions {
    color: $text-color;
    margin-top: 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .submission__actions button {
    color: $text-color;
    border: 0;
    background: transparent;
  }

  .submission__actions button img {
    display: inline-block;
    width: 10px;
    margin-bottom: 3px;
    margin-right: 0.5em;
    vertical-align: middle;
  }
</style>
