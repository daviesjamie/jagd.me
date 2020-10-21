const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'jagd.js',
        path: path.resolve(__dirname, 'dist'),
    },
};