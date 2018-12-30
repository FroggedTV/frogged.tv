<template>
  <div>
    <navbar slot="header"></navbar>
    <slot name="body"></slot>
  </div>
</template>

<script>
import Navbar from '@/layouts/Navbar'

export default {
  name: 'layout',
  components: {
    navbar: Navbar
  }
}
</script>

<style lang="scss">
  @import '~@/styles/app.scss';
</style>
