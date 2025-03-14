/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F1B570",
        "gradient-black-blue": "#000",
      },
      backgroundImage: {
        "gradient-black-blue": "linear-gradient(to right, black, #22A0FB)",
      },
    },
  },
  plugins: [],
};
