const imageminSvgo = require('imagemin-svgo');
const imageminMozjpeg = require('imagemin-mozjpeg');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.svg/,
        type: 'asset/inline'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin(
      {
        patterns: [
          { from: `${SRC_DIR}/assets/**/**`, to: DIST_DIR},
        ]
      }
    ),
    new ImageminPlugin({
      pngquant: ({quality: 50}), // Set png quality to 50%
      plugins: [
        imageminMozjpeg({quality: 50}), // set jpg / jpeg images to quality 50
        imageminSvgo({name: 'removeViewBox', active: false}), // note below
        /*
        *  SVG files, especially those exported from various editors, usually contain a lot of redundant and useless information.
        *  This can include editor metadata, comments, hidden elements, default or non-optimal values and other stuff that can be safely
        *  removed or converted without affecting the SVG rendering result.
        */
      ],
      bail: false, // Ignore errors on corrupted images
      cache: true, // set cache to true
    })
  ]
};
