import Vue from 'vue';
import Layout from './components/layout.vue';
import router from './router.js';
import VueResource from 'vue-resource';
import store from './store/index.js';

Vue.use(VueResource);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(Layout)
})
