import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Slick from 'vue-slick';
import * as VueGoogleMaps from "vue2-google-maps";
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