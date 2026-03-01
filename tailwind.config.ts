import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        dark: '#0b0b0b',
        card: '#0f0f0f',
        border: '#1a1a1a',
        muted: '#555555',
        light: '#777777',
        text: '#e0e0e0',
        white: '#ffffff',
        red: '#cc0000',
        'red-dim': '#880000',
        'red-light': '#ee0000',
        green: '#38a169',
        blue: '#3182ce',
        purple: '#805ad5',
        yellow: '#f6ad55',
      },
      fontFamily: {
        heading: ['Arial', 'sans-serif'],
        body: ['Georgia', 'serif'],
      },
      animation: {
        pulse: 'pulse 2s infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
