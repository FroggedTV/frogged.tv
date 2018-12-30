<template>
  <div class="dashboard">
    <div class="side-nav">
      <ul>
        <li></li>
      </ul>
    </div>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dashboard'
  }
</script>

<style lang="scss" scoped>
  @import '~@/styles/app.scss';

  .dashboard {
    display: flex;
    flex-direction: row;
  }

  .side-nav {
    flex: 2 1 0;
    display: none;
  }

  .main-content {
    flex: 1 100%;
    height: 100vh;
    background: $white
  }
</style>