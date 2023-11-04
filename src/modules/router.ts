import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'
import pages from '~pages'

const routes = setupLayouts(pages)

export const router = createRouter({ routes, history: createWebHashHistory() })

const WhiteList: string[] = [] // TODO 路由白名单

router.beforeEach(async (to, from, next) => {
  if (WhiteList.includes(to.path)) next()
  // TODO 其他路由权限判断
  else next()
})

export default (app: App) => app.use(router)
