import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Primary Colors
        "lime-green": "hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        "instagram-from": "hsl(37, 97%, 70%)",
        "instagram-to": "hsl(329, 70%, 58%)",
        youtube: "hsl(348, 97%, 39%)",
        "dark-toggle-from": "hsl(210, 78%, 56%)",
        "dark-toggle-to": "hsl(146, 68%, 55%)",
        "light-toggle": "hsl(230, 22%, 74%)",
        "very-dark-blue": "hsl(230, 17%, 14%)",
        "very-dark-blue-top": "hsl(232, 19%, 15%)",
        "dark-desaturated-blue": "hsl(228, 28%, 20%)", //card
        "desaturated-blue": "hsl(228, 34%, 66%)", //text
        "very-pale-blue-top": "hsl(225, 100%, 98%)",
        "light-grayish-blue": "hsl(227, 47%, 96%)", //card
        "dark-grayish-blue": "hsl(228, 12%, 44%)", //text
        gray: "hsl(230, 19%, 60%)",
      },
    },
  },
  plugins: [],
}
export default config
