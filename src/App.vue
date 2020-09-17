<template>
  <div id="app" class="container">
    <router-view>
      <Navigation></Navigation>
    </router-view>
<PersonnelCard />


  </div>
</template>

<script>
import Navigation from './components/Navigation'
import PersonnelCard from './components/PersonnelCard'

export default {
  name: 'App',
  components: {
    Navigation,
    PersonnelCard
  }
}
</script>

<style lang="scss">
  @import './assets/styles/custom.scss';
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>