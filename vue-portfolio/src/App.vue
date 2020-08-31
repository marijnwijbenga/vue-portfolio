<template>
  <div id="app" class="container">
    <Navigation></Navigation>
    <h1>bootstrap test</h1>
    <button class="btn btn-primary">some button </button>
    <h2 class="text-primary">test</h2>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Navigation from './components/Navigation'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Navigation
  }
}
</script>

<style lang="scss">
  @import './assets/styles/custom.scss';
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>