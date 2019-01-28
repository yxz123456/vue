import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import About from './views/About.vue'
// import Learn from './views/Learn.vue'
// import Student from './views/Student.vue'
// import Community from './views/Community.vue'

// import Academic from './components/community/Academic.vue'
// import Download from './components/community/Download.vue'
// import Personal from './components/community/Personal.vue'

// import Question from './components/Question.vue'
// import Err from './components/Err.vue'

//路由懒加载，需要的时候才去加载，但是浏览器会在空闲时间对这些组件进行预加载，
// 然后当你去访问时，就会从缓存里拿
const Home = () => import ('./views/Home.vue')
const About = () => import ('./views/About.vue')
const Learn = () => import ('./views/Learn.vue')
const Student = () => import ('./views/Student.vue')
const Community = () => import ('./views/Community.vue')

const Academic = () => import ('./components/community/Academic.vue')
const Download = () => import ('./components/community/Download.vue')
const Personal = () => import ('./components/community/Personal.vue')

const Question = () => import ('./components/Question.vue')
const Err = () => import ('./components/Err.vue')
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:"active",
  linkExactActiveClass:"exact-active",
  routes: [
    {
      path: '/home',
      name: 'home',
      //path别名
      alias:'/',
      components:{
        //默认组件
        default:Home,
        //router-view复用
        // academic:Academic
      } 
    },
    {
      path: '/about',
      name: 'about',
      component:About
    },
    {
      path: '/learn',
      name: 'learn',
      component:Learn
    },
    {
      path: '/student',
      name: 'student',
      component:Student
    },
    {
      path: '/community',
      name: 'community',
      component:Community,
      //路由重定向 进来community就重定向到academic页面
      redirect:'community/academic',
      meta:{
        login:false
      },
      children:[
        {
          path: 'academic',
          name: 'academic',
          component:Academic,
        //   路由独享守卫
        //   beforeEnter(to,from,next){
        //     const answer = confirm('你还没有登录，登录才能看信息，确定要登录吗?')
        //     if(answer){
        //       next({name:'personal'})
        //     }
        //     else{
        //       next(false)
        //     }
        //   }
        },
        {
          path: 'download',
          name: 'download',
          component:Download
        },
        {
          path: 'personal',
          name: 'personal',
          component:Personal
        },
      ]
    },
    //动态路由
    {
      path:'/question/:id',
      name:'question',
      component:Question
    },
    {
      path:'/err.html',
      name:'err',
      component:Err
    },
    //路径匹配
    {
      //匹配没有设置过的路径
      path:'*',
      redirect(to){
        if(to.path == '/'){
          return '/home'
        }
        else{
          return {name:'err'}
        }
      }
    }
  ]
})

//导航守卫
// 1.全局守卫

/*router.beforeEach((to, form, next) => {
  //to 要取哪里
  //from 从哪里来
  //next 允不允许去

  if(to.path == '/community/academic'){
    const answer = confirm('你还没有登录，登录才能看信息，确定要登录吗?')

    if(answer){
      next({name:'personal'})
    }
    else{
      next(false)
    }
  }
  else{
    next()
  }
})
*/
export default router
