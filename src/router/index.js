import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/basic-table',
      name: 'basic-table',
      component: () => import('@/views/basic-table.vue'),
      title: '基础表格',
    },
    {
      path: '/multiheader-table',
      name: 'multiheader-table',
      component: () => import('@/views/multiheader-table.vue'),
      title: '多级表头的表格',
    },
  ],
});

export default router;
