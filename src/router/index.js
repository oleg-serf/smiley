import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/404',
    name: '404',
    component: () => import( /* webpackChunkName: "404" */ '../views/404.vue'),
    meta: {
      title: '404 Page not found',
    }
  },
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/talks',
    name: 'talks',
    component: () => import( /* webpackChunkName: "talks" */ '../views/Talks.vue'),
    meta: {
      title: 'Talks',
    }
  },
  {
    path: '/news',
    name: 'news',
    component: () => import( /* webpackChunkName: "news" */ '../views/News.vue'),
    meta: {
      title: 'News',
    }
  },
  // User Feed redirection
  {
    path: '/user/feed',
    name: 'feed',
    component: () => import( /* webpackChunkName: "news" */ '../views/auth/Login.vue'),
    meta: {
      title: 'Login',
    }
  },
  {
    path: '/news/:slug',
    name: 'news-item',
    component: () => import( /* webpackChunkName: "news-single" */ '../views/News-Single.vue'),
    meta: {
      breadcrumbs: ['news'],
    }
  },
  {
    path: '/news/category/:slug',
    name: 'news-category-item',
    component: () => import( /* webpackChunkName: "news-category-item" */ '../views/News-Category.vue'),
    meta: {
      breadcrumbs: ['news'],
    }
  },
  // Auth routes
  {
    path: '/login',
    name: 'login',
    component: () => import( /* webpackChunkName: "login" */ '../views/auth/Login.vue'),
    meta: {
      title: 'Login',
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( /* webpackChunkName: "register" */ '../views/auth/Register.vue'),
    meta: {
      title: 'Register',
    }
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: () => import( /* webpackChunkName: "forgot" */ '../views/auth/Forgot.vue'),
    meta: {
      title: 'Forgot password',
    }
  },
  {
    path: '/reset',
    name: 'reset',
    component: () => import( /* webpackChunkName: "forgot" */ '../views/auth/Reset.vue'),
    meta: {
      title: 'Reset password',
    }
  },
  {
    path: '/talks/:slug',
    name: 'event',
    component: () => import( /* webpackChunkName: "event" */ '../views/Event.vue'),
    meta: {
      breadcrumbs: ['talks'],
    }
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import( /* webpackChunkName: "chat" */ '../views/Chat.vue'),
    meta: {
      title: 'Chat',
      requiresAuth: true,
    }
  },
  {
    path: '/terms-and-conditions',
    name: 'terms',
    component: () => import( /* webpackChunkName: "page" */ '../views/Terms.vue'),
    meta: {
      title: 'Terms and Conditions',
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( /* webpackChunkName: "contat" */ '../views/Contact.vue'),
    meta: {
      title: 'Contact',
    }
  },
  // {
  //   path: '/our-story',
  //   name: 'story',
  //   component: () => import( /* webpackChunkName: "story" */ '../views/Story.vue')
  // },
  {
    path: '/partners',
    name: 'partners',
    component: () => import( /* webpackChunkName: "partners" */ '../views/Partners.vue'),
    meta: {
      title: 'Partners',
    }
  },
  // Organisation pages
  {
    path: '/add-organisation',
    name: 'add-organisation',
    component: () => import( /* webpackChunkName: "organisation" */ '../views/organisation/Add-Organisation.vue'),
    meta: {
      title: 'Add Organisation',
      requiresAuth: true,
    }
  },
  // TODO: Make other route for personal organisation & public ones
  {
    path: '/org/thehumanhive',
    name: 'my-organisation',
    component: () => import( /* webpackChunkName: "organisation" */ '../views/organisation/My-Organisation.vue'),
    meta: {
      title: 'The Human Five', // TODO: In component change page title
      requiresAuth: true,
    }
  },

  // Single page routes
  {
    path: '/who-we-are',
    name: 'who-we-are',
    component: () => import( /* webpackChunkName: "organisation" */ '../views/Who-we-are.vue'),
    meta: {
      title: 'Who we are',
    }
  },
];



const router = new VueRouter({
  mode: 'history',
  base: process.env.environment === 'development' ? '/' : '/',
  routes
});

router.beforeEach(function (to, from, next) {
  // TODO: Scroll top after pagination also
  window.scrollTo(0, 0)
  const isLogged = (localStorage.getItem('token')) ? true : false;

  if (to.meta.requiresAuth) {

    if (!isLogged) {
      next({
        name: 'login'
      });
    } else {

      if (!isLogged) {
        next({
          name: 'login'
        });
        return
      }
      next();
    }
  } else {
    next();
  }
});

export default router