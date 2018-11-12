const path = require(`path`),
  merge = require(`webpack-merge`),
  parts = require(`./webpack.parts`),
  webpack = require(`webpack`),
  HtmlWebpackPlugin = require(`html-webpack-plugin`);

  const {HotModuleReplacementPlugin} = webpack;

const publicPath = `/`;

const PATHS = {
  src : path.join(__dirname, `src`),
  dist: path.join(__dirname, `dist`)
};

const commonConfig = {
  entry: [
    path.join(PATHS.src, `js/script.js`),
    path.join(PATHS.src, `css/style.css`),
  ],
  output: {
    path: PATHS.dist,
    filename: `js/script.js`,
    publicPath
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: `babel-loader`
      },
      {
        test: /\.(jpe?g|png|svg|woff|woff2|webp|gif)$/,
        loader: `url-loader`,
        options: {
          limit: 1000,
          context: `./src`,
          name: `[path][name].[ext]`
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise',
      'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    }),
    new HtmlWebpackPlugin({
      template:`./src/index.html`,
      filename: `index.html`
    }),
    new HotModuleReplacementPlugin()
  ]
};

const productionConfig = merge([
  parts.extractCSS()
]);

const developmentConfig = merge([
  {
    devServer: {
      overlay: true,
      contentBase: `./src`,
      hot: true
    }
  },
  parts.loadCSS(),
]);

module.exports = () => {
  if (process.env.NODE_ENV === "production") {
    console.log("building production");
    return merge(commonConfig, productionConfig);
  }
  return merge(commonConfig, developmentConfig);
};
