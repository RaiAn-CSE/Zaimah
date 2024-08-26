/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'myBg': "url(../../src/assets/mainImg.png)"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

