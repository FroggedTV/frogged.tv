<template>
  <div class="stream">
    <iframe class="stream__player" src="https://player.twitch.tv/?channel=froggedtv" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
    <iframe class="stream__chat" src="https://www.twitch.tv/embed/froggedtv/chat" frameborder="0" scrolling="no" height="500" width="350"></iframe>
  </div>
</template>

<script>
export default {
  name: 'stream'
}
</script>

<style>
  .stream {
    display: flex;
    flex-direction: column;
    height: 85vh;
  }

  .stream iframe {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 700px) {
    .stream {
      flex-direction: row;
      height: 614px;
    }

    .stream iframe {
      height: 100%;
      width: auto;
    }
  }

  .stream__player {
    flex: 1;
  }
</style>
