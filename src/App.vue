<template>
  <div id="app" class="container">
    <router-view>
      <Navigation></Navigation>
    </router-view>
    <PersonnelCard :fullName="fullName" :title="title" :residency="residency"/>


  </div>
</template>

<script>
import Navigation from './components/Navigation'
import PersonnelCard from './components/PersonnelCard'
import axios from "axios";


export default {
  name: 'App',
  components: {
    Navigation,
    PersonnelCard
  },
  data() {
    return {
      title: String,
      persons: []
    }
  },
  created() {
    axios
        .get('http://localhost:8080/data/vue-portfolio-db-person.json')
        .then(response => {
          this.persons = response.data;
          console.table(response.data);
        })
        .catch(error => {
          console.log('ik neuk jullie allemaal de moeder', error.response)
        })
  }
}
</script>

<style lang="scss">
@import './assets/styles/custom.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>