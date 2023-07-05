/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#7a60d1',

          secondary: '#4790d3',

          accent: '#13a013',

          neutral: '#32273f',

          'base-100': '#2c333f',

          info: '#3991d0',

          success: '#18c3a7',

          warning: '#f8d630',

          error: '#f05157',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
