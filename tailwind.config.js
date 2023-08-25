/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        blue: {
          "bg-1": "#c2e9fb",
          "bg-2": "#a1c4fd",
        },
        title: "#34355b",
      },
      width: {
        card: "min(428px, 90%)",
      },
      fontFamily: {
        "dm-sans": "DM Sans",
        montserrat: "Montserrat",
      },
    },
  },
  plugins: [],
};
