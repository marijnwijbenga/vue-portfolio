import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Navigation from "@/components/Navigation";

Vue.use(VueRouter);

library.add(faWindowClose)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)
 

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
      { path: '/', component: Navigation },
      { path: '/#home', component: Navigation },
      { path: '/#skills', component: Navigation },
      { path: '/#projects', component: Navigation },
  ],
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
