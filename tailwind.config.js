/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-100': 'var(--ds-background-100)',
        'background-200': 'var(--ds-background-200)',
        'gray-900': 'var(--ds-gray-900)',
        'gray-1000': 'var(--ds-gray-1000)',
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
