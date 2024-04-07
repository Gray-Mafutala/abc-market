/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#008ecc",
        grey: "#666",
        "off-white": "#f5f5f5",
        "blue-light": "#f3f9fb",
        "gray-border": "#ededed",
      },

      fontFamily: {
        "hk-grotesk": ["Hanken Grotesk", "sans-serif"],
      },

      animation: {
        shine: "shine 1.8s linear infinite",
        sloading: "sloading 1.8s infinite",
        successCheckContainer:"successCheckContainer 0.75s ease-out forwards 0.75s",
        successCheckAnimCheck:"successCheckAnimCheck 0.35s forwards 1.25s ease-out",
        successCheckAnimShadow:"successCheckAnimShadow 0.75s ease-out forwards 0.75s",
      },

      keyframes: {
        shine: {
          "0%": { backgroundPosition: "-140px" },
          "40%, 100%": { backgroundPosition: "200px" },
        },

        sloading: {
          to: { backgroundPosition: "600px 0, 0 0, 0 190px, 50px 195px" },
        },

        successCheckContainer: {
          "0%": {
            opacity: "0",
            transform: "scale(0)",
            boxShadow:
              "0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset, 0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset",
          },

          "25%": {
            opacity: "1",
            transform: "scale(0.9)",
            boxShadow:
              "0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset, 0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset",
          },
          "43.75%": {
            transform: "scale(1.15)",
            boxShadow:
              "0px 0px 0px 43.334px rgba(255, 255, 255, 0.25) inset, 0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset",
          },
          "62.5%": {
            transform: "scale(1)",
            boxShadow:
              "0px 0px 0px 0px rgba(255, 255, 255, 0.25) inset, 0px 0px 0px 21.667px rgba(255, 255, 255, 0.25) inset",
          },
          "81.25%": {
            boxShadow:
              "0px 0px 0px 0px rgba(255, 255, 255, 0.25) inset, 0px 0px 0px 0px rgba(255, 255, 255, 0.25) inset",
          },
          "100%": {
            opacity: "1",
            boxShadow:
              "0px 0px 0px 0px rgba(255, 255, 255, 0.25) inset, 0px 0px 0px 0px rgba(255, 255, 255, 0.25) inset",
          },
        },

        successCheckAnimCheck: {
          from: {
            strokeDashoffset: "80",
          },
          to: {
            strokeDashoffset: "0",
          },
        },

        successCheckAnimShadow: {
          "0%": {
            opacity: "0",
            width: "100%",
            height: "15%",
          },
          "25%": {
            opacity: "0.25",
          },
          "43.75%": {
            width: "40%",
            height: "7%",
            opacity: "0.35",
          },
          "100%": {
            width: "85%",
            height: "15%",
            opacity: "0.25",
          },
        },
      },

      screens: {
        mobile: "320px",
        mobileM: "475px",
        mobileL: "580px",
        mobileXL: "640px",
        tablet: "768px",
        tabletM: "896px",
        laptop: "1024px",
        desktop: "1280px",
      },
    },
  },
  plugins: [],
};
