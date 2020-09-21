<template>

  <div id="app" class="container">
    <router-view>
      <Navigation></Navigation>
    </router-view>
    <PersonnelCard
        :fullName="persons[0].firstName + ' ' + persons[0].lastName"
        :title="personsAbout[0].title"
        :residency="persons[0].city + ',' + persons[0].country"
    />
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
      firstName: String,
      lastName: String,
      residency: String,
      title: String,
      persons: [],
      personsAbout: []
    }
  },
  created() {

    axios
        .get('http://localhost:8080/data/vue-portfolio-db-person.json')
        .then(response => {
          this.persons = response.data;
          console.log(response.data);
        })
        .catch(error => {
          console.log('something went wrong fetching the data', error.response)
        }),
    axios
        .get('http://localhost:8080/data/vue-portfolio-db-about.json')
        .then(response => {
          this.personsAbout = response.data;
        })
        .catch(error => {
          console.log('something went wrong fetching the data', error.response)
        })
  }
}
</script>

<style lang="scss">
@import './assets/styles/custom.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>