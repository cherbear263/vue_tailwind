module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-purple': '#4d2f8b',
      },
      spacing: {
        '72': '18rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
