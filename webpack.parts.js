const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.extractCSS = () => {
  const extractCSS = new ExtractTextPlugin({
    filename: 'css/style.css'
   });

  return  {
      plugins: [extractCSS],
      module: {
        rules: [
          {
            test: /\.css$/,
            use: extractCSS.extract({
              use: [
                `css-loader`,
                'sass-loader'
              ],
              publicPath: '../'
            })
          }
        ]
      }
    };
}


exports.loadCSS = () => ({
    module: {
      rules: [
        {
          test: /\.css$/,
          use:[
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        }
      ]
    }
})
