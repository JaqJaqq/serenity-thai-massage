import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        serenity: {
          ivory: '#fff4df',
          cream: '#f8e5c4',
          linen: '#e7c894',
          gold: '#d3a64c',
          'gold-light': '#f4d98d',
          'gold-dark': '#8b6024',
          bronze: '#7a5635',
          red: '#9b2f3b',
          'red-soft': '#b94d58',
          'red-dark': '#6f202b',
          brown: '#3a2519',
          cocoa: '#62442e',
          charcoal: '#201815',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(58, 37, 25, 0.14)',
        gold: '0 18px 45px rgba(139, 96, 36, 0.24)',
        red: '0 16px 34px rgba(155, 47, 59, 0.22)',
      },
    },
  },
  plugins: [],
} satisfies Config;
