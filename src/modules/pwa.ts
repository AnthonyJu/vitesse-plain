import type { App } from 'vue'
import { router } from './router'

// https://github.com/antfu/vite-plugin-pwa#automatic-reload-when-new-content-available
export default (_app: App) => {
  router.isReady()
    .then(async () => {
      const { registerSW } = await import('virtual:pwa-register')
      registerSW({ immediate: true })
    })
    .catch(() => {})
}
