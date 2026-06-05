# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 常用命令

```bash
pnpm dev            # 启动开发服务器，端口默认 8080（在 .env 的 VITE_PORT 中配置）
pnpm build          # 生产构建，输出到 dist/
pnpm build-zip      # 构建并打包为 zip
pnpm preview        # 预览构建结果
pnpm lint           # ESLint 检查并自动修复 src/ 下的 .js/.ts/.vue 文件
pnpm lint:style     # Stylelint 检查并自动修复 src/ 下的 .vue/.scss 文件
pnpm typecheck      # TypeScript 类型检查，不输出编译产物
pnpm up             # 交互式升级所有依赖至最新 major 版本
pnpm sizecheck      # 打开 bundle 体积分析可视化
```

lint-staged 在 pre-commit 时自动运行 Stylelint 和 ESLint，commit-msg 由 `scripts/verify-commit.js` 校验。

## 架构概览

### 模块自动加载

`src/main.ts` 通过 `import.meta.glob('./modules/*.ts', { eager: true })` 自动发现并执行 `src/modules/` 下的所有模块。每个模块 `export default (app: App) => void`，在 app 实例上安装插件/中间件。

模块加载顺序为 `reverse()`（最后匹配的模块先执行），当前模块：
- `router.ts` — 创建 router 实例（hash 模式），注册路由守卫占位
- `pinia.ts` — 安装 Pinia + pinia-plugin-persistedstate
- `nprogress.ts` — 为路由导航附加 NProgress 进度条
- `pwa.ts` — router ready 后注册 PWA 自动更新

### 基于文件的路由 + 布局

- 页面放在 `src/pages/`，由 `unplugin-vue-router`（`vue-router/vite`）自动生成路由
- 布局放在 `src/layouts/`，由 `vite-plugin-vue-layouts` 处理
- 页面通过 `<route>` 自定义块指定布局：

```vue
<route lang="yaml">
meta:
  layout: home
</route>
```

不指定则使用 `default.vue`。布局通过 `setupLayouts(routes)` 与自动路由结合。

### 自动导入

- **API**：`unplugin-auto-import` 自动导入 `vue`、`pinia`、`@vueuse/core`、`vue-router` 的 API，无需手动 import。`src/hooks/`、`src/stores/`、`src/utils/` 下的导出也会自动导入。
- **组件**：`unplugin-vue-components` 自动注册 `src/components/` 下的组件（无需 import），生产环境按需导入 element-plus 组件。

### Element Plus 加载策略

开发环境全量引入（避免编译慢），生产环境通过 `unplugin-element-plus` + `unplugin-vue-components` 的 `ElementPlusResolver` 按需导入（减少包体积）。此策略在 `vite.config.ts` 中通过自定义插件实现。

### 样式系统

- **UnoCSS**：配置在 `uno.config.ts`，使用 `presetUno` + `presetIcons` + `presetAttributify` + `presetTypography`，含自定义 shortcuts 和 rules
- **Sass**：`src/styles/main.scss` 为全局样式入口，`src/styles/element/index.scss` 通过 `additionalData` 自动注入到所有 scss 编译上下文（包含 element 主题覆盖和 dark 模式）
- Icons 通过 UnoCSS `presetIcons` 使用，`autoInstall: true` 会自动安装未下载的图标集

### API 请求

`src/utils/request.ts` 封装了 axios 实例，baseURL 为 `/api`，请求拦截器可用于注入 token，响应拦截器统一处理 401、超时、网络错误，通过 `element-plus` 的 ElMessage 弹出错误提示。

### EventBus

`src/hooks/emitter.ts` 基于 mitt 封装了全局事件总线，扩展了 `once` 和 `emitRes`（带返回值）能力。`useEmitter` hook 自动在 `onActivated`/`onDeactivated`/`onUnmounted` 生命周期管理事件订阅。

### Store

使用 Pinia 的 Composition API 写法（`defineStore` + `setup` 函数），已配置 `pinia-plugin-persistedstate` 实现持久化。Store 文件在 `src/stores/`，支持 HMR（`acceptHMRUpdate`）。

## 路径别名

`@/` → `src/`（在 `tsconfig.json` 和 `vite.config.ts` 中配置）

## 环境变量

`.env` 文件配置了 `VITE_PORT`（开发端口）、`VITE_BASE_URL`（部署路径）、`VITE_API_URL`（API 地址）。vite 代理配置在 `vite.config.ts` 中已注释，需要时取消注释。
