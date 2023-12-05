import antfu from '@antfu/eslint-config'
import ant_ju from '@anthony-ju/eslint-config'

export default antfu(
  {
    unocss: true,
    ...ant_ju,
  },
)
