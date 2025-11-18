/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7f4',
          100: '#b3e8df',
          200: '#80d9ca',
          300: '#4dcab5',
          400: '#1abba0',
          500: '#00A67E', // Main brand color
          600: '#008f6b',
          700: '#007858',
          800: '#006145',
          900: '#004a32',
        },
        dark: {
          900: '#0a1929',
          800: '#1a2332',
          700: '#2a3442',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
