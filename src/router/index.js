import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [

  {
    path: '/talks',
    name: 'talks',
    component: () => import(/* webpackChunkName: "talks" */ '../views/Talks.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import(/* webpackChunkName: "news" */ '../views/News.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: () => import(/* webpackChunkName: "about" */ '../views/Forgot.vue')
  },
  {
    path: '/event/:id',
    name: 'event',
    component: () => import(/* webpackChunkName: "about" */ '../views/Event.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import(/* webpackChunkName: "about" */ '../views/Chat.vue')
  },
  {
    path: '/terms-and-conditions',
    name: 'terms',
    component: () => import(/* webpackChunkName: "about" */ '../views/Terms.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/our-story',
    name: 'story',
    component: () => import(/* webpackChunkName: "about" */ '../views/Story.vue')
  },
  {
    path: '/partners',
    name: 'partners',
    component: () => import(/* webpackChunkName: "about" */ '../views/Partners.vue')
  },
  {
    path: '/add-organisation',
    name: 'add-organisation',
    component: () => import(/* webpackChunkName: "about" */ '../views/Add-organisation.vue')
  },
  {
    path: '/customize-organisation',
    name: 'customize-organisation',
    component: () => import(/* webpackChunkName: "about" */ '../views/Customize-organisation.vue')
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },

];



const router = new VueRouter({
  mode: 'history',
  base: process.env.environment === 'development' ? '/' : '/',
  routes
});

router.beforeEach(function (to, from, next) {
  window.scrollTo(0, 0)
  next();
});

export default router
