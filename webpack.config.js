const webpack = require('webpack');

module.exports = {
	mode: 'production',
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
        rules: [
            { test: /\.ts$/, use: 'ts-loader' }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(require('./package.json').version),
            BROWSER: true,
        }),
    ]
};
