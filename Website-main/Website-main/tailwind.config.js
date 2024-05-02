module.exports = {
  content: [
    "./pages/*.{html,js,jsx,ts,tsx}",
    "./sections/*.{html,js,jsx,ts,tsx}",
    "./components/**/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          secondary: "#20222A",
          primary: "#0A0A0A",
          teal: "#00A99D",
          lightBg: "#151823",
          light_white: "rgba(255, 255, 255, 0.5)",
          light_white_eight: "rgba(255, 255, 255, 0.8)",
          whiteVar1: "#D9D9D9",
          greenOpt: {
            200: "rgba(0, 169, 157, 0.2)",
          },
          blueOpt: {
            200: "rgba(114, 137, 218, 0.2)",
            1000: "#7289DA",
          },
          black: {
            extraLight: "rgba(0,0,0,0)",
            400: "rgba(0,0,0,0.4)",
            700: "rgb(10,10,10,0.7)",
            dark: "rgba(0,0,0,1)",
          },
          white: {
            500: "rgba(255, 255, 255, 0.05)",
            700: "#A1A1AA",
          },
          lightTeal: "#38D8CC",
          filter: "#D4D4D4",
          filterDropDown: "#E0E0E0",
        },
      },
      boxShadow: {
        "3xl": "0 2px 38px -1px rgba(0, 0, 0, 0.3)",
      },
      animation: {
        leftIn: "leftIn 0.35s ease-out forwards",
        leftOut: "leftOut 0.3s ease-in forwards",
        rightIn: "rightIn 0.35s ease-out forwards",
        rightOut: "rightOut 0.3s ease-in forwards",
        blink: "blink 3s ease-in-out infinite alternate",
        fadeOut: "fadeOut 0.15s ease-in forwards",
        show: "show 1s ease forwards",
        hide: "hide 0.5s ease-in forwards",
        spin: "spin 2s linear infinite",
      },
      keyframes: {
        leftIn: {
          "0%": {
            transform: "translate(195px, 81px)",
            opacity: 0,
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: 1,
          },
        },
        leftOut: {
          "0%": {
            transform: "translate(0, 0)",
            opacity: 1,
          },
          "99%": {
            opacity: 0,
            transform: "translate(-135px, -69px)",
          },
          "100%": {
            opacity: 0,
            transform: "translate(-145px, 80px)",
          },
        },
        rightIn: {
          "0%": {
            transform: "translate(-145px, 80px)",
            opacity: 0,
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: 1,
          },
        },
        rightOut: {
          "0%": {
            transform: "translate(0, 0)",
            opacity: 1,
          },
          "99%": {
            opacity: 0,
            transform: " translate(138px, -66px)",
          },
          "100%": {
            opacity: 0,
            transform: "translate(195px, 81px)",
          },
        },
        blink: {
          "0%": {
            filter: "invert(0)",
          },
          "100%": {
            filter: "invert(1)",
          },
        },
        fadeOut: {
          "0%": {
            opacity: "0",
          },
          "90%": {
            transform: "scale(1.05)",
            opacity: "0.8",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        show: {
          "0%": {
            opacity: "0",
            height: "0",
          },
          "100%": {
            opacity: "1",
            height: "auto",
          },
        },
        hide: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      fontFamily: {
        miligrambold: ["MILIGRAM BOLD"],
        miligramLight: ["MILIGRAM LIGHT"],
        miligramMedium: ["MILIGRAM MEDIUM"],
        battambangMedium: ["BATTAMBANG MEDIUM"],
        battambangBold: ["BATTAMBANG BOLD"],
        miligramText400: ["MILIGRAM TEXT NORMAL"],
        miligramTextBook: ["MILIGRAM TEXT BOOK"],
        miligramTextMedium: ["MILIGRAM TEXT MEDIUM"],
        miligramTextItalic: ["MILIGRAM TEXT ITALIC"],
        miligramTextBold: ["MILIGRAM TEXT BOLD"],
        miligramTextRegular: ["MILIGRAM TEXT REGULAR"],
        miligramTextBookItalic: ["MILIGRAM TEXT BOOK ITALIC"],
        miligramThin: ["MILIGRAM THIN"],
      },
      boxShadow: {
        client: "-1px 0px 73px -20px #00a99d",
      },
    },
    screens: {
      xsm: "300px",
      msm: "340px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
  },
  plugins: [require("autoprefixer")],
};
