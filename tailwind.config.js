/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-variant': '#152C5B',
        'primary': '#2B4CDC',
        'secondary': '#7B7B7B'
      }
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Poppins', 'serif'],
      body: ['Poppins']
    },
    flex: {
      '60': '60%',
      '50': '50%',
      '40': '40%'
    }
  },
  plugins: [
  ],
}
