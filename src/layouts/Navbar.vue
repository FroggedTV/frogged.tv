<template>
  <header class="navbar">
    <router-link :to="{ path: '/' }"><h1><img src="@/assets/ftv.svg" class="navbar__logo" alt="FroggedTV" /></h1></router-link>
    <button class="nav__open" v-on:click="showNavigation = true">≡</button>
    <nav :class="{ mobileShow : showNavigation }">
      <button class="nav__close" v-on:click="showNavigation = false">╳</button>
      <ul class="nav__links">
        <li>
          <router-link :to="{ name: 'calendar' }">Planning</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'news' }">News</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'emissions' }">Émissions</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'league' }">FTV League</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'login' }">Login</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      showNavigation: false
    }
  }
}
</script>

<style lang="scss">
  @import '@/styles/app.scss';

  .navbar {
    display: flex;
    flex-direction: row;
    padding: 1em;
    width: 100%;
    z-index: 100;
    justify-content: space-between;
    overflow: hidden;
    background: $background-color;
    border-bottom: 1px solid $black;
    box-shadow: inset 0 -3px 3px transparentize($black, 0.7), inset 0 3px 3px transparentize($dark-grey, 0.5);
  }

  h1,
  .navbar__logo {
    height: 1em;
  }

  h1 {
    text-align: center;
    margin: 0;
  }

  .nav__open,
  .nav__close {
    display: none;
  }

  .navbar nav {
    display: flex;
    align-items: center;
  }

  .nav__links {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    position: relative;
  }

  .nav__links a {
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: $white;
  }

  .nav__links a:hover {
    color: $text-highlight;
    text-shadow: 0 0 10px $text-highlight;
  }

  @media (min-width: 500px) {
    .nav__links li + li {
      margin-left: 1em;
    }
  }

  @media (max-width: 499px) {
    .navbar {
      position: fixed;
      top: 0;
    }

    .navbar nav {
      display: none;
      opacity: 0;
    }

    .navbar nav.mobileShow {
      display: flex;
      align-items: flex-end;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      padding: 1em;
      background: transparentize($almost-black, 0.1);
      font-size: 2em;
      z-index: 100;
      opacity: 1;
      transition: opacity 1s;
      transition-timing-function: cubic-bezier(0.2,1,0.3,1);
    }

    .nav__links {
      width: 100%;
      flex-direction: column;
    }

    .nav__links a {
      display: block;
      width: 100%;
    }

    .nav__open,
    .nav__close {
      border: 0;
      background: 0;
      color: $white;
      font-size: 2em;
      display: block;
    }

    .nav__open {
      margin-top: -0.2em;
    }

    .nav__close {
      position: absolute;
      top: 0;
      right: 0;
      display: block;
    }
  }
</style>
