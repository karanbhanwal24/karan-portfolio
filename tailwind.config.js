
export default {
  darkMode: ['class'],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: '#101217',
        surface2: '#161b24',
        border: '#2c3442',
        accent: '#4f9dff',
        accentSoft: '#2d5cfd',
      },
      boxShadow: {
        soft: '0 30px 80px rgba(15,23,42,0.35)',
        glow: '0 0 40px rgba(79,157,255,0.16)',
      },
      backgroundImage: {
        'hero-surface': 'radial-gradient(circle at top left, rgba(79,157,255,0.12), transparent 24%), radial-gradient(circle at bottom right, rgba(99,102,241,0.08), transparent 24%)',
      },
    },
  },
  plugins: [],
}
