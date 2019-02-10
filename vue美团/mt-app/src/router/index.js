import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/LayOut/default.vue'
import blankPage from '@/LayOut/blank.vue'
import Index from '@/pages/index.vue'
import changeCity from '@/pages/changeCity.vue'
import goodsList from '@/pages/goodsList.vue'
import login from '@/pages/login.vue'
import register from '@/pages/register.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/index',
      children: [{
        path: '/index',
        name: 'index',
        component: Index
      },
      {
        path: '/changeCity',
        name: 'changeCity',
        component: changeCity
      },
      {
        path: 's/:name',
        name: 'goodsList',
        component: goodsList
      }
      ]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: blankPage,
      children: [{
        path: '/login',
        name: 'login',
        component: login
      },
      {
        path: '/register',
        name: 'register',
        component: register
      }]
    }
  ]
})
