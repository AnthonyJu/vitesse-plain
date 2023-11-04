import type { App } from 'vue'
import piniaPersist from 'pinia-plugin-persistedstate'

// Setup Pinia
// https://pinia.vuejs.org/
const pinia = createPinia()
pinia.use(piniaPersist)

export default (app: App) => app.use(pinia)
