/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "sky-light": "#F3F6FB",
      coral: "#FF6752",
      "sunset-orange": "#FEB53A",
      "burnt-orange": "#D65C15",
      "azure-blue": "#4487FF",
      "neutral-gray": "#707070",
      "lemon-yellow": "#FFE530",
      "golden-yellow": "#FFCC55",
      "pure-white": "#FFFFFF",
      "azure-blue-light": "#4487FF57",
      "royal-blue-light": "#2C1DAD29",
      "off-white": "#F8F8F8",
      "shadow-gray": "#00000029",
      "medium-gray": "#808080",
      "soft-coral": "#FD68454D",
      "lavender-blue": "#A89EFF",
      "indigo-light": "#3220CE29",
      "vivid-coral": "#FD6845",
      "indigo-muted": "#3220CE80",
      "bright-coral": "#FE6845",
      "dark-gray": "#4D4F5C",
      "soft-gray": "#A4AFB7",
      "deep-blue": "#015F91",
    },
    fontFamily: {
      gibson: ["Gibson", "sans-serif"],
      "open-sans": ["Open Sans", "sans-serif"],
      "museo-sans": ["Museo Sans", "sans-serif"],
      comfortaa: ["Comfortaa", "sans-serif"],
      "segoe-ui": ["Segoe UI", "sans-serif"],
    },
    fontWeight: {
      600: "600",
      400: 400,
      700: 700,
      500: 500,
    },
    fontSize: {
      25: "25px",
    },
    lineHeight: {
      55: "55px",
    },
    boxShadow: {
      input: "2px 3px 4px #00000029",
      button: "0px 3px 6px #2C1DAD29",
    },
    extend: {},
  },
  plugins: [],
};