/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {},
    screens: {
      "xxs": "298px",
      // => @media (max-width: 524px) { ... }

      "xs": "398px",
      // => @media (max-width: 524px) { ... }
      
      "s": "524px",
      // => @media (max-width: 524px) { ... }

      "sm": "640px",
      // => @media (min-width: 640px) { ... }

      "md": "768px",
      // => @media (min-width: 768px) { ... }

      "lg": "1024px",
      // => @media (min-width: 1024px) { ... }

      "xl": "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
