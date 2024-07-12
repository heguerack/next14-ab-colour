/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '350px',
      sm: '400px',
      md: '600px',
      lg: '800px',
      xl: '1000px',
      '2xl': '1200px',
      '3xl': '1400px',
      '4xl': '1800px',
      '5xl': '2200px',
      '6xl': '2500px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        greenWhite: '#f8faf9',
        greenSuperLight: '#cbd9d2',
        // greenSuperLight: '#baccc3',
        greenLighter: '#97b3a6',
        greenLight: '#759988',
        green: '#52806a',
        greenDark: '#426655',
        greenDarker: '#314d40',
        greensupeDark: '#21332a',
        greenBlack: '#192620;',
        gray1: '#ededed',
      },
    },
  },
  plugins: [],
}
