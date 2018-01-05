import Vue from 'vue';
import Layout from './components/layout.vue';
import router from './router.js'
import VueResource from 'vue-resource'

Vue.use(VueResource);

new Vue({
  el: '#app',
  router,
  render: h => h(Layout)
})
