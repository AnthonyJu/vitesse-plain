import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import type { App } from 'vue'

export const router = createRouter({
  routes: setupLayouts(routes),
  history: createWebHashHistory(),
})

const WhiteList: string[] = [] // TODO 路由白名单

router.beforeEach((to, from, next) => {
  if (WhiteList.includes(to.path)) next()
  // TODO 其他路由权限判断
  else next()
})

export default (app: App) => app.use(router)
