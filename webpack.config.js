var ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack')
module.exports = {
    entry: [
        'bootstrap-loader',
        './app/App.js',
        './sass/app.scss',
    ],
    output: {
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        inline: true,
        contentBase: './',
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    "presets": [
                        ["es2015", {"modules": false, "loose": true} ],
                        "react"
                      ]
                }
            },

            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
                //loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
                //loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }

        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true,
        }),
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       })
    ],

}
