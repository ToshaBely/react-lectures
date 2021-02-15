const config = require('./webpack.common').createConfig({
    target: 'server'
});

module.exports = {
  ...config,

  output: {
      ...config.output,
      // libraryTarget: 'commonjs2',
  },

  module: {
      ...config.module,

      rules: [
          ...config.module.rules,

          {
              test: /\.css$/,
              use: 'null-loader'
          }
      ]
  },

  externals: {
      'express': 'commonjs express',
      'react': 'commonjs react',
      'react-dom/server': 'commonjs react-dom/server',
      'react-router': 'commonjs react-router',
      'react-router-dom': 'commonjs react-router-dom'
  },
};
