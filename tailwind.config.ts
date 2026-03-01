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
        dark: '#050505',
        card: '#0a0a0a',
        border: '#1a1a1a',
        muted: '#555555',
        light: '#888888',
        text: '#d0d0d0',
        white: '#ffffff',
        red: '#cc0000',
        'red-dim': '#8b0000',
        'red-light': '#ff0000',
        green: '#2d6b2d',
        blue: '#3182ce',
        purple: '#805ad5',
        yellow: '#8b8b00',
        decay: '#6b6b00',
      },
      fontFamily: {
        heading: ['Georgia', 'Times New Roman', 'serif'],
        body: ["'Courier New'", 'Courier', 'monospace'],
        mono: ["'Courier New'", 'Courier', 'monospace'],
        stencil: ['Arial Black', 'Impact', 'sans-serif'],
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
