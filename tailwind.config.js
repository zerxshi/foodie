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
      transformOrigin: {
        "top-center": "top center",
      },
      keyframes: {
        growOut: {
          "0%": {
            transform: "scale(0)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        growDown: {
          "0%": {
            transform: "scaleY(0)",
          },
          "100%": {
            transform: "scaleY(1)",
          },
        },
      },
      animation: {
        growDown: "growDown 300ms ease-in-out",
        growOut: "growOut 300ms ease-in-out",
      },
    },
  },
  plugins: [],
}
