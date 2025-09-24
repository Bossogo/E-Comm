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
        'brand': {
          'blue': '#40BFFF',
          'pink': '#FF4858', 
          'light': '#BCDDFE',
          'dark': '#373737'
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'system-ui', 'sans-serif'],
        'proxima': ['Proxima Nova', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}