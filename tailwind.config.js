/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        tier: {
          free: '#6B7280',
          silver: '#9CA3AF',
          gold: '#F59E0B',
          platinum: '#8B5CF6'
        }
      },
    },
  },
  plugins: [],
}
