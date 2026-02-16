import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#FF85D1',
          'pink-light': '#FFB8E6',
          'pink-dark': '#E060B0',
          yellow: '#FFF205',
          'yellow-light': '#FFF9C4',
          cream: '#FFDAB9',
          black: '#1a1a1a',
          white: '#FFFFFF',
          gray: '#555',
          'gray-light': '#999',
        },
      },
      fontFamily: {
        sans: ['var(--font-nunito)', 'Nunito', 'sans-serif'],
      },
      borderRadius: {
        brand: '14px',
        pill: '28px',
      },
    },
  },
  plugins: [],
}
export default config
