const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      requiresAuth: true
    },
    children: [
      { path: '', component: () => import('../pages/IndexPage.vue') },
      { path: 'page/:id', name: 'page', component: () => import('pages/Page.vue') },
      { path: 'subject/:id', name: 'subject', component: () => import('pages/Subject.vue') },    
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
