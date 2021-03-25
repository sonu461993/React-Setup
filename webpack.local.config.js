const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const webpack = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, 'main.js'),
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'local')
    },

    devServer: {
        port: 8001,
        open: true,
        hot: true,
        writeToDisk: true,
        contentBase: 'local'
    },

    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                   
                }

            },
            {
                test: /\.m?jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: 
                    {
                        "presets": ["@babel/preset-env", "@babel/preset-react"],
                        "plugins": ["react-hot-loader/babel"]
                    }
                }

            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /.(jpg|png)/i,
                use: {
                    loader: 'url-loader'
                },
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'fonts/'
                    }
                },
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            'template': path.resolve(__dirname, 'index.html'),
            title: 'Mahadev'
        }),
        new MiniCSSExtractPlugin({
            filename: 'bundle.css',
            chunkFilename: 'bundle.css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: 'src/images', to: 'images'}
              ]
        })
    ]

}

module.exports = (env, args) => {
    return config;
}