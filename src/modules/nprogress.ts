import type { App } from 'vue'
import NProgress from 'nprogress'
import { router } from './router'

// https://github.com/rstacruz/nprogress
export default (_app: App) => {
  router.beforeEach(() => {
    NProgress.start()
  })
  router.afterEach(() => {
    NProgress.done()
  })
}
