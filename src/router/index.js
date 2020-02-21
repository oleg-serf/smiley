import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [{
    /**
     * Main and service routes
     */
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home',
    }
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
  /**
   * User pages
   */
  {
    path: '/user/feed',
    name: 'feed',
    component: () => import( /* webpackChunkName: "user" */ '../views/user/Feed.vue'),
    meta: {
      title: 'My Feed',
      requiresAuth: true,
    }
  },
  /**
   * Authorization routes
   */
  {
    path: '/login',
    name: 'login',
    component: () => import( /* webpackChunkName: "auth" */ '../views/auth/Login.vue'),
    meta: {
      title: 'Login',
    }
  }, {
    path: '/register',
    name: 'register',
    component: () => import( /* webpackChunkName: "auth" */ '../views/auth/Register.vue'),
    meta: {
      title: 'Register',
    }
  }, {
    path: '/forgot',
    name: 'forgot',
    component: () => import( /* webpackChunkName: "auth" */ '../views/auth/Forgot.vue'),
    meta: {
      title: 'Forgot password',
    }
  }, {
    path: '/reset',
    name: 'reset',
    component: () => import( /* webpackChunkName: "auth" */ '../views/auth/Reset.vue'),
    meta: {
      title: 'Reset password',
    }
  },
  /**
   * News
   */
  {
    path: '/news',
    name: 'news',
    component: () => import( /* webpackChunkName: "news" */ '../views/News.vue'),
    meta: {
      title: 'News',
    }
  },
  {
    path: '/news/:slug',
    name: 'news-item',
    component: () => import( /* webpackChunkName: "news" */ '../views/News-Single.vue'),
    meta: {
      breadcrumbs: ['news'],
    }
  },
  {
    path: '/news/category/:slug',
    name: 'news-category-item',
    component: () => import( /* webpackChunkName: "news" */ '../views/News-Category.vue'),
    meta: {
      breadcrumbs: ['news'],
    }
  },
  /**
   * Talks
   */
  {
    path: '/talks',
    name: 'talks',
    component: () => import( /* webpackChunkName: "talks" */ '../views/talks/Archive.vue'),
    meta: {
      title: 'Talks',
    }
  },
  {
    path: '/talks/:slug',
    name: 'event',
    component: () => import( /* webpackChunkName: "talks" */ '../views/talks/Single.vue'),
    meta: {
      breadcrumbs: ['talks'],
    }
  },
  /**
   * Organisation routes
   */
  {
    path: '/add-organisation',
    name: 'add-organisation',
    component: () => import( /* webpackChunkName: "organisation" */ '../views/organisation/Add.vue'),
    meta: {
      title: 'Add Organisation',
      requiresAuth: true,
    }
  },
  {
    path: '/edit-organisation',
    name: 'edit-organisation',
    component: () => import( /* webpackChunkName: "organisation" */ '../views/organisation/Edit.vue'),
    meta: {
      title: 'Edit Organisation',
      requiresAuth: true,
      // TODO: Add check if user is admin of organisation?
    }
  },
  {
    path: '/organisation/:slug',
    name: 'organisation',
    component: () => import( /* webpackChunkName: "organisation" */ '../views/organisation/Single.vue'),
    meta: {
      breadcrumbs: ['organisations'],
    }
  },
  {
    path: '/organisations',
    name: 'organisations',
    component: () => import( /* webpackChunkName: "organisation" */ '../views/organisation/Archive.vue'),
    meta: {
      title: 'Organisations',
    }
  },
  /**
   * Content pages
   */
  {
    path: '/our-story',
    name: 'story',
    component: () => import( /* webpackChunkName: "page" */ '../views/Story.vue'),
    meta: {
      title: 'Our story'
    }
  }, {
    path: '/partners',
    name: 'partners',
    component: () => import( /* webpackChunkName: "page" */ '../views/Partners.vue'),
    meta: {
      title: 'Partners',
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
    component: () => import( /* webpackChunkName: "page" */ '../views/Contact.vue'),
    meta: {
      title: 'Contact',
    }
  },
  /**
   * Miscellenous
   */
  {
    path: '/chat',
    name: 'chat',
    component: () => import( /* webpackChunkName: "chat" */ '../views/Chat.vue'),
    meta: {
      title: 'Chat',
      requiresAuth: true,
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