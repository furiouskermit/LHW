const {VueLoaderPlugin} = require('vue-loader');
const path = require('path');

module.exports = {
    entry: {
        app: path.join(__dirname, 'main.js'),
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/')
        },
        open: true,
        historyApiFallback: true
    },
    watchOptions: {
        poll: true,
        ignored: '/node_modules/',
    },
}