/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        banner: "url('/src/assets/img/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
};
