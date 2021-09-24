import colors from 'windicss/colors'

export default {
  safelist: 'bg-secondary-darker',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        50: '#F2FDF9',
        100: '#E6FCF3',
        200: '#BFF6E0',
        300: '#99F1CD',
        400: '#4DE7A8',
        DEFAULT: '#00DC82',
        600: '#00C675',
        700: '#00844E',
        800: '#00633B',
        900: '#004227'
      },
      'secondary-surface': '#E5F9FF',
      'secondary-lightest': '#B7E1ED',
      'secondary-lighter': '#95CDDE',
      'secondary-light': '#71A2B0',
      secondary: '#497A87',
      'secondary-dark': '#255461',
      'secondary-darker': '#003543',
      'secondary-darkest': '#012A35',
      'secondary-black': '#001E26',
      tertiary: '#B2CCCC', // cloud
      'cloud-surface': '#E6F0F0',
      'cloud-lightest': '#D1E2E2',
      'cloud-lighter': '#B2CCCC',
      'cloud-light': '#92ADAD',
      cloud: '#688282',
      'cloud-dark': '#566B6B',
      'cloud-darker': '#334040',
      'cloud-darkest': '#273131',
      'cloud-black': '#1A2121',
      black: '#000',
      white: '#fff',
      blue: colors.lightBlue,
      green: {
        // 50: "#eefdf2",
        50: '#d0fcde',
        100: '#b0fccb',
        200: '#8cfab7',
        300: '#64f4a3',
        400: '#37e990',
        500: '#00d77d',
        600: '#00bb6a',
        700: '#009956',
        800: '#047342',
        900: '#134d2e'
        // 950: "#132a1c",
      },
      red: colors.red,
      rose: colors.rose,
      yellow: colors.amber,
      orange: colors.orange,
      gray: colors.gray,
      purple: colors.purple,
      sky: {
        surface: '#E5F9FF',
        lightest: '#B7E1ED',
        lighter: '#95CDDE',
        light: '#71A2B0',
        DEFAULT: '#497A87',
        dark: '#255461',
        darker: '#003543',
        darkest: '#012A35',
        black: '#001E26'
      }
      // 'green-lighter': '#80EEC0',
      // 'green-light': '#40E5A1',
      // green: '#00DC82',
      // 'green-dark': '#00BB6F',
      // 'green-darker': '#009A5B',
      // $colorGreenLighter: #80EEC0;
      // $colorGreenLight: #40E5A1;
      // $colorGreenDefault: #00DC82;
      // $colorGreenDark: #00BB6F;
      // $color-greenDarker: #009A5B;
      // $colorNeutralWhite: #FFFFFF;
      // $colorNeutralBlack: #000000;
      // $colorGreenLighter: #80EEC0;
      // $colorGreenLight: #40E5A1;
      // $colorGreenDefault: #00DC82;
      // $colorGreenDark: #00BB6F;
      // $color-greenDarker: #009A5B;
      // $colorPearLighter: #ECF3AA;
      // $colorPearLight: #E0EB74;
      // $colorPearDefault: #D1E231;
      // $colorPearDark: #BDCE1D;
      // $colorPearDarker: #9CAA18;
      // $colorYellowLighter: #FFF2AC;
      // $colorYellowLight: #FFEC83;
      // $colorYellowDefault: #FFE65A;
      // $colorYellowDark: #D9C34D;
      // $colorYellowDarker: #B3A13F;
      // $colorOrangeLighter: #F9C580;
      // $colorOrangeLight: #F7A840;
      // $colorOrangeDefault: #F48B00;
      // $colorOrangeDark: #CF7600;
      // $colorOrangeDarker: #AB6100;
      // $colorRedLighter: #FFB1A3;
      // $colorRedLight: #FF8B74;
      // $colorRedDefault: #FF6446;
      // $colorRedDark: #D9553C;
      // $colorRedDarker: #B34631;
      // $colorPinkLighter: #FCBBCF;
      // $colorPinkLight: #FB9AB7;
      // $colorPinkDefault: #FA789F;
      // $colorPinkDark: #D56687;
      // $colorPinkDarker: #AF546F;
      // $colorPurpleLighter: #E0B5DF;
      // $colorPurpleLight: #D190CE;
      // $colorPurpleDefault: #C26BBE;
      // $colorPurpleDark: #A55BA2;
      // $colorPurpleDarker: #884B85;
      // $colorIndigoLighter: #80B1E3;
      // $colorIndigoLight: #408BD6;
      // $colorIndigoDefault: #0064C8;
      // $colorIndigoDark: #0055AA;
      // $colorIndigoDarker: #00468C;
      // $colorBlueLighter: #94D5F7;
      // $colorBlueLight: #5EBFF4;
      // $colorBlueDefault: #28AAF0;
      // $colorBlueDark: #2291CC;
      // $colorBlueDarker: #1C77A8;
      // $colorTealLighter: #80F2F2;
      // $colorTealLight: #40EBEB;
      // $colorTealDefault: #00E5E5;
      // $colorTealDark: #00C3C3;
      // $colorTealDarker: #00A0A0;
      // $colorMintSurface: #E7FEFD;
      // $colorMintLightest: #C5EEEC;
      // $colorMintLighter: #A8DDDB;
      // $colorMintLight: #7EB1B0;
      // $colorMintDefault: #558887;
      // $colorMintDark: #2E6160;
      // $colorMintDarker: #003C3C;
      // $colorMintDarkest: #012E2F;
      // $colorMintBlack: #002021;
      // $colorSandSurface: #F5F5EB;
      // $colorSandLightest: #EDEDD5;
      // $colorSandLighter: #DEDEB6;
      // $colorSandLight: #B4B48C;
      // $colorSandDefault: #9C9C6A;
      // $colorSandDark: #636330;
      // $colorSandDarker: #3B3B00;
      // $colorSandDarkest: #2D2E01;
      // $colorSandBlack: #1F2100;
      // $colorCloudSurface: #E6F0F0;
      // $colorCloudLightest: #D1E2E2;
      // $colorCloudLighter: #B2CCCC;
      // $colorCloudLight: #92ADAD;
      // $colorCloudDefault: #688282;
      // $colorCloudDark: #566B6B;
      // $colorCloudDarker: #334040;
      // $colorCloudDarkest: #273131;
      // $colorCloudBlack: #1A2121;
      // $colorStoneSurface: #F6F6F6;
      // $colorStoneLightest: #D4D4D4;
      // $colorStoneLighter: #B2B2B2;
      // $colorStoneLight: #909090;
      // $colorStoneDefault: #6E6E6E;
      // $colorStoneDark: #4C4C4C;
      // $colorStoneDarker: #2A2A2A;
      // $colorStoneDarkest: #191919;
      // $colorStoneBlack: #080808;
    },
    extend: {
      fontFamily: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono'
      },
      transitionProperty: {
        height: 'height'
      }
    }
  },
  shortcuts: {
    'nuxt-text-highlight': 'py-2 px-4 rounded-md bg-gray-100 dark:bg-white dark:bg-opacity-10',
    'nuxt-text-highlight-hover': 'nuxt-text-highlight dark:hover:bg-opacity-9 light:hover:bg-gray-50',
    'text-display-6': {
      fontSize: '1.875rem',
      lineHeight: '2.25rem'
    },
    'text-display-5': {
      fontSize: '2.25rem',
      lineHeight: '2.5rem'
    },
    'text-display-4': {
      fontSize: '3rem',
      lineHeight: '3rem'
    },
    'text-display-3': {
      fontSize: '3.75rem',
      lineHeight: '3.75rem'
    },
    'text-display-2': {
      fontSize: '4.5rem',
      lineHeight: '4.5rem'
    },
    'text-display-1': {
      fontSize: '6rem',
      lineHeight: '6rem'
    },
    'text-body-xs': {
      fontSize: '0.75rem',
      lineHeight: '1rem'
    },
    'text-body-sm': {
      fontSize: '0.875rem',
      lineHeight: '1.25rem'
    },
    'text-body-base': {
      fontSize: '1rem',
      lineHeight: '1.5rem'
    },
    'text-body-lg': {
      fontSize: '1.125rem',
      lineHeight: '1.75rem'
    },
    'text-body-xl': {
      fontSize: '1.25rem',
      lineHeight: '1.75rem'
    },
    'text-body-2xl': {
      fontSize: '1.5rem',
      lineHeight: '2rem'
    }
  }
}
