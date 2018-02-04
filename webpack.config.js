const webpack = require('webpack');

module.exports = {
    entry: './src/annict-browser.js',
    output: {
        filename: 'annict.min.js',
        path: __dirname + '/browser',
        libraryTarget: 'var',
        library: 'Annict'
    },
    resolve: {
        extensions: ['*', '.js', '.ts']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(require('./package.json').version),
            BROWSER: true,
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}
