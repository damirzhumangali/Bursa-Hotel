/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C1810',
        accent: '#D4956A',
        bg: '#FAF7F4',
        text: '#1C1C1C',
        muted: '#7A6A62',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'dm': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
