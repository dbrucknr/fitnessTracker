import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Read',
    component: () => import(/* webpackChunkName: "read" */ '../views/CRUD/Read.vue')
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import(/* webpackChunkName: "create" */ '../views/CRUD/Create.vue')
  },
  {
    path: '/update/:id',
    name: 'Update',
    component: () => import(/* webpackChunkName: "update" */ '../views/CRUD/Update.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // Auth / User Routes:
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/User/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/User/Register.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/User/Profile.vue')
  },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   // lazy-loaded
  //   component: () => import('./views/BoardAdmin.vue')
  // },
  // {
  //   path: '/mod',
  //   name: 'moderator',
  //   // lazy-loaded
  //   component: () => import('./views/BoardModerator.vue')
  // },
  {
    path: '/user',
    name: 'user',
    // lazy-loaded
    component: () => import('../views/userBoard.vue')
  }
]

const router = new VueRouter({
  routes
});

// Handle Unauthorized Access
router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router
