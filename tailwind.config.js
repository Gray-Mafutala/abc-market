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
      },

      fontFamily: {
        "hk-grotesk": ["Hanken Grotesk", "sans-serif"],
      },

      animation: {
        "shine": "shine 1.8s linear infinite",
      },

      keyframes: {
        shine: {
          "0%": { backgroundPosition: "-140px" },
          "40%, 100%": { backgroundPosition: "200px" },
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
