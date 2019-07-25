import Vue from '../node_modules/vue'
import App from './App.vue'
import VueRouter from '../node_modules/vue-router';
import Slick from '../node_modules/vue-slick';
import * as VueGoogleMaps from '../node_modules/vue2-google-maps';
import { routes } from './routes.js';
var PrivateKeys = require('../PrivateKeys.json'); 
Vue.use(VueRouter);

const router = new VueRouter({ 
  routes, 
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition){
      return savedPosition;
    }
    if(to.hash){
      return { selector: to.hash };
    }
    return {x: 0, y: 0};
  }
 }); 

Vue.use(VueGoogleMaps, {
  load: {
    key: PrivateKeys.GoogleMapsKey,
    libraries: "places",     
  }
});

new Vue({
  el: '#app',
  router,
  components: {Slick},
  render: h => h(App),
})
