const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      gen: path.resolve(__dirname, './gen/'),
      src: path.resolve(__dirname, './src/'),
    },
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.min.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Generate typings for css modules
          '@teamsupercell/typings-for-css-modules-loader',
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
              }
            },
          },
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
              sourceMap: true,
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
