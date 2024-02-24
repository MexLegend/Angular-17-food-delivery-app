/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#EB0029",
      },
      fontFamily: {
        rubik: "Rubik",
        "lobster-two": "LobsterTwo",
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
