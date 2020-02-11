import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [

  {
    path: '/talks',
    name: 'talks',
    component: () => import( /* webpackChunkName: "talks" */ '../views/Talks.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import( /* webpackChunkName: "news" */ '../views/News.vue')
  },
  {
    path: '/news/:slug',
    name: 'news-item',
    component: () => import( /* webpackChunkName: "news-single" */ '../views/News-Single.vue')
  },
  {
    path: '/news/category/:slug',
    name: 'news-category-item',
    component: () => import( /* webpackChunkName: "news-category-item" */ '../views/News-Category.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( /* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: () => import( /* webpackChunkName: "forgot" */ '../views/Forgot.vue')
  },
  {
    path: '/event/:id',
    name: 'event',
    component: () => import( /* webpackChunkName: "event" */ '../views/Event.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import( /* webpackChunkName: "chat" */ '../views/Chat.vue')
  },
  {
    path: '/terms-and-conditions',
    name: 'terms',
    component: () => import( /* webpackChunkName: "page" */ '../views/Terms.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( /* webpackChunkName: "contat" */ '../views/Contact.vue')
  },
  // {
  //   path: '/our-story',
  //   name: 'story',
  //   component: () => import( /* webpackChunkName: "story" */ '../views/Story.vue')
  // },
  {
    path: '/partners',
    name: 'partners',
    component: () => import( /* webpackChunkName: "partners" */ '../views/Partners.vue')
  },
  {
    path: '/add-organisation',
    name: 'add-organisation',
    component: () => import( /* webpackChunkName: "organisation" */ '../views/Add-organisation.vue')
  },
  {
    path: '/customize-organisation',
    name: 'customize-organisation',
    component: () => import( /* webpackChunkName: "organisation" */ '../views/Customize-organisation.vue')
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