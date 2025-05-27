import { RouterName } from '@of/types'

export default [
  {
    path: '/over-field',
    name: RouterName.OverField,
    component: () => import('@of/layouts/default.vue'),
    children: [
      {
        path: '',
        name: RouterName.OverFieldIndex,
        component: () => import('@of/views/index.vue'),
      }
    ],
  },
]
