/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: {
        "sm": "576px",
        "md": "768px",
        "lg": "992px",
        "2xl": "1140px"
      },
    },
    extend: {
      backgroundImage: {
        "hero-bg": "url('/public/assets/images/webp/hero-bg.webp')",
      },
        colors: {
        'sky-blue': '#32C7F1',
        'dark-blue'  : '#01000B',
        'light-pink' : '#B3B2B6'
      }
    },
  },
  plugins: [],
};

