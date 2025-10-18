module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        chromoPrimary: '#6c5ce7',
        chromoAccent: '#00d4ff',
        chromoDark: '#071030'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto']
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: { themes: false }
}
