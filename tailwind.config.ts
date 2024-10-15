import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/core/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          850: '#dc0000'
        },
      blue:{
        800:'#0a2b38'
      },
      light:{
        700:"#fae3cf"
      }
      },
    },
  },
  plugins: [],
};
export default config;
