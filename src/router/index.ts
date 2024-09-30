import { createRouter, createWebHistory } from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import MainLayout from "@/layouts/MainLayout.vue";
import {Helpers} from "@/plugins/Helpers";

const modulesFiles = import.meta.glob('@/router/modules/*.ts', { eager: true });

type RouteModule = {
  default: RouteRecordRaw[];
};

const modules: Record<string, RouteRecordRaw[]> = {};

for (const modulePath in modulesFiles) {
  const moduleName = modulePath.replace(/^.*\/([^/]+)\.ts$/, '$1').replace(/-([a-z])/g, g => g[1].toUpperCase());

  const module = modulesFiles[modulePath] as RouteModule;

  if (module && module.default) {
    modules[moduleName] = module.default;
  }
}

const routes: Array<RouteRecordRaw> = [];

for (const moduleKey in modules) {
  const module = modules[moduleKey];
  if (Array.isArray(module)) {
    routes.push(...module);
  } else routes.push(module);
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      children: routes,
    },
    {
      path: '/:catchAll(.*)',
      name: 'catchAll',
      component: MainLayout,
      children: [
        {
          path: '',
          name: '404',
          component: Helpers.lazyload('Error/ErrorView'),
        },
      ],
    },
  ],
})

export default router
