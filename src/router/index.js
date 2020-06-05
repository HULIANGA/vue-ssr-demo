import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export function createRouter() {
  const routes = [
    {
      path: '/',
      redirect: '/list'
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../Page/Detail.vue'), // 异步路由
      children: [
        {
          path: '/detail1',
          name: 'detailFir',
          component: () => import('../Page/DetailFir.vue') // 异步路由
        },
        {
          path: '/detail2',
          name: 'detailSec',
          component: () => import('../Page/DetailSec.vue') // 异步路由
        }
      ]
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../Page/List.vue') // 异步路由
    }
  ];

  const router = new Router({
    mode: 'history',
    routes
  });

  return router;
}