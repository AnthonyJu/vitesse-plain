import antfu from '@antfu/eslint-config'
import { ignores, rules } from '@anthony-ju/eslint-config'

export default antfu(
  {
    ignores,
    unocss: true,
    formatters: true,
  },
  {
    rules,
  },
)
