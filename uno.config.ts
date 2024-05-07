// uno.config.ts
import {
  defineConfig, presetAttributify,
  presetTypography, presetUno, presetMini,
  transformerDirectives, transformerVariantGroup
} from 'unocss'

const FormKitVariants = require('@formkit/themes/unocss')

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1344px',
      xxl: '1344px',
    },
    container: {
      center: true,
    },
    fontFamily: {
      // sans: ['Alexandria', 'sans-serif'],
      // serif: ['"Cormorant Garamond"', 'serif'],
      // display: ['"Cormorant Garamond"', "sans-serif"],
      display: ['Kanit', 'sans-serif'],
      body: ['Maitree', 'sans-serif'],
      sans: ['Maitree', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      h1: "clamp(2rem, 3vw + 1rem, 3rem)",
      h2: "clamp(2rem, 3vw + 1rem, 2.5rem)",
      h3: "clamp(1.75rem, 1vw + 1rem, 2rem)",
      h4: "1.25rem",
    },
    fontWeight: {
      light: 200,
      normal: 400,
      bold: 700,
      xbold: 900,
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
      current: "currentColor",
      body: "#8D8381",
      primary: {
        DEFAULT: '#C69400',
        inverse: '#ffffff',
        hover: '#9E7700',
        50: "#FFF7E0",
        100: "#FFF0C2",
        200: "#FFE085",
        300: "#FFD042",
        400: "#FFC105",
        500: "#C69400",
        600: "#9E7700",
        700: "#755800",
        800: "#523D00",
        900: "#291F00"
      },
      secondary: {
        DEFAULT: '#375077',
        inverse: '#ffffff',
        hover: '#7390BF',
        50: "#E7ECF4",
        100: "#D2DBEA",
        200: "#A4B7D5",
        300: "#7390BF",
        400: "#4C6EA4",
        500: "#375077",
        600: "#2C3F5E",
        700: "#202F46",
        800: "#172131",
        900: "#0B1018"
      },
      tertiary: {
        DEFAULT: '#C13185',
        inverse: '#ffffff',
        hover: '#9B276B',
        50: "#FAEBF4",
        100: "#F5D6E8",
        200: "#E9AACF",
        300: "#DF81B8",
        400: "#D4549F",
        500: "#C13185",
        600: "#9B276B",
        700: "#761E51",
        800: "#4D1435",
        900: "#290A1C"
      },
      quarternary: {
        DEFAULT: '#FFC000',
        inverse: '#000000',
        hover: '#E0D7CC',
        50: "#FFF9E5",
        100: "#FFF2CC",
        200: "#FFE699",
        300: "#FFD966",
        400: "#FFCC33",
        500: "#FFC000",
        600: "#CC9900",
        700: "#997300",
        800: "#664D00",
        900: "#332600"
      },
      gray: {
        DEFAULT: '#36362C',
        inverse: '#ffffff',
        hover: '#919178',
        50: "#EDEFF2",
        100: "#DCDFE5",
        200: "#B8BFCB",
        300: "#959FB1",
        400: "#728098",
        500: "#576377",
        600: "#454E5E",
        700: "#343B47",
        800: "#22272F",
        900: "#111418"
      },
    },
    extend: {
      aspectRatio: {
        '9/10': '9 / 10',
      },
    }
  },
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        // 'src/**/*.{js,ts}',
        'formkit-theme.js'
      ],
      // exclude files
      // exclude: []
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetMini(),
    FormKitVariants,
    presetTypography({
      cssExtend: {
        'h1, h2, h3, h4, h5, h6': {
          'color': '#000000',
        },
        'h1': {
          'font-size': 'clamp(3rem, 8vw + 1rem, 3rem)',
        },
        'h2': {
          'font-size': 'clamp(2.25rem, 3vw + 1rem, 2.5rem)',
          'font-weight': 'bold',
          'text-transform': 'uppercase',
        },
        'h3': {
          'font-size': 'clamp(1.75rem, 1vw + 1rem, 2rem)',
        },
        'h4': {
          'font-size': '1.25rem',
        },
        'a': {
          'font-weight': 'inherit',
        },
      }
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})