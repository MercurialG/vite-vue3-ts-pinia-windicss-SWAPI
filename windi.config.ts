import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  safelist: 'p-3 p-4 p-5',
  theme: {
    extend: {
      colors: {
        hazel: {
          500: '#594c26'
        },
        teal: {
          100: '#096',
        },
      },
    },
  },
  
})

