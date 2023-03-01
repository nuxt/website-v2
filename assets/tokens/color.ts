import slate from './colors/slate'
import zinc from './colors/zinc'
import emerald from './colors/emerald'

export default {
  color: {
    bg: {
      base: {
        initial: slate[50],
        dark: zinc[800]
      },
      accent: {
        initial: slate[100],
        dark: zinc[900]
      },
      reverse: {
        initial: slate[200],
        dark: zinc[600]
      },
      reverseAccent: {
        initial: slate[300],
        dark: zinc[500]
      }
    },
    border: {
      base: {
        initial: slate[200],
        dark: zinc[700]
      },
      accent: {
        initial: slate[300],
        dark: zinc[600]
      }
    },
    text: {
      base: {
        initial: slate[700],
        dark: zinc[200]
      },
      accent: {
        initial: slate[900],
        dark: zinc[50]
      },
      info: {
        initial: slate[500],
        dark: zinc[400]
      },
    },
    primary: {
      ...emerald
    }
  }
}
