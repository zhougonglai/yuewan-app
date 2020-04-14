// import path from 'path'

const config = {
  mode: 'universal',
  modern: true,
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '//at.alicdn.com/t/font_1461110_lohwkqkqj1.css'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdn.bootcss.com/normalize/8.0.1/normalize.min.css'
      }
    ],
    script: [
      {
        src: '//at.alicdn.com/t/font_1750089_3lmriaa6v6e.js'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['weui', '~/css/global.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/weui', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  server: {
    host: '0.0.0.0' // default: localhost
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // const theme = path.join(__dirname, './css/theme.less')
      // config.module.rules.push({
      //   test: /\.less$/,
      //   use: [
      //     {
      //       loader: 'less-loader',
      //       options: {
      //         modifyVars: {
      //           hack: `true; @import "${theme}";`
      //         }
      //       }
      //     }
      //   ]
      // })
    }
  }
}

// export default config
// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = config
