const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/script/modules/mainModule.js',
  output: {
    path: path.resolve(__dirname, './src/script/bundle'),
    filename: 'bundle.js',
  },
  watch: true
};
