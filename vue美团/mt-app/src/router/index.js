import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/LayOut/default.vue'
import blankPage from '@/LayOut/blank.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: blankPage
    }
  ]
})
