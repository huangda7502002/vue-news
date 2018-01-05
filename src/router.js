import VueRouter from 'vue-router';
import Vue from 'vue';
import IndexPage from './components/IndexPage.vue';
Vue.use(VueRouter);
export default new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      component:IndexPage
    }
  ]
})
