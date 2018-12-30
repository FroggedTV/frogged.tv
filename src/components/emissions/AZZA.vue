<template>
  <div class="container azza">
    <h2>Duo en cours</h2>
    <div class="azza__current azza__duo">
      <div class="azza__portraits">
        <div class="azza__marsu">
          <div class="azza__name">Marsu</div>
          <video :src="getImagePath(azza.current.marsu.animated)" :alt="azza.current.marsu.name" autoplay loop />
        </div>
        <div class="azza__luciqno">
          <div class="azza__name">LuCiqNo</div>
          <video :src="getImagePath(azza.current.luciqno.animated)" :alt="azza.current.luciqno.name" autoplay loop />
        </div>
      </div>
    </div>
    <h2>Prochain duo</h2>
    <div class="azza__next azza__duo">
      <div class="azza__portraits">
        <div class="azza__marsu">
          <div class="azza__name">Marsu</div>
          <img :src="getImagePath(azza.next.marsu.portrait)" :alt="azza.next.marsu.name" />
        </div>
        <div class="azza__luciqno">
          <div class="azza__name">LuCiqNo</div>
          <img :src="getImagePath(azza.next.luciqno.portrait)" :alt="azza.next.luciqno.name" />
        </div>
      </div>
    </div>
    <h2>Duo passés</h2>
    <ul>
      <li v-for="duo in azza.passed" :key="duo.id" class="azza__passed azza__duo">
        <div class="azza__portraits">
          <div class="azza__marsu">
            <div class="azza__name">Marsu</div>
            <img :src="getImagePath(duo.marsu.portrait)" :alt="duo.marsu.name" />
          </div>
          <div class="azza__luciqno">
            <div class="azza__name">LuCiqNo</div>
            <img :src="getImagePath(duo.luciqno.portrait)" :alt="duo.luciqno.name" />
          </div>
        </div>
        <div class="azza__try-count">{{ duo.try_count }} essais</div>
      </li>
    </ul>
  </div>
</template>

<script>
import data from '../../data'
import Emissions from '@/mixins/Emissions'

export default {
  extends: Emissions,
  name: 'azza',
  data () {
    return {
      'title': 'AZZA',
      'azza': data.azza,
      'properties': data.emissions.find(e => e.title === 'AZZA')
    }
  }
}
</script>

<style lang="scss" scoped>
  video {
    width: 100%;
  }

  .azza__portraits {
    display: flex;
  }

  .azza__name,
  .azza__try-count {
    text-align: center;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  li + li {
    margin-top: 1em;
  }
</style>
