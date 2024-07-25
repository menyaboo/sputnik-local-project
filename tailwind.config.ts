import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {},
    colors: {
      accent: "#009bfd",
      bg: {
        secondary: {
          light: "#f3f3f5",
          dark: "#151515"
        },
        light: "#fdfdfd",
        dark: "#222222"
      },
      primary: {
        light: "#151515",
        dark: "#fdfdfd"
      },
      secondary: {
        light: "#686868",
        dark: "#cacaca"
      }
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    screens: {
      // 'phone-min': '361px',
      // // => @media (min-width: 360px) { ... }
      // 'w-min-540': '540px',
      // // => @media (min-width: 539px) { ... }
      // 'tablet-min': '770px',
      // // => @media (min-width: 769px) { ... }
      // 'laptop-min': '1026px',
      // // => @media (min-width: 1025px) { ... }
      // 'desktop-min': '1281px',
      // // => @media (min-width: 1280px) { ... }
      // 'w-max-540': {'max': '540px'},
      // // => @media (max-width: 540px) { ... }
      // 'phone-max': {'max': '360px'},
      // // => @media (max-width: 360px) { ... }
      // 'pie-diagram-630': {'max': '631px'},
      // // => @media (max-width: 630px) { ... }
      // 'tablet-max': {'max': '769px'},
      // // => @media (max-width: 768px) { ... }
      // 'laptop-max': {'max': '1025px'},
      // // => @media (max-width: 1024px) { ... }
      'desktop-max': {'max': '1290px'},
      // => @media (max-width: 1280px) { ... }
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
