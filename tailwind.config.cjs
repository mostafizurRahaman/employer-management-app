/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#00235B",
            secondary: "#E21818",
            accent: "#FFDD83",
            info: "#98DFD6",
         },
      },
   },
   plugins: [],
};
