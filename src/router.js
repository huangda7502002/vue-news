import VueRouter from 'vue-router';
import Vue from 'vue';
import IndexPage from './components/IndexPage.vue';
import detailPage from './components/detailPage.vue';
import count from './components/detail/count.vue';
import forecast from './components/detail/forecast.vue';
import publish from './components/detail/publish.vue';
import analysis from './components/detail/analysis.vue';

Vue.use(VueRouter);
export default new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      component:IndexPage
    },
    {
      path:'/detail',
      component:detailPage,
      redirect:'/detail/analysis',
      children:[
        {
          path:'count',
          component:count
        },
        {
          path:'forecast',
          component:forecast
        },
        {
          path:'publish',
          component:publish
        },
        {
          path:'analysis',
          component:analysis
        },
      ]
    }
  ]
})
