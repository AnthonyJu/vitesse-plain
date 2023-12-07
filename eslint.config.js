import antfu from '@antfu/eslint-config'
import { ignores, rules } from '@anthony-ju/eslint-config'

export default antfu(
  {
    rules,
    ignores,
    unocss: true,
    formatters: {
      css: false,
      html: true,
      markdown: true,
    },
  },
)
