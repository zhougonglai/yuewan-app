module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      selectorBlackList: ['.ignore', '.hairlines', /.app-/],
      exclude: [/vant/],
      minPixelValue: 10,
      mediaQuery: true
    }
  }
}
