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
        service1: "url('/src/assets/img/services-1.jpg')",
        service2: "url('/src/assets/img/services-2.jpg')",
        service3: "url('/src/assets/img/services-3.jpg')",
        service4: "url('/src/assets/img/services-4.jpg')",
      },
    },
  },
  plugins: [],
};
