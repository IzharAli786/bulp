/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scale: {
        105: "1.05",
        110: "1.10",
      },
      colors: {
        "custom-purple": "#401F71",
      },
      fontFamily: {
        bebas: ["'Bebas Neue'", "sans-serif"],
        dancing: ["'Dancing Script'", "cursive"],
      },
    },
  },
  plugins: [],
};
