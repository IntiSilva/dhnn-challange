/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'aeronex': '#0451DD'
      },
      screens: {
        "xxl": "1366px",
      },
      backgroundImage: {
        'hero-background': "url('../../public/Image1.jpg')"
      }
    },
  },
  plugins: [],
}
