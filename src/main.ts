import App from './App.vue'

import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/main.scss'
import 'uno.css'

const app = createApp(App)

const modules = import.meta.glob('./modules/*.ts', { eager: true })
Object.values(modules).reverse().forEach((ctx: any) => {
  ctx.default?.(app)
})

app.mount('#app')
