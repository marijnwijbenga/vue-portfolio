<template>
  <div id="app" class="container">
    <h1>bootstrap test</h1>
    <button class="btn btn-primary">some button </button>
    <h2 class="text-primary">test</h2>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
  @import './assets/styles/bootstrap/bootstrap.css';
</style>
