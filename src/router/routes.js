const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/IndexPage.vue'), meta: { requiresAuth: true } },
      { path: 'page/:id', name: 'page', component: () => import('pages/Page.vue'),  meta: { requiresAuth: true } },
      { path: 'subject/:id', name: 'subject', component: () => import('pages/Subject.vue'),  meta: { requiresAuth: true } },
      { path: '/responsible', component: () => import('src/pages/Responsible.vue'), meta: { requiresAuth: true } },
      { path: '/executors', component: () => import('src/pages/Executors.vue'), meta: { requiresAuth: true } },
    ]
  },
  {
    path: '/',
    component: () => import('src/layouts/AuthLayout.vue'),
    children: [
      { path: "signin", component: () => import("pages/SignIn.vue") }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
