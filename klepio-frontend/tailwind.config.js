module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "klepio-green": "#93E5AB",
      },
      fontFamily: {
        pontiac: ["pontiac_black", "sans-serif"],
        poppins: ["Poppins-Regular","sans-serif"],
      },
      backgroundImage:{
        LandingBG:"url('./assets/nonicons/DesktopLandingBG.png')"
      }
    },
  },
  plugins: [],
};
