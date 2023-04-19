import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'
import pages from '~pages'

const routes = setupLayouts(pages)

export const router = createRouter({ routes, history: createWebHashHistory() })

export default (app: App) => app.use(router)
