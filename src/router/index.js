import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import Login from '@/views/Login'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: "Home"
    }
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Register'),
    meta: {
      title: "Register"
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: "Login"
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Medium`;
  next();
})

export default router
