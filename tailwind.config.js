/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#1B1D23",
        gray: "#60636D",
      },
    },
  },
  plugins: [],
};
