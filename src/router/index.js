import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/sign-in',
      component: () => import('../views/SignIn.vue')
    },
    {
      path: '/dashboard',
      component: () => import('../views/Dashboard.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/feed',
      component: () => import('../views/Feed.vue'), 
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)) {
    if(await getCurrentUser()) {
      next();
    } else {
      alert("You dont have access to this page");
      next("/");
    }
  }
  else {
    next();
  }
});
export default router
