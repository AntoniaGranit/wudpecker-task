/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        90: "40rem",
      },
      colors: {
        "primary-orange": "#FAA84E",
        "darker-orange": "#EC9338",
        "light-grey": "#A4A4A4",
        "lighter-grey": "#bab8b8",
        "lightest-grey": "#F7F7F7",
        "inactive-note": "#FAFAFA",
      },
      borderWidth: {
        1: "1px",
      },
      borderRadius: {
        "4xl": "2.5rem",
      },
      boxShadowColor: {
        primary: "#EBC9A0",
      },
      boxShadow: {
        "3xl": "10px 80px 110px 10px rgb(240, 201, 153, 0.65)",
      },
      backgroundImage: {
        gradient: "radial-gradient(circle at left top, #F9F8E3 , #F9F9F9)",
      },
      fontSize: {
        xxs: ".65rem",
      },
    },
  },
  plugins: [],
};
