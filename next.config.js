const withPlugins = require('next-compose-plugins')
const lessPlugin = require('@zeit/next-less')
const cssPlugin = require('@zeit/next-css')

// if (typeof require !== 'undefined') {
//   require.extensions['.less'] = (file) => {}
// }

module.exports = withPlugins(
  [
    cssPlugin,
    [
      lessPlugin,
      {
        lessLoaderOptions: {
          javascriptEnabled: true,
        },
      },
    ],
  ],
  {
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
        loader: 'url-loader',
        exclude: [/node_modules/],
      })

      return config
    },
    env: {
      NEXT_APP_API_KEY: '1VQaprBGq5EwRSC4d4l2PyN1q4KWTMIG',
    },
  },
)
