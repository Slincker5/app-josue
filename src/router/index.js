import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        requiresAuth: true,
        title: "Inicio | Panel de administracion"
      }
    },
    {
      path: '/crear-enlace',
      name: 'crear-enlace',
      component: () => import('@/views/CrearLinkView.vue'),
      meta: {
        requiresAuth: true,
        title: "Crear Acortador"
      }
    },
    {
      path: '/enlace/:uuid',
      name: 'crear-view',
      component: () => import('@/views/EstadisticaView.vue'),
      meta: {
        requiresAuth: true,
        title: "Estadisticas"
      }
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/LoginView.vue'),
      meta: {
        requiresAuth: false,
        title: "Inicio de sesion"
      }
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/RegisterView.vue'),
      meta: {
        requiresAuth: false,
        title: "Crear Cuenta"
      }
    },
    {
      path: '/:uuid',
      name: 'r',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/RedireccionView.vue'),
      meta: {
        requiresAuth: false,
        title: "Crear Cuenta"
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // Lógica para manejar la autenticación
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!localStorage.getItem('token')) {
      next({
        path: '/login'
      });
      return; // Asegúrate de retornar aquí para evitar que se ejecute el código siguiente
    }
  } else {
    if (to.path === '/register' && localStorage.getItem('token') || to.path === '/login' && localStorage.getItem('token')) {
      next('/');
      return; // Asegúrate de retornar aquí para evitar que se ejecute el código siguiente
    }
  }

  // Lógica para establecer el título
  const pageTitle = to.meta.title;
  if (pageTitle) {
    document.title = pageTitle;
  }

  next();
});

export default router
