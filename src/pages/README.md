## File-based Routing

路由将自动为该目录中具有相同文件结构的Vue文件生成。
查看 [`unplugin-vue-router`](https://github.com/posva/unplugin-vue-router) for more details.

### Path Aliasing

`@/` 的别名指向 `./src/` 文件夹.

例如，之前是这样

```ts
import { isDark } from '../../../../composables'
```

现在，你可以使用

```ts
import { isDark } from '@/composables'
```
