## Layouts

此目录中的Vue组件用作布局。

默认情况下，将使用“default.vue”，除非在路由元数据中指定了替代选项。

结合 [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) 和 [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts),您可以在页面的SFC中指定布局，如下所示：

```vue
<route lang="yaml">
meta:
  layout: home
</route>
```
