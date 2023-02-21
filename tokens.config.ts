import { defineTheme } from 'pinceau'
import colorTokens from './assets/tokens/color'
import fontTokens from './assets/tokens/font'
import spaceTokens from './assets/tokens/space'
import colorUtils from './assets/utils/color'
import containerUtils from './assets/utils/container'
import flexUtils from './assets/utils/flex'
import fontUtils from './assets/utils/font'

export default defineTheme({
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)'
  },
  ...colorTokens,
  ...fontTokens,
  ...spaceTokens,
  utils: {
    ...colorUtils,
    ...containerUtils,
    ...flexUtils,
    ...fontUtils
  },
})
