
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'Index', component: () => import('pages/IndexPage.vue') },
      { path: '', component: () => import('pages/Abertura.vue') },
      { path: 'Login', component: () => import('pages/Login.vue') },
      { path: 'Cadastro', component: () => import('pages/Cadastro.vue') }
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
