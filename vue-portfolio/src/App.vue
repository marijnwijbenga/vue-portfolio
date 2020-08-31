<template>
  <div id="app" class="container">
    <Navigation></Navigation>

  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
  @import './assets/styles/custom.scss';
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>