import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Home from '@/components/home/Home'
import User from '@/components/user/User'
import Welcome from '@/components/home/Welcome'                

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect:'/welcome',
      children: [
        {path: '/users',name: 'User',component: User},
        {path: '/welcome',name: 'welcome',component: Welcome}
      ]
    }
  ]
})

// 在跳转路由前判断token信息
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  if (!sessionStorage.getItem('token')) return next('/login')
  next()
})
export default router
