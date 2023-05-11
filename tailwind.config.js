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
        40: "40",
      },
      width: {
        90: "365px",
        570: "570px",
      },
      height: {
        400: "400px",
      },
      brightness: {
        30: ".3",
      },
      transformOrigin: {
        "top-center": "top center",
      },
      keyframes: {
        openNav: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
        closeNav: {
          "0%": {
            transform: "translateX(0px)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
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
        shrinkUp: {
          "0%": {
            transform: "scaleY(1)",
          },
          "100%": {
            transform: "scaleY(0)",
          },
        },
        openModal: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        closeModal: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
      animation: {
        openNav: "openNav 500ms ease-in-out",
        closeNav: "closeNav 500ms ease-in-out",
        growDown: "growDown 500ms ease-in-out",
        growOut: "growOut 300ms ease-in-out",
        shrinkUp: "shrinkUp 500ms ease-in-out",
        openModal: "openModal 700ms forwards",
        closeModal: "closeModal 700ms forwards",
      },
    },
  },
  plugins: [],
}
