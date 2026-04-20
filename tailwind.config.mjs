/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Bebas Neue'", 'sans-serif'],
        body: ["'DM Sans'", 'sans-serif'],
        mono: ["'JetBrains Mono'", 'monospace'],
      },
      colors: {
        bg: '#070707',
        surface: '#0F0F0F',
        'surface-2': '#161616',
        'surface-3': '#1E1E1E',
        border: '#242424',
        'border-2': '#2E2E2E',
        accent: '#C0C0C0',
        'accent-dim': '#808080',
        text: '#F0EDE8',
        'text-2': '#A09A94',
        'text-3': '#5A5550',
      },
    },
  },
  plugins: [],
};
