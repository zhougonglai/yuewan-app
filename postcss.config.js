module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 750,
      selectorBlackList: ['.ignore', '.hairlines', /.app-/],
      exclude: [/vant/, /weui/],
      minPixelValue: 10,
      mediaQuery: true
    }
  }
}
