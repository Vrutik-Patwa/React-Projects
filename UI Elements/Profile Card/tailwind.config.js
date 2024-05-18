/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        Background: "#F4F4F4",
        card: "#FFFFFF",
        cardh: "#4071F4",
      },
    },
  },
  plugins: [],
};
