// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ocp': {
          DEFAULT: '#33a02c',
          dark: '#2b8a25'
        }
      }
    },
  },
  plugins: [],
}