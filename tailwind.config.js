const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./public/**/*.html",
    "./pages/**/*.{js,jsx,ts,tsx,vue}",
    "./pages/*.{js,jsx,ts,tsx,vue}",
    "./components/**/*.{js,jsx,ts,tsx,vue}",
    "./components/*.{js,jsx,ts,tsx,vue}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
        fuchsia: colors.fuchsia,
        indigo: colors.indigo,
        teal: colors.teal,
        lime: colors.lime,
        orange: colors.orange,
      },
      screens: {
        iphone: { max: "400px" },
        tablet: { max: "1023px" },
        tabletpro: { max: "1285px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
