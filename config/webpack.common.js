const paths = require('./paths')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // extract css to files
// const tailwindcss = require('tailwindcss')
// const autoprefixer = require('autoprefixer') // help tailwindcss to work

const deps = require('../package.json').dependencies

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + '/index.js'],

  // Where webpack outputs the assets and bundles
  // output: {
  //   path: paths.build,
  //   filename: '[name].bundle.js',
  //   publicPath: '/',
  // },
  output: {
    publicPath: 'http://localhost:8080/',
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.src + '/assets',
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
        },
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'Project Title',
      favicon: paths.src + '/assets/icons/favicon.png',
      template: paths.public + '/index.html', // template file
      filename: 'index.html', // output file
    }),

    new ModuleFederationPlugin({
      name: 'twds',
      library: { type: 'var', name: 'twds' },
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './Avatar': paths.src + '/components/avatar/index.jsx',
        './Badge': paths.src + '/components/badge/index.jsx',
        './HeroIcon': paths.src + '/components/heroicon/index.jsx',
        './Input': paths.src + '/components/input/index.jsx',
        './Modal': paths.src + '/components/modal/index.jsx',
        './ModalHeader': paths.src + '/components/modal/header.jsx',
        './ModalContent': paths.src + '/components/modal/content.jsx',
        './ModalFooter': paths.src + '/components/modal/footer.jsx',
        './Popper': paths.src + '/components/popper/index.jsx',
        './Tab': paths.src + '/components/tabs/index.jsx',
        './TimePicker': paths.src + '/components/timepicker/index.jsx',
        './MainWrapper': paths.src + '/components/mainwrapper/index.jsx',
        './CheckboxGroup': paths.src + '/components/checkboxgroup/index.jsx',
        './Seperator': paths.src + '/components/seperator/index.jsx',
        './Menu': paths.src + '/components/menu/index.jsx',
        './Drawer': paths.src + '/components/drawer/index.jsx',
        './Box': paths.src + '/components/box/index.jsx',
        './StackX': paths.src + '/components/stackX/index.jsx',
        './StackY': paths.src + '/components/stackY/index.jsx',
        './Table': paths.src + '/components/table/index.jsx',

        // HOOKS
        './useDisclosure': paths.src + '/hooks/useDisclosure.jsx',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },

      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(css|scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader',
          // {
          //   loader: 'postcss-loader', // postcss loader needed for tailwindcss
          //   options: {
          //     postcssOptions: {
          //       ident: 'postcss',
          //       plugins: [tailwindcss, autoprefixer],
          //     },
          //   },
          // },
        ],
      },

      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|)$/, type: 'asset/inline' },
    ],
  },
}
