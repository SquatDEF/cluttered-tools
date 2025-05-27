import overFieldRoutes from '@of/router'
export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
  },
  ...overFieldRoutes
]