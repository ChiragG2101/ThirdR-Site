/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        gray: {
          200: "#181422",
          300: "#111",
          400: "rgba(24, 20, 34, 0.01)",
          500: "#2c2b2b",
          600: "rgba(255, 255, 255, 0.5)",
        },
        lightpink: "#ffb8af",
        salmon: {
          100: "#fe715f",
          200: "#f37160",
        },
        cadetblue: "#80c0c0",
        teal: {
          100: "#0b8082",
          200: "#008082",
          300: "#008081",
        },
        lightblue: "#c4e9fa",
        skyblue: {
          100: "#88d3f5",
          200: "#89d2f4",
        },
        navajowhite: "#ffd4a7",
        sandybrown: {
          100: "#fea94f",
          200: "#faa850",
        },
        darkslategray: {
          100: "#444",
          200: "#2e2e2e",
          400: "rgba(68, 68, 68, 0)",
        },
        mistyrose: "rgba(251, 216, 211, 0.5)",
        powderblue: "rgba(185, 220, 220, 0.5)",
        blanchedalmond: "rgba(253, 231, 207, 0.5)",
        aliceblue: "rgba(230, 244, 253, 0.5)",
        lightskyblue: "#7dd3f9",
        turquoise: "#1de8d8",
        paleturquoise: "#bdfcff",
        orangered: "#ff5900",
        crimson: "#e32a2a",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      fontFamily: {
        thicccboi: "THICCCBOI",
      },
      borderRadius: {
        xl: "20px",
        "12xs-5": "0.5px",
        smi: "13px",
        mini: "15px",
        "3xs": "10px",
        "96xl": "115px",
      },
    },
    fontSize: {
      "3xl": "22px",
      lg: "18px",
      base: "16px",
      sm: "14px",
      xs: "12px",
      "17xl": "36px",
      "11xl": "30px",
      "53xl": "72px",
      "5xl": "24px",
      "37xl": "56px",
      "7xl": "26px",
      xl: "20px",
      "9xl": "28px",
      "29xl": "48px",
    },
    screens: {
      lg: {
        max: "1536px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "480px",
      },
      mq350small: {
        raw: "screen and (max-width: 350px)",
      },
      mq1700: {
        raw: "screen and (max-width: 1700px)",
      },
      mq1536: {
        raw: "screen and (max-width: 1536px)",
      },
      mq1380: {
        raw: "screen and (max-width: 1380px)",
      },
      mq1280: {
        raw: "screen and (max-width: 1280px)",
      },
      mq1012: {
        raw: "screen and (max-width: 1012px)",
      },
      mq840: {
        raw: "screen and (max-width: 840px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq960: {
        raw: "screen and (max-width: 960px)",
      },
      mq480: {
        raw: "screen and (max-width: 480px)",
      },
      mq22: {
        raw: "screen and (max-width: 1150px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
