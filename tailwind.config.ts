import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: "hsl(0, 100%, 67%)",
          redTransparent: "hsla(0, 100%, 67%, 0.1)",
          yellow: "hsl(39, 100%, 56%)",
          yellowTransparent: "hsl(39, 100%, 56%, 0.1)",
          teal: "hsl(166, 100%, 37%)",
          tealTransparent: "hsl(166, 100%, 37%, 0.1)",
          blue: "hsl(234, 85%, 45%)",
          blueTransparent: "hsl(234, 85%, 45%, 0.1)",
        },
        gradients: {
          slateBlue: "hsl(252, 100%, 67%)",
          royalBlue: "hsl(241, 81%, 54%)",
          violetBlue: "hsla(256, 72%, 46%, 1)",
          persianBlue: "hsla(241, 72%, 46%, 0)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          paleBlue: "hsl(221, 100%, 96%)",
          lavender: "hsl(241, 100%, 89%)",
          grayBlue: "hsl(224, 30%, 27%)",
        },
      },
      boxShadow: {
        custom: "0px 7px 29px 0px hsla(234, 85%, 45%, 0.15)",
      },
    },
  },
  plugins: [],
} satisfies Config;
