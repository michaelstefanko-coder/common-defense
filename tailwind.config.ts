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
        black: '#0a0a0a',
        dark: '#141414',
        card: '#1a1a1a',
        border: '#2a2a2a',
        muted: '#666666',
        light: '#999999',
        text: '#e0e0e0',
        white: '#f5f5f5',
        red: '#c53030',
        'red-dim': '#9b2c2c',
        'red-light': '#e53e3e',
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
