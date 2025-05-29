module.exports = {
  content: [
    "./js/**/*.{html,js}",
    "./css/**/*.{html,css}",
    "./**/*.{html,js}",
    "./node_modules/tw-elements/js/*.js"
  ],
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"
};