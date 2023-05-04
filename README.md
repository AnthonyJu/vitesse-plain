<br>
<p align='center'>
  <img src="https://vitesse-plain.netlify.app/favicon.svg" width="50" alt="vitesse-plain">
  <p align='center'>快速 创建 Web 应用</p>
</p>

<br>

<p align='center'>
  <a href="https://vitesse-plain.netlify.app/">在线 Demo</a>
</p>

<br>

## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [esbuild](https://github.com/evanw/esbuild) - 就是快！

- 🗂 [基于文件的路由](./src/pages)

- 📦 [组件自动化加载](./src/components)

- 🍍 [使用 Pinia 的状态管理](https://pinia.vuejs.org)

- 📑 [布局系统](./src/layouts)

- 🥡 [element plus](https://element-plus.gitee.io/#/zh-CN) 默认 UI 框架

- 🌐 [Axios](https://axios-http.com/) 基于promise的http客户端

- 🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

- 😃 [各种图标集为你所用](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)

- 🤙🏻 默认开启 [响应性语法糖](https://vuejs.org/guide/extras/reactivity-transform.html)

- 📥 [API 自动加载](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 无需引入

- 🦔 使用 [critters](https://github.com/GoogleChromeLabs/critters) 的生成关键 CSS

- 🦾 [TypeScript](https://www.typescriptlang.org/), 当然

- ☁️ [Netlify](https://app.netlify.com/start) 零配置部署

<br>

## 预配置

### UI 框架

- [UnoCSS](https://github.com/antfu/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

### Icons

- [Iconify](https://iconify.design) - 使用任意的图标集，浏览：[🔍Icônes](https://icones.netlify.app/)
- [UnoCSS 的纯 CSS 图标方案](https://github.com/antfu/unocss/tree/main/packages/preset-icons)
### 插件

- [Vue Router](https://github.com/vuejs/router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - 以文件系统为基础的路由
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - 页面布局系统
- [Pinia](https://pinia.vuejs.org) - 直接的, 类型安全的, 使用 Composition API 的轻便灵活的 Vue 状态管理
  - [pinia-plugin-persist](https://seb-l.github.io/pinia-plugin-persist) - pinia 持久化
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - 自动加载组件
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等，无需导入
- [VueUse](https://github.com/antfu/vueuse) - 实用的 Composition API 工具合集
- [`vite-plugin-vue-inspector`](https://github.com/webfansplz/vite-plugin-vue-inspector) - 点击页面元素自动跳转到本地IDE对应的 Vue 组件

### 编码风格

- 使用 Composition API 地 [`<script setup>` SFC 语法](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) 配置为 [@anthony-ju/eslint-config](https://www.npmjs.com/package/@anthony-ju/eslint-config), 单引号, 无分号.
- [Stylelint](https://stylelint.io/) 配置为 [@anthony-ju/stylelint-config](https://www.npmjs.com/package/@anthony-ju/stylelint-config), 采用BEM命名规范

### 开发工具
- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.js.org/) - 快, 节省磁盘空间的包管理器
- [critters](https://github.com/GoogleChromeLabs/critters) - 关键 CSS 生成器
- [Netlify](https://www.netlify.com/) - 零配置的部署
- [VS Code 扩展](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - 自动启动 Vite 服务器
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE 支持
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - 图标内联显示和自动补全
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [StyleLint](https://stylelint.io/)

## 现在可以试试!

> 需要 Node 版本 >=14.18

### GitHub 模板

[使用这个模板创建仓库](https://github.com/antfu/vitesse/generate).

## 清单

使用此模板时，请尝试按照清单正确更新您自己的信息

- [ ] 在 `LICENSE` 中改变作者名
- [ ] 在 `App.vue` 中改变标题
- [ ] 在 `vite.config.ts` 更改主机名
- [ ] 在 `public` 目录下改变favicon
- [ ] 整理 README 并删除路由

紧接着, 享受吧 :)

## 使用

### 开发

只需要执行以下命令就可以在 http://localhost:8080 中看到

```bash
pnpm dev
```

### 构建

构建该应用只需要执行以下命令

```bash
pnpm build
```

然后你会看到用于发布的 `dist` 文件夹被生成。

### 部署到 Netlify

前往 [Netlify](https://app.netlify.com/start) 并选择你的仓库, 一路 `OK` 下去，稍等一下后，你的应用将被创建.

## 感谢巨人

此模板的一些功能灵感来自 [Vitesse](https://github.com/antfu/vitesse) ❤️
