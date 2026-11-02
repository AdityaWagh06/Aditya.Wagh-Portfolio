/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        bg: token('bg'),
        surface: token('surface'),
        raised: token('raised'),
        fg: token('fg'),
        muted: token('muted'),
        line: token('line'),
        accent: token('accent'),
        ok: token('ok'),
        warn: token('warn'),
        bad: token('bad'),
      },
      maxWidth: {
        page: '70rem',
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
}
