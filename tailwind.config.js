/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './storyblok/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#0A0A0A',
      grey: {
        1: '#566470',
        2: '#96A6B5',
        4: '#D0DAE3',
        5: '#ECF1F5'
      },
      turquoise: {
        dark: '#1F7A80',
        light: '#00F0FF'
      },
      green: {
        dark: '#1F8028'
      },
      yellow: {
        dark: '#805F1F'
      },
      red: {
        dark: '#801F1F'
      },
      pink: {
        dark: '#801F76'
      },
      purple: {
        dark: '#2C1F80'
      },
      blue: {
        dark: {
          DEFAULT: '#1F4B80',
          lighter: '#252F37',
          deep: '#111517'
        }
      },
      white: '#FFFFFF'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        lg: '0'
      }
    },
    extend: {
      screens: {
        print: { raw: 'print' }
      },
      typography: theme => ({ // for .prose children
        DEFAULT: {
          css: {
            color: 'inherit',
            a: {
              color: theme('colors.turquoise.light'),
              'text-decoration': 'none',
              '&:hover': {
                'text-decoration': 'underline'
              }
            }
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addComponents, addVariant }) {
      addVariant('only-mobile', "@media screen and (max-width: theme('screens.sm'))")
      addComponents({
        '.container': {
          maxWidth: '100%',
          paddingInline: '1.5rem',
          '@screen sm': {
            maxWidth: '640px'
          },
          '@screen md': {
            maxWidth: '1080px'
          },
          '@screen lg': {
            maxWidth: '1080px'
          },
          '@screen xl': {
            maxWidth: '1080px'
          }
        }
      })
    })
  ]
}
