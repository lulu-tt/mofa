/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D2B55",
        gold: "#C8A96E",
        accent: "#E63946",
        dark: "#0A1628",
        surface: "#F8F9FC",
      },
      fontFamily: {
        kr: ["'Noto Sans KR'", "sans-serif"],
        en: ["Inter", "sans-serif"],
      },
      transitionProperty: {
        'base': '0.3s ease',
      }
    },
  },
  plugins: [],
}
