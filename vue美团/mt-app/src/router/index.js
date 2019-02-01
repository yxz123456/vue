import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/LayOut/default.vue'
import blankPage from '@/LayOut/blank.vue'
import Index from '@/pages/index.vue'
import changeCity from '@/pages/changeCity.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: '/changeCity',
          name: 'changeCity',
          component: changeCity
        }
      ]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: blankPage
    }
  ]
})
