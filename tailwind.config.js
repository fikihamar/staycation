/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-variant': '#152C5B',
        'primary': '#2B4CDC',
        'secondary': '#D9D9D9',
        'secondary-variant': '#7B7B7B',
        'cyan': '#1ABC9C',
        'danger': '#EB5757',
        'grey': '#E5E5E5',
        'grey-2': '#BCC3D1',
        'white': '#FFFFFF'

      },
      flex: {
        '60': '60%',
        '50': '50%',
        '40': '40%'
      }
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Poppins', 'serif'],
      body: ['Poppins']
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
