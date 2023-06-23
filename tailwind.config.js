/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '400px',
      },
      fontFamily: {
        Josefin: ["Josefin Sans", "sans-serif"],
        Slackside: ["Slackside One", "cursive"]
      },
      fontSize: {
        '10xl': ['12rem', {
          lineHeight: '12rem',
          letterSpacing: '-0.6rem'
        }]
      },
      letterSpacing: {
        title: '0.6rem',
        text: '0.15rem'
      },
      minHeight: {
        '1/2': '50vh',
      },
      spacing: {
        '30': '120px',
      },
      animation: {
        spinText: "spin 60s linear infinite;"
      },
      height: {
        '100': '600px',
      }
    },
  },
  plugins: [],
}
