module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      fontFamily: {
        heading: ["Red Hat Display"],
      },
      textColor: {
        primary: "#FA5652",
        secondary: "#035755",
      },
      backgroundColor: {
        primary: "#FB4C47",
        secondary: "#035755",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ["gatsby-plugin-postcss"],
};
