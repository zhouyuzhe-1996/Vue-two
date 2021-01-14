import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import work from '@/components/work'
import home from '@/components/home'
import page from '@/views/page'
import login from '@/components/login'
import register from '@/components/register'
Vue.use(Router)

const router = new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      redirect:'/work'
      // name: 'HelloWorld',
      // component: HelloWorld
    },{
      path:'/work/',
      name:'work',//必填
      component:work//必填
    },{
      path:'/home/:id',
      name:'home',
      component:home
    },{
      path:'/page',
      name:'page',
      component:page
    },{
      path:'/login',
      name:'login',
      component:login
    },{
      path:'/register',
      name:'register',
      component:register
    }
  ]
})
//login 
// router.beforeEach((to,from,next)=>{
//   // console.log(to)
//   if(to.path === "/login"){
//     next()
//   }else{
//     let token = localStorage.getItem("token");
//     if(token===null || token===""){
//       next("/login")
//     }else{
//       next()
//     }
//   }
// })
export default router