/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-green": "#b0c364",
      },
      textIndent: {
        999: "999px",
      },
      zIndex: {
        2: "2",
      },
      width: {
        90: "365px",
      },
      brightness: {
        30: ".3",
      },
    },
  },
  plugins: [],
}
