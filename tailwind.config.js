module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { backgroundImage: {
      'hero-pattern': "url('/images/img1.jpg')",
      'footer-texture': "url('/img/footer-texture.png')",
    }},
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
        center: true,
      },
    },
  },
  plugins: [],
}