const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const ConsoleLogOnBuildWebpackPlugin = require('./custom-plugins/consoleLog');
const path = require('path');
const process = require('process');
console.log('NODE_ENV是：', process.env.NODE_ENV);

const clientConfig = {
  mode: 'development',
  target: 'web',
  entry: './clientWeb/src/index.tsx',
  output: {
    filename: 'bundle.[hash:4].js',
    path: path.resolve('dist')
  },
  devtool: 'source-map', // 打包source-map文件
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: [
          // 'babel-loader',
          'awesome-typescript-loader',
          {
            loader: 'input_origin',
            options: { //给loader的配置写在这里，在loader内可以获取到
              comments: false,
              name: 'JET'
            }
          }
        ],//从右往左调用，左边的输入是右边的输出
      },
      {
        test: /\.scss?$/,
        use: ExtractTextWebpackPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              outputPath: 'images/'
            }
          }
        ]
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ]
  },
  resolveLoader: {
    //告诉webpack该去哪个目录下找loader
    modules: ['node_modules', path.resolve(__dirname, 'custom-loader')]
  },
  externals: {
    // 'react': 'React',
    // 'react-dom': 'ReactDOM'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "public_lib",
          chunks: "all",
          test: /[\\/]node_modules[\\/]/,
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './clientWeb/src/index.html',
      hash: true
    }),
    new CleanWebpackPlugin('dist'),
    new ConsoleLogOnBuildWebpackPlugin({ name: 'JET' }),
    new ExtractTextWebpackPlugin('css/style.css'),
  ],
  // devServer: {
  //   contentBase: './dist',
  //   host: 'localhost',
  //   port: 6699,
  //   open: true,
  //   hot: true
  // }
}

const serverConfig = {
  mode: 'development',
  target: 'node',
  entry: './server/server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  }
}

module.exports = [clientConfig];
