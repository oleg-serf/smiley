import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    /**
     * Main and service routes
     */
    path: '/',
    name: 'home',
    component: () => import( /* webpackChunkName: "web" */ '../views/index.vue'),
    meta: {
      title: 'Home',
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import( /* webpackChunkName: "web" */ '../views/404.vue'),
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
    path: '/members',
    name: 'members',
    component: () => import( /* webpackChunkName: "user" */ '../views/users/index.vue'),
    meta: {
      title: 'Users',
      requiresAuth: true,
    }
  },
  {
    path: '/members/:slug',
    name: 'member',
    component: () => import( /* webpackChunkName: "user" */ '../views/users/_slug.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/member/account-settings',
    name: 'account-settings',
    component: () => import( /* webpackChunkName: "user" */ '../views/user/Edit.vue'),
    meta: {
      title: 'Edit account settings',
      requiresAuth: true,
    }
  },
  {
    path: '/member/feed',
    name: 'feed',
    component: () => import( /* webpackChunkName: "user" */ '../views/user/Feed.vue'),
    meta: {
      title: 'My Feed',
      requiresAuth: true,
    }
  },
  {
    path: '/member/profile',
    name: 'profile',
    component: () => import( /* webpackChunkName: "user" */ '../views/user/index.vue'),
    meta: {
      title: 'My Profile',
      requiresAuth: true,
    }
  },
  {
    path: '/member/profile-new',
    name: 'newProfile',
    component: () => import( /* webpackChunkName: "user" */ '../views/user/newProfile.vue'),
    meta: {
      title: 'My Profile',
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
    path: '/register/step-2',
    name: 'register-2',
    component: () => import( /* webpackChunkName: "auth" */ '../views/auth/Register-Step-2.vue'),
    meta: {
      title: 'Register | Step 2',
    }
  }, {
    path: '/register/step-3',
    name: 'register-3',
    component: () => import( /* webpackChunkName: "auth" */ '../views/auth/Register-Step-3.vue'),
    meta: {
      title: 'Register | Step 3',
    }
  }, {
    path: '/register/step-4',
    name: 'register-4',
    component: () => import( /* webpackChunkName: "auth" */ '../views/auth/Register-Step-4.vue'),
    meta: {
      title: 'Register | Step 4',
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
   * Search
   */
  {
    path: '/search/:keyword',
    name: 'search',
    component: () => import( /* webpackChunkName: "news" */ '../views/Search.vue'),
    meta: {
      title: 'Search results',
    }
  },
  /**
   * Network
   */
  {
    path: '/smiley-network',
    name: 'network',
    component: () => import( /* webpackChunkName: "news" */ '../views/Network.vue'),
    meta: {
      title: 'Network',
    }
  },
  /**
   * Goals
   */
  {
    path: '/goals/',
    name: 'goals',
    component: () => import( /* webpackChunkName: "goals" */ '../views/goals/index.vue'),
    meta: {
      title: 'UN Goals',
    }
  },
  /**
   * Projects
   */
  {
    path: '/projects/',
    name: 'projects',
    component: () => import( /* webpackChunkName: "goals" */ '../views/projects/index.vue'),
    meta: {
      title: 'Projects',
    }
  },
  {
    path: '/projects/:slug',
    name: 'project',
    component: () => import( /* webpackChunkName: "goals" */ '../views/projects/_slug.vue'),
    meta: {
      title: 'project',
    }
  },
  {
    path: '/create/project',
    name: 'create-project',
    component: () => import( /* webpackChunkName: "goals" */ '../views/create/project.vue'),
    meta: {
      title: 'Create project',
      requiresAuth: true,
    }
  },
  {
    path: '/edit/project/:slug',
    name: 'edit-project',
    component: () => import( /* webpackChunkName: "goals" */ '../views/edit/project.vue'),
    meta: {
      title: 'Edit project',
      requiresAuth: true,
    }
  },
  /**
   * News
   */
  {
    path: '/smiley-news',
    name: 'news',
    component: () => import( /* webpackChunkName: "news" */ '../views/news/index.vue'),
    meta: {
      title: 'News',
    }
  },
  {
    path: '/smiley-news/:slug',
    name: 'news-item',
    component: () => import( /* webpackChunkName: "news" */ '../views/news/_slug.vue'),
    meta: {
      breadcrumbs: ['news'],
    }
  },
  // {
  //   path: '/smiley-news/category/:slug',
  //   name: 'news-category-item',
  //   component: () => import( /* webpackChunkName: "news" */ '../views/news/category/_slug.vue'),
  //   meta: {
  //     breadcrumbs: ['news'],
  //   }
  // },
  /**
   * News & Talks on same page
   */
  {
    path: '/goals/:slug',
    name: 'news-category-item',
    component: () => import( /* webpackChunkName: "news" */ '../views/goals/_slug.vue'),
    meta: {
      breadcrumbs: ['news'],
    }
  },
  /**
   * Talks
   */
  {
    path: '/smiley-talks',
    name: 'talks',
    component: () => import( /* webpackChunkName: "talks" */ '../views/talks/index.vue'),
    meta: {
      title: 'Talks',
    }
  },
  {
    path: '/smiley-talks/:slug',
    name: 'event',
    component: () => import( /* webpackChunkName: "talks" */ '../views/talks/_slug.vue'),
    meta: {
      breadcrumbs: ['talks'],
    }
  },
  /**
   * Organisation routes
   */
  {
    path: '/create/organisation',
    name: 'create-organisation',
    component: () => import( /* webpackChunkName: "goals" */ '../views/create/organisation.vue'),
    meta: {
      title: 'Create Organisation',
      requiresAuth: true,
    }
  },
  {
    path: '/edit/organisation',
    name: 'edit-organisation',
    component: () => import( /* webpackChunkName: "organisation" */ '../views/edit/organisation.vue'),
    meta: {
      title: 'Edit Organisation',
      requiresAuth: true,
      // TODO: Add check if user is admin of organisation?
    }
  },
  // {
  //   path: '/organisation/the-human-hive',
  //   name: 'organisations',
  //   component: () => import( /* webpackChunkName: "organisation" */ '../views/organisation/fake_temp.vue'),
  //   meta: {
  //     title: 'Organisations',
  //   }
  // },
  {
    path: '/organisation/:slug',
    name: 'organisation',
    component: () => import( /* webpackChunkName: "organisation" */ '../views/organisations/_slug.vue'),
    meta: {
      breadcrumbs: ['organisations'],
    }
  },
  {
    path: '/organisations',
    name: 'organisations',
    component: () => import( /* webpackChunkName: "organisation" */ '../views/organisations/index.vue'),
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
  {
    path: '/form-kit',
    name: 'uikit',
    component: () => import( /* webpackChunkName: "chat" */ '../views/FormKit.vue'),
    meta: {}
  },
  // Redirects
  {
    path: '/ckdb',
    redirect: {
      name: 'news-item',
      params: {
        slug: 'ckdb'
      }
    }
  },
  {
    path: '/news/:slug',
    redirect: {
      name: 'news-item',
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
  document.body.classList.remove("mobile-menu--opened");
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