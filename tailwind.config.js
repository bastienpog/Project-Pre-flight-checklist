/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend : {
    colors: {
      customBlue: "#26547C",
      customRed: "#EF476F",
      customYellow: "#FFD166",
      white :'#FFFFFF'
    },
  },
},
  plugins: [],
};
