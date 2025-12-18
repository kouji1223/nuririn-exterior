/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './**/*.{js,ts,jsx,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c'
        },
        secondary: {
          50: '#f9fafb',
          100: '#f3f4f6',
          500: '#6b7280',
          800: '#1f2937',
          900: '#111827'
        }
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Arial', '"Hiragino Kaku Gothic ProN"', '"Hiragino Sans"', 'Meiryo', 'sans-serif']
      }
    }
  },
  plugins: []
}
